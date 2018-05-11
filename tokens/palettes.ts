export const grayscale = {    
    white: "#FFF",
    black: "#000",
    lightest: "rgb(240, 240, 240)",
    lighter: "#f6f6f6",
    light: "#d7d7d7",
    medium: "#a1a1a1",
    heavy: "#6c6c6c",
    heavier: "#3f3f3f",
    heaviest: ""
};

export const colour: { [index: string]: string } = {
    indigo: "#264653",
    green: "#2a9d8f",
    yellow: "#e9c46a",
    sand: "#f4a261",
    red: "#e76f51",
    skin: "#f9ab9d",
    pink: "#f86383",
    purple: "#d164c6",
    grape: "#947dd8",
    blue: "#947dd8",
    forest: "#49da95"
};

const colours: string[] = Object.keys(colour).map(c => colour[c]);

export function randomColour(): string {
    const r = Math.floor(Math.random() * colours.length);
    return colours[r];
}