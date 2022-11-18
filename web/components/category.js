import Link from 'next/link';

const categories = [
  'Smiles',
  'Hand gestures',
  'People',
  'Animals',
  'Food',
  'Travel and places',
  'Objects',
  'Activities',
  'Symbols'
];

export const Category = () => {
  return (
    <section
      className="sticky top-5 z-50 col-span-full mx-auto flex 
    max-w-screen-lg flex-wrap justify-evenly gap-5 rounded-lg bg-slate-100/50 p-4 backdrop-blur-sm 
    dark:bg-slate-800/75"
    >
      {categories.map((category) => (
        <Link
          href={`#${category
            .toLowerCase()
            .replace(' ', '-')
            .replace(' ', '-')}`}
        >
          <a className="rounded-md bg-slate-200/60 py-1.5 px-2 text-slate-700 transition hover:scale-[1.05] dark:bg-slate-700/80 dark:text-slate-300">
            {category}
          </a>
        </Link>
      ))}
    </section>
  );
};
