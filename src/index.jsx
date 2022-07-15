//bootstrapping React code

import React from 'react'
import ReactDOM from 'react-dom/client'
import Container from 'react-bootstrap/Container'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import moviesApp from './reducers/reducers'
import { devToolsEnhancer } from 'redux-devtools-extension'

//import default MovieView from "./components/main-view/main-view";
//you can only export one item using the default keyword (without curly braces)
import { MainView } from './components/main-view/main-view'

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss'

const store = createStore(moviesApp, devToolsEnhancer())

// Main component (will eventually use all the others)
class BollyFlixApplication extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container fluid>
                    <MainView />
                </Container>
            </Provider>
        )
    }
}

//finds the root of your app
const container = document.getElementsByClassName('app-container')[0]

//creates a root element
const root = ReactDOM.createRoot(container)

//renders app in root DOM element
root.render(<BollyFlixApplication />)
