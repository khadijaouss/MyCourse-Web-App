const form = document.querySelector("form")
const period_1_cards = document.getElementById("period_1_cards")
const period_2_cards = document.getElementById("period_2_cards")
  



document.getElementById("button").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "flex";
  document.querySelector("#periode1").style.opacity = 0.5;
})
document.getElementById("button2").addEventListener("click", function () {
  document.querySelector(".popup2").style.display = "flex";
  document.querySelector("#periode2").style.opacity = 0.5;
})
document.querySelector("#close1").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
  document.querySelector("#periode1").style.opacity = 1;
})
document.querySelector("#submit1").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
  document.querySelector("#periode1").style.opacity = 1;
})
document.querySelector("#close2").addEventListener("click", function () {
  document.querySelector(".popup2").style.display = "none";
  document.querySelector("#periode2").style.opacity = 1;
})



function submitForm(e) {
  const matiere = document.getElementById("matiere");

  const file1 = document.getElementById("file1");
  const file2 = document.getElementById("file2");
  const file3 = document.getElementById("file3");
  
  const formData = new FormData();
  formData.append("matiere", matiere.value);
  formData.append("file1", file1.files[0]);
  formData.append("file2", file2.files[0]);
  formData.append("file3", file3.files[0]);
  

  fetch("http://localhost:2000/uploadfile", {
    method: 'POST',
    body: formData
  })
    .then((result) => {
     
      period_1_cards.innerTEXT += `
      <div class="container1">
      <div class="card1">
     <div class="face face1">
     <div class="content1">

       <h1>${matiere}</h1>
    </div>
    </div>
    <div class="face face2">
    <div class="content1">
       <p><a href="uploads/${file1}" download="">Cours</a><br>
           <a href="uploads/${file2}" download="">Tds/Tps</a><br>
           <a href="uploads/${file3}" download="">Projet/Exam</a><br>
       </p>
    </div>
   </div>
   </div></div>
    `

    })
    .catch((err) => ("Error occured", err));
}














