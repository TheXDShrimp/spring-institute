import type { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import React from "react";
import { Layout } from "@/components/layout";
import Background from "@/components/HomeBackground"
import { Footer } from "@/components/footer";
import Button from "@/components/Button";
import anime from 'animejs';

const HomeSection: NextPage<any> = () => {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

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
  }, []);

  return (
    <section className='w-full h-screen'>
      <div className='relative w-full m-0 h-screen'>
        <main className='relative w-full min-h-screen bg-transparent'>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 ref={titleRef} className="text-white text-center text-8xl font-black">Your voice matters.</h1>
            <Button ref={buttonRef} name="Get involved ->" className="mt-6" link="/form" />
          </div>
        </main>
      </div>
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
    <section className='w-full h-screen'>
      <div className='relative w-full m-0 h-screen'>
        <main className='relative w-full min-h-screen bg-transparent'>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 ref={headingRef} className="text-white text-center text-7xl font-black">Our Mission</h1>
            <p className="text-white text-center text-lg font-medium max-w-2xl mt-8">
              Across the board, the youth is becoming more involved in politics: more than 55% of all youth turned out to vote in 2020. Yet, even as the youth voice is increasingly decisive in elections outcomes, there is a lack of opportunity for students to engage in the policy making process at the highest level. This is crucial - youth engagement, especially in high school, builds more engaged voters and a more democratic society.
            </p>
            <p className="text-white text-center text-lg font-medium max-w-2xl mt-8">
              We are building a global, 100% youth-powered movement to close this gap in policy worldwide. By providing a platform for the youth to spring into action, we cultivate and nurture the next generation of leaders, thinkers, and advocates.
            </p>
            <Button ref={buttonRef} name="Get Involved ->" className="mt-6" link="/form" />
          </div>
        </main>
      </div>
    </section>
  );
};

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Background />
      <HomeSection />
      <AboutUsSection />
    </Layout>
  );
};

export default Home;

