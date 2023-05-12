import { useEffect, useState } from 'react';

const AutoScroll = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

     const sections = Array.from(document.querySelectorAll("section"));
    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const distances = [...sections].map(section => Math.abs(section.getBoundingClientRect().top));
        const closestSection = sections[distances.indexOf(Math.min(...distances))];
        closestSection.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    };

    let timer = null;
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return <div>{children}</div>;
};

export default AutoScroll;