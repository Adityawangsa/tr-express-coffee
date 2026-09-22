import { useEffect, useState } from "react";
import { Coffee } from "lucide-react";

const SPLASH_DURATION_MS = 2000;

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const splashTimer = window.setTimeout(() => {
      setIsVisible((current) => !current);
    }, SPLASH_DURATION_MS);

    return () => window.clearTimeout(splashTimer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="splash-screen" role="status" aria-label="Memuat TR Express Coffee">
      <div className="splash-logo">
        <div className="splash-logo__mark">
          <Coffee size={44} strokeWidth={2.3} aria-hidden="true" />
        </div>
        <h1 className="splash-logo__brand">TR Express</h1>
        <p className="splash-logo__caption">Coffee</p>
      </div>
    </div>
  );
}

export default SplashScreen;
