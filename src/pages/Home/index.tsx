import React, { useContext } from "react";
import Button from "../../uikits/Button";
import Input from "../../components/Input";
import ApiContext from "../../contexts/ApiContext";
import InternetSVG from "../../components/InternetSVG";

const Home: React.FC = () => {
  const { handleSend, isValidate } = useContext(ApiContext);

  return (
    <div className="space-y-8">
      {/* HERO: centered copy, full-width search, animated browser mockup */}
      <section className="relative overflow-hidden fade-up">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-16 text-center md:py-24">
          <h1 className="text-4xl font-extrabold text-offwhite md:text-6xl">
          See Every <span className="text-primaryColor">
            Core Web Metric 
            </span> 
            <br />
            <span>Your Users Do.</span>  
            
          </h1>

          <p className="mt-4 max-w-2xl text-sm text-textDark md:mt-6 md:text-base">
            Drop in a URL and Dashtrack uncovers performance, SEO, and accessibility
            issues before they ever reach your users.
          </p>

          {/* Search bar: same width as text, just input + attached button */}
          <div className="mt-8 w-full max-w-2xl">
            <div className="flex w-full flex-row gap-3 md:flex-row md:items-stretch">
              {/* URL input */}
              <div className="flex-1">
                <Input />
              </div>

              {/* CTA button (teal accent) */}
              <Button
                title="Start test"
                onClick={handleSend}
                disabled={!isValidate}
                className="h-12 rounded-full bg-primaryColor px-7 text-black hover:bg-primaryColor/90 disabled:opacity-60 md:ml-2"
              />
            </div>
            <p className="mt-2 text-xs text-invalid">
              {isValidate ? "" : "Enter a valid URL"}
            </p>
          </div>

          <div className="mt-4 text-[11px] text-textDark">
            Real metrics • No signup • Shareable report link
          </div>

          <InternetSVG />
          </div>
      </section>

      {/* SECTION 2: full-width dark testimonials-style cards */}
      <section className="w-full bg-[#0f2b26] py-16 fade-up fade-up-delay-1">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-offwhite md:text-3xl">
              See Your Site The Way Your Users Do.
            </h2>
            <p className="mt-3 text-sm text-textDark md:text-base">
              Dashtrack simulates real journeys, surfaces slow views, and shows which fixes
              will have the biggest impact first.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#153d35] p-6 text-sm shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-primaryColor">
                Overview
              </p>
              <p className="mt-1 text-xl font-medium text-offwhite">Health Score</p>
              <p className="mt-3 text-sm leading-relaxed text-textDark">
                One number that blends performance, SEO and accessibility into a simple,
                shareable score.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#153d35] p-6 text-sm shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-primaryColor">
                Opportunities
              </p>
              <p className="mt-1 text-xl font-medium text-offwhite">Prioritized Fixes</p>
              <p className="mt-3 text-sm leading-relaxed text-textDark">
                See which issues move the needle most so your team always tackles the biggest
                wins first.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#153d35] p-6 text-sm shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-primaryColor">
                History
              </p>
              <p className="mt-1 text-xl font-medium text-offwhite">Trend Lines</p>
              <p className="mt-3 text-sm leading-relaxed text-textDark">
                Track how every deploy affects performance over time, across every report you
                run.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
