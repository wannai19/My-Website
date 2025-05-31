// เปิด/ปิด เมนูเมื่อคลิกปุ่มเบอร์เกอร์
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
