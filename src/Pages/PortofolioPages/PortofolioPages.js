import React from 'react';
import portfolioItems from './portfolio-items';


const PortfolioPage = (props) => {
  
  const PortfolioItem = (props) => {

  if (props.render) return props.render;
  
};

  return (
    <div className="portfolio-page">
      <div className="content-grid">
        <h1 >Portfolio</h1>
        <div className="portfolio-wrapper">
          
          {/* <PortfolioItem /> */}
          {portfolioItems.map((item, i) => (
            <PortfolioItem render={item.render} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default PortfolioPage;
