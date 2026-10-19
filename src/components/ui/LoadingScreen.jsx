import { useEffect, useState } from 'react';

/**
 * Premium two-stage brand intro loading screen.
 *
 * Stage 1: "NEXVIA"        -> fades in, holds ~1s, fades out
 * Stage 2: tagline         -> fades in, holds ~1s, fades out
 * Then the overlay fades out to reveal the existing website.
 *
 * Timings (ms):
 *   0-400     NEXVIA fades in
 *   400-1000  NEXVIA held (~0.6s fully visible)
 *   1000-1450 NEXVIA fades out
 *   1450-1900 Tagline fades in
 *   1900-2900 Tagline held (~1s)
 *   2900-3350 Tagline fades out
 *   3350-3800 Overlay fades out (exit)
 *   3800      Overlay removed; onComplete fires
 *
 * A 9s fallback guarantees the visitor is never stuck on this screen.
 * This component mounts once in App.jsx, so it runs on initial load /
 * browser refresh only — not on internal route changes.
 */
export default function LoadingScreen({ onComplete }) {
  const [stage, setStage] = useState('nexvia'); // 'nexvia' | 'tagline' | 'exit' | 'done'
  const [done, setDone] = useState(false);

  useEffect(() => {
    const tTagline = setTimeout(() => setStage('tagline'), 1450);
    const tExit = setTimeout(() => setStage('exit'), 3350);
    const tDone = setTimeout(() => setDone(true), 3800);
    // Sensible fallback: never leave the visitor stuck on the loading screen.
    const tFallback = setTimeout(() => setDone(true), 9000);

    return () => {
      clearTimeout(tTagline);
      clearTimeout(tExit);
      clearTimeout(tDone);
      clearTimeout(tFallback);
    };
  }, []);

  useEffect(() => {
    if (done) {
      onComplete?.();
    }
  }, [done, onComplete]);

  // Lock background scroll while the brand intro plays.
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (done) return null;

  return (
    <div className="brand-intro" data-stage={stage} role="region" aria-label="Nexvia brand introduction">
      <div className="brand-word nexvia" aria-hidden="true">
        nexvia
      </div>
      <div className="brand-word tagline" aria-hidden="true">
        Turning Ideas into Reality
      </div>
    </div>
  );
}
