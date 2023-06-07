import React, {createContext, useState} from 'react'

export const context = createContext();

const Global = ({children}) => {
    const [state, setState] = useState(52772);
    const [userInput, setUserInput] = useState("a");
  return (
    <context.Provider value={{state, setState, userInput, setUserInput}}>{children}</context.Provider>
  )
}


export default Global