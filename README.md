# Getting Started with Temperature Converter

https://user-images.githubusercontent.com/69063695/164155004-32e9f908-aea7-4f5f-b4ec-f5e2fe34aa14.mov





A web app that converts temperature in celcius and displays the result in fahrenheit or vice versa.

View the live [demo](https://temp-convert.vercel.app/). 
## Libraries and tools used:
`React.Js` , `Material UI`, `Styled-Components`, `Gsap`.

## Why React.js?

The main process of the app is to receive an input from the user and convert it into a temperature unit namely `celcius` to `fahrenheit` and vice versa so i decided to use `react.js` to make the single page application because of its features, one specifically is the use of virtual dom since we want our app to be fast and responsive as we are dealing with real time conversion that will be displayed instantaneosly.

## Design, architechture and implementation

The initial environment set-up was done by running `CRA (create-react-app)` and separated the directory layout folders by types. 
The UI was built primarily on user input and rendered output and the option to choose between temperature types so i created different components that would handle the input and output of the conversion then lifted the state up so that our parent component holds the state where we will base our temperature values and its unit or type. 

By doing so, we can pass our state and data to process the changes from our user input and can instantly render the result of our conversion back to the UI through our controlled components. 

There are two main functions that handle our conversion: the `toFahrenheit` and `toCelcius` that accepts an input and returns a converted output depending on our user choices.

I've used `Material Ui` for the switch button and theme change from light to dark. Used `styled-components` for the styling of the app and `Gsap` for basic animations. The theme change was built using `react context` to share the values(theme) and to avoid data drilling. React's useEffect hook and saving our user theme preference through localStorage optimization was also used in this implementation.  


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**




