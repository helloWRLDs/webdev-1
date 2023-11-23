// Quantity Buttons
let qtyBtns = document.getElementsByClassName("quantity-btn")
for (let i = 0; i < qtyBtns.length; i++) {
    qtyBtns[i].addEventListener("click", () => {
        if (qtyBtns[i].innerHTML === "+") {
            document.getElementById("quantity").setAttribute("value", ++document.getElementById("quantity").value)
        } else {
            if (document.getElementById("quantity").value > 1) {
                document.getElementById("quantity").setAttribute("value", --document.getElementById("quantity").value)
            }
        }
    })
}

let previews = document.getElementsByClassName("preview-link")
for (let i = 0; i < previews.length; i++) {
    previews[i].addEventListener("click", () => {
        console.log(previews[i])
        document.getElementById("active-preview-div").innerText = previews[i].innerHTML;
    })
}