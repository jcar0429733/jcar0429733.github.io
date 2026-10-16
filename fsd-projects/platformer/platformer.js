$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(100, 700, 200, 70, "red"); 
createPlatform(330, 600, 130, 70, "red"); 
createPlatform(500, 500, 200, 70, "red"); 
createPlatform(730, 400, 130, 70, "red");
createPlatform(900, 300, 200, 50, "red");



    // TODO 3 - Create Collectables
createCollectable("steve", 1100, 200);
createCollectable("diamond", 250, 170, 0.6, 0.7);
createCollectable("max", 460, 170, 0.3, 1);
createCollectable("grace", 800, 170, 0.5, 0.7);


    
    // TODO 4 - Create Cannons
createCannon("top", 200, 2200);
createCannon("right", 300, 2000);
createCannon("bottom", 700, 2000);
  

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
