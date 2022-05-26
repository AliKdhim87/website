import { Nav, NavProps, Main, MainWrapper, Footer, SEO, SEOProps } from '@/components/global';
import type { Maybe } from 'generated/graphql';

export interface LayoutProps extends SEOProps {
  nav?: NavProps;
  footer?: Maybe<string>;
  children: React.ReactNode;
}

export const Layout = ({ nav, seo, children, footer, schemaOrg }: LayoutProps) => (
  <>
    <SEO seo={seo} schemaOrg={schemaOrg} />
    <MainWrapper>
      {nav && <Nav {...nav} />}
      <Main>{children}</Main>
      <Footer copyright={footer} />
    </MainWrapper>
  </>
);
