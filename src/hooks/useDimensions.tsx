import React, { useState, useLayoutEffect } from 'react';

export default function useDimensions(view: React.MutableRefObject<any>) {
    const [dimensions, setDimensions] = useState({ width:0, height: 0 });

    function getWindowSize(): {width: number, height: number} {
        return {
          width: view.current.clientWidth,
          height: view.current.clientHeight
        }
      }
      const resizeListener = () => setDimensions(getWindowSize())
    
      useLayoutEffect(() => {
        if (view.current) {
          setDimensions(getWindowSize())
          window.addEventListener('resize', resizeListener)
        }
        return ()=>window.removeEventListener('resize', resizeListener)
      }, []);
      return dimensions
}