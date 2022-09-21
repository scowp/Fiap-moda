import Card from "./components/Card"
import styled from "styled-components"

export default function ModaInfantil(props){

    const DivInfantil = styled.div `

    display: flex;
    justify-content: space-evenly;
    min-height: 75vh;

`

    return(
        <>
            <h1>Moda Infantil</h1>
            <DivInfantil>
                <Card image={props.infantil.image[0]} item={props.infantil.item[0]} valor={props.infantil.valor[0]}/>
                <Card image={props.infantil.image[1]} item={props.infantil.item[1]} valor={props.infantil.valor[1]}/>
                <Card image={props.infantil.image[2]} item={props.infantil.item[2]} valor={props.infantil.valor[2]}/>
                <Card image={props.infantil.image[3]} item={props.infantil.item[3]} valor={props.infantil.valor[3]}/>
                <Card image={props.infantil.image[4]} item={props.infantil.item[4]} valor={props.infantil.valor[4]}/>
            </DivInfantil>
        </>
    )
}