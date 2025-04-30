document.addEventListener('DOMContentLoaded', () => {
  // Show all toggle sections by default
  document.querySelectorAll('.toggle-content').forEach(content => {
    content.classList.add('visible');
  });

  // Add toggle functionality to headers
  document.querySelectorAll('.toggle-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isVisible = content.classList.toggle('visible');

      // Toggle arrow
      header.innerHTML = header.textContent.replace(isVisible ? '⮟' : '⮝', isVisible ? '⮝' : '⮟');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const dropdownMenu = document.getElementById('dropdownMenu');

  menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
  });

  // Optional: Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.add('hidden');
    }
  });
});


  