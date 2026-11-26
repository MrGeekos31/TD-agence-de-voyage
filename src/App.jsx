import Header from "./compo/Header/Header";
import Footer from "./compo/Footer/Footer";
import Destinations from "./compo/destinations/destinations";
import Login from "./compo/Login";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Destinations />
      <Login />
      </main>
      <Footer />
    </div>
  );
}

export default App;
