import Navigation from "./components/navbar/Navbar";
import ApplicationRouter from "./router/router";
import Footer from "./components/footer/Footer";
import UserProvider from "./context/userContext";

function App() {
  return (
    <>
      <UserProvider>
        <Navigation />
        <ApplicationRouter />
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
