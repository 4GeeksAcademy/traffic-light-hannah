import { useState } from "react";

function TrafficLight() {
    const [color, setColor] = useState("green");

    return (
        <div className="traffic-light">
            <div onClick={() => setColor("red")}
                className={
                    "red" + (color === "red" ? " glow" : "")
                }></div>
            <div onClick={() => setColor("yellow")}
                className={
                    "yellow" + (color === "yellow" ? " glow" : "")
                }></div>
            <div onClick={() => setColor("green")}
                className={
                    "green" + (color === "green" ? " glow" : "")
                }></div>
        </div>

    );
};

export default TrafficLight