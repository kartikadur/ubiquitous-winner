(function(window, document, undefined) {
  const triggers = document.querySelectorAll("a");

  // create element that will be used to highlight links
  const highlight = document.createElement("span");
  highlight.classList.add("link__hl");
  document.body.append(highlight);

  function highlightLink(e) {
    const linkCoords = e.target.getBoundingClientRect();

    const hlData = {
      width: linkCoords.width,
      height: 2,
      marginTop: e.target.classList.contains("nav__link--active")
        ? linkCoords.height - 2
        : linkCoords.height,
      background: e.target.classList.contains("content__link")
        ? "var(--color-link)"
        : "var(--color-nav)",
      left: linkCoords.left + window.scrollX,
      top: linkCoords.top + window.scrollY,
    };

    // color code hightlight based on link type
    highlight.style.background = hlData.background;

    highlight.style.width = '0px';
    highlight.style.height = `${hlData.height}px`;

    // ensures highlight is below text
    highlight.style.marginTop = `${hlData.marginTop}px`;

    highlight.style.left = `${hlData.left}px`;
    highlight.style.top = `${hlData.top}px`;

    setTimeout(() => {
      highlight.style.width = `${hlData.width}px`;
    }, 250);
  }
  
  function unHighlightLink(e) {
    highlight.style.width = '0px';
  }

  triggers.forEach(a => a.addEventListener("mouseenter", highlightLink));
  triggers.forEach(a => a.addEventListener("mouseleave", unHighlightLink));
})(window, document);
