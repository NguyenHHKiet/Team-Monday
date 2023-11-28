import React, { lazy, Suspense } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./routes/root";
import Contact from "./routes/contact";
import CircularProgress from "@mui/material/CircularProgress";
import "react-toastify/dist/ReactToastify.css";

const PersonalityTest = lazy(() => import("./pages/PersonalityTest"));
const ResultTest = lazy(() => import("./pages/Result"));
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
        </>
    );
};

export default App;
