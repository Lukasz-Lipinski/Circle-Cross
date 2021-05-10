$(function(){
    //Variables
    var oMark = ['X', 'O'];

    function playersData(name, mark){
        this.name = name;
        this.mark = mark;
    };

    //blokowanie opcji na starcie, domylsnie wybrany jest pierwszy gracz
    $('p.secondPlayerName').css('visibility', 'hidden');
    $('input.secondPlayerName').css('visibility', 'hidden');
    
    
    $('input[name=playersAmount]:radio').on(
        'change',
        function(){
            switch($(this).attr('id')){
                case 'one':
                    $('p.secondPlayerName').css('visibility', 'hidden');
                    $('input.secondPlayerName').css('visibility', 'hidden');
                    break;
                case 'two':
                    $('p.secondPlayerName').css('visibility', 'visible');
                    $('input.secondPlayerName').css('visibility', 'visible');
                    break;
                default:
                    break;
            };           
        });

        //losownanie znaku

        function randomMark() {
            var randNum = Math.floor(Math.random() * 2);

            if(oMark[0] === 'O'){
                oMark.reverse();
            }
            if( randNum == 0){
                oMark.reverse();
            }
        }

        $('input[type=submit').on(
            'click',
            function() {
                randomMark();
                switch($('input[name=playersAmount]:radio:checked').attr('id')){
                    case "one":
                        var playerOne = new playersData($('input.fisrtPlayerName').val(), oMark[0]);
                        localStorage.setItem('playerOneName', playerOne.name);
                        localStorage.setItem('playerOneMark', playerOne.mark);
                        break;
                    case "two":
                        var playerOne = new playersData($('input.fisrtPlayerName').val(), oMark[0]);
                        var playerTwo = new playersData($('input.secondPlayerName').val(), oMark[1]);
                        localStorage.setItem('playerOneName', playerOne.name);
                        localStorage.setItem('playerOneMark', playerOne.mark);
                        localStorage.setItem('playerTwoName', playerTwo.name);
                        localStorage.setItem('playerTwoMark', playerTwo.mark);
                        break;
                }
                
            })

})