import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Produto from './components/Produto';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Produto
        img="https://i5.walmartimages.com/seo/Restored-Sony-PlayStation-1-Console-Refurbished_9c7204c8-9bd9-4171-afe8-2815a428f71b.7642414d737722b862a5f3e57872f504.jpeg"
        titulo="Playstation 1"
        preco="1500"
      />

      <Produto
        img="https://http2.mlstatic.com/D_NQ_NP_621729-MLB72994279729_112023-O.webp"
        titulo="Playstation 2 "
        preco="850"
      />

      <Produto
        img="https://i5.walmartimages.com/seo/Restored-Sony-PlayStation-3-PS3-Super-Slim-System-500GB-Refurbished_7a81a26c-2144-4d94-bf44-9a118f73722e.34cf88838325597102df09abfbf93ab8.jpeg"
        titulo="Playstation 3"
        preco="1300"
      />

      <Produto
        img="https://i5.walmartimages.com/seo/Sony-PlayStation-4-Slim-Console-500GB-Jet-Black-PS4_20ddf697-5b4b-4323-ae66-be23d899d5ee.a5b0db1eecb5e3d49379f3148e69506b.jpeg"
        titulo="Playstation 4"
        preco="1800"
      />

      <Produto
        img="https://http2.mlstatic.com/D_NQ_NP_906409-MLA71985605895_092023-B.webp"
        titulo="Xbox 360 "
        preco="600"
      />

      <Produto
        img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQoFWHTgJWGxi92OqlBwhAqfq-zDsejusCfwqhHiG2_wqbJrLJfQP0Noz5IpOoD0M0cMoq2hMniXnNPKsIEXHxjvTTGLMGM83VFaIm-4GMJAsXLK7kRuaLWszqoU7lo5WznNEpBeg&usqp=CAc"
        titulo="Xbox One S "
        preco="2100"
      />

      <Produto
        img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTKclTCeX39XhRuT4HDgYkS2ud61evtZHe3Gr9_1NTPNBtPUC5aSAvTTECjsmvu0dajQxSKnT9oI5R6O0hnL-H_e7KdgY_Ryn49rIRIoWj8K1K84sMRf3b3Q2NpMicyhd4Lx6CkPw&usqp=CAc"
        titulo="Nintendo Switch "
        preco="2000"
      />
    </>
  );
}

export default App;
