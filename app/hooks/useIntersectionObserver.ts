'use client'

import { useEffect, useState, RefObject } from 'react';

interface UseIntersectionObserverProps {
  ref: RefObject<Element>;
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export const useIntersectionObserver = ({
  ref,
  threshold = 0.1,
  root = null,
  rootMargin = '0px',
}: UseIntersectionObserverProps): boolean => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    const element = ref.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, root, rootMargin]);

  return isIntersecting;
};