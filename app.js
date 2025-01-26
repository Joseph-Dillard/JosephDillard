var sheets = ['style1.css', 'indexNoStyle.css'];
var Index = Number(localStorage.getItem('styleIndex')) || 0;
Index = Index % sheets.length;
var switchButton = document.getElementById('switchbtn');
var stylesheetLink = document.querySelector('link[rel="stylesheet"]');
function toggle() {
    if (Index + 1 > 1) {
        Index = 0;
    }
    else {
        Index = 1;
    }
    apply();
    localStorage.setItem('styleIndex', Index.toString());
}
function apply() {
    stylesheetLink.href = sheets[Index];
}
if (switchButton) {
    switchButton.addEventListener('click', toggle);
}
apply();
