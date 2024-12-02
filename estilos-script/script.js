    var pontos = 0
function aumentarponto1(){
    
    if (pontos < 1){
    pontos += 1
    document.getElementById('pontonumero').innerHTML = pontos
    }else {
        pontos = 1
    }

    document.getElementById('certo').style.backgroundColor = '#7dff4a71'
    document.querySelector('#certo1').style.backgroundColor = 'green'
    document.getElementById('errado1').style.backgroundColor = '#ff2f2f'
    document.getElementById('errado2').style.backgroundColor = '#ff2f2f'
    document.getElementById('errado3').style.backgroundColor = '#ff2f2f'
    
}



function perdeu1(){
    document.getElementById('errado1').style.backgroundColor = '#ff2f2f'
    document.querySelector('#certo').style.backgroundColor = '#7dff4a71'
    document.querySelector('#certo1').style.backgroundColor = 'green'
    document.getElementById('errado1').style.backgroundColor = '#c42014'
    

}
function perdeu2(){
    document.getElementById('errado2').style.backgroundColor = '#ff2f2f'
    document.querySelector('#certo').style.backgroundColor = '#7dff4a71'
    document.querySelector('#certo1').style.backgroundColor = 'green'
    document.getElementById('errado2').style.backgroundColor = '#c42014'
    

}
function perdeu3(){
    document.getElementById('errado3').style.backgroundColor = '#ff2f2f'
    document.querySelector('#certo').style.backgroundColor = '#7dff4a71'
    document.querySelector('#certo1').style.backgroundColor = 'green'
    document.getElementById('errado3').style.backgroundColor = '#c42014'
    

}


//Botão
function mudar() {
      
    document.getElementById('fora').classList.toggle('ativo');

    document.getElementById('dentro').classList.toggle('ativo');

}


function mudarbg(){
    document.querySelectorAll(".Letra").style.backgroundColor = "white"
    document.querySelectorAll(".Letra").style.color = "black"
    document.querySelectorAll(".Letra").style.boxShadow = "inset 0px 0px 20px rgba(0, 0, 0, 0.514)"
}

function desmudarbg(){
    document.querySelectorAll(".Letra").style.backgroundColor = "rgba(0, 0, 0, 0.774)"
    document.querySelectorAll("Letra").style.color = "white"
    document.querySelectorAll(".Letra").style.boxShadow = "none"
}

