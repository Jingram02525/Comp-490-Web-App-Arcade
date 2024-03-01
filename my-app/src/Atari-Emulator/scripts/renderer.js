class Renderer {
    constructor(scale){
        this.cols = 64;
        this.rows = 32;

        this.canvas = document.querySelector('canvas');
        //Context of the canvas, defines a drawing context of two dimensions
        this.ctx = this.canvas.getContext('2d');
        this.canvas.height = this.rows * this.scale;

        //This Array will act as our display
        this.display = new Array(this.cols * this.rows);
    }

    setPixel(x, y){
        //If a pixel is positioned outside of the bounds of the display,
        //it should wrap around to the opposite side, so we need to account for that. 
        if( x > this.cols){
            x -= this.cols;
        } else if (x < 0) {
            x += this.cols;        
        }

        if( y > this.rows) {
            y -= this.rows;
        } else if ( y < 0) {
            y += this.rows;
        }

        //Calculate the location of the pixel on the display
        let pixelLoc = x + (y * this.cols);

        //bitwise operation, sprites are XORed onto the display
        // ^ <-- XOR operation, toggling to either 0 to 1 or 1 to 0
        //A 1 means a pixel is drawn, a value of 0 means a pixel should be erased.
        //Pretty much we only care if it's 0 or 1 not 1 and 1 or  0 and 0.
        this.display[pixelLoc] ^= 1;

        //pixel is erased if returns true, otherwise nothing was erased.
        return !this.display[pixelLoc];
    }

    //Clear screen
    clear(){
        this.display = new Array(this.cols * this.rows);
    }

    //This will run for 60 times per second.
    render() {
        //Clear the display every render cycle. Typically for a render loop
        this.ctx.clearRect.apply(0,0, this.canvas.width, this.canvas.height);

        //Loop through our display array
        for(let i = 0; i < this.cols * this.rows; i++){
            // Grabs the x position of the pixel based of 'i'
            let x = ( i % this.cols) * this.scale;

            //Grabs the y position of the pixel based off of 'i'
            let y = Math.floor(i / this.cols) * this.scale;

            //If the value at this.display[i] == 1, then draw a pixel.
            if (this.display[i]) {
                //set pixel with hexadecimal color of black
                this.ctx.fillStyle = "#000";

                // Place a pixel at position (x,y) with a width and heigh of scale
                this.ctx.fillRect(x, y, this.scale, this.scale);
            }
        }

    }

    //For testing purposes
    testRender() {
        this.setPixel(0, 0);
        this.setPixel(5,2);
    }


}
export default Renderer;