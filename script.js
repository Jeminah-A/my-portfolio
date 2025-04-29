document.querySelectorAll('.toggle-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      content.classList.toggle('show');
      // Toggle arrow direction
      if (content.classList.contains('show')) {
        header.innerHTML = header.textContent.replace('⮟', '⮝');
      } else {
        header.innerHTML = header.textContent.replace('⮝', '⮟');
      }
    });
  });