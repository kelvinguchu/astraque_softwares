import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Astraque Softwares",
    short_name: "Astraque",
    description:
      "Web development, mobile apps, UI/UX design, SEO & cloud solutions in Nairobi, Kenya.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
