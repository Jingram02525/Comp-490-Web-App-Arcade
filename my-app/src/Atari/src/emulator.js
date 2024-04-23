//////////////////////Keyboard/////////////////////////////////////////////////////////////////////////////////

class Keyboard {
    constructor() {
        //According documentation this is the layout
    this.keymap = {
            49: 0x1, // 1 1
            50: 0x2, // 2 2
            51: 0x3, // 3 3
            52: 0xc, // 4 C
            81: 0x4, // Q 4
            87: 0x5, // W 5
            69: 0x6, // E 6
            82: 0xD, // R D
            65: 0x7, // A 7
            83: 0x8, // S 8
            68: 0x9, // D 9
            70: 0xE, // F E
            90: 0xA, // Z A
            88: 0x0, // X 0
            67: 0xB, // C B
            86: 0xF  // V F
        };

        //Array holds keystrokes and sets the next keypress to null, for next keypress
        this.keysPressed = [];
        this.onNextKeyPress = null;
        //Keypress event listeners
        window.addEventListener('keydown', this.onKeyDown.bind(this), false);
        window.addEventListener('keyup', this.onKeyUp.bind(this), false);
    }

    //functions for event handlers
    isKeyPressed(keyCode) {
        return this.keysPressed[keyCode];
    }

    onKeyDown(event) {
        let key = this.keymap[event.which];
        this.keysPressed[key] = true;
    
        if (this.onNextKeyPress !== null && key) {
            this.onNextKeyPress(parseInt(key));
            this.onNextKeyPress = null;
        }
    }

    onKeyUp(event) {
        let key = this.keymap[event.which];
        this.keysPressed[key] = false;
    }
}

//////////////////////Monitor/////////////////////////////////////////////////////////////////////////////////

const COLS = 64
const ROWS = 32
const SCALE = 15


class Monitor {
    constructor(canvas, scale){
      this.cols = COLS;
      this.rows = ROWS;
    
      this.display = new Array(this.cols * this.rows);
      for(let i=0; i < this.cols*this.rows; i++)
            this.display[i] = 0;
      
      this.scale = SCALE;
      this.canvas = canvas;
      

      this.canvas.height = this.rows * this.scale;
      this.canvas.width = this.cols * this.scale;

      this.canvasCtx = this.canvas.getContext('2d');

    }//constructor

    //Sets the pixel position of the monitor but also detects collisions and prevents out-of-bounds
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

        //Calculate the 1D location of the pixel on a 2D display
        let pixelLoc = x + (y * this.cols);

        //bitwise operation, sprites are XORed onto the display
        // ^ -- XOR operation, toggling to either 0 to 1 or 1 to 0
        //A 1 means a pixel is drawn, a value of 0 means a pixel should be erased.
        //Pretty much we only care if it's 0 or 1 not 1 and 1 or  0 and 0.
        this.display[pixelLoc] ^= 1;

        //pixel is erased if returns true, otherwise nothing was erased so return false
        return this.display[pixelLoc] != 1;
    }//setPixel

    clear(){
        this.display = new Array(this.rows * this.cols);
        for(let i=0; i < this.cols*this.rows; i++)
            this.display[i] = 0;
    }//clear

    paint(){
        this.canvasCtx.fillStyle = '#000';
        //Clear the display every render cycle. Typically for a render loop
        this.canvasCtx.fillRect(0,0, this.canvas.width, this.canvas.height);

        //Loop through our display array
        for(let i = 0; i < this.cols * this.rows; i++){
            // Grabs the x position of the pixel based of 'i'
            let x = ( i % this.cols) * this.scale;

            //Grabs the y position of the pixel based off of 'i'
            let y = Math.floor(i / this.cols) * this.scale;

            //If the value at this.display[i] == 1, then draw a pixel.
            if (this.display[i] == 1) {
                //set pixel with hexadecimal color of black
                this.canvasCtx.fillStyle = "#FFF";

                // Place a pixel at position (x,y) with a width and heigh of scale
                this.canvasCtx.fillRect(x, y, this.scale, this.scale);
                }
            }
    }//paint 
    //For testing purposes
    testRender() {
    this.setPixel(0, 0);
    this.setPixel(5,2);
    this.paint();
    }

}//Monitor

//////////////////////Speaker/////////////////////////////////////////////////////////////////////////////////
const FREQ = 440;

class Speaker {
    constructor() {
        this.audioCtx = new window.AudioContext();
        this.audioCtx.resume();

        window.addEventListener('click', () => {
            this.audioCtx.resume();
        });
    }
//Function for audio context, resource => https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
    play() {
        if (this.audioCtx && !this.oscillator) {
            this.oscillator = this.audioCtx.createOscillator();
            this.oscillator.frequency.setValueAtTime(FREQ, this.audioCtx.currentTime);
            this.oscillator.type = 'square';
            this.oscillator.connect(this.audioCtx.destination);
            this.oscillator.start();
        }
    }

    stop() {
        if(this.oscillator) {
            this.oscillator.stop();
            this.oscillator.disconnect();
            this.oscillator = null;
        }
    }
}



//////////////////////COMPILER/////////////////////////////////////////////////////////////////////////////////
const MEMORY_SIZE = 4096;
const NUM_REGISTERS = 16;

class Chip8 {
    constructor(monitor,keyboard, speaker) {
   //Helps us get 4,096 bits of memory which is defined in the specification
        this.memory = new Uint8Array(MEMORY_SIZE);
        //All registers are 1byte or 8-bit registers
        this.v = new Uint8Array(NUM_REGISTERS);
       //16 bit index register called I, used to store memory addresses
        this.index = 0;

        //The program counter which should be 16bit, store currently executing address
        //First position
        this.pc = 0x200;

        //16 level stack which is 8-bit
        //Will be using javascript push and pop instructions
        this.stack = [];
 
        // 8-bit Stack pointer
        this.sp = 0;

        //Animation
        this.delayTimer = 0;

        // 8-bit Sound Timer
        this.soundTimer = 0;

        // Keyboard
        this.keyboard = keyboard;
        
        // Monitor
        this.monitor = monitor;

        //Speaker
        this.speaker = speaker;

        this.paused = false;
        this.speed = 10;
    }
    //Default sprites from document
    loadSpritsIntoMemory() {
        // Loop through each byte in sprite array, starting at hex 0x000.
        // Array of hex values for each sprite. Each sprite is 5 bytes.
        // The technical reference provides us with each one of these values.
        // each instruction respresents each row in the documentation sprites table....
        const sprites = [
            0xF0, 0x90, 0x90, 0x90, 0xF0, // 0
            0x20, 0x60, 0x20, 0x20, 0x70, // 1
            0xF0, 0x10, 0xF0, 0x80, 0xF0, // 2
            0xF0, 0x10, 0xF0, 0x10, 0xF0, // 3
            0x90, 0x90, 0xF0, 0x10, 0x10, // 4
            0xF0, 0x80, 0xF0, 0x10, 0xF0, // 5
            0xF0, 0x80, 0xF0, 0x90, 0xF0, // 6
            0xF0, 0x10, 0x20, 0x40, 0x40, // 7
            0xF0, 0x90, 0xF0, 0x90, 0xF0, // 8
            0xF0, 0x90, 0xF0, 0x10, 0xF0, // 9
            0xF0, 0x90, 0xF0, 0x90, 0x90, // A
            0xE0, 0x90, 0xE0, 0x90, 0xE0, // B
            0xF0, 0x80, 0x80, 0x80, 0xF0, // C
            0xE0, 0x90, 0x90, 0x90, 0xE0, // D
            0xF0, 0x80, 0xF0, 0x80, 0xF0, // E
            0xF0, 0x80, 0xF0, 0x80, 0x80  // F
        ];
                // According to the technical reference, sprites are stored in the interpreter section of memory starting at hex 0x000
        for (let i = 0; i < sprites.length; i++) {
            this.memory[i] = sprites[i];
        }
    }

    loadProgramIntoMemory(program) {
        for(let i = 0; i < program.length; i++) {
            this.memory[0x200 + i] = program[i];
        }
    }

  //What is a CPU cycle, for one cycle it will interpret one batch of instructions
    cycle() {
        for(let i=0; i < this.speed; i++) {
            if(!this.paused) {
                let opcode = (this.memory[this.pc] << 8 | this.memory[this.pc + 1]);
                this.interpretInstruction(opcode);
            }
        }
      //After every cycle we need to update timers
        if(!this.paused)
            this.updateTimers();
        this.sound();
        this.monitor.paint();
    }

    updateTimers() {
        if(this.delayTimer > 0)
            this.delayTimer -= 1;
        
        if(this.soundTimer > 0)
            this.soundTimer -= 1;
    }

    sound() {
        if(this.soundTimer > 0)
            this.speaker.play();
        else
            this.speaker.stop();
    }

    interpretInstruction(instruction) {
        //Each instruction is 2byte long
        //To update the instruction 
        this.pc += 2;
        //x is lower 4 bits and y is higher 4 bits of instruction (16bits)
        let x = (instruction & 0x0F00) >> 8;
        let y = (instruction & 0x00F0) >> 4;

        switch(instruction & 0xF000) {
            case 0x0000:
                switch(instruction) {
                    case 0x00E0: 
                        this.monitor.clear(); //CLS, clear monitor
                        break;
                    case 0x0EE:
                        this.pc = this.stack.pop(); // RET, return (May Change this, idk)
                        break;
                }
                break;
            case 0x1000:
                this.pc = instruction & 0xFFF; //JP addr
                break;
            case 0x2000:// CALL addr, get's last 12 bits of instruction
                this.stack.push(this.pc);
                this.pc = instruction & 0xFFF; // CALL addr
                break;
            case 0x3000:
                //If condition but in low level for chip, by comparing values
                //of register x should be equal to last 8 bits of instruction
                if(this.v[x] === (instruction & 0xFF)) // SE Vx, byte
                    this.pc += 2;
                break;
            //Finish other instuctions.....SNE Vx, Vy
            //Remember that each instruction is 2 bytes, that's why we increase by 2
            case 0x4000:
                if(this.v[x] != (instruction & 0xFF)) { // SNE Vx, byte
                    this.pc += 2;
                }
                break;
            case 0x5000:
                if(this.v[x] === this.v[y]) { // SE Vx, Vy
                    this.pc += 2;
                }
                break;
            //Documenation says, set Vx = Vx + kk, so this reflects that...
            case 0x6000:
                this.v[x] = (instruction & 0xFF); // LD Vx, byte
                break;
            case 0x7000:
                this.v[x] += (instruction & 0xFF); // ADD Vx, byte
                break;
            case 0x8000:
                switch (instruction & 0xF) {
                    case 0x0:
                        this.v[x] = this.v[y]; // LD Vx, Vy
                        break;
                    case 0x1:
                        this.v[x] |= this.v[y]; // OR Vx, Vy
                        break;
                    case 0x2:
                        this.v[x] &= this.v[y]; // AND Vx, Vy
                        break;
                    case 0x3:
                        this.v[x] ^= this.v[y]; // XOR Vx, Vy
                        break;
                    //The first case of using a flag, in this case carry flag
                    //0xFF is the maximum one byte can hold and all registers 1 byte long
                    //if overflow we set V15 to 1
                    case 0x4:
                        let sum = (this.v[x] += this.v[y]); // ADD Vx, Vy

                        this.v[0xF] = 0;

                        if(sum > 0xFF)
                            this.v[0xF] = 1;

                        this.v[x] = sum;
                        break;
                        // If it goes below zero, then use the carry flag which
                        //represents underflow in this case....
                    case 0x5:
                        this.v[0xF] = 0;            
                        if(this.v[x] > this.v[y]) // SUB Vx, Vy
                            this.v[0xF] = 1;
                        
                        this.v[x] -= this.v[y];
                        break;
                    case 0x6:
                        this.v[0xF] = this.v[x] & 0x1; // SHR Vx, vy
                        this.v[x] >>= 1;
                        break;
                    case 0x7:
                        this.v[0xF] = 0;       
                        if(this.v[y] > this.v[x]) // SUBN Vx, Vy
                            this.v[0xF] = 1;

                        this.v[x] = this.v[y] - this.v[x];
                        break;
                    case 0xE:
                        this.v[0xF] = this.v[x] & 0x80; // SHL Vx {, Vy}
                        this.v[x] <<= 1;
                        break;
                    default:
                        throw new Error('BAD OPCODE');
                }
                break;
            case 0x9000:
                if(this.v[x] != this.v[y]) // SNE Vx, Vy
                    this.pc += 2;
                break;
            case 0xA000:
                this.index = instruction & 0xFFF; // LD I, addr
                break;
             //Finish other instuctions.....JP V0, addr
            case 0xB000:
                this.pc = (instruction & 0xFFF) + this.v[0]; // JP V0, addr
                break;
            //This is our random instruction, and again comparison by byte
            case 0xC000:
                let rand = Math.floor(Math.random() * 0xFF); // RND Vx, byte
                this.v[x] = rand & (instruction & 0xFF);
                break;
            //We have a register refrence that has stored locatations in a coordinate 
            // of our sprites. Per documenation we only take the last nibble of instruction
            case 0xD000:
                let width = 8; //Accoring to documenation it's 8 bit value
                let height = (instruction & 0xF);
                
                this.v[0xF] = 0;

                for(let row = 0; row < height; row++) {
                    let sprite = this.memory[this.index + row];

                    for(let col = 0; col < width; col++) {
                        if((sprite & 0x80) > 0) {
                            if(this.monitor.setPixel(this.v[x] + col, this.v[y] + row)) {
                                this.v[0xF] = 1;
                            }
                        }
                        sprite <<= 1;
                    }
                }

                break;
            case 0xE000:
                switch (instruction & 0xFF) {
                    case 0x9E:
                        if(this.keyboard.isKeyPressed(this.v[x])) { // SKP Vx
                            this.pc += 2;
                        }
                        break;
                    case 0xA1:
                        if (!this.keyboard.isKeyPressed(this.v[x])) { // SKNP Vx
                            this.pc += 2;
                        }
                        break;
                    default:
                        throw new Error('BAD OPCODE');
                }
        
                break;
            case 0xF000:
                switch(instruction & 0xFF) {
                    case 0x07:
                        this.v[x] = this.delayTimer; // LD Vx, DT
                        break;
                    case 0x0A:
                        this.paused = true; // LD Vx, K

                        let nextKeyPress = (key) => {
                            this.v[x] = key;
                            this.paused = false;
                        };

                        this.keyboard.onNextKeyPress = nextKeyPress.bind(this);
                        break;
                    case 0x15:
                        this.delayTimer = this.v[x]; // LD Dt, Vx
                        break;
                    case 0x18:
                        this.soundTimer = this.v[x]; // LD ST, Vx
                        break;
                    case 0x1E:
                        this.index += this.v[x]; // ADD I, Vx
                        break;
                    case 0x29:
                        this.index = this.v[x] * 5; //  LD F, Vx
                        break;
                    case 0x33:
                        this.memory[this.index] = parseInt(this.v[x] / 100); // LD B, Vx
                        this.memory[this.index + 1] = parseInt((this.v[x]%100)/10);
                        this.memory[this.index + 2] = parseInt(this.v[x]%10);
                        break;
                    case 0x55:
                        for (let ri=0; ri <= x; ri++)  // LD [I], Vx
                            this.memory[this.index + ri] = this.v[ri];
                        break;
                    case 0x65:
                        for(let ri=0; ri <= x; ri++) // LD Vx, [I]
                            this.v[ri] = this.memory[this.index + ri];
                        break;
                    default:
                        throw new Error('0xF BAD OPCODE ' + instruction);
                }
                break;
            default:
                throw new Error('BAD OPCODE');

        }

    }


}

//////////////////////Chip8/////////////////////////////////////////////////////////////////////////////////

let loop, fpsInterval, startTime, now, then, elapsed;
const FPS = 60;


const romSelector = document.getElementById('roms');
romSelector.addEventListener('change', () => {
    const rom = romSelector.options[romSelector.selectedIndex].value;
    console.log(rom);
    loadROM(rom);
});

const reloadButton = document.getElementById('reload');
reloadButton.addEventListener('click', () => {
    console.log("click")
    const rom = romSelector.options[romSelector.selectedIndex].value;
    console.log(rom);
    loadROM(rom);
});

const loadingText = document.getElementById('loading-text');

function loadROM(romName) {
    const monitor = new Monitor(document.getElementById('screen'), 20);
    const keyboard = new Keyboard();
    const speaker = new Speaker();
    const chip8 = new Chip8(monitor, keyboard, speaker);
    window.cancelAnimationFrame(loop);

    function step() {
        now = Date.now();
        elapsed = now - then;
    
        if(elapsed > fpsInterval){
            chip8.cycle();
        }
    
        loop = requestAnimationFrame(step);
        
    }
    const url = `rom/${romName}`;
    reloadButton.disabled = true;
    loadingText.innerHTML = 'Loading ' + romName + ' ... ';

    fetch(url).then(res => res.arrayBuffer())
            .then(buffer => {
                    console.log(buffer.byteLength);
                    const program = new Uint8Array(buffer);
                    fpsInterval = 1000 / FPS;
                    then = Date.now();
                    startTime = then;
                    reloadButton.disabled = false;
                    chip8.loadSpritsIntoMemory();
                    chip8.loadProgramIntoMemory(program);
                    console.log(program);
                    loop = requestAnimationFrame(step);
                    loadingText.innerHTML = 'Playing ' + romName + ' ';
    });
}

loadROM('SPACE-INVADER');


