// Detailed service page content, merged from one file per category.
// Add/edit content in the category file; the service page template reads it here.
import branding from "./branding";
import webDevelopment from "./web-development";
import uiUxDesign from "./ui-ux-design";
import digitalMarketing from "./digital-marketing";

export const serviceContent = { ...branding, ...webDevelopment, ...uiUxDesign, ...digitalMarketing };

// Images per category (hero, benefits). A service can override with `image` in its content.
export const categoryImages = {
  branding: { hero: "/branding-hero.webp", benefits: "/branding-benefits.webp" },
  "web-development": { hero: "/webdev-hero.webp", benefits: "/webdev-benefits.webp" },
  "ui-ux-design": { hero: "/uiux-hero.webp", benefits: "/uiux-benefits.webp" },
  "digital-marketing": { hero: "/marketing-hero.webp", benefits: "/marketing-benefits.webp" },
};

export const getServiceContent = (slug) => serviceContent[slug];
