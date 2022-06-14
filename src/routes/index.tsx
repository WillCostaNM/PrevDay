import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { Home } from "pages";

export const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route 
          path="*" 
          element={ <Navigate to="/" /> }
        />

        <Route
          path="/"
          element={<Home/>}
        />
      </Routes>
    </BrowserRouter>
  )
}