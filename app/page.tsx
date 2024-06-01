"use client";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

import heroImage from "./../public/hero_image.webp";
import companyLogo1 from "./../public/Facebook-lg.png";
import companyLogo2 from "./../public/Google-lg.png";
import companyLogo3 from "./../public/tesla-lg.png";
import companyLogo4 from "./../public/Spotify-lg.png";

// import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Features } from "@/components/features";
import { Testimonies } from "@/components/testimonies";
import { Faq } from "@/components/faq";
import { Roadmap } from "@/components/roadmap";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

interface ScrollAnimationWrapperProps {
  children: ReactNode;
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" variants={fadeIn}>
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <>
      <ScrollAnimationWrapper>
        <motion.section
          className="flex flex-row justify-between items-center w-full"
          id="#"
        >
          <div className="flex flex-col items-center sm:items-start justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg text-center sm:text-left justify-center sm:justify-start">
              <h1 className={title()}>
                Optimize Your&nbsp;
                <span className={title({ color: "pink" })}>
                  Resume for ATS and Hiring Leads&nbsp;
                </span>
              </h1>
              <h2 className={subtitle({ class: "mt-4" })}>
                Get instant feedback with our free AI checker, scanning 20+
                crucial areas, designed and moderated by top recruiters to boost
                your job search effectively.
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
                href="https://iloveresume.com/"
              >
                Build Your Resume
              </Link>
              <Link
                isExternal
                className={buttonStyles({ variant: "bordered", radius: "lg" })}
                href="https://iloveresume.com/"
              >
                Check Resume Score
              </Link>
            </div>

            <div className="mt-4 text-center sm:text-left">
              <h3>Loved by interviewers at</h3>
              <div className="mt-4 flex flex-row justify-between items-center w-full gap-4">
                <Image alt="Logo1" className="h-4 w-auto" src={companyLogo1} />
                <Image alt="Logo2" className="h-6 w-auto" src={companyLogo2} />
                <Image alt="Logo3" className="h-3 w-auto" src={companyLogo3} />
                <Image alt="Logo4" className="h-6 w-auto" src={companyLogo4} />
              </div>
            </div>
          </div>
          <Image
            alt="Logo for website"
            className="hidden sm:flex sm:h-[20rem] sm:w-auto lg:h-[30rem]"
            src={heroImage}
          />
        </motion.section>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Features />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Roadmap />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Testimonies />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <Faq />
      </ScrollAnimationWrapper>
    </>
  );
}
