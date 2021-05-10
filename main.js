$(function(){
    //Variables
    var kolejka = true;
    var znaki = new Array(9);

    $('input[type=button]').even().val('');
    $('input[type=button]').odd().val('  ');
    $('input[id=b5]').val('   ');

    //Pobranie i wyświetelnie imion graczy
    //Pierwszy gracz
    var playerOneName = localStorage.getItem('playerOneName');
    var playerOneMark = localStorage.getItem('playerOneMark');

    //Drugi gracz
    var playerTwoName = localStorage.getItem('playerTwoName');
    var playerTwoMark = localStorage.getItem('playerTwoMark');

    //Wyswietlenie pobranych danych 
    $('span#playerName').text(playerOneName);
    $('span.choosenEl').text(playerOneMark);
    $('span#playerName2').text(playerTwoName);
    $('span.choosenEl2').text(playerTwoMark);

    localStorage.removeItem('playerOneName');
    localStorage.removeItem('playerOneMark');
    localStorage.removeItem('playerTwoName');
    localStorage.removeItem('playerTwoMark');

    //Funkcje!

    //wstawianie znakow na mapę
    function Wstaw(){

        if($(this).val() === ''){
            switch(kolejka){
                case true:
                    $(this).val('X');
                    kolejka = !true;
                    break;
                case false:
                    $(this).val('O');
                    kolejka = true;
                    break;
            }
        } else if($(this).val() === '  '){
            switch(kolejka){
                case true:
                    $(this).val('X');
                    kolejka = !true;
                    break;
                case false:
                        $(this).val('O');
                    kolejka = true;
                    break;
                }
        } else if($(this).val() === '   '){
            switch(kolejka){
                case true:
                    $(this).val('X');
                    kolejka = !true;
                    break;
                case false:
                        $(this).val('O');
                    kolejka = true;
                    break;
                }
        }
        Check();
    };
    //spr czy ktos wygrał
    function Check(){
        $('input[type=button]').each(
            function(index){
                znaki.fill($(this).val(), index);
            });

        var poziom;
        for(var i = 0; i <= 6; i++){
            poziom = (i == 0) || (i == 3) || (i == 6);
            pion = (i == 1) || (i == 2);
            
            if(poziom){

                if(znaki[i] == znaki[i+1]){
                    if(znaki[i+1] == znaki[i+2]){
                        alert('Wygrana!');
                        $('input[type=button]').attr('disabled', true);
                    }

                } else if(znaki[i] == znaki[4]){                    
                    if(znaki[4] == znaki[8]){
                        alert('Wygrana!');
                        $('input[type=button]').attr('disabled', true);
                } 

                } else if (znaki[i] == znaki[i+3]){
                        if(znaki[i+3] == znaki[i+6]){
                            alert('Wygrana!');
                            $('input[type=button]').attr('disabled', true);
                        }
                }

            } else if(pion) {

                if(znaki[i] == znaki[i+3]){
                    if(znaki[i+3] == znaki[i+6]){
                        alert('Wygrana!');
                        $('input[type=button]').attr('disabled', true);
                    }

                } else if(i == 2){
                    if(znaki[i] == znaki[4]){
                        if(znaki[4] == znaki[6]){
                            alert('Wygrana!');
                            $('input[type=button]').attr('disabled', true);
                        }
                    }
                }
            }
        }
    };

    $('input[type=button]').on(
        'click',
        Wstaw);
    
    $('input[type=reset]').on(
        'click',
        function(){
            $('input[type=button]').even().val('').attr('disabled', false);
            $('input[type=button]').odd().val('  ').attr('disabled', false);
            $('input[id=b5]').val('   ').attr('disabled', false);
        });        

});