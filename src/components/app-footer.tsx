import Link from "next/link";
import * as React from "react";

export function AppFooter() {
  return (
    <footer className="py-6 md:py-0 border-t border-border/40">
      <div className="z-20 w-full bg-background/95 shadow-top backdrop-blur supports-[backdrop-filter]:bg-background">
        <div className="mx-4 md:mx-8 flex h-14 items-center text-center justify-center">
        <p className="text-xs md:text-sm leading-loose text-muted-foreground text-left">
          Built by{" "}
          <Link
            href="/about"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Double Team
          </Link>
          {" "}for{" "}
          <Link
            href="https://compfest.id/competition/aic"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
          AI Innovation Challenge COMPFEST 16 UI
          </Link>
          . The source code is available on{" "}
          <Link
            href="https://github.com/nafimulyoo/codenav"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
        </div>
      </div>
      </footer>
  )
}


