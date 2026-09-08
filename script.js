(() => {
"use strict";
const navToggle=document.querySelector(".nav-toggle"), mainNav=document.querySelector(".main-nav");
if(navToggle&&mainNav){navToggle.addEventListener("click",()=>{const open=mainNav.classList.toggle("open");navToggle.setAttribute("aria-expanded",open)});mainNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>mainNav.classList.remove("open")))}
const rail=document.querySelector(".progress-rail span");
function progress(){if(!rail)return;const max=document.documentElement.scrollHeight-innerHeight;rail.style.height=(max?scrollY/max*100:0)+"%"}addEventListener("scroll",progress,{passive:true});progress();

const departments=[
["Computer Science & Engineering","engineering","CSE","Computing, software development, algorithms and modern digital technologies."],
["Electronics & Communication Engineering","engineering","ECE","Electronics, communication systems, embedded technologies and connected devices."],
["Mechanical Engineering","engineering","ME","Design, manufacturing, thermal systems and engineering applications."],
["Civil Engineering","engineering","CE","Infrastructure, construction, structures and sustainable development."],
["Electrical & Electronics Engineering","engineering","EEE","Electrical systems, power, control and electronic applications."],
["Biotechnology","science","BT","Biological sciences, laboratory methods and biotechnology applications."],
["Basic Sciences","science","SCI","Mathematics, physics, chemistry and foundational scientific learning."],
["Management Studies","management","MBA","Business fundamentals, leadership, communication and organisational thinking."],
["Pharmacy","science","PH","Pharmaceutical sciences and the fundamentals of medicine-related study."]
];
const grid=document.querySelector("#departmentGrid"), search=document.querySelector("#deptSearch");let filter="all";
function renderDepartments(){if(!grid)return;const q=(search?.value||"").toLowerCase();const data=departments.filter(d=>(filter==="all"||d[1]===filter)&&d.join(" ").toLowerCase().includes(q));grid.innerHTML=data.length?data.map(d=>`<article class="department-card reveal visible"><span class="code">${d[2]} · ${d[1].toUpperCase()}</span><h3>${d[0]}</h3><p>${d[3]}</p></article>`).join(""):`<article class="department-card"><h3>No match found</h3><p>Try another department or category.</p></article>`}
if(grid){renderDepartments();search?.addEventListener("input",renderDepartments);document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");filter=b.dataset.filter;renderDepartments()}))}
const data={vsat:["VSAT pathway","Check the latest official notification for eligibility, dates, application steps and programme requirements."],jee:["JEE pathway","Students considering JEE should verify the current accepted score/rank requirements and counselling process."],eamcet:["AP EAMCET pathway","Check the current state counselling schedule, eligibility and programme-specific requirements."],other:["Other pathways","Some programmes may use different routes or criteria. Confirm the current admission notice before applying."]};
const panel=document.querySelector("#admissionPanel");
function admission(key="vsat"){if(!panel)return;const d=data[key];panel.innerHTML=`<h3>${d[0]}</h3><p>${d[1]}</p><div class="admission-steps"><div><strong>01</strong><p>Check eligibility</p></div><div><strong>02</strong><p>Review the notification</p></div><div><strong>03</strong><p>Prepare documents</p></div><div><strong>04</strong><p>Complete the required application</p></div></div>`}
if(panel){admission();document.querySelectorAll(".exam-tab").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".exam-tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");admission(b.dataset.exam)}))}
function demoForm(id,msg){const f=document.getElementById(id),m=document.getElementById(msg);if(!f||!m)return;f.addEventListener("submit",e=>{e.preventDefault();m.textContent="Thank you! This is a front-end demonstration, so the form was not sent to a server.";f.reset()})}
demoForm("enquiryForm","formMessage");demoForm("contactForm","contactMessage");

const counters=document.querySelectorAll("[data-count]");if(counters.length){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const el=e.target,t=+el.dataset.count,start=performance.now();function tick(now){const p=Math.min((now-start)/900,1),v=Math.floor((1-Math.pow(1-p,3))*t);el.textContent=v.toLocaleString()+"+";if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick);io.unobserve(el)}}),{threshold:.4});counters.forEach(c=>io.observe(c))}
const reveals=document.querySelectorAll(".reveal");if("IntersectionObserver"in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.1});reveals.forEach(x=>io.observe(x))}else reveals.forEach(x=>x.classList.add("visible"));
})();