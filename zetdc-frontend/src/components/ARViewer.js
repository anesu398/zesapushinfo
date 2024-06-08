// src/components/ARViewer.js
import { useEffect } from 'react';

const ARViewer = () => {
  useEffect(() => {
    if (navigator.xr) {
      navigator.xr.requestSession('immersive-ar').then((session) => {
        // Handle AR session initialization
      });
    }
  }, []);

  return <div id="ar-viewer">AR Viewer</div>;
};

export default ARViewer;
