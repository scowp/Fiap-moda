import styled from "styled-components"

export default function Card(props){

    const DivCard = styled.div `

        background-color: #151819;
        color: #91a3ad;;
        border-radius: 10px;
        width: 280px;
        height: 500px;
        box-shadow: 0px 0px 20px #151819;

        img {
            width: 280px;
            border-radius: 10px 10px 0px 0px;
            cursor: pointer;
        }

        h2 {
            font-size: 18px;
        }

        span {
            font-weight: 600;
            color: #ed145b;
        }

        .info {
            padding: 2px 10px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }

        button {
            cursor: pointer;
            font-size: 16px;
            font-weight: 700;
            border: 2px solid #ed145b;
            color: #ed145b;
            background-color: rgba(0,0,0,0);
            padding: 5px;
            margin-top: 10px ;
            transition: background-color 0.7s;
        }

        button:hover {
            background-color: #ed145b;
            color: #151819;
            margin-top: 10px ;
        }
    `

    return (
        <DivCard>
            <img src={props.image}/>
            <div className="info">
                <h2>{props.item}</h2>
                <span>R${props.valor}</span>
                <button>Ver mais</button>
            </div>
        </DivCard>
    )
}