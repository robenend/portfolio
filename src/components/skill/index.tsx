import { Card, CardContent } from '@/components/ui/card';

export default function Project() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 mb-10 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
              Programmig Skills
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-base/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              These are some of the programming skills I've been working with.{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="container space-y-12 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project) => (
            <Card className="bg-background shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
                <div className="rounded-full p-3">
                  <img
                    src={project.image}
                    width={100}
                    className="object-fill"
                  />
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {/* <p className="text-muted-foreground text-center">
                  A JavaScript library for building user interfaces.
                </p> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: 'Javascript',
    image: '../../../public/javascript.svg',
    description:
      'A technology company that builds economic infrastructure for the internet.',
    link: '',
  },
  {
    title: 'Python',
    image: '../../../public/python.svg',
    description:
      'A technology company that builds economic infrastructure for the internet.',
    link: '',
  },
  {
    title: 'Java',
    image: '../../../public/java.svg',
    description:
      'A technology company that builds economic infrastructure for the internet.',
    link: '',
  },
  {
    title: 'TypeScript',
    image: '../../../public/typescript.svg',

    link: '',
  },
  {
    title: 'React',
    image: '../../../public/react.svg',
    link: '',
  },
  {
    title: 'NodeJS',
    image: '../../../public/nodejs.svg',
    link: '',
  },
  {
    title: 'MYSQL',
    image: '../../../public/mysql.svg',
    link: '',
  },
  {
    title: 'MongoDB',
    image: '../../../public/mongodb.svg',
    link: '',
  },
  {
    title: 'PHP',
    image: '../../../public/php.svg',
    link: '',
  },
  {
    title: 'Go',
    image: '../../../public/go.svg',
    link: '',
  },
];
