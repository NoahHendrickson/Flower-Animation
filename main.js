window.onload = () => {
  const [container] = document.getElementsByClassName("petals");
  const [element] = document.getElementsByClassName("offset");

  for (let i = 1; i < 32; i++) {
    const clone = element.cloneNode(true);

    const layer = Math.floor(i / 8) + 1;
    const offset = layer % 2 ? 22.5 : 0;
    const number = i % 8;

    const transforms = [
      `rotateZ(${45 * number + offset}deg)`,
      `translateY(${-40 * layer}px)`,
    ];

    clone.style.zIndex = -i + 1;
    clone.style.transform = transforms.join(" ");
    clone.firstElementChild.style.animationDelay = `${number * 300}ms`;

    container.appendChild(clone);
  }
};
