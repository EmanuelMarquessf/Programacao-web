function cityBlur(num){
    const img = document.getElementById("img"+num);
    img.classList.add("city-blur");
}

function clearBlur(num){
    const img = document.getElementById("img"+num);
    img.classList.remove("city-blur");
}

