import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

export default function Testimony() {
  return (
    <section id="testimonials" className="py-12 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-6 text-2xl font-bold md:text-4xl text-center">
            What My Clients Say
          </h2>
          <p className="mb-12 max-w-md text-center text-gray-500 dark:text-gray-400">
            Hear from My satisfied customers about their experience with My
            Service.
          </p>
          <Carousel className="w-full max-w-3xl">
            <CarouselContent>
              <CarouselItem>
                <div className="flex flex-col items-center justify-center space-y-6 p-6 md:p-12">
                  <blockquote className="text-center text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200 md:text-2xl">
                    &quot;He digitalized my data handling method, enabling me to
                    seamlessly manage all my business data through my website
                    from anywhere. This has been a game-changer, allowing me to
                    stay on top of my operations with unparalleled convenience
                    and efficiency.&quot;
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold">Yosen Getahun</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      CEO, Radix PLC
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col items-center justify-center space-y-6 p-6 md:p-12">
                  <blockquote className="text-center text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200 md:text-2xl">
                    &quot;He was one of my best students at AASTU. I was
                    impressed by his creative mind and the dedication he
                    demonstrated toward the details of his work. His exceptional
                    talent and unwavering commitment made him stand out among
                    his peers.&quot;
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold">Mr. Getnet Girma</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      Software Engineering Head at AASTU
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col items-center justify-center space-y-6 p-6 md:p-12">
                  <blockquote className="text-center text-base font-medium leading-relaxed text-gray-800 dark:text-gray-200 md:text-2xl">
                    &quot;He became a remote frontend designer and assistant for
                    my new startup company. It was a pleasure to work with him.
                    His exceptional design skills, coupled with his proactive
                    and collaborative approach, were instrumental in the
                    successful launch and growth of our business.&quot;
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold">Abriham</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      Founder, Raziel CC.
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2 text-gray-800 shadow-md transition-colors hover:bg-white dark:bg-gray-950/50 dark:text-gray-200 dark:hover:bg-gray-950">
              <ChevronLeftIcon className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2 text-gray-800 shadow-md transition-colors hover:bg-white dark:bg-gray-950/50 dark:text-gray-200 dark:hover:bg-gray-950">
              <ChevronRightIcon className="h-10 w-10" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function ChevronLeftIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
