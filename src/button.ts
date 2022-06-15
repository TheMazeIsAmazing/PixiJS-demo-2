import * as PIXI from 'pixi.js'

export class button extends PIXI.Sprite {

    constructor(game: PIXI.Application, texture : PIXI.Texture) {
        super(texture)
        this.anchor.set(1, 0.5)
        this.scale.set(0.8)
        this.x = game.view.width
        this.y = game.view.height / 2
        game.stage.addChild(this)
    }

    
}