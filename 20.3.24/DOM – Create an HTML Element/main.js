function createDiv() {
    var divTag = document.createElement("div");
    
    divTag.id = "id1";

    divTag.setAttribute("align","center");

    divTag.style.margin = "0px auto";

    divTag.className = "dynamicDiv";

    divTag.innerHTML = "This HTML Div tag created using Javascript DOM dynamically";

    document.body.appendChild(divTag);

}