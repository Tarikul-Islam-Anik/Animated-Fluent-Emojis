import { useState, useEffect } from 'react';
import { Box } from '../utilities/box';
import { fetcher } from '../utilities/fetcher';
const API =
  'https://api.github.com/repos/Tarikul-Islam-Anik/Microsoft-Teams-Animated-Emojis/contents/Emojis/Symbols';

export const Symbols = () => {
  const [items, setItems] = useState([]);
  const [sliceIdx, setSliceIdx] = useState(16);
  useEffect(() => {
    fetcher(API).then((data) => {
      setItems(
        data.map((item) => [item.download_url, item.name.replace('.png', '')])
      );
    });
  }, []);

  return (
    <>
      {items.slice(0, sliceIdx).map(([url, name]) => (
        <Box key={name} url={url} alt={name} />
      ))}
      <div className="col-span-full my-6 flex items-center justify-center space-x-24">
        <button
          className={`
          ${
            sliceIdx >= items.length
              ? 'cursor-not-allowed opacity-50'
              : 'hover:opacity-75'
          }
          rounded-lg bg-slate-200/80 px-4 py-3 font-medium transition dark:bg-slate-700/80`}
          onClick={() => setSliceIdx(sliceIdx + 16)}
          disabled={sliceIdx >= items.length}
        >
          Load more
        </button>
        <button
          className={`${
            sliceIdx >= 32
              ? 'hover:opacity-75'
              : 'cursor-not-allowed opacity-50'
          } rounded-lg bg-slate-200/80 px-4 py-3 font-medium  transition dark:bg-slate-700/80`}
          disabled={sliceIdx < 32}
          onClick={() => setSliceIdx(16)}
        >
          Reset
        </button>
        <button
          className={`${
            sliceIdx === items.length
              ? 'cursor-not-allowed opacity-50'
              : 'hover:opacity-75'
          }
          rounded-lg bg-slate-200/80 px-4 py-3 font-medium transition dark:bg-slate-700/80`}
          disabled={sliceIdx === items.length}
          onClick={() => setSliceIdx(items.length)}
        >
          Load all
        </button>
      </div>
    </>
  );
};
