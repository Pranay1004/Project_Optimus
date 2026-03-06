import React from 'react';

type DeferredSectionProps = {
  children: React.ReactNode;
  placeholderHeightClass?: string;
  rootMargin?: string;
};

function DeferredSection({
  children,
  placeholderHeightClass = 'min-h-[280px]',
  rootMargin = '300px',
}: DeferredSectionProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const markerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const marker = markerRef.current;
    if (!marker || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(marker);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <section ref={markerRef}>
      {isVisible ? (
        children
      ) : (
        <div className={`${placeholderHeightClass} animate-pulse bg-white/40`} aria-hidden="true" />
      )}
    </section>
  );
}

export default DeferredSection;
