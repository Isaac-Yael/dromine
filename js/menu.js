const openMenu = document.getElementById('menu')
const listMenu = document.querySelector('.burger_ul')
const listMenuLi = document.querySelectorAll('.burger_ul li')
const listMenuLiArray = [...listMenuLi]
const desplegueMenu = document.querySelector('.burger_ul li img')
const secondMenuButton = document.getElementById('second_menu_button')
const closeSecondMenu = document.getElementById('arrow_down')
const secondMenu = document.getElementById('second_menu')

window.addEventListener('click', e=>{
    if(listMenu.classList == 'burger_ul burger_ul-tras' && e.target != listMenu && e.target != listMenuLiArray[0] && e.target != listMenuLiArray[1] && e.target != listMenuLiArray[2] && e.target != listMenuLiArray[3] && e.target != listMenuLiArray[4] && e.target != listMenuLiArray[5] && e.target != desplegueMenu) {
        listMenu.classList.remove('burger_ul-tras')
    }
})

openMenu.addEventListener('click', ()=> {
    setTimeout(() => {
        listMenu.classList.add('burger_ul-tras')
    }, 50)
})

secondMenuButton.addEventListener('click', ()=>{
    closeSecondMenu.classList.toggle('rotate_arrow')
    if(secondMenu.clientHeight == 0){
        secondMenu.style.height = 'auto'
    } else if(secondMenu.style.height == 'auto'){
        secondMenu.style.height = 0
    }
})