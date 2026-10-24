const weeks = [
  { id: "week-1", title: "Foundations" },
  { id: "week-2", title: "APIs & credibility" },
  { id: "week-3", title: "Week three" },
  { id: "week-4", title: "Week four" },
  { id: "week-5", title: "Week five" },
  { id: "week-6", title: "Week six" },
];

const content = document.querySelector("#content");
const menu = document.querySelector(".menu");
const rail = document.querySelector(".rail");

marked.setOptions({ gfm: true, breaks: false });

function currentWeek() {
  const requested = location.hash.slice(1);
  return weeks.findIndex((week) => week.id === requested) >= 0
    ? weeks.findIndex((week) => week.id === requested)
    : 0;
}

function normalizeObsidian(markdown) {
  return markdown.replace(/!\[\[([^\]]+)\]\][\u200B]?/g, (_, filename) => {
    const cleanName = filename.split("|")[0].trim();
    return `![Lecture slide](assets/${encodeURIComponent(cleanName)})`;
  });
}

async function render() {
  const index = currentWeek();
  const week = weeks[index];
  if (location.hash !== `#${week.id}`) history.replaceState(null, "", `#${week.id}`);

  content.innerHTML = '<p class="loading">Opening the field notes…</p>';
  document.querySelector("#week-kicker").textContent = `WEEK / ${String(index + 1).padStart(2, "0")}`;
  document.querySelector("#week-title").textContent = week.title;
  document.querySelector("#chapter-mark").textContent = String(index + 1).padStart(2, "0");
  document.querySelector("#progress-label").textContent = `Week ${String(index + 1).padStart(2, "0")} of 06`;
  document.querySelector(".progress i").style.width = `${((index + 1) / weeks.length) * 100}%`;
  document.title = `${week.title} — Privacy & Security`;

  document.querySelectorAll(".rail a").forEach((link) => {
    link.classList.toggle("active", link.hash === `#${week.id}`);
  });

  const previous = document.querySelector("#previous");
  const next = document.querySelector("#next");
  previous.href = index ? `#${weeks[index - 1].id}` : "#";
  next.href = index < weeks.length - 1 ? `#${weeks[index + 1].id}` : "#";
  previous.classList.toggle("disabled", index === 0);
  next.classList.toggle("disabled", index === weeks.length - 1);

  try {
    const response = await fetch(`${week.id}.md`);
    if (!response.ok) throw new Error(`Could not load ${week.id}.md`);
    const markdown = normalizeObsidian(await response.text());
    content.innerHTML = DOMPurify.sanitize(marked.parse(markdown));
  } catch (error) {
    content.innerHTML = `<p class="error">${error.message}. Try refreshing the page.</p>`;
  }

  rail.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "instant" });
}

menu.addEventListener("click", () => {
  const open = rail.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});
window.addEventListener("hashchange", render);
render();
