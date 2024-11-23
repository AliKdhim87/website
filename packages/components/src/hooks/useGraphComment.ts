import { useEffect } from 'react';
export interface UseGraphCommentParams {
  graphcomment_id: string | undefined;
  fixed_header_height: number;
}
declare global {
  interface Window {
    gc_params: UseGraphCommentParams;
  }
}

export const useGraphComment = (websiteId: string | undefined, headerHeight: number = 0) => {
  useEffect(() => {
    // Initialize parameters
    window.gc_params = {
      graphcomment_id: websiteId,
      fixed_header_height: headerHeight,
    };

    // Load script
    const loadGraphCommentScript = () => {
      // Check if script already exists
      const existingScript = document.getElementById('graphcomment-script');
      if (existingScript) return;

      const gc = document.createElement('script');
      gc.type = 'text/javascript';
      gc.async = true;
      gc.id = 'graphcomment-script';
      gc.src = `https://graphcomment.com/js/integration.js?${Date.now()}`;

      // Error handling
      gc.onerror = () => {
        console.error('Failed to load GraphComment script');
      };

      document.head.appendChild(gc);
    };

    loadGraphCommentScript();

    // Cleanup function
    return () => {
      const script = document.getElementById('graphcomment-script');
      if (script) {
        document.head.removeChild(script);
      }
      // Clean up the div if needed
      const graphCommentDiv = document.getElementById('graphcomment');
      if (graphCommentDiv) {
        graphCommentDiv.innerHTML = '';
      }
    };
  }, [websiteId, headerHeight]);
};
