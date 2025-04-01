/// <reference types="astro/client" />

// Extend the Astro namespace to include custom color variables
interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
