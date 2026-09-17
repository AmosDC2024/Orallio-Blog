/**
 * CENTRALIZED BRAND DESIGN SYSTEM & TOKENS (PROVISIONAL / PLACEHOLDER)
 * 
 * NOTE: The exact color palette remains explicitly provisional until official 
 * Orallio Group brand guidelines are confirmed. All components consume these tokens 
 * to ensure a 1-step global update when official hex codes are supplied.
 */

export const THEME_TOKENS = {
  // Page Containers & Layout Boundaries
  container: {
    maxWidth: 'max-w-7xl',
    paddingMobile: 'px-4',
    paddingTablet: 'sm:px-6',
    paddingDesktop: 'lg:px-8',
  },

  // Typography Hierarchy Tokens
  typography: {
    heroHeading: 'text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]',
    pageHeading: 'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight',
    sectionHeading: 'text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight',
    subSectionHeading: 'text-xl sm:text-2xl font-semibold tracking-tight',
    bodyLarge: 'text-base sm:text-lg leading-relaxed',
    bodyRegular: 'text-sm sm:text-base leading-relaxed',
    bodySmall: 'text-xs sm:text-sm leading-normal',
    eyebrow: 'text-xs font-bold uppercase tracking-widest',
    buttonText: 'text-sm font-semibold tracking-wide',
  },

  // Color Palette Tokens (Provisional Corporate Baseline)
  colors: {
    background: 'bg-slate-50',
    surface: 'bg-white',
    surfaceSubtle: 'bg-slate-100/70',
    surfaceDark: 'bg-slate-900',
    
    textPrimary: 'text-slate-900',
    textSecondary: 'text-slate-600',
    textMuted: 'text-slate-400',
    textInverse: 'text-white',

    borderLight: 'border-slate-200/80',
    borderSubtle: 'border-slate-100',
    borderDark: 'border-slate-800',

    primaryBtn: 'bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950',
    secondaryBtn: 'bg-slate-100 text-slate-900 hover:bg-slate-200 active:bg-slate-300',
    ctaBtn: 'bg-amber-600 text-white hover:bg-amber-700 active:bg-amber-800',
    outlineBtn: 'bg-transparent text-slate-900 border-slate-300 hover:bg-slate-50',

    accentGold: 'text-amber-700',
    accentEmerald: 'text-emerald-700',
    accentSky: 'text-sky-700',
  },

  // Focus Ring Accessibility Tokens
  focusRing: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2',
};
