const input = document.getElementById("url_text");
const iFrame = document.getElementsByClassName("responsive-iframe")[0];
const displayDetails = document.getElementById("display-details");

let windowFrame = window.open(iFrame.src, iFrame.name);;

const searchBtn = document.getElementById("search");
const closeBtn = document.getElementsByClassName("dot")[0];

const detailsBtn = document.getElementById("details");

searchBtn.addEventListener("click", function () {
  iFrame.src = input.value;
  windowFrame = window.open(iFrame.src, iFrame.name);
});

closeBtn.addEventListener("click", function () {
  iFrame.src = "";
  input.value = "";
});

detailsBtn.addEventListener("mouseover", function () {
    displayDetails.style.display = "flex";
    displayDetails.innerHTML = "";

    const entireUrl = document.createElement("h6");
    entireUrl.appendChild(
      document.createTextNode(`Url completa: ${windowFrame.location.href}`)
    );

    const protocol = document.createElement("h6");
    protocol.appendChild(
      document.createTextNode(`Protocolo: ${windowFrame.location.protocol}`)
    );

    const port = document.createElement("h6");
    port.appendChild(
      document.createTextNode(`Porta: ${windowFrame.location.port}`)
    );

    const dimensions = document.createElement("h6");
    dimensions.appendChild(
      document.createTextNode(
        `Dimenções(LxC): ${windowFrame.innerWidth} X ${windowFrame.innerHeight}`
      )
    );

    const opSis = document.createElement("h6");
    opSis.appendChild(
      document.createTextNode(
        `Sistema operacional: ${windowFrame.navigator.platform}`
      )
    );
    displayDetails.appendChild(entireUrl);
    displayDetails.appendChild(protocol);
    displayDetails.appendChild(dimensions);
    displayDetails.appendChild(port);
    displayDetails.appendChild(opSis);
});

detailsBtn.addEventListener("mouseleave", function () {
    displayDetails.style.display = "none";
});
