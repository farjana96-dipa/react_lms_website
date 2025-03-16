import React from "react";
import { createContext } from "react";


export const MyContext = createContext();

const AppContextProvider = ({ children }) => {
    const value = {};  // Empty context for now

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
};

export default AppContextProvider;