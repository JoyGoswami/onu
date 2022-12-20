const counters = document.querySelectorAll(".counter");
const counterContainerEl = document.querySelector(".counter-container");
const speed = counterContainerEl.getAttribute("data-speed");

// intersectionobserver
const counterSection = document.querySelector(".counter-section");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counters.forEach((counter) => {
          const updateCounter = () => {
            const target = +counter.getAttribute("data-target");

            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(updateCounter, 1);
            } else {
              counter.innerText = target;
            }
          };
          updateCounter();
        });
      } else {
        return;
      }
    });
  },
  {
    threshold: 1,
  }
);

observer.observe(counterSection);
