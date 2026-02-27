document.addEventListener("DOMContentLoaded", () => {

    // FAQ accordion
    document.querySelectorAll(".faqbox").forEach(faq => {
        faq.querySelector(".question").addEventListener("click", () => {

            document.querySelectorAll(".faqbox").forEach(item => {
                if (item !== faq) {
                    item.classList.remove("active");
                }
            });

            faq.classList.toggle("active");
        });
    });

   
