// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Modal Logic for Gallery
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("expandedImg");

function openModal(imgSrc) {
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modalImg.src = imgSrc;
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
}

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Close modal when clicking outside the image
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape" && modal.style.display === "flex") {
        closeModal();
    }
});

// Member Modal Logic
const memberModal = document.getElementById("memberModal");
const memberImg = document.getElementById("memberImg");
const memberName = document.getElementById("memberName");
const memberNis = document.getElementById("memberNis");
const memberTempatLahir = document.getElementById("memberTempatLahir");
const memberTanggalLahir = document.getElementById("memberTanggalLahir");
const memberAlamat = document.getElementById("memberAlamat");
const memberKarakteristik = document.getElementById("memberKarakteristik");

function openMemberModal(imgSrc, name, nis, tempatLahir, tanggalLahir, alamat, karakteristik) {
    memberModal.style.display = "flex";
    memberModal.style.justifyContent = "center";
    memberModal.style.alignItems = "center";
    memberImg.src = imgSrc;
    memberName.textContent = name;
    memberNis.textContent = nis;
    memberTempatLahir.textContent = tempatLahir || "-";
    memberTanggalLahir.textContent = tanggalLahir || "-";
    memberAlamat.textContent = alamat || "-";
    memberKarakteristik.textContent = karakteristik || "Siswa yang rajin, disiplin, dan memiliki semangat belajar yang tinggi.";
    document.body.style.overflow = "hidden";
}

function closeMemberModal() {
    memberModal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Close member modal when clicking outside the content
memberModal.addEventListener('click', function(e) {
    if (e.target === memberModal) {
        closeMemberModal();
    }
});

// Close member modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape" && memberModal.style.display === "flex") {
        closeMemberModal();
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        nav.style.padding = '15px 50px'; // slight shrink
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        nav.style.padding = '20px 50px';
    }
});

// Add subtle entrance animations for cards
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Gallery Filter Logic
function filterGallery(category, buttonElement) {
    // Update active button
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    if (buttonElement) {
        buttonElement.classList.add('active');
    }

    // Show/Hide images based on category
    document.querySelectorAll('.gallery-item').forEach(item => {
        if (item.classList.contains(category)) {
            item.style.display = 'block';
            // Trigger animation
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 50);
        } else {
            item.style.display = 'none';
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
        }
    });
}

// Initial filter for the default active tab (Ketiga)
document.addEventListener('DOMContentLoaded', () => {
    filterGallery('ketiga', document.querySelector('.tab-btn.active'));
    // Attach click listeners to gallery items so modal opens the corresponding thumbnail
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function (e) {
            const img = item.querySelector('img');
            if (img && img.src) {
                openModal(img.src);
            }
        });
    });

    // Attach click listeners to anggota cards
    document.querySelectorAll('.anggota-card').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            const img = card.querySelector('img') ? card.querySelector('img').src : '';
            const name = card.querySelector('h3') ? card.querySelector('h3').textContent : 'Nama tidak diketahui';
            const nis = card.querySelector('p') ? card.querySelector('p').textContent : 'NIS tidak diketahui';
            
            const tempatLahir = card.getAttribute('data-tempat-lahir');
            const tanggalLahir = card.getAttribute('data-tanggal-lahir');
            const alamat = card.getAttribute('data-alamat');
            const karakteristik = card.getAttribute('data-karakteristik');
            
            openMemberModal(img, name, nis, tempatLahir, tanggalLahir, alamat, karakteristik);
        });
    });
});
