$(document).ready(function() {

    // burger
    $('.header__burger').click(function(event) {
        $('.line').each(function(i, el) {
            let self = $(this);
            self.removeClass('animate');
        });

        $('.header__list li').each(function(i, el) {
            let self = $(this);
            self.removeClass('animate');
        });

        if (event.target.classList.contains('active')) {
            $('body').removeClass('lock');

            document.querySelector('.header__burger').classList.remove('active');
            document.querySelector('.header__menu').classList.remove('active');
            document.querySelector('.header').classList.remove('active');

            document.querySelectorAll('.line').forEach((elem) => {
                elem.classList.remove('animate')
            })

            document.querySelectorAll('.header__list li').forEach((elem) => {
                elem.classList.remove('animate')
            })

            var id = window.setTimeout(function() {}, 0);

            while (id--) {
                window.clearTimeout(id); // will do nothing if no timeout with id is present
            }
        } else {
            $('body').addClass('lock');

            document.querySelector('.header__burger').classList.add('active');
            document.querySelector('.header__menu').classList.add('active');
            document.querySelector('.header').classList.add('active');
            $('.header__body').removeClass('show');

            const animateHr = (el) => {
                el.addClass('animate');
            }
            $('.line').each(function(i, el) {
                let self = $(this);

                setTimeout(function(){
                    animateHr(self);
                }, 200 * ++i)

            });

            const animateText = (el) => {
                el.addClass('animate');
            }
            $('.header__list li').each(function(i, el) {
                let self = $(this);

                setTimeout(function(){
                    animateText(self);
                }, 200 * ++i)

            });
        }
    })
    // end burger

    // loader
    gsap.registerPlugin();

    setTimeout(transition, 0);

    $('.js-trigger-transition').on('click', function(e) {
        const href =  e.currentTarget.href;
        e.preventDefault();
        transitionClose(href);
    });

    // function transition() {
    //     var tl = gsap.timeline();

    //     tl.to('.body-before', 0.2, {top: '0%' , ease: Power2.easeOut}, '+=1.5', 'open')
    //     tl.to('.body-after', 0.2, {bottom: '0%', ease: Power2.easeOut}, '-=0.2', 'open')
    //     tl.to($('.loader'), 0.2, {opacity: 0}, '-=0.2');
    //     tl.to($('body'), 0.2, {overflow: "auto"}, '-=0.2');

    // }
    function transition() {
        $('html').scrollTop(0);
        var tl = gsap.timeline();
        tl.to($('.loader'), 0.1, {opacity: 1, ease: Power1.easeOut}, '+=0', 'open');
        tl.to('.body-before', 0.5, {top: '0%' , ease: Power1.easeOut}, '+=0.5', 'open') // ease: Expo.easeOut
        tl.to($('.loader'), 0.1, {opacity: 0, "z-index": 0}, '-=0.4');
        tl.to($('body'), 0.1, {overflow: "auto"}, '-=0.1');
    }

    // function transitionClose(href) {
    //     var tl = gsap.timeline();

    //     tl.to('body', 0.2, {overflow: "hidden"}, 'close')
    //     tl.to('.body-before', {top: '51%', ease: Power2.easeOut}, 'close')
    //     tl.to('.body-after', {bottom: '51%', ease: Power2.easeOut}, 'close')


    //     if(href) {
    //         setTimeout(() => {
    //             window.location.href = href
    //         }, 400);
    //     }
    // }

    function transitionClose(href) {
        var tl = gsap.timeline();

        tl.to('body', 0.1, {overflow: "hidden"}, 'close')
        tl.to('.body-before', {top: '102%', ease: Power1.easeOut}, 'close') // ease: Expo.easeOut

        if(href) {
            setTimeout(() => {
                window.location.href = href
            }, 400);
        }
    }
    // end loader

    var windowHeight = $(window).height();
    let isQuoteAnimated = false;
    let scrollPos = 0;

    $(document).on('scroll', function() {
        $('.block-number').each(function() {
            let self = $(this),
            height = self.offset().top + (self.height() * 0,9);

            if ($(document).scrollTop() + windowHeight >= height) {
                let counters = document.querySelectorAll(".value-number");
                let countersSmall = document.querySelectorAll(".value-number-small");
                const speed = 2000;


                function commify(n) {
                    let parts = n.toString().split(".");
                    const numberPart = parts[0];
                    const decimalPart = parts[1];
                    const thousands = /\B(?=(\d{3})+(?!\d))/g;
                    return numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "");
                }

                counters.forEach((counter) => {
                    const animate = () => {
                        const value = +counter.getAttribute("akhi");
                        const data = +(counter.innerText.split(',').join('').split('.').join(''));

                        const time = value / speed;
                        if (data < value) {
                            let num = Math.ceil(data + time)
                            counter.innerText = commify(Math.ceil(data + time));
                            setTimeout(animate, 1);
                        } else {
                            counter.innerText = commify(value);
                        }
                    };

                    animate();
                });

                countersSmall.forEach((counter) => {
                    const animate = () => {
                        const value = +counter.getAttribute("akhi");
                        const data = +counter.innerText;

                        const time = value / speed;
                        if (data < value) {
                            counter.innerText = Math.ceil(data + time);
                            setTimeout(animate, 5000);
                        } else {
                            counter.innerText = value;
                        }
                    };

                    animate();
                });
            }
        });
        $('.animate-container, .quote__title').each(function() {
            let self = $(this),
            height = self.offset().top + (self.height() * 0,9);

            if ($(document).scrollTop() + windowHeight >= height) {
                if (self.attr("class") === "quote__title") {
                    // let quote = document.querySelector(".quote__title");
                    // let i = 0;
                    // let txt = self.attr('data-text'); /* ?????????? */
                    // let speed = 20; /* ????????????????/???????????????????????? ?????????????? ?? ?????????????????????????? */
                    //
                    // function typeWriter() {
                    //     if (i < txt.length) {
                    //         quote.innerHTML += txt.charAt(i);
                    //         i++;
                    //         setTimeout(typeWriter, speed);
                    //     }
                    // }
                    // if (!isQuoteAnimated) {
                    //     typeWriter();
                    //     isQuoteAnimated = true;
                    // }
                } else {
                    self.addClass('show');
                }
            }
        });
        $('.divider').each(function() {
            let self = $(this),
                height = self.offset().top + (self.height() * 0,9);

            if ($(document).scrollTop() + windowHeight >= height) {
                self.addClass('divider-grow');
            }
        });

        // animate header height

        let st = $(this).scrollTop();

        if ($(window).width() < 768) {
            if (st > scrollPos) {
            if (st > 300) {
            $('.header__body').removeClass('show');
            $('.header__body').addClass('hide');
            }
            } else {
                const lock = document.querySelector('.lock');
                if (!lock) {
                    $('.header__body').removeClass('hide');
                    $('.header__body').addClass('show');
                }

            }
            scrollPos = st;
        }

        $('.divider-min').each(function() {
            let self = $(this),
                height = self.offset().top + (self.height() * 0,9);


            if ($(document).scrollTop() + windowHeight >= height) {
                self.addClass('divider-grow');
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
            duration = 450; // ???????????????????????? ????????????????

        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:selected').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.new-select__list');
        for (let i = 0; i < selectOptionLength; i++) {
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

                let selectHeading = document.querySelector('.new-select');

                if (document.querySelector('.select').closest('form')) {
                    if (selectHeading.innerText !== 'Reason') {
                        selectHeading.innerText = 'Reason';
                    }
                } else {
                    selectHeading.innerText = 'YEAR';
                }

                let options = document.querySelectorAll('.new-select__item');

                selectItem.on('click', function(e) {
                    let chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text( $(this).find('span').text() );

                    selectList.slideUp(duration);
                    selectHead.addClass('active-head');
                    selectHead.removeClass('on');

                    document.querySelectorAll('option').forEach((elem) => {
                        elem.removeAttribute('selected');
                    })

                    document.querySelectorAll('option').forEach((elem) => {
                        if (elem.innerText === e.target.innerText) {
                            elem.setAttribute('selected', '');
                        }
                    })

                    let optionCurrent = document.querySelector('.new-select');
                    let options = document.querySelectorAll('.new-select__item');
                    // let optionsDropdown = document.querySelectorAll('.new-select__item');

                    options.forEach((elem, index) => {
                        elem.classList.remove('new-select__item-active');
                    })

                    options.forEach((elem, index) => {
                        if (elem.firstChild.innerText === optionCurrent.innerText) {
                            elem.classList.add('new-select__item-active');
                        }
                    })
                });

                // start unhover behavior
                document.querySelector('body').addEventListener('mouseover', (e) => {
                    if (e.target.classList.contains('projects') || e.target.classList.contains('container') || e.target.classList.contains('projects__body-top') || e.target.tagName === 'IMG' || e.target.tagName === 'FORM' || e.target.classList.contains('feedback-container') || e.target.classList.contains('feedback-textarea') || e.target.classList.contains('feedback-section')) {
                        selectList.slideUp(duration);
                        selectHead.removeClass('on');

                        // console.log(document.querySelector('option[selected]'))
                        if (document.querySelector('.active-head')) {
                            document.querySelector('.active-head').innerText = document.querySelector('option[selected]').innerText;
                        } else {
                            document.querySelector('.new-select').innerText = document.querySelector('option[selected]').innerText;
                        }

                        // selectHead.text($(this).find('span').text() );
                    }
                });
                // end unhover behavior

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });

    });
    // custom select end

    // owl Carousel
    var owl = $('.owl-carousel');

    const callback = (event) => {
        const items = event.item.count;     // Number of items
        const size = event.page.size;      // Number of items per page
        const currentPageContainer = document.querySelector(".projects-page-current");
        const allPagesContainer = document.querySelector(".projects-page-all");
        const prevButton = document.querySelector('#owl-prev');
        const nextButton = document.querySelector('#owl-next');
        const allPages = Math.floor(items / size);
        // const allPages = items;
        const currentPage = event.page.index === -1 ? 1 : event.page.index + 1;
        // const currentPage = event.item.index + 1;
        // const emptySpace = size - ((items % size));

        currentPageContainer.innerHTML = currentPage;
        allPagesContainer.innerHTML = allPages;

        if (currentPage === 1) {
            prevButton.classList.add("disable");
        } else {
            prevButton.classList.remove("disable");
        }

        if (currentPage === allPages) {
            nextButton.classList.add("disable");
        } else {
            nextButton.classList.remove("disable");
        }
    }

    owl.owlCarousel({
        margin: 16,
        responsiveClass:true,
        checkVisible: false,
        onInitialized: callback,
        onResized: callback,
        responsive: {
            0: {
                items: 1,
                slideBy: 1,
            },
            756: {
                items: 3,
                slideBy: 3,
            },
            1000: {
                items: 3,
                slideBy: 3,
            }
        }
    });

    // Go to the next item
    $('.projects__ctrls-next').click(function(e) {
        owl.trigger('next.owl.carousel', [300]);
    })

    // Go to the previous item
    $('.projects__ctrls-prev').click(function(e) {
        owl.trigger('prev.owl.carousel', [300]);
    })

    $('.owl-carousel').on('changed.owl.carousel', function(event) {
        callback(event);
    });

    // owl Carousel end
    AOS.init({once: true, duration: 300});


    // Validation email in footer and validate for for involved

    const subscribeButton = document.getElementById("subscribeButton");
    const involvedSubmitButton = document.getElementById("involvedSubmitButton");
    const inputEmail = document.getElementById("inputEmail");
    const involvedInputEmail = document.getElementById("involvedInputEmail");
    const involvedInputName = document.getElementById("involvedInputName");
    const involvedInputMessage = document.getElementById("involvedInputMessage");
    const successText = document.getElementById("successText");
    const subscribeButtonLink =  document.getElementById("subscribeButtonLink");

    subscribeButtonLink.addEventListener("click", (event) => {
        event.preventDefault()
    });

    inputEmail.addEventListener("input", () => {
        removeErrorClass(inputEmail)
    })

    if (involvedInputName && involvedInputEmail && involvedInputMessage && involvedSubmitButton) {
        involvedInputName.addEventListener("input", () => {
            removeErrorClass(involvedInputName)
        })

        involvedInputEmail.addEventListener("input", () => {
            removeErrorClass(involvedInputEmail)
        })

        involvedInputMessage.addEventListener("input", () => {
            removeErrorClass(involvedInputMessage)
        })

        involvedSubmitButton.addEventListener("click", (event) => {
            event.preventDefault();


            if (isUnValidEmail(involvedInputEmail)) {
                involvedInputEmail.classList.add('error');
            }

            if (!involvedInputName.value) {
                involvedInputName.classList.add('error');
            }

            if (!involvedInputMessage.value) {
                involvedInputMessage.classList.add('error');
            }

            if (involvedInputName.value && involvedInputMessage.value && !isUnValidEmail(involvedInputEmail)) {
                involvedInputEmail.classList.remove('error');

                alert('Submitted');
            }
        })
    }

    const removeErrorClass = (element) => {
        if (element.classList.contains("error")) {
            element.classList.remove("error");
        }
    }

    subscribeButton.addEventListener("click", () => {
        if (isUnValidEmail(inputEmail)) {
            inputEmail.classList.add('error')
        } else {
            inputEmail.classList.remove('error')

            successText.classList.remove("hide");
            setTimeout(() => {
                successText.classList.add("hide");
            }, 5000)
        }
    })

    const isUnValidEmail = (input) => {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});


