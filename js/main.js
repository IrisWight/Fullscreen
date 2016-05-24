$(function () {
    var win = $(window),
        body = $('body'),
        scrFunc = function(){
            var scrTop = win.scrollTop(),
                winH = win.height();
            if(scrTop > 0){
                body.addClass('fix-head');
            }else{
                body.removeClass('fix-head');
            }
            $('[data-anim]').each(function(i,anim){
                var offTop = $(anim).offset().top,
                    pos = scrTop + winH*.9;
                if(offTop < pos){
                    $(anim).attr('data-anim', 'true');
                }else{
                    $(anim).attr('data-anim', 'false');
                }
            });
        },
        loadFunc = function(){
            var swiper = new Swiper('.swiper-container', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                //effect: 'flip',
                slidesPerView: 1,
                spaceBetween: 0,
                onInit: function(swiper){
                    var first = $('.swiper-slide').html();

                    $('.info-nav-wrapper .info-text').html(first).addClass('animate');
                    $('.info-nav-wrapper').addClass('animate');
                    $('.social-top').addClass('animate');
                },
                onSlideChangeStart: function (swiper) {
                    var one = $('.swiper-slide-active').html();

                    $('.info-nav-wrapper .info-text').removeClass('animate');
                },
                onSlideChangeEnd: function (mySwipper) {
                    var one = $('.swiper-slide-active').html();

                    $('.info-nav-wrapper .info-text')
                                        .html(one)
                                        .addClass('animate');
                }
            });
            $('.blog-block-list').masonry({
                itemSelector: '.blog-item',
                columnWidth: '.blog-item',
                percentPosition: true
            });

            if($(".js-example-placeholder-single").length){
                $(".js-example-placeholder-single").select2({
                    placeholder: "Способ оплаты",
                    allowClear: true
                });
            }

        };


    $(window)
        .on('load', function(){
            scrFunc();
            loadFunc();
            body.addClass('page-load')
        })
        .on('scroll', function(){
            scrFunc();
        });
    $('.btn-menu').on('click', function(){
       $('header').toggleClass('open-menu');

    });

    //var _form = $('.order-section');
    ////$('#btnSubmit').on('click', function(){
    ////    _form.find('button[type="submit"]').click();
    ////});
    //_form.validate({
    //    rules: {
    //        name: {
    //            required: true,
    //            minlength: 3
    //        },
    //
    //        phone: {
    //            required: true,
    //            minlength: 10,
    //            maxlength: 15,
    //            number: true
    //        }
    //    },
    //    messages: {
    //        name: {
    //            required: "Enter your name",
    //            minlength: "Minimum 3"
    //        },
    //        phone: {
    //            required: "Enter phone",
    //            minlength: "Minimum 10",
    //            maxlength: "Maximum 15",
    //            number: "Enter number"
    //        }
    //    },
    //    submitHandler: function(form) {
    //
    //        $('.form-preloader').show();
    //        _form.find('button').attr('disabled','disabled');
    //        $.post(
    //            '/wp-content/themes/carts-guru/include/test.php',
    //            {test:_form.serializeArray()}
    //        ).done(function (data) {
    //                $.post(
    //                    '/wp-content/themes/carts-guru/include/email.php',
    //                    {test:_form.serializeArray()}
    //                );
    //                setTimeout(function () {
    //                    _form[0].reset();
    //                }, 150);
    //
    //            }).fail(function () {
    //                // window.location.reload(true);
    //            });
    //        return false;
    //    }
    //
    //});
});
