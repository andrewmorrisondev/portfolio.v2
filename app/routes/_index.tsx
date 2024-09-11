import type { MetaFunction } from "@remix-run/node";
// import UnderConstruction from "components/UnderConstruction/UnderConstruction";

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
    <div className="bg-red-500 text-white text-xl p-4">
      Tailwind Test: This should be a red background with large white text.
    </div>
  );
}
