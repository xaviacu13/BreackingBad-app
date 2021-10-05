import React, { useState, useEffect }from 'react';
import styled from '@emotion/styled';
import Phrase from './components/Phrase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
 background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
 background-size: 300px;
 font-family: Arial, Helvetica, sans-serif;
 color: #FFFFFF;
 margin-top: 1rem;
 padding: 1rem 3rem;
 font-size: 2rem;
 border: 2px solid black;
 transition: background-size .8s ease;

 :hover{
   cursor: pointer;
   background-size: 400px;
 }
`;

function App() {

  const [phrase, getPhase] = useState({});

  const getAPI = async() => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const phrase = await api.json()
    getPhase(phrase[0])
  }

  useEffect ( () => {
    getAPI()
  }, []);

  return (
    <Contenedor>
      <Phrase
        phrase={phrase}
      />
      <Boton
        onClick={() => getAPI()}
      >
        Get Phrase 
      </Boton>
    </Contenedor>
  );
}

export default App;
