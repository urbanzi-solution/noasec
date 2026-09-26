import { categories, getServicesByCategory, serviceHref, categoryHref } from "./services";
import { courses } from "./courses";

// Main menu. Services mega-menu is generated from services.js, Courses from courses.js.
export const mainNav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    columns: categories.map((c) => ({
      name: c.name,
      href: categoryHref(c),
      items: getServicesByCategory(c.slug).map((x) => ({ name: x.shortName || x.name, href: serviceHref(x) })),
    })),
  },
  {
    name: "Courses",
    href: "/courses",
    items: courses.map((c) => ({ name: c.name, href: c.href })),
  },
  { name: "Blog", href: "/blog" },
];

export const legalNav = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
];
