(function(){
    var words = [
        ' photographer',
        ' artist',
        ' editor',
        ' graphic designer',
        ' student',
        
        ], i = 0;
    setInterval(function(){
        $('#changingword').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 3000);
      
})();

