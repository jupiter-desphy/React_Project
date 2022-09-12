import Component from "react";
import FilmsList from "./components/filmsList";

class App extends Component {
  constructor(props) {
    super(props);

   this.state = {
    list: ["ready", "set", "GO"],
    text: "",
   };

   this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

// addItem(event) {
//   event.preventDefault();

  let newList = [...this.state.list, this.state.text];

  this.setState({ list: newList, text: "" });
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            name="newTask"
            id="newTask"
            value={this.state.text}
            onChange={(event) => this.setState({ text: event.target.value})}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((item, idx) => {
            return <li key={item + idx}>{item}</li>
          })}
        </ul>
        <FilmsList list={this.state.list} />
        </header>
      </div>
    );
  }
}

export default App;