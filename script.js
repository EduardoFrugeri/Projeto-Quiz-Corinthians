
    const respostaErrada1 = document.getElementById('errado1');
    const respostaErrada2 = document.getElementById('errado2');
    const respostaErrada3 = document.getElementById('errado3');
    const respostaCerta = document.getElementById('certo');
    
    //span
    const spanErrado1 = document.getElementById('errado1span');
    const spanErrado2 = document.getElementById('errado2span');
    const spanErrado3 = document.getElementById('errado3span');
    const spanCerto = document.getElementById('certo1');

    //resposta
    const respostas = document.querySelector('div.respostas')
    
    
    
    
    
    
    var pontos = 0
function aumentarponto1(){
    document.getElementById('certo').style.transform = 'translate(0px, 0px)'
    
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

    
}

document.querySelector('div.respostas').addEventListener('click', function mouseclick2(){
    const todas = document.querySelectorAll('#errado1, #errado2, #errado3, #certo')
    const todasspan = document.querySelectorAll('#errado1span, #errado2span, #errado3span, #certo1')

    todas.forEach(todasres => {

        todasres.classList.add('RESsemhove')
        todasres.classList.remove('respostas')

    })
    todasspan.forEach(todasspan1 => {
        todasspan1.classList.add('spansemhover')
        todasspan1.classList.remove('Letra')
    })
})

/*se clicar class errado{
    muda class id errado
} */

  /*  document.querySelectorAll('.errado').forEach(errados => {
        function handleClick() {
            // Ativa a classe no elemento com ID "certo"
            document.getElementById('certo').classList.add('certo-ativo');
    
            // Remove o evento de clique de todos os elementos para fixar o estado
            document.querySelectorAll('.errado').forEach(el => el.removeEventListener('click', handleClick));
    
            // Adiciona a classe "errado-ativo" ao botão clicado
            this.classList.add('errado-ativo');
        }
    
        // Adiciona o evento de clique a cada botão
        errados.addEventListener('click', handleClick);
    }); */







function perdeu1(){

    document.getElementById('errado1').style.transform = 'translate(0px, 0px)'

    document.getElementById('errado1').style.backgroundColor = '#ff2f2f'
    document.querySelector('#certo').style.backgroundColor = '#7dff4a71'
    document.querySelector('#certo1').style.backgroundColor = 'rgba(0, 0, 0, 0.774)'
    document.getElementById('errado1span').style.backgroundColor = '#858585110'

    

}
function perdeu2(){
    document.getElementById('errado2').style.transform = 'translate(0px, 0px)'
    document.querySelector('.respostas').style.transform = 'translate(0px, 0px)';
    document.getElementById('errado2').style.backgroundColor = '#ff2f2f'
    document.querySelector('#certo').style.backgroundColor = '#7dff4a71'
    document.querySelector('#certo1').style.backgroundColor = 'rgba(0, 0, 0, 0.774)'
    document.getElementById('errado2span').style.backgroundColor = '#858585110'
    

}
function perdeu3(){
    respostaErrada3.style.color = 'black';
    respostaErrada3.style.boxShadow = '1px 1px 3px rgba(0, 0, 0, 0.445)'
    respostaErrada3.style.transform = 'translate(0px, 0px)'
    respostaErrada3.style.backgroundColor = '#ff2f2f'
    respostaErrada3.style.cursor = 'auto';

    respostas.style.transform = 'translate(0px, 0px)';
    
    respostaCerta.style.backgroundColor = '#7dff4a71'
    document.querySelector('#certo1').style.backgroundColor = 'rgba(0, 0, 0, 0.774)'
    spanErrado3.style.backgroundColor = '#858585110'


    function mouseclick(){
    const mouseclicks = document.querySelectorAll('#errado1, #errado2')

    mouseclicks.forEach(span1 => {
    span1.addEventListener('click', function(){

    

    span1.style.backgroundColor = 'rgba(0, 0, 0, 0.774)'
    span1.style.backgroundColor = 'rgba(241, 241, 241, 0.884)'


})
    
})
}

mouseclick()

function mouseover1(){
    const elementos = [respostaErrada1, respostaErrada2]
    const elemento3 = document.querySelector('.errado3')
    
    
    elementos.forEach(elemento1 => {
        
        elemento1.addEventListener('mouseover', function(){
            elemento1.style.transform = 'translate(0px, 0px)';
            elemento1.style.backgroundColor = 'rgba(241, 241, 241, 0.884)';
            elemento1.style.boxShadow = '1px 1px 3px rgba(0, 0, 0, 0.445)';
            elemento1.style.color = 'black';
            elemento1.style.cursor = 'auto';
            elemento3.style.transform = 'translate(0px, 0px)'
            elemento3.style.boxShadow = '1px 1px 3px rgba(0, 0, 0, 0.445)'
            elemento3.style.color = 'black';
            
        })
        
    })
}
mouseover1();


function mousespan(){


    const elementosspan = [spanErrado1, spanErrado2]
    const elemento3span = document.getElementById('errado3span')
    
    
    elementosspan.forEach(elemento2span => {
        
        elemento2span.addEventListener('mouseover', function(){
            elemento2span.classList.add('spansemhover')
            elemento2span.classList.remove('Letra')

            

            
        })
        elemento3span.classList.add('spansemhover')
        elemento3span.classList.remove('Letra')
    
    })
}
mousespan();






const mouseovercerto = document.getElementById('certo')
mouseovercerto.addEventListener('mouseover', function(){
    
    respostaCerta.style.transform = 'translate(0px, 0px)'

    respostaCerta.style.boxShadow = '1px 1px 3px rgba(0, 0, 0, 0.445)'
    respostaCerta.style.color = 'black'
    respostaCerta.style.cursor = 'auto'
    
    spanCerto.style.backgroundColor = 'rgba(0, 0, 0, 0.774)'
    spanCerto.style.color = 'white'
    spanCerto.style.boxShadow = 'none'
    
})





}

























/*span1.style.backgroundColor = 'rgba(0, 0, 0, 0.774)';
span1.style.color = 'white';
span1.style.boxShadow = 'none'; */











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

