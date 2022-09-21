import Header from "./components/Header"
import image1 from "./img/item1.jpg"
import image2 from "./img/item2.webp"
import image3 from "./img/item3.jpg"
import image4 from "./img/item4.webp"
import image5 from "./img/item5.jpg"
import image6 from "./img/item6.webp"
import image7 from "./img/item7.webp"
import image8 from "./img/item8.webp"
import image9 from "./img/item9.webp"
import image10 from "./img/item10.webp"
import image11 from "./img/item11.webp"
import image12 from "./img/item12.webp"
import image13 from "./img/item13.webp"
import image14 from "./img/item14.webp"
import image15 from "./img/item15.webp"

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home"
import ModaMasculina from "./ModaMasculina"
import ModaFeminino from "./ModaFemino"
import ModaInfantil from "./ModaInfantil"
import Sobre from "./About"
import Footer from "./Footer"


function App() {

  const masculino = {
    image: [image1,image2,image3,image4,image5],
    item: ["Camiseta preta simples","Camiseta Ciano simples","Camiseta Azul-marinho","Camiseta Branca estampada", "Camiseta Azul simples"],
    valor: [30.99,25.99,30.99,20.99,22.99]
  }

  const feminino = {
    image: [image6,image7,image8,image9,image10],
    item: ["Moletom Bege","Moletom Verde","Blusa Duas cores","Top Verde", "Guingão Branco"],
    valor: [34.99,45.99,50.99,30.99,98.99]
  }  

  const infantil = {
    image: [image11,image12,image13,image14,image15],
    item: ["Jaqueta Colorida","Moletom Branco","Jaqueta Dinos","Colete Preto", "Moletom Preto"],
    valor: [38.99,42.99,40.99,32.99,38.99]
  }  

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Masculino" element={<ModaMasculina masculino={masculino}/>}/>
        <Route path="/Feminina" element={<ModaFeminino feminino={feminino}/>}/>
        <Route path="/Infantil" element={<ModaInfantil infantil={infantil}/>}/>
        <Route path="/Sobre" element={<Sobre/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
