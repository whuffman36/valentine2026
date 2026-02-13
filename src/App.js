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
import Page13 from './Page13';
import Page14 from './Page14';
import Page15 from './Page15';
import Page16 from './Page16';
import Page17 from './Page17';
import Page18 from './Page18';
import Page19 from './Page19';
import TableOfContents from './TableOfContents';


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
        <Route path="/page13" element={<Page13 />} />
        <Route path="/page14" element={<Page14 />} />
        <Route path="/page15" element={<Page15 />} />
        <Route path="/page16" element={<Page16 />} />
        <Route path="/page17" element={<Page17 />} />
        <Route path="/page18" element={<Page18 />} />
        <Route path="/page19" element={<Page19 />} />
        <Route path="/table-of-contents" element={<TableOfContents />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
