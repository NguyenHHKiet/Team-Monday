import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./routes/root";
import Home from "./Home";
// import MBTIPage from "./mbtiType";
import { LanguageProvider } from './Languagecontext';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
]);

const App = () => {
    return   <LanguageProvider>
          <Home />
      {/* <MBTIPage/> */}
    </LanguageProvider>
};

export default App;
