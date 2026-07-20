
const cards = document.querySelectorAll(".contact, .call");


cards.forEach(card=>{

    card.addEventListener("click",()=>{


        cards.forEach(item=>{

            item.classList.remove("active");

        });


        card.classList.add("active");


    });


});
/*======================================
FAQ ACCORDION
======================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const header = item.querySelector(".faq-header");
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector("i");


    header.addEventListener("click", () => {


        // fermer les autres FAQ
        faqItems.forEach(otherItem => {

            if(otherItem !== item){

                otherItem.classList.remove("active");

                otherItem.querySelector(".faq-content").style.maxHeight = null;

                otherItem.querySelector("i").style.transform = "rotate(0deg)";

            }

        });



        // ouvrir / fermer la FAQ actuelle

        if(item.classList.contains("active")){


            item.classList.remove("active");

            content.style.maxHeight = null;

            icon.style.transform = "rotate(0deg)";


        }else{


            item.classList.add("active");

            content.style.maxHeight = content.scrollHeight + "px";

            icon.style.transform = "rotate(180deg)";


        }


    });


});

