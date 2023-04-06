import type { NextPage } from "next";
import { Layout } from "@/components/layout";
import Image from "next/image";
import ColoredLine from "@/components/horizontalRule";
import { Footer } from "@/components/footer";
import React, { useState, useEffect } from 'react';

const TopSection = () => {
    const [text, setText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const policyText = "The Institute @ SPRING publishes long and short-form policy briefs, memos, opinions, and interviews on current events and interdisciplinary subjects to provide insight into ongoing issues, advocate for legislative change, and mobilize broader advocacy and support among the youth.";
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
            <div className="h-full flex">
                <div className="flex flex-col pr-10 md:pr-40  pl-10 md:pl-40  sm:pt-16 md:pt-20" style={{ marginTop: "10vh" }}>
                    <h1 className="text-8xl font-black text-green-800 leading-none sm:leading-relaxed xs:pt-40" style={{ fontSize: "max(6.5vw, 80px)" }} >
                        Policy
                    </h1>
                    <p className={`pr-32 sm:pr-16 text-green-900 text-lg font-normal sm:leading-loose md:leading-normal max-w-prose mb-12`} style={{ fontSize: "max(2vw, 25px)" }} >
                        {text}
                        {isTyping && <span className="animate-pulse">|</span>}
                    </p>
                </div>
            </div>
        </section>

    );
};






const Pages: NextPage<any> = () => {
    return (
        <section className="w-full min-h-screen" style={{ background: '#fff' }}>
            <div className="pl-4 xd:px-4 sm:px-16 md:px-32 py-20">

                <div className="py-12">
                    <ColoredLine color="grey" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="text-center text-lg font-black md:order-1 pr-8">
                        <Image layout="responsive" width="700" height="370" src="/images/highSpeedRail.jpg" alt="High Speed Rail" />
                    </div>
                    <div className="text-lg md:order-1">
                        <h3 className="bold text-green-800 font-semibold">POLICY MEMO</h3>
                        <h1 className="text-3xl bold text-green-800 pb-4">Report on High-Speed Rail: Recommendations for a New Era of American Infrastructure</h1>
                        <p>Authors: Brian Zhou, Avik Karim, Vivian Zhu, Anant Khandelwal et al.</p>

                        <p>Date: April 4, 2023</p>

                        <p className="py-4">
                            High-speed rail has the potential to revitalize the decaying American passenger rail system and public transit infrastructure at large.
                            However, while other countries have far surpassed America's HSR network, ongoing projects in America face delayed construction, rising costs,
                            legal challenges, and poor support infrastructure. Despite these challenges, HSR still has the potential to revolutionize American transit
                            and revitalize the American economy, offering an alternative to car and air travel, reducing carbon emissions...
                        </p>
                        <div className="pt-2 pb-4">
                            <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4408880" target="_blank" rel="noopener noreferrer">
                                <button className="transition duration-200 ease-in-out text-base bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full">
                                    View the article →
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

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
