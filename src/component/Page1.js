import React, { Component } from 'react'

export default class Page1 extends Component {
  render() {
    return (
      <div>
        
      <div className="firstpart mt-12 py-5">
      <h5 className="font-bold text-xl">OUR SERVICES</h5>
      <h3 className="font-bold text-2xl py-1 mb-2">
        Areas of expertise that B2B industrial marketers need most:
      </h3>

      <div className="mainbox md:flex mt-11">
        <div className="onebox text-justify px-7">
          <img src="/images/app-development.png" className="w-9 h-9" alt="" />
          <h4 className="font-bold py-3">Web Design & Development</h4>
          <h5 className="text-[15px] mb-3">
            Websites to support sales, drive leads, sell online, automate back
            office functions, increase visibility.
          </h5>
          <p className="text-[13px] mb-1 ">
            {" "}
            Strategy & Planning, Content Strategy, Writing,SEO, Web
            Development, Integrations & Automations, E-commerce, GDPR,
            Accessibility, Hosting, Ongoing Support.
          </p>
          <a className=" font-bold" href="">
            Learn more
          </a>
        </div>

        <div className="line h-56 w-4 bg-pink-600 hidden "> </div>

        <div className="twobox text-justify px-7 mt-8 md:mt-0  ">
          <img src="/images/bullhorn.png" className="w-9 h-9" alt="" />
          <h4 className="font-bold py-3">
            Digital Marketing, ABM, & Analytics
          </h4>
          <h5 className="text-[15px] mb-3">
            Inbound & outbound marketing to attract, engage & nurture niche
            audiences over complex buying cycles, increasing lead quality &
            quantity.
          </h5>
          <p className="text-[13px] mb-1">
            Strategy & Planning, Inbound Marketing, SEO, PPC, CRO, Account
            Based Marketing (ABM) Content Marketing, Sales Enablement, CRM,
            Marketing Automation, Email Marketing, Social Media, Analytics &
            Insights.
          </p>
          <a className=" font-bold" href="">
            Learn more
          </a>
        </div>

        <div className="line h-56 w-4 bg-pink-600 hidden "> </div>

        <div className="threebox text-justify mt-8 md:mt-0  px-7">
          <img src="/images/content-writing.png" className="w-9 h-9" alt="" />
          <h4 className="font-bold py-3">UX, Visual Design, & Branding</h4>
          <h5 className="text-[15px] mb-3">
            Cohesive brands & user experiences that reflect the quality of
            your offerings, increase conversions, & turn prospects into
            customers.
          </h5>
          <p className="text-[13px] mb-1">
            Research & Strategy, UX & Visual Design, Web & Graphic Design,
            Logo & Brand Evolution, Positioning & Key Message Development, ICP
            & Persona Development, Sales Collateral, Sales Enablement.
          </p>
          <a className=" font-bold" href="">
            Learn more
          </a>
        </div>
      </div>
    </div>
      </div>
    )
  }
}
