import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { dummyCourses } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

const AppContextProvider = (props) => {

const navigate = useNavigate();

const [allCourses, setAllCourses] = useState([])
const [isEducator,setIsEducator] = useState(true)

const fetchAllCourses = async()=>{
    setAllCourses(dummyCourses)
}

const calculateRating = (course)=>{
    if(!course.courseRatings || course.courseRatings.length === 0) return 0;
    let total = 0;
    course.courseRatings.forEach(rating =>{
        total += rating.rating;
    })

    console.log(total);
    return total / course.courseRatings.length;
}

useEffect(()=>{
    fetchAllCourses()
},[])

    const value = {
    
        allCourses,
        navigate,
        calculateRating,
        isEducator,
        setIsEducator,
    };  // Empty context for now

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;



