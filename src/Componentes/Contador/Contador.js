import React from 'react';
import Botao  from '../Botao/Botao';
import'./Contador.css'; 
class Contador extends React.Component{
    state={
        contador:0
    }
    aumentar = () =>{
        let novoContador = this.state.contador;
        novoContador++;
        this.setState({contador: novoContador});
    }
    diminuir = () =>{
        let novoContador = this.state.contador;
        novoContador--;
        this.setState({contador: novoContador});
    }
    zerar = () =>{
        this.setState({contador: 0})
    }

 render(){
     return(
        <div>
         <h1> O valor do meu contador é: {this.state.contador}</h1>
         <Botao 
         classe="botao" 
         aoClicar={this.aumentar}
         titulo="aumentar"
         />
         <Botao 
         classe="botao1" 
         aoClicar={this.diminuir}
         titulo="diminuir"
         />
         <Botao 
         classe="botao2" 
         aoClicar={this.zerar}
         titulo="zerar"
         />
        </div>
     );
 }
 
}
export default Contador;