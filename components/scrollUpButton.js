        var mybutton = document.getElementById("scrollUpButton");
        window.onscroll = function() {scrollFunction()};        
        function scrollFunction() {
          if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
                function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }
        