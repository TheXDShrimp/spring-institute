import type { NextPage } from "next";
import Image from "next/image";
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
  const [showScrollButton, setShowScrollButton] = useState(true);


  useEffect(() => {
    anime({
      targets: titleRef.current,
      translateY: [-100, 0],
      opacity: [0, 1],
      easing: 'easeOutElastic(1, .8)',
      duration: 1500,
    });

    anime({
      targets: buttonRef.current,
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
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 ref={titleRef} className="text-white text-center text-8xl font-black">Your voice matters.</h1>
            <Button ref={buttonRef} name="Get involved ->" className="mt-6" link="/form" />
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


  return (
    <section id="about-us-section" className="w-full h-screen">
      <div className="relative w-full h-full">
        <main className="relative min-h-screen bg-transparent flex flex-col justify-center items-center">
          <h1 ref={headingRef} className="text-white text-7xl font-black text-center">
            Our Mission
          </h1>
          <div className="mt-8 max-w-2xl">
            <p className="text-white text-lg font-medium text-center">
              Across the board, the youth is becoming more involved in politics: more than 55% of all youth turned out to
              vote in 2020. Yet, even as the youth voice is increasingly decisive in elections outcomes, there is a lack
              of opportunity for students to engage in the policy making process at the highest level. This is crucial -
              youth engagement, especially in high school, builds more engaged voters and a more democratic society.
            </p>
            <p className="mt-8 text-white text-lg font-medium text-center">
              We are building a global, 100% youth-powered movement to close this gap in policy worldwide. By providing a
              platform for the youth to spring into action, we cultivate and nurture the next generation of leaders,
              thinkers, and advocates.
            </p>
          </div>
          <Button ref={buttonRef} name="Get Involved ->" className="mt-6" link="/form" />
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

