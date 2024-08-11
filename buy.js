let prname = document.getElementById('prname');
let number = document.getElementById('number');
let names = document.getElementById('names');
let phone = document.getElementById('phone');
let thegovernorate = document.getElementById('thegovernorate');
let thetown = document.getElementById('thetown');
let loc = document.getElementById('loc');
let submit = document.getElementById('submit');



let datapro = [];

submit.onclick = function(){
    let data = {
        prname:prname.Value,
        number:number.Value,
        names:names.Value,
        phone:phone.Value,
        thegovernorate:thegovernorate.Value,
        thetown:thetown.Value,
        loc:loc.Value,
        button:button.Value,
    }
    console.log(datapro)
}