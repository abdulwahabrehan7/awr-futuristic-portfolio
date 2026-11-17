import React, { useState } from 'react'
import { ArrowUpRight, ArrowRight, Menu, X, Github, Linkedin, Mail, MapPin, Phone, Download, Code2, Cpu, Headphones, Monitor, Wrench, ShieldCheck, GraduationCap, Globe2, Send, CheckCircle2, ExternalLink, BriefcaseBusiness, Sparkles } from 'lucide-react'

const projects = [
  { name:'Nex — IT Service Desk', type:'IT Support Knowledge Base', desc:'A web-based service desk reference with step-by-step fixes for Windows issues, network connectivity, Microsoft 365 administration, user access and PC hardware diagnostics.', url:'https://abdulwahabrehan7.github.io/Nex/', tags:['IT Support','Troubleshooting','Knowledge Base'], image:'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1100&q=85', featured:true },
  { name:'AutoWorth', type:'Vehicle Valuation Web App', desc:'An interactive vehicle valuation experience built around AED pricing, responsive interfaces and API-powered data workflows.', url:'https://abdulwahabrehan7.github.io/Autoworth/', tags:['React-style UI','JavaScript','REST APIs'], image:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1100&q=85' },
  { name:'Toursaza', type:'Travel Discovery Interface', desc:'A responsive travel discovery interface designed to explore destinations with searchable country data and booking-oriented flows.', url:'https://abdulwahabrehan7.github.io/Toursaza/', tags:['Travel UI','Tailwind CSS','REST APIs'], image:'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1100&q=85' },
  { name:'SleekRig PC Builder', type:'PC Configuration Tool', desc:'A PC-building experience for exploring components and assembling a custom configuration with a clean, responsive interface.', url:'https://abdulwahabrehan7.github.io/sleekrig-pc-builder/', tags:['PC Hardware','JavaScript','Responsive UI'], image:'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1100&q=85' }
]
const skills = [
  {icon:Wrench,title:'Technical Support',items:['PC hardware assembly & troubleshooting','Windows 10/11 troubleshooting','BIOS & firmware updates','Printer & peripheral troubleshooting','Basic network troubleshooting']},
  {icon:BriefcaseBusiness,title:'Office & Operations',items:['Digital data handling','Documentation & record keeping','Following procedures and guidelines','Attention to detail']},
  {icon:Code2,title:'Web Technologies',items:['HTML5 & CSS3','JavaScript','ReactJS','Tailwind CSS','REST API integration']},
  {icon:Sparkles,title:'Professional Skills',items:['Problem solving','Written & spoken communication','Teamwork & time management','Customer support','Willingness to learn']}
]
const experiences = [
 {role:'IT Associate',company:'Wipro',place:'Hyderabad, Telangana',date:'Dec 2024 — May 2026',icon:Headphones,points:['Resolved L1/L2 enterprise support tickets across Windows, VPN and corporate applications using ITSM ticketing tools while maintaining SLA compliance.','Administered user accounts, password resets, security groups and mailbox permissions across Active Directory and Microsoft 365.','Performed workstation imaging, OS deployments, software patches and remote desktop troubleshooting to reduce end-user downtime.','Created step-by-step troubleshooting guides and technical SOPs for the internal knowledge base.','Maintained incident logs and root-cause handover notes to support Level 3 escalations.']},
 {role:'PC Builder & Hardware Specialist',company:'Apex Systems & Hardware',place:'Hyderabad, Telangana',date:'Aug 2023 — Oct 2024',icon:Cpu,points:['Assembled, configured and benchmarked custom desktop PCs and high-performance workstations based on client budgets and workloads.','Performed component-level diagnostics, thermal stress testing, driver configurations and BIOS/firmware updates.','Delivered on-site and remote support for hardware faults, network issues and OS errors while recommending cost-effective upgrades.']}
]
function SectionTitle({eyebrow,title,sub}) { return <div className="mb-12 max-w-2xl"><p className="section-kicker mb-3">{eyebrow}</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>{sub&&<p className="mt-4 text-slate-400 leading-7">{sub}</p>}</div> }
function App(){
 const [menu,setMenu]=useState(false),[sent,setSent]=useState(false),[form,setForm]=useState({name:'',email:'',subject:'',message:''})
 const nav=[['About','about'],['Experience','experience'],['Skills','skills'],['Projects','projects'],['Contact','contact']]
 const update=e=>setForm({...form,[e.target.name]:e.target.value})
 const submit=e=>{e.preventDefault();const subject=encodeURIComponent(form.subject||'Portfolio enquiry');const body=encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);window.location.href=`mailto:abdulwahabrehan7@gmail.com?subject=${subject}&body=${body}`;setSent(true)}
 return <div className="overflow-hidden">
  <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#070b14]/85 backdrop-blur-xl">
   <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
    <a href="#home" className="display text-lg font-bold tracking-tight">AWR<span className="text-cyan-300">.</span><span className="ml-2 text-xs font-medium text-slate-500">PORTFOLIO</span></a>
    <nav className="hidden items-center gap-8 md:flex">{nav.map(([label,id])=><a key={id} href={`#${id}`} className="text-sm text-slate-400 transition hover:text-cyan-300">{label}</a>)}</nav>
    <a href="#contact" className="hidden rounded-full border border-cyan-300/30 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950 md:inline-flex">Let’s talk <ArrowUpRight size={16} className="ml-2"/></a>
    <button onClick={()=>setMenu(!menu)} className="text-slate-200 md:hidden" aria-label="Toggle navigation">{menu?<X/>:<Menu/>}</button>
   </div>
   {menu&&<nav className="glass grid gap-1 px-5 py-3 md:hidden">{nav.map(([label,id])=><a onClick={()=>setMenu(false)} key={id} href={`#${id}`} className="rounded-lg px-3 py-3 text-slate-300 hover:bg-white/5">{label}</a>)}</nav>}
  </header>

  <main>
   <section id="home" className="relative grid-bg flex min-h-screen items-center pt-28">
    <div className="orb pointer-events-none absolute -right-32 top-16 h-[560px] w-[560px] rounded-full"/>
    <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-20 pt-10 lg:grid-cols-[1.15fr_.85fr] lg:px-8">
     <div className="relative z-10">
      <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-semibold tracking-wide text-cyan-200"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"/> AVAILABLE FOR OPPORTUNITIES · DUBAI, UAE</div>
      <p className="section-kicker mb-4">IT Associate · Hardware Specialist · Web Enthusiast</p>
      <h1 className="display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Building reliable<br/><span className="gradient-text">tech experiences.</span></h1>
      <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">I’m <span className="font-semibold text-slate-100">Abdul Wahab Rehan</span> — a Computer Science professional with 2+ years of experience across enterprise IT support, PC hardware and responsive web applications.</p>

<div className="mt-9 flex flex-wrap gap-3">

  {/* Explore Projects */}
  <a
    href="#projects"
    className="inline-flex items-center rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
  >
    Explore my work
    <ArrowUpRight size={17} className="ml-2"/>
  </a>

  {/* Download CV */}
  <a
    href="/awr44.pdf"
    download="Abdul_Wahab_Rehan_CV.pdf"
    className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 px-6 py-3.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950"
  >
    <Download size={17}/>
    Download My CV
  </a>

  {/* Contact */}
  <a
    href="#contact"
    className="inline-flex items-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50"
  >
    Get in touch
  </a>

</div>
      <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500"><a className="inline-flex items-center gap-2 hover:text-cyan-200" href="https://github.com/abdulwahabrehan7" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a className="inline-flex items-center gap-2 hover:text-cyan-200" href="https://www.linkedin.com/in/abdul-wahab-rehan-97512423b" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><a className="inline-flex items-center gap-2 hover:text-cyan-200" href="mailto:abdulwahabrehan7@gmail.com"><Mail size={17}/> Email</a></div>
     </div>
     <div className="relative mx-auto w-full max-w-[470px]">
      <div className="absolute -inset-5 rounded-[2.5rem] border border-cyan-300/10"/>
      <div className="glass glow relative overflow-hidden rounded-[2rem] p-4">
       <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-indigo-500/15 blur-3xl"/>
       <div className="relative overflow-hidden rounded-[1.4rem]"><img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85" alt="Computer hardware circuit board" className="h-[300px] w-full object-cover opacity-90 sm:h-[350px]"/><div className="absolute inset-0 bg-gradient-to-t from-[#07101e] via-transparent to-transparent"/></div>
       <div className="relative -mt-12 px-5 pb-5"><div className="mb-2 inline-flex rounded-full border border-cyan-300/20 bg-[#07101e]/80 px-3 py-1 text-[10px] font-bold tracking-[.2em] text-cyan-200">TECH · SUPPORT · BUILD</div><h3 className="display text-2xl font-bold">Curious by nature.<br/><span className="text-slate-400">Precise by practice.</span></h3><div className="mt-5 grid grid-cols-3 gap-2">{[['2+','Years exp.'],['L1/L2','IT support'],['3+','Web projects']].map(([v,l])=><div key={l} className="rounded-xl border border-white/10 bg-white/[.03] p-3"><p className="display text-xl font-bold text-cyan-200">{v}</p><p className="mt-1 text-[10px] text-slate-500">{l}</p></div>)}</div></div>
      </div>
      <div className="glass absolute -left-8 top-16 hidden items-center gap-3 rounded-2xl px-4 py-3 shadow-xl sm:flex"><div className="rounded-xl bg-cyan-300/10 p-2 text-cyan-200"><Cpu size={20}/></div><div><p className="text-xs font-semibold">Hardware + Software</p><p className="text-[10px] text-slate-500">End-to-end mindset</p></div></div>
      <div className="glass absolute -right-5 bottom-16 hidden items-center gap-3 rounded-2xl px-4 py-3 shadow-xl sm:flex"><div className="rounded-xl bg-indigo-400/10 p-2 text-indigo-200"><Code2 size={20}/></div><div><p className="text-xs font-semibold">Web Development</p><p className="text-[10px] text-slate-500">Build · Test · Improve</p></div></div>
     </div>
    </div>
    <a href="#about" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-xs tracking-widest text-slate-600 md:block">SCROLL TO EXPLORE ↓</a>
   </section>

   <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
    <SectionTitle eyebrow="01 / About me" title="A practical, hands-on approach to technology." sub="From resolving enterprise incidents to assembling high-performance PCs and creating useful web experiences, I enjoy solving problems that make technology work better for people."/>
    <div className="grid gap-5 md:grid-cols-3">
     <div className="glass card-hover rounded-2xl p-7 md:col-span-2"><div className="mb-5 flex items-center gap-3 text-cyan-200"><Monitor/><span className="text-sm font-semibold">Professional profile</span></div><p className="leading-8 text-slate-300">Computer Science graduate with over 2 years of work experience in technical, process and hardware roles. Hands-on with PC hardware, troubleshooting, digital data handling and documentation. Detail-oriented, reliable and quick to learn, with clear communication in English and Hindi. Available immediately.</p></div>
     <div className="glass card-hover rounded-2xl p-7"><div className="mb-5 flex items-center gap-3 text-cyan-200"><MapPin/><span className="text-sm font-semibold">Quick details</span></div><div className="space-y-4 text-sm"><p><span className="block text-xs text-slate-500">Location</span>Dubai, UAE</p><p><span className="block text-xs text-slate-500">Availability</span>Immediate joiner</p><p><span className="block text-xs text-slate-500">Visa status</span>Visit Visa</p><p><span className="block text-xs text-slate-500">Nationality</span>Indian</p></div></div>
    </div>
   </section>

   <section id="experience" className="border-y border-white/5 bg-[#0a101d] py-24">
    <div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="02 / Career" title="Experience that keeps systems moving." sub="Enterprise support, user administration and hands-on hardware work — built around reliability, clear documentation and practical problem solving."/>
     <div className="relative ml-3 space-y-7 border-l border-cyan-300/20 pl-8 md:ml-6 md:pl-12">{experiences.map((job,i)=><article key={job.company} className="glass card-hover relative rounded-2xl p-6 sm:p-8"><span className="absolute -left-[2.65rem] top-8 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/30 bg-[#0a101d] text-cyan-200 md:-left-[3.15rem]"><job.icon size={17}/></span><div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start"><div><p className="section-kicker">{job.date}</p><h3 className="mt-2 text-2xl font-bold">{job.role}</h3><p className="mt-1 font-semibold text-cyan-200">{job.company}</p><p className="mt-1 text-sm text-slate-500">{job.place}</p></div><span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">{i===0?'Enterprise IT':'Hardware & Support'}</span></div><ul className="mt-6 space-y-3">{job.points.map(p=><li key={p} className="flex gap-3 text-sm leading-7 text-slate-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300"/>{p}</li>)}</ul></article>)}</div>
    </div>
   </section>

   <section id="skills" className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><SectionTitle eyebrow="03 / Capabilities" title="Tools I work with. Skills I bring." sub="A mix of technical support, hardware knowledge, web fundamentals and the professional habits that keep work organized."/>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{skills.map(s=><div key={s.title} className="glass card-hover rounded-2xl p-6"><div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200"><s.icon size={21}/></div><h3 className="text-lg font-bold">{s.title}</h3><ul className="mt-5 space-y-3">{s.items.map(x=><li key={x} className="flex gap-2 text-sm leading-6 text-slate-400"><CheckCircle2 size={15} className="mt-1 shrink-0 text-cyan-300/70"/>{x}</li>)}</ul></div>)}</div>
   </section>

   <section id="projects" className="border-y border-white/5 bg-[#0a101d] py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="04 / Selected work" title="Projects built to be useful." sub="A selection of practical web projects and technical resources. Open each live project to explore the experience."/>
    <div className="grid gap-6 md:grid-cols-2">{projects.map((p,i)=><article key={p.name} className="glass card-hover group overflow-hidden rounded-2xl"><div className="relative h-52 overflow-hidden"><img src={p.image} alt={`${p.name} project visual`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent"/><span className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#07101e]/70 px-3 py-1 text-[10px] font-semibold tracking-widest text-cyan-100">PROJECT 0{i+1}</span></div><div className="p-6 sm:p-7"><p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">{p.type}</p><div className="mt-2 flex items-start justify-between gap-3"><h3 className="text-2xl font-bold">{p.name}</h3><a href={p.url} target="_blank" rel="noreferrer" aria-label={`Open ${p.name}`} className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300 hover:text-cyan-200"><ExternalLink size={17}/></a></div><p className="mt-3 text-sm leading-7 text-slate-400">{p.desc}</p><div className="mt-5 flex flex-wrap gap-2">{p.tags.map(t=><span key={t} className="rounded-full bg-white/[.05] px-3 py-1.5 text-[11px] text-slate-400">{t}</span>)}</div><a href={p.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-cyan-100">View live project <ArrowUpRight size={16}/></a></div></article>)}</div>
   </div></section>

   <section id="education" className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><SectionTitle eyebrow="05 / Education" title="Learning is part of the work."/>
    <div className="grid gap-5 md:grid-cols-2"><div className="glass rounded-2xl p-7"><div className="flex items-center gap-3 text-cyan-200"><GraduationCap/><span className="text-sm font-semibold">Education</span></div><h3 className="mt-5 text-xl font-bold">B.E. in Computer Science Engineering</h3><p className="mt-2 text-sm text-slate-400">Osmania University</p><p className="mt-4 text-xs tracking-widest text-slate-500">2019 — 2023</p></div><div className="glass rounded-2xl p-7"><div className="flex items-center gap-3 text-cyan-200"><ShieldCheck/><span className="text-sm font-semibold">Certification & Languages</span></div><h3 className="mt-5 text-xl font-bold">Full Stack Development Certification</h3><p className="mt-2 text-sm text-slate-400">NASSCOM · 2024</p><div className="mt-5 flex flex-wrap gap-2"><span className="rounded-full bg-white/5 px-3 py-2 text-sm text-slate-300">English — Fluent</span><span className="rounded-full bg-white/5 px-3 py-2 text-sm text-slate-300">Hindi — Native</span></div></div></div>
   </section>

   <section id="contact" className="relative border-t border-white/5 bg-[#0a101d] py-24"><div className="orb pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full"/><div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8"><div><SectionTitle eyebrow="06 / Contact" title="Have an opportunity or an idea?" sub="I’m open to IT support, technical support, hardware and related opportunities across the UAE. Send me a message and let’s connect."/><div className="space-y-5"><a href="mailto:abdulwahabrehan7@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-cyan-200"><span className="rounded-xl border border-white/10 p-3 text-cyan-200"><Mail/></span><span><small className="block text-xs text-slate-500">Email</small>abdulwahabrehan7@gmail.com</span></a><a href="tel:+971501802632" className="flex items-center gap-4 text-slate-300 hover:text-cyan-200"><span className="rounded-xl border border-white/10 p-3 text-cyan-200"><Phone/></span><span><small className="block text-xs text-slate-500">Phone</small>+971 50 180 2632</span></a><div className="flex items-center gap-4 text-slate-300"><span className="rounded-xl border border-white/10 p-3 text-cyan-200"><MapPin/></span><span><small className="block text-xs text-slate-500">Based in</small>Dubai, United Arab Emirates</span></div></div></div>
    <form onSubmit={submit} className="glass rounded-3xl p-6 sm:p-9"><div className="mb-7"><p className="text-xl font-bold">Send a message</p><p className="mt-2 text-sm text-slate-500">Your email app will open with your message prepared.</p></div><div className="grid gap-5 sm:grid-cols-2"><label className="text-xs font-semibold text-slate-400">Your name<input required name="name" value={form.name} onChange={update} placeholder="Name" className="mt-2 w-full rounded-xl border border-white/10 bg-[#070b14]/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"/></label><label className="text-xs font-semibold text-slate-400">Email address<input required type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" className="mt-2 w-full rounded-xl border border-white/10 bg-[#070b14]/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"/></label></div><label className="mt-5 block text-xs font-semibold text-slate-400">Subject<input name="subject" value={form.subject} onChange={update} placeholder="How can I help?" className="mt-2 w-full rounded-xl border border-white/10 bg-[#070b14]/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"/></label><label className="mt-5 block text-xs font-semibold text-slate-400">Message<textarea required name="message" value={form.message} onChange={update} rows="5" placeholder="Write your message..." className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-[#070b14]/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"/></label><button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">Send <Send size={16}/></button>{sent&&<p className="mt-3 text-center text-xs text-emerald-300">Your email app should open with the message details.</p>}</form>
   </div></section>
  </main>
  <footer className="border-t border-white/5 px-5 py-8"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"><p className="display font-bold">AWR<span className="text-cyan-300">.</span> <span className="font-normal text-slate-500">© {new Date().getFullYear()} Abdul Wahab Rehan</span></p><p className="text-xs text-slate-600">Designed with purpose · Built with React & Tailwind CSS</p><a href="#home" className="text-xs text-cyan-200 hover:text-white">Back to top ↑</a></div></footer>
 </div>
}
export default App
