// inject script overload confirm
let script = document.createElement('script')
script.setAttribute('type', 'text/JavaScript')
script.src = chrome.runtime.getURL('override.js')
document.body.appendChild(script)

// choose options
let values = document.querySelectorAll('input[value="2"]')
for (i of values) {
    i.click()
}
values = document.querySelectorAll('input[value="1"]')
values[Math.round(Math.random()*9)].click()
script.onload = ()=>{
    document.querySelector("#saveButton").click()
}