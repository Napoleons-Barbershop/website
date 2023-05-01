import { Route, Routes, HashRouter } from 'react-router-dom';
import Home from './screens/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './screens/Profile/Profile';
import LoginProvider from './contexts/loginProvider';
import AdminDashboard from './screens/AdminDashboard/AdminDashboard';
import AdminDashboardProvider from './contexts/adminDashboardProvider';

const App = () => {
  return (
    <HashRouter basename='/'>
      <LoginProvider>
        <AdminDashboardProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/admin-dashboard' element={<AdminDashboard />} />
          </Routes>
        </AdminDashboardProvider>
      </LoginProvider>
    </HashRouter>
  );
}

export default App;
