
import {
  Routes,
  Route
} from "react-router-dom";

import { ToastContainer } from 'react-toastify';

import GlobalStyles from './styles/global';

import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </>
  )
}

export default App
