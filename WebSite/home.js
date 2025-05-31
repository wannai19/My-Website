document.addEventListener("DOMContentLoaded", function() {
    const btns = document.querySelectorAll(".btn");
    
    btns.forEach(btn => {
        btn.addEventListener("mouseover", () => {
            btn.style.transform = "scale(1.1)";
        });
        btn.addEventListener("mouseout", () => {
            btn.style.transform = "scale(1)";
        });
    });
});

// เปิด/ปิด เมนูเมื่อคลิกปุ่มเบอร์เกอร์
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
