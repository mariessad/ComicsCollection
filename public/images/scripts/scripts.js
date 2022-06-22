let hamburgerMenu = document.querySelector(".hamburger-menu");
// console.log(hamburgerMenu);

const navBar = document.querySelector("ul");
// console.log(navBar);
const liElement = document.querySelector(".nav-align");

let childNodes = navBar.childNodes;
// console.log(childNodes);

// fill in the toggle function when you know what class you are going to toggle
function navBarToggle() {
  navBar.classList.toggle("open");

  //   console.log("test");
}

hamburgerMenu.addEventListener("click", navBarToggle);

// adding more comic books to the index page

//array of objects
const comicBooks = [
  {
    title: "<i>Fun Home: A Family <br/> Tragicomic</i> <br />",

    author: "by Alison Bechdel <br />",

    rating: "5 stars <br />",

    href: "./fun-home.+html",

    imgSrc: "/images/fun-home.jpg",

    imgAlt: "Fun Home: A Family Tragicomic comic book cover",
  },

  {
    title: "<i>Hunter X Hunter Vol. 1 </i><br />",

    author: "by Yoshihiro Togashi <br />",

    rating: "5 stars <br />",

    href: "./hunter-x-hunter.html",

    imgSrc: "/images/hunter-x-hunter.jpg",

    imgAlt: "Hunter X Hunter comic book cover",
  },

  {
    title: "<i>The Walking Dead,<br/> Vol. 1: Days Gone Bye </i><br />",

    author: "by Robert Kirkman <br />",

    rating: "4 stars <br />",

    href: "./the-walking-dead.html",

    imgSrc: "/images/the-walking-dead.jpg",

    imgAlt: "The Walking Dead, Vol. 1: Days Gone Bye comic book cover",
  },
];

//
let displayMoreButton = document.querySelector("button");

function addMoreComics(e) {
  //get the div that holds all the comics
  // let comicPageBody =
  //   document.querySelector(".content-container").nextElementSibling;
  // console.log(comicPageBody);
  //this gets the flex div inside of the content container
  let flexContainerAppend = document.querySelector(".flex-container");

  //loop through the comic book array of objects
  for (let i = 0; i < comicBooks.length; i++) {
    //create a div element and store in comicDiv variable
    let comicDiv = document.createElement("div");
    //this created div that should hold one comic, gets a class of "flex" added (like all others in HTML)
    comicDiv.className = "flex";
    // console.log(comicDiv);
    //set each element that is going inside each div
    //get the link that wraps the img & add an href to it
    comicImgLink = document.createElement("a");
    comicImgLink.href = comicBooks[i].href;
    comicDiv.appendChild(comicImgLink);
    // console.log(comicImgLink);
    //get the image + append it
    const comicImg = document.createElement("img");
    comicImg.alt = comicBooks[i].imgAlt;
    comicImg.src = comicBooks[i].imgSrc;
    //add an inline style to each -- alternatively could change to a CSS styling
    comicImg.style = "width: 200px";
    //add the comic img inside the comic link
    comicImgLink.appendChild(comicImg);
    // console.log(comicDiv);
    //add a <br>
    let br = document.createElement("br");
    comicDiv.appendChild(br);
    //add the paragraph element
    const paragraph = document.createElement("p");
    paragraph.innerHTML += comicBooks[i].title;
    paragraph.innerHTML += comicBooks[i].author;
    paragraph.innerHTML += comicBooks[i].rating;
    console.log(paragraph);
    //add the details a link with "details" text inside
    const detailsLink = document.createElement("a");
    detailsLink.href = comicBooks[i].href;
    detailsLink.innerText = "Details";
    //add the link inside the paragraph
    paragraph.appendChild(detailsLink);
    //add the paragraph to the comic div
    comicDiv.appendChild(paragraph);
    console.log(comicDiv);
    //add that whole comic div to the outer comics div
    flexContainerAppend.appendChild(comicDiv);
    console.log(flexContainerAppend);

    e.preventDefault();
  }
}

//event listener
displayMoreButton.addEventListener("click", addMoreComics);
