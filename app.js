(function () {
    const inputElm = document.querySelector("#input");
    const formElm = document.querySelector("form");
    const showResult = document.querySelector(".show-result");
    const rightGuessElm = document.querySelector(".right-guess");
    const wrongGuessElm = document.querySelector(".wrong-guess");
    const buttonElm = document.querySelector(".btnElm");
    const resetBtn = document.querySelector(".reset-button");

    let inputNum = 0
    let rightNum = 0;
    let wrongNum = 0;
    let limitChances = 0;

    formElm.addEventListener("submit", (e) => {
        e.preventDefault();
        inputNum = Number(inputElm.value);
        inputElm.value = "";

        let randomNumber = generateRandomNumber();

        // check right or wrong
        checkValidation(randomNumber, inputNum);
        // limit chances
        limitChances = limitChances + 1;
        limitChancesRange(limitChances);
    });

    // generate random number
    function generateRandomNumber() {
        return Math.ceil(Math.random() * 9);
    }

    function checkValidation(randomNumber, inputNum) {
        if (inputNum === randomNumber) {
            showResult.insertAdjacentHTML('afterbegin', "<p class='msg'>Wow!! Great</p>")
            rightNum = rightNum + 1;
            rightGuessElm.textContent = rightNum;
        }
        else {
            showResult.insertAdjacentHTML('afterbegin', `<p class='msg'>Sorry!! It was ${randomNumber}</p>`)
            wrongNum = wrongNum + 1;
            wrongGuessElm.textContent = wrongNum;
        }
    }

    function limitChancesRange(limitChances) {
        if (limitChances === 5) {
            buttonElm.setAttribute('disabled', 'disabled')
            showResult.insertAdjacentHTML('afterbegin', "Game End")
        }
    }

    /// reset all
    resetBtn.addEventListener('click', () => {
        inputNum = 0
        rightNum = 0;
        wrongNum = 0;
        limitChances = 0;

        rightGuessElm.textContent = 0;
        wrongGuessElm.textContent = 0;

        buttonElm.removeAttribute('disabled')
        if (document.querySelector(".msg")) {
            showResult.innerHTML = ""
        }
    })
})();