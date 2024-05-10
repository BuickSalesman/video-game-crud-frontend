import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { LogoutLink } from "./components/LogoutLink";

function App() {
  return (
    <div>
      <div className="flex flex-row items-center justify-start space-x-4 p-4 bg-gray-100">
        <Header />
        <Signup />
        <Login />
        <LogoutLink />
      </div>
      <Content />
      <Footer />
    </div>
  );
}

export default App;

// i worked on this today but just didn't code anything
