import AboutParas from "./Components/HomePage/AboutParas/AboutParas";
import Carousel from "./Components/HomePage/Carousel/Carousel";
import Navbar from "./Components/HomePage/Navbar/Navbar";
import NewArrivals from "./Components/HomePage/NewArrivals/NewArrivals";
import ShopByCategories from "./Components/HomePage/ShopByCategories/ShopByCategories";
import TextTicker from "./Components/HomePage/TextTicker/TextTicker";
import Banner from "./Components/HomePage/Banner/Banner";
import BestSeller from "./Components/HomePage/BestSeller/BestSeller";
import BigBanners from "./Components/HomePage/BigBanners/BigBanners";

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

      {/* Best Seller Section */}
      <BestSeller />

      {/* Big Banner Section */}
      <BigBanners />
    </>
  );
}

export default App;
