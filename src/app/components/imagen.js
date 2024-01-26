"use client"

import Image from "next/image";
import style from "./imagen.module.css";
import { useState, useEffect} from "react";

function Imagen(){
    const[pokemon,setPokemon]=useState('/vercel.svg');
    const [estado, setEstado]=useState('name');
    const[id,setId]=useState();
    const url="https://pokeapi.co/api/v2/pokemon/15";
    useEffect(()=>{fetch (url)
        .then(res=>res.json())
        .then(data=>{setPokemon(data.sprites.front_default),setEstado(data.species.name),setId(data.held_items.id)})},[])
    return(
        <div className={style["contenedor"]}>
            <h2>My Pokemon</h2>
            <h1>{estado}</h1>
            <p >{id}</p>
            <Image className="img" src={pokemon} width={325} height={325} />
        </div>
    )
}
export default Imagen;