import { Route, Routes, HashRouter } from 'react-router-dom';
import Home from './screens/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
// import useFirebaseConfig from './hooks/firebase';
import Profile from './screens/Profile/Profile';
import LoginProvider from './contexts/loginProvider';

const App = () => {

  // useFirebaseConfig();

  return (
    <HashRouter basename='/'>
      <LoginProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </LoginProvider>
    </HashRouter>
  );
}

export default App;
