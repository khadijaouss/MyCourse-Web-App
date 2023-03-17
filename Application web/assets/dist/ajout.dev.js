"use strict";

var form = document.querySelector("form");
var period_1_cards = document.getElementById("period_1_cards");
var period_2_cards = document.getElementById("period_2_cards");
document.getElementById("button").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "flex";
  document.querySelector("#periode1").style.opacity = 0.5;
});
document.getElementById("button2").addEventListener("click", function () {
  document.querySelector(".popup2").style.display = "flex";
  document.querySelector("#periode2").style.opacity = 0.5;
});
document.querySelector("#close1").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
  document.querySelector("#periode1").style.opacity = 1;
});
document.querySelector("#submit1").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
  document.querySelector("#periode1").style.opacity = 1;
});
document.querySelector("#close2").addEventListener("click", function () {
  document.querySelector(".popup2").style.display = "none";
  document.querySelector("#periode2").style.opacity = 1;
});

function submitForm(e) {
  var matiere = document.getElementById("matiere");
  var file1 = document.getElementById("file1");
  var file2 = document.getElementById("file2");
  var file3 = document.getElementById("file3");
  var formData = new FormData();
  formData.append("matiere", matiere.value);
  formData.append("file1", file1.files[0]);
  formData.append("file2", file2.files[0]);
  formData.append("file3", file3.files[0]);
  fetch("http://localhost:2000/uploadfile", {
    method: 'POST',
    body: formData
  }).then(function (result) {
    period_1_cards.innerTEXT += "\n      <div class=\"container1\">\n      <div class=\"card1\">\n     <div class=\"face face1\">\n     <div class=\"content1\">\n\n       <h1>".concat(matiere, "</h1>\n    </div>\n    </div>\n    <div class=\"face face2\">\n    <div class=\"content1\">\n       <p><a href=\"uploads/").concat(file1, "\" download=\"\">Cours</a><br>\n           <a href=\"uploads/").concat(file2, "\" download=\"\">Tds/Tps</a><br>\n           <a href=\"uploads/").concat(file3, "\" download=\"\">Projet/Exam</a><br>\n       </p>\n    </div>\n   </div>\n   </div></div>\n    ");
  })["catch"](function (err) {
    return "Error occured", err;
  });
}