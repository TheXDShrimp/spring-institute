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
                    title="A Report on America's Debt Ceiling"
                    date="October 29, 2023"
                    authors="Hanming Sun, Gia Mendonca, Aanya Baddela, Jayden Liu, Arik Karim et al."
                    image="/images/debtceiling.jpg"
                    description="The debt ceiling, which is the limit on the amount of national debt that can be incurred 
                    by the U.S. Treasury as outlined by the legislature, is an institution that has historically faced 
                    immense controversy over its practicality and constitutionality. Today, it serves as a guideline to 
                    ensure reasonable expenditure by the U.S. government. However, it is once again rapidly being approached, 
                    particularly due to existing domestic initiatives and foreign aid, and it is imperative that measures are 
                    taken to ensure that the American economy does not collapse due to unpayable debt. Should the debt ceiling 
                    be surpassed, there would be catastrophic effects on the country's credit score, emplyment and inflation 
                    rates, and borrowing costs. This meta-analysis study reviews past approaches, stakeholder analyses, and 
                    public sentiment regarding the debt ceiling crisis, then outlines several recommended courses of action 
                    based on empirical data from previous instances of fiscal crises."
                    link="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4616329"
                />
                
                <SinglePolicy
                    type="POLICY BRIEF"
                    title="Report on Minimum Wage: Federal and State Recommendations"
                    date="October 19, 2023"
                    authors="Arik Karim, Sophia Li, Ethan Wilkes, Shreyes Ram, and Brian Zhou."
                    image="/images/minwage.jpg"
                    description="The COVID-19 pandemic, paired with increased inflationary pressures, have worsened 
                    the labor crisis afflicting millions of minimum wage workers across the United States. Increased 
                    minimum wages have the potential to promote upward mobility, and importantly, create a grand vision 
                    for equitable pay & treatment of workers in tandem with profit. We analyze the relevant stakeholders 
                    to determine the viability of federal minimum wage increases in the and suggest comprehensive policy 
                    action to catalyze minimum wage increases across the United States to address this labor crisis."
                    link="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4607088"
                />
                
                <SinglePolicy
                    type="POLICY BRIEF"
                    title="Policy Proposals for the United Kingdom's National Quantum Strategy"
                    date="September 22, 2023"
                    authors="Brian Zhou, Brayden Lee, Arik Karim, Gia Mendonca, Hanming Sun et al."
                    image="/images/qcomputer.jpeg"
                    description="The up-and-coming technological development that will define the next few centuries of scientific
                    advancement is not in Artificial Intelligence, but rather our understanding of the sub-atomic:
                    quantum. The quantum revolution leverages new innovative understandings in science theory and
                    engineering capability to create new solutions in diverse spaces from cryptography to physical
                    materials. Quantum computers, which offer the real possibility of replacing classical computers
                    for intensive tasks, have the potential to transform and optimise sectors from agriculture and the
                    life sciences to finance and operations. Other aspects of quantum such as communications and
                    encryption technology pose short-term national security concerns and long-term potentials for
                    secure communications if done correctly. In this brief for the United Kingdom's Department for Science, Innovation, and Technology, we reviewed relevant scientific trends in quantum research and
                    development and the motivations that drive relevant stakeholders—including governments,
                    universities, and corporations—to analyse how the UK can implement changes to its strategic
                    goals in quantum leadership. We adopt a discursive approach to potential solutions, examining
                    the UK’s vital role in the years to come. We urge the UK to invest in the driving force behind
                    quantum’s bright future: the youth of today that will build tomorrow."
                    link="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4592939"
                />

                <SinglePolicy
                    type="INFO REPORT"
                    title="Report on Public Option Healthcare"
                    date="September 21, 2023"
                    authors="Jake Zeng, Matthew Rodriguez, Emma Delgado, Sharif Khan et al."
                    image="/images/publicoption.jpg"
                    description="Healthcare is inaccessible to an unimaginable extent, as patients facing devastating diseases are faced with the 
                    impossible choice between sacrificing their health and paying an exorbitant fee. However, the usage of a public option healthcare 
                    plan – funded by governments and competing against existing private plans already in the market – has the potential to drastically 
                    increase the coverage of healthcare, provide necessary treatment for millions, while preserving the free market competition that 
                    allows providers to be paid and costs to stay low.  Studies have found that a public option healthcare system would save the U.S. 
                    government billions, help hospitals burdened by uncompensated care, negotiate lower prices for healthcare services, all while keeping 
                    necessary health services available for the patients who need it the most."
                    link="/files/9-21-23-INFOREPORT-FL-Public-Option.pdf"
                />
                
                <SinglePolicy
                    type="INFO REPORT"
                    title="Report on Youth Juvenile Detention"
                    date="August 22, 2023"
                    authors="Sophia Li, Peter Hablinski, Kaveen Shah, Max Kettles et al."
                    image="/images/solitaryconfinement.jpg"
                    description="As the implementation of Juvenile Detention as a mechanism to hold youth accountable has been growing, so has the profound negative impacts it
                    has on these teenagers. Studies have found that teens often experience severe mental health conditions during and after their sentence in Juvenile Detention
                    including anxiety, depression, and suicidal ideation. The isolation in Juvenile Detention often causes psychological and behavioral issues, including aggressive
                    and disruptive behaviors within kids. Despite several attempts at reform on a federal and state level, the system is still discriminatory towards minority 
                    groups and causes. severe psychological trauma in younger generations. However, there are alternatives…"
                    link="/files/8-22-23-INFOREPORT-TX-Juvenile-Detention.pdf"
                />

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
                    link="https://docs.google.com/document/d/1WbY7M2UVV-wDakSj_-bQFvva1uXTiQjeeokQ8vSIyC4/edit"
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
