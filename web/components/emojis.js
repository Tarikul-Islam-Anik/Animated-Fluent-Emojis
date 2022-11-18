import { useState, useEffect } from 'react';
import { Box } from './utilities/box';
import { fetcher } from './utilities/fetcher';

export const Emojis = ({name}) => {
  const [items, setItems] = useState([]);
  const [sliceIdx, setSliceIdx] = useState(16);
  const [input, setInput] = useState('');
  
  useEffect(() => {
    fetcher(`${process.env.NEXT_PUBLIC_API}${name.replace(' ', '%20').replace(' ', '%20')}`).then(
      (data) => {
        setItems(
          data.map((item) => [item.download_url, item.name.replace('.png', '')])
        );
      }
    );
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const filteredItems = items.filter((item) => {
    return item[1].toLowerCase().includes(input.toLowerCase());
  });

  return (
    <section>
      <div className="container mt-8 flex justify-between px-2">
        <h3 id={name.toLowerCase().replace(' ', '-').replace(' ', '-')}>
          {name}
        </h3>
        <div className="mr-52">
          <input
            className="search absolute "
            name="search"
            placeholder="Search"
            value={input}
            onChange={handleInput}
          />
          <svg
            className="relative top-2.5 left-2 h-5 w-5 text-slate-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-2.5 -2.5 24 24"
            width="24"
            fill="currentColor"
          >
            <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z"></path>
          </svg>
        </div>
      </div>
      <div className="contain">
        {filteredItems
          ? filteredItems.slice(0, sliceIdx).map(([url, name]) => {
              return <Box key={name} url={url} alt={name} />;
            })
          : null}
      </div>
      <div className="col-span-full my-6 flex items-center justify-center space-x-4 md:space-x-24">
        <button
          className={`
          ${
            sliceIdx >= items.length
              ? 'cursor-not-allowed opacity-50'
              : 'hover:opacity-75'
          }
          btn`}
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
          } btn`}
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
          btn`}
          disabled={sliceIdx === items.length}
          onClick={() => setSliceIdx(items.length)}
        >
          Load all
        </button>
      </div>
    </section>
  );
};
