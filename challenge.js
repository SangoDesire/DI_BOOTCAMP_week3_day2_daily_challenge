//Get the value of each of the inputs in the HTML file when the form is submitted.
//Remember the event.preventDefault()
//Make sure the values are not empty
//Write a story that uses each of the values.

let form = document.forms.libform;

console.log(form);

form.addEventListener("submit", load)

function load(e) {
    e.preventDefault()
    let noun = document.getElementById("noun");
    let adjective = document.getElementById("adjective");
    let person = document.getElementById("person");
    let verb = document.getElementById("verb");
    let place = document.getElementById("place");


    if (noun.value.trim() == "") {
        alert("Please! fill noun field ")
    } else if (adjective.value.trim() == "") {
        alert("Please! fill adjective field ")
    } else if (person.value.trim() == "") {
        alert("Please! fill person field ")

    } else if (verb.value.trim() == "") {
        alert("Please!fill person field ")
    } else if (place.value.trim() == "") {
        alert("Please!fill person field ")
    } else {
        let story = document.getElementById("story")
        story.innerHTML = noun.value + "  " + adjective.value + " " + person.value + " " + verb.value + " " + place.value

    }

}