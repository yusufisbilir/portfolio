import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      name: "System Design Lab",
      repo: "yusufisbilir/system-design-lab",
      purpose: "Provide practical blueprints and experiments for scalable system design, distributed systems, and performance.",
      tech: "TypeScript, JavaScript, CSS, Next.js/React, Vercel"
    },
    {
      name: "YKSdene",
      repo: "yusufisbilir/yksdene",
      purpose: "Comprehensive student dashboard for YKS—advanced score calculations, progress tracking, and exam analytics.",
      tech: "TypeScript, Next.js/React, HTML/CSS, serverless APIs"
    },
    {
      name: "Stay-Awake",
      repo: "yusufisbilir/stay-awake",
      purpose: "Automated heartbeat/keep‑alive engine to prevent services or applications from idling.",
      tech: "JavaScript, HTML, CSS, Node.js / serverless"
    },
    {
      name: "AI Journal — Chrome Extension",
      repo: "yusufisbilir/ai-journal-chrome-extension",
      purpose: "Capture, journalize your AI conversations every week.",
      tech: "JavaScript, HTML, CSS, Chrome Extension APIs, OpenAI"
    },
    {
     name: "Tadim Price Change Simplifier",
     repo: "yusufisbilir/tadim-price-change-simplifier",
     purpose: "Generates WhatsApp messages by simplifying heavy Excel sheets into plain text. Currently using Tadım's all distributors' price lists.",
     tech: "JavaScript"
    }
  ];

  return (
    <section>
      <div className="mb-6 text-sm">
        <span className="text-green-500">➜</span>{" "}
        <span className="text-blue-500">~</span>{" "}
        <span className="text-zinc-400">ls -la ./github-projects</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-4 border-l-2 border-zinc-800 ml-1">
        {projects.map((project, index) => (
          <div key={index} className="group relative p-4 border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors rounded-sm">
             <div className="flex justify-between items-start mb-2">
                <Link 
                  href={`https://github.com/${project.repo}`} 
                  target="_blank"
                  className="text-blue-400 font-bold hover:underline hover:text-blue-300 transition-colors"
                >
                    {project.name}
                </Link>
                <div className="text-xs text-zinc-600 font-mono">public</div>
             </div>
             
             <p className="text-zinc-400 text-sm mb-4 min-h-[40px] leading-relaxed">
                {project.purpose}
             </p>

             <div className="text-xs text-zinc-500 font-mono border-t border-zinc-800/50 pt-2">
                <span className="text-zinc-600">$ stack:</span> {project.tech}
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
