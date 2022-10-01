import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { allRoutes } from "./utils/routes";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          {Object.values(allRoutes).map(({ path, Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
