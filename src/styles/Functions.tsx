const testFunc = () => {
  const listHeads = document.getElementsByClassName('listHead');
  const articles = document.getElementsByClassName('listTarget');
  let openArticle: HTMLElement | null = null;

  for (let i = 0; i < listHeads.length; i++) {
    const listHead = listHeads[i] as HTMLElement;
    const article = articles[i] as HTMLElement;

    listHead.addEventListener('click', () => {
      if (openArticle !== article) {
        // Close the currently open article
        if (openArticle) {
          openArticle.style.cssText = "height: 0; overflow: hidden; padding-block:0px; transition: 1s; animation: ease-in";
        }
        // Open the clicked article
        article.style.cssText = "height: fit-content; overflow: visible; padding-block: 20px; transition: 1s; animation: ease-in";
        openArticle = article;
      } else {
        // Close the clicked article if it's already open
        article.style.cssText = "height: 0; overflow: hidden; padding-block: 0px; transition: 1s; animation: ease-in";
        openArticle = null;
      }
    });
  }
};

export { testFunc };
