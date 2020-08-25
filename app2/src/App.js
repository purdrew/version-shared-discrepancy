import { VERSION } from "lodash";

import React from "react";

const RemoteExample = React.lazy(() => import("app_shared/Example"));

const App = () => {
  return (
    <div>
      <h1>App 2 Host</h1>
      <p>Lodash v{VERSION}</p>
      <React.Suspense fallback="Loading Example">
        <RemoteExample />
      </React.Suspense>
      <br></br>
      <div><a href="http://localhost:3001">{'app1 (uses lodash 4.10.0)'}</a></div>
      <div><a href="http://localhost:3003">{'app_shared (uses newest lodash)'}</a></div>
    </div>
  );
};

export default App;
