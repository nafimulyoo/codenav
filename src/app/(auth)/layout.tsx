import Link from "next/link";
import Image from "next/image";
import CodeNavIcon from "@/components/code-nav-icon";
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { AppFooter } from "@/components/app-footer";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function DemoLayout({
    children
  }: {
    children: React.ReactNode;
  }) {
    return (
    <>
        <header className="z-[50] sticky top-0 w-full bg-background border-b backdrop-blur-sm border-border/40">
        <div className="container h-14 flex items-center">
          <Link
            href="/"
            className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
          >
            <CodeNavIcon className="w-8 h-6 mb-1.5 mr-1" />
            <span className="font-bold">CodeNav</span>
            <span className="sr-only">CodeNav</span>
          </Link>
          <nav className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-8 h-8 bg-background"
              asChild
            >
              <Link href="https://github.com/nafimulyoo/codenav">
                <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </header>
      {children}
      <div className="absolute bottom-0 w-full">
        <AppFooter />
      </div>
    </>
    );
  }