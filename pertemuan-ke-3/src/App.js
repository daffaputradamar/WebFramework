import React, { Fragment } from "react";
import "./App.css";
import StatefulLoginForm from "./container/StatefulLoginForm";
import StatelessLoginForm from "./components/StatelessLoginForm";

function App() {
  return (
    <Fragment>
      <StatefulLoginForm />
      <StatelessLoginForm />
    </Fragment>
  );
}

export default App;
