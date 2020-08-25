import { VERSION } from "lodash";
import React from "react";

const App = () => (
  <div>
    <h1>App Shared: Remote</h1>
    <p>Lodash v{VERSION}</p>
    <br></br>
    <div><a href="http://localhost:3001">{'app1 (uses lodash 4.10.0)'}</a></div>
    <div><a href="http://localhost:3002">{'app2 (uses newest lodash)'}</a></div>
  </div>
);

export default App;
