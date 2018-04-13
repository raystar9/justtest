window.onload = function(){
    var img_1 = document.getElementById('imageBox');
    var changeImage = function() {
        img_1.src = "../../mountain.jpg";
    }
    img_1.addEventListener('click', changeImage);
}