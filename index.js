// // console.log(document.getElementsByTagName('h1'))
// var hh = document.getElementsByTagName('h1')
// hh[0].style.color = "red"


// var mainDiv = document.getElementById('main')
// console.log(mainDiv)

// var par = document.getElementsByClassName('para')
// console.log(par)

// var brahim = document.querySelector('h1')
// console.log(brahim)

// var parMain = document.querySelector('#main')
// console.log(parMain)

// var pp = document.querySelector('.para')
// console.log(pp)

// var paras = document.querySelectorAll('.para')
// console.log(paras)


// var divMain = document.querySelector('#main')

// console.log(divMain)
// console.log(divMain.innerHTML)
// console.log(divMain.innerText)

// var divMain = document.querySelector('#main')

// console.log(divMain.firstElementChild)

// console.log(divMain.lastElementChild)

// console.log(divMain.firstElementChild.nextElementSibling.innerHTML)

// console.log(divMain.lastElementChild.previousElementSibling.previousElementSibling.innerHTML)

// var butt = document.createElement('button')
// butt.innerText = "Brahim"
// var divMain = document.querySelector('#main')
// divMain.appendChild(butt)

// var divMain = document.querySelector('#main')
// divMain.remove()

// var hh = document.querySelector('h1').parentElement
// hh.remove()


// var hh = document.querySelector('h1')

// hh.setAttribute('class','brahim')





function ramez(){
    alert('Hello')
}


// var btnPlus = document.querySelector('.btnPlus')
// var btnMoins = document.querySelector('.btnMoins')

// btnMoins.addEventListener('click',function(){

//     if(btnMoins.nextElementSibling.innerText>0){
//         btnMoins.nextElementSibling.innerText--
//     }    
// })

// btnPlus.addEventListener('click',function(){
//     btnPlus.previousElementSibling.innerText++
// })

var btnPlus = document.querySelectorAll('.btnPlus')
var btnMoins = document.querySelectorAll('.btnMoins')
for(let i = 0;i < btnPlus.length;i++){
    btnPlus[i].addEventListener('click',function(){
        btnPlus[i].previousElementSibling.innerText++
    })
}


for(let i = 0;i<btnMoins.length;i++){
    btnMoins[i].addEventListener('click',function(){
        if(btnMoins[i].nextElementSibling.innerText>0){
            btnMoins[i].nextElementSibling.innerText--
        }
    })
}