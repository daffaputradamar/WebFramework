import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Blog from "./pages/Blog";

// function HelloWorld() {
//   return <p>Ini adalah function component</p>;
// }

// const HelloWorld = () => {
//   return <p>Ini adalah function component</p>;
// };

// class StatefulComponent extends React.Component {
//   render() {
//     return <p>ini adalah Stateful Component</p>;
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Blog />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
