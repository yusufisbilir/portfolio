export default function Education() {
  const education = [
    {
      degree: "Associate Degree in Computer Programming",
      institution: "University of Yalova",
      period: "2020 - 2022",
      gpa: "3.83/4.00 (Top of Class)",
      highlights: [
        "A 5-month internship as a frontend web developer at a cybersecurity startup.",
        "Expertise in SQL databases and Object-Oriented Programming (OOP) with JavaScript."
      ]
    }
  ];

  return (
    <section>
       <div className="mb-6 text-sm">
        <span className="text-green-500">➜</span>{" "}
        <span className="text-blue-500">~</span>{" "}
        <span className="text-zinc-400">cat education.log</span>
      </div>

      <div className="space-y-8 pl-4 border-l-2 border-zinc-800 ml-1">
        {education.map((edu, index) => (
          <div key={index} className="relative">
             {/* Timeline dot */}
             <div className="absolute -left-[25px] top-0 w-3 h-3 rounded-full bg-zinc-800 border border-zinc-600" />
            
             <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
              <span className="text-blue-400 font-bold">{edu.degree}</span>
              <span className="text-zinc-500">@</span>
              <span className="text-yellow-400">{edu.institution}</span>
              <span className="text-zinc-600 text-xs md:ml-auto font-mono">[{edu.period}]</span>
            </div>

            <div className="text-zinc-400 text-sm space-y-1">
               <div className="flex gap-2">
                  <span className="text-zinc-600">&gt;</span>
                  <span>GPA: {edu.gpa}</span>
               </div>
               {edu.highlights.map((item, i) => (
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
