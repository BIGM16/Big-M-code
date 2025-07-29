// Mobile sidebar toggle
const sidebar = document.getElementById("sidebar");
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");

openSidebar.addEventListener("click", () => {
  sidebar.classList.add("open");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("open");
});

// Filter functionality
const courseFilter = document.getElementById("courseFilter");
const formatFilter = document.getElementById("formatFilter");
const searchInput = document.getElementById("searchInput");
const studentsGrid = document.getElementById("studentsGrid");
const studentCards = document.querySelectorAll(".student-card");
const studentCount = document.getElementById("studentCount");

function filterStudents() {
  const courseValue = courseFilter.value;
  const formatValue = formatFilter.value;
  const searchValue = searchInput.value.toLowerCase();

  let visibleCount = 0;

  studentCards.forEach((card) => {
    const courses = card.dataset.courses.split(",");
    const format = card.dataset.format;
    const studentName = card.querySelector("h3").textContent.toLowerCase();

    let showCard = true;

    // Filter by course
    if (courseValue !== "all" && !courses.includes(courseValue)) {
      showCard = false;
    }

    // Filter by format
    if (formatValue !== "all" && format !== formatValue) {
      showCard = false;
    }

    // Filter by search
    if (searchValue && !studentName.includes(searchValue)) {
      showCard = false;
    }

    if (showCard) {
      card.classList.remove("hidden");
      visibleCount++;
    } else {
      card.classList.add("hidden");
    }
  });

  // Update student count
  studentCount.innerHTML = `<span class="font-semibold">${visibleCount}</span> étudiants affichés`;
}

courseFilter.addEventListener("change", filterStudents);
formatFilter.addEventListener("change", filterStudents);
searchInput.addEventListener("input", filterStudents);

// Form submission (prevent default for demo)
const forms = document.querySelectorAll("form");
forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Formulaire soumis avec succès ! (Ceci est une démo)");
    form.reset();
  });
});
