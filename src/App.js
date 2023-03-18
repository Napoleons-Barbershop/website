import { Route, Routes, HashRouter } from 'react-router-dom';
import Home from './screens/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
