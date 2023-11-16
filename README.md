---------------------------EPISODE 1--------------------------
---------------------------EPISODE 2--------------------------

what is npm?
- NPM stands for node package manager. 
- It is worlds largest software registry.
- The open-source web project developers use it from the entire world to share and borrow packages. 
- The npm also acts as a command-line utility for the Node.js project for installing packages in the project, dependency management, and even version management.

what is webpack?
- webpack is a javascript module bundler that is commonly used in React to bundle and manage dependencies.
- It takes all your javascript files and other assets in a project such as images, CSS and combine them into a single bundle that can be loaded by the browser.

what is parcel?
- parcel is one of the mostly used webpack.
- It is blazingly fast bundler which allows us the experience of hot module reloading.
- Parcel automatically tracks all of the files, configuration, plugins, and dev dependencies that are involved in your build, and granularly invalidates the cache when something changes. 
- It integrates with algorithms to determine what files have changed in milliseconds, no matter the project size.
- Hot reloading
When you make a change, Parcel automatically updates your code in the browser – no page reload necessary!
- Diagnostics
If you make an error in your code or configuration, Parcel displays beautiful diagnostics in your terminal and in the browser.

Every error includes a syntax highlighted code frame pointing to the exact location where the error occurred, along with hints about how to fix the issue.

Many diagnostics even include a documentation link where you can learn more.
-Reliable caching
Everything Parcel does is cached – transformation, dependency resolution, bundling, optimizing, and everything in between. This means the dev server restarts instantly, and the same code is never built twice
- Parcel optimizes your whole app for production automatically. This includes tree-shaking and minifying your JavaScript, CSS, and HTML, resizing and optimizing images, content hashing, automatic code splitting, and much more.
- Tree shaking
Parcel supports tree-shaking both ES modules and CommonJS out of the box! It statically analyzes the imports and exports of each module, and removes everything that isn't used.
- Code splitting
When multiple parts of your application depend on the same common modules, they are automatically deduplicated into a separate bundle. This allows commonly used dependencies to be loaded in parallel with your application code and cached separately by the browser!


What is parcel-cache?
- In summary, `.parcel-cache` is a directory generated by the Parcel bundler, serving as a cache for storing intermediate build results. It enhances the development workflow by speeding up subsequent builds and optimizing resource usage

what is npx?
- npx is node package execute.
- It allows developers to execute any Javascript Package available on the NPM registry without even installing it.

what is difference between devdependencies and dependencies?
- Dependency is an object that contains the library, which your project requires for production environments and functioning effectively.
- devDependencies are those packages in the package.json file that you need only for project development purposes.

What is HMR in programming?
- Hot Module Replacement (HMR) is a feature that enables real-time updates to modules in a running application without requiring a full page reload.

what is gitignore and what to include in it?
- A .gitignore file is a plain text file that contains a list of all the specified files and folders from the project that Git should ignore and not track.

difference between package.json and package-lock.json
- In summary, the package. json file focuses on project metadata and specifying the desired versions of dependencies, while the package-lock. json file ensures deterministic installations by locking the exact versions of dependencies and sub dependencies.

what is caret and tilde?
- version 1.2.3 stands for 1 major change, 2 minor change and 3 patch release
- ~1.2.3 will update you to all future patch version releases without incrementing the minor version. 1.2.3 to 1.2.9
- ^1.2.3 will update you to all future minor/patch version without incrementing a major.^1.2.3 will use releases from 1.2.3 to <2.0.0.

---------------------------EPISODE 3--------------------------

what is JSX?
- Javascript stands for js xml.
- it allows us to write html in react.
- JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place. Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. In this situation, you can use curly braces in your JSX to open a window to JavaScript.
- JSX makes it easier to write and add HTML in React.
- JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file

what is React.createElement Vs JSX?
- 

Benefits of JSX
-JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
- JSX converts HTML tags into react elements. 
- You are not required to use JSX, but JSX makes it easier to write React applications.

how JSX works?
- lets assume we have a header component with some set of props.
- bahind the scenes, react is going to call the method React.createElement() method.

What is the use of Babel in React?
- Babel is a JavaScript compiler that converts modern JavaScript code into a version compatible with all browsers. Babel enables React developers to use the latest JavaScript syntax in their components. Babel transpiles modern JavaScript for use in React components and all browsers.
- Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. 
Here are the main things Babel can do for you:
- Transform syntax
Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)
Source code transformations (codemods)

What is the use of parcel in React?
- 

what is the role of type attribute in script tag?
- The type attribute specifies the type of the script.
- The type attribute identifies the content between the <script> and </script> tags.
- async - For classic scripts, if the async attribute is present, then the classic script will be fetched in parallel to parsing and evaluated as soon as it is available.
- For module scripts, if the async attribute is present then the scripts and all their dependencies will be fetched in parallel to parsing and evaluated as soon as they are available.
defer
- defer - This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded.
- Scripts with the defer attribute will prevent the DOMContentLoaded event from firing until the script has loaded and finished evaluating

---------------------------------------EPISODE 4--------------------------------------------

Is JSX mandatory for react?
- JSX is not a requirement for using React. Using React without JSX is especially convenient when you don't want to set up compilation in your build environment. Each JSX element is just syntactic sugar for calling React.

Is ES6 mandatory for react?
- React uses ES6, and you should be familiar with some of the new features like: Classes. Arrow Functions. Variables (let, const, var)
- Normally you would define a React component as a plain JavaScript class: If you don't use ES6 yet, you may use the create-react-class module instead: The API of ES6 classes is similar to createReactClass() with a few exceptions.

how to write comments in JSX?
-  {/* this is a comment */}

what is <React.Fragment></React.Fragment> and <></>?
- react.fragment will allow you to return multiple elements of (list of child elements) without having to wrap it in extra node in the DOM.
- so we dont need to deal with extra node.
- If you want to pass key to a Fragment, you can't use the <>...</> syntax. You have to explicitly import Fragment from 'react' and render <Fragment key={yourKey}>...</Fragment>.

what is virtual DOM?
- The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.
- This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. 
- This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app.

what is reconciliation process of virtual DOM?
- React Reconciliation is the process through which React updates the Browser DOM. It makes the DOM updates faster in React. It updates the virtual DOM first and then uses the diffing algorithm to make efficient and optimized updates in the Real DOM
- The diffing algorithm in React allows for the efficient updates and rendering of these DOM elements. As changes occur within the application's state or properties, React uses its diff algorithm to compare the new Virtual DOM with the old one.

what is react fibre architecture?
-React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team.
- The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

why we need keys in react ?
- A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. Keys are used to give an identity to the elements in the lists

when do we need keys in react?
- In this example, the ItemList component is rendered with an initial set of items. Then we add and remove items from the list. However, because no keys have been provided, React is forced to re-render the entire list on each change, even if only one item has been added or removed. It can lead to a poor user experience

Can we use index as key in react?
- It is not recommended to use the index of the array as the key prop if you know the array will not be static. If the key is an index, reordering an item in the array changes it. Then React will get confused and re-render the incorrect element

what are props in react?
- React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

what is config driven UI?
- Config-driven UI is a technique that allows you to create user interfaces based on a configuration file, such as JSON, or a TypeScript file that defines the layout and content of the UI components. This can be useful for creating dynamic and customizable UIs without hard coding them.

---------------------------EPISODE 5------------------------------------------------

what is named export , default export and * as export?
- When you write a default import, you can put any name you want after import . For example, you could write import Banana from './Button.js' instead and it would still provide you with the same default export. 
- In contrast, with named imports, the name has to match on both sides. That's why they are called named imports!
- Named exports are useful to export several values. During the import, one will be able to use the same name to refer to the corresponding value. 
- Concerning the default export, there is only a single default export per module. A default export can be a function, a class, an object or anything else.

what is the importance of config.js file?
- Config. js allows developers to configure their applications in an XML block instead of hard-coding values inside their scripts or in JSON objects. 
- The XML can be embedded inside an HTML document or in a separate XML file. The configuration block may contain strings, numbers, arrays and HTML.

what is react useState hooks?
- useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
-The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values.

What is the difference between useState and useEffect hook in React?
- In summary, useState is used to manage state within a component, allowing you to store and update data.
- useEffect is used to perform side effects in a component, such as updating the document title, fetching data, or subscribing to events.

what is optional chaining?
