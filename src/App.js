import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/formularioCadastro/index";
import "./assets/index.css";
import "./assets/App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();  

    this.state = {
      notas:[]
    }; 
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novaArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novaArrayNotas 
    }
    this.setState(novoEstado)
    
  }

  render() {   
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
