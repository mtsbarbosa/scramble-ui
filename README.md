# Scramble-ui
Front-end clojurescript app for scramble api

## Structure
* store folder has the store and useful methods for executing actions and mutations, 
that's the centralized place to change data
* components folder
* pages folder, mounted on main core at routes section
* plugins folder contains helpers/utils to add features into different places
* api.configuration folder contains api methods and configs
* ./translations.cljs has methods and default values in order to get the translations

### Development mode
```
npm install
npx shadow-cljs watch app
```
start a ClojureScript REPL
```
npx shadow-cljs browser-repl
```
### Building for production

```
npx shadow-cljs release app
```
