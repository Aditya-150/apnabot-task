import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import Image from "next/image";

import heroImage from "./../public/hero-image.svg";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-row justify-between items-center">
      <div className="flex flex-col items-start justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-left justify-start">
          <h1 className={title()}>Optimize Your&nbsp;</h1>
          <h1 className={title({ color: "pink" })}>
            Resume for ATS and Hiring Leads&nbsp;
          </h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Get instant feedback with our free AI checker, scanning 20+ crucial
            areas, designed and moderated by top recruiters to boost your job
            search effectively.
          </h2>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "danger",
              radius: "lg",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        {/* <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="flat">
            <span>
              Get started by editing <Code color="primary">app/page.tsx</Code>
            </span>
          </Snippet>
        </div> */}
      </div>
      <Image alt="Logo for website" height={600} src={heroImage} />
    </section>
  );
}
