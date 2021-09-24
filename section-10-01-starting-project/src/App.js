import { useContext } from "react";
import AuthContext from "store/auth-context";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const authContext = useContext(AuthContext);

  return (
    <>
      <MainHeader />
      <main>
        {!authContext.isLoggedIn && <Login />}
        {authContext.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
