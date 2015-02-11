# React Isomorphic Hot-Loading Boilerplate

With ES6/7 support and a shared client/server routing table


## Overview

It might seem like I'm striving for full buzzword compliance. In fact, I just want a
development environment in which I can be productive and happy. I'm well on the road
to getting there, and I want to share that with you. If you make it better, please do
share!


## Features

### Isomorphic React Rendering

You get the full benefits of React on the client side while still having the performance
and SEO benefits of server-side rendering. You also get maintainability benefits by
reducing the overall size of your code base, and if you adhere to the React philosophy
you likely design a better application as well.

### Smart asset bundling with Hot Module Replacement

Webpack is the all-singing all-dancing asset bundler, though it can be quite daunting
to understand. Much of the hard work has already been done for you here, so you can code
from the beginning while watching your JSX and CSS changes reflected in the browser with
no reloads (not even an automatic reload!)

### The Javascript of Tomorrow, Today

Using the fabulous 6to5 transpiler on the server and client, you can write generators,
use the new `class` syntax, arrow functions, and more. Using the `module.extensions` API
obviates the need for any compilation step in Node, too. Additionally, if you're too
impatient to `await`, I've also packaged up versions of `node-jsx` and `jsx-loader` which
allow you to use ES7 async functions.

### Shared client/server routing table, courtesy of React Router

Write your web application routes once, and use the excellent features available with
React Router.

### Debugging

Ships with convenient node-inspector support. Also, check out the
[React DevTools for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) if you haven't tried them yet.


## Setup

To make everything work, this assumes you have nginx in `$PATH`. To install you have
[several options](http://wiki.nginx.org/Install) although no mention is made of Mac OS X.
I personally install mine with [homebrew](http://brew.sh).

Beyond that, all the dependencies are just an `npm install` away.

### Running

There are 3 processes you need to run. For maximum debuggability, I generally run them
each in a different tab / tmux pane. The separate invocations are:

```
npm run-script nginx
npm run-script webpack
npm start
```

If you just want to run everything in one shell, you can:

```
npm run-script everything
```

Once you've got it all running, visit http://localhost:3000

### Debugging

If your application is running in the same environment as your web browser (i.e., not on
a VM or a remote host), you can debug your server using node-inspector:

```npm run-script debug```

This will launch your default browser pointed at the node-inspector interface for the
server process.

If it's not on your local computer, you still run the server but less conveniently:

```node_modules/.bin/node-inspector server/server.js```

Then you'll need to hit port 5858 on the remote server/VM, which may or may not be
available depending on firewalls.

### Bundling

Once your application is ready to go, you can create all the bundled and precompiled
javascript files by executing `npm run-script bundle`. This will execute with
`NODE_ENV=production`, toggling the environmental switches in `webpack.config.js`.


## TODO

- Jest integration
- configuration management
- use extract-text-plugin in production mode for css
- a flux example
- i18n
- test node v0.12.0, io.js compatibility


## FIXME

- vendor script is downloading twice


## NOTES

- depending on your module structure, you may have to [opt-in to hot loading](https://github.com/gaearon/react-hot-loader/blob/master/docs/README.md#migrating-to-10)
- react-router is emitting billions of warnings on react-0.13-beta.1, see [rackt/react-router#638](https://github.com/rackt/react-router/issues/638)


## See Also

- https://github.com/gpbl/isomorphic-react-template
- https://github.com/ndreckshage/isomorphic
- so many more
