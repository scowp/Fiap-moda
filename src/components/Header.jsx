import logo from "../img/logo.png"
import styled from "styled-components"

import { Link } from "react-router-dom"

export default function Header(){

    const DivHeader = styled.header `

    background-color: #151819;
    border-bottom: solid 2px #ed145b;
    padding: 10px;
    margin-bottom: 50px;

    img {
        cursor: pointer;
        width: 230px;
    }

    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    
    ul {
        display: flex;
    }

    a {
        color: #91a3ad;
        margin-left: 40px;
        padding: 15px 0px;
        border-bottom: solid 2px rgba(0,0,0,0);
        cursor: pointer;
        transition: color 0.3s;
    }

    a:hover {
        color: #ed145b;
        border-bottom: solid 2px #ed145b;
    }

`
    
    return (
        <DivHeader>
            <nav>
                <img src={logo}/>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Masculino">Moda Masculina</Link></li>
                    <li><Link to="/Feminina">Moda Feminina</Link></li>
                    <li><Link to="/Infantil">Moda Infantil</Link></li>
                    <li><Link to="/Sobre">Sobre</Link></li>
                </ul>
            </nav>
        </DivHeader>
    )
}