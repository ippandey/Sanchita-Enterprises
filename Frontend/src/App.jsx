import Carousal from "./Components/Carousal/Carousal";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <section className="overflow-x-hidden ">
        <Navbar />
      </section>

      <section>
        <Carousal />
      </section>
    </>
  );
}

export default App;
