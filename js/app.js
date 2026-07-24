/* =========================================================
   Movie Discovery App - js/app.js
   Bài 2, 3: dữ liệu phim, render, lọc thể loại, tìm kiếm,
   debounce, modal chi tiết, chế độ sáng/tối
   ========================================================= */

// ---------- 1. DỮ LIỆU PHIM ----------
const movies = [
  {
    id: 1,
    title: "Cơn Bão Thép",
    year: 2023,
    genres: ["Hành động", "Phiêu lưu"],
    poster: "images/poster1.jpg",
    rating: 8.1,
    director: "Lê Minh Tuấn",
    actors: ["Trần Quốc Huy", "Ngô Bảo Châu", "Lâm Vĩ Dạ"],
    description:
      "Một biệt đội đặc nhiệm phải ngăn chặn âm mưu đánh cắp vũ khí công nghệ cao trước khi nó rơi vào tay tổ chức khủng bố quốc tế.",
  },
  {
    id: 2,
    title: "Nụ Cười Sài Gòn",
    year: 2022,
    genres: ["Hài", "Tình cảm"],
    poster: "images/poster2.jpg",
    rating: 7.4,
    director: "Trần Thu Hà",
    actors: ["Thái Hòa", "Ninh Dương Lan Ngọc", "Trấn Thành"],
    description:
      "Câu chuyện dở khóc dở cười về một chàng trai tỉnh lẻ lên Sài Gòn lập nghiệp và vô tình lọt vào giới thượng lưu.",
  },
  {
    id: 3,
    title: "Ngôi Nhà Ma Ám",
    year: 2024,
    genres: ["Kinh dị"],
    poster: "images/poster3.jpg",
    rating: 6.9,
    director: "Nguyễn Đức Anh",
    actors: ["Hoàng Yến Chibi", "Quang Tuấn", "Midu"],
    description:
      "Một gia đình chuyển đến căn biệt thự cổ và dần phát hiện những bí mật rùng rợn bị chôn giấu suốt 50 năm.",
  },
  {
    id: 4,
    title: "Vũ Trụ Song Song",
    year: 2023,
    genres: ["Khoa học viễn tưởng", "Phiêu lưu"],
    poster: "images/poster4.jpg",
    rating: 8.5,
    director: "Phạm Quốc Bảo",
    actors: ["Karik", "Chi Pu", "Kiều Minh Tuấn"],
    description:
      "Một nhà vật lý trẻ vô tình mở ra cánh cổng dẫn đến vũ trụ song song, nơi mọi quyết định của cô đều có một kết cục khác.",
  },
  {
    id: 5,
    title: "Chuyến Tàu Định Mệnh",
    year: 2021,
    genres: ["Hành động", "Kinh dị"],
    poster: "images/poster5.jpg",
    rating: 7.2,
    director: "Đỗ Văn Hùng",
    actors: ["Thuận Nguyễn", "Diễm My 9x", "Huỳnh Đông"],
    description:
      "Hành khách trên một chuyến tàu đêm phát hiện có kẻ giết người ẩn nấp trong đoàn tàu và không ai được phép xuống giữa đường.",
  },
  {
    id: 6,
    title: "Hành Trình Tí Hon",
    year: 2020,
    genres: ["Hoạt hình", "Phiêu lưu"],
    poster: "images/poster6.jpg",
    rating: 8.0,
    director: "Vũ Thị Lan",
    actors: ["Lồng tiếng: Bảo An", "Lồng tiếng: Gia Bảo"],
    description:
      "Chú kiến nhỏ bé Tí Hon cùng nhóm bạn côn trùng bắt đầu hành trình vượt khu rừng rộng lớn để tìm về tổ trước mùa đông.",
  },
  {
    id: 7,
    title: "Mối Tình Đầu",
    year: 2022,
    genres: ["Tình cảm"],
    poster: "images/poster7.jpg",
    rating: 7.0,
    director: "Hoàng Anh Thư",
    actors: ["Trương Thế Vinh", "Khả Ngân", "Isaac"],
    description:
      "Hai người bạn thân từ thuở nhỏ dần nhận ra tình cảm đặc biệt dành cho nhau sau nhiều năm xa cách.",
  },
  {
    id: 8,
    title: "Đặc Vụ Bóng Đêm",
    year: 2024,
    genres: ["Hành động", "Khoa học viễn tưởng"],
    poster: "images/poster8.jpg",
    rating: 8.3,
    director: "Ngô Minh Khoa",
    actors: ["Ngô Kiến Huy", "Diệu Nhi", "Trương Nam Thành"],
    description:
      "Một đặc vụ mất trí nhớ phải ghép lại từng mảnh ký ức để ngăn chặn siêu vũ khí AI thoát khỏi tầm kiểm soát.",
  },
  {
    id: 9,
    title: "Tiếng Cười Học Đường",
    year: 2021,
    genres: ["Hài"],
    poster: "images/poster9.jpg",
    rating: 6.7,
    director: "Bùi Thanh Trúc",
    actors: ["BB Trần", "Nam Thư", "Anh Tú"],
    description:
      "Một năm học cuối cấp đầy ắp tiếng cười với những trò nghịch ngợm không thể nào quên của nhóm bạn thân.",
  },
  {
    id: 10,
    title: "Lời Nguyền Cổ Trang",
    year: 2023,
    genres: ["Kinh dị", "Phiêu lưu"],
    poster: "images/poster10.jpg",
    rating: 7.6,
    director: "Lý Gia Huy",
    actors: ["Nhã Phương", "Trần Bảo Sơn", "Lan Phương"],
    description:
      "Một đoàn khảo cổ đánh thức lời nguyền ngàn năm khi khai quật ngôi mộ cổ giữa vùng núi hẻo lánh.",
  },
  {
    id: 11,
    title: "Giấc Mơ Robot",
    year: 2024,
    genres: ["Hoạt hình", "Khoa học viễn tưởng"],
    poster: "images/poster11.jpg",
    rating: 8.2,
    director: "Trịnh Nam Sơn",
    actors: ["Lồng tiếng: Bình Minh", "Lồng tiếng: Emma"],
    description:
      "Chú robot nhỏ được lập trình để dọn dẹp thành phố, nhưng lại mơ về việc trở thành con người thực thụ.",
  },
  {
    id: 12,
    title: "Trở Về Quá Khứ",
    year: 2022,
    genres: ["Khoa học viễn tưởng", "Tình cảm"],
    poster: "images/poster12.jpg",
    rating: 7.8,
    director: "Đặng Kim Chi",
    actors: ["Song Luân", "Jun Vũ", "Quốc Trường"],
    description:
      "Một kỹ sư trẻ chế tạo cỗ máy thời gian để quay về quá khứ, cứu lấy mối tình đầu đã lỡ mất vì một tai nạn định mệnh.",
  },
];

// ---------- 2. STATE ----------
const state = {
  selectedGenres: new Set(),
  searchTerm: "",
};

// ---------- 3. DOM REFERENCES ----------
const movieGrid = document.getElementById("movieGrid");
const genreList = document.getElementById("genreList");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const modal = document.getElementById("movieModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const themeToggle = document.getElementById("themeToggle");
const clearFiltersBtn = document.getElementById("clearFilters");

// ---------- 4. RENDER: DANH SÁCH THỂ LOẠI (tự động phát hiện) ----------
function renderGenreFilters() {
  // Gom tất cả thể loại duy nhất từ mảng phim, không hard-code
  const allGenres = [...new Set(movies.flatMap((m) => m.genres))].sort();

  genreList.innerHTML = allGenres
    .map(
      (genre) => `
      <label class="genre-item">
        <input type="checkbox" class="genre-checkbox" value="${genre}">
        <span>${genre}</span>
      </label>`
    )
    .join("");

  // Gắn sự kiện cho từng checkbox vừa tạo
  document.querySelectorAll(".genre-checkbox").forEach((cb) => {
    cb.addEventListener("change", (e) => {
      if (e.target.checked) {
        state.selectedGenres.add(e.target.value);
      } else {
        state.selectedGenres.delete(e.target.value);
      }
      renderMovies();
    });
  });
}

// ---------- 5. LỌC PHIM (kết hợp thể loại + tìm kiếm) ----------
function getFilteredMovies() {
  return movies.filter((movie) => {
    const matchesGenre =
      state.selectedGenres.size === 0 ||
      movie.genres.some((g) => state.selectedGenres.has(g));

    const matchesSearch =
      state.searchTerm.trim() === "" ||
      movie.title.toLowerCase().includes(state.searchTerm.toLowerCase());

    return matchesGenre && matchesSearch;
  });
}

// ---------- 6. RENDER: DANH SÁCH PHIM (movie cards) ----------
function renderMovies() {
  const filtered = getFilteredMovies();

  resultCount.textContent = `${filtered.length} phim`;
  emptyState.hidden = filtered.length !== 0;

  movieGrid.innerHTML = filtered
    .map(
      (movie) => `
      <article class="movie-card" data-id="${movie.id}" tabindex="0">
        <div class="poster-wrap">
          <img src="${movie.poster}" alt="Poster phim ${movie.title}" loading="lazy">
          <span class="rating-badge">★ ${movie.rating}</span>
        </div>
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <p class="movie-meta">${movie.year} · ${movie.genres.join(", ")}</p>
        </div>
      </article>`
    )
    .join("");

  // Gắn sự kiện click / Enter để mở modal chi tiết
  document.querySelectorAll(".movie-card").forEach((card) => {
    const openDetail = () => openModal(Number(card.dataset.id));
    card.addEventListener("click", openDetail);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter") openDetail();
    });
  });
}

// ---------- 7. DEBOUNCE CHO Ô TÌM KIẾM ----------
function debounce(fn, delay = 400) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn.apply(this, args), delay);
  };
}

const handleSearchInput = debounce((value) => {
  state.searchTerm = value;
  renderMovies();
}, 400);

searchInput.addEventListener("input", (e) => {
  handleSearchInput(e.target.value);
});

// ---------- 8. XÓA BỘ LỌC ----------
clearFiltersBtn.addEventListener("click", () => {
  state.selectedGenres.clear();
  state.searchTerm = "";
  searchInput.value = "";
  document
    .querySelectorAll(".genre-checkbox")
    .forEach((cb) => (cb.checked = false));
  renderMovies();
});

// ---------- 9. MODAL CHI TIẾT PHIM ----------
function openModal(id) {
  const movie = movies.find((m) => m.id === id);
  if (!movie) return;

  modalBody.innerHTML = `
    <img class="modal-poster" src="${movie.poster}" alt="Poster phim ${movie.title}">
    <div class="modal-details">
      <h2>${movie.title} <span class="modal-year">(${movie.year})</span></h2>
      <p class="modal-rating">★ ${movie.rating} / 10</p>
      <p class="modal-genres">${movie.genres
        .map((g) => `<span class="genre-tag">${g}</span>`)
        .join("")}</p>
      <p class="modal-desc">${movie.description}</p>
      <p><strong>Đạo diễn:</strong> ${movie.director}</p>
      <p><strong>Diễn viên:</strong> ${movie.actors.join(", ")}</p>
    </div>`;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal(); // click ra ngoài nội dung modal
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});

// ---------- 10. CHẾ ĐỘ SÁNG / TỐI (localStorage) ----------
function applyTheme(theme) {
  document.body.classList.toggle("dark-mode", theme === "dark");
  themeToggle.checked = theme === "dark";
  localStorage.setItem("de04-theme", theme);
}

function initTheme() {
  const saved = localStorage.getItem("de04-theme");
  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  applyTheme(saved || (prefersDark ? "dark" : "light"));
}

themeToggle.addEventListener("change", () => {
  applyTheme(themeToggle.checked ? "dark" : "light");
});

// ---------- 11. KHỞI CHẠY ỨNG DỤNG ----------
function init() {
  initTheme();
  renderGenreFilters();
  renderMovies();
}

init();
