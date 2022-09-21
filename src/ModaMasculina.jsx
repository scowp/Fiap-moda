import Card from "./components/Card"
import styled from "styled-components"

export default function ModaMasculina(props){

    const DivMasculino = styled.div `

    display: flex;
    justify-content: space-evenly;
    min-height: 75vh;

`

    return(
        <>
            <h1>Moda Masculina</h1>
            <DivMasculino>
                <Card image={props.masculino.image[0]} item={props.masculino.item[0]} valor={props.masculino.valor[0]}/>
                <Card image={props.masculino.image[1]} item={props.masculino.item[1]} valor={props.masculino.valor[1]}/>
                <Card image={props.masculino.image[2]} item={props.masculino.item[2]} valor={props.masculino.valor[2]}/>
                <Card image={props.masculino.image[3]} item={props.masculino.item[3]} valor={props.masculino.valor[3]}/>
                <Card image={props.masculino.image[4]} item={props.masculino.item[4]} valor={props.masculino.valor[4]}/>
            </DivMasculino>
        </>
    )
}