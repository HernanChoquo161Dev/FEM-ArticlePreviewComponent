const socialNetworks = document.querySelector(".social-networks");
const btnSocialNetworks = document.querySelector(".author-article__btn-social");
const btnIcon = document.querySelector(".author-article__icon");
var check = false;

btnSocialNetworks.addEventListener('click', function (event) {
    console.log("click")
    if(!check){
        socialNetworks.style.visibility = "visible";
        check = true;
    }
    else{
        socialNetworks.style.visibility = "hidden";
        check = false;
    }
    btnSocialNetworks.classList.toggle("author-article__btn-social--color");
    btnIcon.classList.toggle("author-article__icon--color");
});