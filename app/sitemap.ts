import type { MetadataRoute } from 'next';
import { business } from '@/lib/business';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: business.siteUrl,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${business.siteUrl}/quarta`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${business.siteUrl}/politica-de-privacidade`,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];
}
