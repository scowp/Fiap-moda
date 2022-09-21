import styled from "styled-components"

export default function About(){

    const DivAbout = styled.div `

    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    color: #ed145b;

    p {
        width: 80%;
        margin: 0 auto;
        font-size: 30px;
        text-align: center;
        color: #91a3ad;
    }

    span {
        font-weight: 700;
        color: #91a3ad;
    }

`

    return(
        <DivAbout>
            <h1>Sobre nós!</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus eligendi magnam, quisquam hic laudantium provident itaque labore at in laboriosam omnis assumenda dolore nihil obcaecati esse beatae numquam temporibus maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum enim quas hic sint ipsam dicta. Fugiat quis molestiae eum enim atque, obcaecati eaque voluptatum sapiente animi mollitia sunt ullam sed! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem sit aperiam aut eum ipsa. Maiores unde non atque? Laboriosam assumenda quaerat nemo, veniam nulla quos ratione nobis doloremque vel! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam id qui eius iste architecto, deserunt amet eaque esse, delectus suscipit accusamus illum earum ipsam, quibusdam voluptatum eum ex placeat! Id.</p>
            <ul>
                <li><span>Adolfo Kentaro Hada</span> - RM95484</li>
                <li><span>Claudio Tiyoki Yamashiro</span> - RM92798</li>
                <li><span>Luca Katsumata Spiller</span> - RM93618</li>
                <li><span>Mateus Mendes dos Santos</span> - RM95138</li>
                <li><span>Matheus Gomes Campolongo</span> - RM94250</li>
            </ul>
        </DivAbout>
    )
}