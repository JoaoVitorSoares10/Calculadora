import React from 'react'
import ButtonOperators from './components/button_operators'
import ButtonNumbers from './components/button_numbers'
import Input from './components/input'

class App extends React.Component {
  constructor(props) {  
      super(props)
      this.screen = this.screen.bind(this)
      this.clear = this.clear.bind(this)
      this.del = this.del.bind(this)
      this.calculate = this.calculate.bind(this)

      this.state = {
        screenValue: ''
      }
  }
 
  screen(num){
      this.setState(
        (state)=>(
          {screenValue: state.screenValue + num}
        )
      )
  }

  clear(){
    this.setState(
      ()=>(
        {screenValue: ' '}
      )
    )
  }
   
  del(){
    let Expression = this.state.screenValue.toString()
    let LastNumber = Expression.split('').pop()
    let positionLastNumber = Expression.lastIndexOf(LastNumber);
    let newExpression = Expression.slice(0, positionLastNumber);
    this.setState(
      ()=>(
        {screenValue: newExpression}
      )
    )
  }

  calculate(){
    try{
      // eslint-disable-next-line
      let result = eval(this.state.screenValue)
      if(result === Infinity){
        this.setState(
          (state)=>(
            {screenValue: "Não é possivel dividir por 0"}
          )
        )
      }else{
        this.setState(
          (state)=>(
            {screenValue: result}
          )
        )
      }
  }catch{
    this.setState(
      (state)=>(
        {screenValue: "Expressão inválida"}
      )
    )
  }
  }

  render() {
      return (
        <div className="container" >
        <div className="content">
        <div className="header">
          <h1 id="title">~CALCULADORA~</h1>
        </div>
        <div className="panel">
          <Input value={this.state.screenValue} result=""/>
        </div>
        <div className="operators">
          <ButtonOperators 
            onClick={this.screen} 
            id="sub" 
            value = "-"
          />
          <ButtonOperators 
            onClick={this.screen} 
            id="sum" 
            value = "+"
          />
          <ButtonOperators 
            onClick={this.screen} 
            id="mult" 
            value = "*"
          />
          <ButtonOperators 
            onClick={this.screen} 
            id="div" 
            value = "/"
          />
        </div>
        <div className="numbers">
          <div className="containerNumbers">
            <div className="contentNumbers"> 
              <ButtonNumbers 
                 onClick={this.screen} 
                 id="one" 
                value = "1"
              />
               <ButtonNumbers 
                 onClick={this.screen} 
                 id="two" 
                value = "2"
              />
               <ButtonNumbers 
                 onClick={this.screen} 
                 id="three" 
                value = "3"
              />
            </div>
            <div className="contentNumbers" >
            <ButtonNumbers 
                 onClick={this.screen} 
                 id="four" 
                value = "4"
              />
               <ButtonNumbers 
                 onClick={this.screen} 
                 id="five" 
                value = "5"
              />
               <ButtonNumbers 
                 onClick={this.screen} 
                 id="six" 
                value = "6"
              />
            </div>
            <div className="contentNumbers" > 
            <ButtonNumbers 
                 onClick={this.screen} 
                 id="seven" 
                value = "7"
              />
               <ButtonNumbers 
                 onClick={this.screen} 
                 id="eight" 
                value = "8"
              />
               <ButtonNumbers 
                 onClick={this.screen} 
                 id="nine" 
                value = "9"
              />     
            </div>
            <div className="contentNumbers" >
              <ButtonNumbers 
                 onClick={this.screen} 
                 id="dot" 
                value = "."
              />
               <ButtonNumbers 
                 onClick={this.screen} 
                 id="zero" 
                value = "0"
              />
               <ButtonNumbers 
                 onClick={this.clear} 
                 id="clear" 
                value = "c"
              />  
            </div>
          </div>
          <div className="containerResult">
            <button onClick={()=>{this.del()}} className="delete">⌫</button>
            <button onClick={()=>{this.calculate()}} className="result">=</button>
          </div>
          </div>
      </div>
    </div>
    )
  }
}

export default App;
