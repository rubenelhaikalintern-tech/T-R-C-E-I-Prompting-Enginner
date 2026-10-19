import React, { useState } from 'react';
import { ExternalLink, Check } from 'lucide-react';

interface AILaunchButtonsProps {
  promptText: string;
  englishPromptText?: string;
  label?: string;
  compact?: boolean;
}

export const AILaunchButtons: React.FC<AILaunchButtonsProps> = ({
  promptText,
  englishPromptText,
  label = 'Buka & Jalankan di AI:',
  compact = false,
}) => {
  const [copiedPlatform, setCopiedPlatform] = useState<string | null>(null);

  const getCleanPrompt = (platformKey: string) => {
    // For Midjourney, prefer the English visual prompt with parameter flags (--ar, etc.)
    if (platformKey === 'midjourney' && englishPromptText) {
      return englishPromptText.trim();
    }
    return promptText.trim();
  };

  const handleClick = (platformKey: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    const textToCopy = getCleanPrompt(platformKey);
    try {
      navigator.clipboard.writeText(textToCopy);
      setCopiedPlatform(platformKey);
      setTimeout(() => setCopiedPlatform(null), 2500);
    } catch (err) {
      // ignore clipboard error
    }
  };

  const platforms = [
    {
      key: 'chatgpt',
      name: 'ChatGPT',
      color: 'hover:text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50',
      bgColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      getUrl: (text: string) =>
        `https://chatgpt.com/?q=${encodeURIComponent(text.slice(0, 1500))}`,
      icon: (
        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6669zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1636a.0804.0804 0 0 1-.038-.0567V6.0748a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.4598a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
        </svg>
      ),
    },
    {
      key: 'midjourney',
      name: 'Midjourney',
      color: 'hover:text-sky-700 hover:border-sky-300 hover:bg-sky-50',
      bgColor: 'bg-sky-50 text-sky-700 border-sky-200',
      getUrl: () => 'https://www.midjourney.com/imagine',
      icon: (
        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.956 2.017a.64.64 0 0 0-.584.382L7.38 12.066l1.792.748 3.327-8.21 3.364 8.298 1.782-.722-4.105-10.08a.64.64 0 0 0-.584-.383zm-8.868 11.2a.64.64 0 0 0-.58.37l-2.45 5.864a.64.64 0 0 0 .84.84l7.63-3.66-1.077-1.488-4.363 2.09 1.41-3.376-1.41-.64zm17.736 0-1.41.64 1.41 3.376-4.363-2.09-1.077 1.488 7.63 3.66a.64.64 0 0 0 .84-.84l-2.45-5.864a.64.64 0 0 0-.58-.37zM11.956 14.5a.64.64 0 0 0-.64.64v4.5a.64.64 0 0 0 1.28 0v-4.5a.64.64 0 0 0-.64-.64z" />
        </svg>
      ),
    },
    {
      key: 'gemini',
      name: 'Gemini',
      color: 'hover:text-blue-700 hover:border-blue-300 hover:bg-blue-50',
      bgColor: 'bg-blue-50 text-blue-700 border-blue-200',
      getUrl: () => 'https://gemini.google.com/app',
      icon: (
        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24Z" />
        </svg>
      ),
    },
    {
      key: 'claude',
      name: 'Claude',
      color: 'hover:text-amber-800 hover:border-amber-300 hover:bg-amber-50',
      bgColor: 'bg-amber-50 text-amber-800 border-amber-200',
      getUrl: () => 'https://claude.ai/new',
      icon: (
        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 4.254c-1.572-.888-3.486-.96-5.136-.216l-7.296 3.24a5.96 5.96 0 0 0-3.36 5.376c0 2.256 1.272 4.344 3.312 5.352l7.296 3.6c1.656.816 3.6.768 5.232-.144a5.95 5.95 0 0 0 3.384-5.328 6.01 6.01 0 0 0-3.432-5.4l-.008-.008 1.488-3.36a1 1 0 0 0-1.48-1.312zm-3.696 11.232a3.98 3.98 0 0 1-2.28.096l-3.384-1.68a3.99 3.99 0 0 1-2.208-3.576c0-1.512.864-2.88 2.232-3.48l3.384-1.512a3.98 3.98 0 0 1 3.408.144c1.392.768 2.256 2.232 2.256 3.816 0 1.632-.888 3.12-2.328 3.888l-1.08.304z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="pt-2">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
          {label}
        </span>
        <span className="text-[10px] text-slate-400">
          (Salin otomatis & buka tab baru)
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {platforms.map(platform => {
          const isCopied = copiedPlatform === platform.key;
          const targetUrl = platform.getUrl(getCleanPrompt(platform.key));

          return (
            <a
              key={platform.key}
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => handleClick(platform.key, e)}
              aria-label={`Buka prompt ini di ${platform.name}`}
              title={`Salin prompt dan buka ${platform.name}`}
              className={`px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 transition-all flex items-center justify-center gap-1.5 shadow-2xs group ${platform.color}`}
            >
              {isCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-[11px] text-emerald-700 font-bold truncate">Tersalin!</span>
                </>
              ) : (
                <>
                  {platform.icon}
                  <span className="truncate">{platform.name}</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                </>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
};
