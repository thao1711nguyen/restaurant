import { createDom, container, createImage } from "./module.js"


const welcome = createDom('h1', "Welcome to Thao's restaurant!" )
const intro = createDom('h2', "Our restaurant serves Vietnamese cuisine")
const dishIntro = createDom('h3', "Some of our signature dishes are")
const list = createDom('ul')
const dishes = ['Pho', 'Hotpot', 'Banh xeo']
for(let i=0; i<3; i++) {
    const item = createDom('li', dishes[i])
    list.appendChild(item)
}
const introDiv = container([intro, dishIntro, list])
const image = createImage("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60" , "a restaurant")

const elements = [welcome, image, introDiv]
export function about() {
    return  container(elements)
}
