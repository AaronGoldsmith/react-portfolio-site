import React from "react"
import PortfoFrame from "../components/PortfoGrid/PortfoFrame"
const Portfolio = () => (
  <div className="portfolio-page" >
    <section>
      <h1>Web Development</h1>
      <h3>These items were projects or assignments I submitted while attending the UC Berkeley Boot camp</h3>
      <PortfoFrame />
    </section>
    <section>
      <h1></h1>
      <PortfoFrame />
    </section>
  </div>
);
export default Portfolio;