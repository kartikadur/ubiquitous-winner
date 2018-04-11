(function(window, document, undefined) {
  let lastChecked = null;

  const inputItems = document.querySelectorAll(".item__checkbox");

  function handleCheck(e) {
    let inBetween = false;

    if(!lastChecked) {
      lastChecked = e.target;
      e.target.checked = true;
      return;
    }


    if (e.shiftKey && e.target.checked) {
      inputItems.forEach(item => {
        if (item === e.target || item === lastChecked) {
          inBetween = !inBetween;
        }
        
        if (inBetween) item.checked = true;
      });
    }

    // keeps track of last checkbox checked
    if (e.target.checked) {
      lastChecked = e.target;
    } else {
      lastChecked = null;
    }
  }

  inputItems.forEach((item, i) => {
    item.addEventListener("click", handleCheck);
  });
})(window, document);
