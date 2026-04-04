import React from "react";
import sohag from "../assets/sohag.png";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="p-10 mx-auto">
      <h2 className="text-5xl p-8 md:text-start text-center">About me</h2>
      <div className="lg:flex gap-6 ">
        <div className=" p-5 rounded-4xl  ">
          <img className="rounded-2xl " src={sohag} alt="" />
        </div>
        <div className="w-11/12 text-center md:text-start">
          <h2 className="text-5xl  p-2 font-medium">
            <i>Sohag Roy</i>
          </h2>
          <p className="mt-3 text-2xl font-medium">Web Developer</p>
          <p className="mt-10 text-2xl">
            My journey to become a web developer started in 2025. I want to see
            myself as a good web developer. I do not want to lose my hard work
            for this. I am always steadfast in my goals. I expect not only
            limited work but much more. I am ready to work hard. I want to be
            more focused on programming, not just web developers. So I think
            hard work will move me forward. Thanks
          </p>
          <button className="btn mt-4 text-base-100 bg-green-600">
            Learn more
          </button>
          <button onClick={() => navigate(-1)} className="btn mt-4">
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
