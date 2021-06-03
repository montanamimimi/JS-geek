"use strict";


let game = {
    run() {

        let right = 0;

        for (let i = 0; i < allQuestions.length; i++) {

            let answer = allQuestions[i].ask();

            if (answer == "отмена" || answer == "Отмена") {
                console.log("Игра окончена");
                return;
            }
            if (allQuestions[i].checkAnswer(answer)) {
                right++;
            }
        }
        
        console.log("Праивльных ответов - " + right + " из " + allQuestions.length);
        console.log("Введите game.run(), чтобы играть снова");
        return;

    },

    init() {
        console.log('Игра "Кто хочет стать миллионером!" Вы готовы?');
        renderer.render();
        console.log("Чтобы начать введите game.run() и нажмите Enter");
    }
};

game.init();



