// get original script then delete
let scripts = document.querySelectorAll('script')
let script = scripts[scripts.length-1]
let text = script.text
script.remove()

// delete '确认提交' content in script
text = text.replace(`if (!confirm("确认提交?")){`, '')
text = text.replace(`return;`, '')
text = text.replace(`}`, '')

// create new script
let new_s = document.createElement('script')
new_s.setAttribute('type', 'text/JavaScript')
new_s.text = text
document.body.appendChild(new_s)

// choose options
let values = document.querySelectorAll('input[value="2"]')
for (i of values) {
    i.click()
}
values = document.querySelectorAll('input[value="1"]')
values[Math.round(Math.random()*9)].click()
document.querySelector("#saveButton").click()
