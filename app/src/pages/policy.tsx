import type { NextPage } from "next";
import { Layout } from "@/components/layout";
import Image from "next/image";
import ColoredLine from "@/components/horizontalRule";
import { Footer } from "@/components/footer";
import React, { useState, useEffect } from 'react';
import AutoScroll from "@/components/AutoScroll";


const TopSection = () => {
    const [text, setText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const policyText = "The Institute @ SPRING produces policy briefs, memos, opinions, and interviews that cover current events and interdisciplinary topics. These publications aim to offer insights into ongoing issues, promote legislative change, and mobilize advocacy and support among the youth.";
        const typingDelay = 20;

        let currentIndex = 0;
        let timeoutId;

        const typeNextCharacter = () => {
            setText((prevText) => prevText + policyText[currentIndex]);
            currentIndex++;

            if (currentIndex === policyText.length) {
                setIsTyping(false);
                return;
            }

            timeoutId = setTimeout(typeNextCharacter, typingDelay);
        };

        typeNextCharacter();

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <section className="w-full h-screen bg-lightGreen bg-[url('/images/policyLines.png')] bg-left">
            <div className="flex h-full">
                <div className="flex flex-col px-10 md:px-40 sm:pt-16 md:pt-20" style={{ marginTop: "10vh" }}>
                    <h1 className="text-8xl font-black text-green-800 leading-none sm:leading-relaxed" style={{ fontSize: "max(6.5vw, 80px)" }}>
                        Policy
                    </h1>
                    <p className={`pr-24 sm:pr-8 text-green-900 text-lg font-normal sm:leading-loose md:leading-normal max-w-prose`} style={{ fontSize: "2vw" }}>
                        {text}
                        {isTyping && <span className="animate-pulse">|</span>}
                    </p>
                </div>
            </div>
        </section>

    );
};

const SinglePolicy = ({ type, title, date, authors, image, description, link }) => {
    return (
        <div>
            <div className="py-12">
                <ColoredLine color="grey" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="text-center text-lg font-black md:order-1 pr-8">
                    <Image layout="responsive" width="700" height="370" src={image} alt="High Speed Rail" />
                </div>
                <div className="text-lg md:order-1">
                    <h3 className="bold text-green-800 font-semibold">{type}</h3>
                    <h1 className="text-3xl bold text-green-800 pb-4">{title}</h1>
                    <p>Authors: {authors}</p>

                    <p>Date: {date}</p>

                    <p className="py-4">
                        {description}
                    </p>
                    <div className="pt-2 pb-4">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <button className="transition duration-200 ease-in-out text-base bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full">
                                View the article →
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Pages: NextPage<any> = () => {
    return (
        <section className="w-full min-h-screen" style={{ background: '#fff' }}>
            <div className="pl-4 sm:px-16 md:px-32 py-20">
                <SinglePolicy
                    type="POLICY BRIEF"
                    title="Report on High-Speed Rail: Recommendations for a New Era of American Infrastructure"
                    date="April 4, 2023"
                    authors="Brian Zhou, Arik Karim, Vivian Zhu, Anant Khandelwal et al."
                    image="/images/highSpeedRail.jpg"
                    description="High-speed rail has the potential to revitalize the decaying American passenger rail system and public transit infrastructure at large.
                    However, while other countries have far surpassed America's HSR network, ongoing projects in America face delayed construction, rising costs,
                    legal challenges, and poor support infrastructure. Despite these challenges, HSR still has the potential to revolutionize American transit
                    and revitalize the American economy, offering an alternative to car and air travel, reducing carbon emissions..."
                    link="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4408880"
                />

                <SinglePolicy
                    type="POLICY MEMO"
                    title="Memo Regarding Right-to-Work Laws in America"
                    date="April 8, 2023"
                    authors="Aileen Wu, Frederick Bao, Arman Syed"
                    image="/images/righttowork.webp"
                    description="Right-to-work laws are detrimental to collective bargaining by requiring dues to be optional, diminishing the power of unions. Consequently, 
                    right-to-work laws undermine workplace safety, healthcare coverage, and lower wages. Thus, we urge the ratification of the H.R.842 Protecting the Right 
                    to Organize Act of 2021 (PRO Act), repealing right-to-work laws from all 26 states currently enacting these laws, and strengthening modern labor laws 
                    such as increased minimum wage. "
                    link=""
                />

                <div className="py-12">
                    <ColoredLine color="grey" />
                </div>

                <h2 className="text-center font-bold text-gray-800">New Content on the Way!</h2>


            </div>
        </section>
    );
}


const Policy: NextPage<any> = () => {
    return (
        <Layout title="Policy" mode='light'>
            <TopSection />
            <Pages />
        </Layout>
    );
}

export default Policy;
