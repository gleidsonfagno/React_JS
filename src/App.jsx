function App() {
  function handoClick() {
    console.log("executar testes");
  }
  return (
    <>
      <button onClick={handoClick}>Button</button>
      <button onClick={(event) => console.log(event.type)}>Button</button>
    </>
  );
}

export default App;
