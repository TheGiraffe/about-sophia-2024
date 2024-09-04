import './App.css';
import Header from './components/Header';
import BackgroundSection from './sections/BackgroundSection';
import FutureGoalsSection from './sections/FutureGoalsSection';
import WhySection from './sections/WhySection';
import GainSection from './sections/GainSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BackgroundSection />
        <WhySection />
        <FutureGoalsSection />
        <GainSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
