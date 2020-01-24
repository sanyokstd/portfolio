$(document).ready(function() {
    $('.logo').addClass('active');

    $('.langs a.active').click(function() {
        if ($('.langs a.hiden').css('display') == 'none') {
            $('.langs a.hiden').fadeIn(350);
        } else {
            $('.langs a.hiden').fadeOut(200);
        }

        return false;
    });

    if($(".main-paralax>img").length > 0){
        $(".main-paralax>img").parallax({
                mousemove: $(".parallax-wrapper")
            }, // Options
            {
                xparallax: '86px',
                yparallax: '0',
                xorigin: 0,
                yorigin: 0
            }, // Layer 1
            {
                xparallax: '145px',
                yparallax: '0',
                xorigin: 0,
                yorigin: 0
            }, // Layer 2
            {
                xparallax: '30px',
                yparallax: '0',
                xorigin: 0,
                yorigin: 0
            }, // Layer 3
            {
                xparallax: '110px',
                yparallax: '0',
                xorigin: 0,
                yorigin: 0
            }, // Layer 4
            {
                xparallax: '50px',
                yparallax: '0',
                xorigin: 0,
                yorigin: 0
            }, // Layer 5
            {
                xparallax: '200px',
                yparallax: '0',
                xorigin: 0,
                yorigin: 0
            } // Layer 6
        );
    }
    
    
    if($('.owl-carousel.main-slider').length != 0){
        var owl = $('.owl-carousel.main-slider').owlCarousel({
            center: true,
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplaySpeed: 1200,
            autoplayHoverPause: true,
            nav: true,
            pagination: false,
            dotData: false,
            navSpeed: 1200,
            onInitialized: function(e) {
                $('.slider-counter').text('1/' + this.items().length);
            }
        });

        owl.on('changed.owl.carousel', function(e) {
            $('.slider-counter').text(++e.page.index + '/' + e.item.count)
        });
    }    
    
    if($('.owl-carousel.banner-slider').length > 0){
        var owl = $('.owl-carousel.banner-slider').owlCarousel({
            center: true,
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplaySpeed: 1200,
            autoplayHoverPause: true,
            nav: true,
            pagination: false,
            dotData: false,
            navSpeed: 1200,
        });
    }
    
    if($('#firstname').length != 0) {
        $(function() {
            $('#firstname').styler();

        });
    }
    
    if($('#cellphone').length != 0) {
        $(function() {
            $('#cellphone').styler();

        });
    }
    
    if($('#callbackForm input[name=cellphone]').length != 0) {
        $(function() {
            $("#callbackForm input[name=cellphone]").inputmask({
                mask: "+38 (099) 999 99 99",
                clearMaskOnLostFocus: false
            });
        })
    }
    $(function() {
        if($('#price-range').length != 0) {
            $("#price-range").slider({
                range: true,
                min: 136,
                max: 315,
                values: [136, 315],
                slide: function(event, ui) {
                    $("#priceFrom").val(ui.values[0]);
                    $("#priceTo").val(ui.values[1]);
                },
                stop: function(event, ui) {
                    //applyBtn();
                }
            });
        }

        if($('#priceFrom').length != 0) {
            $("#priceFrom").val($("#price-range").slider("values", 0));
        }
        if($('#priceTo').length != 0) {
            $("#priceTo").val($("#price-range").slider("values", 1));
        }

        if($('#priceFrom').length != 0) {
            $('#priceFrom').change(function() {
                var value = parseInt($(this).val());
                if (isNaN(value) == false)
                    $("#price-range").slider('values', 0, value);
            });
        }

        if($('#priceTo').length != 0) {
            $('#priceTo').change(function() {
                var value = parseInt($(this).val());
                if (isNaN(value) == false)
                    $("#price-range").slider('values', 1, value);
            });
        }

        if($('#priceFrom').length != 0) {
            $("#priceFrom").keyup(function(event) {
                if (event.keyCode == 13) {
                    //applyBtn();
                }
            });
        }
        if($('#priceTo').length != 0) {
            $("#priceTo").keyup(function(event) {
                if (event.keyCode == 13) {
                    //applyBtn();
                }
            });
        }
    });
    
    $(document).ready(function() {
        if($('select').length != 0) {
            $('select').styler({
                fileBrowse: 'Выбрать',
                onSelectOpened: function() {}
            });
        }
        if($('.attribute-checkbox.type-color').length != 0) {
            $('.attribute-checkbox.type-color').click(function() {
                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                } else {
                    $(this).addClass('selected');
                }

                //applyBtn();
            });
        }

        if($('.jq-selectbox__dropdown ul li').length != 0) {
            $(".jq-selectbox__dropdown ul li").click(function() {
                $(this).parent('ul').find('li').removeClass('selected');
                $(this).parent('ul').find('li').attr('data-jqfs-class', 'attribute-checkbox');
                $(this).parent('ul').parent('.jq-selectbox__dropdown').parent('.jq-selectbox').find('.select-styler').find('option').removeClass('selected');

                $(this).addClass('selected');

                //applyBtn();
            });
        }
    });
  
    // Выравнивание блоков сеткой
    $(function() {
        if($('.products-list').length != 0) {
            setTimeout(function() {
                if ($(window).width() > 639) {
                    smartColumnsTest($('.products-list'), $('.product-block'), 304);
                } else {
                    smartColumnsTest($('.products-list'), $('.product-block'), 150);
                }
            }, 1000);

            $(window).resize(function() {
                if ($(window).width() > 639) {
                    smartColumnsTest($('.products-list'), $('.product-block'), 304);
                } else {
                    smartColumnsTest($('.products-list'), $('.product-block'), 150);
                }
            });


            page = 1;
        }
    });  
});

$(document).ready(function() {
    if($('.design-list').length > 0){
        setTimeout(function() {
            smartColumnsTest($('.design-list'), $('.lightbox'), 304);
        }, 400);

        $(window).resize(function() {
            smartColumnsTest($('.design-list'), $('.lightbox'), 304);
        });
    }

    if($('.lightbox').length > 0){
        $('.lightbox').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            nextEffect: 'elastic',
            prevEffect: 'elastic',
            padding: 0,
            margin: [20, 20, 20, 20],
            helpers: {
                overlay: {
                    locked: false
                }
            }
        });
    }

    if($('.material-item').length > 0){
        var $materialItem = $('.material-item');
        $materialItem.each(function() {
            var $this = $(this);
            if ($this.hasClass('active')) {
                var magnifierImage = $this.find(".magnifier-image").data('magnifierImage'),
                    $magnifierContainer = $(".magnifier-container"),
                    $contentTexture = $magnifierContainer.next();

                if ($contentTexture.find(".base-img").attr("src") != '') {
                    $magnifierContainer.html('<div class="image-circle"><img src="' + magnifierImage + '" /></div>');
                } else {
                    $magnifierContainer.hide();
                }
            }
        });

        $materialItem.click(function() {
            // меняем накладываемые сверху текстуры
            var image = $(this).find('.image'),
                texture_type = image.attr('data-color-type'),
                texture_image = image.attr('data-texture-image'),
                magnifierImage = $(this).find('.magnifier-image').data('magnifierImage'),
                $magnifierContainer = $(".magnifier-container");

            // помечаем выбранный
            $("[data-active-type=" + texture_type + "]").removeClass('active');
            $(this).addClass('active');

            // изменяем базовое изображение изображению
            $('.base-img').attr('src', texture_image);
            $magnifierContainer.html('<div class="image-circle"><img src="' + magnifierImage + '" /></div>');
        });
    }
    
    if($('.targetMaterials').length > 0){
        //Прячем вкладку если список пустой
        $('.targetMaterials').closest('li').hide();
    }
    
    if($('#countPr').length > 0){
        // показываем Ткани
        var $countPr = $("#countPr");
        $countPr.keypress(function(e) {
            if (e.ctrlKey || e.altKey || e.metaKey) {
                return;
            }

            var chr = getChar(e);

            if (chr == null) {
                return;
            }

            if (chr < '0' || chr > '9') {
                return false;
            }
        });
    }
    function getChar(event) {
        if (event.which == null) {
            if (event.keyCode < 32) return null;
            return String.fromCharCode(event.keyCode) // IE
        }

        if (event.which != 0 && event.charCode != 0) {
            if (event.which < 32) return null;
            return String.fromCharCode(event.which) // остальные
        }

        return null; // специальная клавиша
    }
});