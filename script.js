/* =================================================================
   EDIT THIS LIST to show your own projects.
   Each project becomes one entry in the log, newest first.

   Fields:
   - name:    project title
   - hash:    a short label shown like a git commit hash (any string)
   - date:    whatever you want shown next to it, e.g. "2026"
   - desc:    one or two sentence description
   - type:    optional short label, e.g. "Work" or "Personal" — shown as a badge
   - tags:    array of short strings (languages/tools)
   - github:  link to the repo (leave "" if there isn't a public repo)
   - demo:    link to a live version (leave "" if there isn't one)

   Note: at least one of github/demo should be filled in, or the card
   won't be clickable. If github is empty, the card links to demo instead.
================================================================= */
const PROJECTS = [
  {
    name: "Heritage",
    type: "Personal",
    hash: "a1b2c3d",
    date: "2024",
    desc: "My Software Engineering Degree Final Project. Focus on selling handcraft product and record Folklore story of Cambodia.",
    tags: ["React", "Supabase", "Next.js"],
    github: "https://github.com/SachakPitou/Heritage-V1",
    demo: "https://heritage-v1.vercel.app/",
  },
  {
    name: "Customer Information System",
    type: "Work",
    hash: "e4f5a6b",
    date: "2025",
    desc: "Customer Information System is a software that helps businesses manage customer data and equipment data.",
    tags: ["React", "Supabase", "Next.js"],
    github: "https://github.com/SachakPitou/customer-information",
    demo: "",
  },
  {
    name: "MAT Telecom Website",
    type: "Work",
    hash: "9c0d1e2",
    date: "2025",
    desc: "A Business Website for MAT Telecom, a telecommunications company in Cambodia.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "",
    demo: "https://mat.com.kh/",
  },
  {
    name: "Room Rental System",
    type: "Work",
    hash: "3f4a5b6",
    date: "2026",
    desc: "System built to manage room rental, including booking, payment, and customer management.",
    tags: ["PHP with Laravel", "MYSQL", "Blade"],
    github: "https://github.com/SachakPitou/room-rental-v1",
    demo: ""
  },
  {
    name: "Stock Management System",
    type: "Work",
    hash: "7d8e9f0",
    date: "2026",
    desc: "System built to manage stock inventory, including tracking, ordering, and reporting.",
    tags: ["PHP with Laravel", "MYSQL", "Blade"],
    github: "https://github.com/SachakPitou/stockms",
    demo: ""
  },
  {
    name: "Github Infrastructure Generator",
    type: "Personal",
    hash: "7d8e9f1",
    date: "2026",
    desc: "System built to auto-generate a github repository with infrastructure.",
    tags: ["Python", "HTML"],
    github: "https://github.com/SachakPitou/github-infrastructure-generator",
    demo: ""
  },
];

function renderProjects(projects) {
  const list = document.getElementById("log-list");
  if (!list) return;

  if (!projects.length) {
    list.innerHTML = `<p style="color: var(--muted); font-family: var(--mono); font-size: 14px;">
      No projects yet — add some in script.js.
    </p>`;
    return;
  }

  list.innerHTML = projects.map(p => {
    return `
    <div class="entry">
      <div class="entry__card">
        <div class="entry__meta">
          <span class="entry__hash">#${escapeHtml(p.hash)}</span>
          <span class="entry__date">${escapeHtml(p.date)}</span>
          ${p.type ? `<span class="entry__type">${escapeHtml(p.type)}</span>` : ""}
        </div>
        <h3 class="entry__name">${escapeHtml(p.name)}</h3>
        <p class="entry__desc">${escapeHtml(p.desc)}</p>
        <div class="entry__tags">
          ${p.tags.map(t => `<span class="entry__tag">${escapeHtml(t)}</span>`).join("")}
        </div>
        <div class="entry__links">
          ${p.github ? `<a class="entry__link code" href="${escapeAttr(p.github)}" target="_blank" rel="noopener">View source</a>` : ""}
          ${p.demo ? `<a class="entry__link demo" href="${escapeAttr(p.demo)}" target="_blank" rel="noopener">Live demo</a>` : ""}
          ${(!p.github && !p.demo) ? `<span class="entry__link entry__link--none">No public link yet</span>` : ""}
        </div>
      </div>
    </div>
  `;
  }).join("");
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}
function escapeAttr(str) {
  return (str ?? "").replace(/"/g, "&quot;");
}

renderProjects(PROJECTS);