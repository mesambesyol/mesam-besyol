import React, { useEffect } from 'react';
import * as ReactRouterDom from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname, hash, state } = ReactRouterDom.useLocation();

  useEffect(() => {
    // Do not scroll to top if a hash or specific state like scrollToId is present,
    // as a page-specific component will handle the scrolling.
    const componentState = state as { scrollToId?: string } | null;
    if (hash || componentState?.scrollToId) {
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
