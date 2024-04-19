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
      link.href = './utils/cv/cv-english.pdf'; // Cambia la ruta al archivo que deseas descargar
      link.target = '_blank';
      link.download = 'cv-carlos-soria.pdf'; // Cambia el nombre del archivo descargado

      // Simular un clic en el enlace
      link.click();
  }

  function showContentCPP(index){
    const container = document.getElementById('cpp-content');
    container.innerHTML = `<div class="container-text">
    <p>TRY TO CLICK ANY BUTTON!</p>
  </div>`;
    switch(index){
      case 0:
        container.innerHTML = `<div class="container-2">
        <iframe class="video" src="https://www.youtube.com/embed/uREyOtJeau0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <iframe class="video" src="https://www.youtube.com/embed/-ZxHkM_aDPM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      </div>
      <div class="container-text">
        <p>
          This is a game that has been developed using SDL, ImGUI, SQlite and other libs.
        </p>
        <p>
          The objective was to create an RPG where the player can control melee, ranged and magic units. It is turn based, so the player and the npcs will choose the actions to be performed in the next round and resolve them.
        </p>
        <p>
          The first task was to work on the base classes for development, but the main feature I worked on was the random dungeon creation algorithm, which I will explain later. In Addiction, I worked on the game cycle, combat logic, characters and where the player can move.
        </p>
        <p>
        <strong>Random Dungeon</strong>: The algorithm creates a logical grid and tries to fill it with rooms of different sizes, once it cannot create any more rooms it starts connecting them. Connecting was very simple, I selected two rooms and connected them, if I had a room A on the way it would be a new path and the path would continue to the selected room. So room A has to be connected to room B, but a room C could be between them with a connection A/C/B instead of a clear path from A/B.
        </p>
        
      </div>`;
        break;
      case 1:
        container.innerHTML = `<div class="container-2">
        <iframe class="video-2" src="https://www.youtube.com/embed/N9ebnEl0SGU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
      </div>
      <div class="container-text">
        <p>
          First approach to graphics engine programming.
        </p>
        <p>
          Programming a layer on top of OpenGL to cover the needs of the project.
          <ul>
            <li>Loading textures</li>
            <li>Lights (directional / spot / point)</li>
            <li>Fog</li>
            <li>Frustrum culling</li>
            <li>Render mesh modes</li>
            <li>The camera</li>
          </ul>
        </p>
        <p>
          I also used ImGui to control and manage the elements created and an object loader for the buildings and roads. Plus a procedural generation algorithm to make the city look different every time.
        </p>          
      </div>`;
        break;
      case 2:
        container.innerHTML = `        <div class="container-2">
        <iframe class="video-2" src="https://www.youtube.com/embed/yC0dw6pSiJ0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
      </div>
      <div class="container-text">
        <p>
          Graphics engine built using OpenGL 4.6, glm, glew, ImGui docking, multithreading and LUA to assemble the scene and manage it.
        </p>
        <p>
          It has two main threads: logic and rendering.

          A command system is used to send the appropriate tasks to each thread so that they work in parallel.
        </p>
        <p>
          <strong>ECS and Scene Graph</strong>:
Integrated with unordered maps, each entity, which is a numerical id, is referenced and assigned a signature of the components it owns, as are the systems.

Components are mapped and referenced within a statically created array with a number of components equal to the number of total entities. With the map and signature, each entity is referenced to the component and stored whether it owns it or not.
        </p>          
        <p> 
          <strong>Framebuffer</strong>: Use of framebuffers for RTT painted on a quad that renders the whole scene from the camera, plus the possibility of creating more framebuffers to be able to apply post-processing or the same shadows. 
          </p>
          <p><strong>Shadows</strong>: Implementation of 4 directional lights that render shadows on a texture. </p>
            
            <p><strong>Post-processing</strong>: Implementation of a component and system to render silhouettes to a framebuffer Implementation of a system to render the scene in wireframe mode to a framebuffer and to be able to apply an offset so that the wireframes are displaced from their geometry. 
              <ul>
                <li>Inverted. </li>
                <li>Greyscale. </li>
                <li>Kernel. </li>
                <li>Blur. </li>
                <li>Edge detection. </li>
                <li>Silhouette drawing. </li>
                <li>Draw a silhouette on another texture and add it to the original scene. </li>
                <li> Pixelate. </li>  
              </ul>
  
        </p>
      </div>`;
        break;
      case 3:
        container.innerHTML = `<div class="container-2">
        <iframe class="video" src="https://www.youtube.com/embed/rHRRIPxTkgk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <iframe class="video" src="https://www.youtube.com/embed/Iaz1yLZLqOc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      </div>
      <div class="container-text">
        <p>
          <strong>L-System Editor</strong>
        </p>
        <p>
          Lindenmayer's system is a formal grammar (a set of rules and symbols) used primarily to model the growth process of plants. It can also be used to model the morphology of a wide variety of organisms.
        </p>
        <p>
          All existing rules can be reproduced. You can also create your own rules to create your own patterns.
        </p>         
      </div>`;
        break;
      case 4:
        container.innerHTML = `<h3>Proyecto 5</h3>
        <p>Este es el proyecto 5 de C++</p>`;
        break;
    }
  }
  function showContentUNITY(index){
    const container = document.getElementById('cpp-content');
    container.innerHTML = `<div class="container-text">
    <p>TRY TO CLICK ANY BUTTON!</p>
  </div>`;
    switch(index){
      case 0:
        container.innerHTML = `<div class="container-2">
        <iframe class="video" src="https://www.youtube.com/embed/uREyOtJeau0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <iframe class="video" src="https://www.youtube.com/embed/-ZxHkM_aDPM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      </div>
      <div class="container-text">
        <p>
          This is a game that has been developed using SDL, ImGUI, SQlite and other libs.
        </p>
        <p>
          The objective was to create an RPG where the player can control melee, ranged and magic units. It is turn based, so the player and the npcs will choose the actions to be performed in the next round and resolve them.
        </p>
        <p>
          The first task was to work on the base classes for development, but the main feature I worked on was the random dungeon creation algorithm, which I will explain later. In Addiction, I worked on the game cycle, combat logic, characters and where the player can move.
        </p>
        <p>
        <strong>Random Dungeon</strong>: The algorithm creates a logical grid and tries to fill it with rooms of different sizes, once it cannot create any more rooms it starts connecting them. Connecting was very simple, I selected two rooms and connected them, if I had a room A on the way it would be a new path and the path would continue to the selected room. So room A has to be connected to room B, but a room C could be between them with a connection A/C/B instead of a clear path from A/B.
        </p>
        
      </div>`;
        break;
      case 1:
        container.innerHTML = `<div class="container-2">
        <iframe class="video-2" src="https://www.youtube.com/embed/N9ebnEl0SGU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
      </div>
      <div class="container-text">
        <p>
          First approach to graphics engine programming.
        </p>
        <p>
          Programming a layer on top of OpenGL to cover the needs of the project.
          <ul>
            <li>Loading textures</li>
            <li>Lights (directional / spot / point)</li>
            <li>Fog</li>
            <li>Frustrum culling</li>
            <li>Render mesh modes</li>
            <li>The camera</li>
          </ul>
        </p>
        <p>
          I also used ImGui to control and manage the elements created and an object loader for the buildings and roads. Plus a procedural generation algorithm to make the city look different every time.
        </p>          
      </div>`;
        break;
      case 2:
        container.innerHTML = `        <div class="container-2">
        <iframe class="video-2" src="https://www.youtube.com/embed/yC0dw6pSiJ0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
      </div>
      <div class="container-text">
        <p>
          Graphics engine built using OpenGL 4.6, glm, glew, ImGui docking, multithreading and LUA to assemble the scene and manage it.
        </p>
        <p>
          It has two main threads: logic and rendering.

          A command system is used to send the appropriate tasks to each thread so that they work in parallel.
        </p>
        <p>
          <strong>ECS and Scene Graph</strong>:
Integrated with unordered maps, each entity, which is a numerical id, is referenced and assigned a signature of the components it owns, as are the systems.

Components are mapped and referenced within a statically created array with a number of components equal to the number of total entities. With the map and signature, each entity is referenced to the component and stored whether it owns it or not.
        </p>          
        <p> 
          <strong>Framebuffer</strong>: Use of framebuffers for RTT painted on a quad that renders the whole scene from the camera, plus the possibility of creating more framebuffers to be able to apply post-processing or the same shadows. 
          </p>
          <p><strong>Shadows</strong>: Implementation of 4 directional lights that render shadows on a texture. </p>
            
            <p><strong>Post-processing</strong>: Implementation of a component and system to render silhouettes to a framebuffer Implementation of a system to render the scene in wireframe mode to a framebuffer and to be able to apply an offset so that the wireframes are displaced from their geometry. 
              <ul>
                <li>Inverted. </li>
                <li>Greyscale. </li>
                <li>Kernel. </li>
                <li>Blur. </li>
                <li>Edge detection. </li>
                <li>Silhouette drawing. </li>
                <li>Draw a silhouette on another texture and add it to the original scene. </li>
                <li> Pixelate. </li>  
              </ul>
  
        </p>
      </div>`;
        break;
      case 3:
        container.innerHTML = `<div class="container-2">
        <iframe class="video" src="https://www.youtube.com/embed/rHRRIPxTkgk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <iframe class="video" src="https://www.youtube.com/embed/Iaz1yLZLqOc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      </div>
      <div class="container-text">
        <p>
          <strong>L-System Editor</strong>
        </p>
        <p>
          Lindenmayer's system is a formal grammar (a set of rules and symbols) used primarily to model the growth process of plants. It can also be used to model the morphology of a wide variety of organisms.
        </p>
        <p>
          All existing rules can be reproduced. You can also create your own rules to create your own patterns.
        </p>         
      </div>`;
        break;
      case 4:
        container.innerHTML = `<h3>Proyecto 5</h3>
        <p>Este es el proyecto 5 de C++</p>`;
        break;
    }
  }