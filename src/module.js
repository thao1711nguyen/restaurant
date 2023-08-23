const createDom = (tag, content) => {
    const element = document.createElement(tag)
    element.textContent = content
    return element
}
function container(elements) {
    const containerDom = createDom("div")
    for(const e of elements) {
        containerDom.appendChild(e)
    }
    return containerDom
}
function createImage(url, text) {
    const image = document.createElement('img')
    image.src = url 
    image.alt = text 
    return image
}
const removeChildren = (node) => {
    while(node.lastElementChild) {
        node.lastElementChild.remove()
    }

}
function appendChild(child, className) {
    child.classList.add(className)
    const contentDiv = document.getElementById("content")
    removeChildren(contentDiv)
    contentDiv.appendChild(child)
}
export { createDom, container, createImage, appendChild }