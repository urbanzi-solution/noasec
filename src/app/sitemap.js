import { absoluteUrl } from "@/data/site";
import { categories, liveServices, serviceHref, categoryHref } from "@/data/services";
import { courses } from "@/data/courses";
import { posts, postHref } from "@/data/posts";

// Auto-generated at /sitemap.xml — new services/courses/posts appear automatically.
export default function sitemap() {
  const now = new Date();
  const page = (path, priority, changeFrequency = "monthly", lastModified = now) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1.0, "weekly"),
    page("/services", 0.9, "weekly"),
    ...categories.map((c) => page(categoryHref(c), 0.9)),
    ...liveServices.map((s) => page(serviceHref(s), 0.8)),
    page("/courses", 0.9, "weekly"),
    ...courses.map((c) => page(c.href, 0.8)),
    page("/about", 0.6),
    page("/contact", 0.7),
    page("/blog", 0.7, "weekly"),
    ...posts.map((p) => page(postHref(p), 0.6, "monthly", new Date(p.updated || p.published))),
    page("/privacy-policy", 0.2, "yearly"),
    page("/terms-of-service", 0.2, "yearly"),
  ];
}
