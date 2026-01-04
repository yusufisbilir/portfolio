import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="mb-4 text-sm">
        <span className="text-green-500">➜</span>{" "}
        <span className="text-blue-500">~</span>{" "}
        <span className="text-zinc-400">whoami</span>
      </div>
      
      <div className="pl-4 border-l-2 border-zinc-800 ml-1">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 text-white">
          Yusuf İsbilir
        </h1>
        <h2 className="text-xl text-zinc-400 mb-6">
          &gt; Web Developer
        </h2>
        
        <p className="text-zinc-400 mb-6 leading-relaxed">
          I’m a Web Developer with over four years of experience, including one year as a freelancer and three
years in a cybersecurity startup, MonSpark. As part of the MonSpark frontend team, I contributed to a web
monitoring solution used in 140+ countries. I specialize in building secure, user-friendly interfaces and have
strong expertise in JavaScript, React.js, and Next.js.
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-zinc-500 font-medium">
            <div className="flex items-center gap-2">
                <span>📧</span>
                <Link href="mailto:yusufisbilir.business@gmail.com" className="hover:text-amber-400 text-zinc-400 transition-colors">
                    yusufisbilir.business@gmail.com
                </Link>
            </div>
            <div className="flex items-center gap-2">
                <span>🔗</span>
                <Link href="https://linkedin.com/in/yusufisbilir" target="_blank" className="hover:text-blue-400 text-zinc-400 transition-colors">
                    linkedin.com/in/yusufisbilir
                </Link>
            </div>
            <div className="flex items-center gap-2">
                <span>🐙</span>
                <Link href="https://github.com/yusufisbilir" target="_blank" className="hover:text-white text-zinc-400 transition-colors">
                    github.com/yusufisbilir
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
}
