import classnames from 'classnames/bind';
import { ForwardedRef, HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import slugify from 'slugify';
import Link from 'next/link';

import { HeadingsArray } from 'global';

import { List } from '../List';
import { ListItem } from '../ListItem';
import { Heading } from '../Heading';
import { Anchor } from '../Anchor';

import styles from './styles.module.scss';

interface TOCProps extends HTMLAttributes<HTMLElement> {
  toc: HeadingsArray;
  label: string;
}
const cx = classnames.bind(styles);
export const TOC = forwardRef(
  ({ toc, label, ...restProps }: PropsWithChildren<TOCProps>, ref: ForwardedRef<HTMLElement>) => {
    const isToc = toc && Array.isArray(toc);

    return isToc ? (
      <nav ref={ref} className={cx('toc')} {...restProps}>
        {label && (
          <Heading variant="h2" level={2}>
            {label}
          </Heading>
        )}
        <List className={cx('toc__list')}>
          {toc.map((item) => (
            <ListItem key={item.id}>
              <Anchor Link={Link} href={`#${slugify(item.textContent, { lower: true })}`} className={cx('toc__link')}>
                {item.textContent}
              </Anchor>
              {item.nestedH3 && (
                <List className={cx('toc__list-nested')}>
                  {item.nestedH3.map((h3) => (
                    <ListItem key={h3?.id}>
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
    ) : null;
  },
);

TOC.displayName = 'TOC';
