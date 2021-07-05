class Gift{
    constructor(x,y,imageName){
        this.sprite =  createSprite(x, y);
        this.sprite.addImage(imageName);
        this.sprite.visible = false;
        this.sprite.scale = 0.3;
    }    
}