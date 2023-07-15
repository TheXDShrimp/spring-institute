import type { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import React from "react";
import { Layout } from "@/components/layout";
import Background from "@/components/HomeBackground"
import ColoredLine from "@/components/horizontalRule";

import { nationalDirectorsData } from "./api/nationalDirectorsData";
import { regionalDirectorsData } from "./api/regionalDirectorsData";
import { fellowsData } from "./api/fellowsData";

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
        <Image src={"/images/" + image} alt="" width={150} height={150} layout="fixed" className="rounded-full" />
      </div>

      <div className="pl-2 text-white">
        <h2 className="font-black text-3xl">{name} - {position}</h2>
        <p className="pt-4">{description}</p>
      </div>
    </div>
  );
};

const RegionalCard = ({ name = "", position = "", image = "/favicon-16x16.png", description }) => {
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
        <Image src={"/images/" + image} alt="" width={150} height={150} layout="fixed" className="rounded-full" />
      </div>

      <div className="pl-2 text-white">
        <h2 className="font-black text-3xl">{name} - {position}</h2>
        <p className="pt-4">{description}</p>
      </div>
    </div>
  );
};


const FellowCard = ({ name = "", position = "", image = "/favicon-16x16.png", description }) => {
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
        <Image src={"/images/" + image} alt="" width={150} height={150} layout="fixed" className="rounded-full" />
      </div>

      <div className="pl-2 text-white">
        <h2 className="font-black text-3xl">{name} - {position}</h2>
        <p className="pt-4">{description}</p>
      </div>
    </div>
  );
};



const TopSection: NextPage<any> = () => {
  return (
    <div className="flex flex-col place-items-center">
      <h1 className="text-white text-8xl font-black xs:mx-12 md:mx-24 mt-24" >About Us</h1>
      <p className="px-36 text-white text-center text-lg font-medium mt-8">
        We believe that we have a crucial role to play in shaping the policies that affect us and our communities.
        That's why we've come together as a group of dedicated high school advocates, determined to make our voices heard.
        We're proud to introduce our fantastic staff:
      </p>
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
        {nationalDirectorsData.map((cardData, index) => (
          <SingleCard
            key={index}
            name={cardData.name}
            position={cardData.position}
            image={cardData.image}
            description={cardData.description}
          />
        ))}
      </div>
    </section>
  );
};

const RegionalDirectors: NextPage<any> = () => {
  return (
    <section>
      <div className="flex flex-row justify-center pt-12 text-4xl">
        <h1>Regional Directors</h1>
      </div>

      <div className="mt-5 grid xs:grid-cols-1 lg:grid-cols-2 xs:m-5 md:m-12 gap-5 pb-8">
        {regionalDirectorsData.map((cardData, index) => (
          <RegionalCard
            key={index}
            name={cardData.name}
            position={cardData.position}
            image={cardData.image}
            description={cardData.description}
          />
        ))}
      </div>
    </section>
  )
}

const Fellows: NextPage<any> = () => {
  return (
    <section>
      <div className="flex flex-row justify-center pt-12 text-4xl">
        <h1>Fellows</h1>
      </div>

      <div className="mt-5 grid xs:grid-cols-1 lg:grid-cols-2 xs:m-5 md:m-12 gap-5 pb-8">
        {fellowsData.map((cardData, index) => (
          <FellowCard
            key={index}
            name={cardData.name}
            position={cardData.position}
            image={cardData.image}
            description={cardData.description}
          />
        ))}
      </div>
    </section>
  )
}

const AboutUs: NextPage<any> = () => {
  return (
    <Layout>
      <div className='relative w-full m-0 h-screen'>
        <Background />
        <main className='relative w-full min-h-screen bg-transparent'>
          <TopSection />


          <NationalDirectors />

          <RegionalDirectors />

          <Fellows />
        </main>
      </div>
    </Layout>
  );
};

export default AboutUs;