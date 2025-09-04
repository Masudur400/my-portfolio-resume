import { useState, useEffect } from 'react'; 
const BlurryCursor = () => {
  const [strikes, setStrikes] = useState([]); 
  useEffect(() => {
    const handleMouseMove = (event) => {
      const newStrike = {
        id: Date.now(),
        x: event.clientX + Math.random() * 50 - 25, 
        y: event.clientY + Math.random() * 50 - 25,
        rotation: Math.random() * 360, 
        scale: Math.random() * 0.5 + 0.7, 
      }; 
      setStrikes((prev) => [...prev, newStrike]); 
      setTimeout(() => {
        setStrikes((prev) => prev.filter((strike) => strike.id !== newStrike.id));
      }, 300); 
    }; 
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []); 
  return (
    <div className="lightning-cursor-container">
      {strikes.map((strike) => (
        <div
          key={strike.id}
          className="lightning-strike"
          style={{
            left: `${strike.x}px`,
            top: `${strike.y}px`,
            transform: `rotate(${strike.rotation}deg) scale(${strike.scale})`,
          }}
        ></div>
      ))}
    </div>
  );
}; 
export default BlurryCursor;
