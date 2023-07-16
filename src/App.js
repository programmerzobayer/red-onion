
import './App.css';
import { BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Item from './Components/Item/Item';
import Signup from './Components/Signup/Signup';

function App() {
  return (
<BrowserRouter>
<Routes>
   <Route path='' index element={<Home/>} />
   <Route path='/food/:Id' index element={<Item/>} />
   <Route path='signup' index element={<Signup/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
