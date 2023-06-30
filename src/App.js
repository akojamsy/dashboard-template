import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import { Home, Login } from './pages';

function App() {
  return (
    < >
      <BrowserRouter>
        <Routes>
          <Route path='' element={<PrivateRoute />} >
            <Route path='/' element={<Home />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
