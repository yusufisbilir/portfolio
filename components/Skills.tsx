export default function Skills() {
    const skills = {
      "Frontend": ["React.js", "Next.js", "TypeScript", "Tailwind", "Redux", "HTML5/CSS"],
      "Backend": ["Node.js", "RESTful API's", "Supabase", "Firebase", 'PostgreSQL'],
    };
  
    return (
      <section>
        <div className="mb-4 text-sm">
          <span className="text-green-500">➜</span>{" "}
          <span className="text-blue-500">~</span>{" "}
          <span className="text-zinc-400">tree ./skills</span>
        </div>
  
        <div className="pl-4 border-l-2 border-zinc-800 ml-1 font-mono text-sm text-zinc-400">
           <div>.</div>
           {Object.entries(skills).map(([category, items], i) => (
              <div key={category} className="ml-4">
                  <div className="flex items-center gap-2">
                      <span className="text-zinc-600">├──</span>
                      <span className="text-blue-400 font-bold">{category}/</span>
                  </div>
                  <div className="ml-8 border-l border-zinc-800 pl-4 py-1 space-y-1">
                      {items.map(item => (
                          <div key={item} className="flex items-center gap-2">
                              {/* <span className="text-zinc-600">├──</span> */}
                              <span className="text-zinc-300">{item}</span>
                          </div>
                      ))}
                  </div>
              </div>
           ))}
        </div>
      </section>
    );
  }
