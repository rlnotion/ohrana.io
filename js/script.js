document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("callModal");
  const btn = document.getElementById("callBtn");
  const closeBtn = document.querySelector(".close");

  btn.onclick = () => modal.style.display = "block";
  closeBtn.onclick = () => modal.style.display = "none";

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("viewerModal");
  const modalContent = document.getElementById("modalContent");
  const closeBtn = document.querySelector(".modal .close");

  document.querySelectorAll(".clickable").forEach(item => {
    item.addEventListener("click", () => {
      const type = item.getAttribute("data-type");
      const src = item.getAttribute("data-src");
      modalContent.innerHTML = "";

      if (type === "image") {
        const img = document.createElement("img");
        img.src = src;
        modalContent.appendChild(img);
      } else if (type === "pdf") {
        const iframe = document.createElement("iframe");
        iframe.src = src;
        iframe.width = "100%";
        iframe.height = "600";
        modalContent.appendChild(iframe);
      }

      modal.style.display = "block";
    });
  });

  closeBtn.onclick = () => modal.style.display = "none";
  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };
});

document.addEventListener("DOMContentLoaded", () => {
  /* ===== Бесконечный слайдер ===== */
  document.querySelectorAll(".partners-slider").forEach(slider => {
    const track = slider.querySelector(".partners-track");
    const clones = track.innerHTML; 
    track.innerHTML += clones; // удвоение контента
  });

  /* ===== Модалка услуг ===== */
  const modal = document.getElementById("serviceModal");
  if (modal) {
    const closeBtn = modal.querySelector(".close");
    const title = document.getElementById("serviceTitle");
    const desc = document.getElementById("serviceDesc");

    const servicesInfo = {
      guard: { title: "Физическая охрана объектов", desc: "Мы обеспечиваем круглосуточную охрану офисов, складов, ТЦ." },
      personal: { title: "Личная охрана", desc: "Профессиональные сотрудники обеспечат вашу личную безопасность." },
      cctv: { title: "Видеонаблюдение", desc: "Монтаж, настройка и обслуживание систем безопасности." },
      events: { title: "Охрана мероприятий", desc: "Безопасность концертов, спортивных и деловых событий." },
      alarm: { title: "Пультовая охрана", desc: "Мониторинг и оперативное реагирование групп быстрого реагирования." }
    };

    document.querySelectorAll(".service").forEach(item => {
      item.addEventListener("click", () => {
        const key = item.getAttribute("data-service");
        if (servicesInfo[key]) {
          title.textContent = servicesInfo[key].title;
          desc.textContent = servicesInfo[key].desc;
          modal.style.display = "block";
        }
      });
    });

    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
  }
});

function revealOnScroll() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

// запуск при скролле
window.addEventListener("scroll", revealOnScroll);

// запуск при загрузке страницы — всё появится само через 1.5 сек
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelectorAll(".reveal").forEach((el, index) => {
      setTimeout(() => el.classList.add("active"), index * 200); 
      // index*200 → появление по очереди
    });
  }, 1500); // задержка перед стартом (можешь увеличить/уменьшить)
});

// FAQ аккордеон
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;

      // закрыть остальные, если хочешь чтобы открывался только 1
      // document.querySelectorAll(".faq-item").forEach(el => {
      //   if (el !== item) el.classList.remove("active");
      // });

      item.classList.toggle("active");
    });
  });
});

// Галерея (открытие модалки)
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("galleryModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".gallery-item").forEach(img => {
    img.addEventListener("click", () => {
      modal.classList.add("show");
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    setTimeout(() => { modal.style.display = "none"; }, 400);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
      setTimeout(() => { modal.style.display = "none"; }, 400);
    }
  });
});


window.addEventListener('load', function() {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.style.display = 'none';
  }
});
