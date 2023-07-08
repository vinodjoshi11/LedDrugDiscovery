 
import React from "react";
import Header from "../Header"; 
const WithLayout=({children})=>{ 
    return(  <React.Suspense fallback={<>...</>}>
        <Header/>
       {children}
    </React.Suspense>)
}
export default WithLayout;