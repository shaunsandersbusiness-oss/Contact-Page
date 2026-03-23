import { useEffect, useState } from 'react';

export default function BackgroundAnimation() {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; duration: string; delay: string }>>([]);

  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768;
    
    // Generate particles
    const particleCount = checkMobile() ? 6 : 15;
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${17 + Math.random() * 10}s`,
      delay: `${Math.random() * 15}s`,
    }));
    setParticles(newParticles);

    const handleResize = () => {
      const newCount = checkMobile() ? 6 : 15;
      if (newCount !== particles.length) {
        setParticles(Array.from({ length: newCount }).map((_, i) => ({
          id: i,
          left: `${Math.random() * 100}%`,
          duration: `${17 + Math.random() * 10}s`,
          delay: `${Math.random() * 15}s`,
        })));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="bg-layer-1" aria-hidden="true"></div>
      
      <div className="bg-layer-2" aria-hidden="true">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>

      <div className="bg-layer-3" aria-hidden="true">
        {particles.map((p) => (
          <div
            key={p.id}
            className="gold-particle"
            style={{
              left: p.left,
              bottom: '-10px',
              animation: `particleFloat ${p.duration} ease-in-out ${p.delay} infinite`,
            }}
          />
        ))}
      </div>

      <div className="bg-layer-4" aria-hidden="true"></div>

      <style>{`
        @keyframes particleFloat {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: 0.12; }
          80% { opacity: 0.12; }
          100% { transform: translateY(-300px) translateX(${Math.random() > 0.5 ? '20px' : '-20px'}); opacity: 0; }
        }
      `}</style>
    </>
  );
}
