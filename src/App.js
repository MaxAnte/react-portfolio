import React from 'react';
import './App.css';

import Header from './components/Header/Header';

import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/index';
import ProjectPage from './pages/project/index';
import AboutPage from './pages/about/about';
import ContactPage from './pages/contact/contact';

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Header brand='Max Zahorskyi'></Header>

                <main className='main'>
                    <Switch>
                        <Route path='/project/:id' component={ProjectPage} />
                        <Route path='/about' component={AboutPage} />
                        <Route path='/contact' component={ContactPage} />
                        <Route exact path='/' component={HomePage} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
