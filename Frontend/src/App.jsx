import AboutParas from "./Components/AboutParas/AboutParas";
import Carousel from "./Components/Carousel/Carousel";
import Navbar from "./Components/Navbar/Navbar";
import NewArrivals from "./Components/NewArrivals/NewArrivals";
import ShopByCategories from "./Components/ShopByCategories/ShopByCategories";
import TextTicker from "./Components/TextTicker/TextTicker";
import Banner from "./Components/Banner/Banner";

function App() {
  return (
    <>
      {/* Navbar Section*/}
      <Navbar />

      {/* Carousel Section*/}
      <Carousel />

      {/* Text Ticker/Marquee Section*/}
      <TextTicker />

      {/* New Arrival Section */}
      <NewArrivals />

      {/* Shop By Categories Section */}
      <ShopByCategories />

      {/* About Paragraph Section */}
      <AboutParas />

      {/* Banner Section */}
      <Banner />
    </>
  );
}

export default App;
