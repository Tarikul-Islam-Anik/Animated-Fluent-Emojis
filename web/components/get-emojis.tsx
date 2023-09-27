import { useState, useEffect } from "react";
import Placeholder from "./placeholder";
const GetEmojis = ({ category }: { category: string }) => {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API + category)
      .then((res) => res.json())
      .then((data) => setEmojis(data));
  }, [category]);

  if (!emojis) return <span>Please try again later.</span>;
  return (
    <div className="grid grid-cols-2 w-[55%] mx-auto md:w-auto md:grid-cols-6 gap-4">
      {emojis?.map((emoji: { name: string; download_url: string }) => {
        return (
          <Placeholder
            key={emoji.name}
            url={emoji.download_url}
            alt={emoji.name.replace(".png", "")}
          />
        );
      })}
    </div>
  );
};

export default GetEmojis;
