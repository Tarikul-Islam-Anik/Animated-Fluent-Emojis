import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Category } from '../components/category';
import { Hero } from './../components/hero';
import { Smilies } from './../components/emojis/smilies';
import { HandGestures } from './../components/emojis/hand_gestures';
import { People } from './../components/emojis/people';
import { Pwa } from './../components/emojis/people_with_activities';
import { Pwp } from './../components/emojis/people_with_professions';
import { Animals } from './../components/emojis/animals';
import { Food } from './../components/emojis/food';
import { TravelAndPlaces } from './../components/emojis/travel_and_places';
import { Objects } from './../components/emojis/objects';
import { Activities } from './../components/emojis/activities';
import { Symbols } from './../components/emojis/Symbols';
import { Footer } from './../components/footer';

export default function Home() {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <main>
        <Hero />
        <Category />
        <h3 id="smilies">Smilies</h3>
        <Smilies />
        <h3 id="hand-gestures">Hand gestures</h3>
        <HandGestures />
        <h3 id="people">People</h3>
        <People />
        <Pwa />
        <Pwp />
        <h3 id="animals">Animals</h3>
        <Animals />
        <h3 id="food">Food</h3>
        <Food />
        <h3 id="travel-and-places">Travel and places</h3>
        <TravelAndPlaces />
        <h3 id="objects">Objects</h3>
        <Objects />
        <h3 id="activities">Activities</h3>
        <Activities />
        <h3 id="symbols">Symbols</h3>
        <Symbols />
        <Footer />
      </main>
    </>
  );
}
