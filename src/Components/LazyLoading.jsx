import React, { Suspense } from "react";
import { lazy } from "react";
const LazyComponent =lazy(()=>import ("./LazyComponent"));

function LazyLoading(){
    return(
        <div>
            {/*using suspense to handle the loading state */}
            <Suspense fallback ={<div>Loading...</div>}>
            {/*Lazy-loaded Component */}
            <LazyComponent/>
            </Suspense>
        </div>
    );
}
export default LazyLoading;
