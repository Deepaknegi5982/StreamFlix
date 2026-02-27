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

   
    const languageSelect = document.getElementById("language");

    function changeLanguage(lang) {
        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.getAttribute("data-key");
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    const savedLang = localStorage.getItem("lang") || "en";
    languageSelect.value = savedLang;
    changeLanguage(savedLang);

    languageSelect.addEventListener("change", () => {
        const lang = languageSelect.value;
        localStorage.setItem("lang", lang);
        changeLanguage(lang);
    });

});

