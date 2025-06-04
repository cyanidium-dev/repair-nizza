import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "ru", "fr"],

  // Used when no locale matches
  defaultLocale: "ru",
  localePrefix: "as-needed",
  localeDetection: false,
});
