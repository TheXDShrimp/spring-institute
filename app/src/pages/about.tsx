import type { NextPage } from "next";
import Image from "next/legacy/image";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import React from "react";
import { Layout } from "@/components/layout";
import Background from "@/components/HomeBackground"
import ColoredLine from "@/components/horizontalRule";
import ContactButton from '../components/ContactButton';

import { nationalDirectorsData } from "./api/nationalDirectorsData";
import peopleData from "./api/peopleData";
import usMapData from "./api/usmap"

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
    <div className="md:flex md:flex-row ml-4 py-4 px-4 bg-richGreen rounded-2xl shadow-xl" ref={cardRef}>
      <div className="rounded-full mr-3 border-black flex flex-row justify-center items-center">
        <Image src={"/images/" + image} alt="" width={150} height={150} layout="fixed" className="rounded-full" />
      </div>

      <div className="pt-2 pl-2 text-white">
        <h2 className="font-black text-3xl">{name} - {position}</h2>
        <p className="pt-4 text-sm">{description}</p>
      </div>
    </div>
  );
};

const TopSection: NextPage<any> = () => {
  return (
    <div className="flex flex-col place-items-center">
      <h1 className="text-white text-8xl font-black mx-12 mt-24" >About Us</h1>
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
    <section className="">
      <div className="flex flex-row justify-center pt-12 text-4xl">
        <h1>National Directors</h1>
      </div>
      <div className="mt-5 grid xs:grid-cols-1 lg:grid-cols-2 xs:m-5 md:m-12 gap-4 pb-8">
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

const USMap = () => {
  const [selectedState, setSelectedState] = useState("Virginia");


  const handleStateClick = (stateName: string) => {
    setSelectedState(stateName);
  };

  const stateInfo = peopleData.find((state) => state.stateName === selectedState);

  return (
    <section className="my-8">
      <div className="bg-orange-100 rounded-lg ml-16 mr-12 mb-8">
        <div className="flex flex-row justify-center pt-12 text-4xl flex border-2 border-black">
          <div className="mt-8">
            <svg width="1100" height="600">
              <g id="map">
                {usMapData.map((curState) => {
                  // Find the corresponding state data in statesData
                  const stateInfo = peopleData.find(
                    (state) => state.stateName === curState.name
                  );

                  // Determine the fill color based on the number of fellows
                  let fillColor = "gray";
                  if (stateInfo && stateInfo.fellows.length >= 3) {
                    fillColor = "green";
                  } else if (stateInfo) {
                    fillColor = "lightgreen";
                  }

                  return (
                    <path
                      key={curState.state}
                      d={curState.path}
                      style={{
                        strokeWidth: 0.97063118,
                        fill: fillColor,
                        stroke: "#000",
                      }}
                      onClick={() => handleStateClick(curState.name)}
                    />
                  );
                })}
              </g>
            </svg>
          </div>
        </div>

        <div className="flex flex-col place-items-center pb-8">
          <h2 className="text-green-900 text-6xl font-black xs:mx-12 md:mx-24 mt-4 pb-2">Welcome to {selectedState}</h2>
          <div className="px-16">
            <div className="px-36 text-richGreen text-center text-lg font-medium">
              <p>
                National Director: {stateInfo ? stateInfo.overseer : "Coming Soon!"}
              </p>
              <p>
                Contact: {stateInfo ? <ContactButton displayString={stateInfo.contact} emailAddress={stateInfo.contact} /> : "Coming Soon!"}
              </p>
            </div>

            {stateInfo && stateInfo.regionalDirectors && (
              <div>
                <h3 className="text-green-900 text-3xl mt-8 pb-2 font-medium">Regional Directors:</h3>
                <ul className="pb-4 pl-8">
                  {stateInfo.regionalDirectors.map((director) => (
                    <li key={director.name} className="pb-2">
                      <h4 className="text-lg font-semibold">{director.name}</h4>
                      <p className="text-gray-500">{director.title}</p>
                      <p className="text-gray-700">{director.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}


            {stateInfo && stateInfo.fellows && (
              <div>
                <h3 className="text-green-900 text-3xl mt-8 pb-2 font-medium">Fellows:</h3>
                <ul className="pb-4 pl-8">
                  {stateInfo.fellows.map((fellow) => (
                    <li key={fellow.name} className="pb-2">
                      <h4 className="text-lg font-semibold">{fellow.name}</h4>
                      <p className="text-gray-500">{fellow.position}</p>
                      <p className="text-gray-700">{fellow.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <p>secret</p>
    </section>
  );
}

const AboutUs: NextPage<any> = () => {
  return (
    <Layout>
      <div className='relative w-full m-0 h-screen'>
        <Background />
        <main className='relative w-full min-h-screen bg-transparent'>
          <TopSection />
          <NationalDirectors />
          <USMap />
        </main>
      </div>
    </Layout>
  );
};

export default AboutUs;