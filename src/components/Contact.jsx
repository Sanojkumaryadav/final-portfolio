import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone, BsWhatsapp, BsGlobe } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/profile";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const cards = [
    { Icon: FaLinkedin, label: "LinkedIn", href: profile.links.linkedin },
    { Icon: FaGithub, label: "GitHub", href: profile.links.github },
    { Icon: BsWhatsapp, label: "WhatsApp", href: profile.links.whatsapp },
    { Icon: BsGlobe, label: "CodeOrbit", href: profile.links.codeorbit },
  ];

  return (
    <div name="contact" className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg mx-auto px-4 py-24">
        <SectionTitle
          title="Get in Touch"
          subtitle="Open to senior mobile roles, freelance app projects and collaborations."
        />

        <div className="mt-10 space-y-5">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-xl hover:text-cyan-400">
            <HiOutlineMail size={32} /> {profile.email}
          </a>
          <a href={profile.phoneHref} className="flex items-center gap-3 text-xl hover:text-cyan-400">
            <BsTelephone size={30} /> {profile.phone}
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {cards.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 rounded-lg border border-gray-700 py-6 hover:border-cyan-500 hover:scale-105 duration-300"
            >
              <Icon size={40} />
              <span>{label}</span>
            </a>
          ))}
        </div>

        <p className="mt-16 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
      </div>
    </div>
  );
};

export default Contact;
