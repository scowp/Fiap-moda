import Card from "./components/Card"
import styled from "styled-components"

export default function ModaFeminino(props){

    const DivFeminino = styled.div `

    display: flex;
    justify-content: space-evenly;
    min-height: 75vh;

`

    return(
        <>
            <h1>Moda Feminina</h1>
            <DivFeminino>
                <Card image={props.feminino.image[0]} item={props.feminino.item[0]} valor={props.feminino.valor[0]}/>
                <Card image={props.feminino.image[1]} item={props.feminino.item[1]} valor={props.feminino.valor[1]}/>
                <Card image={props.feminino.image[2]} item={props.feminino.item[2]} valor={props.feminino.valor[2]}/>
                <Card image={props.feminino.image[3]} item={props.feminino.item[3]} valor={props.feminino.valor[3]}/>
                <Card image={props.feminino.image[4]} item={props.feminino.item[4]} valor={props.feminino.valor[4]}/>
            </DivFeminino>
        </>
    )
}