"use client";

import { useRouter } from "next/navigation";
import { useI18n } from "@/app/i18n/context";
import { locales, Locale } from "@/app/i18n/settings";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, setLocale } = useI18n();

  const handleLanguageChange = (newLocale: string) => {
    // 简单实现：刷新当前页面到根路径
    setLocale(newLocale as Locale);
    router.push(`/${newLocale === 'en' ? '' : newLocale}`);
  };

  return (
    <div className="absolute top-4 right-4 flex gap-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleLanguageChange(loc)}
          className={`px-2 py-1 text-sm rounded transition-colors ${
            locale === loc
              ? "bg-primary text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher; 