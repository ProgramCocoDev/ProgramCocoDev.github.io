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
  function downloadCV() {
      // Crear un enlace temporal
      const link = document.createElement('a');
      link.href = './cv/cv-english.pdf'; // Cambia la ruta al archivo que deseas descargar
      link.target = '_blank';
      link.download = 'cv-carlos-soria.pdf'; // Cambia el nombre del archivo descargado

      // Simular un clic en el enlace
      link.click();
  }

  function showContentCPP(index){
    const container = document.getElementById('cpp-content');
    container.innerHTML = '';
    switch(index){
      case 0:
        container.innerHTML = `<div class="container-text">
        <p>TEXTO POR DEFECTO 1</p>
      </div>`;
        break;
      case 1:
        container.innerHTML = `      <div class="container-text">
        <p>TEXTO POR DEFECTO 2</p>
      </div>`;
        break;
      case 2:
        container.innerHTML = `     <div class="container-text">
        <p>TEXTO POR DEFECTO 3</p>
      </div>`;
        break;
      case 3:
        container.innerHTML = `<h3>Proyecto 4</h3>
        <p>Este es el proyecto 4 de C++</p>`;
        break;
      case 4:
        container.innerHTML = `<h3>Proyecto 5</h3>
        <p>Este es el proyecto 5 de C++</p>`;
        break;
    }
  }