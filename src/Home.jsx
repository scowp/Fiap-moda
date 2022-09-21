import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Home(){

    const DivHome = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    color: #91a3ad;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 20px;
    text-align: center;

    h2 {
        font-size: 30px;
    }

    span {
        font-size: 20px;
    }

    button {
        width: 20%;
        cursor: pointer;
        font-size: 14px;
        font-weight: 700;
        border: 2px solid #ed145b;
        color: #ed145b;
        background-color: rgba(0,0,0,0);
        padding: 10px;
        margin-top: 50px ;
        transition: background-color 0.7s;
        text-transform: uppercase;
    }

    button:hover {
        a {color: #151819;}
        background-color: #ed145b;
    }

    a {
        color: #ed145b;
    }

`

    return(
        <DivHome>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita veniam accusantium officia cumque exercitationem quae quidem, ullam illo, illum alias totam, dignissimos ratione earum asperiores commodi tenetur hic sed nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia at odit labore quisquam libero distinctio obcaecati. Veritatis corporis in recusandae possimus necessitatibus, quia beatae cumque voluptate molestiae numquam aut.</h2>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae libero consequatur veritatis dolorum nostrum optio obcaecati odio maiores! Eligendi minima quis itaque rerum numquam dolorum tempore soluta quasi repellendus atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere voluptatem laborum inventore amet temporibus, nemo quisquam in tempora totam nisi ab. Voluptatum tempore repellat amet suscipit. Dolores, tempore laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci temporibus fugiat saepe totam eaque qui hic necessitatibus ipsa beatae, iure eum dolorem perferendis? Eligendi culpa ipsam dolorum, saepe delectus nesciunt?</span>
            <button><Link to="/Masculino">Ver Moda Masculina</Link></button>
            <button><Link to="/Feminina">Ver Moda Feminina</Link></button>
            <button><Link to="/Infantil">Ver Moda Infantil</Link></button>
        </DivHome>
    )
}