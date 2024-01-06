function escrevendoLetra () {
    function ativaletra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i) =>{
            setTimeout(()=>{
                elemento.innerHTML += letra;
            }, 75 * i);
        });
   
    }

const titulo = document.querySelector ('.digitando');
    ativaletra(titulo);

}

escrevendoLetra ();
 

function menuMobile () {
    const ativamenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector ('header .navegacao-primaria')
    
    
    
    ativamenu.addEventListener('click', ()=>{
        ativamenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });

}

menuMobile ();

function aboutMe(){
    const divExperience = document.querySelectorAll('.experience-content div'); 
    const liExperience = document.querySelectorAll('.experience-content ul li'); 
    const divEducation = document.querySelectorAll('.education-content div'); 
    const liEducation = document.querySelectorAll('.education-content ul li'); 

    divEducation[0].classList.add('ativo');
    liEducation[0].classList.add('ativo');
    divExperience[0].classList.add('ativo');
    liExperience[0].classList.add('ativo');
    
    function slideShow(index){
        divExperience.forEach((div)=>{
            div.classList.remove('ativo')
        });
        liExperience.forEach((buttom)=>{
            buttom.classList.remove('ativo');
        })
        divExperience[index].classList.add('ativo');
        liExperience[index].classList.add('ativo');
    }
    
    function slideShow2(index){
        divEducation.forEach((div)=>{
            div.classList.remove('ativo')
        });
        liEducation.forEach((buttom)=>{
            buttom.classList.remove('ativo');
        })
        divEducation[index].classList.add('ativo');
        liEducation[index].classList.add('ativo');
    }
    
    liExperience.forEach((event, index) => {
        event.addEventListener('click', () =>{
            slideShow(index);
        })
    });
    
    liEducation.forEach((event, index) => {
        event.addEventListener('click', () =>{
            slideShow2(index);
        })
    });
}

aboutMe();