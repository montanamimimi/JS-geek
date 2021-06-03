"use strict";

class Questions {
    constructor (question, answers, right) {
        this.question = question;
        this.answers = answers;
        this.right = right;
    }

    ask() {

        while(true) {
            let options = [1,2,3,4];
            let text = "Выберите ответ (введите число) или 'отмена' для выхода.  ";
            text += this.question;
            text += "\n";
            text += "1. " + this.answers[0] + " 2. " + this.answers[1] + " 3. " + this.answers[2] + " 4. " + this.answers[3];
            let userAnswer = prompt(text);

            if (options.includes(+userAnswer) || userAnswer == "отмена" || userAnswer == "Отмена") {
                return userAnswer;
            } else {
                alert("Вы должны ввести число от 1 до 4");
            }
        }

    }

    checkAnswer(userAnswer) {
        if (this.right == userAnswer) {
            alert("Верно! Ответ - " + this.answers[this.right-1]);
            return true;
        } else {
            alert("Нет, правильный ответ - " + this.answers[this.right-1]);
            return false;
        }
    }
}

let question1 = new Questions("Сколько зубов у Горлума?", ["Один", "Два", "Три", "Четыре"], 3);
let question2 = new Questions("Какой IQ у Илона Маска", ["135", "155", "175", "215"], 2);
let question3 = new Questions("На какой свет переходить дорогу", ["Красный", "Желтый", "Зеленый", "Синий"], 3);
let question4 = new Questions("Как починить девятиэтажку?", ["Никак", "Зачем?", "Выпустите меня", "Позвонить геннадию"], 3);
let question5 = new Questions("Самое милое животное это", ["Котик ", "Собачка ", "Хомячок ", "Этих тварей надо истребить"], 1);

// Тут вроде просится что-то более умное, а не ручная работа, но сегодня уже новый вебинар а я еще дз не сдала. Халтурю короче! 

let allQuestions = [question1, question2, question3, question4, question5];






