// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

const articleHeader = document.querySelector(".article__header");
console.log (articleHeader);
articleHeader.textContent = "Welcome to the Dustin Blog";

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

const artHeader = document.querySelectorAll(".article__header");
 console.log(artHeader);
// artHeader[0].classList.add("important");
// artHeader[1].classList.add("important")
for (let i = 0; i < artHeader.length; i++ ) {
    artHeader[i].classList.add("important");
}

// Obtain a reference the element with a class of dashed and remove it.
const dash = document.querySelector(".dashed");
console.log(dash);
dash.classList.remove("dashed");

// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
const artFoot = document.querySelector(".article__footer")
console.log(artFoot)
artFoot.classList.add("goldenrod")



