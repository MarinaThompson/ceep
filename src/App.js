import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/formularioCadastro/index";
import './assets/index.css';
import './assets/App.css';

function App() {
  return (
    <section className="conteudo">
      <FormularioCadastro/>
     <ListaDeNotas/>
    </section>

  );
}

export default App;
