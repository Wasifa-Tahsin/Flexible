import React from "react";
import portfolios from "../../data/portfolios";
import PortfolioCard from "../PortfolioCard";

const Portfolio = () => {
  return (
    <section className=" w-7xl mx-auto  mt-10 space-y-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

     
      {portfolios.map((portfolio) => (
        <PortfolioCard 
          
           key={portfolio.id}   
    imageUrl={portfolio.imageUrl}
          teamImageUrl={portfolio.teamImageUrl}
          teamName={portfolio.teamName}
          loveCount={portfolio.loveCount}
          viewCount={portfolio.viewCount}
        ></PortfolioCard>
      ))}
    </section>
  );
};

export default Portfolio;
