import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import { allRoutes } from "./utils/routes";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ChatContextProvider>
          <Routes>
            {Object.values(allRoutes).map(({ path, Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
          </Routes>
        </ChatContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
