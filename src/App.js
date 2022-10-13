import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import { allRoutes } from "./utils/routes";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ChatContextProvider>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {Object.values(allRoutes).map(({ path, Element }) => (
                <Route key={path} path={path} element={<Element />} />
              ))}
            </Routes>
          </Suspense>
        </ChatContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
