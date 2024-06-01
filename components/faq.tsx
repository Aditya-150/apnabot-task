"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export const Faq = () => {
  return (
    <section className="mt-40" id="faq">
      <div className="mb-10 space-y-4">
        <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          Unlock Your&nbsp;
          <span className="bg-gradient-to-b from-[#FF72E1] to-[#F54C7A] inline-block text-transparent bg-clip-text">
            Career
          </span>
          &nbsp;Potential.
        </h2>
      </div>
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="What is a good ATS score?"
        >
          A strong ATS score is determined by factors like fields, sections,
          format, and layout rather than the specific content. Therefore, a
          higher score indicates better alignment with ATS requirements.
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="What is a resume check tool, and how does it work?"
        >
          A resume check is an online tool that scans your resume and provides
          instructions on how to improve it. Some tools offer resume builders,
          but we generally suggest candidates write their resumes themselves
          instead of using AI-based builders. There is often a human touch
          missing from AI-generated resumes, and recruitment managers who review
          hundreds of resumes can usually spot an AI-written one immediately.
          This could create a negative impression that the candidate was too
          lazy to manually prepare their resume, potentially harming their
          chances.
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="What is a Resume Enhancer?"
        >
          A Resume Enhancer is a tool designed to address grammatical issues and
          typos in a resume, while also enhancing its overall engagement. While
          some websites offer this service for a fee or may add a watermark to
          the PDF document, our Resume Enhancer is completely free. Powered by a
          finely tuned AI model, it is specifically engineered to elevate
          resumes while maintaining a professional tone and preserving the human
          touch.
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Accordion 4"
          title="What should be the layout of the resume?"
        >
          The preferred layout for a resume is either a single-column format or
          a multiple boxed layout. Resumes with more than one column often
          perform poorly on ATS systems.
        </AccordionItem>
        <AccordionItem
          key="5"
          aria-label="Accordion 5"
          title="What should be font type and font size used in resume?"
        >
          <p>
            <div className="flex flex-col gap-2">
              <p>Any General font type is acceptable in resume for e.g.:</p>
              <ol className="list-decimal ml-6">
                <li>Times New Roman</li>
                <li>Arial</li>
                <li>Calibri</li>
                <li>Helvetica</li>
                <li>Garamond</li>
                <li>Georgia</li>
              </ol>
              <p>
                The generally accepted font size for resumes falls within the
                range of 9.5 to 11.5.
              </p>
            </div>
          </p>
        </AccordionItem>
        <AccordionItem
          key="6"
          aria-label="Accordion 6"
          title="What is quantitative impact and how much important it is"
        >
          <p>
            <div className="flex flex-col gap-2">
              <p>
                Quantifying the impact of your achievements on your resume
                involves providing specific, measurable results to demonstrate
                your value in previous roles. This means:
              </p>
              <ol className="list-decimal ml-6">
                <li>Prioritizing achievements over responsibilities.</li>
                <li>
                  Using numbers to illustrate impact, such as percentages or
                  revenue figures.
                </li>
                <li>
                  Beginning each bullet point with an action verb to emphasize
                  your proactive role.
                </li>
              </ol>
              <p>
                For e.g.: Implemented a new customer relationship management
                (CRM) system, resulting in a 30% increase in sales productivity
                and a 25% improvement in customer satisfaction scores.
              </p>
              <p>
                While quantifying your impact is crucial, it&apos;s important to
                maintain a balance. Adding quantitative metrics to every line of
                your work description can make the resume cumbersome to read and
                might give the impression of inauthentic. So, striking a balance
                is essential.
              </p>
            </div>
          </p>
        </AccordionItem>
        <AccordionItem
          key="7"
          aria-label="Accordion 7"
          title="What should I focus on when checking my resume?"
        >
          <p>
            <div className="flex flex-col gap-2">
              <p>
                We’ve read 1000s of resumes from our users and got the opinions
                of recruiters on which are the top mistakes people make when
                building their CV.
              </p>
              <p>
                Here’s a list of the most commonly occurring mistakes on
                resumes:
              </p>
              <ol className="list-disc ml-6">
                <li>Avoid cliches and buzzwords.</li>
                <li>Don’t lie on your resume.</li>
                <li>Edit typos and grammatical errors.</li>
                <li>List achievements, not responsibilities.</li>
                <li>Keep a clean and organized formatting throughout</li>
                <li>
                  Include both your paid and unpaid experience related to the
                  role (the latter is especially important for entry-level
                  positions)
                </li>
                <li>
                  Do not add irrelevant information in your resume. For e.g.:
                  Achieving a 3rd place in dance competition in society when you
                  are applying for software engineering role.
                </li>
              </ol>
            </div>
          </p>
        </AccordionItem>
        <AccordionItem
          key="8"
          aria-label="Accordion 8"
          title="How can I convert my resume from its current format to a PDF file?"
        >
          <div>
            If you have created your resume using Microsoft Word, the software
            typically includes an option to save or export the document as a PDF
            file. However, if you encounter any difficulties with this process,
            you can try uploading your resume to a free online service like{" "}
            <a
              href="https://www.ilovepdf.com/"
              rel="noreferrer"
              target="_blank"
            >
              <span className="text-danger">ilovepdf.com</span>
            </a>
            , which allows you to convert various file formats, including Word
            documents, into PDF files at no cost.
          </div>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
