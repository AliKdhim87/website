import { Maybe, Navigation } from "generated/graphql";

export const createNavData = (data: Maybe<Navigation> | undefined) => {

    const navLinks = data?.items?.map((item) => {
        return { href: item?.route, text: item?.title };
    });

    const logo = {
        src: data?.logo?.asset?.url,
        width: data?.logo?.asset?.metadata?.dimensions?.width,
        height: data?.logo?.asset?.metadata?.dimensions?.height,
        alt: data?.logo?.alt,
    };
    return {
        navLinks,
        logo,
    }
}