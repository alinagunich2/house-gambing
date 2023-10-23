let language = document.getElementById('language')
let languageText = document.getElementById('language-text')

let iconMenu = document.getElementById('icon-menu')
let iconCross = document.getElementById('icon-cross')

let headerMenu = document.getElementById('header__menu')
let headerButton = document.getElementById('header__button')
let body = document.getElementsByTagName('body')[0]
body.style.overflow = 'visible'

language.onclick = function(){languageText.innerText==="EN"?languageText.innerText='RU':languageText.innerText='EN'}
 window.addEventListener('resize',(e)=>{
    if(window.innerWidth <= 1035 && window.innerWidth > 654){
                headerButton.style.display = 'block'
                headerMenu.style.display = 'none'
                iconCross.style.display = 'none'
                iconMenu.style.display = 'block'
            }else if(window.innerWidth <= 654){
                headerButton.style.display = 'none'
                headerMenu.style.display = 'none'
                iconCross.style.display = 'none'
                iconMenu.style.display = 'block'
            }else if(window.innerWidth > 1035){
                headerMenu.style.display = 'flex'
                headerButton.style.display = 'flex'
                iconCross.style.display = 'none'
                iconMenu.style.display = 'none'
            }
 })

iconMenu.onclick = function(){
   
                headerMenu.style.display = 'flex'
                iconMenu.style.display = 'none'
                iconCross.style.display = 'block'
                body.style.overflow = 'hidden'
                if(window.innerWidth<= 654){
                    headerButton.style.display = 'block'
                    body.style.overflow = 'hidden'
                }
      
}
iconCross.onclick = function(){
    headerMenu.style.display = 'none'
    iconMenu.style.display = 'block'
    iconCross.style.display = 'none'
    body.style.overflow = 'visible'
    if(window.innerWidth<= 654){
        headerButton.style.display = 'none'
        body.style.overflow = 'visible'
    }
}

