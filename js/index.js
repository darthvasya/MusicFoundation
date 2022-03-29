$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu,.header').toggleClass('active');
        $('body').toggleClass('lock');
    })
     
    var windowHeight = $(window).height();
    let isQuoteAnimated = false;

    $(document).on('scroll', function() {
        $('.block').each(function() {
            let self = $(this),
            height = self.offset().top + (self.height() * 0,9);

            if ($(document).scrollTop() + windowHeight >= height) {
                let counters = document.querySelectorAll(".value-number");
                const speed = 2000;
            
                counters.forEach((counter) => {
                    

                    const animate = () => {
                        const value = +counter.getAttribute("akhi");
                        const data = +counter.innerText;

                        const time = value / speed;
                        if (data < value) {
                        counter.innerText = Math.ceil(data + time);
                        setTimeout(animate, 1);
                        } else {
                        counter.innerText = value;
                        }
                    };
                
                    animate();
                });
            }
        });
        $('.animate-img, .animate-secondary-img, .quote__title').each(function() {
            let self = $(this),
            height = self.offset().top + (self.height() * 0,9);
            
            if ($(document).scrollTop() + windowHeight >= height) {
                if (self.attr("class") === "quote__title") {
                    let quote = document.querySelector(".quote__title");
                    let i = 0;
                    let txt = self.attr('data-text'); /* Текст */
                    let speed = 20; /* Скорость/длительность эффекта в миллисекундах */

                    function typeWriter() {
                        if (i < txt.length) {
                            quote.innerHTML += txt.charAt(i);
                            i++;
                            setTimeout(typeWriter, speed);
                        }
                    }
                    if (!isQuoteAnimated) {
                        typeWriter();
                        isQuoteAnimated = true;
                    }
                } else {
                    self.addClass('show');
                }
            }
        });
    });
    $('.animate-img, .animate-secondary-img').each(function() {
        let self = $(this),
        height = self.offset().top + (self.height() * 0,9);
        
        if ($(document).scrollTop() + windowHeight >= height) {
            self.addClass('show');
        }
    });
  
    AOS.init({once: true});
});
