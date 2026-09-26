import { SITE, absoluteUrl } from "@/data/site";
import { categories, getServicesByCategory, serviceHref, categoryHref } from "@/data/services";
import { posts, postHref } from "@/data/posts";
import { courses } from "@/data/courses";

// /llms.txt — plain-text site summary for AI assistants (GEO).
export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    `Location: ${SITE.address.city}, ${SITE.address.region}, India. Serves: ${SITE.areaServed.join(", ")}.`,
    `Contact: ${SITE.phoneDisplay} · ${SITE.email} · ${absoluteUrl("/contact")}`,
    "",
  ];
  for (const c of categories) {
    lines.push(`## [${c.name}](${absoluteUrl(categoryHref(c))})`, "", c.intro, "");
    for (const s of getServicesByCategory(c.slug)) lines.push(`- [${s.name}](${absoluteUrl(serviceHref(s))}): ${s.short}`);
    lines.push("");
  }
  lines.push("## Cybersecurity Courses", "");
  for (const c of courses) lines.push(`- [${c.name}](${absoluteUrl(c.href)}): ${c.duration} program`);
  lines.push("", "## Blog", "");
  for (const p of posts) lines.push(`- [${p.title}](${absoluteUrl(postHref(p))}): ${p.summary}`);
  lines.push("", "## Company", "", `- [About](${absoluteUrl("/about")})`, `- [Contact](${absoluteUrl("/contact")})`);

  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
