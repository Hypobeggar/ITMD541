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
ctaSection.setAttribute("id", "ctaSection");

document.getElementsByTagName('main')[0].insertBefore(ctaSection, document.querySelector('#services'));

const newCta = document.createElement('a');
newCta.innerHTML="Schedule a Consulation Today";
newCta.setAttribute("id", "newCta");
newCta.classList.add("relative","border-blue-600", "border-4","bg-white", "text-blue-600", "px-6", "py-2", "rounded", "z-20", "shadow-md");
newCta.addEventListener("click", function(){window.alert("Thank You for your interest in Stellar Marketing!")}, false);


const style1 = document.createElement('style');
ctaSection.append(newCta);
document.querySelector('#services > div > div > div:nth-child(1) > span').innerHTML= "ads_click";

let products= document.querySelector('#solutions > div > div');
products.classList.add('lg:grid-cols-4');


document.querySelector('#solutions > div > div > div:nth-child(4) > img').src = 'https://picsum.photos/id/453/400/300'

style1.innerHTML= `
    #ctaSection {
        display: flex;
        align-items: center;
        background-color: #6495ed;
        padding-top: 32px;
        padding-bottom: 32px;
        justify-content:center;
    }

    #newCta{


    }
    .material-symbols-outlined{
        color:#6495ed;
    
    }


    `;
document.head.appendChild(style1);

}
)();