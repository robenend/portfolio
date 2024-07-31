import { BackgroundGradient } from '../ui/background-gradient';

export default function Project() {
  const projects = [
    {
      title: 'Kiray Connect',
      image: '../../../tl.png',
      description:
        'Discover your dream rental with KirayConnect Rentals, the premier platform for finding and securing the perfect home.',
    },
    {
      title: 'Radix Management Site',
      image: '../../../radix.jpg',
      description:
        'Developed a comprehensive management database and reporting system for a plant/planter Selling Company.',
    },
    {
      title: 'Raziel Management Site',
      image: '../../../signup.jpg',
      description:
        "Centralize, monitor, and control your company's transactions with Raziel's powerful platform.",
    },

    {
      title: 'TL Rental Mangement Site',
      image: '../../../management_site.jpg',
      description:
        'Streamlining real estate operations with automated rent collection, maintenance tracking, and financial insights.',
    },
  ];

  return (
    <>
      <div id="projects" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 mb-10 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                Recent Projects
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-base/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Highlighting my latest hands-on projects and initiatives.{' '}
              </p>
            </div>
          </div>
        </div>
        <ul className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-start gap-4">
          {projects.map((project) => {
            return (
              <div className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                  <img
                    src={project.image}
                    alt="radix image"
                    height="400"
                    width="400"
                    className="object-fill"
                  />
                  <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {project.title}
                  </p>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Request →</span>
                  </button>
                </BackgroundGradient>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
