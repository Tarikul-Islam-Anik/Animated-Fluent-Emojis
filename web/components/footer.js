import { LightningBoltIcon } from "@heroicons/react/solid";

export const Footer = () => {
  return (
    <footer className="col-span-full">
      <div
        className="mx-auto flex w-full flex-col items-center justify-center 
        space-y-1 rounded-md bg-slate-200/60 
          px-4 py-3 text-xs dark:bg-slate-800 dark:text-slate-200 sm:flex-row"
      >
        <div className="flex flex-row">
          <p>Made with </p>
           <LightningBoltIcon
            aria-hidden="true"
            className="animate-pulse w-4 h-4 mx-1 cursor-pointer text-green-400 dark:text-green-500"
          />
          by 
          <a href="https://oxyzen.me/" className="mx-1">
            <strong>OxyZen</strong>
          </a> 
        </div>
      </div>
    </footer>
  );
};
