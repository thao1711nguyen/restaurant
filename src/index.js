import { about } from './about.js'
import { menu } from './menu.js'
import { contact } from './contact.js'
import { appendChild } from './module.js'
import './style.css'
const eventController = (() => {
    const aboutContent = about()
    const menuContent = menu() 
    const contactContent = contact()

    const aboutBtn = document.getElementById("about")
    const menuBtn = document.getElementById("menu")
    const contactBtn = document.getElementById("contact")
    const content = document.getElementById("content")
    const buttons = [aboutBtn, menuBtn, contactBtn]
    const switchtab = () => {
        for(const btn of buttons) {
            btn.addEventListener("click", () => {
                // btn.classList.add("animation")
                switch(btn) {
                    case aboutBtn:
                        appendChild(aboutContent, "about")
                        break;
                    case menuBtn:
                        appendChild(menuContent, 'menu')
                        break;
                    case contactBtn:
                        appendChild(contactContent, 'contact')
                        break;
                }
            })
        }
    }
    const defaultEvent = () => {
        window.addEventListener("load", ()=> {
            appendChild(aboutContent, 'about')
        })
    }
    
    return { switchtab, defaultEvent }
})()

eventController.defaultEvent();
eventController.switchtab();
