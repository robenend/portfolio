import { Button } from '@/components/ui/button';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { FlipWords } from '@/components/ui/flip-words';

export default function HeroSectionSimpleCentred() {
  return (
    <>
      {/* Hero */}
      <div>
        <div className="container py-24 lg:py-32">
          {/* Announcement Banner */}
          <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-2 border text-sm p-1 ps-3 rounded-full transition"
              href="#projects"
            >
              Explore - My Portfolio
              <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>
          {/* End Announcement Banner */}
          {/* Title */}
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              <FlipWords words={["I'm", 'Senior', 'Certified']} />
              <FlipWords words={['Robera', 'Web', 'Data']} />
              <FlipWords words={['Endale', 'Developer', 'Analyst']} />
            </h1>
          </div>
          {/* End Title */}
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="md:text-xl text-muted-foreground sm:text-base">
              Experienced full-stack developer skilled in React, Next.JS,
              Express.JS and Data Analysis, and building efficient databases.
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-8 gap-3 flex justify-center">
            <Button
              size={'lg'}
              onClick={() => {
                const seeProjectsElement = document.getElementById('projects');
                if (seeProjectsElement) {
                  seeProjectsElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Download CV
            </Button>
            <Button
              size={'lg'}
              variant={'outline'}
              onClick={() => {
                const seeProjectsElement = document.getElementById('projects');
                if (seeProjectsElement) {
                  seeProjectsElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              See Projects
            </Button>
          </div>
          {/* End Buttons */}
          <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
            <span className="text-sm text-muted-foreground">Job Status:</span>
            <span className="text-sm font-bold text-green-400">
              Open to work
            </span>
          </div>
        </div>
      </div>
      <BackgroundBeams />

      {/* End Hero */}
    </>
  );
}
