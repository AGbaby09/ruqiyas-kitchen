window.addEventListener("DOMContentLoaded", ()=>{

    let header = document.getElementsByTagName('header')[0]
    let main = document.getElementsByTagName('main')[0]
    let nav = document.getElementById('homeNav')
    let square = document.getElementsByClassName('square')[0]
    let circle = document.getElementsByClassName('circle')[0]

 
    let topImg = header.getElementsByClassName('top')[0]
    let bottomImg = header.getElementsByClassName('bottom')[0]

    let topper = document.getElementsByClassName('topColor')[0]

    let bottomer = document.getElementsByClassName('bottomColor')[0].getElementsByTagName('span')[0]

    let headerText = header.getElementsByClassName('text')[0].getElementsByTagName('h1')

    let main1 = main.getElementsByClassName('parallax-text1')[0]
    let main2 = main.getElementsByClassName('parallax-text2')[0]
    let mainImg = main.getElementsByTagName('img')[0]

    let spinner = document.getElementById('spinner')
    let section1 = document.getElementById('section1')
    let butt = document.getElementById('butt')
    let butt1 = document.getElementById('butt1')
    let butt2 = document.getElementById('butt2')
    let goHome = document.getElementById('goHome')
    let toHome = document.getElementById('toHome')
    
    setTimeout(()=>{
        headerText[0].style.transform = "translateX(0%)"
        headerText[1].style.transform = "translateX(0%)"
    }, 500)
    setTimeout(()=>{
        bottomImg.style.transform = "translateY(0%)"
        topImg.style.transform = "translateY(0%)"
    }, 700)
    setTimeout(()=>{
        headerText[0].style.transform = "translateX(-100%)"
        headerText[1].style.transform = "translateX(100%)"
        bottomImg.style.transform = "translateY(150%)"
        topImg.style.transform = "translateY(-150%)"
    }, 3800)
    setTimeout(()=>{
        header.style.opacity = "0"
    }, 4000)
    setTimeout(()=>{
        header.style.display = "none"
    }, 4500)

    setTimeout(()=>{
        main1.style.transform = "translateX(0%)"
        main2.style.transform = "translateX(0%)"
        mainImg.style.transform = "translateY(0%)"
    }, 4500)
    setTimeout(()=>{
        mainImg.style.animation = "sneaker 2.5s ease-in"
    }, 5000)
    setTimeout(()=>{
        main1.style.transform = "translateX(-100%)"
        main2.style.transform = "translateX(100%)"
        mainImg.style.transform = "translateY(150%)"
    }, 7500)

    setTimeout(()=>{
        main.style.opacity = "0"
    }, 8000)
    setTimeout(()=>{
        nav.style.transform = "translateY(0%)"
        circle.style.transform = "translate(45%, 20%)"
        square.style.width = "30%"
        spinner.style.width = "50%" 
        spinner.style.height = "50%" 
        topper.style.transform = "translateX(0%)"
        bottomer.style.transform = "translateX(0%)"
    }, 8500)
    setTimeout(()=>{
        square.style.opacity = "1"
    }, 8950)
    setTimeout(()=>{
        main.style.display = "none"
    }, 9000)


    console.log(section1.scrollHeight)
    butt.addEventListener('click', ()=>{
        section1.scrollIntoView()
        // location.reload()
    })
    goHome.addEventListener('click', ()=>{
        toHome.scrollIntoView()
        // location.reload()
    })
    butt1.addEventListener('click', ()=>{
        toHome.scrollIntoView()
        // location.reload()
        window.location.replace("/menu/index.html");
    })

    
})
