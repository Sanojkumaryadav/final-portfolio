import React from "react";
import ProfileImage from "../assets/sanoj.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { Link } from "react-scroll";
import { profile } from "../data/profile";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-24"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] px-4 md:flex-row gap-8">
        <div className="flex flex-col justify-center">
          <p className="text-cyan-400 font-semibold tracking-wide">Hi 👋, I'm {profile.name}</p>
          <h1 className="mt-3 text-4xl sm:text-6xl font-bold text-white leading-tight">
            {profile.role}
          </h1>
          <p className="mt-2 text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {profile.focus}
          </p>
          <p className="text-gray-400 py-5 max-w-md text-lg">
            4+ years shipping production iOS and Flutter apps — ride-hailing, health-tech and
            e-commerce — with security and clean architecture in every layer.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              My Work
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="text-white w-fit px-6 py-3 flex items-center gap-2 rounded-md border border-gray-500 hover:border-cyan-400 duration-300"
            >
              <HiOutlineDocumentDownload size={22} /> Resume
            </a>
          </div>
          <p className="mt-6 text-gray-500 text-sm">📍 {profile.location}</p>
        </div>

        <div className="shrink-0 rounded-full p-1.5 bg-gradient-to-br from-cyan-400 to-blue-600 shadow-2xl shadow-cyan-500/20">
          <img
            src={ProfileImage}
            alt={profile.name}
            width={640}
            height={640}
            className="block rounded-full w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
