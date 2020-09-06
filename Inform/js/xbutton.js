AFRAME.registerComponent("exitinfo", {
  init: function() {
    var el = this.el;
    var planets = [
      document.querySelector("#earth"),
      document.querySelector("#venus"),
      document.querySelector("#sun"),
      document.querySelector("#mercury"),
      document.querySelector("#mars"),
      document.querySelector("#saturn"),
      document.querySelector("#jupiter"),
      document.querySelector("#uranus"),
      document.querySelector("#neptune")
    ];

    var xpos;
    function changeXpos(xpos) {
      switch (xpos) {
        case "Earth":
          el.object3D.position.set(0.23, 0.34, -0.5);
          break;
        case "Venus":
          el.object3D.position.set(0.209, 0.365, -0.5);
          break;
        case "Mars":
          el.object3D.position.set(0.23, 0.39, -0.5);
          break;
        case "Mercury":
          el.object3D.position.set(0.209, 0.37, -0.5);
          break;
        case "Jupiter":
          el.object3D.position.set(0.2, 0.39, -0.5);
          break;
        case "Saturn":
          el.object3D.position.set(0.2, 0.39, -0.5);
          break;
        case "Uranus":
          el.object3D.position.set(0.195, 0.39, -0.5);
          break;
        case "Neptune":
          el.object3D.position.set(0.18, 0.39, -0.5);
          break;
      }
    }

    planets[0].addEventListener("click", function() {
      var xpos = "Earth";
      changeXpos(xpos);
    });
    planets[1].addEventListener("click", function() {
      var xpos = "Venus";
      changeXpos(xpos);
    });
    planets[4].addEventListener("click", function() {
      var xpos = "Mars";
      changeXpos(xpos);
    });
    planets[3].addEventListener("click", function() {
      var xpos = "Mercury";
      changeXpos(xpos);
    });
    planets[6].addEventListener("click", function() {
      var xpos = "Jupiter";
      changeXpos(xpos);
    });
    planets[5].addEventListener("click", function() {
      var xpos = "Saturn";
      changeXpos(xpos);
    });
    planets[7].addEventListener("click", function() {
      var xpos = "Uranus";
      changeXpos(xpos);
    });
    planets[8].addEventListener("click", function() {
      var xpos = "Neptune";
      changeXpos(xpos);
    });
    el.addEventListener("click", function exit(info) {
      var info = document.querySelector("#info");

      info.parentNode.removeChild(info);
      el.object3D.visible = false;
      document.querySelector("#player").setAttribute("camera", "active", true);
    });
  }
});
