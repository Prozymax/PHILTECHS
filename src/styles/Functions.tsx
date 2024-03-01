const testFunc = () => {
 const listHeads = document.getElementsByClassName('listHead');
 const articles = document.getElementsByClassName('listTarget');

 for (let i = 0; i < listHeads.length; i++) {
   const listHead = listHeads[i] as HTMLElement;
   const article = articles[i] as HTMLElement;

   listHead.addEventListener('click', () => {
     if (article.style.height === "0px" || !article.style.height) {
       article.style.cssText = "height: fit-content; overflow: visible; padding-block:20px;"
     } else {
       article.style.cssText = "height: 0; overflow: hidden; padding-block:0px;";
     }
   });
 }
};

export { testFunc };
