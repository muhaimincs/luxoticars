import Image from "next/image";
import { Display } from "./display";

export default function Home() {
  return (
    <div className="relative grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Display />
      </main>
      <footer className="sticky text-white p-3 rounded mt-3 bottom-3 row-start-3 flex gap-6 flex-wrap items-center justify-center border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://reviews.luxoticars.cc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reviews
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://s.shopee.com.my/3L8k4CjBxu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Store
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://histographia.luxoticars.cc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Histographia
        </a>
      </footer>
    </div>
  );
}
