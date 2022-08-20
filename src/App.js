import ApplicationRouter from "./router/router";
import UserProvider from "./context/userContext";

function App() {
  return (
    <>
      <UserProvider>
        <ApplicationRouter />
      </UserProvider>
    </>
  );
}

export default App;
