var themes = ["purple", "light", "brutal", "gal1", "gal2", "gal3"]
var currentIndex = 0

function applyTheme(index){
    document.body.classList.remove(...themes);
    document.body.classList.add(themes[index]);
    currentIndex = index;
    setCookie("theme", themes[index], 30);
}
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function changeTheme(){
    applyTheme((currentIndex + 1)%themes.length)
}
window.onload = () => {
    const savedTheme = getCookie("theme");
    const index = themes.indexOf(savedTheme);
    if (index !== -1) {
        applyTheme(index);
    } else {
        applyTheme(0);
    }
};
