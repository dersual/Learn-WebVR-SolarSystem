AFRAME.registerComponent("planetinfo", {
  //places planetinfo on planet so I can change info
  schema: {
    width: { type: "number", default: 1 },
    height: { type: "number", default: 1.3 },
    color: { type: "color", default: "#d1d1d1" },
    info: { type: "string", default: "" },
    infocolor: { type: "color", default: "#0de01f" },
    infoposition: { type: "vec3" }
  },

  init: function() {
    var el = this.el;
    let x = document.querySelector("#x");
    let data = this.data;
    var geometry = new THREE.PlaneBufferGeometry(data.width, data.height);
    var a = new THREE.Vector3(0.25, 0.25, 0.25);
    var player2 = document.querySelector("#player2");
    var planet = document.querySelector(".planet");
    planet.play();
    var material = new THREE.MeshStandardMaterial({
      color: data.color,
      side: THREE.DoubleSide,
      transparent: true,
      alphaTest: 0.5,
      opacity: 0.5
    });

    function createInfo() {
      var player2 = document.querySelector("#player2");
      player2.setAttribute("camera", "active", true);
      var info = document.createElement("a-entity");

      info.id = "info";
      info.setAttribute("class", "planetInfo");
      info.setObject3D("mesh", new THREE.Mesh(geometry, material));

      info.setAttribute("position", data.infoposition);
      info.setAttribute("text", {
        value: data.info,
        font: "https://cdn.aframe.io/fonts/SourceCodePro.fnt",
        color: data.infocolor,
        width: "auto"
      });
      player2.appendChild(info);
    }
    el.addEventListener("click", function() {
      createInfo();
      planet.pause();
      x.object3D.visible = true;
    });

    el.addEventListener("mouseenter", function(event) {
      planet.pause();
      el.object3D.scale.add(a);
    });
    el.addEventListener("mouseleave", function(back) {
      planet.play();
      el.object3D.scale.sub(a);
    });
  },

  update: function(oldData) {
    var data = this.data;
    var el = this.el;
    var info = document.querySelector("#info");

    if (Object.keys(oldData).length === 0) {
      return;
    }
    if (
      data.width !== oldData.width ||
      data.height !== oldData.height ||
      data.color !== oldData.color
    ) {
      document
        .getElementById("#info")
        .getObject3D("mesh").geometry = new THREE.PlaneBufferGeometry(
        data.width,
        data.height
      );
      document
        .getElementById("#info")
        .getObject3D("mesh").material = new THREE.MeshStandardMaterial({
        color: data.color,
        side: THREE.DoubleSide
      });
    }
    if (
      data.info !== oldData.info ||
      data.infocolor !== oldData.infocolor ||
      data.infoposition !== oldData.infoposition
    ) {
      document.getElementById("#info").setAttribute("text", {
        value: data.info,
        font: "https://cdn.aframe.io/fonts/SourceCodePro.fnt",
        color: data.infocolor
      });
      document.getElementById("#info").object3D.position.set(data.infoposition);
    }
  }
});
