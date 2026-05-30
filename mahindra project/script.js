const vehicles = [
    { name: 'Scorpio-N', tag: 'SUV', img: 'scorpio.jpg', desc: 'The Scorpio-N is Mahindra\'s flagship body-on-frame SUV — bold, muscular, and loaded with tech. Available with diesel and petrol powertrains, it offers commanding performance both on and off the road.', specs: [{ l: 'Engine', v: '2.0T mStallion' }, { l: 'Power', v: '203 bhp' }, { l: '0–100 km/h', v: '8.8 sec' }] },
    { name: 'Thar Roxx', tag: 'Off-Roader', img: 'thar.webp', desc: 'The Thar Roxx evolves the iconic off-roader into a family-friendly 5-door SUV. Legendary 4x4 capability meets modern comfort — a true adventure companion for every journey.', specs: [{ l: 'Engine', v: '2.2 mHawk' }, { l: 'Power', v: '175 bhp' }, { l: '4WD', v: 'Standard' }] },
    { name: 'Commercial Vehicle', tag: 'Fleet', img: 'truck.jpg', desc: 'Mahindra\'s commercial vehicles are built for endurance. From last-mile logistics to heavy-duty freight, the range delivers reliability, payload capacity, and low total cost of ownership.', specs: [{ l: 'Payload', v: 'Up to 2T' }, { l: 'Engine', v: '2.5L CRDe' }, { l: 'Warranty', v: '2 Years' }] },
    { name: 'XUV 700', tag: 'Flagship SUV', img: 'xuv.webp', desc: 'The XUV700 redefines premiumness in the segment. With ADAS Level 2 tech, panoramic sunroof, and a buttery-smooth diesel, it is the smartest vehicle Mahindra has ever built.', specs: [{ l: 'Engine', v: '2.2L mHawk' }, { l: 'Power', v: '185 bhp' }, { l: 'ADAS', v: 'Level 2' }] },
    { name: 'Bolero', tag: 'Workhorse SUV', img: 'baliro.webp', desc: 'The Bolero is India\'s most trusted workhorse. Engineered for India\'s toughest roads, it combines unmatched durability with practical utility — a true icon across three decades.', specs: [{ l: 'Engine', v: '1.5L mHawk75' }, { l: 'Power', v: '75 bhp' }, { l: 'Seating', v: '7 Seats' }] },
];

const news = [
    { tag: 'Launch', title: 'New Bolero Range', sub: 'Bold design & modern features', img: 'balerorange.jpg', desc: 'Mahindra introduces the New Bolero Range with a bold new design language, upgraded interiors, and modern connectivity features. New top-end variants offer unprecedented value.' },
    { tag: 'Limited Edition', title: 'BE 6 Batman Edition', sub: 'Demand surges to 999 units', img: 'batmanedition.webp', desc: 'The Mahindra BE 6 Batman Edition received an overwhelming response from fans. Total available quantity was raised from 300 to 999 units owing to incredible demand.' },
    { tag: 'Vision', title: 'Global Vision 2027', sub: 'Four world-beating SUV concepts', img: 'unveils.webp', desc: 'Mahindra unveiled its Global Vision 2027, showcasing four world-beating SUV design concepts based on a modular, multi-energy architecture designed for global markets.' },
    { tag: 'Record Bookings', title: 'XEV 9e & XUV 7XO', sub: '₹20,500 Cr+ booking value', img: 'xev95.webp', desc: 'Mahindra\'s XEV 9e and XUV 7XO recorded 93,689 combined bookings, translating into a staggering booking value of over ₹20,500 crore — a new segment record.' },
    { tag: 'Launch', title: 'Bolero Camper Range', sub: 'Updated styling & comfort', img: 'bolero.webp', desc: 'Mahindra launches the refreshed Bolero Camper and Pik-Up range with updated exterior styling, added comfort features, and new convenience options for utility customers.' },
];

// Render vehicles
const vGrid = document.getElementById('vehicleGrid');
vehicles.forEach((v, i) => {
    const d = document.createElement('div');
    d.className = 'vehicle-card reveal';
    d.style.transitionDelay = `${i * 0.07}s`;
    d.innerHTML = `<img src="${v.img}" alt="${v.name}" loading="lazy">
    <div class="vehicle-overlay">
      <h3>${v.name}</h3>
      <p>${v.tag}</p>
      <div class="card-cta"><i class="fa-solid fa-arrow-right" style="font-size:10px"></i> View Details</div>
    </div>`;
    d.addEventListener('click', () => openModal(v, 'vehicle'));
    vGrid.appendChild(d);
});

// Render news
const nGrid = document.getElementById('newsGrid');
news.forEach((n, i) => {
    const d = document.createElement('div');
    d.className = 'news-card reveal';
    d.style.transitionDelay = `${i * 0.08}s`;
    d.innerHTML = `<img src="${n.img}" alt="${n.title}" loading="lazy">
    <div class="news-body">
      <p class="news-tag">${n.tag}</p>
      <h3>${n.title}</h3>
      <p>${n.sub}</p>
      <div class="read-more"><i class="fa-solid fa-arrow-right" style="font-size:10px"></i> Read more</div>
    </div>`;
    d.addEventListener('click', () => openModal(n, 'news'));
    nGrid.appendChild(d);
});

// Modal
function openModal(data, type) {
    const bg = document.getElementById('modalBg');
    document.getElementById('modalImg').src = data.img;
    document.getElementById('modalImg').alt = data.name || data.title;
    document.getElementById('modalTag').textContent = data.tag;
    document.getElementById('modalTitle').textContent = data.name || data.title;
    document.getElementById('modalDesc').textContent = data.desc;
    const specs = document.getElementById('modalSpecs');
    specs.innerHTML = '';
    if (type === 'vehicle' && data.specs) {
        data.specs.forEach(s => {
            specs.innerHTML += `<div class="spec-item"><label>${s.l}</label><span>${s.v}</span></div>`;
        });
    } else {
        specs.style.display = 'none';
    }
    if (type === 'vehicle') specs.style.display = 'grid'; else specs.style.display = 'none';
    bg.classList.add('open');
    document.body.style.overflow = 'hidden';
}
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalBg').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
function closeModal() {
    document.getElementById('modalBg').classList.remove('open');
    document.body.style.overflow = '';
}

// Hamburger
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobileMenu');
ham.addEventListener('click', () => {
    const open = ham.classList.toggle('open');
    mob.classList.toggle('open', open);
    ham.setAttribute('aria-expanded', open);
});
mob.querySelectorAll('p').forEach(p => p.addEventListener('click', () => {
    ham.classList.remove('open'); mob.classList.remove('open');
}));

// Navbar scroll
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    nav.classList.toggle('light', window.scrollY > 80);
    document.getElementById('backTop').classList.toggle('show', window.scrollY > 400);
});
document.getElementById('backTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Nav active
document.querySelectorAll('.menu p').forEach(p => p.addEventListener('click', function () {
    document.querySelectorAll('.menu p').forEach(x => x.classList.remove('active'));
    this.classList.add('active');
}));

// Scroll reveal
const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// Counter animation
const co = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const isDecimal = el.dataset.decimal === 'true';
        let start = null;
        const dur = 1600;
        function step(ts) {
            if (!start) start = ts;
            const p = Math.min((ts - start) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            const v = ease * target;
            el.textContent = (isDecimal ? v.toFixed(1) : Math.floor(v)) + suffix;
            if (p < 1) requestAnimationFrame(step);
            else el.textContent = (isDecimal ? target.toFixed(1) : target) + suffix;
        }
        requestAnimationFrame(step);
        co.unobserve(el);
    });
}, { threshold: 0.4 });
document.querySelectorAll('.stat-num[data-target]').forEach(el => co.observe(el));