import Encabezado from "./components/Encabezado";
import 'bootstrap/dist/css/bootstrap.min.css'
import InformacionComponente from "./components/InformacionComponente";
import Contador from "./components/Contador";

function App() {
  //aqui agrego logica
  const comision = 'React2'

  return (
    // aqui puedo tener un poquito de logica
    <main className="container my-5">
      {/* invocar a un componente */}
      {/* <Encabezado></Encabezado> */}
      <Encabezado />
      <InformacionComponente></InformacionComponente>
      <Contador infoComision = {comision} ></Contador>
    </main>
  );
}

export default App;
