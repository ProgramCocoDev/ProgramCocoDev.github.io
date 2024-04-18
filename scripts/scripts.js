for (let i = 0; i < 1000; i++) {
    let star = document.createElement("div");
    let classname = Math.random();
    if (classname < 0.25) star.className = "star linear";
    else if (classname < 0.5) star.className = "star ease-in";
    else if (classname < 0.75) star.className = "star ease";
    else star.className = "star ease-out";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.animationDuration = (Math.random() + 1) * 20 + "s";
    star.style.opacity = Math.random();
    document.getElementById("body-container").appendChild(star);
  }