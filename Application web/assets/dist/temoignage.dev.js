"use strict";

var random_margin = ["-5px", "1px", "5px", "10px", "7px"];
var random_colors = ["#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"];
var random_degree = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-8deg)"];
var index = 0;
window.onload = document.querySelector("#user_input").select();
document.querySelector("#add_note").addEventListener("click", function () {
  document.querySelector("#modal").style.display = "block";
});
document.querySelector("#hide").addEventListener("click", function () {
  document.querySelector("#modal").style.display = "none";
});
document.querySelector("#user_input").addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    var text = document.querySelector("#user_input");
    createStickyNote(text.value);
  }
});

createStickyNote = function createStickyNote(text) {
  var note = document.createElement("div");
  var details = document.createElement("div");
  var noteText = document.createElement("h1");
  note.className = "note";
  details.className = "details";
  noteText.textContent = text;
  details.appendChild(noteText);
  note.appendChild(details);
  if (index > random_colors.length - 1) index = 0;
  note.setAttribute("style", "margin:".concat(random_margin[Math.floor(Math.random() * random_margin.length)], "; background-color:").concat(random_colors[index++], "; transform:").concat(random_degree[Math.floor(Math.random() * random_degree.length)]));
  note.addEventListener("dblclick", function () {
    note.remove();
  });
  document.querySelector("#user_input").value = "";
  document.querySelector("#all_notes").appendChild(note);
};