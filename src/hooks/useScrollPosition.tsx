import React, { useState, useEffect } from 'react';

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrollingDown, setIsScrollingDown] = useState(false)

  const handleScroll = () => {
      const position = window.pageYOffset
      setScrollPosition((prev)=>{
        setIsScrollingDown(position > prev)
        return position
      })
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
        window.removeEventListener('scroll', handleScroll)
    };
  }, []);

  return {scrollPosition, isScrollingDown}
}