import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = (): ReturnType<MetaFunction> => {
  return [
    { title: "Andrew Morrison | Software Engineer" },
    {
      name: "description",
      content:
        "Explore Andrew Morrison&apos;s portfolio featuring web development, software engineering, music career, chess matches, code examples, and a media gallery.",
    },
    {
      name: "keywords",
      content:
        "Andrew Morrison, Software Engineer, Web Developer, Music, Chess, Code, Gallery, Freelance, Developer Portfolio",
    },
    {
      property: "og:title",
      content: "Andrew Morrison | Software Engineer & Web Developer",
    },
    {
      property: "og:description",
      content:
        "Discover my projects, music, and interactive code examples. View my chess matches, and browse the media gallery.",
    },
    { property: "og:url", content: "https://andrewmorrison.dev" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Andrew Morrison | Software Engineer & Web Developer",
    },
    {
      name: "twitter:description",
      content:
        "Check out my projects, music, and more on my portfolio website.",
    },
  ];
};

export default function Index(): JSX.Element {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Andrew Morrison&apos;s Portfolio</h1>
      <p className="mt-4">
        Welcome to my personal website! I&apos;m a software engineer, freelance
        web developer, and musician. Explore my projects, interactive code
        examples, music career, chess matches, and a media gallery.
      </p>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="/projects"
            rel="noreferrer"
          >
            Explore My Projects
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="/music"
            rel="noreferrer"
          >
            My Music Career
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="/chess"
            rel="noreferrer"
          >
            Chess Matches
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="/gallery"
            rel="noreferrer"
          >
            Media Gallery
          </a>
        </li>
      </ul>
    </div>
  );
}
