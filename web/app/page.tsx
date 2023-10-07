import { Hero } from "@/components/hero";
import EmojiList from "@/components/emoji-list";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <EmojiList />
    </div>
  );
}
