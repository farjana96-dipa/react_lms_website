import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { dummyCourses } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";

import humanizeDuration from "humanize-duration";


export const AppContext = createContext();

const AppContextProvider = (props) => {

const navigate = useNavigate();

const [allCourses, setAllCourses] = useState([])
const [isEducator,setIsEducator] = useState(true)

const fetchAllCourses = async()=>{
    setAllCourses(dummyCourses)
}

// Calculate the average rating of a course
const calculateRating = (course)=>{
    if(!course.courseRatings || course.courseRatings.length === 0) return 0;
    let total = 0;
    course.courseRatings.forEach(rating =>{
        total += rating.rating;
    })

    console.log(total);
    return total / course.courseRatings.length;
}

// Calculate the Chapter Duration
    const chapterDuration = (chapter)=>{
        let time = 0;
        chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration)
        console.log("Course Duration is : " + humanizeDuration(time*60*1000, {units: ["h","m"]}));
        return humanizeDuration(time*60*1000, {units: ["h","m"]})
    }

    // Calculate the Course Duration

    const courseDuration = (course)=> {
        let time = 0;
        if (course?.courseContent && Array.isArray(course.courseContent)) {
            course.courseContent.map((chapter) => {
              if (Array.isArray(chapter.chapterContent)) {
                chapter.chapterContent.map((lecture) => {
                  time += lecture.lectureDuration;
                });
              }
            });

            return humanizeDuration(time*60*1000, {units: ["h","m"]})
          }
    } 

   

   


    // Calculate the No of lectures in a chapter
    const numOfLectures = (course)=>{
        let num = 0;
        if(course.courseContent && Array.isArray(course.courseContent)){
           course.courseContent.map((chapter)=>{
            if(Array.isArray(chapter.chapterContent)){
                chapter.chapterContent.map((lecture)=>{
                    num += 1;
                })
            }
           })
        }
        
        return num;
    }

    // Actual Price Calculate
    const actualPrice = (course)=>{
        let price = course.coursePrice;
        let r = 0;
        if(course.discount > 0){
             r = course.discount / 100;
        }

        let discount = price * r;
        let actualPrice = price - discount;
        console.log("Discount is : " + discount);
        console.log("Actual Price is : " + actualPrice);
        return actualPrice;
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
        courseDuration,
        chapterDuration,
        numOfLectures,
        actualPrice,
    };  // Empty context for now

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;



