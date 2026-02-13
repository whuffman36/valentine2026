import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import WrongAnswer from './WrongAnswer';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';
import Page10 from './Page10';
import Page11 from './Page11';
import Page12 from './Page12';

/*
 * 1 - ponchos, chivas game
 * 2 - Yale sweater, outdrinking with friends
 * 3 - palacio de bellas artes
 * 4 - chapultepec photoshoot
 * 5 - mirror pic in coyoacan
 * 6 - aquarium (several)
 * 7 - xochimilco (several)
 * 8 - halloween (several)
 * 9 - spicy matcha
 * 10 - her favorite photo of me (???)
 * 11 - birthday! (check whatsapp)
 * 12 - elevator mirror pic
 * 13 - japan jersey pic
 * 14 - new years photoshoot (several)
 */

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wrong-answer" element={<WrongAnswer />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="/page7" element={<Page7 />} />
        <Route path="/page8" element={<Page8 />} />
        <Route path="/page9" element={<Page9 />} />
        <Route path="/page10" element={<Page10 />} />
        <Route path="/page11" element={<Page11 />} />
        <Route path="/page12" element={<Page12 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
