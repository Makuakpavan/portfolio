const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git & GitHub",
  "AI & API Integrations",
  "Responsive Design",
  "Modern UI/UX",
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Skills & Tools
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-6 rounded-2xl border bg-white hover:shadow-xl hover:-translate-y-1 transition"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


// const skills = [
//   "HTML5",
//   "CSS3",
//   "JavaScript (ES6+)",
//   "React",
//   "Next.js",
//   "Tailwind CSS",
//   "Git & GitHub",
//   "SEO Basics",
// ];

// export default function Skills() {
//   return (
//     <section className="py-24 px-6">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-10">Skills</h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="border rounded-lg py-4 hover:bg-gray-100 transition"
//             >
//               {skill}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
