import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Team: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main} style={{textAlign: "center"}}>
        <h1 className={styles.title}> 
          Team
        </h1>
        <h2>Founder</h2>
        <p>If you found this page, congrats, you truly do your due diligence.</p>
        <p>My name is Ryan Reiss. My LinkedIn can be found below. I do have an LLC but for safety reasons I will not share that exact information until some changes are made. These changes will also make Zentaurios compliant with marketing emails. I am not trying to withhold information just simply not readily giving it to those that take advantage of it. More will come in time.</p>
        <p>I started this project about a year ago after discovering most people do not have the same commitment I do. I also did not like dealing with outside developers. It was not only a financial burden but a time consuming one. As an experienced developer, I can code anything on the roadmap. This means Zentaurios does not need to use revenue for future developments. I am simply looking to fund the business and a modest living for myself and family. And by the way, the roadmap work is already...more than started 😉</p>
        <p>I have self funded Zentaurios as a testament that someone with some dedication and skill can make it in Web3. You can read more about why I started Zentaurios on the <Link href="https//zentaurios.app/about" target="_blank">About Zentaurios Page</Link>.</p>
        <p>I am a single father. My son moved in with me five years ago and was having trauma induced episodes. Recently, in a meeting with the school, I found they are phasing him out of the classes that guaranteed him special attention. I would love for Web3 to supply me with miminal life costs to continue this time with my son.</p>
        <p>This is who you will choose to support, a person who CHOOSES to support those around him.</p>
        <p>Zentaurios is my full time job. Overtime. I put in countless hours in hope that Web3 can be a place for small businesses to make honest livings. And if I can make something that helps other people, I am more than happy doing it the rest of my life.</p>
    
        <p><Link href="https://www.linkedin.com/in/ryan-reiss-5272131b1" target="_blank">Founder LinkedIn</Link></p>
        <h2>Just one person?</h2>
        <p>Over the last 3 years I have filtered through a network of crypto related connections. My unofficial partners are better teammates than the official teammates of many projects. I have a series of projects, people, and blockchains to be that have proven themselves. Zentaurios is highly automated but I will be looking for paid help when funding allows. Priority hiring will go to involved community members. Full disclosure, there is already a list.</p>
        <p>I look forward to adding more people to this page.</p>
        <p>"This is not a moon mission, this is Zentaurios."</p>
        <p style={{marginBottom: '100px'}}>-🌲💙</p>
        
      </main>
    </div>
  );
};

export default Team;