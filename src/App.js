import Banner from "./components/Banner";
import Experts from "./components/Experts";
import Header from "./components/Header";
import NewsLetter from "./components/NewsLetter";
import Plans from "./components/Plans";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div className="flex flex-col gap-36">
        <Experts />
        <NewsLetter />
      </div>
      <Plans />
      <Footer />
    </div>
  );
}

export default App;
