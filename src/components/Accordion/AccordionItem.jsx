import React, { createContext, useContext } from 'react'

const AccordionItemContext = createContext();

export function useAccordionItemContext(){
    const ctx = useContext(AccordionItemContext);
    if(!ctx){
        throw new Error('incorrect use')
    }
    return ctx;
}

const AccordionItem = ({ id, children, className}) => {

  return (
    <AccordionItemContext.Provider value={id}>
        <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  )
}

export default AccordionItem