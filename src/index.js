import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends React.Component {
  handleScroll = () => {
    const pageHeight = document.documentElement.offsetHeight;
    const currentHeight =document.documentElement.scrollTop;
    if(currentHeight >pageHeight/2)
     document.getElementById("contact").classList.add("animation")
    }
    componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    return (
      <>
        <h1>Aloha!!!</h1>
        <div className="home">Home</div>
        <div className="skill">Skill</div>
        <div className="education">Education</div>
        <div id="contact">Contact</div>
      </>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
