
import {
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import { ProductsProvider } from "./context/ProductsContext";

function App() {
  return (
    <ProductsProvider>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </ProductsProvider>
  )
}

export default App
