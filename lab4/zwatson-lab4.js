(function(){
let hero = document.getElementById('hero');
document.getElementsByTagName('h1')[0].innerHTML = "Supercharge Your Brand with Stellar Marketing";
document.querySelector('#hero > p').innerHTML= "Leverage innovative strategies from Stellar Marketing to make your business <b><i>shine</i></b> and <b><i>succeed.</i></b>";
hero.style.background= "url(https://picsum.photos/id/683/1280/720)";


let header = document.getElementsByTagName('header')[0];
header.classList.add('bg-gray-800');
//let footer = document.getElementById('footer')[0]

document.querySelector('#hero > a').remove();


const ctaSection = document.createElement('section');
document.getElementsByTagName('main')[0].insertBefore(ctaSection, document.querySelector('#services'));


const newCta = document.createElement('a');


}
)();