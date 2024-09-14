import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

import type { CardProps } from '../Card';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { PortableTextComponents } from '../PortableTextComponents';
import type { PortableTextConfigProps } from '../PortableTextComponents';

export type MoreAboutItem = CardProps;

export interface MoreAboutProps extends PortableTextConfigProps {
  value?: any;
}
// TODO improve this component to be also used in the blog page
// Create ContentPage component to handle the spacing
export const MoreAbout = forwardRef<HTMLDivElement, PropsWithChildren<MoreAboutProps>>(
  ({ value, dataset, projectId }, ref: ForwardedRef<HTMLDivElement>) => (
    <section ref={ref}>
      <Container>
        <Grid container justifyContent="center">
          <Grid item md={10}>
            {value && <PortableTextComponents value={value} dataset={dataset} projectId={projectId} />}
          </Grid>
        </Grid>
      </Container>
    </section>
  ),
);
MoreAbout.displayName = 'MoreAbout';
