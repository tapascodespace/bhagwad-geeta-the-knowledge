import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/** Resets window scroll when the route changes (fixes inherited scroll from Home, etc.). */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Prevent the browser / WebView from restoring a stale scroll position.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // useLayoutEffect fires before paint, giving us the earliest chance to reset.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
