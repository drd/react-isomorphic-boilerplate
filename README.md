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

### Debugging

If your application is running in the same environment as your web browser, you

## TODO

- Jest integration
- a flux example
- configuration management
- upgrade react-hot-loader to support ES6 classes?
- i18n


## NOTES

- react-router is emitting billions of warnings on react-0.13-beta.1, see rackt/react-router#638


## See Also

- https://github.com/gpbl/isomorphic-react-template
- https://github.com/ndreckshage/isomorphic
- so many more
