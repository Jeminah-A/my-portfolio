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

  