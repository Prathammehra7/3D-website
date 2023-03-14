import { BrowserRouter } from "react-router-dom";

import {Hero} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-blue'>
        <div className='bg-red-100 bg-cover bg-no-repeat bg-center'>
          <Hero />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;