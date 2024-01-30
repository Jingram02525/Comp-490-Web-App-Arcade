import React, { useState } from 'react';
import Emulator from "../components.emulator";
import Emulator from "../components.input-scale";
import Emulator from "../components.instructions";
import Emulator from "../components.toggle-print-fps";

const Main = () => {
    //State to hold memory state
    const [printFps, setPrintFps] = useState(false);
    const [scale, setScale] = useState(1);

    return (
        <div style={{display: 'grid'}}>
            <inputRom />
            <Instructions />
            <TogglePrintFps printFps={printFps} setprintFps={setPrintFps} />
            <Input Scale scale={scale} setScale={setScale} />
            <Emulator scale={scale} printFps={printFps} />
        </div>
    )
}

export default Main;