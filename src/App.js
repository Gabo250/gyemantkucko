import Footer from './components/footer/Footer';
import About from './components/header/About';
import Header from './components/header/Header';
import Nav from './components/navcomp/Nav';
import PriceList from './components/pricecomp/PriceList';
import Service from './components/service/Service';
import Cookie from './components/utility/Cookie';
import VideoSection from './components/videocomponent/VideoSection';

function App() {
  return (
    <div className="bg-gradient-to-r from-black  via-purple-950 to-black overflow-x-hidden select-none z-[2]">
      <Nav/>
      <Header/>
      <About />
      <Service/>
      <VideoSection/>
      <PriceList/>
      <Footer/>
      <Cookie/>
    </div>
  );
}

export default App;