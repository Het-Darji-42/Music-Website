import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Description from './components/Description';
import InstrumentCard from './components/InstrumentCard';
import { bugleImage, pianoImage, bassGuitarImage } from './Assets';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Description
                colorBg={{ backgroundColor: '#000000', backgroundImage: 'linear-gradient(43deg, #000000 30%, #002146 100%)' }}
                InstrumentName="BASS GUITAR"
                InstrumentDetails="Bass, electrically amplified stringed musical instrument that has typically four to six heavy strings and is the lowest pitched type of guitar. The bass is further distinguished by its relatively long neck and scale length; the latter ranges from 34 to 37 inches or, on short-scale instruments, from 30 to 32 inches."
                ImageLink={bassGuitarImage}
                SecondInstrumentName="PIANO"
                SecondInstrumentDetails="Piano, a keyboard musical instrument having wire strings that sound when struck by felt-covered hammers operated from a keyboard. The standard modern piano contains 88 keys and has a compass of seven full octaves plus a few keys."
                SecondImageLink={pianoImage}
              />

              <Description
                colorBg={{ backgroundColor: '#000000' }}
                InstrumentName="BUGLE"
                InstrumentDetails="The bugle is a simple signaling brass instrument with a wide conical bore. It normally has no valves or other pitch-altering devices, and is thus limited to its natural harmonic notes, and pitch is controlled entirely by varying the air and embouchure."
                ImageLink={bugleImage}
                SecondInstrumentName="BUGLE"
                SecondInstrumentDetails="The bugle is a simple signaling brass instrument with a wide conical bore. It normally has no valves or other pitch-altering devices, and is thus limited to its natural harmonic notes, and pitch is controlled entirely by varying the air and embouchure."
                SecondImageLink={bugleImage}
              />
            </>
          }
        />

        {/* Instruments Route */}
        <Route path="/instruments" element={<InstrumentCard ImageOfCard={bugleImage} />} />
      </Routes>
    </Router>
  );
}

export default App;
