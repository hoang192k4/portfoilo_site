import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Container from './components/layouts/Container';
import Contact from './pages/Contact';

function App() {
    return (
        <>
            <Header />
            <Container>
                <main style={{ minHeight: '1600px' }}>
                    <Home />
                    <About />
                    <Contact />
                </main>
                <Footer />
            </Container>
        </>
    );
}

export default App;
