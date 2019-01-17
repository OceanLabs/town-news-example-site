(function() {
  const printShopModal = document.getElementById('print-shop-modal');
  const imageToUseInput = document.getElementById('image-to-use-input');
  const printShopIframe = document.getElementById('print-shop-modal__iframe');
  const buyImageButton = document.getElementById('buy-image-btn');
  const printShopCloseModalBtn =
    document.getElementById('print-shop-modal__close-modal-btn');

  function launchPrintShop() {
    const imageToUseValue = imageToUseInput.value;
    printShopIframe.src =
      `http://staging-print.kite.ly/town-news/?images=${imageToUseValue}` +
          `|1000x750#/create`;
    printShopModal.style.display = 'block';
  }

  function closePrintShop() {
    printShopModal.style.display = 'none';
  }

  buyImageButton.addEventListener('click', launchPrintShop);
  printShopCloseModalBtn.addEventListener('click', closePrintShop);
}())
