import { saveAs } from 'file-saver';
import { DownloadIcon, CodeIcon } from '@heroicons/react/solid';
import { toast } from 'react-toastify';

const downloadImage = (url, filename) => {
  saveAs(url, filename);
  toast.success(`Saved as ${filename}.png`);
};

const copyToClipboard = (url, alt) => {
  navigator.clipboard.writeText(
    `<img src="${url}" alt="${alt}" width="25" height="25" />`
  );
  toast.success('Copied to clipboard!');
};

export const Box = ({ url, alt }) => {
  return (
    <div
      className="group relative flex cursor-pointer flex-col items-center justify-center rounded-xl 
    bg-slate-100/60 p-4 transition hover:drop-shadow-sm dark:bg-slate-800"
    >
      <img
        className="transition-all duration-300 ease-in-out group-hover:scale-110"
        src={url}
        alt={alt}
      />
      <p className="w-4/5 truncate rounded-md p-1 text-center text-xl font-semibold opacity-100 transition-all duration-200 ease-in-out group-hover:opacity-0">
        {alt}
      </p>
      <div className="absolute -bottom-1 text-center text-slate-700 opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-3.5 group-hover:opacity-100 dark:text-slate-300">
        <div className="flex w-full space-x-2">
          <button
            className="w-full rounded-md bg-slate-200 p-2 transition hover:opacity-75 dark:bg-slate-700"
            onClick={() => downloadImage(url, alt)}
          >
            <DownloadIcon className="h-5 w-5" />
          </button>
          <button
            className="w-full rounded-md bg-slate-200 p-2 transition hover:opacity-75 dark:bg-slate-700"
            onClick={() => copyToClipboard(url, alt)}
          >
            <CodeIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
