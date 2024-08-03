$("document").ready(function(){
    //======= START NAV
    $("#navBar a").click(function(){
        $("a").attr("class", "")
        $(this).attr("class", "active")
    })
    //======= END NAV
    //======= END THEM
    $("#them").click(function(){
        let x = $("#them").attr("class")
        if (x == "light") {
            $("#them").attr("class", "dark")
            $("#them i").attr("class", "fa-solid fa-sun")
            $("body").attr("class", "dark")
        }
        if (x == "dark") {
            $("#them").attr("class", "light")
            $("#them i").attr("class", "fa-solid fa-moon")
            $("body").attr("class", "")
        }
    })
    //======= END THEM
})

let lis = [...document.querySelectorAll('#navBar li a')];
let home = document.getElementById('home');
let aboutus = document.getElementById('aboutus');
let skills = document.getElementById('skills');

window.onscroll = function () {
    if (window.scrollY >= home.offsetTop) {
        lis.forEach(li => {
            li.classList.remove('active')
        })
        lis[0].classList.add('active')
    }
    if (window.scrollY >= aboutus.offsetTop - 180) {
        lis.forEach(li => {
            li.classList.remove('active')
        })
        lis[1].classList.add('active')
    }
    if (window.scrollY >= skills.offsetTop - 180) {
        lis.forEach(li => {
            li.classList.remove('active')
        })
        lis[2].classList.add('active')
    }
    if (window.scrollY >= contact.offsetTop - 280) {
        lis.forEach(li => {
            li.classList.remove('active')
        })
        lis[3].classList.add('active')
    }
    if (window.scrollY >= footer.offsetTop - 800) {
        lis.forEach(li => {
            li.classList.remove('active')
        })
        lis[4].classList.add('active')
    }
    
}