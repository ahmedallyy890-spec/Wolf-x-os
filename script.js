let search = document.getElementById("search")
let search2 = document.getElementById("search2")
let text = document.getElementById("text-note")
let battery = 100
const now = new Date();
const formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' });
function any() {
    window.open(`https://www.google.com/search?q=${search.value}`, "_blank", "width=600, height=600")
}
function any2() {
    window.open(`https://www.google.com/search?q=${search2.value}`, "_blank", "width=600, height=600")
}
function bet() {
    setInterval (() => {
        if (battery > 0) {
            battery -= 1
        } else {
            battery = 100
        }
    }, 600000
    )
}
function info() {
    let dat = formatter.format(new Date());
    alert(`Time and Date: ${dat}\n Battery: ${battery}%\n Light: ======-----`)
}
bet();
