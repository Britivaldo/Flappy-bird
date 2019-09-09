function Sprite(x, y, largura, altura){
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.desenha = function(xCanvas, yCanvas){
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
        
    }

    this.desenha0 = function(xCanvas, yCanvas, altura){
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, altura);
    }

}


var bg = new Sprite(0, 0, 400, 600), spriteBoneco = [];
spriteBoneco[0] = new Sprite(450.6, 30, 45, 30);
spriteBoneco[1] = new Sprite(520, 29, 45, 30);
spriteBoneco[2] = new Sprite(585, 30, 45, 30);
var spriteGameOver = new Sprite(400.5, 500, 370, 90),
spriteChao = new Sprite(0, 653, 400, 102),
spriteAcima = new Sprite(455, 90, 54, 366),
spriteBaixo = new Sprite(557, 82, 54, 361),

spritePlay = new Sprite(420, 610, 210, 170);