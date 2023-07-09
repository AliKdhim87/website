'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gc_params: {
      graphcomment_id: string | undefined;
      fixed_header_height: number;
    };
  }
}

export const GraphComment = () => {
  useEffect(() => {
    window.gc_params = {
      graphcomment_id: process.env.NEXT_PUBLIC_GRAPH_COMMENTS_WEBSITE_ID,
      fixed_header_height: 0,
    };
    (function graphComment() {
      const gc = document.createElement('script');
      gc.type = 'text/javascript';
      gc.async = true;
      gc.src = `https://graphcomment.com/js/integration.js?${Date.now()}`;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
    })();
  }, []);

  return <div id="graphcomment" />;
};
