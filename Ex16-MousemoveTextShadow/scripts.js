(function(window, document, undefined) {
  const container = document.querySelector(".container");
  const text = container.querySelector("h1");
  const walk = 6;

  function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = container;
    const { offsetX: x, offsetY: y } = e;
    if (container !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = Math.round(x / width * walk - walk / 2);
    const yWalk = Math.round(y / height * walk - walk / 2);

    text.style.textShadow = `
        ${-xWalk}px ${-yWalk}px 4px rgba(255, 0, 0, 0.65),
    ${-xWalk}px ${yWalk}px 2px rgba(0, 255, 156, 0.45),
    ${xWalk}px ${yWalk}px 4px rgba(0, 180, 255, 0.52)
`;
  }

  container.addEventListener("mousemove", shadow);
})(window, document);
