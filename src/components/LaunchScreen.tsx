import { useEffect, useState } from "react";

const DISPLAY_MS = 1700;
const FADE_MS = 450;

const LaunchScreen = () => {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const hideTimer = window.setTimeout(() => setVisible(false), DISPLAY_MS);
    const unmountTimer = window.setTimeout(() => setMounted(false), DISPLAY_MS + FADE_MS);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(unmountTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`launch-screen ${visible ? "launch-screen--visible" : "launch-screen--hidden"}`}
      aria-label="Opening Srimad Bhagavad Gita"
      aria-live="polite"
    >
      <img
        src="/launch/krishna-halo.png"
        alt=""
        className="launch-screen__image"
        loading="eager"
        decoding="async"
      />
      <div className="launch-screen__veil" />
      <div className="launch-screen__content">
        <p className="launch-screen__sanskrit font-sanskrit">श्रीमद्भगवद्गीता</p>
        <h1 className="launch-screen__title font-display">Srimad Bhagavad Gita</h1>
        <p className="launch-screen__subtitle">Wisdom for the battlefield within</p>
      </div>
    </div>
  );
};

export default LaunchScreen;
