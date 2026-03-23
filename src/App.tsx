import { useEffect } from 'react';
import Navbar from './components/Navbar';
import BackgroundAnimation from './components/BackgroundAnimation';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import Calendar from './components/Calendar';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <BackgroundAnimation />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <ContactForm />
        <Calendar />
      </main>

      <Footer />
    </div>
  );
}
