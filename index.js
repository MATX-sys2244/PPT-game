/*
 0 => pedra
 1 => papel
 2 => tesoura
*/


function jogar(){

    document.getElementById('p1').style.display = 'flex'
    document.getElementById('p2').style.display = 'flex'
    let maquina = NumeroAleatorio(0,2) // variável responsável pelo computador que vai jogar contra o jogddor

    let jogador = document.querySelector('select')

    let jogadorTxt = jogador.options[jogador.selectedIndex].text /* variável responsável por capturar o texto dentro das <options>
    toda explicação se encontra no NOTION.

    */ 

    if( (maquina == 0 && jogador.selectedIndex == 2) ||
        (maquina == 2 && jogador.selectedIndex == 1) ||
        (maquina == 1 && jogador.selectedIndex == 0)){
            document.querySelector('main').style.transition = '1s'
            document.querySelector('main').style.backgroundColor = '#b91010a4'
            document.querySelector('main').style.color = 'white'
            document.querySelector('h4').style.color = 'red'
        resultado('você perdeu ', maquina, `você escolheu (${jogadorTxt})`)
      
            //names()

        } else if (maquina == jogador.selectedIndex) {
            document.querySelector('h4').style.color = 'purple'
            document.querySelector('main').style.backgroundColor = '#503279a1'
            document.querySelector('main').style.transition = '1s'
            document.querySelector('main').style.color = 'white'
            resultado('houve um empate ', maquina , `você escolheu (${jogadorTxt})`)
             
            //names()

             }else{
                document.querySelector('main').style.transition = '1s'
                document.querySelector('main').style.color = 'white'
                document.querySelector('main').style.backgroundColor= '#53913b62'
                document.querySelector('h4').style.color = 'green'
            resultado('vencedor ',maquina , `você escolheu (${jogadorTxt})`)
           
            //names()
        }
}

    function resultado(mensagem, computadorTxt, msg2){
        /*função responsável pelo texto que irá aparecer na tela*/

                const opcoes = [' Pedra', 'Papel', 'Tesoura'] /* criando uma array com as opções que o computador irá escolher 
                */ 
        document.querySelector('h4').innerText = mensagem // referente a mensagem de [perdeu] - [ganhou] ou [empate]

        document.getElementById('p1').innerText = ` o computador escolheu (${opcoes[computadorTxt]})`
         /* referente a mensagem
            revelando qual opção o computador escolheu. */
         document.getElementById('p2').innerText = msg2/* referente a mensagem
         revelando qual opção o jogador escolheu. 
     */
    }

function NumeroAleatorio(min, max){
    //essa função fica responsável por gerar números aleatórios, esses números serão referentes as opções [0, 1, 2]
    //aqui estamos passando 2 parametros => => NumeroAleatorio(min, man)
        return (Math.random() * (max - min) + min).toFixed()
}

    function restart(){
       setTimeout(function pageReload(msg_gbye){ 
        msg_gbye = 'reiniciando o game'
        location.reload()
        alert(msg_gbye)
       }, 1000)}
    
