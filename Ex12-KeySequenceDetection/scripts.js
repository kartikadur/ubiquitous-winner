(function(window, document, undefined) {
  const keySeq = document.querySelector(".key-sequence");
  const chkSeq = document.querySelector(".chk-sequence");
  const match = document.querySelector(".match");

  let keyEntered = [];

  window.addEventListener("keyup", e => {
    if (e.key.match(/^[a-zA-Z0-9 !@#\$%\^\&*\)\(+=._-]$/i))
      keyEntered.push(e.key);
    if (keyEntered.length > chkSeq.textContent.length) {
      keyEntered.shift();
    }
    match.textContent =
      keyEntered.join("").includes(chkSeq.textContent)
        ? "Match found!"
        : "No match found";
    keySeq.textContent = keyEntered.join("");
  });
})(window, document);
