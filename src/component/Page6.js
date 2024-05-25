import React, { Component } from "react";

export default class Page6 extends Component {
  render() {
    return (
      <div className=" bg-blue-950 text-white py-16 Secondpart md:flex ">

        <div className="  text-justify px-3 py-3  md:px-9   ">
          <h2 className=" text-5xl md:text-3xl lg:text-5xl font-bold py-3" >How can we help you succeed?</h2>
          <h2 className="text-2xl">Let's start the conversation.</h2>
        </div>
        <div className=" form   font-bold px-8">
          <div className="one md:flex gap-5 ">
            <div className="fname  justify-items-start">
              <label htmlFor="">First name*</label>
              <br />
              <input
                type="text"
                className="px-6 py-2  rounded-lg"
                placeholder=" "
              />
            </div>

            <div className="lname">
              <label htmlFor="">Last name*</label>
              <br />
              <input
                type="text"
                className="py-2  rounded-lg px-6"
                placeholder=" "
              />
            </div>
          </div>

          <div className="twow gap-5 py-6 md:flex">
            <div className="name">
              <label className="py-5 px-6" htmlFor="">
                Email*
              </label>
              <br />
              <input
                type="text"
                className="px-6 py-2  rounded-lg"
                placeholder=" "
              />
            </div>

            <div className="phone">
              <label htmlFor="">Phone*</label>
              <br />
              <input
                type="text"
                placeholder=" "
                className="px-6  py-2  rounded-lg"
              />
            </div>
          </div>

          <div className="three md:flex gap-5">
            <div className="comapny">
              <label htmlFor="">Company*</label>
              <br />
              <input
                type="text"
                className="px-6 py-2  rounded-lg"
                placeholder=" "
              />
            </div>

            <div className="csize">
              <label htmlFor="">Company Size*</label>
              <br />
              <input
                type="text"
                className="px-6 py-2  rounded-lg"
                placeholder=" "
              />
            </div>
          </div>

          <div className="four">
            <label
              for="description"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              class="w-full px-4 py-2 "
              placeholder="Enter a description"
            ></textarea>
          </div>

          <div >
         
          <h3 className="font-mono text-start w-[522px]">
          Windmill Strategy needs the contact information you provide to us
          to contact you about our products and services. For information
            about our privacy practices, please see our:
          </h3>
          <a href="" className="">
  Privacy Policy
</a>{" "}
<br />

  <button className="font-bold px-7 py-3  mt-8 rounded-lg bg-orange-400 ">Contact us</button>
  
  
  
  </div>
        </div>
      </div>
    );
  }
}


