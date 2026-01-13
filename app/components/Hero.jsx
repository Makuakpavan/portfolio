export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-screen px-6 pt-5 md:pt-24">      
      
      <div className="max-w-4xl text-center">
        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full">
          Frontend Developer • React • Next.js • Contract • Open to Jobs & Projects 
        </span>
     
        <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
          Building <span className="text-indigo-600">AI-Powered</span> &
          <br className="hidden md:block" />
          SEO-Friendly Web Experiences
        </h1>

        <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-600">
          I build fast, modern, and scalable web applications for startups,
          businesses, and individuals. From landing pages and dashboards to full
          SaaS platforms, APIs, and AI-powered tools — I’m open to building any
          type of project.
          <br />
          <br />
          <span className="font-medium text-gray-800">
            Currently open to full-time roles, contract work, and freelance
            projects.
          </span>
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-4 font-medium text-white transition bg-indigo-600 rounded-xl hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 font-medium transition border rounded-xl hover:bg-gray-100"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}


// export default function Hero() {
//   return (
//     <section className="flex items-center justify-center min-h-screen px-6 text-center">
//       <div className="max-w-3xl">
//         <h1 className="mb-6 text-4xl font-bold md:text-6xl">
//           Frontend Developer Building AI-Powered & SEO-Friendly Web Apps
//         </h1>

//         <p className="mb-8 text-lg text-gray-600">
//           I build fast, modern web applications using React and Next.js.
//           Currently building an AI SEO Content Optimizer.
//         </p>

//         <div className="flex justify-center gap-4">
//           <a
//             href="#projects"
//             className="px-6 py-3 text-white transition bg-black rounded-lg hover:opacity-80"
//           >
//             View Projects
//           </a>
//           <a
//             href="#contact"
//             className="px-6 py-3 transition border rounded-lg hover:bg-gray-100"
//           >
//             Contact Me
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
