"use strict";

let renderer = {
    map: "",

    render() {
        for (let row = 0; row < config.rowsCount; row++) {

            for (let col = 0; col < config.colsCount; col++) {
                if (player.x === col && player.y === row) {
                    this.map += "O ";
                } else {
                    this.map += "x ";
                }
                
            }
            this.map += "\n";
        }
        console.log(this.map);

    },

    clear() {
        console.clear();
        this.map = "";
    }
}