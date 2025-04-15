const technologiesButton = document.getElementById("hover-text");
const technologiesList = document.getElementById("tech-list");
const technologies = ["Python", "Java", "C", "HTML/CSS", "JavaScript", "MongoDB", "SQL", "Selenium"];
//creates list of elements to be added/removed
const techListElements = createListElements();

//on mouse hover
technologiesButton.addEventListener("mouseover", () => {
    technologiesButton.style.backgroundColor = "coral";
    technologiesButton.style.cursor = "pointer";
})
//when mouse stops hovering remove background color
technologiesButton.addEventListener("mouseout", () => technologiesButton.style.backgroundColor = "lightgrey")

//creates list of elements to be added/removed
function createListElements() {
    let listElements = []
    for (let i = 0; i < technologies.length; i++) {
        const newListElem = document.createElement("li");
        newListElem.textContent = technologies[i];
        newListElem.classList.add("tech-list-element");
        listElements.push(newListElem);
    }
    //return array of list elements
    return listElements;
}

//use dom manipulation to display information about the programming langauges i know
//as well as some other technologies
function addOrRemove() {
    //technologies list is empty, so create list and add to the list to be shown on the page
    if (technologiesList.textContent === "") {
        for (let i = 0; i < techListElements.length; i++) {
            technologiesList.appendChild(techListElements[i]);
        }
    //technologies list is being shown, so remove 
    } else {
        for (let i = 0; i < techListElements.length; i++) {
            technologiesList.removeChild(techListElements[i]);
        }
    }
    
}

