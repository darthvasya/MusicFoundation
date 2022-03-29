$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu,.header').toggleClass('active');
        $('body').toggleClass('lock');
    })
     
    var windowHeight = $(window).height();
    let isQuoteAnimated = false;

    $(document).on('scroll', function() {
        $('.block-number').each(function() {
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

    // custom select
    $('.select').each(function() {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450; // длительность анимации 
    
        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);
    
        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);
    
        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
        }
    
        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function() {
            if ( !$(this).hasClass('on') ) {
                $(this).addClass('on');
                selectList.slideDown(duration);
    
                selectItem.on('click', function() {
                    let chooseItem = $(this).data('value');
    
                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text( $(this).find('span').text() );
    
                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });
    
            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });
    // custom select end
    AOS.init({once: true});
});
