
const listHeads = document.getElementsByClassName('listHead');
const articles = document.getElementsByClassName('listTarget');

for (let i = 0; i < listHeads.length; i++) {
  const listHead = listHeads[i];
  const article = articles[i];

  listHead.addEventListener('click', function() {
    // Close any open articles
    const openArticles = document.querySelectorAll('.listTarget[style*="height: fit-content"]');
    openArticles.forEach(function(openArticle) {
      openArticle.style.height = '0';
      openArticle.style.overflow = 'hidden';
      openArticle.style.paddingBlock = '0px';
    });

    const isOpen = article.style.height === 'fit-content';

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



 window.onload = function() {
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
};
