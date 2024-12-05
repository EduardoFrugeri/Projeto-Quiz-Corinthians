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

    respostaCerta.addEventListener('click', function aumentarponto1(){

        respostaCerta.classList.add('certoativo')
        respostaCerta.classList.remove('respostas')
        


    if (pontos < 1){
    pontos += 1
    document.getElementById('pontonumero').innerHTML = pontos
    }else {
        pontos = 1
    }

   /* document.getElementById('certo').style.backgroundColor = '#7dff4a71'
    document.querySelector('#certo1').style.backgroundColor = 'rgba(0, 0, 0, 0.774)' */

    
    respostaErrada1.classList.remove('respostas')
    respostaErrada2.classList.remove('respostas')
    respostaErrada3.classList.remove('respostas')
 

    respostaErrada1.classList.add('erradoativo')
    respostaErrada2.classList.add('erradoativo')
    respostaErrada3.classList.add('erradoativo')

    spanErrado1.classList.add('spansemhover')
    spanErrado2.classList.add('spansemhover')
    spanErrado3.classList.add('spansemhover')
    spanCerto.classList.add('spansemhover')

    spanErrado1.classList.remove('Letra')
    spanErrado2.classList.remove('Letra')
    spanErrado3.classList.remove('Letra')
    spanCerto.classList.remove('Letra')

})

respostaErrada1.addEventListener('click', function perdeu1()
{

    respostaCerta.addEventListener('click', function clickcerto(){
        respostaCerta.classList.remove('certoativo')
        respostaCerta.classList.add('certoativo')

        
        respostaErrada2.classList.remove('erradoativo')
        respostaErrada3.classList.remove('erradoativo')
    
        respostaErrada2.classList.add('RESsemhove')
        respostaErrada3.classList.add('RESsemhove')

        if (pontos = 1){
            pontos -= 1
            document.getElementById('pontonumero').innerHTML = pontos
            }else {
                pontos = 0
            }


        
    })

    respostaErrada1.classList.remove('respostas')
    respostaErrada2.classList.remove('respostas')
    respostaErrada3.classList.remove('respostas')
    respostaCerta.classList.remove('respostas')
    
    respostaErrada1.classList.add('erradoativo')
    respostaErrada2.classList.add('RESsemhove')
    respostaErrada3.classList.add('RESsemhove')
    respostaCerta.classList.add('certoativo')
    
    
    
    spanErrado1.classList.add('spansemhover')
    spanErrado2.classList.add('spansemhover')
    spanErrado3.classList.add('spansemhover')
    spanCerto.classList.add('spansemhover')
    

    spanErrado1.classList.remove('Letra')
    spanErrado2.classList.remove('Letra')
    spanErrado3.classList.remove('Letra')
    spanCerto.classList.remove('Letra')



})

respostaErrada2.addEventListener('click', function perdeu2()
{


    respostaErrada1.addEventListener('click', function clickerrado1(){

        respostaErrada1.classList.add('RESsemhove')
        respostaErrada1.classList.remove('erradoativo')
        clickcerto()

        
        
    })    

    respostaCerta.addEventListener('click', function clickcerto(){
        respostaCerta.classList.remove('certoativo')
        respostaCerta.classList.add('certoativo')

        
        respostaErrada1.classList.remove('erradoativo')
        respostaErrada3.classList.remove('erradoativo')
    
        respostaErrada1.classList.add('RESsemhove')
        respostaErrada3.classList.add('RESsemhove')

        if (pontos = 1){
            pontos -= 1
            document.getElementById('pontonumero').innerHTML = pontos
            }else {
                pontos = 0
            }


            
        
    })

    respostaErrada1.classList.remove('respostas')
    respostaErrada2.classList.remove('respostas')
    respostaErrada3.classList.remove('respostas')
    respostaCerta.classList.remove('respostas')
    
    respostaErrada2.classList.add('erradoativo')
    respostaErrada1.classList.add('RESsemhove')
    respostaErrada3.classList.add('RESsemhove')
    respostaCerta.classList.add('certoativo')
    
    
    
    spanErrado1.classList.add('spansemhover')
    spanErrado2.classList.add('spansemhover')
    spanErrado3.classList.add('spansemhover')
    spanCerto.classList.add('spansemhover')
    

    spanErrado1.classList.remove('Letra')
    spanErrado2.classList.remove('Letra')
    spanErrado3.classList.remove('Letra')
    spanCerto.classList.remove('Letra')



})
