let search = document.getElementById("search")
let search2 = document.getElementById("search2")
let text = document.getElementById("text-note")
const now = new Date();
const formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' });
let dat = formatter.format(new Date());
function any() {
    window.open(`https://www.google.com/search?q=${search.value}`, "_blank", "width=600, height=600")
}
function any2() {
    window.open(`https://www.google.com/search?q=${search2.value}`, "_blank", "width=600, height=600")
}