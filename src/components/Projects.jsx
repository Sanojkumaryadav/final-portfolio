import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects, earlierProjects } from "../data/profile";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <div name="projects" className="bg-gradient-to-b from-gray-800 to-black w-full text-white">
      <div className="max-w-screen-lg px-4 py-24 mx-auto">
        <SectionTitle title="Projects" subtitle="Production apps and products I've built" />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, tag, description, stack, links }) => (
            <article
              key={title}
              className="flex flex-col rounded-lg border border-gray-700 bg-gray-900/70 p-5 shadow-md shadow-gray-900 hover:border-cyan-500 hover:-translate-y-1 duration-300"
            >
              <span className="w-fit rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-0.5 text-xs font-semibold">
                {tag}
              </span>
              <h3 className="mt-3 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-gray-300 text-sm flex-1">{description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {stack.map((s) => (
                  <span key={s} className="rounded bg-gray-800 px-2 py-0.5 text-xs text-gray-300">
                    {s}
                  </span>
                ))}
              </div>
              {links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-cyan-400 hover:underline"
                    >
                      {l.label} <FiExternalLink />
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <h3 className="mt-16 text-xl font-bold">Earlier web projects</h3>
        <p className="text-gray-400 text-sm mt-1">Built during full-stack training at Masai School.</p>
        <ul className="mt-4 grid sm:grid-cols-2 gap-3">
          {earlierProjects.map((p) => (
            <li
              key={p.title}
              className="flex items-center justify-between rounded-md border border-gray-700 px-4 py-3"
            >
              <span>{p.title}</span>
              <span className="flex gap-4 text-sm">
                <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-cyan-400 hover:underline">
                  Live <FiExternalLink />
                </a>
                <a href={p.code} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-gray-300 hover:text-white">
                  Code <FiGithub />
                </a>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
