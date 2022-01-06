// inject script overload confirm
let new_s = document.createElement('script')
new_s.setAttribute('type', 'text/JavaScript')
new_s.text = 'window.confirm = (str)=>{return true}'
document.body.appendChild(new_s)

// choose options
let values = document.querySelectorAll('input[value="2"]')
for (i of values) {
    i.click()
}
values = document.querySelectorAll('input[value="1"]')
values[Math.round(Math.random()*9)].click()
document.querySelector("#saveButton").click()
