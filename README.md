# Version Shared Discrepancy Example

This example demos a difference in behavior in federated apps when a host application does not consume an exported module from a remote and instead only configures shared modules.

- `app1`: Pins to `lodash@4.10.0` but has a shared definition of `>=4.10.0`. This app will use local lodash `4.10.0` instead of remote shared `^4.17.15`. `http://localhost:3003/remoteEntry.js` (the remote) does not load even though it is configured as a remote.
- `app2`: Is a duplicate of `app1` except it additionally imports the exported `Example` from `app_shared`. This app will use lodash `^4.17.15` provided by `app_shared` instead of local version (`4.10.0`).
- `app_shared`: Shares `lodash@^4.17.15` and exposes `Example`.

# Running Demo

Run `npm install` and then `npm start`. This will build and serve `app1`, `app2` and `app_shared` on ports 3001, 3002 and 3003 respectively.

- app1: [localhost:3001](http://localhost:3001/)
- app2: [localhost:3002](http://localhost:3002/)
- app_shared: [localhost:3003](http://localhost:3003/)
