export default function Experience() {
  const experiences = [
    {
      role: "Freelance Developer",
      company: "Self-employed",
      period: "May 2025 - Present",
      description: [
        "Full-Stack Development: Architected and deployed production-ready applications for clients including Tadım, focusing on scalable BaaS integrations and robust Node.js backends.",
        "I have gained backend development experience using Node.js, PostgreSQL, Supabase, and NeonDB."
      ]
    },
    {
      role: "Frontend Developer",
      company: "MonSpark",
      period: "Apr 2022 - May 2025",
      description: [
        "Contributed to the development of a large-scale monitoring product with thousands of active users.",
        "Built and maintained responsive, high-performance user interfaces using modern frontend technologies, including React Hooks, Context API, and advanced state management solutions like Redux.",
        "Worked extensively with Next.js, Tailwind CSS, Framer Motion, and component libraries to enhance the UI/UX."
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "Peyk Cybersec Inc.",
      period: "Feb 2022 - Apr 2022",
      description: [
        "Developed case studies using ReactJS, Tailwind CSS, and Mantine.",
        "Worked with advanced ReactJS libraries such as Leaflet and Grid Layout.",
        "Gained hands-on experience with real-world projects during the internship."
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Self-employed",
      period: "Feb 2021 - Feb 2022",
      description: [
        "Developed 36 GitHub projects.",
        "Worked with technologies such as Node.js, Express, EJS, MongoDB, Mongoose, HTML, CSS, Sass, JavaScript, OOP, and ReactJS.",
        "Focused on self-learning and hands-on application, with an emphasis on building projects and expanding technical expertise through GitHub contributions."
      ]
    }
  ];

  return (
    <section>
      <div className="mb-6 text-sm">
        <span className="text-green-500">➜</span>{" "}
        <span className="text-blue-500">~</span>{" "}
        <span className="text-zinc-400">cat experience.log</span>
      </div>

      <div className="space-y-8 pl-4 border-l-2 border-zinc-800 ml-1">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Timeline dot */}
            <div className="absolute -left-[25px] top-0 w-3 h-3 rounded-full bg-zinc-800 border border-zinc-600" />
            
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
              <span className="text-green-400 font-bold">{exp.role}</span>
              <span className="text-zinc-500">@</span>
              <span className="text-yellow-400">{exp.company}</span>
              <span className="text-zinc-600 text-xs md:ml-auto font-mono">[{exp.period}]</span>
            </div>
            
            <div className="text-zinc-400 text-sm space-y-1">
              {exp.description.map((item, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-zinc-600">&gt;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
