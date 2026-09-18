const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){const delay=Number(entry.target.dataset.delay||0);setTimeout(()=>entry.target.classList.add('in'),delay);revealObserver.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

const mouseGlow=document.getElementById('mouseGlow');if(mouseGlow){window.addEventListener('pointermove',event=>{mouseGlow.style.left=event.clientX+'px';mouseGlow.style.top=event.clientY+'px'});}

const menuButton=document.getElementById('menuBtn');const navigationLinks=document.getElementById('navLinks');if(menuButton&&navigationLinks){menuButton.addEventListener('click',()=>{const isOpen=navigationLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(isOpen));});navigationLinks.addEventListener('click',()=>navigationLinks.classList.remove('open'));}
