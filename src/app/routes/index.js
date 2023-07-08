import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";  
const  CompoundSearch=React.lazy(() => import("../pages/CompoundSearch"));
const  PredictiveAI=React.lazy(() => import("../pages/PredictiveAI"));
const  BioAssaySearch=React.lazy(() => import("../pages/BioAssaySearch"));

function AppRoutes() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: (<CompoundSearch/>),
        },
        {
          path: "/bio-assay-search",
          element: (<BioAssaySearch/>),
        },
        {
          path: "/predictive-ai",
          element: (<PredictiveAI/>),
        },
      ]);
    return (<RouterProvider router={router} />);
}

export default AppRoutes;