"use client";

import { useCallback } from "react";

interface CounterProps {
    title : string;
    subtitle : string ;
    value : number ;
    onChange: (value : number ) => void
}

export default function Counter({title , subtitle , value , onChange} : CounterProps) {

    const onAdd = useCallback(() => {
        onChange( value +1 )
    })
  return (


  )
}
