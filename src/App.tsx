import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Container from './components/layouts/Container';
import Contact from './pages/Contact';
import Project from './pages/Project';

function App() {
    return (
        <>
            <Header />

            <main>
                <Container>
                    <Home />
                    <Project />
                    <About />
                    <Contact />
                </Container>
            </main>

            <Footer />
        </>
    );
}

export default App;
