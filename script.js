// Обработка рекламного баннера
document.addEventListener('DOMContentLoaded', function() {
    const closeAdBtn = document.getElementById('closeAd');
    const adBanner = document.getElementById('adBanner');
    
    // Фейковый крестик - на самом деле не закрывает баннер
    closeAdBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Вместо закрытия открываем рекламу
        window.open('https://example.com/fake-ad', '_blank');
    });
    
    // Для теста можно раскомментировать реальное закрытие
    // closeAdBtn.addEventListener('click', function() {
    //     adBanner.style.display = 'none';
    // });
    
    // Обработка теста (только на странице quiz.html)
    if (document.getElementById('submitQuiz')) {
        const quizForm = document.getElementById('quizForm');
        const submitBtn = document.getElementById('submitQuiz');
        const quizResult = document.getElementById('quizResult');
        const scoreElement = document.getElementById('score');
        const resultText = document.getElementById('resultText');
        
        // Правильные ответы
        const correctAnswers = {
            q1: 'B',
            q2: 'B',
            q3: 'B',
            q4: 'A',
            q5: 'A'
        };
        
        submitBtn.addEventListener('click', function() {
            let score = 0;
            const userAnswers = {};
            
            // Получаем ответы пользователя
            for (let i = 1; i <= 5; i++) {
                const questionName = 'q' + i;
                const selectedOption = quizForm.elements[questionName].value;
                userAnswers[questionName] = selectedOption;
            }
            
            // Проверяем ответы
            for (const question in correctAnswers) {
                if (userAnswers[question] === correctAnswers[question]) {
                    score++;
                }
            }
            
            // Показываем результат
            scoreElement.textContent = score;
            
            // Оценка результата
            if (score === 5) {
                resultText.textContent = 'Отлично! Вы настоящий фанат "Во все тяжкие"!';
            } else if (score >= 3) {
                resultText.textContent = 'Хороший результат! Вы хорошо знаете сериал.';
            } else {
                resultText.textContent = 'Попробуйте пересмотреть сериал!';
            }
            
            // Показываем блок с результатом
            quizResult.classList.remove('hidden');
            
            // Прокручиваем к результату
            quizResult.scrollIntoView({ behavior: 'smooth' });
        });
    }
// Обработка рекламы
document.addEventListener('DOMContentLoaded', function() {
    // Верхний баннер
    document.getElementById('closeAdTop').addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://example.com/fake-ad1', '_blank');
        // Для теста: раскомментируйте, чтобы баннер закрывался
        // document.getElementById('adBannerTop').style.display = 'none';
    });

    // Нижний баннер
    document.getElementById('closeAdBottom').addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://example.com/fake-ad2', '_blank');
        // Для теста: раскомментируйте, чтобы баннер закрывался
        // document.getElementById('adBannerBottom').style.display = 'none';
    });
// Нижний баннер - крестик ничего не делает

});
