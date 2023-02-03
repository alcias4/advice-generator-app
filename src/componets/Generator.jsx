import { useState, useEffect } from 'react'
import './generator.css'


export function Generator({data}){

    return <form  action='/' className="contend">
        <label>Advice #{data != undefined ? data.id: null}</label>
            <p>{data != undefined ? data.advice: null}</p>
        <img src="./images/pattern-divider-mobile.svg" alt="icon" />
        <button className='btn'><img src="./images/icon-dice.svg" alt="" /></button>
    </form>
}