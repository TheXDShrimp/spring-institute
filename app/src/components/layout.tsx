import { FC } from "react";
import Head from 'next/head';
import Header from "./header";

export const Layout: FC<any> = ({ dim=false, children, mode='dark'}) => {
    return (
        <>
            <Head>
                <title>SPRING Institute</title>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/>
                <meta name="description" content="SPRING Institute: a place for youth political action."/>
                <meta name="keywords" content="Voting, Public Policy, Youth Activism"/>
                <meta name="robots" content="index, follow"/>
                <meta name="web_author" content="Sonny Chen, Anant Khandelwal, Alvan Caleb Arulandu"/>
                
                <meta name="msapplication-TileColor" content="#9f00a7"/>
                <meta name="theme-color" content="#ffffff"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#cf417c"/>
            </Head>
            <Header mode={mode}/>

            {children}
        </>
    );
}