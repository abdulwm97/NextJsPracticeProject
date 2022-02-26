# NextJsPracticeProject

## Intro
Next.js is a react framework. Unlike react which focuses on client side, next expands on that to make a full fledged framework, which allows you to making large scale production ready apps easier.


## Server Side Rendering(SSR)
Server side rendering allows fop the code to render straight form the server, which allows pages to load up faster and helps with search engine optimisation(search engine crawlers won't have some of the missing info because it won't load in).


## File-based Routing
routing - giving the user an illusion of having multiple pages
The router watches the url, when it changes it prevents the browser from sending a request to the back end server and renders different content on the page with react


## Fullstack capabilities
We don't only have a client side code but we also have stand alone back end code(that could reach out to a database or work with the file system). This allows us to easily implement authentication, add or retrieve file from a database...


## How to create your Next.js project?
Type ```npx create-next-app@latest``` and follow the prompts to create the project. It creates a base folder and installs all the core dependencies