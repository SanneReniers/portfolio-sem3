const headerContainer = document.querySelector("header")

/* Inserts the header into the document so that all of the pages have the same header. This makes changing a title easier. */
headerContainer.innerHTML = `<a id="scroll-up" href="./index.html"><img class="header__logo" src="./images/logo placeholder.png"></a>
<ul class="header__menu">
     <a href="./projects.html"><li class="header__menuitem header__projectsbutton" href="../projects.html/">Projects
        <div class="header__menudropdown paragraph">
             <a href="./studio.html"><p>Studio</p></a>
             <a href="./cbr.html"><p>CBR</p></a>
            <a href="./portfolio.html"><p>Portfolio</p></a>
            <a href="./passion-project.html"><p>Sprint X</p></a>
            <a href="./challenges.html"><p>Challenges</p></a>
        </div>
        </li></a>
    <a href="./learning-outcomes.html"><a<li class="header__menuitem">Learning outcomes</li></a>
    <li class="header__menuitem">About me</li>
</ul>`;

/* Checks if the name of the document is the same as the URL that the user is viewing and adds the active class if this is the case. */

for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href == document.URL) {
        document.links[i].className = 'active';
    }
}