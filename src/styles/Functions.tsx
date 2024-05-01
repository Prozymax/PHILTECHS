const testFunc = () => {
  const listHeads = document.getElementsByClassName('listHead');
  const articles = document.getElementsByClassName('listTarget');

  for (let i = 0; i < listHeads.length; i++) {
    const listHead = listHeads[i] as HTMLElement;
    const article = articles[i] as HTMLElement;

    listHead.addEventListener('click', () => {
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
  }
};

export { testFunc };
