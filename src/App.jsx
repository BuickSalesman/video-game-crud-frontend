import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

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
