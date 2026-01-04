export default function Experience() {
  const experiences = [
    {
      role: "Freelance Developer",
      company: "Self-employed",
      period: "May 2025 - Present",
      description: [
        "Full-Stack Development: Architected and deployed production-ready applications.",
        "Backend Stack: Node.js, PostgreSQL, Supabase, NeonDB."
      ]
    },
    {
      role: "Frontend Developer",
      company: "MonSpark",
      period: "Apr 2022 - May 2025",
      description: [
        "Core member of frontend team for monitoring product (140+ countries).",
        "Stack: React Hooks, Context API, Redux, Next.js, Tailwind CSS.",
        "Focus: Performance, Responsive Design, State Management."
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "Peyk Cybersec Inc.",
      period: "Feb 2022 - Apr 2022",
      description: [
        "Developed case studies using ReactJS, Tailwind CSS, Mantine.",
        "Implemented advanced libraries (Leaflet, Grid Layout)."
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Self-employed",
      period: "Feb 2021 - Feb 2022",
      description: [
        "Delivered 36 GitHub projects.",
        "Stack: MERN (MongoDB, Express, React, Node), EJS, Sass."
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
