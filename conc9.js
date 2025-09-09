let yesBtn = document.getElementById("yesbtn");
let noBtn = document.getElementById("nobtn");
let message = document.getElementById("message");
let alternatives = document.querySelector(".alternatives");



let noCount = 0;
let maxNo = 5;

function showMessage() {
    message.classList.remove("hidden");
    alternatives.style.display = "none";
}

yesBtn.onclick = function() {
    showMessage();
};


noBtn.onclick = function() {
    noCount++;
     

        if(noCount < maxNo) {
            let newNo = document.createElement("button");
            newNo.innerText = "No";
            newNo.className = "no-button";
            newNo.style.margin = "5px";
            newNo.onclick = noBtn.onclick;



            alternatives.appendChild(newNo);
             } 
  
             if(noCount === maxNo) {
                showMessage();
             }
           };
    