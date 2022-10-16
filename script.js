var AcrylicNight = document.querySelector('.acrelyc');
var body = document.querySelector('body');
var texte = document.querySelectorAll('a');
var title1 = document.querySelectorAll('h1');
var title2 = document.querySelectorAll('h2');
var title3 = document.querySelectorAll('h3');
var para = document.querySelectorAll('p');
var menu = document.querySelector('.menu');
var light = document.querySelectorAll('.cls-1');
var lustre = document.querySelectorAll('.cls-2');

function darkMode(){
    body.classList.add('dark-mode');
    title1.forEach(h1 => {
        h1.classList.add('dark-mode');
    });
    title2.forEach(h2 => {
        h2.classList.add('dark-mode');
    });
    title3.forEach(h3 => {
        h3.classList.add('dark-mode');
    });
    para.forEach(p => {
        p.classList.add('dark-mode');
    });
    texte.forEach(element => {
        element.classList.add('dark-mode');
    });
    // menu.style.backgroundImage = "linear-gradient(#e5989b 75%, rgba(0, 0, 0, 0) 0%)";
    AcrylicNight.style.backgroundImage = "url('img/samaritaineAcrelycDetourNight.png')";
    light.forEach(trait => {
        trait.style.stroke = "#e5989b";
    });
    lustre.forEach(lumiere => {
        lumiere.style.stroke = "#e5989b";
    });

    localStorage.setItem("mode", "dark");
    }

function lightMode(){
        body.classList.remove('dark-mode');
        title1.forEach(h1 => {
            h1.classList.remove('dark-mode');
        });
        title2.forEach(h2 => {
            h2.classList.remove('dark-mode');
        });
        title3.forEach(h3 => {
            h3.classList.remove('dark-mode');
        });
        para.forEach(p => {
            p.classList.remove('dark-mode');
        });
        texte.forEach(element => {
            element.classList.remove('dark-mode');
        });
        // menu.style.backgroundImage = "linear-gradient(#54505e 75%, rgba(0, 0, 0, 0) 0%)";
        AcrylicNight.style.backgroundImage = "url('img/samaritaineAcrelycDetour.png')";
        light.forEach(trait => {
            trait.style.stroke = "#54505e";
        });
        lustre.forEach(lumiere => {
            lumiere.style.stroke = "#54505e";
        });

        localStorage.setItem("mode", "light");
        }

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