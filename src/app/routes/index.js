import React from "react"; 
import { Routes, Route, Link } from "react-router-dom";
import WithLayout from "../components/Layout";  
const  CompoundSearch=React.lazy(() => import("../pages/CompoundSearch"));
const  PredictiveAI=React.lazy(() => import("../pages/PredictiveAI"));
const  BioAssaySearch=React.lazy(() => import("../pages/BioAssaySearch"));
const  BioAssayDetail=React.lazy(() => import("../pages/BioAssayDetail"));
const  BioAssayResult=React.lazy(() => import("../pages/BioAssayResult"));

function NoMatch() {
    return (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }
function AppRoutes() {  
      return ( <Routes> 
          <Route path="/" index element={<WithLayout><CompoundSearch /></WithLayout>} />
          <Route path="/bio-assay-search" element={<WithLayout><BioAssaySearch /></WithLayout>}/> 
          <Route path="/bio-assay-detail" element={<WithLayout><BioAssayDetail /></WithLayout>} />   
          <Route path="/bio-assay-result" element={<WithLayout><BioAssayResult /></WithLayout>} />   
          <Route path="/predictive-ai" element={<WithLayout><PredictiveAI /></WithLayout>} />  
          <Route path="*" element={<WithLayout><NoMatch /></WithLayout>} /> 
      </Routes>) 
}

export default AppRoutes;