AFRAME.registerComponent("coins",{
    init:function(){
        for(var i=1;i<=20;i++){
            var id=`coin${i}`
            var posX=Math.random() * 100 + (-50)
            var posY=Math.random() * 5 + 5
            var posZ=Math.random() * 60 + (-40)
            var position={x:posX,y:posY,z:posZ}
            this.createCoins(id,position)
        }
    },
    createCoins:function(id,position){
        var background=document.querySelector("#background")
        var coin=document.createElement("a-entity")
        coin.setAttribute("id",id)
        coin.setAttribute("position",position)
        coin.setAttribute("gltf-model","./assets/coins/scene.gltf")
        coin.setAttribute("scale",{x:500,y:500,z:500})
        coin.setAttribute("static-body",{shape:"sphere",sphereRadius:7})
        coin.setAttribute("game-play",{elementId:`#${id}`})
        background.appendChild(coin)
    }
})