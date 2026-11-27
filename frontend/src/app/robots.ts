import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        // Explicitly allow modern AI Search Engines & LLM crawlers
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Google-Extended',
          'PerplexityBot',
          'ClaudeBot',
          'Applebot',
          'Bingbot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://momagency.com/sitemap.xml',
    host: 'https://momagency.com',
  };
}
