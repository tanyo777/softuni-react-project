import Navigation from "./components/navbar/Navbar";
import ApplicationRouter from "./router/router";
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <ApplicationRouter />
      <Footer />
    </div>
  );
}

export default App;
