import { ForwardedRef, HTMLAttributes, PropsWithChildren, forwardRef } from 'react';

import classnames from 'classnames/bind';
import Link from 'next/link';
import slugify from 'slugify';

import styles from './styles.module.scss';
import { Anchor } from '../Anchor';
import { Details } from '../Details';
import { useWindowSize } from '../hooks/useWindowSize';
import { List } from '../List';
import { ListItem } from '../ListItem';

export interface HeadingBase {
  level: string;
  id: string;
  textContent: string;
}

export interface HeadingH6 extends HeadingBase {
  level: 'h6';
  nestedH6?: HeadingH6[];
}

export interface HeadingH5 extends HeadingBase {
  level: 'h5';
  nestedH6?: HeadingH6[];
}

export interface HeadingH4 extends HeadingBase {
  level: 'h4';
  nestedH5?: HeadingH5[];
}

export interface HeadingH3 extends HeadingBase {
  level: 'h3';
  nestedH4?: HeadingH4[];
}

export interface HeadingH2 extends HeadingBase {
  level: 'h2';
  nestedH3?: HeadingH3[];
}

export type Heading = HeadingH2 | HeadingH3 | HeadingH4 | HeadingH5 | HeadingH6;

export type HeadingsArray = HeadingH2[];

interface TOCProps extends HTMLAttributes<HTMLElement> {
  toc?: HeadingsArray;
  label: string;
}
const cx = classnames.bind(styles);
export const TOC = forwardRef(
  ({ toc, label, ...restProps }: PropsWithChildren<TOCProps>, ref: ForwardedRef<HTMLElement>) => {
    const isToc = toc && Array.isArray(toc);
    const { width } = useWindowSize();
    const smallScreen = width ? width < 960 : false;

    return isToc ? (
      <Details label={label} className={cx('toc')} open={!smallScreen} icon={smallScreen}>
        <nav ref={ref} {...restProps}>
          <List className={cx('toc__list')}>
            {toc.map((item) => (
              <ListItem key={item.id}>
                <Anchor Link={Link} href={`#${slugify(item.textContent, { lower: true })}`} className={cx('toc__link')}>
                  {item.textContent}
                </Anchor>
                {item.nestedH3 && (
                  <List className={cx('toc__list-nested')}>
                    {item.nestedH3.map((h3) => (
                      <ListItem key={h3.id}>
                        <Anchor
                          Link={Link}
                          href={`#${slugify(h3.textContent, { lower: true })}`}
                          className={cx('toc__link')}
                        >
                          {h3.textContent}
                        </Anchor>
                        {h3.nestedH4 && (
                          <List className={cx('toc__list-nested')}>
                            {h3.nestedH4.map((h4) => (
                              <ListItem key={h4.id}>
                                <Anchor
                                  Link={Link}
                                  href={`#${slugify(h4.textContent, { lower: true })}`}
                                  className={cx('toc__link')}
                                >
                                  {h4.textContent}
                                </Anchor>
                                {h4.nestedH5 && (
                                  <List className={cx('toc__list-nested')}>
                                    {h4.nestedH5.map((h5) => (
                                      <ListItem key={h5.id}>
                                        <Anchor
                                          Link={Link}
                                          href={`#${slugify(h5.textContent, { lower: true })}`}
                                          className={cx('toc__link')}
                                        >
                                          {h5.textContent}
                                        </Anchor>
                                        {h5.nestedH6 && (
                                          <List className={cx('toc__list-nested')}>
                                            {h5.nestedH6.map((h6) => (
                                              <ListItem key={h6.id}>
                                                <Anchor
                                                  Link={Link}
                                                  href={`#${slugify(h6.textContent, { lower: true })}`}
                                                  className={cx('toc__link')}
                                                >
                                                  {h6.textContent}
                                                </Anchor>
                                              </ListItem>
                                            ))}
                                          </List>
                                        )}
                                      </ListItem>
                                    ))}
                                  </List>
                                )}
                              </ListItem>
                            ))}
                          </List>
                        )}
                      </ListItem>
                    ))}
                  </List>
                )}
              </ListItem>
            ))}
          </List>
        </nav>
      </Details>
    ) : null;
  },
);

TOC.displayName = 'TOC';
