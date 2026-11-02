
document.addEventListener("DOMContentLoaded", function () {

    // ELEMENT WEBSITE
    const opening = document.getElementById("opening");
    const mainContent = document.getElementById("mainContent");
    const startBtn = document.getElementById("startBtn");

    // MUSIK
    const music = document.getElementById("birthdayMusic");
    const musicBtn = document.getElementById("musicBtn");

    // GALERI
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.getElementById("closeLightbox");

    // SURAT
    const letterBtn = document.getElementById("letterBtn");
    const letterContent = document.getElementById("letterContent");

    // LILIN
    const flame = document.getElementById("flame");
    const candleBtn = document.getElementById("candleBtn");
    const wishBtn = document.getElementById("wishBtn");
    const cakeMessage = document.getElementById("cakeMessage");

    // KEJUTAN
    const finalBtn = document.getElementById("finalBtn");
    const finalMessage = document.getElementById("finalMessage");

    // CONFETTI
    const confettiContainer = document.getElementById("confettiContainer");

    // PEMBUKA WEBSITE
    startBtn.addEventListener("click", function () {
        opening.classList.add("hidden");
        mainContent.classList.remove("hidden");

        createConfetti();
        window.scrollTo(0, 0);
    });

    // PUTAR DAN MATIKAN MUSIK
    musicBtn.addEventListener("click", async function () {

        if (music.paused) {
            try {
                await music.play();
                musicBtn.textContent = "⏸ Matikan Musik";
            } catch (error) {
                musicBtn.textContent = "⚠️ Coba Lagi";
                console.error("Musik gagal diputar:", error);
            }
        } else {
            music.pause();
            musicBtn.textContent = "🎵 Putar Musik";
        }

    });

    // GALERI FOTO
    galleryItems.forEach(function (item) {

        item.addEventListener("click", function () {
            const image = item.getAttribute("data-image");

            lightboxImage.src = image;
            lightbox.classList.remove("hidden");
        });

    });

    // TUTUP FOTO
    closeLightbox.addEventListener("click", function () {
        lightbox.classList.add("hidden");
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.classList.add("hidden");
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            lightbox.classList.add("hidden");
        }
    });

    // BUKA SURAT
    letterBtn.addEventListener("click", function () {

        letterContent.classList.toggle("hidden");

        if (letterContent.classList.contains("hidden")) {
            letterBtn.textContent = "Buka Surat";
        } else {
            letterBtn.textContent = "Tutup Surat";
        }

    });

    // TIUP LILIN
    candleBtn.addEventListener("click", function () {

        flame.classList.toggle("hidden");

        if (flame.classList.contains("hidden")) {
            candleBtn.textContent = "Nyalakan Lilin 🔥";
            cakeMessage.textContent = "Lilin sudah ditiup! 🎉";
            createConfetti();
        } else {
            candleBtn.textContent = "Tiup Lilin 🕯️";
            cakeMessage.textContent = "Lilin sudah menyala kembali!";
        }

    });

    // BUAT HARAPAN
    wishBtn.addEventListener("click", function () {

        flame.classList.add("hidden");
        candleBtn.textContent = "Nyalakan Lilin 🔥";

        cakeMessage.textContent =
            "Semoga semua harapan baikmu menjadi kenyataan! 💗";

        createConfetti();

    });

    // KEJUTAN TERAKHIR
    finalBtn.addEventListener("click", function () {

        finalMessage.classList.toggle("hidden");

        if (finalMessage.classList.contains("hidden")) {
            finalBtn.textContent = "Buka Kejutan ♡";
        } else {
            finalBtn.textContent = "Tutup Kejutan";
            createConfetti();
        }

    });

    // KEMBALI KE ATAS
    document.getElementById("backTopBtn").addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // EFEK CONFETTI
    function createConfetti() {

        const colors = ["🌸", "💗", "✨", "🎀", "⭐", "🌷"];

        for (let i = 0; i < 35; i++) {

            const confetti = document.createElement("span");

            confetti.className = "confetti";
            confetti.textContent =
                colors[Math.floor(Math.random() * colors.length)];

            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.animationDuration =
                (2 + Math.random() * 3) + "s";

            confetti.style.fontSize =
                (12 + Math.random() * 18) + "px";

            confettiContainer.appendChild(confetti);

            setTimeout(function () {
                confetti.remove();
            }, 5000);

        }

    }

});
