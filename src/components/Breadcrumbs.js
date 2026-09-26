import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { Home, ChevronRight } from "lucide-react";

// items: [{ name, href }] — "Home" is added automatically.
export default function Breadcrumbs({ items }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(all)} />
      <nav aria-label="Breadcrumb" className="text-xs text-gray-400">
        <ol className="flex flex-wrap items-center gap-1.5">
          {all.map((it, i) => {
            const isFirst = i === 0;
            const last = i === all.length - 1;
            return (
              <li key={it.href} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className="font-medium text-cyan-300">
                    {it.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={it.href}
                      className="flex items-center gap-1 text-gray-400 transition hover:text-white"
                    >
                      {isFirst && <Home size={12} className="text-gray-400" />}
                      <span>{it.name}</span>
                    </Link>
                    <ChevronRight size={12} className="text-gray-600 shrink-0" aria-hidden="true" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
