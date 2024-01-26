"use client"

import Image from "next/image";
import style from "./stats.module.css";
import { useState, useEffect} from "react";

function Stats(){
    const[hp,setHp]=useState();
    const[attock,setAttack]=useState();
    const[adefense,setDefense]=useState();
    const[speed,setSpeed]=useState();
    const url="https://pokeapi.co/api/v2/pokemon/15";
    

    return(
        <div className={style["contenedor"]}>
            <h3>Stats</h3>
            <p>HP:60</p>
            <p>Attack:62</p>
            <p>Defense:63</p>
            <p>Speed:60</p>
            
    
        </div>
    )
}
export default Stats;