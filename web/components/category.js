import Link from 'next/link';

export const Category = () => {
  return (
    <section
      className="sticky top-5 z-50 col-span-full mx-auto flex 
    max-w-screen-lg flex-wrap justify-evenly gap-5 rounded-lg bg-slate-100/50 p-4 backdrop-blur-sm 
    dark:bg-slate-800/75"
    >
      <Link href="#smilies">
        <a className="rounded-md bg-slate-200/60 py-1.5 px-2 text-slate-700 transition hover:scale-[1.05] dark:bg-slate-700/80 dark:text-slate-300">
          Smiles
        </a>
      </Link>
      <Link href="#hand-gestures">
        <a className="rounded-md bg-slate-200/60 py-1.5 px-2 text-slate-700 transition hover:scale-[1.05] dark:bg-slate-700/80 dark:text-slate-300">
          Hand gestures
        </a>
      </Link>
      <Link href="#people">
        <a className="rounded-md bg-slate-200/60 py-1.5 px-2 text-slate-700 transition hover:scale-[1.05] dark:bg-slate-700/80 dark:text-slate-300">
          People
        </a>
      </Link>
      <Link href="#animals">
        <a className="rounded-md bg-slate-200/60 py-1.5 px-2 text-slate-700 transition hover:scale-[1.05] dark:bg-slate-700/80 dark:text-slate-300">
          Animals
        </a>
      </Link>
      <Link href="#food">
        <a className="rounded-md bg-slate-200/60 py-1.5 px-2 text-slate-700 transition hover:scale-[1.05] dark:bg-slate-700/80 dark:text-slate-300">
          Food
        </a>
      </Link>
      <Link href="#travel-and-places">
        <a className="rounded-md bg-slate-200/60 py-1.5 px-2 text-slate-700 transition hover:scale-[1.05] dark:bg-slate-700/80 dark:text-slate-300">
          Travel and places
        </a>
      </Link>
      <Link href="#objects">
        <a className="rounded-md bg-slate-200/60 py-1.5 px-2 text-slate-700 transition hover:scale-[1.05] dark:bg-slate-700/80 dark:text-slate-300">
          Objects
        </a>
      </Link>
      <Link href="#activities">
        <a className="rounded-md bg-slate-200/60 py-1.5 px-2 text-slate-700 transition hover:scale-[1.05] dark:bg-slate-700/80 dark:text-slate-300">
          Activities
        </a>
      </Link>
      <Link href="#symbols">
        <a className="rounded-md bg-slate-200/60 py-1.5 px-2 text-slate-700 transition hover:scale-[1.05] dark:bg-slate-700/80 dark:text-slate-300">
          Symbols
        </a>
      </Link>
    </section>
  );
};
