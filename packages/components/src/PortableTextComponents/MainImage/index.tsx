import { getImageDimensions } from '@sanity/asset-utils';
import urlBuilder from '@sanity/image-url';
import Image from 'next/image';

type ImageValue = {
  asset: {
    _ref: string;
  };
  alt: string;
};
interface MainImageProps {
  value?: ImageValue;
  projectId?: string;
  dataset?: string;
}
export const MainImage = ({ dataset, value, projectId }: MainImageProps) => {
  if (projectId && dataset && value) {
    const { width, height } = getImageDimensions(value);
    const imageUrl = urlBuilder({ projectId, dataset })
      .image(value.asset._ref)
      .width(800)
      .fit('max')
      .auto('format')
      .url();

    return (
      <Image
        loading="eager"
        src={imageUrl}
        alt={value.alt}
        width={width}
        height={height}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    );
  }
  return null;
};
