import React from 'react'
import { useAccordionContext } from './Accordion';
import { useAccordionItemContext } from './AccordionItem';

const AccordionContent = ({className, children}) => {


  const id = useAccordionItemContext();

    const {openItemId} = useAccordionContext();
    const isOpen = openItemId === id
  return (
    <div className={isOpen?`${className ?? ''} open`:className}>{children}</div>
  )
}

export default AccordionContent