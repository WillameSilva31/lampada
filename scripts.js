const lampOn = document.querySelector('button#turnOn')
const lampOff= document.querySelector('button#turnOff')
const lamp = document.querySelector('img#lampada')

function isLampBroken (){
    return lamp.src.indexOf('LampBroken') > -1
}

function turnOn (){
    if (!isLampBroken()){
        lamp.src = '/images/LampOn.png'
    }
}

function turnOff (){
    if (!isLampBroken()){
        lamp.src = '/images/LampOff.png'
    }
}

function broken (){
    lamp.src = '/images/LampBroken.png'
}


lamp.addEventListener('dblclick', broken)
lamp.addEventListener('mouseover', turnOn)
lamp.addEventListener('mouseleave', turnOff)

