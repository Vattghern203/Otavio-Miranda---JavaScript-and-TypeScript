const containerText = document.querySelector('.container-text')

const paragraphs = containerText.querySelectorAll('p')

const bodyStyle = getComputedStyle(document.body)

const bodyBgColor = bodyStyle.backgroundColor

console.log(bodyBgColor)

for (let p of paragraphs) {
    p.style.backgroundColor = bodyBgColor
    p.style.color = 'whitesmoke'
}