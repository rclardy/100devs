//Create a mouse object that has four properties and three methods

let mouse = {}

mouse.brand = 'Logitech'
mouse.color = 'black'
mouse.model = 'MX Ergo'
mouse.wireless = true

mouse.leftClick = function(){
    console.log('LEFT CLICKKKK')
}
mouse.rightClick = function(){
    console.log('RIGHT CLICKKK')
}
mouse.scroll = function(){
    console.loc('JUMP JUMP JUMP')
}

let mouse2 = {}

mouse2.brand = 'Logitech'
mouse2.color = 'black'
mouse2.model = 'Pro Wireless'
mouse2.wireless = true

mouse2.leftClick = function(){
    console.log('LEFT CLICKKKK')
}
mouse2.rightClick = function(){
    console.log('RIGHT CLICKKK')
}
mouse2.scroll = function(){
    console.loc('JUMP JUMP JUMP')
}

let mouse3 = {}

mouse3.brand = 'Apple'
mouse3.color = 'Silver'
mouse3.model = 'Track Pad 2'
mouse3.wireless = true

mouse3.leftClick = function(){
    console.log('LEFT CLICKKKK')
}
mouse3.rightClick = function(){
    console.log('RIGHT CLICKKK')
}
mouse3.scroll = function(){
    console.loc('JUMP JUMP JUMP')
}


function Mouse(mouseBrand,mouseColor,mouseModel,mouseWireless){
    this.brand = mouseBrand
    this.color = mouseColor
    this.model = mouseModel
    this.wireless = mouseWireless
    this.leftClick = function(){
        console.log('LEFT CLICKKK')
    }
    this.rightClick = function(){
        console.log('RIGHT CLICKKK')
    }
}

let newMouse = new Mouse('Logitech','black','G502',true)

