import React, {Suspense} from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Home from "./components/Home";
const Counter = React.lazy(() => import("counter/Counter"));

const App = () => (
  <div className="container">
     <Suspense fallback={"loading..."}>
      <Counter/>
    </Suspense>
    <Home />
   
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
