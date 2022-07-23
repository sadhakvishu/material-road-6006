let text=document.querySelector('Strong')
let arr=['anxiety','depression','confidence','breakups','trauma','providers','employees','parents','families','identity','caregivers']
setInterval(() => {
    let random=Math.floor(Math.random()*11)
    text.innerText=arr[random]
}, 500);

