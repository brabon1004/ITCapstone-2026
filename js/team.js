// Renders window.TEAM (js/team-data.js) into the #team-list using #member-template.
(function () {
  const list = document.getElementById("team-list");
  const template = document.getElementById("member-template");
  const team = Array.isArray(window.TEAM) ? window.TEAM : [];

  if (team.length === 0) {
    list.insertAdjacentHTML("afterend", '<p class="note">Team profiles could not be loaded. Check js/team-data.js for a typo.</p>');
    return;
  }

  // Fills a fact row, or removes it when there is nothing to show.
  function setFact(card, field, value) {
    const row = card.querySelector(`[data-field="${field}"]`);
    if (value === null || value === undefined || value === "") {
      row.remove();
      return;
    }
    row.querySelector("dd").textContent = value;
  }

  function setLink(card, kind, href) {
    const link = card.querySelector(`[data-link="${kind}"]`);
    if (!href) {
      link.remove();
      return;
    }
    link.href = href;
    link.setAttribute("aria-label", `${link.textContent}: ${card.querySelector(".member__name").textContent}`);
  }

  function internshipText(seeking) {
    if (seeking === true) return "Looking for an internship";
    if (seeking === false) return "Not looking right now";
    return null;
  }

  for (const member of team) {
    const card = template.content.firstElementChild.cloneNode(true);

    const photo = card.querySelector(".member__photo");
    photo.src = member.photo;
    photo.alt = `Photo of ${member.name}`;
    card.querySelector(".member__name").textContent = member.name;
    card.querySelector(".member__role").textContent = member.role;

    const study = [member.major, member.concentration].filter(Boolean).join(", ");
    setFact(card, "study", study);
    setFact(card, "graduation", member.graduation);
    setFact(card, "internship", internshipText(member.seekingInternship));
    setFact(card, "dreamJob", member.dreamJob);
    setFact(card, "experience", member.experience);

    const projects = card.querySelector('[data-field="projects"]');
    if (Array.isArray(member.projects) && member.projects.length > 0) {
      const ul = projects.querySelector("ul");
      for (const project of member.projects) {
        const li = document.createElement("li");
        li.textContent = project;
        ul.append(li);
      }
    } else {
      projects.remove();
    }

    setLink(card, "email", member.email ? `mailto:${member.email}` : null);
    setLink(card, "linkedin", member.linkedin);
    setLink(card, "github", member.github);

    list.append(card);
  }
})();
