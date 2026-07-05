"use strict";

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const data = {
  objectives: [
    ["Sustainable Farming", "Promote climate-resilient practices that protect soil, water, biodiversity, and farmer income."],
    ["Farmer Education", "Conduct awareness sessions on crop planning, inputs, schemes, and market information."],
    ["Organic Farming", "Encourage compost, vermicompost, bio fertilizers, and reduced chemical dependency."],
    ["Water Conservation", "Improve irrigation efficiency through drip systems, farm ponds, harvesting, and scheduling."],
    ["Soil Health", "Support soil testing, balanced nutrients, soil conservation, and organic matter improvement."],
    ["Digital Agriculture", "Introduce weather apps, eNAM, digital payments, advisories, and online scheme access."],
    ["Government Schemes", "Help households understand eligibility, benefits, documents, and official application channels."],
    ["Crop Productivity", "Improve yield through seed selection, spacing, pest control, and timely farm operations."],
    ["Environmental Protection", "Reduce pollution, crop residue burning, excessive chemicals, and groundwater stress."],
    ["Rural Employment", "Promote allied activities, value addition, local skills, and entrepreneurship."]
  ],
  topics: [
    "Traditional Farming", "Modern Farming", "Organic Farming", "Smart Farming", "Precision Farming", "AI in Agriculture", "Drone Technology", "IoT in Agriculture", "Vertical Farming", "Hydroponics", "Greenhouse Farming"
  ],
  soil: [
    ["Soil Testing", "Identifies pH, organic carbon, and nutrient gaps so farmers can apply the right fertilizer in the right quantity."],
    ["Nutrients", "Balanced nitrogen, phosphorus, potassium, and micronutrients improve plant growth and prevent soil exhaustion."],
    ["Organic Fertilizers", "Farmyard manure, compost, and green manure improve microbial life and long-term soil structure."],
    ["Bio Fertilizers", "Rhizobium, Azotobacter, and phosphate-solubilizing bacteria support natural nutrient availability."],
    ["Composting", "Converts crop waste and household organic matter into valuable manure for field application."],
    ["Vermicomposting", "Uses earthworms to produce nutrient-rich compost that improves soil aeration and water retention."],
    ["Soil Conservation", "Contour bunds, cover crops, mulching, and reduced tillage prevent erosion and moisture loss."]
  ],
  water: [
    ["Rainwater Harvesting", "Captures rainfall from roofs and fields for later farm or household use."],
    ["Drip Irrigation", "Delivers water near plant roots, reducing evaporation and saving water in vegetable and orchard crops."],
    ["Sprinkler Irrigation", "Provides uniform water distribution for field crops where drip systems are not suitable."],
    ["Farm Ponds", "Store runoff water for supplemental irrigation during dry spells."],
    ["Watershed Management", "Protects land and water resources through drainage treatment, bunding, plantations, and recharge."],
    ["Water Saving Practices", "Mulching, irrigation scheduling, crop selection, and leak control reduce water waste."]
  ],
  crops: [
    ["Rice", "Kharif", "120-150 days", "High", "Clayey loam", "Nov-Dec"],
    ["Cotton", "Kharif", "150-180 days", "Medium", "Black cotton soil", "Dec-Feb"],
    ["Groundnut", "Kharif/Rabi", "100-120 days", "Medium", "Sandy loam", "Oct-Nov / Mar-Apr"],
    ["Maize", "Kharif/Rabi", "90-110 days", "Medium", "Well-drained loam", "Sep-Oct / Feb-Mar"],
    ["Sugarcane", "Annual", "10-16 months", "Very High", "Deep fertile loam", "Dec-Apr"],
    ["Millets", "Kharif", "75-100 days", "Low", "Light sandy soil", "Sep-Nov"],
    ["Vegetables", "All seasons", "45-120 days", "Medium", "Fertile loam", "Crop specific"]
  ],
  schemes: [
    ["PM-KISAN", "Direct income support for eligible farmer families.", "Financial assistance in installments.", "Eligible landholding farmer families.", "https://pmkisan.gov.in/"],
    ["PM Fasal Bima Yojana", "Crop insurance against natural risks and yield loss.", "Risk cover and claim support.", "Notified farmers and crops.", "https://pmfby.gov.in/"],
    ["PM Krishi Sinchai Yojana", "Irrigation access and water-use efficiency.", "More crop per drop.", "Farmers under approved irrigation components.", "https://pmksy.gov.in/"],
    ["Soil Health Card", "Soil test-based nutrient recommendations.", "Balanced fertilizer use and cost savings.", "Farmers submitting soil samples.", "https://soilhealth.dac.gov.in/"],
    ["Kisan Credit Card", "Credit support for crop and allied needs.", "Timely institutional credit.", "Farmers, tenant farmers, and allied workers.", "https://www.myscheme.gov.in/schemes/kcc"],
    ["eNAM", "Online national agriculture market platform.", "Transparent price discovery.", "Farmers and traders linked with mandis.", "https://enam.gov.in/"],
    ["PM Kusum", "Solar pumps and renewable energy support.", "Lower irrigation energy cost.", "Eligible farmers and groups.", "https://pmkusum.mnre.gov.in/"],
    ["National Food Security Mission", "Improves production of rice, wheat, pulses, and coarse cereals.", "Seeds, demonstrations, and productivity support.", "Farmers in notified areas.", "https://www.nfsm.gov.in/"]
  ],
  progress: [
    ["Education below high school", 58],
    ["Government scheme awareness gap", 74],
    ["Organic farming interest", 52],
    ["Digital agriculture awareness", 41],
    ["High water usage concern", 63],
    ["Market price problem", 69],
    ["Need pest management training", 57],
    ["Suggestion: regular village camps", 82]
  ],
  tips: [
    "Test soil before every major crop season and follow nutrient recommendations.",
    "Use certified seeds suitable for local climate and soil conditions.",
    "Apply compost or farmyard manure to improve soil organic carbon.",
    "Avoid over-irrigation because it wastes water and can damage roots.",
    "Use mulching to conserve moisture and suppress weeds.",
    "Rotate crops to break pest cycles and maintain soil fertility.",
    "Keep field bunds strong to reduce runoff and erosion.",
    "Use pheromone traps for early pest monitoring.",
    "Prefer drip irrigation for vegetables, orchards, and water-scarce areas.",
    "Adopt line sowing for better spacing and easier weed control.",
    "Clean farm tools after use to prevent disease spread.",
    "Store seeds in dry, airtight containers away from pests.",
    "Use bio fertilizers after checking crop compatibility.",
    "Maintain records of input cost, yield, and market price.",
    "Check weather advisories before spraying pesticides.",
    "Use protective clothing while handling farm chemicals.",
    "Harvest crops at the right maturity stage for better quality.",
    "Dry grains properly before storage to avoid fungal damage.",
    "Use neem-based sprays as part of integrated pest management.",
    "Plant trees around farms to reduce wind erosion.",
    "Select short-duration crops in areas with limited water.",
    "Create a farm pond where runoff storage is possible.",
    "Use green manure crops to improve soil fertility naturally.",
    "Join farmer producer groups for better bargaining power.",
    "Use eNAM and local mandi updates to compare prices.",
    "Apply fertilizers in split doses for better crop uptake.",
    "Remove weeds during early crop growth stages.",
    "Use raised beds for vegetables in waterlogging-prone fields.",
    "Practice vermicomposting with crop residue and organic waste.",
    "Learn scheme eligibility through official portals or agriculture officers."
  ],
  stories: [
    ["S. Ramesh", "Narpala", "Groundnut", "Adopted soil testing and drip irrigation.", "Income increased by 28%."],
    ["B. Lakshmi", "Gooty", "Vegetables", "Started vermicompost and kitchen garden training.", "Income increased by 34%."],
    ["K. Prasad", "Pamidi", "Millets", "Shifted to low-water crop planning.", "Input cost reduced by 22%."],
    ["M. Anitha", "Tadipatri", "Cotton", "Used pest monitoring and scheme guidance.", "Crop loss reduced significantly."]
  ],
  faqs: [
    ["What is agriculture awareness?", "It is the process of educating farmers and villagers about improved farming, soil, water, markets, schemes, and technology."],
    ["Why is soil testing important?", "It helps farmers apply only the nutrients required by the crop, reducing cost and protecting soil health."],
    ["What is organic farming?", "Organic farming uses natural inputs and ecological practices instead of depending mainly on synthetic chemicals."],
    ["How does drip irrigation save water?", "It delivers water directly to roots, reducing evaporation, runoff, and weed growth."],
    ["What is PM-KISAN?", "PM-KISAN provides direct income support to eligible farmer families through official government channels."],
    ["What is crop insurance?", "Crop insurance protects farmers against notified risks such as drought, flood, cyclone, pest attack, and yield loss."],
    ["How can farmers improve productivity?", "They can use quality seeds, balanced nutrients, proper spacing, irrigation scheduling, and pest monitoring."],
    ["What is eNAM?", "eNAM is a digital agriculture market platform that supports transparent trading and price discovery."],
    ["What are bio fertilizers?", "Bio fertilizers are beneficial microorganisms that improve nutrient availability for crops."],
    ["What is vermicomposting?", "It is a composting method using earthworms to convert organic waste into nutrient-rich manure."],
    ["How can farmers reduce pesticide use?", "They can use integrated pest management, traps, resistant varieties, field sanitation, and biological controls."],
    ["What is precision farming?", "It uses data, sensors, GPS, and analytics to apply inputs accurately based on crop need."],
    ["Are drones useful in agriculture?", "Drones help in field mapping, crop monitoring, spraying, and early detection of stress."],
    ["What is hydroponics?", "Hydroponics grows plants without soil using nutrient-rich water under controlled conditions."],
    ["How can rainwater be stored?", "Rainwater can be stored through farm ponds, recharge pits, check dams, and rooftop harvesting systems."],
    ["What is a crop calendar?", "A crop calendar guides farmers about season, duration, water need, soil suitability, and harvest timing."],
    ["How can farmers access schemes?", "Farmers should use official portals, agriculture offices, banks, and verified village-level service centers."],
    ["Why is crop rotation useful?", "It maintains soil fertility, reduces pests and diseases, and improves long-term productivity."],
    ["What is smart farming?", "Smart farming uses digital tools, sensors, weather data, and automation to support decisions."],
    ["What is the role of CSP students?", "Students conduct surveys, awareness sessions, data analysis, and community support activities under academic guidance."]
  ],
  gallery: [
    ["Field Crop Observation", "field", "assets/gallery/agriculture-guidance.jpg", "Students observed crop spacing, soil condition, and field practices during the village agriculture awareness visit."],
    ["Community Field Work", "field", "assets/gallery/community-interaction.jpg", "The team documented cultivation methods directly in the farm area and discussed practical issues faced during field operations."],
    ["Orchard Crop Study", "field", "assets/gallery/crop-field-observation.jpg", "Students examined crop growth in an orchard setting and noted pest, irrigation, and maintenance practices followed by farmers."],
    ["Awareness Poster Session", "awareness", "assets/gallery/farmer-awareness-session.jpg", "The agriculture awareness poster was used to explain improved farming methods, soil health, and water-saving practices."],
    ["Farmer Group Meeting", "community", "assets/gallery/farmer-meeting.jpg", "Farmers and students gathered in the field to discuss crop productivity, scheme awareness, and local agriculture challenges."],
    ["Farmer Interaction", "community", "assets/gallery/field-visit-discussion.jpg", "The CSP team interacted with villagers to understand farming problems and share simple awareness messages in the local context."],
    ["Project Team Visit", "team", "assets/gallery/project-team-visit.jpg", "Team members recorded field observations and represented the Agriculture Awareness Program during the village visit."],
    ["Soil and Crop Study", "field", "assets/gallery/soil-and-crop-study.jpg", "Students observed soil preparation and crop conditions to connect survey findings with real farming practices."],
    ["Student Documentation", "team", "assets/gallery/student-field-documentation.jpg", "The student team documented field evidence, community participation, and learning outcomes for the CSP report."],
    ["Village Survey Activity", "awareness", "assets/gallery/village-survey-work.jpg", "The team conducted awareness and survey work with villagers to collect responses on farming, schemes, and rural development needs."]
  ],
  timeline: [
    ["Week 1", "Village Visit", "The team visited the selected village, met local representatives, observed farming conditions, and identified major agriculture-related needs. Students noted irrigation sources, common crops, soil conditions, market access, and farmer concerns for further study."],
    ["Week 2", "Community Survey", "A structured survey was conducted with 60+ villagers to understand occupation, education, crop choices, water usage, government scheme awareness, organic farming knowledge, and problems faced during cultivation. Responses were recorded carefully for later analysis."],
    ["Week 3", "Farmer Interaction", "Students interacted directly with farmers to learn about seed selection, fertilizer use, pest control, irrigation practices, crop loss, pricing issues, and seasonal challenges. These discussions helped connect classroom learning with real rural farming experiences."],
    ["Week 4", "Agriculture Awareness", "Awareness sessions were organized on improved crop planning, soil health, balanced fertilizer use, pest management, water-saving methods, and modern agriculture tools. Farmers were encouraged to adopt practical, low-cost improvements suitable for local conditions."],
    ["Week 5", "Government Schemes", "The team explained important farmer welfare schemes such as PM-KISAN, PM Fasal Bima Yojana, Kisan Credit Card, Soil Health Card, eNAM, PM Kusum, and irrigation support programs. Villagers were guided about eligibility, documents, benefits, and official portals."],
    ["Week 6", "Organic Farming", "Students demonstrated the importance of composting, vermicomposting, bio fertilizers, green manure, neem-based pest control, and reduced chemical dependency. The session focused on improving soil fertility, lowering input cost, and protecting the environment."],
    ["Week 7", "Survey Analysis", "Collected survey data was cleaned, categorized, and analyzed to identify awareness gaps, major farming problems, training needs, and community suggestions. Charts, progress indicators, and key findings were prepared for the project dashboard and final report."],
    ["Week 8", "Presentation", "The final week focused on preparing the CSP report, website presentation, photo gallery, survey dashboard, learning outcomes, and recommendations. The team summarized community impact and proposed follow-up awareness activities for sustainable rural development."]
  ],
  team: [
    ["EKKALURU NARAYANA SWAMY", "Roll No: 24F21A04A9", "Team Member"],
    ["POTTIPADU JAYALAKSHMI", "Roll No: 24F21A0468", "Team Member"],
    ["KURUBA MAHESWARI", "Roll No: 24F21A0490", "Team Member"],
    ["LAVANAGIRI MOHAMMAD FAROOK", "Roll No: 24F21A0498", "Team Member"],
    ["PASULOLLA PAVAN KUMAR", "Roll No: 24F21A04B6", "Team Member"],
    ["V.K SREEDHAR", "Project Guide", "Faculty Guide"],
    ["J. SIVA KUMAR, Ph.D", "Project Coordinator", "CSP Coordinator"]
  ]
};

function makeTopic(title) {
  return {
    title,
    overview: `${title} improves farming decisions by combining local knowledge with practical field methods.`,
    benefits: "Better productivity, efficient input use, improved quality, and stronger farmer income.",
    challenges: "Requires training, timely guidance, initial investment, and local adaptation.",
    applications: "Used for crop planning, resource management, pest control, yield improvement, and market readiness."
  };
}

function getInitials(name) {
  return name
    .split(/[.\s,]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part.charAt(0))
    .join("");
}

function render() {
  $("#objectivesGrid").innerHTML = data.objectives.map((item, index) => `
    <article class="objective-card reveal">
      <span class="objective-icon">${String(index + 1).padStart(2, "0")}</span>
      <h3>${item[0]}</h3>
      <p>${item[1]}</p>
    </article>
  `).join("");

  $("#awarenessGrid").innerHTML = data.topics.map(makeTopic).map(topic => `
    <article class="topic-card reveal">
      <h3>${topic.title}</h3>
      <ul>
        <li><strong>Overview:</strong> ${topic.overview}</li>
        <li><strong>Benefits:</strong> ${topic.benefits}</li>
        <li><strong>Challenges:</strong> ${topic.challenges}</li>
        <li><strong>Practical Applications:</strong> ${topic.applications}</li>
      </ul>
    </article>
  `).join("");

  $("#soilList").innerHTML = data.soil.map(renderInfoItem).join("");
  $("#waterList").innerHTML = data.water.map(renderInfoItem).join("");
  renderCropRows(data.crops);

  $("#schemesGrid").innerHTML = data.schemes.map(scheme => `
    <article class="scheme-card reveal">
      <h3>${scheme[0]}</h3>
      <p><strong>Overview:</strong> ${scheme[1]}</p>
      <p><strong>Benefits:</strong> ${scheme[2]}</p>
      <p><strong>Eligibility:</strong> ${scheme[3]}</p>
      <div class="scheme-actions">
        <a class="btn primary" href="${scheme[4]}" target="_blank" rel="noopener">Apply</a>
        <a class="btn secondary" href="${scheme[4]}" target="_blank" rel="noopener">Official Website</a>
      </div>
    </article>
  `).join("");

  $("#progressList").innerHTML = data.progress.map(([label, value]) => `
    <div class="progress-item">
      <div class="progress-label"><span>${label}</span><span>${value}%</span></div>
      <div class="progress-track"><div class="progress-fill" data-width="${value}"></div></div>
    </div>
  `).join("");

  $("#storiesGrid").innerHTML = data.stories.map(story => `
    <article class="story-card reveal">
      <h3>${story[0]}</h3>
      <p><strong>Village:</strong> ${story[1]}</p>
      <p><strong>Crop:</strong> ${story[2]}</p>
      <p><strong>Achievement:</strong> ${story[3]}</p>
      <p><strong>Income Growth:</strong> ${story[4]}</p>
    </article>
  `).join("");

  $("#faqAccordion").innerHTML = data.faqs.map((faq, index) => `
    <article class="accordion-item reveal">
      <button class="accordion-button" aria-expanded="false" aria-controls="faq-${index}">
        <span>${faq[0]}</span><span aria-hidden="true">+</span>
      </button>
      <div class="accordion-panel" id="faq-${index}">
        <div><p>${faq[1]}</p></div>
      </div>
    </article>
  `).join("");

  renderGallery("all");

  $("#timelineList").innerHTML = data.timeline.map(item => `
    <article class="timeline-item reveal">
      <span class="timeline-week">${item[0].replace("Week ", "W")}</span>
      <div class="timeline-content"><h3>${item[1]}</h3><p>${item[2]}</p></div>
    </article>
  `).join("");

  $("#teamGrid").innerHTML = data.team.map(member => `
    <article class="team-card reveal">
      <span class="team-initials" aria-hidden="true">${getInitials(member[0])}</span>
      <h3>${member[0]}</h3>
      <p>${member[1]}</p>
      <p>${member[2]}</p>
    </article>
  `).join("");
}

function renderInfoItem(item) {
  return `<article class="info-item reveal"><h3>${item[0]}</h3><p>${item[1]}</p></article>`;
}

function renderCropRows(rows) {
  $("#cropTableBody").innerHTML = rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("");
}

function renderGallery(filter) {
  const categories = ["all", ...new Set(data.gallery.map(item => item[1]))];
  $("#galleryFilters").innerHTML = categories.map(category => `
    <button class="filter-btn ${category === filter ? "active" : ""}" data-filter="${category}">${category}</button>
  `).join("");

  const items = filter === "all" ? data.gallery : data.gallery.filter(item => item[1] === filter);
  $("#galleryGrid").innerHTML = items.map(item => `
    <button class="gallery-item reveal" data-caption="${item[0]}" data-description="${item[3]}" data-src="${item[2]}" aria-label="Open ${item[0]} image">
      <img src="${item[2]}" loading="lazy" alt="${item[0]}">
      <span class="gallery-caption"><strong>${item[0]}</strong><small>${item[3]}</small></span>
    </button>
  `).join("");
  observeReveal();
  observeLazyImages();
}

function setupNavigation() {
  const navToggle = $("#navToggle");
  const navLinks = $("#navLinks");

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  $$("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupTheme() {
  const saved = localStorage.getItem("agri-theme");
  const themeToggle = $("#themeToggle");
  const updateThemeLabel = theme => {
    const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("title", label);
  };

  if (saved) document.documentElement.dataset.theme = saved;
  updateThemeLabel(saved === "dark" ? "dark" : "light");
  themeToggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("agri-theme", next);
    updateThemeLabel(next);
    drawCharts(true);
  });
}

function setupScrollFeatures() {
  const header = $("#siteHeader");
  const progress = $("#scrollProgress");
  const backToTop = $("#backToTop");

  const onScroll = () => {
    const maxScroll = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${Math.min(100, (scrollY / maxScroll) * 100)}%`;
    header.classList.toggle("scrolled", scrollY > 16);
    backToTop.classList.toggle("visible", scrollY > 600);
  };

  addEventListener("scroll", onScroll, { passive: true });
  backToTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
  onScroll();
}

let revealObserver;
function observeReveal() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      if (entry.target.classList.contains("metric") || entry.target.querySelector(".hero-stats")) {
        animateCounters(entry.target);
      }
      if (entry.target.classList.contains("chart-card")) drawCharts();
      $$(".progress-fill", entry.target).forEach(fill => fill.style.width = `${fill.dataset.width}%`);
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.14 });
  $$(".reveal").forEach(element => revealObserver.observe(element));
}

function observeLazyImages() {
  const imageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
      imageObserver.unobserve(img);
    });
  }, { rootMargin: "220px" });
  $$("img.lazy").forEach(img => imageObserver.observe(img));
}

function animateCounters(scope = document) {
  $$("[data-count]", scope).forEach(counter => {
    if (counter.dataset.done) return;
    counter.dataset.done = "true";
    const target = Number(counter.dataset.count);
    const suffix = target > 40 ? "+" : "";
    let start = 0;
    const duration = 1100;
    const began = performance.now();
    const tick = now => {
      const progress = Math.min(1, (now - began) / duration);
      start = Math.round(target * progress);
      counter.textContent = `${start}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

function setupInteractions() {
  $("#cropSearch").addEventListener("input", event => {
    const query = event.target.value.toLowerCase();
    renderCropRows(data.crops.filter(row => row.join(" ").toLowerCase().includes(query)));
  });

  $("#tipButton").addEventListener("click", () => {
    const tip = data.tips[Math.floor(Math.random() * data.tips.length)];
    $("#tipText").textContent = tip;
  });

  $("#faqAccordion").addEventListener("click", event => {
    const button = event.target.closest(".accordion-button");
    if (!button) return;
    const item = button.closest(".accordion-item");
    const isOpen = item.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
    button.querySelector("span:last-child").textContent = isOpen ? "âˆ’" : "+";
  });

  $("#galleryFilters").addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (button) renderGallery(button.dataset.filter);
  });

  $("#galleryGrid").addEventListener("click", event => {
    const item = event.target.closest(".gallery-item");
    if (!item) return;
    $("#lightboxImage").src = item.dataset.src;
    $("#lightboxImage").alt = item.dataset.caption;
    $("#lightboxCaption").textContent = `${item.dataset.caption} - ${item.dataset.description}`;
    $("#lightbox").classList.add("open");
    $("#lightboxClose").focus();
  });

  $("#lightboxClose").addEventListener("click", closeLightbox);
  $("#lightbox").addEventListener("click", event => {
    if (event.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeLightbox();
  });

  $("#contactForm").addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = $("#formStatus");
    if (!form.checkValidity()) {
      status.textContent = "Please complete all fields with valid information.";
      form.reportValidity();
      return;
    }
    status.textContent = "Thank you. Your message has been recorded for the project team.";
    form.reset();
  });
}

function closeLightbox() {
  $("#lightbox").classList.remove("open");
}

function typingAnimation() {
  const titles = ["Rural Development", "Agriculture Awareness", "Sustainable Farming"];
  const target = $("#typedTitle");
  let titleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const type = () => {
    const text = titles[titleIndex];
    target.textContent = text.slice(0, charIndex);
    if (!deleting && charIndex < text.length) charIndex += 1;
    else if (deleting && charIndex > 0) charIndex -= 1;
    else if (!deleting) deleting = true;
    else {
      deleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }
    const delay = deleting ? 42 : 82;
    setTimeout(type, charIndex === text.length ? 1300 : delay);
  };
  type();
}

function drawBarChart(canvas, labels, values, colors) {
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);
  const max = Math.max(...values);
  const barWidth = (width - 80) / values.length;
  ctx.font = "13px Poppins, sans-serif";
  values.forEach((value, index) => {
    const barHeight = (height - 90) * (value / max);
    const x = 46 + index * barWidth;
    const y = height - 44 - barHeight;
    ctx.fillStyle = colors[index % colors.length];
    ctx.fillRect(x, y, barWidth * 0.58, barHeight);
    ctx.fillStyle = getTextColor();
    ctx.fillText(`${value}%`, x, y - 8);
    ctx.save();
    ctx.translate(x + 8, height - 22);
    ctx.rotate(-0.45);
    ctx.fillText(labels[index], 0, 0);
    ctx.restore();
  });
}

function drawPieChart(canvas, labels, values, colors) {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const total = values.reduce((sum, value) => sum + value, 0);
  let start = -Math.PI / 2;
  values.forEach((value, index) => {
    const angle = (value / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(120, 125);
    ctx.arc(120, 125, 86, start, start + angle);
    ctx.fillStyle = colors[index % colors.length];
    ctx.fill();
    start += angle;
  });
  ctx.font = "13px Poppins, sans-serif";
  labels.forEach((label, index) => {
    ctx.fillStyle = colors[index % colors.length];
    ctx.fillRect(250, 58 + index * 32, 14, 14);
    ctx.fillStyle = getTextColor();
    ctx.fillText(`${label} - ${values[index]}%`, 272, 70 + index * 32);
  });
}

function getTextColor() {
  return document.documentElement.dataset.theme === "dark" ? "#F2FFF3" : "#222222";
}

let chartsDrawn = false;
function drawCharts(force = false) {
  if (chartsDrawn && !force) return;
  chartsDrawn = true;
  const colors = ["#2E7D32", "#4CAF50", "#FFC107", "#2196F3", "#8BC34A"];
  drawPieChart($("#occupationChart"), ["Farmers", "Labor", "Business", "Students"], [48, 24, 16, 12], colors);
  drawPieChart($("#cropChart"), ["Groundnut", "Rice", "Cotton", "Millets"], [30, 25, 22, 23], colors);
  drawBarChart($("#awarenessChart"), ["Schemes", "Organic", "Digital", "Water"], [36, 52, 41, 63], colors);
}

function boot() {
  render();
  setupNavigation();
  setupTheme();
  setupScrollFeatures();
  setupInteractions();
  observeReveal();
  observeLazyImages();
  typingAnimation();
  setTimeout(() => $("#loader").classList.add("hidden"), 700);
}

document.addEventListener("DOMContentLoaded", boot);

