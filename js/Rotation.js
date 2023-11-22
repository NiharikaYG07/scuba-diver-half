//Diver rotation component
AFRAME.registerComponent("diver-rotation-reader", {
  schema: {
    speedOfRoation: { type: "number", default: 0 },
    speedOfAscent: { type: "number", default: 0 }
  },
  init: function () {
    window.addEventListener("keydown", (e) => {

      //get the data from the attributes
      this.data.speedOfRoation = this.el.getAttribute("rotation");      
      this.data.speedOfAscent = this.el.getAttribute("position");

      var diverRotation = this.data.speedOfRoation;      
      var diverPosition = this.data.speedOfAscent;

      //control the attributes with the Arrow Keys
      if (e.key === "ArrowRight") {
        if (diverRotation.x < 10) {
          diverRotation.x += 0.5;
          this.el.setAttribute("rotation", diverRotation);
        }
      }
      if (e.key === "ArrowLeft") {
        if (diverRotation.x > -10) {
          diverRotation.x -= 0.5;
          this.el.setAttribute("rotation", diverRotation);
        }
      }
      if (e.key === "ArrowUp") {
        if (diverRotation.z < 20) {
          diverRotation.z += 0.5;
          this.el.setAttribute("rotation", diverRotation);
        }
        if (diverPosition.y < 2) {
          diverPosition.y += 0.01;
          this.el.setAttribute("position", diverPosition);
        }
      }
      if (e.key === "ArrowDown") {
        if (diverRotation.z > -10) {
          diverRotation.z -= 0.5;
          this.el.setAttribute("rotation", diverRotation);
        }
        if (diverPosition.y > -2) {
          diverPosition.y -= 0.01;
          this.el.setAttribute("position", diverPosition);
        }
      }
    });
  }
});


AFRAME.registerComponent("terrain-rotation-reader",{
  schema:{
      rotation:{type:'number',default:0}
  },
  init:function(){
      window.addEventListener("keydown",x=>{
          if(x.key=="ArrowRight"){
              if(this.data.rotation<0.1){
                  this.data.rotation+=0.01
              }
          }
          if(x.key=="ArrowLeft"){
              if(this.data.rotation>-0.1){
                  this.data.rotation-=0.01
              }
          }
      })
  },
  tick:function(){
      var map_rotation=this.el.getAttribute("rotation")
      map_rotation.y+=this.data.rotation
      this.el.setAttribute("rotation",{
          x:map_rotation.x,
          y:map_rotation.y,
          z:map_rotation.z
      })
  }
})