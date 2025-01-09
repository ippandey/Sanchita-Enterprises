import Carousel from "./Components/Carousel/Carousel";
import Navbar from "./Components/Navbar/Navbar";
import TextTicker from "./Components/TextTicker/TextTicker";

function App() {
  return (
    <>
      {/* Navbar */}
      <section className="overflow-x-hidden ">
        <Navbar />
      </section>

      {/* Carousel */}
      <section>
        <Carousel />
      </section>

      {/* Text Ticker/Marquee */}

      <TextTicker />
    </>
  );
}

export default App;
