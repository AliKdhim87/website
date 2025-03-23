import type { ComponentType, ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';

import classnames from 'classnames/bind';
import slugify from 'slugify';

import styles from './styles.module.scss';
import { Anchor } from '../Anchor';
import { Details } from '../Details';
import { useWindowSize } from '../hooks/useWindowSize';
import type { ListProps } from '../List';
import { List, ListItem } from '../List';

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

export type HeadingType = HeadingH2 | HeadingH3 | HeadingH4 | HeadingH5 | HeadingH6;

export type HeadingsArray = HeadingH2[];

export interface TOCProps extends HTMLAttributes<HTMLElement> {
  toc?: HeadingsArray;
  label: string;
  Link?: ComponentType<any>;
}
const cx = classnames.bind(styles);
export interface TOCListProps extends ListProps {
  list: string[];
}
const createHref = (textContent: string) => `#${slugify(textContent, { lower: true })}`;

export const TOC = forwardRef(
  ({ toc, label, Link, ...restProps }: PropsWithChildren<TOCProps>, ref: ForwardedRef<HTMLElement>) => {
    const isToc = toc && Array.isArray(toc);
    const { width } = useWindowSize();
    const smallScreen = width ? width < 960 : false;

    return isToc ? (
      <Details label={label} className={cx('ali-dev-toc')} open={!smallScreen} icon={smallScreen}>
        <nav ref={ref} {...restProps}>
          <List className={cx('ali-dev-toc__list')}>
            {toc.map((item) => (
              <ListItem key={item.id} className={cx('ali-dev-toc__item')}>
                <Anchor Link={Link} href={createHref(item.textContent)} className={cx('ali-dev-toc__link')}>
                  {item.textContent}
                </Anchor>
                {item.nestedH3 && (
                  <List>
                    {item.nestedH3.map((h3) => (
                      <ListItem key={h3.id} className={cx('ali-dev-toc__item')}>
                        <Anchor Link={Link} href={createHref(h3.textContent)} className={cx('ali-dev-toc__link')}>
                          {h3.textContent}
                        </Anchor>
                        {h3.nestedH4 && (
                          <List>
                            {h3.nestedH4.map((h4) => (
                              <ListItem key={h4.id} className={cx('ali-dev-toc__item')}>
                                <Anchor
                                  Link={Link}
                                  href={createHref(h4.textContent)}
                                  className={cx('ali-dev-toc__link')}
                                >
                                  {h4.textContent}
                                </Anchor>
                                {h4.nestedH5 && (
                                  <List>
                                    {h4.nestedH5.map((h5) => (
                                      <ListItem key={h5.id} className={cx('ali-dev-toc__item')}>
                                        <Anchor
                                          Link={Link}
                                          href={createHref(h5.textContent)}
                                          className={cx('ali-dev-toc__link')}
                                        >
                                          {h5.textContent}
                                        </Anchor>
                                        {h5.nestedH6 && (
                                          <List>
                                            {h5.nestedH6.map((h6) => (
                                              <ListItem key={h6.id} className={cx('ali-dev-toc__item')}>
                                                <Anchor
                                                  Link={Link}
                                                  href={createHref(h6.textContent)}
                                                  className={cx('ali-dev-toc__link')}
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
