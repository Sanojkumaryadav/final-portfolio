import React from "react";
import { profile, education, achievements, learning } from "../data/profile";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div name="about" className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg px-4 py-24 mx-auto flex flex-col w-full">
        <SectionTitle title="About" />

        <div className="mt-8 space-y-4 text-lg text-gray-300">
          {profile.summary.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4">
          {profile.stats.map(({ value, label }) => (
            <div key={label} className="rounded-lg bg-gray-900/70 border border-gray-700 p-4 text-center">
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {value}
              </p>
              <p className="mt-1 text-sm text-gray-400">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="space-y-4">
              {education.map((e) => (
                <li key={e.title} className="border-l-2 border-cyan-500 pl-4">
                  <p className="font-semibold">{e.title}</p>
                  <p className="text-gray-400 text-sm">
                    {e.place} · {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Certifications & Achievements</h3>
            <ul className="space-y-2 text-gray-300">
              {achievements.awards.map((a) => (
                <li key={a}>🏆 {a}</li>
              ))}
              {achievements.certs.map((c) => (
                <li key={c}>📜 {c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-bold mb-3">Currently Learning</h3>
          <div className="flex flex-wrap gap-2">
            {learning.map((l) => (
              <span key={l} className="rounded-full border border-gray-600 px-3 py-1 text-sm text-gray-300">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
