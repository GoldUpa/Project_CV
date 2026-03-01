document.addEventListener("DOMContentLoaded", () => {
	document.documentElement.classList.add("js-enabled");

	const timelines = document.querySelectorAll(".js-timeline");

	const setItemState = (item, expanded) => {
		const dateNode = item.querySelector(".cv-item-date--interactive");
		const dotNode = item.querySelector(".timeline-dot");

		item.classList.toggle("is-active", expanded);

		if (dateNode) {
			dateNode.setAttribute("aria-expanded", String(expanded));
		}

		if (dotNode) {
			dotNode.setAttribute("aria-expanded", String(expanded));
		}
	};

	timelines.forEach((timeline, timelineIndex) => {
		const items = Array.from(timeline.querySelectorAll(".cv-item"));

		const toggleItem = (currentItem) => {
			const isAlreadyActive = currentItem.classList.contains("is-active");

			items.forEach((item) => {
				if (item !== currentItem) {
					setItemState(item, false);
				}
			});

			setItemState(currentItem, !isAlreadyActive);
		};

		items.forEach((item, itemIndex) => {
			const dateNode = item.querySelector(".cv-item-date");
			const descNode = item.querySelector(".cv-item-desc");

			if (!dateNode || !descNode) {
				return;
			}

			const descId = `timeline-desc-${timelineIndex}-${itemIndex}`;
			descNode.id = descId;

			dateNode.classList.add("cv-item-date--interactive");
			dateNode.setAttribute("role", "button");
			dateNode.setAttribute("tabindex", "0");
			dateNode.setAttribute("aria-controls", descId);

			const dotNode = document.createElement("button");
			dotNode.type = "button";
			dotNode.className = "timeline-dot";
			dotNode.setAttribute("aria-label", `Afficher le détail : ${dateNode.textContent.trim()}`);
			dotNode.setAttribute("aria-controls", descId);

			dotNode.addEventListener("click", () => toggleItem(item));

			dateNode.addEventListener("click", () => toggleItem(item));
			dateNode.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					toggleItem(item);
				}
			});

			item.appendChild(dotNode);
			setItemState(item, false);
		});

		if (items.length > 0) {
			setItemState(items[0], true);
		}
	});
});
/* === Gestion de la Modale Vidéo === */
function openVideo() {
  const modal = document.getElementById("videoModal");
  if (modal) {
    modal.classList.add("show");
    const video = modal.querySelector('video');
    if (video) {
        video.play().catch(e => console.warn("Autoplay blocked:", e));
    }
  }
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  if (modal) {
    modal.classList.remove("show");
    const video = modal.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0; 
    }
  }
}

// Fermer la modale si on clique en dehors du contenu
window.addEventListener('click', function(event) {
  const modal = document.getElementById("videoModal");
  if (event.target === modal) {
    closeVideo();
  }
});