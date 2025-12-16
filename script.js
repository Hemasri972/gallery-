const images = [

  /* 🌿 Nature */
  { id: 1, title: "Mountain View", category: "Nature", imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900&h=600&fit=crop" },
  { id: 2, title: "Forest Path", category: "Nature", imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&h=600&fit=crop" },
  { id: 3, title: "Green Valley", category: "Nature", imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&h=600&fit=crop" },
  { id: 4, title: "Snow Peaks", category: "Nature", imageUrl: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?w=900&h=600&fit=crop" },
  { id: 5, title: "Sunset Lake", category: "Nature", imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&h=600&fit=crop" },
  { id: 7, title: "Green Hills", category: "Nature", imageUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900&h=600&fit=crop" },
  { id: 8, title: "Foggy Forest", category: "Nature", imageUrl: "https://images.unsplash.com/photo-1511497584788-876760111969?w=900&h=600&fit=crop" },
  { id: 9, title: "Ocean Waves", category: "Nature", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&h=600&fit=crop" },
  { id: 10, title: "Nature Walk", category: "Nature", imageUrl: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=900&h=600&fit=crop" },

  /* ✈️ Travel */
  { id: 11, title: "City Travel", category: "Travel", imageUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=900&h=600&fit=crop" },
  { id: 12, title: "Old Street", category: "Travel", imageUrl: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=900&h=600&fit=crop" },
  { id: 14, title: "Historic City", category: "Travel", imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=900&h=600&fit=crop" },
  { id: 15, title: "Evening Travel", category: "Travel", imageUrl: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=900&h=600&fit=crop" },
  { id: 16, title: "Travel Vibes", category: "Travel", imageUrl: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=900&h=600&fit=crop" },
  { id: 17, title: "Beach Walk", category: "Travel", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&h=600&fit=crop" },
  { id: 19, title: "Calm Journey", category: "Travel", imageUrl: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900&h=600&fit=crop" },

  /* 🍔 Food */
  { id: 21, title: "Street Food", category: "Food", imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&h=600&fit=crop" },
  { id: 22, title: "Burger Meal", category: "Food", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&h=600&fit=crop" },
  { id: 23, title: "Fresh Salad", category: "Food", imageUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=900&h=600&fit=crop" },
  { id: 25, title: "Coffee Cup", category: "Food", imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&h=600&fit=crop" },
  { id: 26, title: "Food Plate", category: "Food", imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=900&h=600&fit=crop" },
  { id: 27, title: "Breakfast Time", category: "Food", imageUrl: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=900&h=600&fit=crop" },
  { id: 29, title: "Sweet Treat", category: "Food", imageUrl: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=900&h=600&fit=crop" },
  { id: 30, title: "Cafe Vibes", category: "Food", imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&h=600&fit=crop" },

  /* 🧑 People */
  { id: 31, title: "Portrait Smile", category: "People", imageUrl: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=900&h=600&fit=crop" },
  { id: 32, title: "Happy Child", category: "People", imageUrl: "https://images.unsplash.com/photo-1504151932400-72d4384f04b3?w=900&h=600&fit=crop" },
  { id: 33, title: "Street Life", category: "People", imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&h=600&fit=crop" },
  { id: 34, title: "Calm Face", category: "People", imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&h=600&fit=crop" },
  { id: 35, title: "Thinking Person", category: "People", imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&h=600&fit=crop" },
  { id: 36, title: "People Talking", category: "People", imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=600&fit=crop" },
  { id: 38, title: "Daily Life", category: "People", imageUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=900&h=600&fit=crop" },
  { id: 39, title: "Young Smile", category: "People", imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=600&fit=crop" },
  { id: 40, title: "Natural Expression", category: "People", imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&h=600&fit=crop" },

  /* 🏛️ Architecture */
  { id: 43, title: "Urban Design", category: "Architecture", imageUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&h=600&fit=crop" },
  { id: 46, title: "Architecture Lines", category: "Architecture", imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=900&h=600&fit=crop" },
  { id: 47, title: "Historic Walls", category: "Architecture", imageUrl: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=900&h=600&fit=crop" },
  { id: 48, title: "Urban Patterns", category: "Architecture", imageUrl: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=900&h=600&fit=crop" },

];

const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const buttons = document.querySelectorAll(".categories button");
const empty = document.getElementById("empty");
const themeToggle = document.getElementById("themeToggle");

let activeCategory = "All";

// Render gallery images
function renderGallery() {
  gallery.innerHTML = "";

  const filtered = images.filter(img =>
    (activeCategory === "All" || img.category === activeCategory) &&
    img.title.toLowerCase().includes(searchInput.value.toLowerCase())
  );

  empty.style.display = filtered.length ? "none" : "block";

  filtered.forEach(img => {
    gallery.innerHTML += `
      <div class="gallery-item">
        <img src="${img.imageUrl}" alt="${img.title}">
        <div class="overlay">
          <h3>${img.title}</h3>
          <p>${img.category}</p>
        </div>
      </div>
    `;
  });
}

// Category filter
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.category;
    renderGallery();
  });
});

// Search filter
searchInput.addEventListener("input", renderGallery);

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Change icon
  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});

// Initial render
renderGallery();
































