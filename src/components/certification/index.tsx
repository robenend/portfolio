import { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';

export default function Certification() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null,
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <div id="achievements" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 mb-10 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                Key Achievements
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-base/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Discover the powerful features that make our product stand out.
              </p>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {active && typeof active === 'object' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === 'object' ? (
            <div className="fixed inset-0  grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <img
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-4">
                    <div className="">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400 text-base"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.ctaLink}
                      target="_blank"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                    >
                      {active.ctaText}
                    </motion.a>
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {typeof active.content === 'function'
                        ? active.content()
                        : active.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <ul className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-start gap-4">
          {cards.map((card) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 flex-col  w-full">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <img
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.title}
                    className="h-60 w-full  rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="flex justify-center items-center flex-col">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </ul>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: 'Data Science: Foundations using R',
    title: 'JOHNS HOPKINS University',
    src: '../../../1.jpg',
    ctaText: 'Verify',
    ctaLink: 'https://coursera.org/verify/specialization/PNYZQXEB4PGQ',
    content: () => {
      return (
        <p>
          The Data Science Specialization covers foundational concepts and tools
          for the data science pipeline. Successful participants learn how to
          use the tools of the trade, think analytically about complex problems,
          manage large data sets, create visualizations, and publish
          reproducible analyses. This certificate does not confer academic
          credit toward a degree or official status at the Johns Hopkins
          University.
        </p>
      );
    },
  },
  {
    description: 'Data Science for Business Innovation',
    title: 'EIT Digital , Politecnico di Milano',
    src: '../../../2.jpg',
    ctaText: 'Verify',
    ctaLink: 'https://coursera.org/verify/GQHTVTWJSYRY',
    content: () => {
      return (
        <p>
          From a more technical perspective, the course covers supervised,
          unsupervised and semi-supervised methods, and explains what can be
          obtained with classification, clustering, and regression techniques.
          It discusses the role of NoSQL data models and technologies, and the
          role and impact of scalable cloud-based computation platforms. All
          topics are covered with example-based lectures, discussing use cases,
          success stories, and realistic examples.
        </p>
      );
    },
  },

  {
    description: 'Foundations of Digital Marketing and E-commerce',
    title: 'Google',
    src: '../../../3.jpg',
    ctaText: 'Verify',
    ctaLink: 'https://coursera.org/verify/FKB5XQ8GRFGT',
    content: () => {
      return (
        <p>
          This is the first of seven courses in the Google Digital Marketing &
          E-commerce Certificate, which will equip you with the skills you need
          to apply to entry-level roles in these fields. People who work in
          digital marketing and e-commerce help their organizations attract new
          customers, engage customers through various digital channels, and
          drive transactions like purchases and customer loyalty. In this
          course, you’ll explore entry-level jobs in digital marketing and
          e-commerce and identify the roles and functions that those jobs play
          within an organization. You’ll also learn about the marketing funnel
          and how it shapes the customer journey.
        </p>
      );
    },
  },
  {
    description: 'What is Data Science?',
    title: 'IBM',
    src: '../../../4.jpg',
    ctaText: 'Verify',
    ctaLink: 'https://coursera.org/verify/P6YHEZHTF797',
    content: () => {
      return (
        <p>
          The art of uncovering insights and trends in data has been around
          since ancient times. The ancient Egyptians used census data to
          increase efficiency in tax collection and accurately predicted the
          Nile River's flooding every year. Since then, people have continued to
          use data to derive insights and predict outcomes. Recently, they have
          carved out a unique and distinct field for the work they do. This
          field is data science. In today's world, we use Data Science to find
          patterns in data and make meaningful, data-driven conclusions and
          predictions. This course is for everyone and teaches concepts like how
          data scientists use machine learning and deep learning and how
          companies apply data science in business.
        </p>
      );
    },
  },
  {
    description: 'Meta',
    title: 'Social Media Management',
    src: '../../../5.jpg',
    ctaText: 'Verify',
    ctaLink: 'https://coursera.org/verify/FYJJPVTVN5U3',
    content: () => {
      return (
        <p>
          This course equips you with critical content creation and management
          skills. You’ll learn how to create effective social media posts and
          how to create a strong brand to help you build a social media
          presence. You’ll also learn how to establish an ongoing process to
          manage your content. This includes setting up a content calendar,
          managing and moderating your posts, analyzing data for insights and
          iteration, and how to increase post effectiveness.
        </p>
      );
    },
  },
  {
    description: 'Increase SEO Traffic with WordPress',
    title: ' Coursera Project Network',
    src: '../../../6.jpg',
    ctaText: 'Verify',
    ctaLink: 'https://coursera.org/verify/8EHTYNSE9Z87',
    content: () => {
      return (
        <p>
          By the end of this project, you will learn how to increase SEO on your
          free WordPress website. You will add tags, categories, and links to an
          existing WordPress website and manage content in order to increase
          SEO. You will learn where to read analytics within WordPress in order
          to drive content management related to SEO within your WordPress
          website.
        </p>
      );
    },
  },
];
