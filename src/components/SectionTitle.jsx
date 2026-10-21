import React from "react";

/** Section heading in the site's original style: bold title with a grey underline. */
const SectionTitle = ({ title, subtitle }) => (
  <div>
    <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">{title}</h2>
    {subtitle && <p className="pt-6 text-gray-400">{subtitle}</p>}
  </div>
);

export default SectionTitle;
