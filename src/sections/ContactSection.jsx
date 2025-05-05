import React from "react";
import { MoreButton, SectionHeading } from "../components";
import separator from "../assets/images/separatorBlack.png";

const ContactSection = () => {
  return (
    <section className="section-padding" id="contact">
      <div className="flex justify-center items-center flex-col gap-12">
        <SectionHeading title="Contact" />
        <p className="text-xs open-sans px-6 sm:px-10 md:px-20 lg:px-40 xl:px-50 text-center">
        Have a project in mind or a question? Let’s connect and build something great together.
        </p>
        <img src={separator} width="100px" alt="Separator" />
        <form className="flex gap-8 flex-col md:gap-6 sm:gap-4">
  <input
    className="border border-4 uppercase border-t-0 border-r-0 text-sm px-4 py-4 w-full sm:w-96"
    type="text"
    placeholder="Enter Your Name*"
  />
  <input
    className="border border-4 uppercase border-t-0 border-r-0 text-sm px-4 py-4 w-full sm:w-96"
    type="email"
    placeholder="Enter Your Email*"
  />
  <input
    className="border border-4 uppercase border-t-0 border-r-0 text-sm px-4 py-4 w-full sm:w-96"
    type="number"
    placeholder="Enter Your Number*"
  />
  <textarea
    className="border border-4 uppercase border-t-0 border-r-0 text-sm px-4 py-4 w-full sm:w-96"
    rows="6"
    placeholder="Your Message*"
  ></textarea>
  <MoreButton title="Submit" padding="6" margin="auto" />
</form>

      </div>
    </section>
  );
};

export default ContactSection;
