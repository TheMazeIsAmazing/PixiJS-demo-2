import * as PIXI from 'pixi.js'

export class mainCharacterCustomizable extends PIXI.Sprite {
    public currentSprite: string

    constructor(game: PIXI.Application, texture: PIXI.Texture) {
        super(texture)
        this.anchor.set(0.5)
        this.scale.set(0.5)
        this.x = game.view.width / 2
        this.y = game.view.height / 2
        game.stage.addChild(this)
    
    }
}