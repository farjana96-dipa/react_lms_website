import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { dummyCourses } from "../assets/assets";


export const MyContext = createContext();

const AppContextProvider = (props) => {

const currency = import.meta.env.VITE_CURRENCY

const [allCourses, setAllCourses] = useState([])

const fetchAllCourses = async()=>{
    setAllCourses(dummyCourses)
}

useEffect(()=>{
    fetchAllCourses()
},[])

    const value = {
        currency
    };  // Empty context for now

    return (
        <MyContext.Provider value={value}>
            {props.children}
        </MyContext.Provider>
    );
};

export default AppContextProvider;