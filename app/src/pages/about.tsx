import type { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import React from "react";
import { Layout } from "@/components/layout";
import Background from "@/components/HomeBackground"
import ColoredLine from "@/components/horizontalRule";
import anime from 'animejs';

const SingleCard = ({ name = "", position = "", image = "/favicon-16x16.png", description }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    anime({
      targets: cardRef.current,
      translateX: [-50, 0],
      opacity: [0, 1],
      easing: 'easeOutElastic(1, .8)',
      duration: 1500,
      delay: 500,
    });
  }, []);

  return (
    <div className="md:flex md:flex-row ml-4 py-4 px-4" ref={cardRef}>
      <div className="rounded-full mr-3 border-black flex flex-row justify-center items-center">
        <Image src={image} alt="" width={150} height={150} layout="fixed" className="rounded-full" />
      </div>

      <div className="pl-2 text-white">
        <h2 className="font-black text-3xl">{name} - {position}</h2>
        <p className="pt-4">{description}</p>
      </div>
    </div>
  );
};



const NationalDirectors: NextPage<any> = () => {
  return (
    <section>
      <div className="flex flex-row justify-center pt-12 text-4xl">
        <h1>National Directors</h1>
      </div>
      <div className="mt-5 grid xs:grid-cols-1 lg:grid-cols-2 xs:m-5 md:m-12 gap-5 pb-8">
        <SingleCard name="Brian Zhou" position="Founder & Chairman" image="/images/bzhou.png" description="A junior at Thomas Jefferson High School for Science and Technology in Alexandria, Virginia, Brian is interested in studying the intersections between policy, economics, and the computational sciences. Outside of SPRING, Brian is a captain of his school's debate team and a researcher. He enjoys hiking, cooking, and exploring new places." />
        <SingleCard name="Avik Karim" position="Editor-in-Chief" image="/images/avik.png" description="A junior at Dreyfoos School of the Arts in West Palm Beach, Florida, Arik is interested in exploring the convergence of international relations, philosophy, and public policy. Outside of SPRING, Arik is the captain of his school's debate team and volunteers for bringing the arts to underprivileged youth in Palm Beach County. He enjoys reading, music, and biking." />
        <SingleCard name="Vivian Zhu" position="Director of Media" image="/images/vivian.png" description="A junior at Ridge High School in Basking Ridge, New Jersey, Vivian is interested in studying business, economics, and law. Outside of SPRING, Vivian is a debater while serving as Secretary and Treasurer of her team. She also loves listening to music, writing, translating, teaching kids abroad English, and of course: watching Criminal Minds." />
        <SingleCard name="Jake Zeng" position="Director of Recruitment" image="/images/jake.png" description="A sophomore at American Heritage School in Plantation, Florida, Jake is a student primarily interested in studying law, economics, the courts, and politics. Outside of SPRING, Jake is on the US Development Team for debate and competes in mock trial and moot court. Jake loves playing chess, reading travel magazines, and keeping up with friends." />
        <SingleCard name="Sonny Chen" position="Director of Technology" image="/images/sonny.png" description="A junior at Thomas Jefferson High School for Science and Technology in Alexandria, Virginia, Sonny is interested in studying all that Computer Science and Machine Learning has to offer. Outside of school, Sonny previously interned at Microsoft, enjoys outswimming his friend David, playing competitive Minecraft, and reading a great book." />
        <SingleCard name="Anant Khandelwal" position="Director of Technology" image="/images/anant.png" description="A junior at Thomas Jefferson High School for Science and Technology in Alexandria, Virginia, Anant is interested in both Machine Learning and Mathematics. Aside from school, Anant enjoys debating and researching concepts in machine learning. His hobbies include weightlifting, playing tennis and ping pong, and reading." />
        <SingleCard name="Sam Chen" position="Director of Events" image="/images/sam.png" description="A junior at Boston Latin School in Boston, Massachusetts, Sam is deeply curious about economics, international relations, and politics. He likes researching about the current state of the world order and the future of American policy making, debating public forum, writing about classics, playing basketball with his brother and poker with friends." />
      </div>
    </section>
  );
};

const AboutUs: NextPage<any> = () => {
  return (
    <Layout>
      <div className='relative w-full m-0 h-screen'>
        <Background />
        <main className='relative w-full min-h-screen bg-transparent'>
          <div className="flex flex-col place-items-center">
            <h1 className="text-white text-8xl font-black xs:mx-12 md:mx-24 mt-24" >About Us</h1>
            <p className="px-12 text-white text-center text-lg font-medium mt-8">
              As young people, we believe that we have a crucial role to play in shaping the policies that affect us and our communities.
              That's why we've come together as a group of dedicated high school advocates, determined to make our voices heard.
              We're proud to introduce our fantastic staff:
            </p>
          </div>


          <NationalDirectors />
        </main>
      </div>
    </Layout>
  );
};

export default AboutUs;
