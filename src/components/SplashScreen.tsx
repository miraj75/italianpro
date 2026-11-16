import { useEffect, useState } from 'react';
import { OFFICIAL_LOGO_SRC } from './BrandLogo';

export function SplashScreen({
  onFinish,
  holdOpen = false,
}: {
  onFinish?: () => void;
  holdOpen?: boolean;
}) {
  const [progress, setProgress] = useState(holdOpen ? 68 : 18);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (holdOpen) {
      setProgress(68);
      return;
    }

    const t1 = window.setTimeout(() => setProgress(68), 120);
    const t2 = window.setTimeout(() => setProgress(100), 820);
    const t3 = window.setTimeout(() => setFading(true), 1150);
    const t4 = window.setTimeout(() => onFinish?.(), 1380);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.clearTimeout(t4);
    };
  }, [holdOpen, onFinish]);

  return (
    <div
      role="status"
      aria-label="ItalianPro loading"
      onClick={() => {
        if (!holdOpen) onFinish?.();
      }}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#031916] px-6 select-none transition-opacity duration-300 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background:
          'radial-gradient(650px 480px at 12% 8%, rgba(0, 245, 160, 0.22), transparent 65%), radial-gradient(680px 520px at 88% 92%, rgba(39, 223, 255, 0.2), transparent 65%), linear-gradient(165deg, #04221e 0%, #031715 50%, #04231f 100%)',
      }}
    >
      {/* Top-left glowing emerald/cyan ribbon wave */}
      <svg
        className="pointer-events-none absolute -top-6 -left-8 h-72 w-96 sm:h-96 sm:w-[30rem] opacity-90"
        viewBox="0 0 500 400"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="splashWaveTL1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00F5A0" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#27DFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#041917" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="splashStrokeTL" x1="0" y1="0" x2="1" y2="0.6">
            <stop offset="0%" stopColor="#27DFFF" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#00F5A0" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#00F5A0" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M-40 -20 L380 -20 C295 85 160 155 -40 245 Z"
          fill="url(#splashWaveTL1)"
        />
        <path
          d="M-30 280 C60 140 190 70 365 -20"
          stroke="url(#splashStrokeTL)"
          strokeWidth="3.5"
          style={{ filter: 'drop-shadow(0 0 12px rgba(0, 245, 160, 0.8))' }}
        />
        <path
          d="M-30 185 C95 125 225 58 345 -20"
          stroke="url(#splashStrokeTL)"
          strokeWidth="2.5"
          style={{ filter: 'drop-shadow(0 0 10px rgba(39, 223, 255, 0.75))' }}
        />
      </svg>

      {/* Bottom-right glowing emerald/cyan ribbon wave */}
      <svg
        className="pointer-events-none absolute -right-8 -bottom-6 h-80 w-96 sm:h-[26rem] sm:w-[32rem] opacity-90"
        viewBox="0 0 500 420"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="splashWaveBR1" x1="1" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#00F5A0" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#27DFFF" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#041917" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="splashStrokeBR" x1="1" y1="0.3" x2="0" y2="1">
            <stop offset="0%" stopColor="#27DFFF" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#00F5A0" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7CF800" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d="M540 440 L120 440 C225 335 375 265 540 120 Z"
          fill="url(#splashWaveBR1)"
        />
        <path
          d="M150 440 C265 340 400 265 535 120"
          stroke="url(#splashStrokeBR)"
          strokeWidth="3.5"
          style={{ filter: 'drop-shadow(0 0 14px rgba(0, 245, 160, 0.85))' }}
        />
        <path
          d="M125 440 C255 365 390 325 535 235"
          stroke="url(#splashStrokeBR)"
          strokeWidth="3"
          style={{ filter: 'drop-shadow(0 0 12px rgba(39, 223, 255, 0.8))' }}
        />
      </svg>

      {/* Center Brand Identity & Loading Bar */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="animate-splash-glow mb-5 h-36 w-36 sm:h-44 sm:w-44 overflow-hidden rounded-[2.2rem] border border-neon/45 bg-[#052316] shadow-[0_0_40px_-6px_rgba(0,245,160,0.6)]">
          <img
            src={OFFICIAL_LOGO_SRC}
            alt="ItalianPro official logo"
            className="h-full w-full object-contain"
            draggable={false}
          />
        </div>

        <h1 className="text-[2.75rem] sm:text-[3.25rem] leading-none font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
          Italian<span className="text-lime-pro">Pro</span>
        </h1>

        <p className="mt-2.5 text-base sm:text-lg font-medium tracking-wide text-ink/90">
          Learn Italian. Live Italian.
        </p>

        {/* Glowing horizontal progress bar */}
        <div
          className="mt-9 h-3 w-56 sm:w-64 overflow-hidden rounded-full border border-neon/40 bg-[#0a332d]/80 p-[1px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full rounded-full transition-[width] duration-700 ease-out"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #00c987 0%, #00f5a0 65%, #b8ff66 100%)',
              boxShadow: '0 0 16px 2px rgba(0, 245, 160, 0.75)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
