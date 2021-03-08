import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import Homescreen from './Screens/HomeScreen';


const App = () => {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Homescreen />
                </Container>
            </main>
            <Footer />
        </Router>
    )
}

export default App;
