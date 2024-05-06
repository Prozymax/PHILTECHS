// Change color of icon on mouse enter and mouse leave
window.onload = function() {
  // Select all elements with the class 'grid'
  const grids = document.querySelectorAll('.grid');

  // Loop through each grid element
  grids.forEach(function(grid) {
    // Add event listeners for mouse enter and mouse leave events
    grid.addEventListener('mouseenter', function() {
      const target = grid.querySelector('.target');
      if (target) {
        target.style.color = 'white';
      }
    });

    grid.addEventListener('mouseleave', function() {
      const target = grid.querySelector('.target');
      if (target) {
        target.style.color = 'purple';
      }
    });
  });

  // Add click event listeners to toggle article visibility
  const listHeads = document.querySelectorAll('.listHead');
  const articles = document.querySelectorAll('.listTarget');

  listHeads.forEach(function(listHead, index) {
    listHead.addEventListener('click', function() {
      const article = articles[index];
      const isOpen = article.style.height === 'fit-content';

      if (isOpen) {
        article.style.height = '0';
        article.style.overflow = 'hidden';
        article.style.paddingBlock = '0px';
      } else {
        article.style.height = 'fit-content';
        article.style.overflow = 'visible';
        article.style.paddingBlock = '20px';
      }
    });
  });
};
