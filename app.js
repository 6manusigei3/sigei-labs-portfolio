const flagshipProjects = [
  {
    id:'nexorax', serial:'FLAGSHIP // 01', name:'NexoraX', type:'Secure Intelligence & Operations',
    tagline:'A security-first intelligence platform for authorized investigations, evidence, entity relationships, timelines and grounded AI-assisted analysis.',
    accent:'#64e7ff', status:'Portfolio V1 complete · 10 phases', source:'Private / local portfolio build',
    flow:['Identity','Tenant / RBAC / Clearance','Entities & Cases','Evidence','Secure Search','Graph','Investigation','Grounded AI','Alerts'],
    tech:['Next.js','FastAPI','PostgreSQL','RLS','OIDC/JWT','Python','TypeScript'],
    bullets:['Provider-neutral identity integration','Organization isolation with explicit permission and clearance controls','Evidence custody and integrity workflows','Secure universal search and relationship graph analysis','Grounded AI output with citations and human review','Deterministic exact-reference watchlists and alerts'],
    detail:'NexoraX is designed around one core rule: analytical power must never bypass authorization. Browser requests are constrained by server-derived identity, organization membership, permissions, clearance and database-level row policies before records can become part of an investigation or AI context.',
    note:'Responsible-use boundaries explicitly exclude predictive policing, guilt scoring, biometric identification, covert surveillance and automated coercive decisions. AI output is analytical assistance, not evidence.',
    repo:null
  },
  {
    id:'aegrax', serial:'FLAGSHIP // 02', name:'AegraX', type:'AI Agent Security & Governance',
    tagline:'A deny-by-default governance platform that treats AI agents as identities with permissions, policies, runtime controls, risk, approvals, audit evidence and detection.',
    accent:'#8d7cff', status:'Portfolio V1 complete · 15 phases', source:'Private / local portfolio build',
    flow:['Agent Identity','Permission','Policy','Gateway','Risk','Human Approval','Audit','Detection','Investigation'],
    tech:['Next.js','FastAPI','PostgreSQL','JWT/JWKS','HMAC audit chains','Python','TypeScript'],
    bullets:['Permanent agent registry and organization-scoped ownership','Exact permission grants with no wildcard or implicit authorization','Deterministic deny-only policy engine with fail-closed behavior','Agent runtime credentials and idempotent action gateway','Tamper-evident per-tenant HMAC-SHA256 audit chain','Human approvals, risk engine, detections, incidents and AI security analyst'],
    detail:'AegraX asks a forward-looking security question: if software agents can act, what enforces who they are, what they may do, under which context, and how the decision can later be proven? The platform answers that with an explicit enforcement and evidence chain.',
    note:'Final validation included 170 service tests with linting, type checking, production builds and migration checks passing at the completion checkpoint.',
    repo:null
  },
  {
    id:'sentrax', serial:'FLAGSHIP // 03', name:'SentraX', type:'SOC & Threat Intelligence Platform',
    tagline:'A defensive-security platform spanning alerts, incidents, IOC intelligence, investigations, reporting, hardening, detection engineering and response workflows.',
    accent:'#69f0bd', status:'Advanced portfolio build', source:'Private / local portfolio build',
    flow:['Telemetry','Alerts','Threat Intel','Incidents','Investigation','Detection','Response','Audit'],
    tech:['Next.js','FastAPI','PostgreSQL','JWT','AbuseIPDB','urlscan.io','MalwareBazaar'],
    bullets:['Organization-scoped dashboards, alerts and incidents','Threat-intelligence normalization with quota-aware caching','IOC history and analyst classification workflows','Investigation queues, evidence linking and lifecycle state','Security hardening, structured logging, health/readiness and safe errors','Detection/correlation rules and response playbook foundations'],
    detail:'SentraX marked the move from general application development into SOC engineering. It combines analyst workflows with careful security boundaries so provider data, saved indicators, tenant context and user roles remain authoritative on the backend.',
    note:'Major checkpoints reached 285 passing backend tests around investigation workflows and 373 passing backend tests during the hardening phase.',
    repo:null
  },
  {
    id:'reflex', serial:'FLAGSHIP // 04', name:'Reflex', type:'Delivery Operations Platform',
    tagline:'A role-based delivery platform that replaces fragmented phone/WhatsApp coordination with traceable assignment, controlled status transitions and secure recipient confirmation.',
    accent:'#f5c76a', status:'Completed & deployed', source:'GitHub repository available',
    flow:['Retailer','Dispatcher','Rider','Delivered','QR Confirmation','Completed'],
    tech:['Next.js 16','React 19','FastAPI','PostgreSQL','Supabase','WebSockets','Leaflet','JWT / RBAC'],
    bullets:['Retailer, Dispatcher, Rider and Admin role workflows','Backend-authoritative delivery state transitions','Single-use recipient QR confirmation tokens','Authenticated role-aware WebSockets','Server-side geocoding and Leaflet/OpenStreetMap context','Transactional email that fails open without undoing core delivery actions'],
    detail:'Reflex models delivery as one shared operational record. Retailers create work, dispatchers assign approved riders, riders advance only valid states, and recipients confirm delivery through a narrow single-purpose token instead of receiving an internal account.',
    note:'The repository documents known trade-offs openly, including some 5–8 second write latency and the absence of continuous live GPS tracking.',
    repo:'https://github.com/6manusigei3/Reflex'
  }
];

const projects = [
  {name:'Light My Candle',cat:'security',symbol:'OS',accent:'rgba(100,231,255,.17)',desc:'A client-side OSINT toolkit portal that centralizes curated resources for email, social, domain/IP, phone, image and general intelligence investigations.',tags:['OSINT','HTML/CSS/JS','Security'],repo:'https://github.com/6manusigei3/Light_my_candle'},
  {name:'Complaint Management System',cat:'software',symbol:'CM',accent:'rgba(141,124,255,.18)',desc:'A PHP/MySQL complaint platform with customer accounts, complaint tracking, admin workflows, reporting, email notifications and PDF export.',tags:['PHP','MySQL','RBAC','PDF'],repo:'https://github.com/6manusigei3/LMC-Complaint-Management-System'},
  {name:'Riziki AI',cat:'ai',symbol:'AI',accent:'rgba(105,240,189,.17)',desc:'An ethical SACCO lending assistant using specialized Scout, Guardian and Hunter agents with human review, bias awareness and transparent decision support.',tags:['Python','AI Agents','Human-in-loop'],repo:'https://github.com/6manusigei3/riziki-ai-capstone'},
  {name:'Kuzana Brain',cat:'blockchain',symbol:'KB',accent:'rgba(245,199,106,.18)',desc:'An AI document assistant that hashes uploaded PDFs, anchors SHA-256 fingerprints on Avalanche Fuji and answers questions using Gemini.',tags:['Avalanche','Solidity','Gemini','Node.js'],repo:'https://github.com/6manusigei3/kuzana-brain'},
  {name:'Northstar Inventory Sync',cat:'distributed',symbol:'NS',accent:'rgba(100,231,255,.14)',desc:'Warehouse inventory synchronization using polling, RabbitMQ, a consumer, local cache, Flask query API and dashboard.',tags:['RabbitMQ','Flask','Python'],repo:'https://github.com/6manusigei3/northstar-inventory-sync'},
  {name:'Solstice Check-In Kiosk',cat:'distributed',symbol:'SO',accent:'rgba(141,124,255,.16)',desc:'An asynchronous event badge workflow where check-ins enter Pending, workers process print jobs and validated webhooks complete the state transition.',tags:['RabbitMQ','Webhooks','Flask'],repo:'https://github.com/6manusigei3/solstice-checkin-kiosk'},
  {name:'RabbitMQ Learning Prototype',cat:'learning',symbol:'MQ',accent:'rgba(105,240,189,.13)',desc:'A focused producer → queue → consumer prototype used to learn message-broker fundamentals with JSON inventory messages.',tags:['RabbitMQ','Pika','Python'],repo:'https://github.com/6manusigei3/rabbitmq-learning-prototype'},
  {name:'ShadowNet',cat:'software',symbol:'SN',accent:'rgba(100,231,255,.13)',desc:'A simplified social network and friend-recommendation system that applies graphs, queues, stacks, heaps and sorting algorithms.',tags:['Graphs','DSA','Python'],repo:'https://github.com/6manusigei3/ShadowNet'},
  {name:'DSA Social Network',cat:'learning',symbol:'DS',accent:'rgba(141,124,255,.14)',desc:'A data-structures project exploring social graph relationships and algorithmic problem solving.',tags:['Data Structures','Algorithms'],repo:'https://github.com/6manusigei3/DSA-SOCIAL-NETWORK-GROUP-03'},
  {name:'Student Management System',cat:'software',symbol:'SM',accent:'rgba(245,199,106,.13)',desc:'A PHP/MySQL student records system focused on registration, CRUD operations and relational database integration.',tags:['PHP','MySQL','CRUD'],repo:'https://github.com/6manusigei3/school_system'},
  {name:'Moringa GenAI Go Toolkit',cat:'ai',symbol:'GO',accent:'rgba(105,240,189,.13)',desc:'A learning repository exploring generative-AI workflows and tooling in the Moringa learning track.',tags:['GenAI','Go','Learning'],repo:'https://github.com/6manusigei3/moringa-genai-go-toolkit'}
];

const repoArchive = [
  ['6manusigei3','https://github.com/6manusigei3/6manusigei3'],['Code-squared-Northstar-mvp','https://github.com/6manusigei3/Code-squared-Northstar-mvp-'],['DSA-1','https://github.com/6manusigei3/DSA-1'],['Data-Structure-Classification','https://github.com/6manusigei3/Data-Structure-Classification'],['Data-Structures-and-Algorithms-assignment','https://github.com/6manusigei3/Data-Structures-and-Algorithms-assignment'],['Form-validation-system','https://github.com/6manusigei3/Form-validation-system'],['Grade-validator','https://github.com/6manusigei3/Grade-validator'],['Gallery','https://github.com/6manusigei3/Gallery'],['HER','https://github.com/6manusigei3/HER'],['About-pocoloco','https://github.com/6manusigei3/About-pocoloco'],['Light_my_candle-2.0','https://github.com/6manusigei3/Light_my_candle-2.0'],['light_my_candle-3.0','https://github.com/6manusigei3/light_my_candle-3.0'],['Light My Candle — Password Checker','https://github.com/6manusigei3/Light_My_Candle-Password-Checker'],['Light My Candle — Speedtester','https://github.com/6manusigei3/Light_my_candle--Speedtester'],['Physics for Computing — Group 2','https://github.com/6manusigei3/Physics-for-computing-Group-2'],['Simple Calculator','https://github.com/6manusigei3/Simple-calculator'],['Adult/Minor Checker','https://github.com/6manusigei3/Adult-minor-checker'],['Even/Odd Checker','https://github.com/6manusigei3/even-odd-number-checker'],['Circumference & Area Calculator','https://github.com/6manusigei3/circumference-and-area-calculator'],['Reverse String','https://github.com/6manusigei3/Reverse-string'],['Timestamps','https://github.com/6manusigei3/Timestamps'],['Log-in Page','https://github.com/6manusigei3/log-in-page'],['Savannah Tracker Report','https://github.com/6manusigei3/savannah-tracker-report'],['Optimum','https://github.com/6manusigei3/Optimum']
];

const flagshipGrid=document.getElementById('flagshipGrid');
flagshipGrid.innerHTML=flagshipProjects.map((p,i)=>`<article class="flagship-card reveal" data-project="${p.id}" style="--accent:${p.accent}" data-delay="${i*60}">
  <div class="card-glow" style="background:${p.accent}"></div><span class="serial">${p.serial}</span><h3>${p.name}</h3><p class="tagline">${p.tagline}</p><span class="project-type">${p.type.toUpperCase()}</span>
  <div class="mini-arch">${p.flow.slice(0,5).map((x,j)=>`${j?'<i>→</i>':''}<span>${x}</span>`).join('')}</div>
  <div class="card-foot"><span><b>${p.status}</b><br/>${p.source}</span><strong>↗</strong></div></article>`).join('');

function renderProjects(filter='all'){
  const grid=document.getElementById('projectGrid');
  const visible=projects.filter(p=>filter==='all'||p.cat===filter);
  grid.innerHTML=visible.map((p,i)=>`<article class="project-card reveal in" style="--card-accent:${p.accent}" data-delay="${i*35}"><a class="pc-link" href="${p.repo}" target="_blank" rel="noreferrer" aria-label="Open ${p.name} repository"></a><div class="pc-top"><span>${p.cat.toUpperCase()}</span><div class="pc-symbol">${p.symbol}</div></div><h3>${p.name}</h3><p>${p.desc}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></article>`).join('');
}
renderProjects();

document.getElementById('filterRow').addEventListener('click',e=>{if(!e.target.matches('.filter'))return;document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));e.target.classList.add('active');renderProjects(e.target.dataset.filter)});

document.getElementById('repoCloud').innerHTML=repoArchive.map(([n,u])=>`<a href="${u}" target="_blank" rel="noreferrer">${n} ↗</a>`).join('');

const modal=document.getElementById('projectModal'); const modalContent=document.getElementById('modalContent');
function openProject(id){
  const p=flagshipProjects.find(x=>x.id===id);if(!p)return;
  modal.style.setProperty('--modal-glow',`${p.accent}22`);
  modalContent.innerHTML=`<div class="modal-hero"><span class="kicker">${p.serial} // CASE STUDY</span><h2>${p.name}</h2><p>${p.tagline}</p><div class="modal-status"><span>${p.type}</span><span>${p.status}</span><span>${p.source}</span></div></div>
  <div class="modal-body"><section class="modal-section"><h3>What it is</h3><p>${p.detail}</p></section><section class="modal-section"><h3>How it works</h3><div class="arch-flow">${p.flow.map((x,i)=>`${i?'<i>→</i>':''}<span>${x}</span>`).join('')}</div></section><section class="modal-section"><h3>Core capabilities</h3><ul class="modal-list">${p.bullets.map(x=>`<li>${x}</li>`).join('')}</ul></section><section class="modal-section"><h3>Technology</h3><div class="modal-tech">${p.tech.map(x=>`<span>${x}</span>`).join('')}</div></section><section class="modal-section"><h3>Engineering note</h3><p>${p.note}</p>${p.repo?`<a class="modal-link" href="${p.repo}" target="_blank" rel="noreferrer">View repository ↗</a>`:''}</section></div>`;
  modal.showModal(); document.body.style.overflow='hidden';
}
flagshipGrid.addEventListener('click',e=>{const card=e.target.closest('.flagship-card');if(card)openProject(card.dataset.project)});
document.getElementById('modalClose').addEventListener('click',()=>modal.close()); modal.addEventListener('close',()=>document.body.style.overflow=''); modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});

const obs=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting){const delay=+x.target.dataset.delay||0;setTimeout(()=>x.target.classList.add('in'),delay);obs.unobserve(x.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

const glow=document.getElementById('mouseGlow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const menuBtn=document.getElementById('menuBtn'),navLinks=document.getElementById('navLinks');menuBtn.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open))});navLinks.addEventListener('click',()=>navLinks.classList.remove('open'));
