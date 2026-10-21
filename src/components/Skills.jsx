import React from "react";
import {
  SiSwift,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiGooglemaps,
  SiFastapi,
  SiLangchain,
  SiPython,
  SiFastlane,
  SiGithubactions,
  SiXcode,
  SiAndroidstudio,
  SiNodedotjs,
  SiMongodb,
  SiReact,
  SiGit,
} from "react-icons/si";
import { skillGroups } from "../data/profile";
import SectionTitle from "./SectionTitle";

const icons = [
  { Icon: SiSwift, title: "Swift", color: "text-orange-500" },
  { Icon: SiXcode, title: "Xcode", color: "text-blue-400" },
  { Icon: SiFlutter, title: "Flutter", color: "text-sky-400" },
  { Icon: SiDart, title: "Dart", color: "text-cyan-400" },
  { Icon: SiAndroidstudio, title: "Android Studio", color: "text-green-500" },
  { Icon: SiFirebase, title: "Firebase", color: "text-amber-400" },
  { Icon: SiGooglemaps, title: "Google Maps", color: "text-emerald-400" },
  { Icon: SiLangchain, title: "LangChain", color: "text-teal-300" },
  { Icon: SiFastapi, title: "FastAPI", color: "text-teal-400" },
  { Icon: SiPython, title: "Python", color: "text-yellow-300" },
  { Icon: SiFastlane, title: "Fastlane", color: "text-blue-300" },
  { Icon: SiGithubactions, title: "GitHub Actions", color: "text-blue-400" },
  { Icon: SiNodedotjs, title: "Node.js", color: "text-green-500" },
  { Icon: SiMongodb, title: "MongoDB", color: "text-green-400" },
  { Icon: SiReact, title: "React", color: "text-sky-400" },
  { Icon: SiGit, title: "Git", color: "text-orange-600" },
];

const Skills = () => {
  return (
    <div name="skills" className="bg-gradient-to-b from-black to-gray-800 w-full">
      <div className="max-w-screen-lg mx-auto px-4 py-24 w-full text-white">
        <SectionTitle title="Skills" subtitle="The tools I use to build and ship mobile apps" />

        <div className="mt-10 grid grid-cols-4 sm:grid-cols-8 gap-4 text-center">
          {icons.map(({ Icon, title, color }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-2 rounded-lg py-3 shadow-md shadow-gray-900 hover:scale-105 duration-300"
              title={title}
            >
              <Icon className={color} size={36} aria-hidden />
              <span className="text-xs text-gray-300">{title}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(({ title, items }) => (
            <div key={title} className="rounded-lg border border-gray-700 bg-gray-900/70 p-5">
              <h3 className="font-bold text-cyan-400">{title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li key={item} className="rounded bg-gray-800 px-2 py-1 text-sm text-gray-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
