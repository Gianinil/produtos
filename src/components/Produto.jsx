function Produto({ img, titulo, preco }) {
  return (
    <>
      <img width="200px" height="200px" src={img} />
      <h1>{titulo}</h1>
      <p>R$ {preco}</p>
    </>
  );
}

export default Produto;
