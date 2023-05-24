var url = "http://localhost:3000/view";
var id = "view";

async function generator(url, id) {
  var request = await new XMLHttpRequest();

  request.open("GET", url, true);
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    view(data, request, id);
  };

  request.send();
}

function view(data, request, id) {
  if (id == "view") {
    if (request.status >= 200 && request.status < 400) {
      data.forEach((query) => {
        console.log(request.status);
        var div = document.createElement("tr");
        var mainContainer = document.getElementById(id);
        div.innerHTML =
          "<td>" +
          query.id +
          "</td><td><input id='name" +
          query.id +
          "' placeholder='" +
          query.name +
          "' value='" +
          query.name +
          "'/></td><td><input id='suly" +
          query.id +
          "' placeholder='" +
          query.suly +
          "' value='" +
          query.suly +
          "'/></td><td><input id='fekmax" +
          query.id +
          "' placeholder='" +
          query.fekmax +
          "' value='" +
          query.fekmax +
          "'/></td><td><input id='gugmax" +
          query.id +
          "' placeholder='" +
          query.gugmax +
          "' value='" +
          query.gugmax +
          "'/></td>" +
          "<button onclick = 'deleterecord(" +
          query.id +
          ")' type = 'submit' value='Submit'>Törlés</button>" +
          "<button onclick = 'update(" +
          query.id +
          ")'>Frissit</button>";
        mainContainer.appendChild(div);
      });
    } else {
      console.log("error");
    }
  }
}

async function generate_html() {
  await generator(url, id);
}

function deleterecord(id) {
  navigator.sendBeacon("http://localhost:3000/deleterecord/" + id);
  console.log(id);
}
function update(id) {
  const data =
    id +
    ";" +
    document.getElementById("name" + id).value +
    ";" +
    document.getElementById("suly" + id).value +
    ";" +
    document.getElementById("fekmax" + id).value +
    ";" +
    document.getElementById("gugmax" + id).value;

  navigator.sendBeacon("http://localhost:3000/update/" + data);
  console.log(data);
}

generate_html();