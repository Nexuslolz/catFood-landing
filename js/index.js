const box = document.querySelectorAll('.content-box');
const text = document.querySelectorAll('.content-box__text-footer')
const bird = document.querySelector('.bird-text')
const fish = document.querySelector('.fish-text')
const chicken = document.querySelector('.chicken-text')




box.forEach((elem) =>{
if (elem.classList.contains('content-box_disabled') && elem.classList.contains('bird')){ 
    bird.innerHTML = '<div class="content-box__text-footer" id="disabled">Печалька, с фуа-гра закончился.</div>'
} else if(elem.classList.contains('content-box_disabled') && elem.classList.contains('fish')){ 
    fish.innerHTML = '<div class="content-box__text-footer" id="disabled">Печалька, с рыбой закончился.</div>'
}else if (elem.classList.contains('content-box_disabled') && elem.classList.contains('chicken')){ 
    chicken.innerHTML = '<div class="content-box__text-footer" id="disabled">Печалька, с курой закончился.</div>'
} 
})

box.forEach((elem) => {
elem.addEventListener('click', function(){
    if(elem.classList.contains('content-box_disabled')){
        elem.removeEventListener('click')
    }
    if(!(elem.classList.contains('content-box_active')) && elem.classList.contains('bird')){
        elem.classList.add('content-box_active')
        bird.innerHTML = '<div class="content-box__text-footer">Печень утки разварная с артишоками.</div>'
    } else if (!(elem.classList.contains('content-box_active')) && elem.classList.contains('fish')){ 
        elem.classList.add('content-box_active')
        fish.innerHTML = '<div class="content-box__text-footer">Головы щучьи с чесноком да свежайшая сёмгушка.</div>'
    } else if(!(elem.classList.contains('content-box_active')) && elem.classList.contains('chicken')){ 
        elem.classList.add('content-box_active')
        chicken.innerHTML = '<div class="content-box__text-footer">Филе из цыплят с трюфелями в бульоне.</div>'
    } else if (elem.classList.contains('content-box_active') && elem.classList.contains('bird')){ 
        elem.classList.remove('content-box_active')
        bird.innerHTML = '<div class="content-box__text-footer">Чего сидишь? Порадуй котэ, <a href="" class="content-box__link"> купи.</a></div>'
    } else if(elem.classList.contains('content-box_active') && elem.classList.contains('fish')){ 
        elem.classList.remove('content-box_active')
        fish.innerHTML = '<div class="content-box__text-footer">Чего сидишь? Порадуй котэ, <a href="" class="content-box__link"> купи.</a></div>'
    }else if (elem.classList.contains('content-box_active') && elem.classList.contains('chicken')){ 
        elem.classList.remove('content-box_active')
        chicken.innerHTML = '<div class="content-box__text-footer">Чего сидишь? Порадуй котэ, <a href="" class="content-box__link"> купи.</a></div>'
    }})
    
    // if (elem.classList.contains('bird')){ 
    //     bird.innerHTML = '<div class="content-box__text-footer" id="#disabled">Печалька, с фуа-гра закончился.</div>'
    // } else if(elem.classList.contains('fish')){ 
    //     fish.innerHTML = '<div class="content-box__text-footer" id="#disabled">Печалька, с рыбой закончился.</div>'
    // }else if (elem.classList.contains('chicken')){ 
    //     chicken.innerHTML = '<div class="content-box__text-footer" id="#disabled">Печалька, с курой закончился.</div>'
    // } 
})








// text.forEach((el)=>{
//     el.innerHTML = '<div class="content-box__text-footer" id="fish">Чего сидишь? Порадуй котэ, <a href="" class="content-box__link"> купи.</a></div>'
// })


// text.forEach((el)=>{
//     if(el.classList.contains('bird')){
//     bird.innerHTML = '<div class="content-box__text-footer">Печень утки разварная с артишоками.</div>'
// }
//     if(el.classList.contains('fish')){
//     fish.innerHTML = '<div class="content-box__text-footer">Головы щучьи с чесноком да свежайшая сёмгушка.</div>'
// }
//     if(el.classList.contains('chicken')){
//     chicken.innerHTML = '<div class="content-box__text-footer">Филе из цыплят с трюфелями в бульоне.</div>'
// }
// })})}