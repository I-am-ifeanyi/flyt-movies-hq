import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center gap-10 overflow-hidden shrink-0 px-28 h-80 pt-20  bg-[#1f2c3a] text-white w-full relative bottom-0">
      <div className="flex flex-col  shrink-0">
        <h1 className="text-5xl mr-10 p-1 rounded bg-gradient-to-r flex flex-shrink-0 from-purple-500 to-pink-500">
          FlyT <br />HQ
        </h1>
        <p className="mt-10 p-2 rounded bg-gray-100 text-[#1f2c3a] font-extrabold ">Hi Dear User!</p>
      </div>
      <div className="shrink-0 flex flex-col gap-2 font-bold cursor-pointer">
        <h1 className="text-xl">THE BASICS</h1>
        <p>About FlyT HQ</p>
        <p>Contact Us</p>
        <p>Support Forums</p>
        <p>System Status</p>
      </div>
      <div className="shrink-0 flex flex-col gap-2 font-bold cursor-pointer">
        <h1 className="text-xl">GET INVOLVED</h1>
        <p>Contribution Bible</p>
        <p>Add New Movie</p>
        <p>Add New TV Show</p>
      </div>
      <div className="shrink-0 flex flex-col gap-2 font-bold cursor-pointer">
        <h1 className="text-xl">COMMUNITY</h1>
        <p>Guidelines</p>
        <p>Discussions</p>
        <p>Leaderboard</p>
        <p>Twitter</p>
      </div>
      <div className="shrink-0 flex flex-col gap-2 font-bold cursor-pointer">
      <h1 className="text-xl">LEGAL</h1>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
