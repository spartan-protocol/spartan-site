import React, { useState, useEffect, Suspense, lazy } from 'react';

const ThreeCanvas = lazy(() => import('./threeCanvas'));

const BackgroundAnimation = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {!isMounted || navigator?.connection?.saveData ? null : (
        <Suspense fallback={null}>
          <ThreeCanvas />
        </Suspense>
      )}
    </>
  );
};

export default BackgroundAnimation;