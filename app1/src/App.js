import { VERSION } from "lodash";

import React from "react";

const App = () => {
  return (
    <div>
      <h1>App 1 Host</h1>
      <p>Lodash v{VERSION}</p>
      <br></br>
      <div><a href="http://localhost:3002">{'app2 (uses newest lodash)'}</a></div>
      <div><a href="http://localhost:3003">{'app_shared (uses newest lodash)'}</a></div>
    </div>
  );
};

export default App;
