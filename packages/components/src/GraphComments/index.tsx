import type { HtmlHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { useGraphComment } from '../hooks/useGraphComment';
export interface GraphCommentProps extends HtmlHTMLAttributes<HTMLDivElement> {
  websiteId: string | undefined;
  headerHeight?: number;
}
export const GraphComment = forwardRef<HTMLDivElement, GraphCommentProps>(
  ({ websiteId, headerHeight, ...restProps }) => {
    useGraphComment(websiteId, headerHeight);
    return <div {...restProps} id="graphcomment" />;
  },
);
GraphComment.displayName = 'GraphComment';
