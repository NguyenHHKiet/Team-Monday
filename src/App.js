import React, { lazy, Suspense } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./routes/root";
import Contact from "./routes/contact";
import CircularProgress from "@mui/material/CircularProgress";
// import MBTIPage from "./mbtiType";
import { LanguageProvider } from "./Languagecontext";
import "react-toastify/dist/ReactToastify.css";

const PersonalityTest = lazy(() => import("./pages/PersonalityTest"));
const ResultTest = lazy(() => import("./pages/Result"));
const Home = lazy(() => import("./Home"));
const Loader = () => {
    return (
        <div className="flex text-white min-h-screen justify-center items-center bg-slate-700">
            <CircularProgress color="inherit" />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<Loader />}>
                        <LanguageProvider>
                            <Home />
                        </LanguageProvider>
                    </Suspense>
                ),
            },
            {
                path: "contacts/:contactId",
                element: <Contact />,
            },
            {
                path: "test",
                element: (
                    <Suspense fallback={<Loader />}>
                        <PersonalityTest />
                    </Suspense>
                ),
            },
            {
                path: "result",
                element: (
                    <Suspense fallback={<Loader />}>
                        <ResultTest />
                    </Suspense>
                ),
            },
        ],
    },
]);

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
            {/* <>
                <Home />
                <MBTIPage/>
            </> */}
        </>
    );
};

export default App;
