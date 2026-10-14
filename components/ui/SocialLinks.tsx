import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants/site-config';
import { cn } from '@/lib/utils/cn';

interface SocialLinksProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md';
}

const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className,
  variant = 'dark',
  size = 'md',
}) => {
  const socialPlatforms = [
    {
      name: 'Facebook',
      key: 'facebook' as const,
      icon: Facebook,
      url: SITE_CONFIG.socialLinks.facebook?.trim() || '',
    },
    {
      name: 'Instagram',
      key: 'instagram' as const,
      icon: Instagram,
      url: SITE_CONFIG.socialLinks.instagram?.trim() || '',
    },
    {
      name: 'LinkedIn',
      key: 'linkedin' as const,
      icon: Linkedin,
      url: SITE_CONFIG.socialLinks.linkedin?.trim() || '',
    },
    {
      name: 'TikTok',
      key: 'tiktok' as const,
      icon: TikTokIcon,
      url: SITE_CONFIG.socialLinks.tiktok?.trim() || '',
    },
  ];

  const sizeStyles = size === 'sm' ? 'w-7 h-7' : 'w-8 h-8';
  const iconSizeStyles = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {socialPlatforms.map((platform) => {
        const IconComponent = platform.icon;
        const hasActiveUrl = Boolean(platform.url && platform.url !== '#');

        if (hasActiveUrl) {
          return (
            <a
              key={platform.key}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center justify-center rounded-md transition-all duration-200',
                sizeStyles,
                variant === 'dark'
                  ? 'bg-slate-800/80 text-slate-300 border border-slate-700 hover:text-white hover:bg-slate-700 hover:border-slate-500'
                  : 'bg-slate-100 text-slate-700 border border-slate-200 hover:text-slate-900 hover:bg-slate-200 hover:border-slate-300'
              )}
              aria-label={`Orallio Group on ${platform.name}`}
            >
              <IconComponent className={iconSizeStyles} />
            </a>
          );
        }

        // When no active URL is configured, display recognizable icon without active link (no dead '#' link)
        return (
          <span
            key={platform.key}
            className={cn(
              'flex items-center justify-center rounded-md cursor-default select-none transition-colors',
              sizeStyles,
              variant === 'dark'
                ? 'bg-slate-800/50 text-slate-500 border border-slate-800/80'
                : 'bg-slate-100/70 text-slate-400 border border-slate-200/80'
            )}
            title={`${platform.name} (Official link coming soon)`}
            aria-label={`${platform.name} (Official link coming soon)`}
          >
            <IconComponent className={iconSizeStyles} />
          </span>
        );
      })}
    </div>
  );
};
