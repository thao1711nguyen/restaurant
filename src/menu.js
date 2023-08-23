import { createDom, container, createImage } from "./module"

const title = createDom("h1", "Menu")


const list = createDom('ul')

const image1 = createImage("https://images.unsplash.com/photo-1606850246029-dd00bd5eff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
                            "a plate of salad")
const image2 = createImage("https://images.unsplash.com/photo-1598532213919-078e54dd1f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80", "a plate of potato")
const image3 = createImage("https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80", "a plate of pasta")
const image4 = createImage("https://images.unsplash.com/photo-1585627990987-58ef59c709e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80","a plate of chicken")
const image5 = createImage("https://images.unsplash.com/photo-1648995293978-8b33ec0b7aa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80", "a plate of beef steak")
const dishes = ['pho', 'bun dau mam tom', 'lau thai', 'lau ech', 
              'cha ca la vong', 'bun oc ha noi', 'banh xeo']
for(const dish of dishes) {
    const item = createDom("li", dish)
    list.appendChild(item)
}
const images = container([image1, image2, image3, image4, image5])
export function menu() {
    return container([title, list, images])
}