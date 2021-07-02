let menu = document.getElementById("menu-bar");
let nb = document.getElementById("nb");

menu.addEventListener("click", ()=>{
  menu.classList.toggle('fa-times');
  nb.classList.toggle('nav-toogle')
});

window.addEventListener('scroll', ()=>{
  menu.classList.remove('fa-times');
  nb.classList.remove('nav-toogle')
});

/*******button up****** */

var html, body, scrollToTopButton;
        window.onload = function(){
            html = document.documentElement;
            body = document.body;
            scrollToTopButton = document.getElementById('scrollToTopButton')
        };

        window.onscroll = controlScrollToTopButton;

        function controlScrollToTopButton(){
            var windowInnerHeightX2 = 1*window.innerHeight;
            if(body.scrollTop > windowInnerHeightX2 || html.scrollTop > windowInnerHeightX2){
                scrollToTopButton.classList.add('show');
            }
            else{
                scrollToTopButton.classList.remove('show');
            }
        }

        function scrollToTop(totalTime, easingPower){
            var timeInterval = 1;
            var scrollTop = Math.round(body.scrollTop || html.scrollTop);
            var timeLeft = totalTime;
            var scrollByPixel = setInterval(function(){
                var percentSpent = (totalTime - timeLeft)/totalTime;
                if(timeLeft >= 0){
                    var newScrollTop = scrollTop*(1 - easeInOut(percentSpent, easingPower));
                    body.scrollTop = newScrollTop;
                    html.scrollTop = newScrollTop;
                    timeLeft--;
                }else{
                    clearInterval(scrollByPixel);
                }
            },timeInterval);
        }
        function easeInOut(t, power){
            if(t < 0.5){
                return Math.pow(2*t, power);
            }
            else{
                return 0.5*(2 - Math.pow(2*(1-t),power));
            }
        }
