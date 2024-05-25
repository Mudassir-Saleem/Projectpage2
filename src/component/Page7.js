import React, { Component } from "react";

export default class Page7 extends Component {
  render() {
    return (
      <div className="  c2  md:flex text-white py-16  sm:items-center  x-12 sm:px-6 sm:text-start ">
        <div className=" lg:px-7  text-start ">
          <img
            className="w-44 py-5 justify-center items-center "
            src="https://www.windmillstrategy.com/wp-content/themes/bedstone/images/WindmillStrategy_logo-white-orange.svg"
            alt=""
          />

          <h2 className="   md:w-[237px] lg:w-[303px]   ">
            Industrial Web Design & B2B Digital Marketing Agency based in
            Minneapolis, serving clients nationwide.
          </h2>

          <button className="py-2 px-8 rounded-lg mt-10 bg-orange-600">SUBSCRIBE</button>
        </div>

        <div className="main2 lg:px-14 md:px-10 lg:text-start">
          <h2 className="font-bold py-5">SITEMAP</h2>

          <section className=" ">
            <a href="">Web Design Case Studies</a>
            <br />
            <a href="">Digital Marketing Resources</a>
            <br />

            <a href="">About Us</a>
            <br />
            <a href=""> Our Process </a>
            <br />
            <a href=""> Careers</a>
            <br />
            <a href=""> Contact</a>
            <br />
          </section>
        </div>

        <div className="main2 lg:text-start">
          <h2 className="font-bold py-5">HOW CAN WE HELP?</h2>

          <section className=" ">
            <a href="">Web Design Case Studies</a>
            <br />
            <a href="">Web Design & Website Development</a>
            <br />

            <a href="">Digital Marketing, ABM & Analytics</a>
            <br />
            <a href="">UX, Visual Design, Branding </a>
            <br />
            <a href=""> UX Consulting</a>
            <br />
            <a href=""> Analytics & Insights</a>
            <br />
            <a href=""> Marketing Automation, CRM & Sales Enablement</a>
          </section>
        </div>
      </div>
    );
  }
}
