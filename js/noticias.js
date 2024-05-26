function toggleExtraInfo(infoId) {
    var info = document.getElementById(infoId);
    var extraInfos = document.getElementsByClassName('extra-info');
    for (var i = 0; i < extraInfos.length; i++) {
        if (extraInfos[i].id === infoId) {
            if (extraInfos[i].style.display === "none" || extraInfos[i].style.display === "") {
                extraInfos[i].style.display = "block";
                extraInfos[i].style.height = extraInfos[i].scrollHeight + "px"; // Ajustar la altura al contenido
            } else {
                extraInfos[i].style.display = "none";
                extraInfos[i].style.height = 0;
            }
        } else {
            extraInfos[i].style.display = "none";
            extraInfos[i].style.height = 0;
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var extraInfos = document.getElementsByClassName('extra-info');
    for (var i = 0; i < extraInfos.length; i++) {
        extraInfos[i].style.display = "none";
    }
});