import { readFileSync } from "node:fs";

const query = process.argv[2]?.trim();

if (!query) {
  console.error("Usage: npm run search -- <word>");
  process.exitCode = 1;
} else {
  const { highlights } = JSON.parse(
    readFileSync(new URL("./notes/keynote-highlights.json", import.meta.url), "utf8"),
  );
  const normalizedQuery = query.toLowerCase();

  for (const { title, summary } of highlights) {
    if (
      title.toLowerCase().includes(normalizedQuery) ||
      summary.toLowerCase().includes(normalizedQuery)
    ) {
      console.log(`${title}: ${summary}`);
    }
  }
}
