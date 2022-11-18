import { Toaster } from 'react-hot-toast';
import { Category } from '../components/category';
import { Hero } from './../components/hero';
import { Emojis } from '../components/emojis';
import { Footer } from './../components/footer';

const categories = [
  'Smilies',
  'Hand gestures',
  'People',
  'People with activities',
  'People with professions',
  'Animals',
  'Food',
  'Travel and places',
  'Objects',
  'Activities',
  'Symbols'
];

export default function Home() {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <main>
        <Hero />
        <Category />
        <main>
          {categories.map((category) => (
            <Emojis key={category} name={category} />
          ))}
        </main>
        <Footer />
      </main>
    </>
  );
}
