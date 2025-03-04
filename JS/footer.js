const footerContainer = document.querySelector("footer")

/* Inserts the header into the document so that all of the pages have the same header. This makes changing a title easier. */
footerContainer.innerHTML = `<img class="footer__background-image" src="./images/footer__background-image.png">
`;

for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href == document.URL) { // says that if the name of the document is the same as the url that it has to add the active class to this element.
        document.links[i].className = 'active';
    }
}