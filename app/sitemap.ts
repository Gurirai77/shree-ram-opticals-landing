import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.shreeramopticals.in",

      lastModified: new Date(),

      priority: 1,
    },

    {
      url:
        "https://www.shreeramopticals.in/best-optical-shop-in-sirsa",

      lastModified: new Date(),

      priority: 0.9,
    },

    {
      url:
        "https://www.shreeramopticals.in/shree-ram-opticals-sirsa",

      lastModified: new Date(),

      priority: 0.9,
    },
  ];
}