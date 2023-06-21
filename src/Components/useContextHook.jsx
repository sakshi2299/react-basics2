import { useContext } from "react";
import React from "react";
const MyContext = React.createContext()
const MyProvider=({children})=>{
    const value = 'Hello,World!';
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>

}
const MyComponent=()=>{
    const contextValue = useContext(MyContext);
    return<div>{contextValue}</div>
}
const Hook =()=>{
    return(
        <MyProvider>
            <MyComponent/>
        </MyProvider>
    )
  }
  export default Hook;
