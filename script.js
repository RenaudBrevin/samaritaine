var AcrylicNight = document.querySelector('.acrelyc');
var body = document.querySelector('body');
var night = document.querySelectorAll('.selectNight');
var light = document.querySelectorAll('.cls-1');
var lustre = document.querySelectorAll('.cls-2');

console.log(night);

function darkMode(){
    night.forEach(element => {
        if (element != null){
            element.classList.add('dark-mode');
        };
    });

    if (AcrylicNight != null){
        AcrylicNight.style.backgroundImage = "url('img/samaritaineAcrelycDetourNight.png')";
    };

    changeLight("#e5989b");

    localStorage.setItem("mode", "dark");
};


function lightMode(){
    night.forEach(element => {
        if (element != null){
            element.classList.remove('dark-mode');
        };
    });

    if (AcrylicNight != null){
        AcrylicNight.style.backgroundImage = "url('img/samaritaineAcrelycDetour.png')";
    };

    changeLight("#54505e")

    localStorage.setItem("mode", "light");
};



if(localStorage.getItem("mode")=="dark")
    darkMode();
else
    lightMode();

function change(){   
    if (body.classList.contains("dark-mode"))
        lightMode();
    else
        darkMode();
};



function changeLight(color){
    light.forEach(trait => {
        trait.style.stroke = color;
    });
    lustre.forEach(lumiere => {
        lumiere.style.stroke = color;
    });
}