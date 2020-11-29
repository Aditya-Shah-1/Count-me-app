var number = 0;

document.getElementById("number").innerHTML = number;
document.querySelector("#down").style.color = 'transparent';
document.querySelector("#up").style.color = 'transparent';
document.querySelector("#down").style.textShadow = 'none';
document.querySelector("#up").style.textShadow = 'none';

function higher(){
    document.getElementById("number").innerHTML = number + 1;
    number++;
    up()
}

function lower(){
    document.getElementById("number").innerHTML = number - 1;
    number--;
    down()
}

function up(){
    document.querySelector("#up").style.color = 'gray';
    document.querySelector("#up").style.textShadow = '2px 2px rgba(130, 131, 128, 0.9)';
    setTimeout(function() {
        document.querySelector("#up").style.color = 'transparent';
        document.querySelector("#up").style.textShadow = 'none';
    }, 250)
}

function down(){
    document.querySelector("#down").style.color = 'gray';
    document.querySelector("#down").style.textShadow = '2px 2px rgba(130, 131, 128, 0.9)';
    setTimeout(function() {
        document.querySelector("#down").style.color = 'transparent';
        document.querySelector("#down").style.textShadow = 'none';
    }, 250)
}