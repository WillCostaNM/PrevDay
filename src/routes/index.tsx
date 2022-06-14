import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

export const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route 
          path="*" 
          element={ <Navigate to="/" /> }
        />

        <Route/>
      </Routes>
    </BrowserRouter>
  )
}