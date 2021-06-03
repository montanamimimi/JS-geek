"use strict";


let game = {
    run() {

        while(true) {
            const direction = mover.getDirection();
            if (direction === null) {
                console.log("Игра окончена");
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        }

    },

    init() {
        console.log("Вы - буковка О");
        renderer.render();
        console.log("Чтобы начать введите game.run() и нажмите Enter");
    }
};

game.init();



