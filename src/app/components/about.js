"use client"

import Image from "next/image";
import style from "./about.module.css";
import { useState, useEffect} from "react";

function About(){
    const[tipo,setTipo]=useState('tipo');
    const[alto,setAlto]=useState();

    const[ancho,setAncho]=useState();
    const[habilidades,setHabilidades]=useState('Habilidades');
    const url="https://pokeapi.co/api/v2/pokemon/15";
    useEffect(()=>{fetch (url)
        .then(res=>res.json())
        .then(data=>{setTipo((data.types[0].type.name),(data.types[1].type.name)),setAlto(data.height),setAncho(data.weight),setHabilidades(data.abilities[0].ability.name,data.abilities[1].ability.name)})},[])

    return(
        <div className={style["contenedor"]}>
            <h3>About</h3>
            <p>Type:{tipo}</p>
            <p>Height:{alto}m</p>
            <p>Weight:{ancho}kg</p>
            <p>Abilities:{habilidades}</p>
            
    
        </div>
    )
}
export default About;
