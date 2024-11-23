import last from 'lodash.last';
import uniq from 'lodash.uniq';

import type { Heading, HeadingsArray } from '@/types';

type Level = 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export const nestHeadings = (toc: HeadingsArray): HeadingsArray => {
  // define types to levels
  type Levels = {
    [key in Level]: Heading[];
  };
  const levels: Levels = { h2: [], h3: [], h4: [], h5: [], h6: [] };

  // nest headings
  toc.forEach((item) => {
    const level = parseInt(item.level.substring(1), 10);

    // const newItem = { ...item, [`nested${item.level.toUpperCase()}`]: [] };
    const newItem = { ...item };

    if (level === 2) {
      levels.h2.push(newItem);
    } else {
      const parentLevel = `h${level - 1}` as Level;

      if (levels[parentLevel].length > 0) {
        const parent = last(levels[parentLevel]);
        if (!parent) return;
        const nestedKey = `nestedH${level}` as keyof Heading;
        (parent[nestedKey] as string | never[]) = parent[nestedKey] || [];
        (parent[nestedKey] as unknown as Heading[]).push(newItem);
      }
    }

    levels[`h${level}` as Level].push(newItem);
  });

  return uniq(levels.h2) as HeadingsArray;
};
