
function Person(props){
  var age = 23
  
  if(age >= 18){
    return <h1>{props.name} es Mayor</h1>
  }else{
    return <h1>{props.name} es Menor</h1>
  }
}

class App extends React.Component{
  state = {}
  render(){
    return <div>
      <Person name='joss'/>
      </div>
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))