const projects = [
  {
    title: "AI SEO Content Optimizer",
    desc: "AI-powered platform that helps creators write content that ranks on Google.",
    tech: "Next.js • React • Tailwind • APIs",
  },
  {
    title: "SaaS Landing Page",
    desc: "High-converting landing page for a SaaS product.",
    tech: "React • Tailwind",
  },
  {
    title: "SEO Analyzer Tool",
    desc: "Tool that analyzes on-page SEO and gives improvement suggestions.",
    tech: "JavaScript • SEO",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center md:text-4xl mb-14">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="p-4 transition border shadow-xl t-4 sm:p-6 md:p-8 backdrop-blur-xl bg-white/10 border-white/20 rounded-xl sm:rounded-2xl hover:shadow-2xl"
            >
              <h3 className="mb-2 text-lg font-bold text-black sm:text-xl md:text-2xl sm:mb-3">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:mt-4 sm:text-base">
                {p.desc}
              </p>
              <span className="block pt-4 mt-3 text-xs text-blue-500 sm:mt-4 sm:text-sm">
                {p.tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// const projects = [
//   {
//     title: "AI SEO Content Optimizer",
//     description:
//       "An AI-powered web app that helps creators optimize content for search engines using SEO best practices.",
//     tech: "Next.js • React • Tailwind CSS",
//   },
//   {
//     title: "SaaS Landing Page",
//     description:
//       "A modern, responsive landing page designed to convert users for a SaaS product.",
//     tech: "React • Tailwind CSS",
//   },
//   {
//     title: "SEO Analyzer Tool",
//     description:
//       "A tool that analyzes on-page SEO factors and provides improvement suggestions.",
//     tech: "JavaScript • SEO",
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="px-6 py-24 bg-gray-50">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="mb-12 text-3xl font-bold text-center">
//           Projects
//         </h2>

//         <div className="grid gap-8 md:grid-cols-3">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="p-6 transition border rounded-xl hover:shadow-lg"
//             >
//               <h3 className="mb-3 text-xl font-semibold">
//                 {project.title}
//               </h3>
//               <p className="mb-4 text-gray-600">
//                 {project.description}
//               </p>
//               <p className="text-sm text-gray-500">
//                 {project.tech}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
