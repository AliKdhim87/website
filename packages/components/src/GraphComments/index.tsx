import type { HtmlHTMLAttributes } from 'react';

import { useGraphComment } from '../hooks/useGraphComment';
export interface GraphCommentProps extends HtmlHTMLAttributes<HTMLDivElement> {
  websiteId: string | undefined;
  headerHeight?: number;
}
export const GraphComment = ({ websiteId, headerHeight, ...restProps }: GraphCommentProps) => {
  useGraphComment(websiteId, headerHeight);
  return <div {...restProps} id="graphcomment" />;
};
