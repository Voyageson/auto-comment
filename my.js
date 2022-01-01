// 获取脚本内容并删除
let scripts = document.querySelectorAll('script')
let script = scripts[scripts.length-1]
let text = script.text
script.remove()

// 删除“确认提交”内容
text = text.replace(`if (!confirm("确认提交?")){`, '')
text = text.replace(`return;`, '')
text = text.replace(`}`, '')

// 根据新内容，创建新脚本
let new_s = document.createElement('script')
new_s.setAttribute('type', 'text/JavaScript')
new_s.text = text
document.body.appendChild(new_s)

// 点击选项
let values = document.querySelectorAll('input[value="2"]')
for (i of values) {
    i.click()
}
values = document.querySelectorAll('input[value="1"]')
values[values.length-Math.round(Math.random()*9)+1].click()
document.querySelector("#saveButton").click()
