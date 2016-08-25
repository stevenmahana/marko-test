/src
====================
###Modularization Sructure

`src/api/` - API related scripts, etc.

`src/components/` - Global building blocks for pages

`src/global-style/` - Shared front-end styles

`src/layouts/` - Main HTML layout structures (base, login, help, etc.)

`src/models/` - Wrapper objects for application data objects

`src/pages/` - Modules for rendering top-level UI pages/routes

Page Controllers reside in page modules as `index.js` alongside a `template.marko` file.

```
/events
  index.js
  template.marko
```

Marko will compile corresponding CommonJS modules in the same directory. If two or more templates are used by the same page controller then putting them in the same directory as the page controller is fine, but in general it is better to have a 1 to 1 mapping between a page controller and a page template to avoid clutter and complexity for other employees.

`src/services/` - Modules for talking to the backend. 

Services give data to the application wrapped inside model objects. Model instances can be passed to the view and then a UI component would use data from the data model to build the template data/component state

`src/third-party/` - Third-party helper scripts or frameworks

`src/util/` - Random utility functions and helpers
