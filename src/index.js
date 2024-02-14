// import React, { Suspense } from "react";
// import ReactDom from "react-dom/client";
// import App from "./App";
// import "./index.css"

// // import {NextUIProvider} from "@nextui-org/react";
// import { BrowserRouter } from "react-router-dom";
// // import AuthProvider from "./context/AuthContext";
// // import { QueryProvider } from "./lib/react-query/QueryProvider";
// // import { ToastContainer,  } from "react-toastify";
// import 'react-toastify/ReactToastify.css'
// import Loader from "./components/Loader";


// const root = ReactDom.createRoot(document.getElementById("root"));

// root.render(

//     <React.StrictMode>
//         <BrowserRouter>
//             {/* <NextUIProvider> */}
//             {/* <QueryProvider> */}
//             {/* <AuthProvider> */}
//             <Suspense fallback={<Loader />}>
//                 <App />
//             </Suspense>

//             {/* <ToastContainer /> */}
//             {/* </AuthProvider>     */}
//             {/* </QueryProvider> */}
//             {/* </NextUIProvider> */}
//         </BrowserRouter>

//     </React.StrictMode>


// )

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Loader from "./components/Loader";
import { BrowserRouter } from "react-router-dom";
const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <App />
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>
);