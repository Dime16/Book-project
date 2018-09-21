//            ---ON CLICK FUNCTION-- --Funkcija na clik--

$(".book__b").click(function () {

    var name = prompt("What is the book name?");
    while (name === "") {
        if (name === "") {
            name = prompt("Field cannot be empty");
        } else {
            break;
        }
    }

    var author = prompt("Who wrote this book?");
    while (author === "") {
        if (author === "") {
            author = prompt("Field cannot be empty");
        } else {
            break;
        }
    }

    var pages = prompt("How many pages does this book have?");
    while (isNaN(pages) || pages === "") {
        if (isNaN(pages)) {
            pages = prompt("Value must be a number");
        } else if (pages === "") {
            pages = prompt("Field nannot be empty");
        } else {
            break;
        }
    }

    var read = prompt("on what page are you reading now?");
    while (isNaN(read) || read > pages) {
        if (isNaN(read)) {
            read = prompt("Value must be a number");
        } else if (read > pages) {
            read = prompt("You cannot read more pages than the total pages of the book.");
        } else {
            break;
        }
    }
//             -- CREATING AND APPENDING NEW ELEMENTS --

    var progress = Math.floor((read / pages) * 100);
    var list = document.createElement("ul");
    list.classList.add("book__list");
    var item = document.createElement("li");
    list.innerHTML = `<li class="book__list__item">Title</li>
                    <li class="book__list__item">${name}</li>
                    <li class="book__list__item">Author</li>
                    <li class="book__list__item">${author}</li>
                    <li class="book__list__item">Max Pages</li>
                    <li class="book__list__item">${pages}</li>
                    <li class="book__list__item">On Page</li>
                    <li class="book__list__item">${read}</li>
                    <li class="book__list__item">Progress</li>
                    <li class="book__list__bar">${progress}% <progress max="100" value=${progress}></progress></li>`;
    console.log(list);
    
    if(list) {
        var heading = document.createElement("li");
        heading.classList.add("book__info__item");
        $("#ordered").append(heading);

        if(progress === 100) {
            heading.innerHTML = `You already read ${name}`;
        } else { heading.innerHTML = `You still need to read ${name}`}
    }

    list.appendChild(item);
    $("#dime").append(list);
});