// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Select all elements with the class 'grid'
  const grids = document.querySelectorAll('.grid');

  // Loop through each grid element
  grids.forEach(function(grid) {
    // Add event listeners for mouse enter and mouse leave events
    grid.addEventListener('mouseenter', function() {
      const target = grid.querySelector('#target');
      if (target) {
        target.style.color = 'white';
      }
    });

    grid.addEventListener('mouseleave', function() {
      const target = grid.querySelector('#target');
      if (target) {
        target.style.color = 'purple';
      }
    });
  });
});

// Select all elements with the class 'listHead' and 'listTarget'
const listHeads = document.getElementsByClassName('listHead');
const articles = document.getElementsByClassName('listTarget');

// Loop through each pair of 'listHead' and 'listTarget'
for (let i = 0; i < listHeads.length; i++) {
  const listHead = listHeads[i];
  const article = articles[i];

  // Add click event listener to each 'listHead'
  listHead.addEventListener('click', function() {
    // Close any open articles
    const openArticles = document.querySelectorAll('.listTarget[style*="height: fit-content"]');
    openArticles.forEach(function(openArticle) {
      openArticle.style.height = '0';
      openArticle.style.overflow = 'hidden';
      openArticle.style.paddingBlock = '0px';
    });

    // Check if the clicked article is already open
    const isOpen = article.style.height === 'fit-content';

    // Toggle the height of the clicked article
    if (isOpen) {
      article.style.height = '0';
      article.style.overflow = 'hidden';
      article.style.paddingBlock = '0px';
      article.style.transition = '1s';
    } else {
      article.style.height = 'fit-content';
      article.style.overflow = 'visible';
      article.style.paddingBlock = '20px';
      article.style.transition = '1s';
    }
  });
}
