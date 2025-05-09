const btns = document.querySelectorAll('.question-btn');
const question = document.querySelectorAll('.question');


btns.forEach(function(btn){
    btn.addEventListener('click', function(event){
        const currentQuestion = event.currentTarget.parentElement.parentElement;
        question.forEach(function(e)
    {
        if(e !== currentQuestion){
            e.classList.remove('show-text');
        }
    });
        currentQuestion.classList.toggle('show-text');
    });
});