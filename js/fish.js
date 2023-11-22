AFRAME.registerComponent("fish",{
    init:function(){
        for(var i=1;i<=20;i++){
            var id=`fish${i}`
            var posX=Math.random() * 100 + (-50)
            var posY=Math.random() * 5 + 5
            var posZ=Math.random() * 60 + (-40)
            var position={x:posX,y:posY,z:posZ}
            this.createFish(id,position)
        }
    },
    createFish:function(id,position){
        var background=document.querySelector("#background")
        var fish=document.createElement("a-entity")
        fish.setAttribute("id",id)
        fish.setAttribute("position",position)
        fish.setAttribute("scale",{x:500,y:500,z:500})
        fish.setAttribute("gltf-model","./assets/fish/scene.gltf")
        fish.setAttribute("animation-mixer",{})
        fish.setAttribute("static-body",{shape:"sphere",sphereRadius:7})
        fish.setAttribute("game-play",{elementId:`#${id}`})
        background.appendChild(fish)
    }
})