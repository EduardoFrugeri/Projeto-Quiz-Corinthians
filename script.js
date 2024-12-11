const respostascontainer = document.querySelector('.container-res')
const textQuestion = document.getElementById('pergunta')



let perguntaatual=1
let respostaatual=1


function nextQuestion() {
    while(respostascontainer.firstChild){
        respostascontainer.removeChild(respostascontainer.firstChild)
    }

    textQuestion.innerHTML= questions[perguntaatual].question
    perguntaatual += 1
    questions[perguntaatual].answers.forEach(answers => )
    const newAnswer = document.createElement('div')
}











const questions = [
    {
    question: 'Qual é o ano de fundação do Corinthians?',
    answers: [
        { text: '1908', correct: false },
        { text: '1910', correct: true },
        { text: '1912', correct: false },
        { text: '1914', correct: false }
    ]
},
{
    question: 'Qual é o apelido mais famoso do Corinthians?',
    answers: [
        { text: 'Timão', correct: false },
        { text: 'Fiel', correct: true },
        { text: 'Gavião', correct: false },
        { text: 'Mosqueteiro', correct: false }
    ]
},

{
    question: 'Em qual estádio o Corinthians manda seus jogos atualmente?',
    answers: [
        { text: 'Morumbi', correct: false },
        { text: 'Arena Corinthians (NQA)', correct: true },
        { text: 'Pacaembu', correct: false },
        { text: 'Canindé', correct: false }
    ]
}
]














































//Botão
function mudar() {
      
    document.getElementById('fora').classList.toggle('ativo');

    document.getElementById('dentro').classList.toggle('ativo');

}


const res = document.querySelector('.respostas')

res.addEventListener('onmouseover', function(){
    document.querySelectorAll(".Letra").style.backgroundColor = "white"
    document.querySelectorAll(".Letra").style.color = "black"
    document.querySelectorAll(".Letra").style.boxShadow = "inset 0px 0px 20px rgba(0, 0, 0, 0.514)"
})

res.addEventListener('onmouseout', function(){
    document.querySelectorAll(".Letra").style.backgroundColor = "rgba(0, 0, 0, 0.774)"
    document.querySelectorAll("Letra").style.color = "white"
    document.querySelectorAll(".Letra").style.boxShadow = "none"
})

