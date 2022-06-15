import * as PIXI from 'pixi.js'

import customImage0 from "./images/0.png"
import customImage1 from "./images/1.png"
import customImage2 from "./images/2.png"
import customImage3 from "./images/3.png"
import customImage4 from "./images/4.png"
import customImage5 from "./images/5.png"
import customImage6 from "./images/6.png"
import customImage7 from "./images/7.png"
import customImage8 from "./images/8.png"
import customImage9 from "./images/9.png"
import arrowButton from "./images/arrow.png"

import { mainCharacterCustomizable } from "./customCharacter"
import { button } from './button'

let height = 400
let width = 850
let customCharacter : mainCharacterCustomizable
let arrowButtonCode : button
let texturesPersonalisationLoader : PIXI.Loader

export class Game {

    private pixi: PIXI.Application

    constructor() {
        this.pixi = new PIXI.Application({height: height, width: width})
        document.body.appendChild(this.pixi.view)

        this.pixi.loader
            .add("customTexture0", customImage0)
            .add("customTexture1", customImage1)
            .add("customTexture2", customImage2)
            .add("customTexture3", customImage3)
            .add("customTexture4", customImage4)
            .add("customTexture5", customImage5)
            .add("customTexture6", customImage6)
            .add("customTexture7", customImage7)
            .add("customTexture8", customImage8)
            .add("customTexture9", customImage9)
            .add("arrowTexture", arrowButton)
        this.pixi.loader.load(() => this.doneLoading())
        // this.pixi.ticker.add((delta) => this.update())

        texturesPersonalisationLoader = this.pixi.loader
    }

    doneLoading() {
        
        if (localStorage.getItem('chosenAvatar') !== null) {
            
            let localStorageAvatar = localStorage.getItem('chosenAvatar')!;
            
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources[localStorageAvatar].texture!)
            customCharacter.currentSprite = localStorageAvatar;
        } else {
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture0"].texture!)
            customCharacter.currentSprite = "customTexture0";
        }


        arrowButtonCode = new button(this.pixi, this.pixi.loader.resources["arrowTexture"].texture!)
        arrowButtonCode.interactive = true
        arrowButtonCode.buttonMode = true
        arrowButtonCode.on('pointerdown', () => this.onClick())
        }

    onClick() {
        if (customCharacter.currentSprite == "customTexture0") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture1"].texture!)
            customCharacter.currentSprite = "customTexture1";

            localStorage.setItem('chosenAvatar', 'customTexture1')

        } else if (customCharacter.currentSprite == "customTexture1") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture2"].texture!)
            customCharacter.currentSprite = "customTexture2";

            localStorage.setItem('chosenAvatar', 'customTexture2')

        } else if (customCharacter.currentSprite == "customTexture2") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture3"].texture!)
            customCharacter.currentSprite = "customTexture3";

            localStorage.setItem('chosenAvatar', 'customTexture3')

        } else if (customCharacter.currentSprite == "customTexture3") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture4"].texture!)
            customCharacter.currentSprite = "customTexture4";

            localStorage.setItem('chosenAvatar', 'customTexture4')

        } else if (customCharacter.currentSprite == "customTexture4") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture5"].texture!)
            customCharacter.currentSprite = "customTexture5";

            localStorage.setItem('chosenAvatar', 'customTexture5')

        } else if (customCharacter.currentSprite == "customTexture5") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture6"].texture!)
            customCharacter.currentSprite = "customTexture6";

            localStorage.setItem('chosenAvatar', 'customTexture6')

        } else if (customCharacter.currentSprite == "customTexture6") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture7"].texture!)
            customCharacter.currentSprite = "customTexture7";

            localStorage.setItem('chosenAvatar', 'customTexture7')

        } else if (customCharacter.currentSprite == "customTexture7") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture8"].texture!)
            customCharacter.currentSprite = "customTexture8";

            localStorage.setItem('chosenAvatar', 'customTexture8')

        } else if (customCharacter.currentSprite == "customTexture8") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture9"].texture!)
            customCharacter.currentSprite = "customTexture9";

            localStorage.setItem('chosenAvatar', 'customTexture9')

        } else if (customCharacter.currentSprite == "customTexture9") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture0"].texture!)
            customCharacter.currentSprite = "customTexture0";
            

            localStorage.setItem('chosenAvatar', 'customTexture0')

        }
    }
}

let game = new Game()