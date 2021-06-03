"use strict";

// у меня нет боковой клавиатуры с цифрами, так что играем на wasd =)


let mover = {
    getDirection() {
        const availableDirections = ["s", "a", "d", "w", "ы", "ф", "в", "ц"];
        while(true) {
            let direction = prompt("Введите направление (клавишами w a s d) или Отмена для выхода");

            if (direction == "Отмена" || direction == "отмена") {
                return null;
            }

            if (!availableDirections.includes(direction)) {
                alert("Используйте клавиши w a s d");
                continue;
            }
            return direction;
             
        }
    },

    getNextPosition(direction) {
         const nextPosition = {
            x: player.x,
            y: player.y
         };

         switch (direction) {
            case "s":
            case "ы":
                nextPosition.y++;
                break;
            case "a":
            case "ф":
                nextPosition.x--;
                break;
            case "d":
            case "в":
                nextPosition.x++;
                break;
            case "w":
            case "ц":
                nextPosition.y--;
                break;
         }

         if ((nextPosition.x >= config.colsCount) || (nextPosition.x < 0) || (nextPosition.y >= config.rowsCount) || (nextPosition.y < 0)) {
            nextPosition.x = player.x;
            nextPosition.y = player.y;
         }


         return nextPosition;
    }
}
