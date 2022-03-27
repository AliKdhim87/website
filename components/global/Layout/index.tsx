import Head from 'next/head';

import { Nav, NavProps } from '../Nav';
import { Main, MainWrapper } from '../Main/index';
import { Footer } from '../Footer';
import { Maybe, OpenGraph } from 'generated/graphql';

interface LayoutProps {
  nav?: NavProps;
  seo?: Maybe<OpenGraph>;
  footer?: Maybe<string>;
  children: React.ReactNode;
}

export const Layout = ({ nav, seo, children, footer }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.description || ''} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainWrapper>
        {nav && <Nav {...nav} />}
        <Main>{children}</Main>
        <Footer copyright={footer} />
      </MainWrapper>
    </>
  );
};
