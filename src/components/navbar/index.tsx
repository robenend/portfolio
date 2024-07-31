import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { buttonVariants } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { ModeToggle } from '@/components/navbar/mode-toggle';
import { LightBulbIcon as LogoIcon } from '@/components/icon';
import { FaBookAtlas } from 'react-icons/fa6';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';
import { SiNodemon } from 'react-icons/si';
import { FaQuoteLeft } from 'react-icons/fa';

interface RouteProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

const routeList: RouteProps[] = [
  {
    href: '#achievements',
    label: 'Achievements',
    icon: <MdOutlineFeaturedPlayList />,
  },
  {
    href: '#testimonials',
    label: 'Testimonials',
    icon: <FaBookAtlas />,
  },
  {
    href: '#projects',
    label: 'Projects',
    icon: <SiNodemon />,
  },
  {
    href: '#skills',
    label: 'Skills',
    icon: <FaQuoteLeft />,
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky top-0 z-40 w-full -mx-2 bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-16 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl items-center flex"
            >
              <LogoIcon />
              PORTFOLIO
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={'left'}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    <a
                      rel="noreferrer noopener"
                      href="/"
                      className="ml-2 font-bold text-xl flex items-center"
                    >
                      <LogoIcon />
                      PORTFOLIO
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center gap-2 mt-4 ml-2">
                  {routeList.map(({ href, label, icon }: RouteProps) => (
                    <a
                      className={`flex items-center ml-2`}
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                    >
                      {icon && (
                        <span className="me-2 inline-flex h-10 w-10 items-center justify-center rounded-md">
                          {icon}
                        </span>
                      )}
                      {label}
                    </a>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="https://github.com/robenend"
                    target="_blank"
                    className={`w-[140px] border mt-2 ml-2 ${buttonVariants({
                      variant: 'secondary',
                    })}`}
                  >
                    <GitHubLogoIcon className="mr-2 w-5 h-5" />
                    Github
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[15px] ${buttonVariants({
                  variant: 'ghost',
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              href="https://github.com/leoMirandaa/shadcn-landing-page.git"
              target="_blank"
              className={`border ${buttonVariants({ variant: 'secondary' })}`}
            >
              <GitHubLogoIcon className="mr-2 w-5 h-5" />
              Github
            </a>

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
