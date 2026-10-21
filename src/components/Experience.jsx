import React from "react";
import { experience } from "../data/profile";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  return (
    <div name="experience" className="w-full bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg px-4 py-24 mx-auto">
        <SectionTitle title="Experience" subtitle="Where I've built and shipped apps" />

        <ol className="mt-10 relative border-l-2 border-gray-700 ml-2">
          {experience.map((job) => (
            <li key={job.company} className="mb-12 ml-6">
              <span className="absolute -left-[9px] mt-2 h-4 w-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-xl font-bold">
                  {job.role} <span className="text-cyan-400">· {job.company}</span>
                </h3>
                <p className="text-sm text-gray-400 shrink-0">
                  {job.period} · {job.place}
                </p>
              </div>
              <ul className="mt-3 space-y-2 text-gray-300 list-disc pl-5">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Experience;
