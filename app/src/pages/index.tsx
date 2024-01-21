import type { NextPage } from "next";
import Image from "next/legacy/image";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import React from "react";
import { Layout } from "@/components/layout";
import Background from "@/components/HomeBackground"
import { Footer } from "@/components/footer";
import Button from "@/components/Button";
import anime from 'animejs';
import AutoScroll from "@/components/AutoScroll";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const HomeSection: NextPage<any> = () => {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const newButtonRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(true);

  useEffect(() => {
    const animateTitle = anime({
      targets: titleRef.current,
      translateY: [-100, 0],
      opacity: [0, 1],
      easing: 'easeOutElastic(1, .8)',
      duration: 1500,
    });

    const animateButton = anime({
      targets: buttonRef.current,
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 5000,
      easing: 'easeOutElastic(1, .8)',
      delay: 500,
    });

    const animateNewButton = anime({
      targets: newButtonRef.current,
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 5000,
      easing: 'easeOutElastic(1, .8)',
      delay: 500,
    });

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(false);
      } else {
        setShowScrollButton(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      animateTitle.pause();
      animateButton.pause();
      animateNewButton.pause();
    };
  }, []);

  const scrollButton = () => {
    const aboutUsSection = document.getElementById('about-us-section');
    aboutUsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='w-full h-screen'>
      <div className='relative w-full h-screen'>
        <main className='min-h-screen bg-transparent'>
          <div className="h-screen flex flex-col justify-center items-left mx-32">
            <div ref={titleRef}>
              <h1 className="text-white text-left text-8xl font-sans leading-tight font-semibold">THE SPRING GROUP</h1>
              <h1 className="text-white text-left text-6xl font-sans leading-tight font-semibold">We Bridge the Gap.</h1>
            </div>
            <div ref={buttonRef}>
              <Button name="Join Now" className="mt-6 mr-2" link="/newsletter_form" />
            </div>
          </div>
        </main>

        <div className={`absolute bottom-0 left-0 right-0 text-center mb-12 ${showScrollButton ? '' : 'hidden'}`}>
          <button onClick={scrollButton} className="text-white font-bold text-xl rounded-full py-3 px-4 bg-gray-900 hover:bg-gray-800">
            ↓
          </button>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};


const AboutUsSection: NextPage<any> = () => {
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    anime({
      targets: headingRef.current,
      translateY: [-50, 0],
      opacity: [0, 1],
      easing: 'linear',
      duration: 1000,
    });

    anime({
      targets: buttonRef.current,
      translateY: [50, 0],
      opacity: [0, 1],
      easing: 'linear',
      duration: 1000,
      delay: 500,
    });
  }, []);


  const lightgreen = "#88FF0C"
  return (
    <section id="about-us-section" className="w-full h-screen">
      <div className="relative w-full h-full">
        <main className="relative min-h-screen bg-transparent flex flex-col justify-center items-center">
          <h1 ref={headingRef} className="text-white text-7xl font-black text-center">
            Our Mission
          </h1>
          <div className="mt-8 max-w-2xl">
            <p className="text-white text-lg font-medium text-center">
              Across the board, the youth is becoming more involved in politics: more than

              {" "}
              <span style={{ color: lightgreen, fontWeight: "bold" }}>
                55% of all youth turned out to vote in 2020.
              </span>{" "}


              Yet, even as the youth voice is increasingly decisive in elections outcomes, there is a lack
              of opportunity for students to engage in the policy making process at the highest level. This is crucial -

              {" "}
              <span style={{ color: lightgreen, fontWeight: "bold" }}>
                youth engagement, especially in high school, builds more engaged voters and a more democratic society.
              </span>{" "}

            </p>
            <p className="mt-8 text-white text-lg font-medium text-center">
              We are building a global, 100% youth-powered movement to close this gap in policy worldwide.
              By providing a platform for the youth to spring into action, we cultivate and nurture the next generation
              of leaders, thinkers, and advocates.
            </p>
          </div>
          <div ref={buttonRef}>
            <Button name="Join our newsletter!" className="mt-6 mr-2" link="/newsletter_form" />
            <Button name="Join our cause!" className="mt-4 ml-2" link="https://docs.google.com/forms/d/e/1FAIpQLSdTspH8i2cRPses3bJJus8OAHjnsprt7r_JzzMlz3WTF8vUBA/viewform" />
          </div>
        </main>
      </div>
    </section>
  );
};

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <AutoScroll>
        <Background />
        <HomeSection />
        <AboutUsSection />
      </AutoScroll>
    </Layout>
  );
};

export default Home;

