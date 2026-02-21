const lottoNumbersDiv = document.getElementById('lotto-numbers');
const generateButton = document.getElementById('generate-button');
const copyButton = document.getElementById('copy-button');

let generatedNumbers = [];

generateButton.addEventListener('click', () => {
    lottoNumbersDiv.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    generatedNumbers = Array.from(numbers);
    generatedNumbers.forEach(number => {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = number;
        lottoNumbersDiv.appendChild(numberDiv);
    });
});

copyButton.addEventListener('click', () => {
    if (generatedNumbers.length > 0) {
        const numbersString = generatedNumbers.join(', ');
        navigator.clipboard.writeText(numbersString)
            .then(() => alert('로또 번호가 복사되었습니다!'))
            .catch(err => console.error('복사 실패: ', err));
    }
});