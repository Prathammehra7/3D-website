import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar"
import {Hero} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-blue'>
        <Navbar />
        <div className='bg-red-600 bg-cover bg-no-repeat bg-center'>
          <Hero />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;