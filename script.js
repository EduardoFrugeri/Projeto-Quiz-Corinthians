    var pontos = 0
function aumentarponto1(){
    
    if (pontos < 1){
    pontos += 1
    document.getElementById('pontonumero').innerHTML = pontos
    }else {
        pontos = 1
    }

    document.getElementById('certo').style.backgroundColor = '#7dff4a71'
    document.querySelector('#certo1').style.backgroundColor = 'rgba(0, 0, 0, 0.774)'
    document.getElementById('errado1').style.backgroundColor = '#ff2f2f'
    document.getElementById('errado2').style.backgroundColor = '#ff2f2f'
    document.getElementById('errado3').style.backgroundColor = '#ff2f2f'

    localStorage.setItem('pontos', pontos);
    
}

document.addEventListener('keydown', function (e) {
    if ((e.key === 'F5') || (e.ctrlKey && e.key === 'r')) {
        e.preventDefault();  // Impede a ação padrão de recarregar
        redirecionarParaIndex(); // Chama a função de redirecionamento
    }
});

// Impede a atualização da página por F5, Ctrl+R, e clicando no botão de recarregar
document.addEventListener('keydown', function (e) {
    if ((e.key === 'F5') || (e.ctrlKey && e.key === 'r')) {
        e.preventDefault();  // Impede a ação padrão de recarregar
        redirecionarParaIndex(); // Chama a função de redirecionamento
    }
});

// Impede o clique direito para acessar o menu de recarregamento
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();  // Impede o menu de contexto (botão direito do mouse)
});

// Exibe uma confirmação quando o usuário tenta sair da página
window.addEventListener('beforeunload', function (e) {
    // Para a maioria dos navegadores modernos, você precisa definir o returnValue
    e.returnValue = '';  // Mensagem de confirmação (não será exibida na maioria dos navegadores)
});

// Função para redirecionar o usuário para o index.html
function redirecionarParaIndex() {
    const confirmation = window.confirm('Você tem certeza que deseja recarregar a página e voltar para o início?');
    
    if (confirmation) {
        // Se clicar "Sim", redireciona para index.html
        window.location.href = 'index.html';
    }
}

function perdeu1(){
    document.getElementById('errado1').style.backgroundColor = '#ff2f2f'
    document.querySelector('#certo').style.backgroundColor = '#7dff4a71'
    document.querySelector('#certo1').style.backgroundColor = 'rgba(0, 0, 0, 0.774)'
    document.getElementById('errado1span').style.backgroundColor = '#858585110'
    

}
function perdeu2(){
    document.getElementById('errado2').style.backgroundColor = '#ff2f2f'
    document.querySelector('#certo').style.backgroundColor = '#7dff4a71'
    document.querySelector('#certo1').style.backgroundColor = 'rgba(0, 0, 0, 0.774)'
    document.getElementById('errado2span').style.backgroundColor = '#858585110'
    

}
function perdeu3(){

    
    document.getElementById('errado3').style.backgroundColor = '#ff2f2f'
    document.querySelector('#certo').style.backgroundColor = '#7dff4a71'
    document.querySelector('#certo1').style.backgroundColor = 'rgba(0, 0, 0, 0.774)'
    document.getElementById('errado3span').style.backgroundColor = '#858585110'

    const mouseclick = document.getElementById('errado1')
    mouseclick.addEventListener('click', function(){
    document.getElementById('errado1span').style.backgroundColor = 'rgba(0, 0, 0, 0.774)'
    document.getElementById('errado1').style.backgroundColor = 'white'


    })

    const mouseover1 = document.getElementById('errado1')
    const span1 = document.getElementById('errado1span')
   


    mouseover1.addEventListener('mouseover', function(){
        mouseover1.style.transform = 'translate(0px, 0px)'
        mouseover1.style.backgroundColor = 'white'
        mouseover1.style.boxShadow = '1px 1px 3px rgba(0, 0, 0, 0.445)'
        mouseover1.style.color = 'black'
        mouseover1.style.cursor = 'auto'

        span1.style.backgroundColor = 'rgba(0, 0, 0, 0.774)'
        span1.style.color = 'white'
        span1.style.boxShadow = 'none'
    })

    mouseover1('errado1', 'errado1span')
    mouseover1('errado2', 'errado2span')
    mouseover1('errado3', 'errado3span')

    const mouseover5 = document.getElementById('certo')
    mouseover5.addEventListener('mouseover', function(){

        document.getElementById('certo').style.transform = 'translate(0px, 0px)'
        
        document.getElementById('certo').style.boxShadow = '1px 1px 3px rgba(0, 0, 0, 0.445)'
        document.getElementById('certo').style.color = 'black'
        document.getElementById('certo').style.cursor = 'auto'

        document.getElementById('certo1').style.backgroundColor = 'rgba(0, 0, 0, 0.774)'
        document.getElementById('certo1').style.color = 'white'
        document.getElementById('certo1').style.boxShadow = 'none'



    })

    



}


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

