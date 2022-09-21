import logo from "./img/logo.png"
import styled from "styled-components"

export default function Footer(){

    const DivFooter = styled.div `

    background-color: #151819;
    border-top: solid 2px #ed145b;  
    padding: 10px 0px;

    img {
        cursor: pointer;
        display: block;
        width: 280px;
        margin: auto;
    }
`

    return(
        <DivFooter>
            <img src={logo}/>
        </DivFooter>
    )
}