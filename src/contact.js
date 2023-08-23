import { createDom, container, createImage } from "./module";
const title = createDom('h1', "Contact")
const email = createDom('p', "email: abc@mail.com")
const address = createDom('p', '37 random street')
const image = createImage("https://images.unsplash.com/photo-1474899420076-a61e74989430?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", "a restaurant")
const contactInfo = container([email, address])
export function contact() {
    return container([title, image, contactInfo])
}