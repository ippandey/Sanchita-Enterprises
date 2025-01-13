import AboutParas from "./Components/HomePage/AboutParas/AboutParas";
import Navbar from "./Components/Navbar/Navbar";
import NewArrivals from "./Components/HomePage/NewArrivals/NewArrivals";
import ShopByCategories from "./Components/HomePage/ShopByCategories/ShopByCategories";
import TextTicker from "./Components/HomePage/TextTicker/TextTicker";
import Banner from "./Components/HomePage/Banner/Banner";
import BestSeller from "./Components/HomePage/BestSeller/BestSeller";
import BigBanners from "./Components/HomePage/BigBanners/BigBanners";
import Essentials from "./Components/HomePage/Essentials/Essentials";
import OurStory from "./Components/HomePage/OurStory/OurStory";
import Blogs from "./Components/HomePage/Blogs/Blogs";
import Testimonials from "./Components/HomePage/Testimonials/Testimonials";
import FAQ from "./Components/HomePage/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";
import ImageSlider from "./Components/HomePage/ImageSlider/ImageSlider";

function App() {
  return (
    <>
      {/* Navbar Section*/}
      <Navbar />

      {/* Image Slider Section*/}
      <ImageSlider />

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

      {/* Essentials Section */}
      <Essentials />

      {/* Our Story Section */}
      <OurStory />

      {/* Blogs Section */}
      <Blogs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;
