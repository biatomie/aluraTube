import React from "react";
import styled from "styled-components"

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.borderBase};
  max-width: 425px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  
  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.borderBase};
    width: 40px;
    height: 40px;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;

// Home 
// Menu
// Search
// Informação sempre desce
export default function Search({ valorDoFiltro, setValorDoFiltro }) {

//export default function Search({ valorDoFiltro, setValorDoFiltro }) {
    //const valorDaBusca = React.useState("Frost")[0]; //valor da busca
    //const valorDaBusca = React.useState("Frost")[1]; //valor da função que pede pro React recarregar a página bounddispatchsetspace const [valorDaBusca, setValorDaBusca] = React.useState("Frost");
    //console.log("Search", valorDaBusca)
    //const [valorDaBusca, setValorDaBusca] = React.useState("olá"); na aula 2 isto foi para o index da homepage
    //console.log("Search", valorDaBusca)
    const valorDaBusca = valorDoFiltro; //trocou o nome para fazer sentido dentro do componente
    const setValorDaBusca = setValorDoFiltro;
//setValordaBusca fica rerenderizando a pagina
    return (
        <StyledSearch>
            {/* {valorDaBusca}   */}
            {/* <input type ="text" onChange={(infosDoEvento) => {
                console.log("Digitou algo")
                setValorDaBusca(infosDoEvento.target.value) //mostra os valores digitados = rerenderiza os blocos de html, infosDoEvento = e
            }} /> */}
            <input type="text" onChange={(e) => setValorDaBusca(e.target.value)} value={valorDaBusca} />            
            <button>
                🔎
            </button>
        </StyledSearch>
    )
}