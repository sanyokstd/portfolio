eval(function (p, a, c, k, e, r) {
    e = function (c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function (e) {
            return r[e]
        }];
        e = function () {
            return '\\w+'
        };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('(7($){2p=7(){p n=3;3.2q=7(c,d){3.4=$.3r({},3.2r,d);3.8={1c:3.4.u+"-1c",1d:3.4.u+"-1d",w:3.4.u+"-w",B:3.4.u+"-1d-3s",T:3.4.u+"-1d-3t",U:3.4.u+"-w-3u",v:3.4.u+"-v",P:3.4.u+"-v-3v",2s:3.4.u+"-v-1e",16:3.4.u+"-v-2t",17:3.4.u+"-v-2u",C:3.4.u+"-1e-3w",1f:3.4.u+"-3x-1e",2v:3.4.u+"-1T-2t",2w:3.4.u+"-1T-2u",J:3.4.u+"-3y-1e",V:3.4.u+"-1T-1e"};3.q=$(c);3.w=$("."+3.8.1d,3.q);3.s=3.w.K();3.v=$("."+3.8.v,3.q);3.P=$("."+3.8.P,3.v);3.G=3.s>0?1:0;3.1C=3.P.K()>0?1:0;6(!3.G&&!3.1C){3.L("1D #3z",3.4.M,1)}3.1g=3.q.H();3.1h=3.q.I();6(!3.1g&&!3.4.1E){3.1g=3.4.H;3.q.x(\'H\',3.1g);3.L("1D #2x",3.4.M,0)}6(!3.1h){3.1h=3.4.I;3.q.x(\'I\',3.1h);3.L("1D #2x",3.4.M,0)}3.q.x(\'2y\',\'3A\');3.o=0;3.W=0;3.1i=0;3.Q=r;3.1U=0;3.2z=0;3.1j=1;3.1k=0;3.X=r;3.3B=9;3.3C=1;3.2A=9;3.2B=1l 1F;3.2C=1l 1F;3.2D=1l 1F;3.2E=1l 1F;3.1V=3.v;6(3.1C){3.2F()}3.2G();6(3.G){3.1W=$("."+3.8.w,3.q);6(3.4.1G=="1H"){3.2H()}}3.1I=!3.G?1:0;6(3.4.1X){3.q.1X(7(a,b){b>0?n.1J():n.1m();y 9})}6(3.4.2I){3.q.3D(7(a){6(a.2J==37){n.1J()}z 6(a.2J==39){n.1m()}})}6(3.4.2K&&3.G){3.1W.Y(7(){n.1m();y 9})}3.2L=3.4.1K>=3.s?3.s-1:3.4.1K<0?0:3.4.1K;6(3.4.2M){1L{3.3E()}1M(R){3.L(R,3.4.M,0)}}6(3.2N){1L{3.2N()}1M(R){3.L(R,3.4.M,0)}}6(3.4.1Y){1L{3.3F(3.4.1Y)}1M(R){3.L(R,3.4.M,0)}}3.1N(3.2L,r);6(3.4.1n){3.1o();3.2O()}6(3.4.1Z){1L{3.3G(3.4.1Z)}1M(R){3.L(R,3.4.M,0)}}6(3.G&&!3.4.2P){3.1V=3.q.3H(\'.\'+3.8.w,\'.\'+3.8.v)}y 3};3.2r={u:"20",I:3I,H:3J,1K:0,1n:t,2Q:3K,1O:9,1X:9,2I:9,1p:9,N:5,2R:9,2S:9,2T:9,21:9,2U:t,2V:"1H",22:7(){},23:7(){},O:r,2W:3L,2X:r,1G:"24",1P:3M,25:r,2Y:"1q",26:7(){},27:7(){},2Z:9,2K:9,D:9,30:9,31:9,1E:9,2P:t,2M:9,1Y:9,1Z:9,3N:9,M:9};3.L=7(a,b,c){6(b){3O("3P 3Q 3R!\\3S = "+a+" (3T 3U 3V 3W)\\32 33 = "+3.q.34("33")+"\\32 28 = "+3.q.34("28"))}6(c){y 9}};3.2O=7(){6(!3.1Q&&!3.4.1O){3.q.35(7(){6(n.X!=r){n.1r()}},7(){n.1o()})}6(3.4.1O){3.q.3X(7(){6(n.X==r){n.1o()}})}};3.2F=7(){3.S=$("3Y",3.P);3.E=$("29",3.S);3.1s=3.E.K();6(3.G&&(3.1s!=3.s)&&3.v.K()==1){3.L("1D #3Z",3.4.M,1)}6(3.4.31){3.4.N=3.s}z{7 1t(a){2a=n.E.x(a);6(2a!="1n"&&a!=""&&a!="40"){y 36(2a)}z y 0}p c=3.4.D?3.v.H():3.v.I();p d=3.E.41(t);p e=3.E.42(t);p f=1t("1u-Z")+1t("1u-43");p g=1t("1u-10")+1t("1u-44");3.s=3.1s;6(3.4.N>3.s){3.4.N=3.1s}3.11=3.4.D?e:d;3.2b=3.11*3.1s;3.1v=(3.4.N*3.11)-(3.4.D?g:f);3.1R=3.4.D?"10":"Z";p h=3.4.D?"H":"I";p i=3.4.D?"I":"H";3.E.x({I:3.E.I(),H:3.E.H()});3.S.x(h,3.2b+"2c");3.P.x({I:3.4.D?d:3.1v,H:3.4.D?3.1v:e});6(3.4.2S){3.P.x(3.1R,(c-3.1v)/2).x("1u","0")}6(3.s>3.4.N){3.1k=t;6(3.4.O==r||3.4.O<0||3.4.O>3.s){3.4.O=3.4.N}}3.18=$(\'.\'+3.8.2s,3.v);6(3.18.K()>0){3.38()}}6(3.4.2R&&3.G){3.E.2d(7(){n.1N(2e(3,"29"),$(3))})}z 6(3.G||3.4.21){3.E.Y(7(){n.1N(2e(3,"29"),$(3));y 9})}7 2e(a,b){y $(b,$(a).2f()).45(a)}};3.38=7(){6(3.1k){3.3a=t;3.19=$("."+3.8.16,3.v);3.1w=$("."+3.8.17,3.v);3.18.F(3.8.C);3.19.Y(7(){n.16();y 9});3.1w.Y(7(){n.17();y 9});6(3.4.2T){3.19.2d(7(){n.16(t)});3.1w.2d(7(){n.17(t)});3.18.46(7(){n.3b()})}6(!3.4.1p){3.19.A(3.8.C)}}z{3.18.A(3.8.C)}};3.2g=7(){3.1a=3.4.D?3.S.2h().10:3.S.2h().Z;3.12=13.47(13.1x(3.1a)/3.11);3.14=13.48((3.2b-13.1x(3.1a)-3.1v)/3.11);6(3.14<0){3.14=0}};3.2G=7(){3.J=$("."+3.8.J,3.q);3.1b=$("."+3.8.V,3.q);3.1Q=3.J.K()>0?1:0;3.V=3.1b.K()>0?1:0;6(3.1Q){6(3.4.1n){3.J.A(3.8.1f)}3.J.Y(7(){6(n.J.1S(n.8.1f)){n.2i()}z{n.3c()}y 9})}6(3.V){3.2j=$("."+3.8.2v,3.q);3.2k=$("."+3.8.2w,3.q);6(3.4.2Z){3.1b.1y();$("."+3.8.w,3.q).35(7(){n.1b.3d()},7(){n.1b.49()})}3.2j.Y(7(){n.1J($(3));y 9});3.2k.Y(7(){n.1m($(3));y 9})}};3.2H=7(){6($(\'.\'+3.8.U,3.q).K()==0){3.w.4a(\'<3e 28="\'+3.8.U+\'"></3e>\');3.U=$(\'.\'+3.8.U,3.1W);3.U.x(\'2h\',\'4b\')}};3.15=7(a,b,c,d,e){6(e&&3.X!=r){6(3.1Q){3.2i()}6(3.4.1O){n.1r()}}6(a){6(a.1S(3.8.C)){y 9}}p f=0;p g=$(\':4c\',3.1V).K()>0?1:0;6(!g&&!3.2A){3.W=3.o;6(c==r&&!d){3.o=b=="-="?3.o+1:3.o-1}z 6(c!=r){c=36(c);3.o=c<0?0:c>3.s-1?3.s-1:c;p h=a?a.2f().2f().1S(3.8.P)?9:t:t}6(3.V){3.1b.F(3.8.C)}6(!3.4.1p){6(3.o==-1){3.o=0;f=1}6(3.o==0&&3.V){3.2j.A(3.8.C)}6(3.o==3.s){3.o=3.s-1;f=1}6(3.o==3.s-1){6(3.4.1n){3.1r()}6(3.V){3.2k.A(3.8.C)}}}z 6(!3.1k){6(3.o==3.s){3.o=0}6(3.o==-1){3.o=3.s-1}}6(3.1k&&!f){3.3f(d,b,h)}6(3.1C){3.3g(3.o)}6(!(d&&!3.4.2U)){6(3.G){3.3h(3.o,b)}}6(3.1j){3.1j=0}}};3.3f=7(a,b,c){3.2g();p d=a?t:9;p e=0;6(!a){p f=13.1x(3.o+1-3.12);p g=3.4.N-f+1;p h=3.o==0||3.o==3.s-1?1:0;6((3.4.21&&(g==1||f==1))&&!3.1j&&!h){e=3.4.O-1;d=t}6(g==0||f==0){d=t}6(c){6(g<0){g=0}b=3.W<3.o?\'-=\':\'+=\';p i=13.1x(3.W-3.o);6((i-1>g&&b==\'-=\')||(i>f&&b==\'+=\')){e=i;d=t}}6(b==""){6(3.W==3.o&&!h){b=3.3i=="-="?"+=":"-="}z{b=3.W<3.o?"-=":"+="}}3.3i=b}6(d){p j=e>0?e:3.4.O;p k=b=="-="?3.14:3.12;p l=k<j?k:j;p m=l*3.11;3.1i=b=="-="?3.12+l:3.12-l+3.4.N-1;6((b=="-="&&3.1i>3.o)||(b=="+="&&3.1i<3.o)){3.o=3.1i}6(3.4.1p){6(3.12<=0&&b=="+="){b="-=";3.o=3.s-1;m=(3.14/3.4.O)*(3.11*3.4.O)}z 6(3.14==0&&b=="-="){b="+=";3.o=0;m=13.1x(3.1a)}}3.3j(b,m)}};3.3h=7(a,b){3.Q=3.w.2l(a);3.2z=3.w.2l(3.W);p c=7(){6($.1z(n.4.27)){n.4.27()}n.1A(n.2C)};6(!3.Q.1S(3.8.B)){6(3.1j){3.2m=3.4.2Y;p d=1}z{p e=3.4.1E&&3.4.1G=="24"?"3k":"1q";3.2m=3.4.1E?e:3.4.1G}6($.1z(n.4.26)){n.4.26()}3.1A(3.2B);3.3l[3.2m](b,d,c)}};3.3j=7(a,b){p c=7(){6(!n.4.1p&&n.3a){n.18.F(n.8.C);n.2g();6(n.12<=0){n.19.A(n.8.C)}z 6(n.14<=0){n.1w.A(n.8.C)}}6(n.1B){4d(7(){n.1B=="-="?n.16():n.17()},0)}z 6($.1z(n.4.23)){n.4.23()}n.1A(n.2E)};6($.1z(n.4.22)){n.4.22()}n.1A(n.2D);3.3m[3.4.2V](a,b,c)};3.1A=7(c){$.3n(c,7(a,b){6($.1z(b)){b()}})};3.4e=7(a){a.4f=0};3.3l={1q:7(a,b,c){n.w.F(n.8.B).1y();n.Q.A(n.8.B).2n();c()},1H:7(a,b,c){6(a==""){a=n.1U<n.o?"-=":"+="}n.1U=n.o;p d=a=="-="?"+":"-";p e=n.4.30?"10":"Z";p f=n.4.D?n.1g:n.1h;p g=e=="10"?{10:a+f}:{Z:a+f};n.3o=$("."+n.8.T,n.q);n.3p=$("."+n.8.B,n.q);n.w.x(e,"0");n.3o.F(n.8.T).1y();n.3p.F(n.8.B).A(n.8.T);n.Q.A(n.8.B).x(e,d+f+"2c").2n();n.U.3q(t,t).x(e,"0").2o(g,n.4.1P,n.4.25,7(){c()})},24:7(a,b,c){6(b){n.w.1y()}z{n.Q.x("2y","1q")}$("."+n.8.T,n.q).F(n.8.T);$("."+n.8.B,n.q).3q(t,t).F(n.8.B).A(n.8.T);n.Q.A(n.8.B).2o({"4g":"2n"},n.4.1P,n.4.25,7(){c()})},3k:7(a,b,c){n.w.F(n.8.B).1y();n.Q.3d(n.4.1P,7(){c()})}};3.3m={1q:7(a,b,c){p d=a=="-="?n.1a-b:n.1a+b;n.S.x(n.1R,d+"2c");c()},1H:7(a,b,c){n.S.2o(n.1R=="Z"?{Z:a+b}:{10:a+b},n.4.2W,n.4.2X,7(){c()})}};3.2i=7(){3.J.F(3.8.1f);3.1r()};3.3c=7(){3.J.A(n.8.1f);3.1o()};3.1o=7(){p a=3;3.X=4h(7(){a.15(r,"-=",r,a.1I,r)},a.4.2Q)};3.1r=7(){4i(3.X);3.X=r};3.1N=7(a,b){3.15(b,"",a,0,1)};3.1J=7(a){3.15(a,"+=",r,n.1I,1)};3.1m=7(a){3.15(a,"-=",r,n.1I,1)};3.16=7(c){6(c){n.1B="-="}3.15(3.19,"+=",r,1,1)};3.17=7(c){6(c){n.1B="+="}3.15(3.1w,"-=",r,1,1)};3.3b=7(){n.1B=""};3.3g=7(a){$("."+3.8.1c,3.S).F(3.8.1c);3.E.2l(a).A(3.8.1c)}};$.4j.20=7(a){y 3.3n(7(){$(3).4k("20",1l 2p().2q(3,a))})}})(4l);', 62, 270, '|||this|options||if|function|cssNames|false|||||||||||||||currId|var|domObj|null|allItems|true|cssprefix|nav|panels|css|return|else|addClass|panelActive|btnDisable|verticalnav|navLI|removeClass|arePanels|height|width|playBtn|size|_errorReport|debug|shownavitems|scroll|navClip|currPanel|err|navUL|panelOld|panelsWrapper|goBtns|prevId|isPlaying|click|left|top|navLIsize|LIbefore|Math|LIafter|_change|navPrev|navNext|navBtns|navBtnPrev|navPos|gBtns|selected|panel|btn|btnPause|domObjHeight|domObjWidth|newId|firstTime|scrollActive|new|stepForward|auto|autoScrollStart|circular|none|autoScrollStop|navLINum|getLImargin|margin|navClipSize|navBtnNext|abs|hide|isFunction|_runCallBacks|scrollcontinue|isNavClip|Error|freeheight|Array|panelfx|sliding|lineScrollDo|stepBackward|start|try|catch|changeWithId|autostill|panelfxspeed|isPlayBtn|cssPosAttr|hasClass|go|prevPanel|runningScope|panelsBag|mousewheel|delaycaptions|timer|sliderkit|navscrollatend|navfxbefore|navfxafter|fading|panelfxeasing|panelfxbefore|panelfxafter|class|li|attrVal|navULSize|px|mouseover|getIndex|parent|_getNavPos|position|playBtnPause|goBtnPrev|goBtnNext|eq|panelTransition|show|animate|SliderKit|_init|_settings|navBtn|prev|next|goPrev|goNext|02|display|prevPanelStill|animating|panelAnteFns|panelPostFns|navAnteFns|navPostFns|_buildNav|_buildControls|_wrapPanels|keyboard|keyCode|panelclick|startId|counter|imageFx|_autoScrollHoverStop|fastchange|autospeed|navitemshover|navclipcenter|navcontinuous|navpanelautoswitch|navfx|scrollspeed|scrolleasing|panelfxfirst|panelbtnshover|verticalslide|tabs|nElement|id|attr|hover|parseInt||_buildNavButtons||scrollBtns|navStopContinuous|playBtnStart|fadeIn|div|_setNavScroll|selectThumbnail|_animPanel|scrollWay|_animNav|tabsfading|_panelTransitions|_navTransitions|each|oldPanel|activePanel|stop|extend|active|old|wrapper|clip|disable|pause|play|01|block|changeOngoing|currLine|keyup|Counter|DelayCaptions|Timer|find|500|350|4000|600|700|imagefx|alert|Slider|Kit|error|nMessage|see|doc|for|details|mouseleave|ul|03|0px|outerWidth|outerHeight|right|bottom|index|mouseout|ceil|floor|fadeOut|wrapAll|relative|animated|setTimeout|_clearCallBacks|length|opacity|setInterval|clearTimeout|fn|data|jQuery'.split('|'), 0, {}));
(function (window, document, $, undefined) {
    "use strict";
    var W = $(window),
        D = $(document),
        F = $.fancybox = function () {
            F.open.apply(this, arguments)
        },
        IE = navigator.userAgent.match(/msie/),
        didUpdate = null,
        isTouch = document.createTouch !== undefined,
        isQuery = function (obj) {
            return obj && obj.hasOwnProperty && obj instanceof $
        },
        isString = function (str) {
            return str && $.type(str) === "string"
        },
        isPercentage = function (str) {
            return isString(str) && str.indexOf('%') > 0
        },
        isScrollable = function (el) {
            return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)))
        },
        getScalar = function (orig, dim) {
            var value = parseInt(orig, 10) || 0;
            if (dim && isPercentage(orig)) {
                value = F.getViewport()[dim] / 100 * value;
            }
            return Math.ceil(value);
        },
        getValue = function (value, dim) {
            return getScalar(value, dim) + 'px';
        };
    $.extend(F, {
        version: '2.1.4',
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            autoSize: true,
            autoHeight: false,
            autoWidth: false,
            autoResize: true,
            autoCenter: !isTouch,
            fitToView: true,
            aspectRatio: false,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: 'auto',
            wrapCSS: '',
            arrows: true,
            closeBtn: true,
            closeClick: false,
            nextClick: false,
            mouseWheel: true,
            autoPlay: false,
            playSpeed: 3000,
            preload: 3,
            modal: false,
            loop: true,
            ajax: {
                dataType: 'html',
                headers: {
                    'X-fancyBox': true
                }
            },
            iframe: {
                scrolling: 'auto',
                preload: true
            },
            swf: {
                wmode: 'transparent',
                allowfullscreen: 'true',
                allowscriptaccess: 'always'
            },
            keys: {
                next: {
                    13: 'left',
                    34: 'up',
                    39: 'left',
                    40: 'up'
                },
                prev: {
                    8: 'right',
                    33: 'down',
                    37: 'right',
                    38: 'down'
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: 'left',
                prev: 'right'
            },
            scrollOutside: true,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: 'fade',
            openSpeed: 250,
            openEasing: 'swing',
            openOpacity: true,
            openMethod: 'zoomIn',
            closeEffect: 'fade',
            closeSpeed: 250,
            closeEasing: 'swing',
            closeOpacity: true,
            closeMethod: 'zoomOut',
            nextEffect: 'elastic',
            nextSpeed: 250,
            nextEasing: 'swing',
            nextMethod: 'changeIn',
            prevEffect: 'elastic',
            prevSpeed: 250,
            prevEasing: 'swing',
            prevMethod: 'changeOut',
            helpers: {
                overlay: true,
                title: true
            },
            onCancel: $.noop,
            beforeLoad: $.noop,
            afterLoad: $.noop,
            beforeShow: $.noop,
            afterShow: $.noop,
            beforeChange: $.noop,
            beforeClose: $.noop,
            afterClose: $.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: false,
        isOpen: false,
        isOpened: false,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: false
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function (group, opts) {
            if (!group) {
                return;
            }
            if (!$.isPlainObject(opts)) {
                opts = {};
            }
            if (false === F.close(true)) {
                return;
            }
            if (!$.isArray(group)) {
                group = isQuery(group) ? $(group).get() : [group];
            }
            $.each(group, function (i, element) {
                var obj = {},
                    href, title, content, type, rez, hrefParts, selector;
                if ($.type(element) === "object") {
                    if (element.nodeType) {
                        element = $(element);
                    }
                    if (isQuery(element)) {
                        obj = {
                            href: element.data('fancybox-href') || element.attr('href'),
                            title: element.data('fancybox-title') || element.attr('title'),
                            isDom: true,
                            element: element
                        };
                        if ($.metadata) {
                            $.extend(true, obj, element.metadata());
                        }
                    } else {
                        obj = element;
                    }
                }
                href = opts.href || obj.href || (isString(element) ? element : null);
                title = opts.title !== undefined ? opts.title : obj.title || '';
                content = opts.content || obj.content;
                type = content ? 'html' : (opts.type || obj.type);
                if (!type && obj.isDom) {
                    type = element.data('fancybox-type');
                    if (!type) {
                        rez = element.prop('class').match(/fancybox\.(\w+)/);
                        type = rez ? rez[1] : null
                    }
                }
                if (isString(href)) {
                    if (!type) {
                        if (F.isImage(href)) {
                            type = 'image'
                        } else if (F.isSWF(href)) {
                            type = 'swf'
                        } else if (href.charAt(0) === '#') {
                            type = 'inline'
                        } else if (isString(element)) {
                            type = 'html';
                            content = element
                        }
                    }
                    if (type === 'ajax') {
                        hrefParts = href.split(/\s+/, 2);
                        href = hrefParts.shift();
                        selector = hrefParts.shift()
                    }
                }
                if (!content) {
                    if (type === 'inline') {
                        if (href) {
                            content = $(isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href)
                        } else if (obj.isDom) {
                            content = element
                        }
                    } else if (type === 'html') {
                        content = href
                    } else if (!type && !href && obj.isDom) {
                        type = 'inline';
                        content = element
                    }
                }
                $.extend(obj, {
                    href: href,
                    type: type,
                    content: content,
                    title: title,
                    selector: selector
                });
                group[i] = obj
            });
            F.opts = $.extend(!0, {}, F.defaults, opts);
            if (opts.keys !== undefined) {
                F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : !1
            }
            F.group = group;
            return F._start(F.opts.index)
        },
        cancel: function () {
            var coming = F.coming;
            if (!coming || !1 === F.trigger('onCancel')) {
                return
            }
            F.hideLoading();
            if (F.ajaxLoad) {
                F.ajaxLoad.abort()
            }
            F.ajaxLoad = null;
            if (F.imgPreload) {
                F.imgPreload.onload = F.imgPreload.onerror = null
            }
            if (coming.wrap) {
                coming.wrap.stop(!0, !0).trigger('onReset').remove()
            }
            F.coming = null;
            if (!F.current) {
                F._afterZoomOut(coming)
            }
        },
        close: function (event) {
            F.cancel();
            if (!1 === F.trigger('beforeClose')) {
                return
            }
            F.unbindEvents();
            if (!F.isActive) {
                return
            }
            if (!F.isOpen || event === !0) {
                $('.fancybox-wrap').stop(!0).trigger('onReset').remove();
                F._afterZoomOut()
            } else {
                F.isOpen = F.isOpened = !1;
                F.isClosing = !0;
                $('.fancybox-item, .fancybox-nav').remove();
                F.wrap.stop(!0, !0).removeClass('fancybox-opened');
                F.transitions[F.current.closeMethod]()
            }
        },
        play: function (action) {
            var clear = function () {
                    clearTimeout(F.player.timer)
                },
                set = function () {
                    clear();
                    if (F.current && F.player.isActive) {
                        F.player.timer = setTimeout(F.next, F.current.playSpeed)
                    }
                },
                stop = function () {
                    clear();
                    $('body').unbind('.player');
                    F.player.isActive = !1;
                    F.trigger('onPlayEnd')
                },
                start = function () {
                    if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
                        F.player.isActive = !0;
                        $('body').bind({
                            'afterShow.player onUpdate.player': set,
                            'onCancel.player beforeClose.player': stop,
                            'beforeLoad.player': clear
                        });
                        set();
                        F.trigger('onPlayStart')
                    }
                };
            if (action === !0 || (!F.player.isActive && action !== !1)) {
                start()
            } else {
                stop()
            }
        },
        next: function (direction) {
            var current = F.current;
            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.next
                }
                F.jumpto(current.index + 1, direction, 'next')
            }
        },
        prev: function (direction) {
            var current = F.current;
            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.prev
                }
                F.jumpto(current.index - 1, direction, 'prev')
            }
        },
        jumpto: function (index, direction, router) {
            var current = F.current;
            if (!current) {
                return
            }
            index = getScalar(index);
            F.direction = direction || current.direction[(index >= current.index ? 'next' : 'prev')];
            F.router = router || 'jumpto';
            if (current.loop) {
                if (index < 0) {
                    index = current.group.length + (index % current.group.length)
                }
                index = index % current.group.length
            }
            if (current.group[index] !== undefined) {
                F.cancel();
                F._start(index)
            }
        },
        reposition: function (e, onlyAbsolute) {
            var current = F.current,
                wrap = current ? current.wrap : null,
                pos;
            if (wrap) {
                pos = F._getPosition(onlyAbsolute);
                if (e && e.type === 'scroll') {
                    delete pos.position;
                    wrap.stop(!0, !0).animate(pos, 200)
                } else {
                    wrap.css(pos);
                    current.pos = $.extend({}, current.dim, pos)
                }
            }
        },
        update: function (e) {
            var type = (e && e.type),
                anyway = !type || type === 'orientationchange';
            if (anyway) {
                clearTimeout(didUpdate);
                didUpdate = null
            }
            if (!F.isOpen || didUpdate) {
                return
            }
            didUpdate = setTimeout(function () {
                var current = F.current;
                if (!current || F.isClosing) {
                    return
                }
                F.wrap.removeClass('fancybox-tmp');
                if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
                    F._setDimension()
                }
                if (!(type === 'scroll' && current.canShrink)) {
                    F.reposition(e)
                }
                F.trigger('onUpdate');
                didUpdate = null
            }, (anyway && !isTouch ? 0 : 300))
        },
        toggle: function (action) {
            if (F.isOpen) {
                F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;
                if (isTouch) {
                    F.wrap.removeAttr('style').addClass('fancybox-tmp');
                    F.trigger('onUpdate')
                }
                F.update()
            }
        },
        hideLoading: function () {
            D.unbind('.loading');
            $('#fancybox-loading').remove()
        },
        showLoading: function () {
            var el, viewport;
            F.hideLoading();
            el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');
            D.bind('keydown.loading', function (e) {
                if ((e.which || e.keyCode) === 27) {
                    e.preventDefault();
                    F.cancel()
                }
            });
            if (!F.defaults.fixed) {
                viewport = F.getViewport();
                el.css({
                    position: 'absolute',
                    top: (viewport.h * 0.5) + viewport.y,
                    left: (viewport.w * 0.5) + viewport.x
                })
            }
        },
        getViewport: function () {
            var locked = (F.current && F.current.locked) || !1,
                rez = {
                    x: W.scrollLeft(),
                    y: W.scrollTop()
                };
            if (locked) {
                rez.w = locked[0].clientWidth;
                rez.h = locked[0].clientHeight
            } else {
                rez.w = isTouch && window.innerWidth ? window.innerWidth : W.width();
                rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height()
            }
            return rez
        },
        unbindEvents: function () {
            if (F.wrap && isQuery(F.wrap)) {
                F.wrap.unbind('.fb')
            }
            D.unbind('.fb');
            W.unbind('.fb')
        },
        bindEvents: function () {
            var current = F.current,
                keys;
            if (!current) {
                return
            }
            W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);
            keys = current.keys;
            if (keys) {
                D.bind('keydown.fb', function (e) {
                    var code = e.which || e.keyCode,
                        target = e.target || e.srcElement;
                    if (code === 27 && F.coming) {
                        return !1
                    }
                    if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
                        $.each(keys, function (i, val) {
                            if (current.group.length > 1 && val[code] !== undefined) {
                                F[i](val[code]);
                                e.preventDefault();
                                return !1
                            }
                            if ($.inArray(code, val) > -1) {
                                F[i]();
                                e.preventDefault();
                                return !1
                            }
                        })
                    }
                })
            }
            if ($.fn.mousewheel && current.mouseWheel) {
                F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
                    var target = e.target || null,
                        parent = $(target),
                        canScroll = !1;
                    while (parent.length) {
                        if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
                            break
                        }
                        canScroll = isScrollable(parent[0]);
                        parent = $(parent).parent()
                    }
                    if (delta !== 0 && !canScroll) {
                        if (F.group.length > 1 && !current.canShrink) {
                            if (deltaY > 0 || deltaX > 0) {
                                F.prev(deltaY > 0 ? 'down' : 'left')
                            } else if (deltaY < 0 || deltaX < 0) {
                                F.next(deltaY < 0 ? 'up' : 'right')
                            }
                            e.preventDefault()
                        }
                    }
                })
            }
        },
        trigger: function (event, o) {
            var ret, obj = o || F.coming || F.current;
            if (!obj) {
                return
            }
            if ($.isFunction(obj[event])) {
                ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1))
            }
            if (ret === !1) {
                return !1
            }
            if (obj.helpers) {
                $.each(obj.helpers, function (helper, opts) {
                    if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
                        opts = $.extend(!0, {}, F.helpers[helper].defaults, opts);
                        F.helpers[helper][event](opts, obj)
                    }
                })
            }
            $.event.trigger(event + '.fb')
        },
        isImage: function (str) {
            return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)
        },
        isSWF: function (str) {
            return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function (index) {
            var coming = {},
                obj, href, type, margin, padding;
            index = getScalar(index);
            obj = F.group[index] || null;
            if (!obj) {
                return !1
            }
            coming = $.extend(!0, {}, F.opts, obj);
            margin = coming.margin;
            padding = coming.padding;
            if ($.type(margin) === 'number') {
                coming.margin = [margin, margin, margin, margin]
            }
            if ($.type(padding) === 'number') {
                coming.padding = [padding, padding, padding, padding]
            }
            if (coming.modal) {
                $.extend(!0, coming, {
                    closeBtn: !1,
                    closeClick: !1,
                    nextClick: !1,
                    arrows: !1,
                    mouseWheel: !1,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: !1
                        }
                    }
                })
            }
            if (coming.autoSize) {
                coming.autoWidth = coming.autoHeight = !0
            }
            if (coming.width === 'auto') {
                coming.autoWidth = !0
            }
            if (coming.height === 'auto') {
                coming.autoHeight = !0
            }
            coming.group = F.group;
            coming.index = index;
            F.coming = coming;
            if (!1 === F.trigger('beforeLoad')) {
                F.coming = null;
                return
            }
            type = coming.type;
            href = coming.href;
            if (!type) {
                F.coming = null;
                if (F.current && F.router && F.router !== 'jumpto') {
                    F.current.index = index;
                    return F[F.router](F.direction)
                }
                return !1
            }
            F.isActive = !0;
            if (type === 'image' || type === 'swf') {
                coming.autoHeight = coming.autoWidth = !1;
                coming.scrolling = 'visible'
            }
            if (type === 'image') {
                coming.aspectRatio = !0
            }
            if (type === 'iframe' && isTouch) {
                coming.scrolling = 'scroll'
            }
            coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo(coming.parent || 'body');
            $.extend(coming, {
                skin: $('.fancybox-skin', coming.wrap),
                outer: $('.fancybox-outer', coming.wrap),
                inner: $('.fancybox-inner', coming.wrap)
            });
            $.each(["Top", "Right", "Bottom", "Left"], function (i, v) {
                coming.skin.css('padding' + v, getValue(coming.padding[i]))
            });
            F.trigger('onReady');
            if (type === 'inline' || type === 'html') {
                if (!coming.content || !coming.content.length) {
                    return F._error('content')
                }
            } else if (!href) {
                return F._error('href')
            }
            if (type === 'image') {
                F._loadImage()
            } else if (type === 'ajax') {
                F._loadAjax()
            } else if (type === 'iframe') {
                F._loadIframe()
            } else {
                F._afterLoad()
            }
        },
        _error: function (type) {
            $.extend(F.coming, {
                type: 'html',
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: 'no',
                hasError: type,
                content: F.coming.tpl.error
            });
            F._afterLoad()
        },
        _loadImage: function () {
            var img = F.imgPreload = new Image();
            img.onload = function () {
                this.onload = this.onerror = null;
                F.coming.width = this.width;
                F.coming.height = this.height;
                F._afterLoad()
            };
            img.onerror = function () {
                this.onload = this.onerror = null;
                F._error('image')
            };
            img.src = F.coming.href;
            if (img.complete !== !0) {
                F.showLoading()
            }
        },
        _loadAjax: function () {
            var coming = F.coming;
            F.showLoading();
            F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
                url: coming.href,
                error: function (jqXHR, textStatus) {
                    if (F.coming && textStatus !== 'abort') {
                        F._error('ajax', jqXHR)
                    } else {
                        F.hideLoading()
                    }
                },
                success: function (data, textStatus) {
                    if (textStatus === 'success') {
                        coming.content = data;
                        F._afterLoad()
                    }
                }
            }))
        },
        _loadIframe: function () {
            var coming = F.coming,
                iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())).attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling).attr('src', coming.href);
            $(coming.wrap).bind('onReset', function () {
                try {
                    $(this).find('iframe').hide().attr('src', '//about:blank').end().empty()
                } catch (e) {}
            });
            if (coming.iframe.preload) {
                F.showLoading();
                iframe.one('load', function () {
                    $(this).data('ready', 1);
                    if (!isTouch) {
                        $(this).bind('load.fb', F.update)
                    }
                    $(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();
                    F._afterLoad()
                })
            }
            coming.content = iframe.appendTo(coming.inner);
            if (!coming.iframe.preload) {
                F._afterLoad()
            }
        },
        _preloadImages: function () {
            var group = F.group,
                current = F.current,
                len = group.length,
                cnt = current.preload ? Math.min(current.preload, len - 1) : 0,
                item, i;
            for (i = 1; i <= cnt; i += 1) {
                item = group[(current.index + i) % len];
                if (item.type === 'image' && item.href) {
                    new Image().src = item.href
                }
            }
        },
        _afterLoad: function () {
            var coming = F.coming,
                previous = F.current,
                placeholder = 'fancybox-placeholder',
                current, content, type, scrolling, href, embed;
            F.hideLoading();
            if (!coming || F.isActive === !1) {
                return
            }
            if (!1 === F.trigger('afterLoad', coming, previous)) {
                coming.wrap.stop(!0).trigger('onReset').remove();
                F.coming = null;
                return
            }
            if (previous) {
                F.trigger('beforeChange', previous);
                previous.wrap.stop(!0).removeClass('fancybox-opened').find('.fancybox-item, .fancybox-nav').remove()
            }
            F.unbindEvents();
            current = coming;
            content = coming.content;
            type = coming.type;
            scrolling = coming.scrolling;
            $.extend(F, {
                wrap: current.wrap,
                skin: current.skin,
                outer: current.outer,
                inner: current.inner,
                current: current,
                previous: previous
            });
            href = current.href;
            switch (type) {
                case 'inline':
                case 'ajax':
                case 'html':
                    if (current.selector) {
                        content = $('<div>').html(content).find(current.selector)
                    } else if (isQuery(content)) {
                        if (!content.data(placeholder)) {
                            content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter(content).hide())
                        }
                        content = content.show().detach();
                        current.wrap.bind('onReset', function () {
                            if ($(this).find(content).length) {
                                content.hide().replaceAll(content.data(placeholder)).data(placeholder, !1)
                            }
                        })
                    }
                    break;
                case 'image':
                    content = current.tpl.image.replace('{href}', href);
                    break;
                case 'swf':
                    content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
                    embed = '';
                    $.each(current.swf, function (name, val) {
                        content += '<param name="' + name + '" value="' + val + '"></param>';
                        embed += ' ' + name + '="' + val + '"'
                    });
                    content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
                    break
            }
            if (!(isQuery(content) && content.parent().is(current.inner))) {
                current.inner.append(content)
            }
            F.trigger('beforeShow');
            current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));
            F._setDimension();
            F.reposition();
            F.isOpen = !1;
            F.coming = null;
            F.bindEvents();
            if (!F.isOpened) {
                $('.fancybox-wrap').not(current.wrap).stop(!0).trigger('onReset').remove()
            } else if (previous.prevMethod) {
                F.transitions[previous.prevMethod]()
            }
            F.transitions[F.isOpened ? current.nextMethod : current.openMethod]();
            F._preloadImages()
        },
        _setDimension: function () {
            var viewport = F.getViewport(),
                steps = 0,
                canShrink = !1,
                canExpand = !1,
                wrap = F.wrap,
                skin = F.skin,
                inner = F.inner,
                current = F.current,
                width = current.width,
                height = current.height,
                minWidth = current.minWidth,
                minHeight = current.minHeight,
                maxWidth = current.maxWidth,
                maxHeight = current.maxHeight,
                scrolling = current.scrolling,
                scrollOut = current.scrollOutside ? current.scrollbarWidth : 0,
                margin = current.margin,
                wMargin = getScalar(margin[1] + margin[3]),
                hMargin = getScalar(margin[0] + margin[2]),
                wPadding, hPadding, wSpace, hSpace, origWidth, origHeight, origMaxWidth, origMaxHeight, ratio, width_, height_, maxWidth_, maxHeight_, iframe, body;
            wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');
            wPadding = getScalar(skin.outerWidth(!0) - skin.width());
            hPadding = getScalar(skin.outerHeight(!0) - skin.height());
            wSpace = wMargin + wPadding;
            hSpace = hMargin + hPadding;
            origWidth = isPercentage(width) ? (viewport.w - wSpace) * getScalar(width) / 100 : width;
            origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;
            if (current.type === 'iframe') {
                iframe = current.content;
                if (current.autoHeight && iframe.data('ready') === 1) {
                    try {
                        if (iframe[0].contentWindow.document.location) {
                            inner.width(origWidth).height(9999);
                            body = iframe.contents().find('body');
                            if (scrollOut) {
                                body.css('overflow-x', 'hidden')
                            }
                            origHeight = body.height()
                        }
                    } catch (e) {}
                }
            } else if (current.autoWidth || current.autoHeight) {
                inner.addClass('fancybox-tmp');
                if (!current.autoWidth) {
                    inner.width(origWidth)
                }
                if (!current.autoHeight) {
                    inner.height(origHeight)
                }
                if (current.autoWidth) {
                    origWidth = inner.width()
                }
                if (current.autoHeight) {
                    origHeight = inner.height()
                }
                inner.removeClass('fancybox-tmp')
            }
            width = getScalar(origWidth);
            height = getScalar(origHeight);
            ratio = origWidth / origHeight;
            minWidth = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
            maxWidth = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);
            minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
            maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);
            origMaxWidth = maxWidth;
            origMaxHeight = maxHeight;
            if (current.fitToView) {
                maxWidth = Math.min(viewport.w - wSpace, maxWidth);
                maxHeight = Math.min(viewport.h - hSpace, maxHeight)
            }
            maxWidth_ = viewport.w - wMargin;
            maxHeight_ = viewport.h - hMargin;
            if (current.aspectRatio) {
                if (width > maxWidth) {
                    width = maxWidth;
                    height = getScalar(width / ratio)
                }
                if (height > maxHeight) {
                    height = maxHeight;
                    width = getScalar(height * ratio)
                }
                if (width < minWidth) {
                    width = minWidth;
                    height = getScalar(width / ratio)
                }
                if (height < minHeight) {
                    height = minHeight;
                    width = getScalar(height * ratio)
                }
            } else {
                width = Math.max(minWidth, Math.min(width, maxWidth));
                if (current.autoHeight && current.type !== 'iframe') {
                    inner.width(width);
                    height = inner.height()
                }
                height = Math.max(minHeight, Math.min(height, maxHeight))
            }
            if (current.fitToView) {
                inner.width(width).height(height);
                wrap.width(width + wPadding);
                width_ = wrap.width();
                height_ = wrap.height();
                if (current.aspectRatio) {
                    while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
                        if (steps++ > 19) {
                            break
                        }
                        height = Math.max(minHeight, Math.min(maxHeight, height - 10));
                        width = getScalar(height * ratio);
                        if (width < minWidth) {
                            width = minWidth;
                            height = getScalar(width / ratio)
                        }
                        if (width > maxWidth) {
                            width = maxWidth;
                            height = getScalar(width / ratio)
                        }
                        inner.width(width).height(height);
                        wrap.width(width + wPadding);
                        width_ = wrap.width();
                        height_ = wrap.height()
                    }
                } else {
                    width = Math.max(minWidth, Math.min(width, width - (width_ - maxWidth_)));
                    height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)))
                }
            }
            if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
                width += scrollOut
            }
            inner.width(width).height(height);
            wrap.width(width + wPadding);
            width_ = wrap.width();
            height_ = wrap.height();
            canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
            canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));
            $.extend(current, {
                dim: {
                    width: getValue(width_),
                    height: getValue(height_)
                },
                origWidth: origWidth,
                origHeight: origHeight,
                canShrink: canShrink,
                canExpand: canExpand,
                wPadding: wPadding,
                hPadding: hPadding,
                wrapSpace: height_ - skin.outerHeight(!0),
                skinSpace: skin.height() - height
            });
            if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
                inner.height('auto')
            }
        },
        _getPosition: function (onlyAbsolute) {
            var current = F.current,
                viewport = F.getViewport(),
                margin = current.margin,
                width = F.wrap.width() + margin[1] + margin[3],
                height = F.wrap.height() + margin[0] + margin[2],
                rez = {
                    position: 'absolute',
                    top: margin[0],
                    left: margin[3]
                };
            if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
                rez.position = 'fixed'
            } else if (!current.locked) {
                rez.top += viewport.y;
                rez.left += viewport.x
            }
            rez.top = getValue(Math.max(rez.top, rez.top + ((viewport.h - height) * current.topRatio)));
            rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width) * current.leftRatio)));
            return rez
        },
        _afterZoomIn: function () {
            var current = F.current;
            if (!current) {
                return
            }
            F.isOpen = F.isOpened = !0;
            F.wrap.css('overflow', 'visible').addClass('fancybox-opened');
            F.update();
            if (current.closeClick || (current.nextClick && F.group.length > 1)) {
                F.inner.css('cursor', 'pointer').bind('click.fb', function (e) {
                    if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
                        e.preventDefault();
                        F[current.closeClick ? 'close' : 'next']()
                    }
                })
            }
            if (current.closeBtn) {
                $(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function (e) {
                    e.preventDefault();
                    F.close()
                })
            }
            if (current.arrows && F.group.length > 1) {
                if (current.loop || current.index > 0) {
                    $(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev)
                }
                if (current.loop || current.index < F.group.length - 1) {
                    $(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next)
                }
            }
            F.trigger('afterShow');
            if (!current.loop && current.index === current.group.length - 1) {
                F.play(!1)
            } else if (F.opts.autoPlay && !F.player.isActive) {
                F.opts.autoPlay = !1;
                F.play()
            }
        },
        _afterZoomOut: function (obj) {
            obj = obj || F.current;
            $('.fancybox-wrap').trigger('onReset').remove();
            $.extend(F, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            F.trigger('afterClose', obj)
        }
    });
    F.transitions = {
        getOrigPosition: function () {
            var current = F.current,
                element = current.element,
                orig = current.orig,
                pos = {},
                width = 50,
                height = 50,
                hPadding = current.hPadding,
                wPadding = current.wPadding,
                viewport = F.getViewport();
            if (!orig && current.isDom && element.is(':visible')) {
                orig = element.find('img:first');
                if (!orig.length) {
                    orig = element
                }
            }
            if (isQuery(orig)) {
                pos = orig.offset();
                if (orig.is('img')) {
                    width = orig.outerWidth();
                    height = orig.outerHeight()
                }
            } else {
                pos.top = viewport.y + (viewport.h - height) * current.topRatio;
                pos.left = viewport.x + (viewport.w - width) * current.leftRatio
            }
            if (F.wrap.css('position') === 'fixed' || current.locked) {
                pos.top -= viewport.y;
                pos.left -= viewport.x
            }
            pos = {
                top: getValue(pos.top - hPadding * current.topRatio),
                left: getValue(pos.left - wPadding * current.leftRatio),
                width: getValue(width + wPadding),
                height: getValue(height + hPadding)
            };
            return pos
        },
        step: function (now, fx) {
            var ratio, padding, value, prop = fx.prop,
                current = F.current,
                wrapSpace = current.wrapSpace,
                skinSpace = current.skinSpace;
            if (prop === 'width' || prop === 'height') {
                ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);
                if (F.isClosing) {
                    ratio = 1 - ratio
                }
                padding = prop === 'width' ? current.wPadding : current.hPadding;
                value = now - padding;
                F.skin[prop](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio)));
                F.inner[prop](getScalar(prop === 'width' ? value : value - (wrapSpace * ratio) - (skinSpace * ratio)))
            }
        },
        zoomIn: function () {
            var current = F.current,
                startPos = current.pos,
                effect = current.openEffect,
                elastic = effect === 'elastic',
                endPos = $.extend({
                    opacity: 1
                }, startPos);
            delete endPos.position;
            if (elastic) {
                startPos = this.getOrigPosition();
                if (current.openOpacity) {
                    startPos.opacity = 0.1
                }
            } else if (effect === 'fade') {
                startPos.opacity = 0.1
            }
            F.wrap.css(startPos).animate(endPos, {
                duration: effect === 'none' ? 0 : current.openSpeed,
                easing: current.openEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomIn
            })
        },
        zoomOut: function () {
            var current = F.current,
                effect = current.closeEffect,
                elastic = effect === 'elastic',
                endPos = {
                    opacity: 0.1
                };
            if (elastic) {
                endPos = this.getOrigPosition();
                if (current.closeOpacity) {
                    endPos.opacity = 0.1
                }
            }
            F.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : current.closeSpeed,
                easing: current.closeEasing,
                step: elastic ? this.step : null,
                complete: F._afterZoomOut
            })
        },
        changeIn: function () {
            var current = F.current,
                effect = current.nextEffect,
                startPos = current.pos,
                endPos = {
                    opacity: 1
                },
                direction = F.direction,
                distance = 200,
                field;
            startPos.opacity = 0.1;
            if (effect === 'elastic') {
                field = direction === 'down' || direction === 'up' ? 'top' : 'left';
                if (direction === 'down' || direction === 'right') {
                    startPos[field] = getValue(getScalar(startPos[field]) - distance);
                    endPos[field] = '+=' + distance + 'px'
                } else {
                    startPos[field] = getValue(getScalar(startPos[field]) + distance);
                    endPos[field] = '-=' + distance + 'px'
                }
            }
            if (effect === 'none') {
                F._afterZoomIn()
            } else {
                F.wrap.css(startPos).animate(endPos, {
                    duration: current.nextSpeed,
                    easing: current.nextEasing,
                    complete: F._afterZoomIn
                })
            }
        },
        changeOut: function () {
            var previous = F.previous,
                effect = previous.prevEffect,
                endPos = {
                    opacity: 0.1
                },
                direction = F.direction,
                distance = 200;
            if (effect === 'elastic') {
                endPos[direction === 'down' || direction === 'up' ? 'top' : 'left'] = (direction === 'up' || direction === 'left' ? '-' : '+') + '=' + distance + 'px'
            }
            previous.wrap.animate(endPos, {
                duration: effect === 'none' ? 0 : previous.prevSpeed,
                easing: previous.prevEasing,
                complete: function () {
                    $(this).trigger('onReset').remove()
                }
            })
        }
    };
    F.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !isTouch,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        create: function (opts) {
            opts = $.extend({}, this.defaults, opts);
            if (this.overlay) {
                this.close()
            }
            this.overlay = $('<div class="fancybox-overlay"></div>').appendTo('body');
            this.fixed = !1;
            if (opts.fixed && F.defaults.fixed) {
                this.overlay.addClass('fancybox-overlay-fixed');
                this.fixed = !0
            }
        },
        open: function (opts) {
            var that = this;
            opts = $.extend({}, this.defaults, opts);
            if (this.overlay) {
                this.overlay.unbind('.overlay').width('auto').height('auto')
            } else {
                this.create(opts)
            }
            if (!this.fixed) {
                W.bind('resize.overlay', $.proxy(this.update, this));
                this.update()
            }
            if (opts.closeClick) {
                this.overlay.bind('click.overlay', function (e) {
                    if ($(e.target).hasClass('fancybox-overlay')) {
                        if (F.isActive) {
                            F.close()
                        } else {
                            that.close()
                        }
                    }
                })
            }
            this.overlay.css(opts.css).show()
        },
        close: function () {
            $('.fancybox-overlay').remove();
            W.unbind('resize.overlay');
            this.overlay = null;
            if (this.margin !== !1) {
                $('body').css('margin-right', this.margin);
                this.margin = !1
            }
            if (this.el) {
                this.el.removeClass('fancybox-lock')
            }
        },
        update: function () {
            var width = '100%',
                offsetWidth;
            this.overlay.width(width).height('100%');
            if (IE) {
                offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
                if (D.width() > offsetWidth) {
                    width = D.width()
                }
            } else if (D.width() > W.width()) {
                width = D.width()
            }
            this.overlay.width(width).height(D.height())
        },
        onReady: function (opts, obj) {
            $('.fancybox-overlay').stop(!0, !0);
            if (!this.overlay) {
                this.margin = D.height() > W.height() || $('body').css('overflow-y') === 'scroll' ? $('body').css('margin-right') : !1;
                this.el = document.all && !document.querySelector ? $('html') : $('body');
                this.create(opts)
            }
            if (opts.locked && this.fixed) {
                obj.locked = this.overlay.append(obj.wrap);
                obj.fixed = !1
            }
            if (opts.showEarly === !0) {
                this.beforeShow.apply(this, arguments)
            }
        },
        beforeShow: function (opts, obj) {
            if (obj.locked) {
                this.el.addClass('fancybox-lock');
                if (this.margin !== !1) {
                    $('body').css('margin-right', getScalar(this.margin) + obj.scrollbarWidth)
                }
            }
            this.open(opts)
        },
        onUpdate: function () {
            if (!this.fixed) {
                this.update()
            }
        },
        afterClose: function (opts) {
            if (this.overlay && !F.isActive) {
                this.overlay.fadeOut(opts.speedOut, $.proxy(this.close, this))
            }
        }
    };
    F.helpers.title = {
        defaults: {
            type: 'float',
            position: 'bottom'
        },
        beforeShow: function (opts) {
            var current = F.current,
                text = current.title,
                type = opts.type,
                title, target;
            if ($.isFunction(text)) {
                text = text.call(current.element, current)
            }
            if (!isString(text) || $.trim(text) === '') {
                return
            }
            title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');
            switch (type) {
                case 'inside':
                    target = F.skin;
                    break;
                case 'outside':
                    target = F.wrap;
                    break;
                case 'over':
                    target = F.inner;
                    break;
                default:
                    target = F.skin;
                    title.appendTo('body');
                    if (IE) {
                        title.width(title.width())
                    }
                    title.wrapInner('<span class="child"></span>');
                    F.current.margin[2] += Math.abs(getScalar(title.css('margin-bottom')));
                    break
            }
            title[(opts.position === 'top' ? 'prependTo' : 'appendTo')](target)
        }
    };
    $.fn.fancybox = function (options) {
        var index, that = $(this),
            selector = this.selector || '',
            run = function (e) {
                var what = $(this).blur(),
                    idx = index,
                    relType, relVal;
                if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
                    relType = options.groupAttr || 'data-fancybox-group';
                    relVal = what.attr(relType);
                    if (!relVal) {
                        relType = 'rel';
                        relVal = what.get(0)[relType]
                    }
                    if (relVal && relVal !== '' && relVal !== 'nofollow') {
                        what = selector.length ? $(selector) : that;
                        what = what.filter('[' + relType + '="' + relVal + '"]');
                        idx = what.index(this)
                    }
                    options.index = idx;
                    if (F.open(what, options) !== !1) {
                        e.preventDefault()
                    }
                }
            };
        options = options || {};
        index = options.index || 0;
        if (!selector || options.live === !1) {
            that.unbind('click.fb-start').bind('click.fb-start', run)
        } else {
            D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run)
        }
        this.filter('[data-fancybox-start=1]').trigger('click');
        return this
    };
    D.ready(function () {
        if ($.scrollbarWidth === undefined) {
            $.scrollbarWidth = function () {
                var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
                    child = parent.children(),
                    width = child.innerWidth() - child.height(99).innerWidth();
                parent.remove();
                return width
            }
        }
        if ($.support.fixedPosition === undefined) {
            $.support.fixedPosition = (function () {
                var elem = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
                    fixed = (elem[0].offsetTop === 20 || elem[0].offsetTop === 15);
                elem.remove();
                return fixed
            }())
        }
        $.extend(F.defaults, {
            scrollbarWidth: $.scrollbarWidth(),
            fixed: $.support.fixedPosition,
            parent: $('body')
        })
    })
}(window, document, jQuery));
(function ($) {
    var F = $.fancybox;
    F.helpers.buttons = {
        defaults: {
            skipSingle: !1,
            position: 'top',
            tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:jQuery.fancybox.close();"></a></li></ul></div>'
        },
        list: null,
        buttons: null,
        beforeLoad: function (opts, obj) {
            if (opts.skipSingle && obj.group.length < 2) {
                obj.helpers.buttons = !1;
                obj.closeBtn = !0;
                return
            }
            obj.margin[opts.position === 'bottom' ? 2 : 0] += 30
        },
        onPlayStart: function () {
            if (this.buttons) {
                this.buttons.play.attr('title', 'Pause slideshow').addClass('btnPlayOn')
            }
        },
        onPlayEnd: function () {
            if (this.buttons) {
                this.buttons.play.attr('title', 'Start slideshow').removeClass('btnPlayOn')
            }
        },
        afterShow: function (opts, obj) {
            var buttons = this.buttons;
            if (!buttons) {
                this.list = $(opts.tpl).addClass(opts.position).appendTo('body');
                buttons = {
                    prev: this.list.find('.btnPrev').click(F.prev),
                    next: this.list.find('.btnNext').click(F.next),
                    play: this.list.find('.btnPlay').click(F.play),
                    toggle: this.list.find('.btnToggle').click(F.toggle)
                }
            }
            if (obj.index > 0 || obj.loop) {
                buttons.prev.removeClass('btnDisabled')
            } else {
                buttons.prev.addClass('btnDisabled')
            }
            if (obj.loop || obj.index < obj.group.length - 1) {
                buttons.next.removeClass('btnDisabled');
                buttons.play.removeClass('btnDisabled')
            } else {
                buttons.next.addClass('btnDisabled');
                buttons.play.addClass('btnDisabled')
            }
            this.buttons = buttons;
            this.onUpdate(opts, obj)
        },
        onUpdate: function (opts, obj) {
            var toggle;
            if (!this.buttons) {
                return
            }
            toggle = this.buttons.toggle.removeClass('btnDisabled btnToggleOn');
            if (obj.canShrink) {
                toggle.addClass('btnToggleOn')
            } else if (!obj.canExpand) {
                toggle.addClass('btnDisabled')
            }
        },
        beforeClose: function () {
            if (this.list) {
                this.list.remove()
            }
            this.list = null;
            this.buttons = null
        }
    }
}(jQuery));
(function ($) {
    var F = $.fancybox;
    F.helpers.thumbs = {
        defaults: {
            width: 50,
            height: 50,
            position: 'bottom',
            source: function (item) {
                var href;
                if (item.element) {
                    href = $(item.element).find('img').attr('src')
                }
                if (!href && item.type === 'image' && item.href) {
                    href = item.href
                }
                return href
            }
        },
        wrap: null,
        list: null,
        width: 0,
        init: function (opts, obj) {
            var that = this,
                list, thumbWidth = opts.width,
                thumbHeight = opts.height,
                thumbSource = opts.source;
            list = '';
            for (var n = 0; n < obj.group.length; n++) {
                list += '<li><a style="width:' + thumbWidth + 'px;height:' + thumbHeight + 'px;" href="javascript:jQuery.fancybox.jumpto(' + n + ');"></a></li>'
            }
            this.wrap = $('<div id="fancybox-thumbs"></div>').addClass(opts.position).appendTo('body');
            this.list = $('<ul>' + list + '</ul>').appendTo(this.wrap);
            $.each(obj.group, function (i) {
                var href = thumbSource(obj.group[i]);
                if (!href) {
                    return
                }
                $("<img />").load(function () {
                    var width = this.width,
                        height = this.height,
                        widthRatio, heightRatio, parent;
                    if (!that.list || !width || !height) {
                        return
                    }
                    widthRatio = width / thumbWidth;
                    heightRatio = height / thumbHeight;
                    parent = that.list.children().eq(i).find('a');
                    if (widthRatio >= 1 && heightRatio >= 1) {
                        if (widthRatio > heightRatio) {
                            width = Math.floor(width / heightRatio);
                            height = thumbHeight
                        } else {
                            width = thumbWidth;
                            height = Math.floor(height / widthRatio)
                        }
                    }
                    $(this).css({
                        width: width,
                        height: height,
                        top: Math.floor(thumbHeight / 2 - height / 2),
                        left: Math.floor(thumbWidth / 2 - width / 2)
                    });
                    parent.width(thumbWidth).height(thumbHeight);
                    $(this).hide().appendTo(parent).fadeIn(300)
                }).attr('src', href)
            });
            this.width = this.list.children().eq(0).outerWidth(!0);
            this.list.width(this.width * (obj.group.length + 1)).css('left', Math.floor($(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5)))
        },
        beforeLoad: function (opts, obj) {
            if (obj.group.length < 2) {
                obj.helpers.thumbs = !1;
                return
            }
            obj.margin[opts.position === 'top' ? 0 : 2] += ((opts.height) + 15)
        },
        afterShow: function (opts, obj) {
            if (this.list) {
                this.onUpdate(opts, obj)
            } else {
                this.init(opts, obj)
            }
            this.list.children().removeClass('active').eq(obj.index).addClass('active')
        },
        onUpdate: function (opts, obj) {
            if (this.list) {
                this.list.stop(!0).animate({
                    'left': Math.floor($(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5))
                }, 150)
            }
        },
        beforeClose: function () {
            if (this.wrap) {
                this.wrap.remove()
            }
            this.wrap = null;
            this.list = null;
            this.width = 0
        }
    }
}(jQuery));
(function ($) {
    "use strict";
    var F = $.fancybox,
        format = function (url, rez, params) {
            params = params || '';
            if ($.type(params) === "object") {
                params = $.param(params, !0)
            }
            $.each(rez, function (key, value) {
                url = url.replace('$' + key, value || '')
            });
            if (params.length) {
                url += (url.indexOf('?') > 0 ? '&' : '?') + params
            }
            return url
        };
    F.helpers.media = {
        defaults: {
            youtube: {
                matcher: /(youtube\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: 'opaque',
                    enablejsapi: 1
                },
                type: 'iframe',
                url: '//www.youtube.com/embed/$3'
            },
            vimeo: {
                matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                type: 'iframe',
                url: '//player.vimeo.com/video/$1'
            },
            metacafe: {
                matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
                params: {
                    autoPlay: 'yes'
                },
                type: 'swf',
                url: function (rez, params, obj) {
                    obj.swf.flashVars = 'playerVars=' + $.param(params, !0);
                    return '//www.metacafe.com/fplayer/' + rez[1] + '/.swf'
                }
            },
            dailymotion: {
                matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                params: {
                    additionalInfos: 0,
                    autoStart: 1
                },
                type: 'swf',
                url: '//www.dailymotion.com/swf/video/$1'
            },
            twitvid: {
                matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
                params: {
                    autoplay: 0
                },
                type: 'iframe',
                url: '//www.twitvid.com/embed.php?guid=$1'
            },
            twitpic: {
                matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
                type: 'image',
                url: '//twitpic.com/show/full/$1/'
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: 'image',
                url: '//$1/p/$2/media/'
            },
            google_maps: {
                matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
                type: 'iframe',
                url: function (rez) {
                    return '//maps.google.' + rez[1] + '/' + rez[3] + '' + rez[4] + '&output=' + (rez[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed')
                }
            }
        },
        beforeLoad: function (opts, obj) {
            var url = obj.href || '',
                type = !1,
                what, item, rez, params;
            for (what in opts) {
                item = opts[what];
                rez = url.match(item.matcher);
                if (rez) {
                    type = item.type;
                    params = $.extend(!0, {}, item.params, obj[what] || ($.isPlainObject(opts[what]) ? opts[what].params : null));
                    url = $.type(item.url) === "function" ? item.url.call(this, rez, params, obj) : format(item.url, rez, params);
                    break
                }
            }
            if (type) {
                obj.href = url;
                obj.type = type;
                obj.autoHeight = !1
            }
        }
    }
}(jQuery));

function smartColumns($container, $blockClass, width, banner) {
    console.log($blockClass);
    var maxrow = 4;
    $container.css({
        'width': "100%"
    });
    var colWrap = $container.width();
    var colNum = Math.floor(colWrap / width);
    var colLen = $container.find($('.product-block')).length;
    console.log(colLen);
    if (colNum > colLen) {
        colNum = colLen
    }
    var marFixed = Math.floor((colWrap - width * colNum) / (colNum - 1));
    console.log(marFixed);
    $container.css({
        'width': colWrap
    });
    if ($container.find($('.product-block')).length == 2) {
        $container.find($('.product-block')).css({
            'marginLeft': 20
        })
    } else {
        $container.find($('.product-block')).css({
            'marginLeft': marFixed
        })
    }
    var i = 0;
    $container.find($('.product-block')).each(function () {
        if (i % colNum == 0) {
            $(this).addClass('first-of-type')
        } else {
            $(this).removeClass('first-of-type')
        }
        i++
    })
}

function smartColumnsTest($container, $blockClass, width, banner) {
    var maxrow = 4;
    $container.css({
        'width': "100%"
    });
    var colWrap = $container.width();
    var colNum = Math.floor(colWrap / width);
    var colLen = $container.find($blockClass).length;
    if (colNum > colLen) {
        colNum = colLen
    }
    if (colNum > 4) {
        colNum = maxrow
    }
    console.log(colNum);
    var marFixed = Math.floor((colWrap - width * colNum) / (colNum - 1));
    $container.css({
        'width': colWrap
    });
    if ($container.find($blockClass).length == 2) {
        $container.find($blockClass).css({
            'marginLeft': 20
        })
    } else {
        $container.find($blockClass).css({
            'marginLeft': marFixed
        })
    }
    var i = 0;
    $container.find($blockClass).each(function () {
        if (i % colNum == 0) {
            $(this).addClass('first-of-type')
        } else {
            $(this).removeClass('first-of-type')
        }
        i++
    })
}

function smartColumnsNew($container, $blockClass, width, banner) {
    var maxrow = 3;
    $container.css({
        'width': "100%"
    });
    var colWrap = $container.width();
    var colNum = Math.floor(colWrap / width);
    console.log('Ширина: ' + maxrow);
    var colLen = $container.find($blockClass).length;
    if (colNum > colLen) {
        colNum = colLen
    }
    if (colNum > maxrow) {
        colNum = maxrow
    }
    console.log(colNum);
    var marFixed = Math.floor((colWrap - width * colNum) / (colNum - 1));
    console.log('marFixed: ' + marFixed);
    $container.css({
        'width': colWrap
    });
    if ($container.find($blockClass).length == 2) {
        $container.find($blockClass).css({
            'marginLeft': 20
        })
    } else {
        $container.find($blockClass).css({
            'marginLeft': marFixed
        })
    }
    var i = 0;
    $container.find($blockClass).each(function () {
        if (i % colNum == 0) {
            $(this).addClass('first-of-type')
        } else {
            $(this).removeClass('first-of-type')
        }
        i++
    })
}
$(function () {
    $('.lightbox').fancybox({
        titleShow: !1,
        transitionIn: 'elastic',
        transitionOut: 'elastic',
        padding: 0,
        margin: 0,
        showNavArrows: !1,
        scrolling: !1
    });
    $('.search-btn').click(function () {
        var search_input = $('#searchstring');
        var search_button = $('.search input.button');
        if (search_input.hasClass('active')) {
            search_input.removeClass('active');
            search_button.removeClass('active');
            $(this).parents(".search").removeClass("show")
        } else {
            search_input.addClass('active');
            search_button.addClass('active');
            $(this).parents(".search").addClass("show")
        }
    });
    if ($(window).width() <= 640) {
        $('#searchstring').addClass('active');
        $('.search input.button').addClass('active');
        $('.search input#searchstring.active').attr('placeholder', '')
    }
    $("#accordion-lk").accordion({
        heightStyle: "content",
        collapsible: !0
    });
    setTimeout(function () {
        $('.opacity-block').css('opacity', '1')
    }, 800);
    setTimeout(function () {
        $('.page-preloader').hide()
    }, 950);
    $(".catalog-subcategories-list .list-height").mCustomScrollbar({
        scrollButtons: {
            enable: !1
        },
        setWidth: 235,
        mouseWheelPixels: 1000
    });
    $(".materials-container .material").mCustomScrollbar({
        scrollButtons: {
            enable: !1
        },
        mouseWheelPixels: 1000
    });
    if ($(window).width() < 980) {
        $('body').addClass('mobile')
    } else {
        $('body').removeClass('mobile')
    }
    $(window).resize(function () {
        if ($(window).width() < 980) {
            if ($('body').hasClass('mobile') === !1) {
                $('body').addClass('mobile')
            }
        } else {
            if ($('body').hasClass('mobile') === !0) {
                $('body').removeClass('mobile')
            }
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 55) {
            $("body.mobile #checkoutSidebar").addClass("fixed-cart")
        } else {
            $("body.mobile #checkoutSidebar").removeClass("fixed-cart")
        }
        if ($(this).scrollTop() > 55) {
            $("body.mobile .fixed-block").fadeIn()
        } else {
            $("body.mobile .fixed-block").fadeOut()
        }
    });
    $("body.mobile .info-header .top-list").click(function () {
        $(this).toggleClass("active");
        $("header .top-line").slideToggle();
        $("body.mobile .phones-block-header").removeClass("active");
        $(".table-header .column-block-tell").hide();
        $("body.mobile .main-categories-wrapper .search-icon").removeClass("active");
        $(".info-header .search-wrapper").hide();
        $("body.mobile .main-categories-menu").hide()
    });
    $("body.mobile .phones-block-header").click(function () {
        $(this).toggleClass("active");
        $(".table-header .column-block-tell").slideToggle();
        $("header .top-line").hide();
        $("body.mobile .info-header .top-list").removeClass("active");
        $("body.mobile .main-categories-wrapper .search-icon").removeClass("active");
        $(".info-header .search-wrapper").hide();
        $("body.mobile .main-categories-menu").hide()
    });
    $("body.mobile .main-categories-wrapper .search-icon").click(function () {
        $(this).toggleClass("active");
        $(".info-header .search-wrapper").slideToggle();
        $("body.mobile .main-categories-menu").hide()
    });
    $("body.mobile .main-categories-wrapper .label").click(function () {
        $("body.mobile .main-categories-menu").slideToggle();
        $(".info-header .search-wrapper").hide();
        $("header .top-line").hide();
        $("body.mobile .info-header .top-list").removeClass("active");
        $("body.mobile .main-categories-wrapper .search-icon").removeClass("active")
    });
    $("body.mobile .title-filter").click(function () {
        $(this).toggleClass("active");
        $("body.mobile .filter-block").slideToggle()
    });
    $("body.mobile .product-card .image-card").click(function () {
        $(this).hide();
        $("#tabs").addClass("open-gallery");
        var sideBar = $(".product-card .sidebar");
        sideBar.insertAfter($(".product-card #tab-all"))
    });
    $('body.mobile .main-categories-menu .submenu').hide();
    $('body.mobile .main-categories-menu li.main').each(function () {
        $('body.mobile .main-categories-menu .submenu').hide();
        var subMenu = $(this).find('.submenu');
        var blockList = $(this);
        $(blockList).click(function () {
            subMenu.slideToggle();
            subMenu.parent().toggleClass("active")
        })
    })
});
(function ($) {
    $(document).ready(function () {
        var o = $(".more-separator");
        if (o.length > 0) {
            o.nextAll().wrapAll("<div class='collapse' id='collapseSeoText'></div>");
            o.parent().append("<a class='link-default show-all' data-toggle='collapse' href='#collapseSeoText' aria-expanded='false' aria-controls='collapseSeoText'>" + o.text() + "</a>");
            o.remove()
        }
    })
})(jQuery);
(function ($) {
    $(document).ready(function () {
        if ($(window).width() >= 641) {
            var o = $("div[style='page-break-after: always']");
            if (o.length > 0) {
                o.nextAll().wrapAll("<div class='collapse' id='collapseSeoText'></div>");
                o.parent().append("<button class='btn slider-link-more' data-toggle='collapse' href='#collapseSeoText' aria-expanded='false' aria-controls='collapseSeoText'>Читать все</button>")
            }
            $("[data-toggle]").click(function () {
                var $collapseSeoText = $("#collapseSeoText");
                var $showBtn = $('.btn.slider-link-more');
                if ($collapseSeoText.hasClass("show")) {
                    $collapseSeoText.removeClass("show")
                    $showBtn.text('Читать все')
                } else {
                    $collapseSeoText.addClass("show");
                    $showBtn.text('Скрыть')
                }
            })
        } else {
            var o = $(".text-formatted p:first-child");
            if (o.length > 0) {
                o.nextAll().wrapAll("<div class='collapse' id='collapseSeoText'></div>");
                o.parent().append("<button class='btn slider-link-more' data-toggle='collapse' href='#collapseSeoText' aria-expanded='false' aria-controls='collapseSeoText'>Читать все</button>")
            }
            $("[data-toggle]").click(function () {
                var $collapseSeoText = $("#collapseSeoText");
                var $showBtn = $('.btn.slider-link-more');
                if ($collapseSeoText.hasClass("show")) {
                    $collapseSeoText.removeClass("show");
                    $showBtn.text('Читать все')
                } else {
                    $collapseSeoText.addClass("show");
                    $showBtn.text('Скрыть')
                }
            })
        }
        $("body").on("click", ".form-guestbook_button", function () {
            $(this).closest("form").submit()
        })
    })
})(jQuery);
(function ($) {
    $('.nav-pages').click(function () {
        if ($(window).width() < 641) {
            $('.header .nav-pages .nav-item').slideToggle()
        }
    });
    $('.nav-item-close img').click(function () {
        if ($(window).width() < 641) {
            $('.header .nav-pages .nav-item').css('display: none')
        }
    })
})(jQuery);
(function ($) {
    $('.header .nav-info').click(function () {
        if ($(window).width() < 641) {
            $('.nav-info .nav-item').slideToggle()
        }
    });
    $('.header .nav-item-close img').click(function () {
        if ($(window).width() < 641) {
            $('.nav-info .nav-item').css('display: none')
        }
    })
})(jQuery);
(function ($) {
    $(document).ready(function () {
        $('.bottom-footer-block .btn-top').click(function () {
            $('html, body').animate({
                scrollTop: 0
            })
        })
    })
})(jQuery);
(function ($) {
    if ($(window).outerWidth() <= 640) {
        $('.filter-sort .title').click(function () {
            $('.catalog-page .filter-block').slideToggle(1000);
            $(this).toggleClass('active')
        })
    }
    $('.categories-name-mob').click(function () {
        $('.catalog-page aside .catalog-categories').slideToggle(1000);
        $(this).toggleClass('active')
    });
    $('.subCategory-name-mob').click(function () {
        $('.catalog-subcategories-list').slideToggle(1000);
        $(this).toggleClass('active')
    })
})(jQuery);
(function ($) {
    if ($(window).width() < 641) {
        $('.files-upload .block a').text('скачать каталог pdf')
    }
})(jQuery);
(function ($) {
    $('.title-block-card.mobile').click(function () {
        $('.product-card .characteristics .attr-list').slideToggle(1000);
        $(this).toggleClass('active')
    })
})(jQuery);
(function ($) {
    $('.open-comment-form').click(function () {
        $('.review-form-wrapper').slideToggle(500)
    })
})(jQuery);
(function () {
    $('.phones-block-desktop').click(function () {
        var parent = $('.phones-block-desktop .phones-list-dropdown');
        var phone_item_absolute = $('.phones-block-desktop .phone-item-absolute');
        if (!parent.hasClass('active')) {
            parent.addClass('active');
            phone_item_absolute.fadeIn(500)
        } else {
            parent.removeClass('active');
            phone_item_absolute.fadeOut(200)
        }
    });
    $('.phones-block-mobile').click(function () {
        var parent = $('.phones-block-mobile .phones-list-dropdown');
        var phone_item_absolute = $('.phones-block-mobile .phone-item-absolute');
        if (!parent.hasClass('active')) {
            parent.addClass('active');
            phone_item_absolute.fadeIn(500)
        } else {
            parent.removeClass('active');
            phone_item_absolute.fadeOut(200)
        }
    })
})(jQuery);
(function () {
    $(document).ready(function () {
        if ($(window).width() <= 640) {
            var elem = $('.bottom-footer-block');
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    elem.show(200);
                    elem.addClass('200');
                    console.log('if')
                } else {
                    elem.hide(100);
                    console.log('else')
                }
            })
        }
        $(window).resize(function () {
            var elem = $('.bottom-footer-block');
            if ($(window).width() > 640) {
                elem.hide()
            }
            if ($(window).width() <= 640) {
                $(window).scroll(function () {
                    if ($(this).scrollTop() > 100) {
                        elem.show(200)
                    } else {
                        elem.hide(100)
                    }
                })
            }
        })
    })
})(jQuery);
(function ($) {
    var $inputSearch = $('.header .bottom-line .bottom-line-conteiner .search');
    $inputSearch.focusin(function () {
        $(this).addClass('active')
    });
    $inputSearch.focusout(function () {
        $(this).removeClass('active')
    })
})(jQuery);
(function ($) {
    $("[data-location-link]").click(function () {
        window.location.assign($(this).data("locationLink"))
    })
})(jQuery);
(function ($) {
    document.oncopy = function (e) {
        var copytext = '';
        var selection = null;
        if (copytext = window.getSelection) {
            selection = window.getSelection();
            copytext = selection.toString()
        } else {
            selection = document.selection.createRange();
            copytext = selection.text
        }
        copytext += '\n' + 'Подробнее: ' + document.location.href;
        var newDiv = document.createElement('div');
        newDiv.style.position = 'absolute';
        newDiv.style.left = '-99999px';
        document.body.appendChild(newDiv);
        newDiv.innerHTML = copytext;
        selection.selectAllChildren(newDiv);
        window.setTimeout(function () {
            document.body.removeChild(newDiv)
        }, 100)
    }
})(jQuery);
(function (c) {
    c.fn.styler = function (x) {
        var e = c.extend({
            wrapper: "form",
            idSuffix: "-styler",
            filePlaceholder: "\u0424\u0430\u0439\u043b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d",
            fileBrowse: "\u041e\u0431\u0437\u043e\u0440...",
            selectPlaceholder: "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435...",
            selectSearch: !1,
            selectSearchLimit: 10,
            selectSearchNotFound: "\u0421\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e",
            selectSearchPlaceholder: "\u041f\u043e\u0438\u0441\u043a...",
            selectVisibleOptions: 0,
            singleSelectzIndex: "100",
            selectSmartPositioning: !0,
            onSelectOpened: function () {},
            onSelectClosed: function () {},
            onFormStyled: function () {}
        }, x);
        return this.each(function () {
            function A() {
                var c = "",
                    p = "",
                    b = "",
                    n = "";
                void 0 !== a.attr("id") && "" !== a.attr("id") && (c = ' id="' + a.attr("id") + e.idSuffix + '"');
                void 0 !== a.attr("title") && "" !== a.attr("title") && (p = ' title="' + a.attr("title") + '"');
                void 0 !== a.attr("class") && "" !== a.attr("class") && (b = " " + a.attr("class"));
                var d = a.data(),
                    g;
                for (g in d) "" !== d[g] && (n += " data-" + g + '="' + d[g] + '"');
                this.id = c + n;
                this.title = p;
                this.classes = b
            }
            var a = c(this);
            if (a.is(":checkbox")) a.each(function () {
                if (1 > a.parent("div.jq-checkbox").length) {
                    var e = function () {
                        var e = new A,
                            b = c("<div" + e.id + ' class="jq-checkbox' + e.classes + '"' + e.title + '><div class="jq-checkbox__div"></div></div>');
                        a.css({
                            position: "absolute",
                            zIndex: "-1",
                            opacity: 0,
                            margin: 0,
                            padding: 0
                        }).after(b).prependTo(b);
                        b.attr("unselectable", "on").css({
                            "-webkit-user-select": "none",
                            "-moz-user-select": "none",
                            "-ms-user-select": "none",
                            "-o-user-select": "none",
                            "user-select": "none",
                            display: "inline-block",
                            position: "relative",
                            overflow: "hidden"
                        });
                        a.is(":checked") && b.addClass("checked");
                        a.is(":disabled") && b.addClass("disabled");
                        b.on("click.styler", function () {
                            b.is(".disabled") || (a.is(":checked") ? (a.prop("checked", !1), b.removeClass("checked")) : (a.prop("checked", !0), b.addClass("checked")), a.change());
                            return !1
                        });
                        a.closest("label").add('label[for="' + a.attr("id") + '"]').click(function (a) {
                            b.click();
                            a.preventDefault()
                        });
                        a.on("change.styler", function () {
                            a.is(":checked") ? b.addClass("checked") : b.removeClass("checked")
                        }).on("keydown.styler", function (a) {
                            32 == a.which && b.click()
                        }).on("focus.styler", function () {
                            b.is(".disabled") || b.addClass("focused")
                        }).on("blur.styler", function () {
                            b.removeClass("focused")
                        })
                    };
                    e();
                    a.on("refresh", function () {
                        a.off(".styler").parent().before(a).remove();
                        e()
                    })
                }
            });
            else if (a.is(":radio")) a.each(function () {
                if (1 > a.parent("div.jq-radio").length) {
                    var s = function () {
                        var p = new A,
                            b = c("<div" + p.id + ' class="jq-radio' + p.classes + '"' + p.title + '><div class="jq-radio__div"></div></div>');
                        a.css({
                            position: "absolute",
                            zIndex: "-1",
                            opacity: 0,
                            margin: 0,
                            padding: 0
                        }).after(b).prependTo(b);
                        b.attr("unselectable", "on").css({
                            "-webkit-user-select": "none",
                            "-moz-user-select": "none",
                            "-ms-user-select": "none",
                            "-o-user-select": "none",
                            "user-select": "none",
                            display: "inline-block",
                            position: "relative"
                        });
                        a.is(":checked") && b.addClass("checked");
                        a.is(":disabled") && b.addClass("disabled");
                        b.on("click.styler", function () {
                            b.is(".disabled") || (b.closest(e.wrapper).find('input[name="' + a.attr("name") + '"]').prop("checked", !1).parent().removeClass("checked"), a.prop("checked", !0).parent().addClass("checked"), a.change());
                            return !1
                        });
                        a.closest("label").add('label[for="' + a.attr("id") + '"]').click(function (a) {
                            b.click();
                            a.preventDefault()
                        });
                        a.on("change.styler", function () {
                            a.parent().addClass("checked")
                        }).on("focus.styler", function () {
                            b.is(".disabled") || b.addClass("focused")
                        }).on("blur.styler", function () {
                            b.removeClass("focused")
                        })
                    };
                    s();
                    a.on("refresh", function () {
                        a.off(".styler").parent().before(a).remove();
                        s()
                    })
                }
            });
            else if (a.is(":file")) a.css({
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
                margin: 0,
                padding: 0
            }).each(function () {
                if (1 > a.parent("div.jq-file").length) {
                    var s = function () {
                        var p = new A,
                            b = a.data("placeholder");
                        void 0 === b && (b = e.filePlaceholder);
                        var n = a.data("browse");
                        if (void 0 === n || "" === n) n = e.fileBrowse;
                        var d = c("<div" + p.id + ' class="jq-file' + p.classes + '"' + p.title + ' style="display: inline-block; position: relative; overflow: hidden"></div>'),
                            g = c('<div class="jq-file__name">' + b + "</div>").appendTo(d);
                        c('<div class="jq-file__browse">' + n + "</div>").appendTo(d);
                        a.after(d);
                        d.append(a);
                        a.is(":disabled") && d.addClass("disabled");
                        a.on("change.styler", function () {
                            var c = a.val();
                            if (a.is("[multiple]"))
                                for (var c = "", e = a[0].files, p = 0; p < e.length; p++) c += (0 < p ? ", " : "") + e[p].name;
                            g.text(c.replace(/.+[\\\/]/, ""));
                            "" === c ? (g.text(b), d.removeClass("changed")) : d.addClass("changed")
                        }).on("focus.styler", function () {
                            d.addClass("focused")
                        }).on("blur.styler", function () {
                            d.removeClass("focused")
                        }).on("click.styler", function () {
                            d.removeClass("focused")
                        })
                    };
                    s();
                    a.on("refresh", function () {
                        a.off(".styler").parent().before(a).remove();
                        s()
                    })
                }
            });
            else if (a.is("select")) a.each(function () {
                if (1 > a.parent("div.jqselect").length) {
                    var s = function () {
                        function p(a) {
                            a.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function (a) {
                                var b = null;
                                "mousewheel" == a.type ? b = -1 * a.originalEvent.wheelDelta : "DOMMouseScroll" == a.type && (b = 40 * a.originalEvent.detail);
                                b && (a.stopPropagation(), a.preventDefault(), c(this).scrollTop(b + c(this).scrollTop()))
                            })
                        }

                        function b() {
                            for (var a = 0, c = g.length; a < c; a++) {
                                var b = "",
                                    e = "",
                                    p = b = "",
                                    d = "",
                                    q = "";
                                g.eq(a).prop("selected") && (e = "selected sel");
                                g.eq(a).is(":disabled") && (e = "disabled");
                                g.eq(a).is(":selected:disabled") && (e = "selected sel disabled");
                                void 0 !== g.eq(a).attr("class") && (p = " " + g.eq(a).attr("class"), q = ' data-jqfs-class="' + g.eq(a).attr("class") + '"');
                                var u = g.eq(a).data(),
                                    t;
                                for (t in u) "" !== u[t] && (b += " data-" + t + '="' + u[t] + '"');
                                b = "<li" + q + b + ' class="' + e + p + '">' + g.eq(a).html() + "</li>";
                                g.eq(a).parent().is("optgroup") && (void 0 !== g.eq(a).parent().attr("class") && (d = " " + g.eq(a).parent().attr("class")), b = "<li" + q + ' class="' + e + p + " option" + d + '">' + g.eq(a).html() + "</li>", g.eq(a).is(":first-child") && (b = '<li class="optgroup' + d + '">' + g.eq(a).parent().attr("label") + "</li>" + b));
                                s += b
                            }
                        }

                        function n() {
                            var d = new A,
                                v = "",
                                k = a.data("placeholder"),
                                h = a.data("search"),
                                n = a.data("search-limit"),
                                w = a.data("search-not-found"),
                                q = a.data("search-placeholder"),
                                u = a.data("z-index"),
                                t = a.data("smart-positioning");
                            void 0 === k && (k = e.selectPlaceholder);
                            if (void 0 === h || "" === h) h = e.selectSearch;
                            if (void 0 === n || "" === n) n = e.selectSearchLimit;
                            if (void 0 === w || "" === w) w = e.selectSearchNotFound;
                            void 0 === q && (q = e.selectSearchPlaceholder);
                            if (void 0 === u || "" === u) u = e.singleSelectzIndex;
                            if (void 0 === t || "" === t) t = e.selectSmartPositioning;
                            var f = c("<div" + d.id + ' class="jq-selectbox jqselect' + d.classes + '" style="display: inline-block; position: relative; z-index:' + u + '"><div class="jq-selectbox__select"' + d.title + ' style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>');
                            a.css({
                                margin: 0,
                                padding: 0
                            }).after(f).prependTo(f);
                            var E = c("div.jq-selectbox__select", f),
                                z = c("div.jq-selectbox__select-text", f),
                                d = g.filter(":selected");
                            b();
                            h && (v = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + q + '"></div><div class="jq-selectbox__not-found">' + w + "</div>");
                            var l = c('<div class="jq-selectbox__dropdown" style="position: absolute">' + v + '<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">' + s + "</ul></div>");
                            f.append(l);
                            var r = c("ul", l),
                                m = c("li", l),
                                y = c("input", l),
                                x = c("div.jq-selectbox__not-found", l).hide();
                            m.length < n && y.parent().hide();
                            var B = 0,
                                F = 0;
                            m.each(function () {
                                var a = c(this);
                                a.css({
                                    display: "inline-block",
                                    "white-space": "nowrap"
                                });
                                a.innerWidth() > B && (B = a.innerWidth(), F = a.width());
                                a.css({
                                    display: "block"
                                })
                            });
                            v = f.clone().appendTo("body").width("auto");
                            h = v.width();
                            v.remove();
                            h == f.width() && z.width(F);
                            B > f.width() && l.width(B);
                            "" === a.val() ? z.text(k).addClass("placeholder") : z.text(d.text());
                            "" === g.first().text() && "" !== a.data("placeholder") && m.first().hide();
                            a.css({
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                height: "100%",
                                opacity: 0
                            });
                            var G = f.outerHeight(),
                                C = y.outerHeight(),
                                D = r.css("max-height"),
                                k = m.filter(".selected");
                            1 > k.length && m.first().addClass("selected sel");
                            void 0 === m.data("li-height") && m.data("li-height", m.outerHeight());
                            var H = l.css("top");
                            "auto" == l.css("left") && l.css({
                                left: 0
                            });
                            "auto" == l.css("top") && l.css({
                                top: G
                            });
                            l.hide();
                            k.length && (g.first().text() != d.text() && f.addClass("changed"), f.data("jqfs-class", k.data("jqfs-class")), f.addClass(k.data("jqfs-class")));
                            if (a.is(":disabled")) return f.addClass("disabled"), !1;
                            E.click(function () {
                                c("div.jq-selectbox").filter(".opened").length && e.onSelectClosed.call(c("div.jq-selectbox").filter(".opened"));
                                a.focus();
                                if (!navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) {
                                    var b = c(window),
                                        q = m.data("li-height"),
                                        d = f.offset().top,
                                        k = b.height() - G - (d - b.scrollTop()),
                                        h = a.data("visible-options");
                                    if (void 0 === h || "" === h) h = e.selectVisibleOptions;
                                    var v = 5 * q,
                                        n = q * h;
                                    0 < h && 6 > h && (v = n);
                                    0 === h && (n = "auto");
                                    var h = function () {
                                            l.height("auto").css({
                                                bottom: "auto",
                                                top: H
                                            });
                                            var a = function () {
                                                r.css("max-height", Math.floor((k - 20 - C) / q) * q)
                                            };
                                            a();
                                            r.css("max-height", n);
                                            "none" != D && r.css("max-height", D);
                                            k < l.outerHeight() + 20 && a()
                                        },
                                        s = function () {
                                            l.height("auto").css({
                                                top: "auto",
                                                bottom: H
                                            });
                                            var a = function () {
                                                r.css("max-height", Math.floor((d - b.scrollTop() - 20 - C) / q) * q)
                                            };
                                            a();
                                            r.css("max-height", n);
                                            "none" != D && r.css("max-height", D);
                                            d - b.scrollTop() - 20 < l.outerHeight() + 20 && a()
                                        };
                                    !0 === t || 1 === t ? k > v + C + 20 ? (h(), f.removeClass("dropup").addClass("dropdown")) : (s(), f.removeClass("dropdown").addClass("dropup")) : (!1 === t || 0 === t) && k > v + C + 20 && (h(), f.removeClass("dropup").addClass("dropdown"));
                                    c("div.jqselect").css({
                                        zIndex: u - 1
                                    }).removeClass("opened");
                                    f.css({
                                        zIndex: u
                                    });
                                    l.is(":hidden") ? (c("div.jq-selectbox__dropdown:visible").hide(), l.show(), f.addClass("opened focused"), e.onSelectOpened.call(f)) : (l.hide(), f.removeClass("opened dropup dropdown"), c("div.jq-selectbox").filter(".opened").length && e.onSelectClosed.call(f));
                                    y.length && (y.val("").keyup(), x.hide(), y.keyup(function () {
                                        var b = c(this).val();
                                        m.each(function () {
                                            c(this).html().match(RegExp(".*?" + b + ".*?", "i")) ? c(this).show() : c(this).hide()
                                        });
                                        "" === g.first().text() && "" !== a.data("placeholder") && m.first().hide();
                                        1 > m.filter(":visible").length ? x.show() : x.hide()
                                    }));
                                    m.filter(".selected").length && (0 !== r.innerHeight() / q % 2 && (q /= 2), r.scrollTop(r.scrollTop() + m.filter(".selected").position().top - r.innerHeight() / 2 + q));
                                    p(r);
                                    return !1
                                }
                            });
                            m.hover(function () {
                                c(this).siblings().removeClass("selected")
                            });
                            m.filter(".selected").text();
                            m.filter(".selected").text();
                            m.filter(":not(.disabled):not(.optgroup)").click(function () {
                                a.focus();
                                var b = c(this),
                                    q = b.text();
                                if (!b.is(".selected")) {
                                    var d = b.index(),
                                        d = d - b.prevAll(".optgroup").length;
                                    b.addClass("selected sel").siblings().removeClass("selected sel");
                                    g.prop("selected", !1).eq(d).prop("selected", !0);
                                    z.text(q);
                                    f.data("jqfs-class") && f.removeClass(f.data("jqfs-class"));
                                    f.data("jqfs-class", b.data("jqfs-class"));
                                    f.addClass(b.data("jqfs-class"));
                                    a.change()
                                }
                                l.hide();
                                f.removeClass("opened dropup dropdown");
                                e.onSelectClosed.call(f)
                            });
                            l.mouseout(function () {
                                c("li.sel", l).addClass("selected")
                            });
                            a.on("change.styler", function () {
                                z.text(g.filter(":selected").text()).removeClass("placeholder");
                                m.removeClass("selected sel").not(".optgroup").eq(a[0].selectedIndex).addClass("selected sel");
                                g.first().text() != m.filter(".selected").text() ? f.addClass("changed") : f.removeClass("changed")
                            }).on("focus.styler", function () {
                                f.addClass("focused");
                                c("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()
                            }).on("blur.styler", function () {
                                f.removeClass("focused")
                            }).on("keydown.styler keyup.styler", function (b) {
                                var c = m.data("li-height");
                                z.text(g.filter(":selected").text());
                                m.removeClass("selected sel").not(".optgroup").eq(a[0].selectedIndex).addClass("selected sel");
                                38 != b.which && 37 != b.which && 33 != b.which && 36 != b.which || r.scrollTop(r.scrollTop() + m.filter(".selected").position().top);
                                40 != b.which && 39 != b.which && 34 != b.which && 35 != b.which || r.scrollTop(r.scrollTop() + m.filter(".selected").position().top - r.innerHeight() + c);
                                13 == b.which && (b.preventDefault(), l.hide(), f.removeClass("opened dropup dropdown"), e.onSelectClosed.call(f))
                            }).on("keydown.styler", function (a) {
                                32 == a.which && (a.preventDefault(), E.click())
                            });
                            c(document).on("click", function (a) {
                                c(a.target).parents().hasClass("jq-selectbox") || "OPTION" == a.target.nodeName || (c("div.jq-selectbox").filter(".opened").length && e.onSelectClosed.call(c("div.jq-selectbox").filter(".opened")), y.length && y.val("").keyup(), l.hide().find("li.sel").addClass("selected"), f.removeClass("focused opened dropup dropdown"))
                            })
                        }

                        function d() {
                            var e = new A,
                                d = c("<div" + e.id + ' class="jq-select-multiple jqselect' + e.classes + '"' + e.title + ' style="display: inline-block; position: relative"></div>');
                            a.css({
                                margin: 0,
                                padding: 0
                            }).after(d);
                            b();
                            d.append("<ul>" + s + "</ul>");
                            var k = c("ul", d).css({
                                    position: "relative",
                                    "overflow-x": "hidden",
                                    "-webkit-overflow-scrolling": "touch"
                                }),
                                h = c("li", d).attr("unselectable", "on").css({
                                    "-webkit-user-select": "none",
                                    "-moz-user-select": "none",
                                    "-ms-user-select": "none",
                                    "-o-user-select": "none",
                                    "user-select": "none",
                                    "white-space": "nowrap"
                                }),
                                e = a.attr("size"),
                                n = k.outerHeight(),
                                w = h.outerHeight();
                            void 0 !== e && 0 < e ? k.css({
                                height: w * e
                            }) : k.css({
                                height: 4 * w
                            });
                            n > d.height() && (k.css("overflowY", "scroll"), p(k), h.filter(".selected").length && k.scrollTop(k.scrollTop() + h.filter(".selected").position().top));
                            a.prependTo(d).css({
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                height: "100%",
                                opacity: 0
                            });
                            if (a.is(":disabled")) d.addClass("disabled"), g.each(function () {
                                c(this).is(":selected") && h.eq(c(this).index()).addClass("selected")
                            });
                            else if (h.filter(":not(.disabled):not(.optgroup)").click(function (b) {
                                    a.focus();
                                    var d = c(this);
                                    b.ctrlKey || b.metaKey || d.addClass("selected");
                                    b.shiftKey || d.addClass("first");
                                    b.ctrlKey || (b.metaKey || b.shiftKey) || d.siblings().removeClass("selected first");
                                    if (b.ctrlKey || b.metaKey) d.is(".selected") ? d.removeClass("selected first") : d.addClass("selected first"), d.siblings().removeClass("first");
                                    if (b.shiftKey) {
                                        var e = !1,
                                            f = !1;
                                        d.siblings().removeClass("selected").siblings(".first").addClass("selected");
                                        d.prevAll().each(function () {
                                            c(this).is(".first") && (e = !0)
                                        });
                                        d.nextAll().each(function () {
                                            c(this).is(".first") && (f = !0)
                                        });
                                        e && d.prevAll().each(function () {
                                            if (c(this).is(".selected")) return !1;
                                            c(this).not(".disabled, .optgroup").addClass("selected")
                                        });
                                        f && d.nextAll().each(function () {
                                            if (c(this).is(".selected")) return !1;
                                            c(this).not(".disabled, .optgroup").addClass("selected")
                                        });
                                        1 == h.filter(".selected").length && d.addClass("first")
                                    }
                                    g.prop("selected", !1);
                                    h.filter(".selected").each(function () {
                                        var a = c(this),
                                            b = a.index();
                                        a.is(".option") && (b -= a.prevAll(".optgroup").length);
                                        g.eq(b).prop("selected", !0)
                                    });
                                    a.change()
                                }), g.each(function (a) {
                                    c(this).data("optionIndex", a)
                                }), a.on("change.styler", function () {
                                    h.removeClass("selected");
                                    var a = [];
                                    g.filter(":selected").each(function () {
                                        a.push(c(this).data("optionIndex"))
                                    });
                                    h.not(".optgroup").filter(function (b) {
                                        return -1 < c.inArray(b, a)
                                    }).addClass("selected")
                                }).on("focus.styler", function () {
                                    d.addClass("focused")
                                }).on("blur.styler", function () {
                                    d.removeClass("focused")
                                }), n > d.height()) a.on("keydown.styler", function (a) {
                                38 != a.which && 37 != a.which && 33 != a.which || k.scrollTop(k.scrollTop() + h.filter(".selected").position().top - w);
                                40 != a.which && 39 != a.which && 34 != a.which || k.scrollTop(k.scrollTop() + h.filter(".selected:last").position().top - k.innerHeight() + 2 * w)
                            })
                        }
                        var g = c("option", a),
                            s = "";
                        if (a.is("[multiple]")) {
                            var x = navigator.userAgent.match(/Android/i) ? !0 : !1,
                                I = navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? !0 : !1;
                            x || I || d()
                        } else n()
                    };
                    s();
                    a.on("refresh", function () {
                        a.off(".styler").parent().before(a).remove();
                        s()
                    })
                }
            });
            else if (a.is(":reset")) a.on("click", function () {
                setTimeout(function () {
                    a.closest(e.wrapper).find("input, select").trigger("refresh")
                }, 1)
            })
        }).promise().done(function () {
            e.onFormStyled.call()
        })
    }
})(jQuery);
(function (e, t) {
    function i(t, i) {
        var s, a, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (s = t.parentNode, a = s.name, t.href && a && "map" === s.nodeName.toLowerCase() ? (o = e("img[usemap=#" + a + "]")[0], !!o && n(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && n(t)
    }

    function n(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    var s = 0,
        a = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        focus: function (t) {
            return function (i, n) {
                return "number" == typeof i ? this.each(function () {
                    var t = this;
                    setTimeout(function () {
                        e(t).focus(), n && n.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        scrollParent: function () {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function (i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length)
                for (var n, s, a = e(this[0]); a.length && a[0] !== document;) {
                    if (n = a.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    a = a.parent()
                }
            return 0
        },
        uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++s)
            })
        },
        removeUniqueId: function () {
            return this.each(function () {
                a.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
            return function (i) {
                return !!e.data(i, t)
            }
        }) : function (t, i, n) {
            return !!e.data(t, n[3])
        },
        focusable: function (t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function (t) {
            var n = e.attr(t, "tabindex"),
                s = isNaN(n);
            return (s || n >= 0) && i(t, !s)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (i, n) {
        function s(t, i, n, s) {
            return e.each(a, function () {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }
        var a = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
            o = n.toLowerCase(),
            r = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + n] = function (i) {
            return i === t ? r["inner" + n].call(this) : this.each(function () {
                e(this).css(o, s(this, i) + "px")
            })
        }, e.fn["outer" + n] = function (t, i) {
            return "number" != typeof t ? r["outer" + n].call(this, t) : this.each(function () {
                e(this).css(o, s(this, t, !0, i) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
        return function (i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
        disableSelection: function () {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
                e.preventDefault()
            })
        },
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function (t, i, n) {
                var s, a = e.ui[t].prototype;
                for (s in n) a.plugins[s] = a.plugins[s] || [], a.plugins[s].push([i, n[s]])
            },
            call: function (e, t, i) {
                var n, s = e.plugins[t];
                if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                    for (n = 0; s.length > n; n++) e.options[s[n][0]] && s[n][1].apply(e.element, i)
            }
        },
        hasScroll: function (t, i) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                s = !1;
            return t[n] > 0 ? !0 : (t[n] = 1, s = t[n] > 0, t[n] = 0, s)
        }
    })
})(jQuery);
(function (t, e) {
    var i = 0,
        s = Array.prototype.slice,
        n = t.cleanData;
    t.cleanData = function (e) {
        for (var i, s = 0; null != (i = e[s]); s++) try {
            t(i).triggerHandler("remove")
        } catch (o) {}
        n(e)
    }, t.widget = function (i, s, n) {
        var o, a, r, h, l = {},
            c = i.split(".")[0];
        i = i.split(".")[1], o = c + "-" + i, n || (n = s, s = t.Widget), t.expr[":"][o.toLowerCase()] = function (e) {
            return !!t.data(e, o)
        }, t[c] = t[c] || {}, a = t[c][i], r = t[c][i] = function (t, i) {
            return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new r(t, i)
        }, t.extend(r, a, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }), h = new s, h.options = t.widget.extend({}, h.options), t.each(n, function (i, n) {
            return t.isFunction(n) ? (l[i] = function () {
                var t = function () {
                        return s.prototype[i].apply(this, arguments)
                    },
                    e = function (t) {
                        return s.prototype[i].apply(this, t)
                    };
                return function () {
                    var i, s = this._super,
                        o = this._superApply;
                    return this._super = t, this._superApply = e, i = n.apply(this, arguments), this._super = s, this._superApply = o, i
                }
            }(), e) : (l[i] = n, e)
        }), r.prototype = t.widget.extend(h, {
            widgetEventPrefix: a ? h.widgetEventPrefix : i
        }, l, {
            constructor: r,
            namespace: c,
            widgetName: i,
            widgetFullName: o
        }), a ? (t.each(a._childConstructors, function (e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, r, i._proto)
        }), delete a._childConstructors) : s._childConstructors.push(r), t.widget.bridge(i, r)
    }, t.widget.extend = function (i) {
        for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length; h > r; r++)
            for (n in a[r]) o = a[r][n], a[r].hasOwnProperty(n) && o !== e && (i[n] = t.isPlainObject(o) ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : o);
        return i
    }, t.widget.bridge = function (i, n) {
        var o = n.prototype.widgetFullName || i;
        t.fn[i] = function (a) {
            var r = "string" == typeof a,
                h = s.call(arguments, 1),
                l = this;
            return a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a, r ? this.each(function () {
                var s, n = t.data(this, o);
                return n ? t.isFunction(n[a]) && "_" !== a.charAt(0) ? (s = n[a].apply(n, h), s !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : e) : t.error("no such method '" + a + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + a + "'")
            }) : this.each(function () {
                var e = t.data(this, o);
                e ? e.option(a || {})._init() : t.data(this, o, new n(a, this))
            }), l
        }
    }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function (e, s) {
            s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (t) {
                    t.target === s && this.destroy()
                }
            }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function () {
            return this.element
        },
        option: function (i, s) {
            var n, o, a, r = i;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (r = {}, n = i.split("."), i = n.shift(), n.length) {
                    for (o = r[i] = t.widget.extend({}, this.options[i]), a = 0; n.length - 1 > a; a++) o[n[a]] = o[n[a]] || {}, o = o[n[a]];
                    if (i = n.pop(), s === e) return o[i] === e ? null : o[i];
                    o[i] = s
                } else {
                    if (s === e) return this.options[i] === e ? null : this.options[i];
                    r[i] = s
                } return this._setOptions(r), this
        },
        _setOptions: function (t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function (t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _on: function (i, s, n) {
            var o, a = this;
            "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = o = t(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, o = this.widget()), t.each(n, function (n, r) {
                function h() {
                    return i || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : e
                }
                "string" != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/),
                    c = l[1] + a.eventNamespace,
                    u = l[2];
                u ? o.delegate(u, c, h) : s.bind(c, h)
            })
        },
        _off: function (t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
        },
        _delay: function (t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function (e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function (e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function (e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function (e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function (e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                for (n in o) n in i || (i[n] = o[n]);
            return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function (e, i) {
        t.Widget.prototype["_" + e] = function (s, n, o) {
            "string" == typeof n && (n = {
                effect: n
            });
            var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {}, "number" == typeof n && (n = {
                duration: n
            }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
                t(this)[e](), o && o.call(s[0]), i()
            })
        }
    })
})(jQuery);
(function (t) {
    var e = !1;
    t(document).mouseup(function () {
        e = !1
    }), t.widget("ui.mouse", {
        version: "1.10.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function (t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function (i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (i) {
            if (!e) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var s = this,
                    n = 1 === i.which,
                    a = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
                return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    s.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                    return s._mouseMove(t)
                }, this._mouseUpDelegate = function (t) {
                    return s._mouseUp(t)
                }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
            }
        },
        _mouseMove: function (e) {
            return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function (e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
        },
        _mouseDistanceMet: function (t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return !0
        }
    })
})(jQuery);
(function (t, e) {
    function i(t, e, i) {
        return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
    }

    function s(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }

    function n(e) {
        var i = e[0];
        return 9 === i.nodeType ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : t.isWindow(i) ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }
        } : i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: i.pageY,
                left: i.pageX
            }
        } : {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset()
        }
    }
    t.ui = t.ui || {};
    var a, o = Math.max,
        r = Math.abs,
        l = Math.round,
        h = /left|center|right/,
        c = /top|center|bottom/,
        u = /[\+\-]\d+(\.[\d]+)?%?/,
        d = /^\w+/,
        p = /%$/,
        f = t.fn.position;
    t.position = {
            scrollbarWidth: function () {
                if (a !== e) return a;
                var i, s, n = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    o = n.children()[0];
                return t("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), s = o.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), a = i - s
            },
            getScrollInfo: function (e) {
                var i = e.isWindow ? "" : e.element.css("overflow-x"),
                    s = e.isWindow ? "" : e.element.css("overflow-y"),
                    n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                    a = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
                return {
                    width: a ? t.position.scrollbarWidth() : 0,
                    height: n ? t.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function (e) {
                var i = t(e || window),
                    s = t.isWindow(i[0]);
                return {
                    element: i,
                    isWindow: s,
                    offset: i.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: s ? i.width() : i.outerWidth(),
                    height: s ? i.height() : i.outerHeight()
                }
            }
        }, t.fn.position = function (e) {
            if (!e || !e.of) return f.apply(this, arguments);
            e = t.extend({}, e);
            var a, p, g, m, v, _, b = t(e.of),
                y = t.position.getWithinInfo(e.within),
                k = t.position.getScrollInfo(y),
                w = (e.collision || "flip").split(" "),
                D = {};
            return _ = n(b), b[0].preventDefault && (e.at = "left top"), p = _.width, g = _.height, m = _.offset, v = t.extend({}, m), t.each(["my", "at"], function () {
                var t, i, s = (e[this] || "").split(" ");
                1 === s.length && (s = h.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = h.test(s[0]) ? s[0] : "center", s[1] = c.test(s[1]) ? s[1] : "center", t = u.exec(s[0]), i = u.exec(s[1]), D[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
            }), 1 === w.length && (w[1] = w[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += g : "center" === e.at[1] && (v.top += g / 2), a = i(D.at, p, g), v.left += a[0], v.top += a[1], this.each(function () {
                var n, h, c = t(this),
                    u = c.outerWidth(),
                    d = c.outerHeight(),
                    f = s(this, "marginLeft"),
                    _ = s(this, "marginTop"),
                    x = u + f + s(this, "marginRight") + k.width,
                    C = d + _ + s(this, "marginBottom") + k.height,
                    M = t.extend({}, v),
                    T = i(D.my, c.outerWidth(), c.outerHeight());
                "right" === e.my[0] ? M.left -= u : "center" === e.my[0] && (M.left -= u / 2), "bottom" === e.my[1] ? M.top -= d : "center" === e.my[1] && (M.top -= d / 2), M.left += T[0], M.top += T[1], t.support.offsetFractions || (M.left = l(M.left), M.top = l(M.top)), n = {
                    marginLeft: f,
                    marginTop: _
                }, t.each(["left", "top"], function (i, s) {
                    t.ui.position[w[i]] && t.ui.position[w[i]][s](M, {
                        targetWidth: p,
                        targetHeight: g,
                        elemWidth: u,
                        elemHeight: d,
                        collisionPosition: n,
                        collisionWidth: x,
                        collisionHeight: C,
                        offset: [a[0] + T[0], a[1] + T[1]],
                        my: e.my,
                        at: e.at,
                        within: y,
                        elem: c
                    })
                }), e.using && (h = function (t) {
                    var i = m.left - M.left,
                        s = i + p - u,
                        n = m.top - M.top,
                        a = n + g - d,
                        l = {
                            target: {
                                element: b,
                                left: m.left,
                                top: m.top,
                                width: p,
                                height: g
                            },
                            element: {
                                element: c,
                                left: M.left,
                                top: M.top,
                                width: u,
                                height: d
                            },
                            horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
                            vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"
                        };
                    u > p && p > r(i + s) && (l.horizontal = "center"), d > g && g > r(n + a) && (l.vertical = "middle"), l.important = o(r(i), r(s)) > o(r(n), r(a)) ? "horizontal" : "vertical", e.using.call(this, t, l)
                }), c.offset(t.extend(M, {
                    using: h
                }))
            })
        }, t.ui.position = {
            fit: {
                left: function (t, e) {
                    var i, s = e.within,
                        n = s.isWindow ? s.scrollLeft : s.offset.left,
                        a = s.width,
                        r = t.left - e.collisionPosition.marginLeft,
                        l = n - r,
                        h = r + e.collisionWidth - a - n;
                    e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - n, t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left)
                },
                top: function (t, e) {
                    var i, s = e.within,
                        n = s.isWindow ? s.scrollTop : s.offset.top,
                        a = e.within.height,
                        r = t.top - e.collisionPosition.marginTop,
                        l = n - r,
                        h = r + e.collisionHeight - a - n;
                    e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - n, t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top)
                }
            },
            flip: {
                left: function (t, e) {
                    var i, s, n = e.within,
                        a = n.offset.left + n.scrollLeft,
                        o = n.width,
                        l = n.isWindow ? n.scrollLeft : n.offset.left,
                        h = t.left - e.collisionPosition.marginLeft,
                        c = h - l,
                        u = h + e.collisionWidth - o - l,
                        d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        f = -2 * e.offset[0];
                    0 > c ? (i = t.left + d + p + f + e.collisionWidth - o - a, (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - l, (s > 0 || u > r(s)) && (t.left += d + p + f))
                },
                top: function (t, e) {
                    var i, s, n = e.within,
                        a = n.offset.top + n.scrollTop,
                        o = n.height,
                        l = n.isWindow ? n.scrollTop : n.offset.top,
                        h = t.top - e.collisionPosition.marginTop,
                        c = h - l,
                        u = h + e.collisionHeight - o - l,
                        d = "top" === e.my[1],
                        p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        g = -2 * e.offset[1];
                    0 > c ? (s = t.top + p + f + g + e.collisionHeight - o - a, t.top + p + f + g > c && (0 > s || r(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, t.top + p + f + g > u && (i > 0 || u > r(i)) && (t.top += p + f + g))
                }
            },
            flipfit: {
                left: function () {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                },
                top: function () {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
        function () {
            var e, i, s, n, a, o = document.getElementsByTagName("body")[0],
                r = document.createElement("div");
            e = document.createElement(o ? "div" : "body"), s = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, o && t.extend(s, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (a in s) e.style[a] = s[a];
            e.appendChild(r), i = o || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
        }()
})(jQuery);
(function (t) {
    t.widget("ui.draggable", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function () {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function (e) {
            var i = this.options;
            return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function () {
                t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(t(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function (e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _mouseDrag: function (e, i) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", e, s) === !1) return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function (e) {
            var i = this,
                s = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "original" !== this.options.helper || t.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                i._trigger("stop", e) !== !1 && i._clear()
            }) : this._trigger("stop", e) !== !1 && this._clear(), !1) : !1
        },
        _mouseUp: function (e) {
            return t("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (e) {
            return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _createHelper: function (e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var t = this.element.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var e, i, s, n = this.options;
            return n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : "document" === n.containment ? (this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : n.containment.constructor === Array ? (this.containment = n.containment, undefined) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i), undefined) : (this.containment = null, undefined)
        },
        _convertPositionTo: function (e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: n.scrollTop(),
                left: n.scrollLeft()
            }), {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s
            }
        },
        _generatePosition: function (e) {
            var i, s, n, a, o = this.options,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = e.pageX,
                h = e.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: r.scrollTop(),
                left: r.scrollLeft()
            }), this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, l = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a)), {
                top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function (e, i, s) {
            return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, s)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function (e, i) {
            var s = t(this).data("ui-draggable"),
                n = s.options,
                a = t.extend({}, i, {
                    item: s.element
                });
            s.sortables = [], t(n.connectToSortable).each(function () {
                var i = t.data(this, "ui-sortable");
                i && !i.options.disabled && (s.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", e, a))
            })
        },
        stop: function (e, i) {
            var s = t(this).data("ui-draggable"),
                n = t.extend({}, i, {
                    item: s.element
                });
            t.each(s.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, n))
            })
        },
        drag: function (e, i) {
            var s = t(this).data("ui-draggable"),
                n = this;
            t.each(s.sortables, function () {
                var a = !1,
                    o = this;
                this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (a = !0, t.each(s.sortables, function () {
                    return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && t.contains(o.instance.element[0], this.instance.element[0]) && (a = !1), a
                })), a ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                    return i.helper[0]
                }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", e), s.dropped = !1)
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function () {
            var e = t("body"),
                i = t(this).data("ui-draggable").options;
            e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor)
        },
        stop: function () {
            var e = t(this).data("ui-draggable").options;
            e._cursor && t("body").css("cursor", e._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function (e, i) {
            var s = t(i.helper),
                n = t(this).data("ui-draggable").options;
            s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
        },
        stop: function (e, i) {
            var s = t(this).data("ui-draggable").options;
            s._opacity && t(i.helper).css("opacity", s._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function () {
            var e = t(this).data("ui-draggable");
            e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
        },
        drag: function (e) {
            var i = t(this).data("ui-draggable"),
                s = i.options,
                n = !1;
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed)))), n !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function () {
            var e = t(this).data("ui-draggable"),
                i = e.options;
            e.snapElements = [], t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function () {
                var i = t(this),
                    s = i.offset();
                this !== e.element[0] && e.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: s.top,
                    left: s.left
                })
            })
        },
        drag: function (e, i) {
            var s, n, a, o, r, l, h, c, u, d, p = t(this).data("ui-draggable"),
                g = p.options,
                f = g.snapTolerance,
                m = i.offset.left,
                _ = m + p.helperProportions.width,
                v = i.offset.top,
                b = v + p.helperProportions.height;
            for (u = p.snapElements.length - 1; u >= 0; u--) r = p.snapElements[u].left, l = r + p.snapElements[u].width, h = p.snapElements[u].top, c = h + p.snapElements[u].height, r - f > _ || m > l + f || h - f > b || v > c + f || !t.contains(p.snapElements[u].item.ownerDocument, p.snapElements[u].item) ? (p.snapElements[u].snapping && p.options.snap.release && p.options.snap.release.call(p.element, e, t.extend(p._uiHash(), {
                snapItem: p.snapElements[u].item
            })), p.snapElements[u].snapping = !1) : ("inner" !== g.snapMode && (s = f >= Math.abs(h - b), n = f >= Math.abs(c - v), a = f >= Math.abs(r - _), o = f >= Math.abs(l - m), s && (i.position.top = p._convertPositionTo("relative", {
                top: h - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: r - p.helperProportions.width
            }).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left - p.margins.left)), d = s || n || a || o, "outer" !== g.snapMode && (s = f >= Math.abs(h - v), n = f >= Math.abs(c - b), a = f >= Math.abs(r - m), o = f >= Math.abs(l - _), s && (i.position.top = p._convertPositionTo("relative", {
                top: h,
                left: 0
            }).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
                top: c - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: r
            }).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: l - p.helperProportions.width
            }).left - p.margins.left)), !p.snapElements[u].snapping && (s || n || a || o || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, e, t.extend(p._uiHash(), {
                snapItem: p.snapElements[u].item
            })), p.snapElements[u].snapping = s || n || a || o || d)
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function () {
            var e, i = this.data("ui-draggable").options,
                s = t.makeArray(t(i.stack)).sort(function (e, i) {
                    return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                });
            s.length && (e = parseInt(t(s[0]).css("zIndex"), 10) || 0, t(s).each(function (i) {
                t(this).css("zIndex", e + i)
            }), this.css("zIndex", e + s.length))
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function (e, i) {
            var s = t(i.helper),
                n = t(this).data("ui-draggable").options;
            s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
        },
        stop: function (e, i) {
            var s = t(this).data("ui-draggable").options;
            s._zIndex && t(i.helper).css("zIndex", s._zIndex)
        }
    })
})(jQuery);
(function (t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }
    t.widget("ui.droppable", {
        version: "1.10.3",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function () {
            var e = this.options,
                i = e.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(i) ? i : function (t) {
                return t.is(i)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, t.ui.ddmanager.droppables[e.scope] = t.ui.ddmanager.droppables[e.scope] || [], t.ui.ddmanager.droppables[e.scope].push(this), e.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function () {
            for (var e = 0, i = t.ui.ddmanager.droppables[this.options.scope]; i.length > e; e++) i[e] === this && i.splice(e, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function (e, i) {
            "accept" === e && (this.accept = t.isFunction(i) ? i : function (t) {
                return t.is(i)
            }), t.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function (e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function (e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function (e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
        },
        _out: function (e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
        },
        _drop: function (e, i) {
            var s = i || t.ui.ddmanager.current,
                n = !1;
            return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                var e = t.data(this, "ui-droppable");
                return e.options.greedy && !e.options.disabled && e.options.scope === s.options.scope && e.accept.call(e.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(e, {
                    offset: e.element.offset()
                }), e.options.tolerance) ? (n = !0, !1) : undefined
            }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1
        },
        ui: function (t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        }
    }), t.ui.intersect = function (t, i, s) {
        if (!i.offset) return !1;
        var n, a, o = (t.positionAbs || t.position.absolute).left,
            r = o + t.helperProportions.width,
            l = (t.positionAbs || t.position.absolute).top,
            h = l + t.helperProportions.height,
            c = i.offset.left,
            u = c + i.proportions.width,
            d = i.offset.top,
            p = d + i.proportions.height;
        switch (s) {
            case "fit":
                return o >= c && u >= r && l >= d && p >= h;
            case "intersect":
                return o + t.helperProportions.width / 2 > c && u > r - t.helperProportions.width / 2 && l + t.helperProportions.height / 2 > d && p > h - t.helperProportions.height / 2;
            case "pointer":
                return n = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left, a = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top, e(a, d, i.proportions.height) && e(n, c, i.proportions.width);
            case "touch":
                return (l >= d && p >= l || h >= d && p >= h || d > l && h > p) && (o >= c && u >= o || r >= c && u >= r || c > o && r > u);
            default:
                return !1
        }
    }, t.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function (e, i) {
            var s, n, a = t.ui.ddmanager.droppables[e.options.scope] || [],
                o = i ? i.type : null,
                r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (s = 0; a.length > s; s++)
                if (!(a[s].options.disabled || e && !a[s].accept.call(a[s].element[0], e.currentItem || e.element))) {
                    for (n = 0; r.length > n; n++)
                        if (r[n] === a[s].element[0]) {
                            a[s].proportions.height = 0;
                            continue t
                        } a[s].visible = "none" !== a[s].element.css("display"), a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions = {
                        width: a[s].element[0].offsetWidth,
                        height: a[s].element[0].offsetHeight
                    })
                }
        },
        drop: function (e, i) {
            var s = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
                this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), s
        },
        dragStart: function (e, i) {
            e.element.parentsUntil("body").bind("scroll.droppable", function () {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            })
        },
        drag: function (e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, a, o = t.ui.intersect(e, this, this.options.tolerance),
                        r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function () {
                        return t.data(this, "ui-droppable").options.scope === n
                    }), a.length && (s = t.data(a[0], "ui-droppable"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                }
            })
        },
        dragStop: function (e, i) {
            e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }
    }
})(jQuery);
(function (t) {
    function e(t) {
        return parseInt(t, 10) || 0
    }

    function i(t) {
        return !isNaN(parseInt(t, 10))
    }
    t.widget("ui.resizable", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function () {
            var e, i, s, n, a, o = this,
                r = this.options;
            if (this.element.addClass("ui-resizable"), t.extend(this, {
                    _aspectRatio: !!r.aspectRatio,
                    aspectRatio: r.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; e.length > i; i++) s = t.trim(e[i]), a = "ui-resizable-" + s, n = t("<div class='ui-resizable-handle " + a + "'></div>"), n.css({
                    zIndex: r.zIndex
                }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
            this._renderAxis = function (e) {
                var i, s, n, a;
                e = e || this.element;
                for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = t(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, a), this._proportionallyResize()), t(this.handles[i]).length
            }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
            }), r.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                r.disabled || (t(this).removeClass("ui-resizable-autohide"), o._handles.show())
            }).mouseleave(function () {
                r.disabled || o.resizing || (t(this).addClass("ui-resizable-autohide"), o._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var e, i = function (e) {
                t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _mouseCapture: function (e) {
            var i, s, n = !1;
            for (i in this.handles) s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function (i) {
            var s, n, a, o = this.options,
                r = this.element.position(),
                h = this.element;
            return this.resizing = !0, /absolute/.test(h.css("position")) ? h.css({
                position: "absolute",
                top: h.css("top"),
                left: h.css("left")
            }) : h.is(".ui-draggable") && h.css({
                position: "absolute",
                top: r.top,
                left: r.left
            }), this._renderProxy(), s = e(this.helper.css("left")), n = e(this.helper.css("top")), o.containment && (s += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: s,
                top: n
            }, this.size = this._helper ? {
                width: h.outerWidth(),
                height: h.outerHeight()
            } : {
                width: h.width(),
                height: h.height()
            }, this.originalSize = this._helper ? {
                width: h.outerWidth(),
                height: h.outerHeight()
            } : {
                width: h.width(),
                height: h.height()
            }, this.originalPosition = {
                left: s,
                top: n
            }, this.sizeDiff = {
                width: h.outerWidth() - h.width(),
                height: h.outerHeight() - h.height()
            }, this.originalMousePosition = {
                left: i.pageX,
                top: i.pageY
            }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, a = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === a ? this.axis + "-resize" : a), h.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
        },
        _mouseDrag: function (e) {
            var i, s = this.helper,
                n = {},
                a = this.originalMousePosition,
                o = this.axis,
                r = this.position.top,
                h = this.position.left,
                l = this.size.width,
                c = this.size.height,
                u = e.pageX - a.left || 0,
                d = e.pageY - a.top || 0,
                p = this._change[o];
            return p ? (i = p.apply(this, [e, u, d]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), this.position.top !== r && (n.top = this.position.top + "px"), this.position.left !== h && (n.left = this.position.left + "px"), this.size.width !== l && (n.width = this.size.width + "px"), this.size.height !== c && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || this._trigger("resize", e, this.ui()), !1) : !1
        },
        _mouseStop: function (e) {
            this.resizing = !1;
            var i, s, n, a, o, r, h, l = this.options,
                c = this;
            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && t.ui.hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, a = s ? 0 : c.sizeDiff.width, o = {
                width: c.helper.width() - a,
                height: c.helper.height() - n
            }, r = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, h = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(o, {
                top: h,
                left: r
            })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function (t) {
            var e, s, n, a, o, r = this.options;
            o = {
                minWidth: i(r.minWidth) ? r.minWidth : 0,
                maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0,
                minHeight: i(r.minHeight) ? r.minHeight : 0,
                maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, s = o.maxHeight * this.aspectRatio, a = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), o.maxWidth > s && (o.maxWidth = s), o.maxHeight > a && (o.maxHeight = a)), this._vBoundaries = o
        },
        _updateCache: function (t) {
            this.offset = this.helper.offset(), i(t.left) && (this.position.left = t.left), i(t.top) && (this.position.top = t.top), i(t.height) && (this.size.height = t.height), i(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function (t) {
            var e = this.position,
                s = this.size,
                n = this.axis;
            return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (s.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (s.height - t.height), t.left = e.left + (s.width - t.width)), t
        },
        _respectSize: function (t) {
            var e = this._vBoundaries,
                s = this.axis,
                n = i(t.width) && e.maxWidth && e.maxWidth < t.width,
                a = i(t.height) && e.maxHeight && e.maxHeight < t.height,
                o = i(t.width) && e.minWidth && e.minWidth > t.width,
                r = i(t.height) && e.minHeight && e.minHeight > t.height,
                h = this.originalPosition.left + this.originalSize.width,
                l = this.position.top + this.size.height,
                c = /sw|nw|w/.test(s),
                u = /nw|ne|n/.test(s);
            return o && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), a && (t.height = e.maxHeight), o && c && (t.left = h - e.minWidth), n && c && (t.left = h - e.maxWidth), r && u && (t.top = l - e.minHeight), a && u && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length) {
                var t, e, i, s, n, a = this.helper || this.element;
                for (t = 0; this._proportionallyResizeElements.length > t; t++) {
                    if (n = this._proportionallyResizeElements[t], !this.borderDif)
                        for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], e = 0; i.length > e; e++) this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(s[e], 10) || 0);
                    n.css({
                        height: a.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: a.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function () {
            var e = this.element,
                i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function (t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function (t, e) {
                var i = this.originalSize,
                    s = this.originalPosition;
                return {
                    left: s.left + e,
                    width: i.width - e
                }
            },
            n: function (t, e, i) {
                var s = this.originalSize,
                    n = this.originalPosition;
                return {
                    top: n.top + i,
                    height: s.height - i
                }
            },
            s: function (t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function (e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            sw: function (e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            },
            ne: function (e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            nw: function (e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }
        },
        _propagate: function (e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function (e) {
            var i = t(this).data("ui-resizable"),
                s = i.options,
                n = i._proportionallyResizeElements,
                a = n.length && /textarea/i.test(n[0].nodeName),
                o = a && t.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                r = a ? 0 : i.sizeDiff.width,
                h = {
                    width: i.size.width - r,
                    height: i.size.height - o
                },
                l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(h, c && l ? {
                top: c,
                left: l
            } : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function () {
                    var s = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    n && n.length && t(n[0]).css({
                        width: s.width,
                        height: s.height
                    }), i._updateCache(s), i._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function () {
            var i, s, n, a, o, r, h, l = t(this).data("ui-resizable"),
                c = l.options,
                u = l.element,
                d = c.containment,
                p = d instanceof t ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
            p && (l.containerElement = t(p), /document/.test(d) || d === document ? (l.containerOffset = {
                left: 0,
                top: 0
            }, l.containerPosition = {
                left: 0,
                top: 0
            }, l.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (i = t(p), s = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) {
                s[t] = e(i.css("padding" + n))
            }), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {
                height: i.innerHeight() - s[3],
                width: i.innerWidth() - s[1]
            }, n = l.containerOffset, a = l.containerSize.height, o = l.containerSize.width, r = t.ui.hasScroll(p, "left") ? p.scrollWidth : o, h = t.ui.hasScroll(p) ? p.scrollHeight : a, l.parentData = {
                element: p,
                left: n.left,
                top: n.top,
                width: r,
                height: h
            }))
        },
        resize: function (e) {
            var i, s, n, a, o = t(this).data("ui-resizable"),
                r = o.options,
                h = o.containerOffset,
                l = o.position,
                c = o._aspectRatio || e.shiftKey,
                u = {
                    top: 0,
                    left: 0
                },
                d = o.containerElement;
            d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - u.left), c && (o.size.height = o.size.width / o.aspectRatio), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), c && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? h.top : 0), o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top, i = Math.abs((o._helper ? o.offset.left - u.left : o.offset.left - u.left) + o.sizeDiff.width), s = Math.abs((o._helper ? o.offset.top - u.top : o.offset.top - h.top) + o.sizeDiff.height), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a && (i -= o.parentData.left), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, c && (o.size.height = o.size.width / o.aspectRatio)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, c && (o.size.width = o.size.height * o.aspectRatio))
        },
        stop: function () {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                s = e.containerOffset,
                n = e.containerPosition,
                a = e.containerElement,
                o = t(e.helper),
                r = o.offset(),
                h = o.outerWidth() - e.sizeDiff.width,
                l = o.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(a.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            }), e._helper && !i.animate && /static/.test(a.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            })
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                s = function (e) {
                    t(e).each(function () {
                        var e = t(this);
                        e.data("ui-resizable-alsoresize", {
                            width: parseInt(e.width(), 10),
                            height: parseInt(e.height(), 10),
                            left: parseInt(e.css("left"), 10),
                            top: parseInt(e.css("top"), 10)
                        })
                    })
                };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : t.each(i.alsoResize, function (t) {
                s(t)
            })
        },
        resize: function (e, i) {
            var s = t(this).data("ui-resizable"),
                n = s.options,
                a = s.originalSize,
                o = s.originalPosition,
                r = {
                    height: s.size.height - a.height || 0,
                    width: s.size.width - a.width || 0,
                    top: s.position.top - o.top || 0,
                    left: s.position.left - o.left || 0
                },
                h = function (e, s) {
                    t(e).each(function () {
                        var e = t(this),
                            n = t(this).data("ui-resizable-alsoresize"),
                            a = {},
                            o = s && s.length ? s : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        t.each(o, function (t, e) {
                            var i = (n[e] || 0) + (r[e] || 0);
                            i && i >= 0 && (a[e] = i || null)
                        }), e.css(a)
                    })
                };
            "object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : t.each(n.alsoResize, function (t, e) {
                h(t, e)
            })
        },
        stop: function () {
            t(this).removeData("resizable-alsoresize")
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                s = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
        },
        resize: function () {
            var e = t(this).data("ui-resizable");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            })
        },
        stop: function () {
            var e = t(this).data("ui-resizable");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                s = e.size,
                n = e.originalSize,
                a = e.originalPosition,
                o = e.axis,
                r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                h = r[0] || 1,
                l = r[1] || 1,
                c = Math.round((s.width - n.width) / h) * h,
                u = Math.round((s.height - n.height) / l) * l,
                d = n.width + c,
                p = n.height + u,
                f = i.maxWidth && d > i.maxWidth,
                g = i.maxHeight && p > i.maxHeight,
                m = i.minWidth && i.minWidth > d,
                v = i.minHeight && i.minHeight > p;
            i.grid = r, m && (d += h), v && (p += l), f && (d -= h), g && (p -= l), /^(se|s|e)$/.test(o) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(o) ? (e.size.width = d, e.size.height = p, e.position.top = a.top - u) : /^(sw)$/.test(o) ? (e.size.width = d, e.size.height = p, e.position.left = a.left - c) : (e.size.width = d, e.size.height = p, e.position.top = a.top - u, e.position.left = a.left - c)
        }
    })
})(jQuery);
(function (t) {
    t.widget("ui.selectable", t.ui.mouse, {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function () {
            var e, i = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
                e = t(i.options.filter, i.element[0]), e.addClass("ui-selectee"), e.each(function () {
                    var e = t(this),
                        i = e.offset();
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: e,
                        left: i.left,
                        top: i.top,
                        right: i.left + e.outerWidth(),
                        bottom: i.top + e.outerHeight(),
                        startselected: !1,
                        selected: e.hasClass("ui-selected"),
                        selecting: e.hasClass("ui-selecting"),
                        unselecting: e.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function () {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function (e) {
            var i = this,
                s = this.options;
            this.opos = [e.pageX, e.pageY], this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0
            }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var s = t.data(this, "selectable-item");
                s.startselected = !0, e.metaKey || e.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
                    unselecting: s.element
                }))
            }), t(e.target).parents().addBack().each(function () {
                var s, n = t.data(this, "selectable-item");
                return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
                    selecting: n.element
                }) : i._trigger("unselecting", e, {
                    unselecting: n.element
                }), !1) : undefined
            }))
        },
        _mouseDrag: function (e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this,
                    n = this.options,
                    a = this.opos[0],
                    o = this.opos[1],
                    r = e.pageX,
                    l = e.pageY;
                return a > r && (i = r, r = a, a = i), o > l && (i = l, l = o, o = i), this.helper.css({
                    left: a,
                    top: o,
                    width: r - a,
                    height: l - o
                }), this.selectees.each(function () {
                    var i = t.data(this, "selectable-item"),
                        h = !1;
                    i && i.element !== s.element[0] && ("touch" === n.tolerance ? h = !(i.left > r || a > i.right || i.top > l || o > i.bottom) : "fit" === n.tolerance && (h = i.left > a && r > i.right && i.top > o && l > i.bottom), h ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
                        selecting: i.element
                    }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
                        unselecting: i.element
                    }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
                        unselecting: i.element
                    })))))
                }), !1
            }
        },
        _mouseStop: function (e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function () {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
                    unselected: s.element
                })
            }), t(".ui-selecting", this.element[0]).each(function () {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
                    selected: s.element
                })
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    })
})(jQuery);
(function (t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }

    function i(t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    }
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function () {
            var t = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function (e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (e, i) {
            var s = null,
                n = !1,
                o = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
                return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : undefined
            }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function () {
                this === e.target && (n = !0)
            }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
        },
        _mouseStart: function (e, i, s) {
            var n, o, a = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function (e) {
            var i, s, n, o, a = this.options,
                r = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - t(document).scrollTop() < a.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - a.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < a.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + a.scrollSpeed)), e.pageX - t(document).scrollLeft() < a.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - a.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < a.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                    this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                    break
                } return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var s = this,
                        n = this.placeholder.offset(),
                        o = this.options.axis,
                        a = {};
                    o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
                        s._clear(e)
                    })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, t(i).each(function () {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !s.length && e.key && s.push(e.key + "="), s.join("&")
        },
        toArray: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, i.each(function () {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), s
        },
        _intersectsWith: function (t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                s = this.positionAbs.top,
                n = s + this.helperProportions.height,
                o = t.left,
                a = o + t.width,
                r = t.top,
                h = r + t.height,
                l = this.offset.click.top,
                c = this.offset.click.left,
                u = "x" === this.options.axis || s + l > r && h > s + l,
                d = "y" === this.options.axis || e + c > o && a > e + c,
                p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function (t) {
            var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                s = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                n = i && s,
                o = this._getDragVerticalDirection(),
                a = this._getDragHorizontalDirection();
            return n ? this.floating ? a && "right" === a || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1
        },
        _intersectsWithSides: function (t) {
            var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                n = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" === o && s || "left" === o && !s : n && ("down" === n && i || "up" === n && !i)
        },
        _getDragVerticalDirection: function () {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function (t) {
            return this._refreshItems(t), this.refreshPositions(), this
        },
        _connectWith: function () {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function (e) {
            var i, s, n, o, a = [],
                r = [],
                h = this._connectWith();
            if (h && e)
                for (i = h.length - 1; i >= 0; i--)
                    for (n = t(h[i]), s = n.length - 1; s >= 0; s--) o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && r.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
            for (r.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = r.length - 1; i >= 0; i--) r[i][0].each(function () {
                a.push(this)
            });
            return t(a)
        },
        _removeCurrentsFromItems: function () {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function (t) {
                for (var i = 0; e.length > i; i++)
                    if (e[i] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function (e) {
            this.items = [], this.containers = [this];
            var i, s, n, o, a, r, h, l, c = this.items,
                u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                    item: this.currentItem
                }) : t(this.options.items, this.element), this]],
                d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (n = t(d[i]), s = n.length - 1; s >= 0; s--) o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                        item: this.currentItem
                    }) : t(o.options.items, o.element), o]), this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--)
                for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++) h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({
                    item: h,
                    instance: a,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function (e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, n, o;
            for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function (e) {
            e = e || this;
            var i, s = e.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function () {
                    var s = e.currentItem[0].nodeName.toLowerCase(),
                        n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === s ? e.currentItem.children().each(function () {
                        t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n)
                    }) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                },
                update: function (t, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
        },
        _contactContainers: function (s) {
            var n, o, a, r, h, l, c, u, d, p, f = null,
                g = null;
            for (n = this.containers.length - 1; n >= 0; n--)
                if (!t.contains(this.currentItem[0], this.containers[n].element[0]))
                    if (this._intersectsWith(this.containers[n].containerCache)) {
                        if (f && t.contains(this.containers[n].element[0], f.element[0])) continue;
                        f = this.containers[n], g = n
                    } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", s, this._uiHash(this)), this.containers[n].containerCache.over = 0);
            if (f)
                if (1 === this.containers.length) this.containers[g].containerCache.over || (this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1);
                else {
                    for (a = 1e4, r = null, p = f.floating || i(this.currentItem), h = p ? "left" : "top", l = p ? "width" : "height", c = this.positionAbs[h] + this.offset.click[h], o = this.items.length - 1; o >= 0; o--) t.contains(this.containers[g].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (u = this.items[o].item.offset()[h], d = !1, Math.abs(u - c) > Math.abs(u + this.items[o][l] - c) && (d = !0, u += this.items[o][l]), a > Math.abs(u - c) && (a = Math.abs(u - c), r = this.items[o], this.direction = d ? "up" : "down"));
                    if (!r && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[g]) return;
                    r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[g].element, !0), this._trigger("change", s, this._uiHash()), this.containers[g]._trigger("change", s, this._uiHash(this)), this.currentContainer = this.containers[g], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1
                }
        },
        _createHelper: function (e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
        },
        _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var e, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function (e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function (e) {
            var i, s, n = this.options,
                o = e.pageX,
                a = e.pageY,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                h = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function (t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function () {
                n === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function (t, e) {
            this.reverting = !1;
            var i, s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && s.push(function (t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function (t) {
                    this._trigger("update", t, this._uiHash())
                }), this !== this.currentContainer && (e || (s.push(function (t) {
                    this._trigger("remove", t, this._uiHash())
                }), s.push(function (t) {
                    return function (e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), s.push(function (t) {
                    return function (e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) e || s.push(function (t) {
                return function (e) {
                    t._trigger("deactivate", e, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over && (s.push(function (t) {
                return function (e) {
                    t._trigger("out", e, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!e) {
                    for (this._trigger("beforeStop", t, this._uiHash()), i = 0; s.length > i; i++) s[i].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
                for (i = 0; s.length > i; i++) s[i].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function () {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    })
})(jQuery);
(function (e) {
    var t = 0,
        i = {},
        a = {};
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", a.height = a.paddingTop = a.paddingBottom = a.borderTopWidth = a.borderBottomWidth = "show", e.widget("ui.accordion", {
        version: "1.10.3",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function () {
            var t = this.options;
            this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function () {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : e(),
                content: this.active.length ? this.active.next() : e()
            }
        },
        _createIcons: function () {
            var t = this.options.icons;
            t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function () {
            var e;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), "content" !== this.options.heightStyle && e.css("height", "")
        },
        _setOption: function (e, t) {
            return "active" === e ? (this._activate(t), undefined) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t), undefined)
        },
        _keydown: function (t) {
            if (!t.altKey && !t.ctrlKey) {
                var i = e.ui.keyCode,
                    a = this.headers.length,
                    s = this.headers.index(t.target),
                    n = !1;
                switch (t.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        n = this.headers[(s + 1) % a];
                        break;
                    case i.LEFT:
                    case i.UP:
                        n = this.headers[(s - 1 + a) % a];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(t);
                        break;
                    case i.HOME:
                        n = this.headers[0];
                        break;
                    case i.END:
                        n = this.headers[a - 1]
                }
                n && (e(t.target).attr("tabIndex", -1), e(n).attr("tabIndex", 0), n.focus(), t.preventDefault())
            }
        },
        _panelKeyDown: function (t) {
            t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
        },
        refresh: function () {
            var t = this.options;
            this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function () {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function () {
            var i, a = this.options,
                s = a.heightStyle,
                n = this.element.parent(),
                r = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++t);
            this.active = this._findActive(a.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function (t) {
                var i = e(this),
                    a = i.attr("id"),
                    s = i.next(),
                    n = s.attr("id");
                a || (a = r + "-header-" + t, i.attr("id", a)), n || (n = r + "-panel-" + t, s.attr("id", n)), i.attr("aria-controls", n), s.attr("aria-labelledby", a)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                tabIndex: 0
            }).next().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(a.event), "fill" === s ? (i = n.height(), this.element.siblings(":visible").each(function () {
                var t = e(this),
                    a = t.css("position");
                "absolute" !== a && "fixed" !== a && (i -= t.outerHeight(!0))
            }), this.headers.each(function () {
                i -= e(this).outerHeight(!0)
            }), this.headers.next().each(function () {
                e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : "auto" === s && (i = 0, this.headers.next().each(function () {
                i = Math.max(i, e(this).css("height", "").height())
            }).height(i))
        },
        _activate: function (t) {
            var i = this._findActive(t)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: e.noop
            }))
        },
        _findActive: function (t) {
            return "number" == typeof t ? this.headers.eq(t) : e()
        },
        _setupEvents: function (t) {
            var i = {
                keydown: "_keydown"
            };
            t && e.each(t.split(" "), function (e, t) {
                i[t] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function (t) {
            var i = this.options,
                a = this.active,
                s = e(t.currentTarget),
                n = s[0] === a[0],
                r = n && i.collapsible,
                o = r ? e() : s.next(),
                h = a.next(),
                d = {
                    oldHeader: a,
                    oldPanel: h,
                    newHeader: r ? e() : s,
                    newPanel: o
                };
            t.preventDefault(), n && !i.collapsible || this._trigger("beforeActivate", t, d) === !1 || (i.active = r ? !1 : this.headers.index(s), this.active = n ? e() : s, this._toggle(d), a.removeClass("ui-accordion-header-active ui-state-active"), i.icons && a.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), n || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), s.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function (t) {
            var i = t.newPanel,
                a = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = a, this.options.animate ? this._animate(i, a, t) : (a.hide(), i.show(), this._toggleComplete(t)), a.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), a.prev().attr("aria-selected", "false"), i.length && a.length ? a.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function () {
                return 0 === e(this).attr("tabIndex")
            }).attr("tabIndex", -1), i.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _animate: function (e, t, s) {
            var n, r, o, h = this,
                d = 0,
                c = e.length && (!t.length || e.index() < t.index()),
                l = this.options.animate || {},
                u = c && l.down || l,
                v = function () {
                    h._toggleComplete(s)
                };
            return "number" == typeof u && (o = u), "string" == typeof u && (r = u), r = r || u.easing || l.easing, o = o || u.duration || l.duration, t.length ? e.length ? (n = e.show().outerHeight(), t.animate(i, {
                duration: o,
                easing: r,
                step: function (e, t) {
                    t.now = Math.round(e)
                }
            }), e.hide().animate(a, {
                duration: o,
                easing: r,
                complete: v,
                step: function (e, i) {
                    i.now = Math.round(e), "height" !== i.prop ? d += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(n - t.outerHeight() - d), d = 0)
                }
            }), undefined) : t.animate(i, o, r, v) : e.animate(a, o, r, v)
        },
        _toggleComplete: function (e) {
            var t = e.oldPanel;
            t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
        }
    })
})(jQuery);
(function (e) {
    var t = 0;
    e.widget("ui.autocomplete", {
        version: "1.10.3",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function () {
            var t, i, s, n = this.element[0].nodeName.toLowerCase(),
                a = "textarea" === n,
                o = "input" === n;
            this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function (n) {
                    if (this.element.prop("readOnly")) return t = !0, s = !0, i = !0, undefined;
                    t = !1, s = !1, i = !1;
                    var a = e.ui.keyCode;
                    switch (n.keyCode) {
                        case a.PAGE_UP:
                            t = !0, this._move("previousPage", n);
                            break;
                        case a.PAGE_DOWN:
                            t = !0, this._move("nextPage", n);
                            break;
                        case a.UP:
                            t = !0, this._keyEvent("previous", n);
                            break;
                        case a.DOWN:
                            t = !0, this._keyEvent("next", n);
                            break;
                        case a.ENTER:
                        case a.NUMPAD_ENTER:
                            this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
                            break;
                        case a.TAB:
                            this.menu.active && this.menu.select(n);
                            break;
                        case a.ESCAPE:
                            this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(n)
                    }
                },
                keypress: function (s) {
                    if (t) return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), undefined;
                    if (!i) {
                        var n = e.ui.keyCode;
                        switch (s.keyCode) {
                            case n.PAGE_UP:
                                this._move("previousPage", s);
                                break;
                            case n.PAGE_DOWN:
                                this._move("nextPage", s);
                                break;
                            case n.UP:
                                this._keyEvent("previous", s);
                                break;
                            case n.DOWN:
                                this._keyEvent("next", s)
                        }
                    }
                },
                input: function (e) {
                    return s ? (s = !1, e.preventDefault(), undefined) : (this._searchTimeout(e), undefined)
                },
                focus: function () {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function (e) {
                    return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(e), this._change(e), undefined)
                }
            }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().data("ui-menu"), this._on(this.menu.element, {
                mousedown: function (t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function () {
                        var t = this;
                        this.document.one("mousedown", function (s) {
                            s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close()
                        })
                    })
                },
                menufocus: function (t, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), this.document.one("mousemove", function () {
                        e(t.target).trigger(t.originalEvent)
                    }), undefined;
                    var s = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", t, {
                        item: s
                    }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
                },
                menuselect: function (e, t) {
                    var i = t.item.data("ui-autocomplete-item"),
                        s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () {
                        this.previous = s, this.selectedItem = i
                    })), !1 !== this._trigger("select", e, {
                        item: i
                    }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
                }
            }), this.liveRegion = e("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function (e, t) {
            this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
        },
        _initSource: function () {
            var t, i, s = this;
            e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, s) {
                s(e.ui.autocomplete.filter(t, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (t, n) {
                s.xhr && s.xhr.abort(), s.xhr = e.ajax({
                    url: i,
                    data: t,
                    dataType: "json",
                    success: function (e) {
                        n(e)
                    },
                    error: function () {
                        n([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function (e) {
            clearTimeout(this.searching), this.searching = this._delay(function () {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
            }, this.options.delay)
        },
        search: function (e, t) {
            return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : undefined
        },
        _search: function (e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: e
            }, this._response())
        },
        _response: function () {
            var e = this,
                i = ++t;
            return function (s) {
                i === t && e.__response(s), e.pending--, e.pending || e.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function (e) {
            e && (e = this._normalize(e)), this._trigger("response", null, {
                content: e
            }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
        },
        close: function (e) {
            this.cancelSearch = !0, this._close(e)
        },
        _close: function (e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },
        _change: function (e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function (t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
                return "string" == typeof t ? {
                    label: t,
                    value: t
                } : e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function (t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function () {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (t, i) {
            var s = this;
            e.each(i, function (e, i) {
                s._renderItemData(t, i)
            })
        },
        _renderItemData: function (e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function (t, i) {
            return e("<li>").append(e("<a>").text(i.label)).appendTo(t)
        },
        _move: function (e, t) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[e](t), undefined) : (this.search(null, t), undefined)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (e, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function (e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function (t, i) {
            var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
            return e.grep(t, function (e) {
                return s.test(e.label || e.value || e)
            })
        }
    }), e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function (e) {
            var t;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(t))
        }
    })
})(jQuery);
(function (e) {
    var t, i, n, s, a = "ui-button ui-widget ui-state-default ui-corner-all",
        o = "ui-state-hover ui-state-active ",
        r = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        h = function () {
            var t = e(this);
            setTimeout(function () {
                t.find(":ui-button").button("refresh")
            }, 1)
        },
        u = function (t) {
            var i = t.name,
                n = t.form,
                s = e([]);
            return i && (i = i.replace(/'/g, "\\'"), s = n ? e(n).find("[name='" + i + "']") : e("[name='" + i + "']", t.ownerDocument).filter(function () {
                return !this.form
            })), s
        };
    e.widget("ui.button", {
        version: "1.10.3",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function () {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, h), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var o = this,
                r = this.options,
                l = "checkbox" === this.type || "radio" === this.type,
                c = l ? "" : "ui-state-active",
                d = "ui-state-focus";
            null === r.label && (r.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(a).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                r.disabled || this === t && e(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function () {
                r.disabled || e(this).removeClass(c)
            }).bind("click" + this.eventNamespace, function (e) {
                r.disabled && (e.preventDefault(), e.stopImmediatePropagation())
            }), this.element.bind("focus" + this.eventNamespace, function () {
                o.buttonElement.addClass(d)
            }).bind("blur" + this.eventNamespace, function () {
                o.buttonElement.removeClass(d)
            }), l && (this.element.bind("change" + this.eventNamespace, function () {
                s || o.refresh()
            }), this.buttonElement.bind("mousedown" + this.eventNamespace, function (e) {
                r.disabled || (s = !1, i = e.pageX, n = e.pageY)
            }).bind("mouseup" + this.eventNamespace, function (e) {
                r.disabled || (i !== e.pageX || n !== e.pageY) && (s = !0)
            })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                return r.disabled || s ? !1 : undefined
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (r.disabled || s) return !1;
                e(this).addClass("ui-state-active"), o.buttonElement.attr("aria-pressed", "true");
                var t = o.element[0];
                u(t).not(t).map(function () {
                    return e(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                return r.disabled ? !1 : (e(this).addClass("ui-state-active"), t = this, o.document.one("mouseup", function () {
                    t = null
                }), undefined)
            }).bind("mouseup" + this.eventNamespace, function () {
                return r.disabled ? !1 : (e(this).removeClass("ui-state-active"), undefined)
            }).bind("keydown" + this.eventNamespace, function (t) {
                return r.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), undefined)
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
                e(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click()
            })), this._setOption("disabled", r.disabled), this._resetButton()
        },
        _determineButtonType: function () {
            var e, t, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(a + " " + o + " " + r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function (e, t) {
            return this._super(e, t), "disabled" === e ? (t ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1), undefined) : (this._resetButton(), undefined)
        },
        refresh: function () {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? u(this.element[0]).each(function () {
                e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function () {
            if ("input" === this.type) return this.options.label && this.element.val(this.options.label), undefined;
            var t = this.buttonElement.removeClass(r),
                i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                n = this.options.icons,
                s = n.primary && n.secondary,
                a = [];
            n.primary || n.secondary ? (this.options.text && a.push("ui-button-text-icon" + (s ? "s" : n.primary ? "-primary" : "-secondary")), n.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + n.primary + "'></span>"), n.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + n.secondary + "'></span>"), this.options.text || (a.push(s ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : a.push("ui-button-text-only"), t.addClass(a.join(" "))
        }
    }), e.widget("ui.buttonset", {
        version: "1.10.3",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (e, t) {
            "disabled" === e && this.buttons.button("option", e, t), this._super(e, t)
        },
        refresh: function () {
            var t = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function () {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
})(jQuery);
(function (e, t) {
    function i() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, e.extend(this._defaults, this.regional[""]), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function a(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout", function () {
            e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", function () {
            e.datepicker._isDisabledDatepicker(n.inline ? t.parent()[0] : n.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function s(t, i) {
        e.extend(t, i);
        for (var a in i) null == i[a] && (t[a] = i[a]);
        return t
    }
    e.extend(e.ui, {
        datepicker: {
            version: "1.10.3"
        }
    });
    var n, r = "datepicker";
    e.extend(i.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (e) {
            return s(this._defaults, e || {}), this
        },
        _attachDatepicker: function (t, i) {
            var a, s, n;
            a = t.nodeName.toLowerCase(), s = "div" === a || "span" === a, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), n = this._newInst(e(t), s), n.settings = e.extend({}, i || {}), "input" === a ? this._connectDatepicker(t, n) : s && this._inlineDatepicker(t, n)
        },
        _newInst: function (t, i) {
            var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: s,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function (t, i) {
            var a = e(t);
            i.append = e([]), i.trigger = e([]), a.hasClass(this.markerClassName) || (this._attachments(a, i), a.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, r, i), i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function (t, i) {
            var a, s, n, r = this._get(i, "appendText"),
                o = this._get(i, "isRTL");
            i.append && i.append.remove(), r && (i.append = e("<span class='" + this._appendClass + "'>" + r + "</span>"), t[o ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), a = this._get(i, "showOn"), ("focus" === a || "both" === a) && t.focus(this._showDatepicker), ("button" === a || "both" === a) && (s = this._get(i, "buttonText"), n = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                src: n,
                alt: s,
                title: s
            }) : e("<button type='button'></button>").addClass(this._triggerClass).html(n ? e("<img/>").attr({
                src: n,
                alt: s,
                title: s
            }) : s)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function () {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function (e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, i, a, s, n = new Date(2009, 11, 20),
                    r = this._get(e, "dateFormat");
                r.match(/[DM]/) && (t = function (e) {
                    for (i = 0, a = 0, s = 0; e.length > s; s++) e[s].length > i && (i = e[s].length, a = s);
                    return a
                }, n.setMonth(t(this._get(e, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), n.setDate(t(this._get(e, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - n.getDay())), e.input.attr("size", this._formatDate(e, n).length)
            }
        },
        _inlineDatepicker: function (t, i) {
            var a = e(t);
            a.hasClass(this.markerClassName) || (a.addClass(this.markerClassName).append(i.dpDiv), e.data(t, r, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (t, i, a, n, o) {
            var u, c, l, h, d, p = this._dialogInst;
            return p || (this.uuid += 1, u = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + u + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, e.data(this._dialogInput[0], r, p)), s(p.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (c = document.documentElement.clientWidth, l = document.documentElement.clientHeight, h = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + h, l / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = a, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], r, p), this
        },
        _destroyDatepicker: function (t) {
            var i, a = e(t),
                s = e.data(t, r);
            a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, r), "input" === i ? (s.append.remove(), s.trigger.remove(), a.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && a.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function (t) {
            var i, a, s = e(t),
                n = e.data(t, r);
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, n.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (a = s.children("." + this._inlineClass), a.children().removeClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function (t) {
            var i, a, s = e(t),
                n = e.data(t, r);
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, n.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (a = s.children("." + this._inlineClass), a.children().addClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function (e) {
            if (!e) return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function (t) {
            try {
                return e.data(t, r)
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (i, a, n) {
            var r, o, u, c, l = this._getInst(i);
            return 2 === arguments.length && "string" == typeof a ? "defaults" === a ? e.extend({}, e.datepicker._defaults) : l ? "all" === a ? e.extend({}, l.settings) : this._get(l, a) : null : (r = a || {}, "string" == typeof a && (r = {}, r[a] = n), l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(i, !0), u = this._getMinMaxDate(l, "min"), c = this._getMinMaxDate(l, "max"), s(l.settings, r), null !== u && r.dateFormat !== t && r.minDate === t && (l.settings.minDate = this._formatDate(l, u)), null !== c && r.dateFormat !== t && r.maxDate === t && (l.settings.maxDate = this._formatDate(l, c)), "disabled" in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(e(i), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l)), t)
        },
        _changeDatepicker: function (e, t, i) {
            this._optionDatepicker(e, t, i)
        },
        _refreshDatepicker: function (e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function (e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function (e, t) {
            var i = this._getInst(e);
            return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
        },
        _doKeyDown: function (t) {
            var i, a, s, n = e.datepicker._getInst(t.target),
                r = !0,
                o = n.dpDiv.is(".ui-datepicker-rtl");
            if (n._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), r = !1;
                    break;
                case 13:
                    return s = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", n.dpDiv), s[0] && e.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, s[0]), i = e.datepicker._get(n, "onSelect"), i ? (a = e.datepicker._formatDate(n), i.apply(n.input ? n.input[0] : null, [a, n])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), r = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), r = t.ctrlKey || t.metaKey;
                    break;
                default:
                    r = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : r = !1;
            r && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function (i) {
            var a, s, n = e.datepicker._getInst(i.target);
            return e.datepicker._get(n, "constrainInput") ? (a = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > s || !a || a.indexOf(s) > -1) : t
        },
        _doKeyUp: function (t) {
            var i, a = e.datepicker._getInst(t.target);
            if (a.input.val() !== a.lastVal) try {
                i = e.datepicker.parseDate(e.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, e.datepicker._getFormatConfig(a)), i && (e.datepicker._setDateFromField(a), e.datepicker._updateAlternate(a), e.datepicker._updateDatepicker(a))
            } catch (s) {}
            return !0
        },
        _showDatepicker: function (t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var i, a, n, r, o, u, c;
                i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), a = e.datepicker._get(i, "beforeShow"), n = a ? a.apply(t, [t, i]) : {}, n !== !1 && (s(i.settings, n), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), r = !1, e(t).parents().each(function () {
                    return r |= "fixed" === e(this).css("position"), !r
                }), o = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), e.datepicker._updateDatepicker(i), o = e.datepicker._checkOffset(i, o, r), i.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: o.left + "px",
                    top: o.top + "px"
                }), i.inline || (u = e.datepicker._get(i, "showAnim"), c = e.datepicker._get(i, "duration"), i.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[u] ? i.dpDiv.show(u, e.datepicker._get(i, "showOptions"), c) : i.dpDiv[u || "show"](u ? c : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function (t) {
            this.maxRows = 4, n = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var i, a = this._getNumberOfMonths(t),
                s = a[1],
                r = 17;
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", r * s + "em"), t.dpDiv[(1 !== a[0] || 1 !== a[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function () {
                i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function (e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function (t, i, a) {
            var s = t.dpDiv.outerWidth(),
                n = t.dpDiv.outerHeight(),
                r = t.input ? t.input.outerWidth() : 0,
                o = t.input ? t.input.outerHeight() : 0,
                u = document.documentElement.clientWidth + (a ? 0 : e(document).scrollLeft()),
                c = document.documentElement.clientHeight + (a ? 0 : e(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? s - r : 0, i.left -= a && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= a && i.top === t.input.offset().top + o ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > u && u > s ? Math.abs(i.left + s - u) : 0), i.top -= Math.min(i.top, i.top + n > c && c > n ? Math.abs(n + o) : 0), i
        },
        _findPos: function (t) {
            for (var i, a = this._getInst(t), s = this._get(a, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[s ? "previousSibling" : "nextSibling"];
            return i = e(t).offset(), [i.left, i.top]
        },
        _hideDatepicker: function (t) {
            var i, a, s, n, o = this._curInst;
            !o || t && o !== e.data(t, r) || this._datepickerShowing && (i = this._get(o, "showAnim"), a = this._get(o, "duration"), s = function () {
                e.datepicker._tidyDialog(o)
            }, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), a, s) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? a : null, s), i || s(), this._datepickerShowing = !1, n = this._get(o, "onClose"), n && n.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function (e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (t) {
            if (e.datepicker._curInst) {
                var i = e(t.target),
                    a = e.datepicker._getInst(i[0]);
                (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== a) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (t, i, a) {
            var s = e(t),
                n = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(n, i + ("M" === a ? this._get(n, "showCurrentAtPos") : 0), a), this._updateDatepicker(n))
        },
        _gotoToday: function (t) {
            var i, a = e(t),
                s = this._getInst(a[0]);
            this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(a)
        },
        _selectMonthYear: function (t, i, a) {
            var s = e(t),
                n = this._getInst(s[0]);
            n["selected" + ("M" === a ? "Month" : "Year")] = n["draw" + ("M" === a ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(s)
        },
        _selectDay: function (t, i, a, s) {
            var n, r = e(t);
            e(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (n = this._getInst(r[0]), n.selectedDay = n.currentDay = e("a", s).html(), n.selectedMonth = n.currentMonth = i, n.selectedYear = n.currentYear = a, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)))
        },
        _clearDate: function (t) {
            var i = e(t);
            this._selectDate(i, "")
        },
        _selectDate: function (t, i) {
            var a, s = e(t),
                n = this._getInst(s[0]);
            i = null != i ? i : this._formatDate(n), n.input && n.input.val(i), this._updateAlternate(n), a = this._get(n, "onSelect"), a ? a.apply(n.input ? n.input[0] : null, [i, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (t) {
            var i, a, s, n = this._get(t, "altField");
            n && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), a = this._getDate(t), s = this.formatDate(i, a, this._getFormatConfig(t)), e(n).each(function () {
                e(this).val(s)
            }))
        },
        noWeekends: function (e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function (e) {
            var t, i = new Date(e.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1
        },
        parseDate: function (i, a, s) {
            if (null == i || null == a) throw "Invalid arguments";
            if (a = "object" == typeof a ? "" + a : a + "", "" === a) return null;
            var n, r, o, u, c = 0,
                l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                h = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
                d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                p = (s ? s.dayNames : null) || this._defaults.dayNames,
                g = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                m = (s ? s.monthNames : null) || this._defaults.monthNames,
                f = -1,
                _ = -1,
                v = -1,
                k = -1,
                b = !1,
                y = function (e) {
                    var t = i.length > n + 1 && i.charAt(n + 1) === e;
                    return t && n++, t
                },
                D = function (e) {
                    var t = y(e),
                        i = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                        s = RegExp("^\\d{1," + i + "}"),
                        n = a.substring(c).match(s);
                    if (!n) throw "Missing number at position " + c;
                    return c += n[0].length, parseInt(n[0], 10)
                },
                w = function (i, s, n) {
                    var r = -1,
                        o = e.map(y(i) ? n : s, function (e, t) {
                            return [[t, e]]
                        }).sort(function (e, t) {
                            return -(e[1].length - t[1].length)
                        });
                    if (e.each(o, function (e, i) {
                            var s = i[1];
                            return a.substr(c, s.length).toLowerCase() === s.toLowerCase() ? (r = i[0], c += s.length, !1) : t
                        }), -1 !== r) return r + 1;
                    throw "Unknown name at position " + c
                },
                M = function () {
                    if (a.charAt(c) !== i.charAt(n)) throw "Unexpected literal at position " + c;
                    c++
                };
            for (n = 0; i.length > n; n++)
                if (b) "'" !== i.charAt(n) || y("'") ? M() : b = !1;
                else switch (i.charAt(n)) {
                    case "d":
                        v = D("d");
                        break;
                    case "D":
                        w("D", d, p);
                        break;
                    case "o":
                        k = D("o");
                        break;
                    case "m":
                        _ = D("m");
                        break;
                    case "M":
                        _ = w("M", g, m);
                        break;
                    case "y":
                        f = D("y");
                        break;
                    case "@":
                        u = new Date(D("@")), f = u.getFullYear(), _ = u.getMonth() + 1, v = u.getDate();
                        break;
                    case "!":
                        u = new Date((D("!") - this._ticksTo1970) / 1e4), f = u.getFullYear(), _ = u.getMonth() + 1, v = u.getDate();
                        break;
                    case "'":
                        y("'") ? M() : b = !0;
                        break;
                    default:
                        M()
                }
            if (a.length > c && (o = a.substr(c), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
            if (-1 === f ? f = (new Date).getFullYear() : 100 > f && (f += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (h >= f ? 0 : -100)), k > -1)
                for (_ = 1, v = k;;) {
                    if (r = this._getDaysInMonth(f, _ - 1), r >= v) break;
                    _++, v -= r
                }
            if (u = this._daylightSavingAdjust(new Date(f, _ - 1, v)), u.getFullYear() !== f || u.getMonth() + 1 !== _ || u.getDate() !== v) throw "Invalid date";
            return u
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (e, t, i) {
            if (!t) return "";
            var a, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                n = (i ? i.dayNames : null) || this._defaults.dayNames,
                r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                o = (i ? i.monthNames : null) || this._defaults.monthNames,
                u = function (t) {
                    var i = e.length > a + 1 && e.charAt(a + 1) === t;
                    return i && a++, i
                },
                c = function (e, t, i) {
                    var a = "" + t;
                    if (u(e))
                        for (; i > a.length;) a = "0" + a;
                    return a
                },
                l = function (e, t, i, a) {
                    return u(e) ? a[t] : i[t]
                },
                h = "",
                d = !1;
            if (t)
                for (a = 0; e.length > a; a++)
                    if (d) "'" !== e.charAt(a) || u("'") ? h += e.charAt(a) : d = !1;
                    else switch (e.charAt(a)) {
                        case "d":
                            h += c("d", t.getDate(), 2);
                            break;
                        case "D":
                            h += l("D", t.getDay(), s, n);
                            break;
                        case "o":
                            h += c("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            h += c("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            h += l("M", t.getMonth(), r, o);
                            break;
                        case "y":
                            h += u("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            h += t.getTime();
                            break;
                        case "!":
                            h += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            u("'") ? h += "'" : d = !0;
                            break;
                        default:
                            h += e.charAt(a)
                    }
            return h
        },
        _possibleChars: function (e) {
            var t, i = "",
                a = !1,
                s = function (i) {
                    var a = e.length > t + 1 && e.charAt(t + 1) === i;
                    return a && t++, a
                };
            for (t = 0; e.length > t; t++)
                if (a) "'" !== e.charAt(t) || s("'") ? i += e.charAt(t) : a = !1;
                else switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        s("'") ? i += "'" : a = !0;
                        break;
                    default:
                        i += e.charAt(t)
                }
            return i
        },
        _get: function (e, i) {
            return e.settings[i] !== t ? e.settings[i] : this._defaults[i]
        },
        _setDateFromField: function (e, t) {
            if (e.input.val() !== e.lastVal) {
                var i = this._get(e, "dateFormat"),
                    a = e.lastVal = e.input ? e.input.val() : null,
                    s = this._getDefaultDate(e),
                    n = s,
                    r = this._getFormatConfig(e);
                try {
                    n = this.parseDate(i, a, r) || s
                } catch (o) {
                    a = t ? "" : a
                }
                e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), e.currentDay = a ? n.getDate() : 0, e.currentMonth = a ? n.getMonth() : 0, e.currentYear = a ? n.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function (e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function (t, i, a) {
            var s = function (e) {
                    var t = new Date;
                    return t.setDate(t.getDate() + e), t
                },
                n = function (i) {
                    try {
                        return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
                    } catch (a) {}
                    for (var s = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, n = s.getFullYear(), r = s.getMonth(), o = s.getDate(), u = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, c = u.exec(i); c;) {
                        switch (c[2] || "d") {
                            case "d":
                            case "D":
                                o += parseInt(c[1], 10);
                                break;
                            case "w":
                            case "W":
                                o += 7 * parseInt(c[1], 10);
                                break;
                            case "m":
                            case "M":
                                r += parseInt(c[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r));
                                break;
                            case "y":
                            case "Y":
                                n += parseInt(c[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r))
                        }
                        c = u.exec(i)
                    }
                    return new Date(n, r, o)
                },
                r = null == i || "" === i ? a : "string" == typeof i ? n(i) : "number" == typeof i ? isNaN(i) ? a : s(i) : new Date(i.getTime());
            return r = r && "Invalid Date" == "" + r ? a : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
        },
        _daylightSavingAdjust: function (e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function (e, t, i) {
            var a = !t,
                s = e.selectedMonth,
                n = e.selectedYear,
                r = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), s === e.selectedMonth && n === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(a ? "" : this._formatDate(e))
        },
        _getDate: function (e) {
            var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function (t) {
            var i = this._get(t, "stepMonths"),
                a = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function () {
                var t = {
                    prev: function () {
                        e.datepicker._adjustDate(a, -i, "M")
                    },
                    next: function () {
                        e.datepicker._adjustDate(a, +i, "M")
                    },
                    hide: function () {
                        e.datepicker._hideDatepicker()
                    },
                    today: function () {
                        e.datepicker._gotoToday(a)
                    },
                    selectDay: function () {
                        return e.datepicker._selectDay(a, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function () {
                        return e.datepicker._selectMonthYear(a, this, "M"), !1
                    },
                    selectYear: function () {
                        return e.datepicker._selectMonthYear(a, this, "Y"), !1
                    }
                };
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (e) {
            var t, i, a, s, n, r, o, u, c, l, h, d, p, g, m, f, _, v, k, b, y, D, w, M, C, x, I, N, T, A, E, S, Y, F, P, O, j, K, R, H = new Date,
                W = this._daylightSavingAdjust(new Date(H.getFullYear(), H.getMonth(), H.getDate())),
                L = this._get(e, "isRTL"),
                U = this._get(e, "showButtonPanel"),
                B = this._get(e, "hideIfNoPrevNext"),
                z = this._get(e, "navigationAsDateFormat"),
                q = this._getNumberOfMonths(e),
                G = this._get(e, "showCurrentAtPos"),
                J = this._get(e, "stepMonths"),
                Q = 1 !== q[0] || 1 !== q[1],
                V = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                $ = this._getMinMaxDate(e, "min"),
                X = this._getMinMaxDate(e, "max"),
                Z = e.drawMonth - G,
                et = e.drawYear;
            if (0 > Z && (Z += 12, et--), X)
                for (t = this._daylightSavingAdjust(new Date(X.getFullYear(), X.getMonth() - q[0] * q[1] + 1, X.getDate())), t = $ && $ > t ? $ : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, et--);
            for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = z ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - J, 1)), this._getFormatConfig(e)) : i, a = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(e, "nextText"), s = z ? this.formatDate(s, this._daylightSavingAdjust(new Date(et, Z + J, 1)), this._getFormatConfig(e)) : s, n = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "w" : "e") + "'>" + s + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(e, "currentText"), o = this._get(e, "gotoCurrent") && e.currentDay ? V : W, r = z ? this.formatDate(r, o, this._getFormatConfig(e)) : r, u = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", c = U ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (L ? u : "") + (this._isInRange(e, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (L ? "" : u) + "</div>" : "", l = parseInt(this._get(e, "firstDay"), 10), l = isNaN(l) ? 0 : l, h = this._get(e, "showWeek"), d = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), g = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), f = this._get(e, "beforeShowDay"), _ = this._get(e, "showOtherMonths"), v = this._get(e, "selectOtherMonths"), k = this._getDefaultDate(e), b = "", D = 0; q[0] > D; D++) {
                for (w = "", this.maxRows = 4, M = 0; q[1] > M; M++) {
                    if (C = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), x = " ui-corner-all", I = "", Q) {
                        if (I += "<div class='ui-datepicker-group", q[1] > 1) switch (M) {
                            case 0:
                                I += " ui-datepicker-group-first", x = " ui-corner-" + (L ? "right" : "left");
                                break;
                            case q[1] - 1:
                                I += " ui-datepicker-group-last", x = " ui-corner-" + (L ? "left" : "right");
                                break;
                            default:
                                I += " ui-datepicker-group-middle", x = ""
                        }
                        I += "'>"
                    }
                    for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + x + "'>" + (/all|left/.test(x) && 0 === D ? L ? n : a : "") + (/all|right/.test(x) && 0 === D ? L ? a : n : "") + this._generateMonthYearHeader(e, Z, et, $, X, D > 0 || M > 0, g, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", N = h ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", y = 0; 7 > y; y++) T = (y + l) % 7, N += "<th" + ((y + l + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[T] + "'>" + p[T] + "</span></th>";
                    for (I += N + "</tr></thead><tbody>", A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), E = (this._getFirstDayOfMonth(et, Z) - l + 7) % 7, S = Math.ceil((E + A) / 7), Y = Q ? this.maxRows > S ? this.maxRows : S : S, this.maxRows = Y, F = this._daylightSavingAdjust(new Date(et, Z, 1 - E)), P = 0; Y > P; P++) {
                        for (I += "<tr>", O = h ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(F) + "</td>" : "", y = 0; 7 > y; y++) j = f ? f.apply(e.input ? e.input[0] : null, [F]) : [!0, ""], K = F.getMonth() !== Z, R = K && !v || !j[0] || $ && $ > F || X && F > X, O += "<td class='" + ((y + l + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (K ? " ui-datepicker-other-month" : "") + (F.getTime() === C.getTime() && Z === e.selectedMonth && e._keyEvent || k.getTime() === F.getTime() && k.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (K && !_ ? "" : " " + j[1] + (F.getTime() === V.getTime() ? " " + this._currentClass : "") + (F.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + (K && !_ || !j[2] ? "" : " title='" + j[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + F.getMonth() + "' data-year='" + F.getFullYear() + "'") + ">" + (K && !_ ? "&#xa0;" : R ? "<span class='ui-state-default'>" + F.getDate() + "</span>" : "<a class='ui-state-default" + (F.getTime() === W.getTime() ? " ui-state-highlight" : "") + (F.getTime() === V.getTime() ? " ui-state-active" : "") + (K ? " ui-priority-secondary" : "") + "' href='#'>" + F.getDate() + "</a>") + "</td>", F.setDate(F.getDate() + 1), F = this._daylightSavingAdjust(F);
                        I += O + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, et++), I += "</tbody></table>" + (Q ? "</div>" + (q[0] > 0 && M === q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), w += I
                }
                b += w
            }
            return b += c, e._keyEvent = !1, b
        },
        _generateMonthYearHeader: function (e, t, i, a, s, n, r, o) {
            var u, c, l, h, d, p, g, m, f = this._get(e, "changeMonth"),
                _ = this._get(e, "changeYear"),
                v = this._get(e, "showMonthAfterYear"),
                k = "<div class='ui-datepicker-title'>",
                b = "";
            if (n || !f) b += "<span class='ui-datepicker-month'>" + r[t] + "</span>";
            else {
                for (u = a && a.getFullYear() === i, c = s && s.getFullYear() === i, b += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", l = 0; 12 > l; l++)(!u || l >= a.getMonth()) && (!c || s.getMonth() >= l) && (b += "<option value='" + l + "'" + (l === t ? " selected='selected'" : "") + ">" + o[l] + "</option>");
                b += "</select>"
            }
            if (v || (k += b + (!n && f && _ ? "" : "&#xa0;")), !e.yearshtml)
                if (e.yearshtml = "", n || !_) k += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (h = this._get(e, "yearRange").split(":"), d = (new Date).getFullYear(), p = function (e) {
                            var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? d + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? d : t
                        }, g = p(h[0]), m = Math.max(g, p(h[1] || "")), g = a ? Math.max(g, a.getFullYear()) : g, m = s ? Math.min(m, s.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= g; g++) e.yearshtml += "<option value='" + g + "'" + (g === i ? " selected='selected'" : "") + ">" + g + "</option>";
                    e.yearshtml += "</select>", k += e.yearshtml, e.yearshtml = null
                } return k += this._get(e, "yearSuffix"), v && (k += (!n && f && _ ? "" : "&#xa0;") + b), k += "</div>"
        },
        _adjustInstDate: function (e, t, i) {
            var a = e.drawYear + ("Y" === i ? t : 0),
                s = e.drawMonth + ("M" === i ? t : 0),
                n = Math.min(e.selectedDay, this._getDaysInMonth(a, s)) + ("D" === i ? t : 0),
                r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(a, s, n)));
            e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
        },
        _restrictMinMax: function (e, t) {
            var i = this._getMinMaxDate(e, "min"),
                a = this._getMinMaxDate(e, "max"),
                s = i && i > t ? i : t;
            return a && s > a ? a : s
        },
        _notifyChange: function (e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function (e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function (e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function (e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function (e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function (e, t, i, a) {
            var s = this._getNumberOfMonths(e),
                n = this._daylightSavingAdjust(new Date(i, a + (0 > t ? t : s[0] * s[1]), 1));
            return 0 > t && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(e, n)
        },
        _isInRange: function (e, t) {
            var i, a, s = this._getMinMaxDate(e, "min"),
                n = this._getMinMaxDate(e, "max"),
                r = null,
                o = null,
                u = this._get(e, "yearRange");
            return u && (i = u.split(":"), a = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += a), i[1].match(/[+\-].*/) && (o += a)), (!s || t.getTime() >= s.getTime()) && (!n || t.getTime() <= n.getTime()) && (!r || t.getFullYear() >= r) && (!o || o >= t.getFullYear())
        },
        _getFormatConfig: function (e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function (e, t, i, a) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var s = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(a, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), s, this._getFormatConfig(e))
        }
    }), e.fn.datepicker = function (t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function () {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }, e.datepicker = new i, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.10.3"
})(jQuery);
(function (e) {
    var t = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        i = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        };
    e.widget("ui.dialog", {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function (t) {
                    var i = e(this).css(t).offset().top;
                    0 > i && e(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function () {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function () {
            var e, t = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        disable: e.noop,
        enable: e.noop,
        close: function (t) {
            var i = this;
            this._isOpen && this._trigger("beforeClose", t) !== !1 && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || e(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function () {
                i._trigger("close", t)
            }))
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function () {
            this._moveToTop()
        },
        _moveToTop: function (e, t) {
            var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return i && !t && this._trigger("focus", e), i
        },
        open: function () {
            var t = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(), undefined) : (this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function () {
                t._focusTabbable(), t._trigger("focus")
            }), this._trigger("open"), undefined)
        },
        _focusTabbable: function () {
            var e = this.element.find("[autofocus]");
            e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus()
        },
        _keepFocus: function (t) {
            function i() {
                var t = this.document[0].activeElement,
                    i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
                i || this._focusTabbable()
            }
            t.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function () {
            this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function (t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(), this.close(t), undefined;
                    if (t.keyCode === e.ui.keyCode.TAB) {
                        var i = this.uiDialog.find(":tabbable"),
                            a = i.filter(":first"),
                            s = i.filter(":last");
                        t.target !== s[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== a[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (s.focus(1), t.preventDefault()) : (a.focus(1), t.preventDefault())
                    }
                },
                mousedown: function (e) {
                    this._moveToTop(e) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function () {
            var t;
            this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function (t) {
                    e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = e("<button></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function (e) {
                    e.preventDefault(), this.close(e)
                }
            }), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function (e) {
            this.options.title || e.html("&#160;"), e.text(this.options.title)
        },
        _createButtonPane: function () {
            this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function () {
            var t = this,
                i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(i) || e.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), undefined) : (e.each(i, function (i, a) {
                var s, n;
                a = e.isFunction(a) ? {
                    click: a,
                    text: i
                } : a, a = e.extend({
                    type: "button"
                }, a), s = a.click, a.click = function () {
                    s.apply(t.element[0], arguments)
                }, n = {
                    icons: a.icons,
                    text: a.showText
                }, delete a.icons, delete a.showText, e("<button></button>", a).button(n).appendTo(t.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), undefined)
        },
        _makeDraggable: function () {
            function t(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            var i = this,
                a = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (a, s) {
                    e(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", a, t(s))
                },
                drag: function (e, a) {
                    i._trigger("drag", e, t(a))
                },
                stop: function (s, n) {
                    a.position = [n.position.left - i.document.scrollLeft(), n.position.top - i.document.scrollTop()], e(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, t(n))
                }
            })
        },
        _makeResizable: function () {
            function t(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
            var i = this,
                a = this.options,
                s = a.resizable,
                n = this.uiDialog.css("position"),
                r = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: a.maxWidth,
                maxHeight: a.maxHeight,
                minWidth: a.minWidth,
                minHeight: this._minHeight(),
                handles: r,
                start: function (a, s) {
                    e(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", a, t(s))
                },
                resize: function (e, a) {
                    i._trigger("resize", e, t(a))
                },
                stop: function (s, n) {
                    a.height = e(this).height(), a.width = e(this).width(), e(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, t(n))
                }
            }).css("position", n)
        },
        _minHeight: function () {
            var e = this.options;
            return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function () {
            var e = this.uiDialog.is(":visible");
            e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
        },
        _setOptions: function (a) {
            var s = this,
                n = !1,
                r = {};
            e.each(a, function (e, a) {
                s._setOption(e, a), e in t && (n = !0), e in i && (r[e] = a)
            }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", r)
        },
        _setOption: function (e, t) {
            var i, a, s = this.uiDialog;
            "dialogClass" === e && s.removeClass(this.options.dialogClass).addClass(t), "disabled" !== e && (this._super(e, t), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
                label: "" + t
            }), "draggable" === e && (i = s.is(":data(ui-draggable)"), i && !t && s.draggable("destroy"), !i && t && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (a = s.is(":data(ui-resizable)"), a && !t && s.resizable("destroy"), a && "string" == typeof t && s.resizable("option", "handles", t), a || t === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function () {
            var e, t, i, a = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), a.minWidth > a.width && (a.width = a.minWidth), e = this.uiDialog.css({
                height: "auto",
                width: a.width
            }).outerHeight(), t = Math.max(0, a.minHeight - e), i = "number" == typeof a.maxHeight ? Math.max(0, a.maxHeight - e) : "none", "auto" === a.height ? this.element.css({
                minHeight: t,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, a.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map(function () {
                var t = e(this);
                return e("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function (t) {
            return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function () {
            if (this.options.modal) {
                var t = this,
                    i = this.widgetFullName;
                e.ui.dialog.overlayInstances || this._delay(function () {
                    e.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function (a) {
                        t._allowInteraction(a) || (a.preventDefault(), e(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
                    })
                }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), e.ui.dialog.overlayInstances++
            }
        },
        _destroyOverlay: function () {
            this.options.modal && this.overlay && (e.ui.dialog.overlayInstances--, e.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
        }
    }), e.ui.dialog.overlayInstances = 0, e.uiBackCompat !== !1 && e.widget("ui.dialog", e.ui.dialog, {
        _position: function () {
            var t, i = this.options.position,
                a = [],
                s = [0, 0];
            i ? (("string" == typeof i || "object" == typeof i && "0" in i) && (a = i.split ? i.split(" ") : [i[0], i[1]], 1 === a.length && (a[1] = a[0]), e.each(["left", "top"], function (e, t) {
                +a[e] === a[e] && (s[e] = a[e], a[e] = t)
            }), i = {
                my: a[0] + (0 > s[0] ? s[0] : "+" + s[0]) + " " + a[1] + (0 > s[1] ? s[1] : "+" + s[1]),
                at: a.join(" ")
            }), i = e.extend({}, e.ui.dialog.prototype.options.position, i)) : i = e.ui.dialog.prototype.options.position, t = this.uiDialog.is(":visible"), t || this.uiDialog.show(), this.uiDialog.position(i), t || this.uiDialog.hide()
        }
    })
})(jQuery);
(function (t) {
    t.widget("ui.menu", {
        version: "1.10.3",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, t.proxy(function (t) {
                this.options.disabled && t.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function (t) {
                    t.preventDefault()
                },
                "click .ui-state-disabled > a": function (t) {
                    t.preventDefault()
                },
                "click .ui-menu-item:has(a)": function (e) {
                    var i = t(e.target).closest(".ui-menu-item");
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(e), i.has(".ui-menu").length ? this.expand(e) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function (e) {
                    var i = t(e.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function (t, e) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    e || this.focus(t, i)
                },
                blur: function (e) {
                    this._delay(function () {
                        t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function (e) {
                    t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
                }
            })
        },
        _destroy: function () {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function (e) {
            function i(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var s, n, a, o, r, l = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    l = !1, n = this.previousFilter || "", a = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), a === n ? o = !0 : a = n + a, r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () {
                        return r.test(t(this).children("a").text())
                    }), s = o && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (a = String.fromCharCode(e.keyCode), r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () {
                        return r.test(t(this).children("a").text())
                    })), s.length ? (this.focus(e, s), s.length > 1 ? (this.previousFilter = a, this.filterTimer = this._delay(function () {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            l && e.preventDefault()
        },
        _activate: function (t) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function () {
            var e, i = this.options.icons.submenu,
                s = this.element.find(this.options.menus);
            s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function () {
                var e = t(this),
                    s = e.prev("a"),
                    n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                s.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", s.attr("id"))
            }), e = s.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), e.children(":not(.ui-menu-item)").each(function () {
                var e = t(this);
                /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
            }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {
                menu: "menuitem",
                listbox: "option"
            } [this.options.role]
        },
        _setOption: function (t, e) {
            "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e)
        },
        focus: function (t, e) {
            var i, s;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay), i = e.children(".ui-menu"), i.length && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function (e) {
            var i, s, n, a, o, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = e.height(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
        },
        blur: function (t, e) {
            e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                item: this.active
            }))
        },
        _startOpening: function (t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
                this._close(), this._open(t)
            }, this.delay))
        },
        _open: function (e) {
            var i = t.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function (e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function () {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s
            }, this.delay)
        },
        _close: function (t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function (t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function (t) {
            var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            e && e.length && (this._open(e.parent()), this._delay(function () {
                this.focus(t, e)
            }))
        },
        next: function (t) {
            this._move("next", "first", t)
        },
        previous: function (t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, s)
        },
        nextPage: function (e) {
            var i, s, n;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return i = t(this), 0 > i.offset().top - s - n
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined) : (this.next(e), undefined)
        },
        previousPage: function (e) {
            var i, s, n;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return i = t(this), i.offset().top - s + n > 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())), undefined) : (this.next(e), undefined)
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        }
    })
})(jQuery);
(function (t, e) {
    t.widget("ui.progressbar", {
        version: "1.10.3",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function () {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
        },
        _destroy: function () {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        },
        value: function (t) {
            return t === e ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), e)
        },
        _constrainedValue: function (t) {
            return t === e && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
        },
        _setOptions: function (t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        },
        _setOption: function (t, e) {
            "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
        },
        _percentage: function () {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function () {
            var e = this.options.value,
                i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
        }
    })
})(jQuery);
(function (t) {
    var e = 5;
    t.widget("ui.slider", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function () {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function () {
            var e, i, s = this.options,
                n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                o = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) o.push(a);
            this.handles = n.add(t(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (e) {
                t(this).data("ui-slider-handle-index", e)
            })
        },
        _createRange: function () {
            var e = this.options,
                i = "";
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : this.range = t([])
        },
        _setupEvents: function () {
            var t = this.handles.add(this.range).filter("a");
            this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t)
        },
        _destroy: function () {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function (e) {
            var i, s, n, a, o, r, l, h, u = this,
                c = this.options;
            return c.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
                var i = Math.abs(s - u.values(e));
                (n > i || n === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (n = i, a = t(this), o = e)
            }), r = this._start(e, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), l = a.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - l.left - a.width() / 2,
                top: e.pageY - l.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, o, s), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (t) {
            var e = {
                    x: t.pageX,
                    y: t.pageY
                },
                i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function (t) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (t) {
            var e, i, s, n, a;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
        },
        _start: function (t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
        },
        _slide: function (t, e, i) {
            var s, n, a;
            this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, a = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
                values: n
            }), s = this.values(e ? 0 : 1), a !== !1 && this.values(e, i, !0))) : i !== this.value() && (a = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i
            }), a !== !1 && this.value(i))
        },
        _stop: function (t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
        },
        _change: function (t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
            }
        },
        value: function (t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), undefined) : this._value()
        },
        values: function (e, i) {
            var s, n, a;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), undefined;
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
            this._refreshValue()
        },
        _setOption: function (e, i) {
            var s, n = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                    this._animateOff = !1;
                    break;
                case "min":
                case "max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function () {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function (t) {
            var e, i, s;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function (t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var e, i, s, n, a, o = this.options.range,
                r = this.options,
                l = this,
                h = this._animateOff ? !1 : r.animate,
                u = {};
            this.options.values && this.options.values.length ? this.handles.each(function (s) {
                i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())), u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](u, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))), e = i
            }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: i + "%"
            }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: i + "%"
            }, r.animate), "max" === o && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }))
        },
        _handleEvents: {
            keydown: function (i) {
                var s, n, a, o, r = t(i.target).data("ui-slider-handle-index");
                switch (i.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), s = this._start(i, r), s === !1)) return
                }
                switch (o = this.options.step, n = a = this.options.values && this.options.values.length ? this.values(r) : this.value(), i.keyCode) {
                    case t.ui.keyCode.HOME:
                        a = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        a = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        a = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / e);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        a = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / e);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (n === this._valueMax()) return;
                        a = this._trimAlignValue(n + o);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (n === this._valueMin()) return;
                        a = this._trimAlignValue(n - o)
                }
                this._slide(i, r, a)
            },
            click: function (t) {
                t.preventDefault()
            },
            keyup: function (e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
            }
        }
    })
})(jQuery);
(function (t) {
    function e(t) {
        return function () {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
        }
    }
    t.widget("ui.spinner", {
        version: "1.10.3",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function () {
            var e = {},
                i = this.element;
            return t.each(["min", "max", "step"], function (t, s) {
                var n = i.attr(s);
                void 0 !== n && n.length && (e[s] = n)
            }), e
        },
        _events: {
            keydown: function (t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            },
            keyup: "_stop",
            focus: function () {
                this.previous = this.element.val()
            },
            blur: function (t) {
                return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0)
            },
            mousewheel: function (t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                        this.spinning && this._stop(t)
                    }, 100), t.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function (e) {
                function i() {
                    var t = this.element[0] === this.document[0].activeElement;
                    t || (this.element.focus(), this.previous = s, this._delay(function () {
                        this.previous = s
                    }))
                }
                var s;
                s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
                    delete this.cancelBlur, i.call(this)
                }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function (e) {
                return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function () {
            var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
        },
        _keydown: function (e) {
            var i = this.options,
                s = t.ui.keyCode;
            switch (e.keyCode) {
                case s.UP:
                    return this._repeat(null, 1, e), !0;
                case s.DOWN:
                    return this._repeat(null, -1, e), !0;
                case s.PAGE_UP:
                    return this._repeat(null, i.page, e), !0;
                case s.PAGE_DOWN:
                    return this._repeat(null, -i.page, e), !0
            }
            return !1
        },
        _uiSpinnerHtml: function () {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function () {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
        },
        _start: function (t) {
            return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
        },
        _repeat: function (t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                this._repeat(40, e, i)
            }, t), this._spin(e * this.options.step, i)
        },
        _spin: function (t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
                value: i
            }) === !1 || (this._value(i), this.counter++)
        },
        _increment: function (e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
        },
        _precision: function () {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function (t) {
            var e = "" + t,
                i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function (t) {
            var e, i, s = this.options;
            return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
        },
        _stop: function (t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
        },
        _setOption: function (t, e) {
            if ("culture" === t || "numberFormat" === t) {
                var i = this._parse(this.element.val());
                return this.options[t] = e, this.element.val(this._format(i)), void 0
            }("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
        },
        _setOptions: e(function (t) {
            this._super(t), this._value(this.element.val())
        }),
        _parse: function (t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
        },
        _format: function (t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },
        _refresh: function () {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function (t, e) {
            var i;
            "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
        },
        _destroy: function () {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: e(function (t) {
            this._stepUp(t)
        }),
        _stepUp: function (t) {
            this._start() && (this._spin((t || 1) * this.options.step), this._stop())
        },
        stepDown: e(function (t) {
            this._stepDown(t)
        }),
        _stepDown: function (t) {
            this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
        },
        pageUp: e(function (t) {
            this._stepUp((t || 1) * this.options.page)
        }),
        pageDown: e(function (t) {
            this._stepDown((t || 1) * this.options.page)
        }),
        value: function (t) {
            return arguments.length ? (e(this._value).call(this, t), void 0) : this._parse(this.element.val())
        },
        widget: function () {
            return this.uiSpinner
        }
    })
})(jQuery);
(function (t, e) {
    function i() {
        return ++n
    }

    function s(t) {
        return t.hash.length > 1 && decodeURIComponent(t.href.replace(a, "")) === decodeURIComponent(location.href.replace(a, ""))
    }
    var n = 0,
        a = /#.*$/;
    t.widget("ui.tabs", {
        version: "1.10.3",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function () {
            var e = this,
                i = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                return e.tabs.index(t)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function () {
            var i = this.options.active,
                s = this.options.collapsible,
                n = location.hash.substring(1);
            return null === i && (n && this.tabs.each(function (s, a) {
                return t(a).attr("aria-controls") === n ? (i = s, !1) : e
            }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = s ? !1 : 0)), !s && i === !1 && this.anchors.length && (i = 0), i
        },
        _getCreateEventData: function () {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : t()
            }
        },
        _tabKeydown: function (i) {
            var s = t(this.document[0].activeElement).closest("li"),
                n = this.tabs.index(s),
                a = !0;
            if (!this._handlePageNav(i)) {
                switch (i.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        n++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        a = !1, n--;
                        break;
                    case t.ui.keyCode.END:
                        n = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        n = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return i.preventDefault(), clearTimeout(this.activating), this._activate(n), e;
                    case t.ui.keyCode.ENTER:
                        return i.preventDefault(), clearTimeout(this.activating), this._activate(n === this.options.active ? !1 : n), e;
                    default:
                        return
                }
                i.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, a), i.ctrlKey || (s.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
                    this.option("active", n)
                }, this.delay))
            }
        },
        _panelKeydown: function (e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
        },
        _handlePageNav: function (i) {
            return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : e
        },
        _findNextTab: function (e, i) {
            function s() {
                return e > n && (e = 0), 0 > e && (e = n), e
            }
            for (var n = this.tabs.length - 1; - 1 !== t.inArray(s(), this.options.disabled);) e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function (t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
        },
        _setOption: function (t, i) {
            return "active" === t ? (this._activate(i), e) : "disabled" === t ? (this._setupDisabled(i), e) : (this._super(t, i), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(i), "heightStyle" === t && this._setupHeightStyle(i), e)
        },
        _tabId: function (t) {
            return t.attr("aria-controls") || "ui-tabs-" + i()
        },
        _sanitizeSelector: function (t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function () {
            var e = this.options,
                i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
                return i.index(t)
            }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function () {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function () {
            var e = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function () {
                return t("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = t(), this.anchors.each(function (i, n) {
                var a, o, r, h = t(n).uniqueId().attr("id"),
                    l = t(n).closest("li"),
                    c = l.attr("aria-controls");
                s(n) ? (a = n.hash, o = e.element.find(e._sanitizeSelector(a))) : (r = e._tabId(l), a = "#" + r, o = e.element.find(a), o.length || (o = e._createPanel(r), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), c && l.data("ui-tabs-aria-controls", c), l.attr({
                    "aria-controls": a.substring(1),
                    "aria-labelledby": h
                }), o.attr("aria-labelledby", h)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function () {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function (e) {
            return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function (e) {
            t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
            for (var i, s = 0; i = this.tabs[s]; s++) e === !0 || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = e
        },
        _setupEvents: function (e) {
            var i = {
                click: function (t) {
                    t.preventDefault()
                }
            };
            e && t.each(e.split(" "), function (t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function (e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                var e = t(this),
                    s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function () {
                i -= t(this).outerHeight(!0)
            }), this.panels.each(function () {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        },
        _eventHandler: function (e) {
            var i = this.options,
                s = this.active,
                n = t(e.currentTarget),
                a = n.closest("li"),
                o = a[0] === s[0],
                r = o && i.collapsible,
                h = r ? t() : this._getPanelForTab(a),
                l = s.length ? this._getPanelForTab(s) : t(),
                c = {
                    oldTab: s,
                    oldPanel: l,
                    newTab: r ? t() : a,
                    newPanel: h
                };
            e.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? t() : a, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), e), this._toggle(e, c))
        },
        _toggle: function (e, i) {
            function s() {
                a.running = !1, a._trigger("activate", e, i)
            }

            function n() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s())
            }
            var a = this,
                o = i.newPanel,
                r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), i.oldTab.attr("aria-selected", "false"), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), o.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }), i.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function (e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function (e) {
            return e === !1 ? t() : this.tabs.eq(e)
        },
        _getIndex: function (t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
        },
        _destroy: function () {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function () {
                var e = t(this),
                    i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function (i) {
            var s = this.options.disabled;
            s !== !1 && (i === e ? s = !1 : (i = this._getIndex(i), s = t.isArray(s) ? t.map(s, function (t) {
                return t !== i ? t : null
            }) : t.map(this.tabs, function (t, e) {
                return e !== i ? e : null
            })), this._setupDisabled(s))
        },
        disable: function (i) {
            var s = this.options.disabled;
            if (s !== !0) {
                if (i === e) s = !0;
                else {
                    if (i = this._getIndex(i), -1 !== t.inArray(i, s)) return;
                    s = t.isArray(s) ? t.merge([i], s).sort() : [i]
                }
                this._setupDisabled(s)
            }
        },
        load: function (e, i) {
            e = this._getIndex(e);
            var n = this,
                a = this.tabs.eq(e),
                o = a.find(".ui-tabs-anchor"),
                r = this._getPanelForTab(a),
                h = {
                    tab: a,
                    panel: r
                };
            s(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, h)), this.xhr && "canceled" !== this.xhr.statusText && (a.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function (t) {
                setTimeout(function () {
                    r.html(t), n._trigger("load", i, h)
                }, 1)
            }).complete(function (t, e) {
                setTimeout(function () {
                    "abort" === e && n.panels.stop(!1, !0), a.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function (e, i, s) {
            var n = this;
            return {
                url: e.attr("href"),
                beforeSend: function (e, a) {
                    return n._trigger("beforeLoad", i, t.extend({
                        jqXHR: e,
                        ajaxSettings: a
                    }, s))
                }
            }
        },
        _getPanelForTab: function (e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    })
})(jQuery);
(function (t) {
    function e(e, i) {
        var s = (e.attr("aria-describedby") || "").split(/\s+/);
        s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
    }

    function i(e) {
        var i = e.data("ui-tooltip-id"),
            s = (e.attr("aria-describedby") || "").split(/\s+/),
            n = t.inArray(i, s); - 1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
    }
    var s = 0;
    t.widget("ui.tooltip", {
        version: "1.10.3",
        options: {
            content: function () {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _create: function () {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
        },
        _setOption: function (e, i) {
            var s = this;
            return "disabled" === e ? (this[i ? "_disable" : "_enable"](), this.options[e] = i, void 0) : (this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
                s._updateContent(e)
            }), void 0)
        },
        _disable: function () {
            var e = this;
            t.each(this.tooltips, function (i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s[0], e.close(n, !0)
            }), this.element.find(this.options.items).addBack().each(function () {
                var e = t(this);
                e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
            })
        },
        _enable: function () {
            this.element.find(this.options.items).addBack().each(function () {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            })
        },
        open: function (e) {
            var i = this,
                s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function () {
                var e, s = t(this);
                s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: s.attr("title")
                }, s.attr("title", ""))
            }), this._updateContent(s, e))
        },
        _updateContent: function (t, e) {
            var i, s = this.options.content,
                n = this,
                o = e ? e.type : null;
            return "string" == typeof s ? this._open(e, t, s) : (i = s.call(t[0], function (i) {
                t.data("ui-tooltip-open") && n._delay(function () {
                    e && (e.type = o), this._open(e, t, i)
                })
            }), i && this._open(e, t, i), void 0)
        },
        _open: function (i, s, n) {
            function o(t) {
                l.of = t, a.is(":hidden") || a.position(l)
            }
            var a, r, h, l = t.extend({}, this.options.position);
            if (n) {
                if (a = this._find(s), a.length) return a.find(".ui-tooltip-content").html(n), void 0;
                s.is("[title]") && (i && "mouseover" === i.type ? s.attr("title", "") : s.removeAttr("title")), a = this._tooltip(s), e(s, a.attr("id")), a.find(".ui-tooltip-content").html(n), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
                    mousemove: o
                }), o(i)) : a.position(t.extend({
                    of: s
                }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function () {
                    a.is(":visible") && (o(l.of), clearInterval(h))
                }, t.fx.interval)), this._trigger("open", i, {
                    tooltip: a
                }), r = {
                    keyup: function (e) {
                        if (e.keyCode === t.ui.keyCode.ESCAPE) {
                            var i = t.Event(e);
                            i.currentTarget = s[0], this.close(i, !0)
                        }
                    },
                    remove: function () {
                        this._removeTooltip(a)
                    }
                }, i && "mouseover" !== i.type || (r.mouseleave = "close"), i && "focusin" !== i.type || (r.focusout = "close"), this._on(!0, s, r)
            }
        },
        close: function (e) {
            var s = this,
                n = t(e ? e.currentTarget : this.element),
                o = this._find(n);
            this.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && n.attr("title", n.data("ui-tooltip-title")), i(n), o.stop(!0), this._hide(o, this.options.hide, function () {
                s._removeTooltip(t(this))
            }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
                t(i.element).attr("title", i.title), delete s.parents[e]
            }), this.closing = !0, this._trigger("close", e, {
                tooltip: o
            }), this.closing = !1)
        },
        _tooltip: function (e) {
            var i = "ui-tooltip-" + s++,
                n = t("<div>").attr({
                    id: i,
                    role: "tooltip"
                }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return t("<div>").addClass("ui-tooltip-content").appendTo(n), n.appendTo(this.document[0].body), this.tooltips[i] = e, n
        },
        _find: function (e) {
            var i = e.data("ui-tooltip-id");
            return i ? t("#" + i) : t()
        },
        _removeTooltip: function (t) {
            t.remove(), delete this.tooltips[t.attr("id")]
        },
        _destroy: function () {
            var e = this;
            t.each(this.tooltips, function (i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s[0], e.close(n, !0), t("#" + i).remove(), s.data("ui-tooltip-title") && (s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
            })
        }
    })
})(jQuery);
(function (t, e) {
    var i = "ui-effects-";
    t.effects = {
            effect: {}
        },
        function (t, e) {
            function i(t, e, i) {
                var s = u[e.type] || {};
                return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
            }

            function s(i) {
                var s = h(),
                    n = s._rgba = [];
                return i = i.toLowerCase(), f(l, function (t, a) {
                    var o, r = a.re.exec(i),
                        l = r && a.parse(r),
                        h = a.space || "rgba";
                    return l ? (o = s[h](l), s[c[h].cache] = o[c[h].cache], n = s._rgba = o._rgba, !1) : e
                }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, a.transparent), s) : a[i]
            }

            function n(t, e, i) {
                return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
            }
            var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                r = /^([\-+])=\s*(\d+\.?\d*)/,
                l = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (t) {
                        return [t[1], t[2], t[3], t[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (t) {
                        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function (t) {
                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function (t) {
                        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function (t) {
                        return [t[1], t[2] / 100, t[3] / 100, t[4]]
                    }
                }],
                h = t.Color = function (e, i, s, n) {
                    return new t.Color.fn.parse(e, i, s, n)
                },
                c = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                u = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                d = h.support = {},
                p = t("<p>")[0],
                f = t.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function (t, e) {
                e.cache = "_" + t, e.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), h.fn = t.extend(h.prototype, {
                parse: function (n, o, r, l) {
                    if (n === e) return this._rgba = [null, null, null, null], this;
                    (n.jquery || n.nodeType) && (n = t(n).css(o), o = e);
                    var u = this,
                        d = t.type(n),
                        p = this._rgba = [];
                    return o !== e && (n = [n, o, r, l], d = "array"), "string" === d ? this.parse(s(n) || a._default) : "array" === d ? (f(c.rgba.props, function (t, e) {
                        p[e.idx] = i(n[e.idx], e)
                    }), this) : "object" === d ? (n instanceof h ? f(c, function (t, e) {
                        n[e.cache] && (u[e.cache] = n[e.cache].slice())
                    }) : f(c, function (e, s) {
                        var a = s.cache;
                        f(s.props, function (t, e) {
                            if (!u[a] && s.to) {
                                if ("alpha" === t || null == n[t]) return;
                                u[a] = s.to(u._rgba)
                            }
                            u[a][e.idx] = i(n[t], e, !0)
                        }), u[a] && 0 > t.inArray(null, u[a].slice(0, 3)) && (u[a][3] = 1, s.from && (u._rgba = s.from(u[a])))
                    }), this) : e
                },
                is: function (t) {
                    var i = h(t),
                        s = !0,
                        n = this;
                    return f(c, function (t, a) {
                        var o, r = i[a.cache];
                        return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function (t, i) {
                            return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : e
                        })), s
                    }), s
                },
                _space: function () {
                    var t = [],
                        e = this;
                    return f(c, function (i, s) {
                        e[s.cache] && t.push(i)
                    }), t.pop()
                },
                transition: function (t, e) {
                    var s = h(t),
                        n = s._space(),
                        a = c[n],
                        o = 0 === this.alpha() ? h("transparent") : this,
                        r = o[a.cache] || a.to(o._rgba),
                        l = r.slice();
                    return s = s[a.cache], f(a.props, function (t, n) {
                        var a = n.idx,
                            o = r[a],
                            h = s[a],
                            c = u[n.type] || {};
                        null !== h && (null === o ? l[a] = h : (c.mod && (h - o > c.mod / 2 ? o += c.mod : o - h > c.mod / 2 && (o -= c.mod)), l[a] = i((h - o) * e + o, n)))
                    }), this[n](l)
                },
                blend: function (e) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        s = i.pop(),
                        n = h(e)._rgba;
                    return h(t.map(i, function (t, e) {
                        return (1 - s) * n[e] + s * t
                    }))
                },
                toRgbaString: function () {
                    var e = "rgba(",
                        i = t.map(this._rgba, function (t, e) {
                            return null == t ? e > 2 ? 1 : 0 : t
                        });
                    return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                },
                toHslaString: function () {
                    var e = "hsla(",
                        i = t.map(this.hsla(), function (t, e) {
                            return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                        });
                    return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                },
                toHexString: function (e) {
                    var i = this._rgba.slice(),
                        s = i.pop();
                    return e && i.push(~~(255 * s)), "#" + t.map(i, function (t) {
                        return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                    }).join("")
                },
                toString: function () {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), h.fn.parse.prototype = h.fn, c.hsla.to = function (t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e, i, s = t[0] / 255,
                    n = t[1] / 255,
                    a = t[2] / 255,
                    o = t[3],
                    r = Math.max(s, n, a),
                    l = Math.min(s, n, a),
                    h = r - l,
                    c = r + l,
                    u = .5 * c;
                return e = l === r ? 0 : s === r ? 60 * (n - a) / h + 360 : n === r ? 60 * (a - s) / h + 120 : 60 * (s - n) / h + 240, i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == o ? 1 : o]
            }, c.hsla.from = function (t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 360,
                    i = t[1],
                    s = t[2],
                    a = t[3],
                    o = .5 >= s ? s * (1 + i) : s + i - s * i,
                    r = 2 * s - o;
                return [Math.round(255 * n(r, o, e + 1 / 3)), Math.round(255 * n(r, o, e)), Math.round(255 * n(r, o, e - 1 / 3)), a]
            }, f(c, function (s, n) {
                var a = n.props,
                    o = n.cache,
                    l = n.to,
                    c = n.from;
                h.fn[s] = function (s) {
                    if (l && !this[o] && (this[o] = l(this._rgba)), s === e) return this[o].slice();
                    var n, r = t.type(s),
                        u = "array" === r || "object" === r ? s : arguments,
                        d = this[o].slice();
                    return f(a, function (t, e) {
                        var s = u["object" === r ? t : e.idx];
                        null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
                    }), c ? (n = h(c(d)), n[o] = d, n) : h(d)
                }, f(a, function (e, i) {
                    h.fn[e] || (h.fn[e] = function (n) {
                        var a, o = t.type(n),
                            l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
                            h = this[l](),
                            c = h[i.idx];
                        return "undefined" === o ? c : ("function" === o && (n = n.call(this, c), o = t.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), h[i.idx] = n, this[l](h)))
                    })
                })
            }), h.hook = function (e) {
                var i = e.split(" ");
                f(i, function (e, i) {
                    t.cssHooks[i] = {
                        set: function (e, n) {
                            var a, o, r = "";
                            if ("transparent" !== n && ("string" !== t.type(n) || (a = s(n)))) {
                                if (n = h(a || n), !d.rgba && 1 !== n._rgba[3]) {
                                    for (o = "backgroundColor" === i ? e.parentNode : e;
                                        ("" === r || "transparent" === r) && o && o.style;) try {
                                        r = t.css(o, "backgroundColor"), o = o.parentNode
                                    } catch (l) {}
                                    n = n.blend(r && "transparent" !== r ? r : "_default")
                                }
                                n = n.toRgbaString()
                            }
                            try {
                                e.style[i] = n
                            } catch (l) {}
                        }
                    }, t.fx.step[i] = function (e) {
                        e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                    }
                })
            }, h.hook(o), t.cssHooks.borderColor = {
                expand: function (t) {
                    var e = {};
                    return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
                        e["border" + s + "Color"] = t
                    }), e
                }
            }, a = t.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(jQuery),
        function () {
            function i(e) {
                var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                    a = {};
                if (n && n.length && n[0] && n[n[0]])
                    for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (a[t.camelCase(i)] = n[i]);
                else
                    for (i in n) "string" == typeof n[i] && (a[i] = n[i]);
                return a
            }

            function s(e, i) {
                var s, n, o = {};
                for (s in i) n = i[s], e[s] !== n && (a[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n));
                return o
            }
            var n = ["add", "remove", "toggle"],
                a = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
                t.fx.step[i] = function (t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
                }
            }), t.fn.addBack || (t.fn.addBack = function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }), t.effects.animateClass = function (e, a, o, r) {
                var l = t.speed(a, o, r);
                return this.queue(function () {
                    var a, o = t(this),
                        r = o.attr("class") || "",
                        h = l.children ? o.find("*").addBack() : o;
                    h = h.map(function () {
                        var e = t(this);
                        return {
                            el: e,
                            start: i(this)
                        }
                    }), a = function () {
                        t.each(n, function (t, i) {
                            e[i] && o[i + "Class"](e[i])
                        })
                    }, a(), h = h.map(function () {
                        return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this
                    }), o.attr("class", r), h = h.map(function () {
                        var e = this,
                            i = t.Deferred(),
                            s = t.extend({}, l, {
                                queue: !1,
                                complete: function () {
                                    i.resolve(e)
                                }
                            });
                        return this.el.animate(this.diff, s), i.promise()
                    }), t.when.apply(t, h.get()).done(function () {
                        a(), t.each(arguments, function () {
                            var e = this.el;
                            t.each(this.diff, function (t) {
                                e.css(t, "")
                            })
                        }), l.complete.call(o[0])
                    })
                })
            }, t.fn.extend({
                addClass: function (e) {
                    return function (i, s, n, a) {
                        return s ? t.effects.animateClass.call(this, {
                            add: i
                        }, s, n, a) : e.apply(this, arguments)
                    }
                }(t.fn.addClass),
                removeClass: function (e) {
                    return function (i, s, n, a) {
                        return arguments.length > 1 ? t.effects.animateClass.call(this, {
                            remove: i
                        }, s, n, a) : e.apply(this, arguments)
                    }
                }(t.fn.removeClass),
                toggleClass: function (i) {
                    return function (s, n, a, o, r) {
                        return "boolean" == typeof n || n === e ? a ? t.effects.animateClass.call(this, n ? {
                            add: s
                        } : {
                            remove: s
                        }, a, o, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, {
                            toggle: s
                        }, n, a, o)
                    }
                }(t.fn.toggleClass),
                switchClass: function (e, i, s, n, a) {
                    return t.effects.animateClass.call(this, {
                        add: i,
                        remove: e
                    }, s, n, a)
                }
            })
        }(),
        function () {
            function s(e, i, s, n) {
                return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                    effect: e
                }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
            }

            function n(e) {
                return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
            }
            t.extend(t.effects, {
                version: "1.10.3",
                save: function (t, e) {
                    for (var s = 0; e.length > s; s++) null !== e[s] && t.data(i + e[s], t[0].style[e[s]])
                },
                restore: function (t, s) {
                    var n, a;
                    for (a = 0; s.length > a; a++) null !== s[a] && (n = t.data(i + s[a]), n === e && (n = ""), t.css(s[a], n))
                },
                setMode: function (t, e) {
                    return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                },
                getBaseline: function (t, e) {
                    var i, s;
                    switch (t[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = t[0] / e.height
                    }
                    switch (t[1]) {
                        case "left":
                            s = 0;
                            break;
                        case "center":
                            s = .5;
                            break;
                        case "right":
                            s = 1;
                            break;
                        default:
                            s = t[1] / e.width
                    }
                    return {
                        x: s,
                        y: i
                    }
                },
                createWrapper: function (e) {
                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                    var i = {
                            width: e.outerWidth(!0),
                            height: e.outerHeight(!0),
                            "float": e.css("float")
                        },
                        s = t("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        n = {
                            width: e.width(),
                            height: e.height()
                        },
                        a = document.activeElement;
                    try {
                        a.id
                    } catch (o) {
                        a = document.body
                    }
                    return e.wrap(s), (e[0] === a || t.contains(e[0], a)) && t(a).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({
                        position: "relative"
                    }), e.css({
                        position: "relative"
                    })) : (t.extend(i, {
                        position: e.css("position"),
                        zIndex: e.css("z-index")
                    }), t.each(["top", "left", "bottom", "right"], function (t, s) {
                        i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                    }), e.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), e.css(n), s.css(i).show()
                },
                removeWrapper: function (e) {
                    var i = document.activeElement;
                    return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
                },
                setTransition: function (e, i, s, n) {
                    return n = n || {}, t.each(i, function (t, i) {
                        var a = e.cssUnit(i);
                        a[0] > 0 && (n[i] = a[0] * s + a[1])
                    }), n
                }
            }), t.fn.extend({
                effect: function () {
                    function e(e) {
                        function s() {
                            t.isFunction(a) && a.call(n[0]), t.isFunction(e) && e()
                        }
                        var n = t(this),
                            a = i.complete,
                            r = i.mode;
                        (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), s()) : o.call(n[0], i, s)
                    }
                    var i = s.apply(this, arguments),
                        n = i.mode,
                        a = i.queue,
                        o = t.effects.effect[i.effect];
                    return t.fx.off || !o ? n ? this[n](i.duration, i.complete) : this.each(function () {
                        i.complete && i.complete.call(this)
                    }) : a === !1 ? this.each(e) : this.queue(a || "fx", e)
                },
                show: function (t) {
                    return function (e) {
                        if (n(e)) return t.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "show", this.effect.call(this, i)
                    }
                }(t.fn.show),
                hide: function (t) {
                    return function (e) {
                        if (n(e)) return t.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "hide", this.effect.call(this, i)
                    }
                }(t.fn.hide),
                toggle: function (t) {
                    return function (e) {
                        if (n(e) || "boolean" == typeof e) return t.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "toggle", this.effect.call(this, i)
                    }
                }(t.fn.toggle),
                cssUnit: function (e) {
                    var i = this.css(e),
                        s = [];
                    return t.each(["em", "px", "%", "pt"], function (t, e) {
                        i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                    }), s
                }
            })
        }(),
        function () {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
                e[i] = function (e) {
                    return Math.pow(e, t + 2)
                }
            }), t.extend(e, {
                Sine: function (t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Circ: function (t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Elastic: function (t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                },
                Back: function (t) {
                    return t * t * (3 * t - 2)
                },
                Bounce: function (t) {
                    for (var e, i = 4;
                        ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), t.each(e, function (e, i) {
                t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
                    return 1 - i(1 - t)
                }, t.easing["easeInOut" + e] = function (t) {
                    return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                }
            })
        }()
})(jQuery);
(function (t) {
    var e = /up|down|vertical/,
        i = /up|left|vertical|horizontal/;
    t.effects.effect.blind = function (s, n) {
        var a, o, r, l = t(this),
            h = ["position", "top", "bottom", "left", "right", "height", "width"],
            c = t.effects.setMode(l, s.mode || "hide"),
            u = s.direction || "up",
            d = e.test(u),
            p = d ? "height" : "width",
            f = d ? "top" : "left",
            g = i.test(u),
            m = {},
            v = "show" === c;
        l.parent().is(".ui-effects-wrapper") ? t.effects.save(l.parent(), h) : t.effects.save(l, h), l.show(), a = t.effects.createWrapper(l).css({
            overflow: "hidden"
        }), o = a[p](), r = parseFloat(a.css(f)) || 0, m[p] = v ? o : 0, g || (l.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
            position: "absolute"
        }), m[f] = v ? r : o + r), v && (a.css(p, 0), g || a.css(f, r + o)), a.animate(m, {
            duration: s.duration,
            easing: s.easing,
            queue: !1,
            complete: function () {
                "hide" === c && l.hide(), t.effects.restore(l, h), t.effects.removeWrapper(l), n()
            }
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.bounce = function (e, i) {
        var s, n, a, o = t(this),
            r = ["position", "top", "bottom", "left", "right", "height", "width"],
            l = t.effects.setMode(o, e.mode || "effect"),
            h = "hide" === l,
            c = "show" === l,
            u = e.direction || "up",
            d = e.distance,
            p = e.times || 5,
            f = 2 * p + (c || h ? 1 : 0),
            g = e.duration / f,
            m = e.easing,
            v = "up" === u || "down" === u ? "top" : "left",
            _ = "up" === u || "left" === u,
            b = o.queue(),
            y = b.length;
        for ((c || h) && r.push("opacity"), t.effects.save(o, r), o.show(), t.effects.createWrapper(o), d || (d = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (a = {
                opacity: 1
            }, a[v] = 0, o.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(a, g, m)), h && (d /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++) n = {}, n[v] = (_ ? "-=" : "+=") + d, o.animate(n, g, m).animate(a, g, m), d = h ? 2 * d : d / 2;
        h && (n = {
            opacity: 0
        }, n[v] = (_ ? "-=" : "+=") + d, o.animate(n, g, m)), o.queue(function () {
            h && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
        }), y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))), o.dequeue()
    }
})(jQuery);
(function (t) {
    t.effects.effect.clip = function (e, i) {
        var s, n, a, o = t(this),
            r = ["position", "top", "bottom", "left", "right", "height", "width"],
            l = t.effects.setMode(o, e.mode || "hide"),
            h = "show" === l,
            c = e.direction || "vertical",
            u = "vertical" === c,
            d = u ? "height" : "width",
            p = u ? "top" : "left",
            f = {};
        t.effects.save(o, r), o.show(), s = t.effects.createWrapper(o).css({
            overflow: "hidden"
        }), n = "IMG" === o[0].tagName ? s : o, a = n[d](), h && (n.css(d, 0), n.css(p, a / 2)), f[d] = h ? a : 0, f[p] = h ? 0 : a / 2, n.animate(f, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
                h || o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
            }
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.drop = function (e, i) {
        var s, n = t(this),
            a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            o = t.effects.setMode(n, e.mode || "hide"),
            r = "show" === o,
            l = e.direction || "left",
            h = "up" === l || "down" === l ? "top" : "left",
            c = "up" === l || "left" === l ? "pos" : "neg",
            u = {
                opacity: r ? 1 : 0
            };
        t.effects.save(n, a), n.show(), t.effects.createWrapper(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(h, "pos" === c ? -s : s), u[h] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s, n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
                "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
            }
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.explode = function (e, i) {
        function s() {
            b.push(this), b.length === u * d && n()
        }

        function n() {
            p.css({
                visibility: "visible"
            }), t(b).remove(), g || p.hide(), i()
        }
        var a, o, r, l, h, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
            d = u,
            p = t(this),
            f = t.effects.setMode(p, e.mode || "hide"),
            g = "show" === f,
            m = p.show().css("visibility", "hidden").offset(),
            v = Math.ceil(p.outerWidth() / d),
            _ = Math.ceil(p.outerHeight() / u),
            b = [];
        for (a = 0; u > a; a++)
            for (l = m.top + a * _, c = a - (u - 1) / 2, o = 0; d > o; o++) r = m.left + o * v, h = o - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -o * v,
                top: -a * _
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: v,
                height: _,
                left: r + (g ? h * v : 0),
                top: l + (g ? c * _ : 0),
                opacity: g ? 0 : 1
            }).animate({
                left: r + (g ? 0 : h * v),
                top: l + (g ? 0 : c * _),
                opacity: g ? 1 : 0
            }, e.duration || 500, e.easing, s)
    }
})(jQuery);
(function (t) {
    t.effects.effect.fade = function (e, i) {
        var s = t(this),
            n = t.effects.setMode(s, e.mode || "toggle");
        s.animate({
            opacity: n
        }, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.fold = function (e, i) {
        var s, n, a = t(this),
            o = ["position", "top", "bottom", "left", "right", "height", "width"],
            r = t.effects.setMode(a, e.mode || "hide"),
            l = "show" === r,
            h = "hide" === r,
            c = e.size || 15,
            u = /([0-9]+)%/.exec(c),
            d = !!e.horizFirst,
            p = l !== d,
            f = p ? ["width", "height"] : ["height", "width"],
            g = e.duration / 2,
            m = {},
            v = {};
        t.effects.save(a, o), a.show(), s = t.effects.createWrapper(a).css({
            overflow: "hidden"
        }), n = p ? [s.width(), s.height()] : [s.height(), s.width()], u && (c = parseInt(u[1], 10) / 100 * n[h ? 0 : 1]), l && s.css(d ? {
            height: 0,
            width: c
        } : {
            height: c,
            width: 0
        }), m[f[0]] = l ? n[0] : c, v[f[1]] = l ? n[1] : 0, s.animate(m, g, e.easing).animate(v, g, e.easing, function () {
            h && a.hide(), t.effects.restore(a, o), t.effects.removeWrapper(a), i()
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.highlight = function (e, i) {
        var s = t(this),
            n = ["backgroundImage", "backgroundColor", "opacity"],
            a = t.effects.setMode(s, e.mode || "show"),
            o = {
                backgroundColor: s.css("backgroundColor")
            };
        "hide" === a && (o.opacity = 0), t.effects.save(s, n), s.show().css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(o, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
                "hide" === a && s.hide(), t.effects.restore(s, n), i()
            }
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.pulsate = function (e, i) {
        var s, n = t(this),
            a = t.effects.setMode(n, e.mode || "show"),
            o = "show" === a,
            r = "hide" === a,
            l = o || "hide" === a,
            h = 2 * (e.times || 5) + (l ? 1 : 0),
            c = e.duration / h,
            u = 0,
            d = n.queue(),
            p = d.length;
        for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1), s = 1; h > s; s++) n.animate({
            opacity: u
        }, c, e.easing), u = 1 - u;
        n.animate({
            opacity: u
        }, c, e.easing), n.queue(function () {
            r && n.hide(), i()
        }), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, h + 1))), n.dequeue()
    }
})(jQuery);
(function (t) {
    t.effects.effect.puff = function (e, i) {
        var s = t(this),
            n = t.effects.setMode(s, e.mode || "hide"),
            a = "hide" === n,
            o = parseInt(e.percent, 10) || 150,
            r = o / 100,
            l = {
                height: s.height(),
                width: s.width(),
                outerHeight: s.outerHeight(),
                outerWidth: s.outerWidth()
            };
        t.extend(e, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: n,
            complete: i,
            percent: a ? o : 100,
            from: a ? l : {
                height: l.height * r,
                width: l.width * r,
                outerHeight: l.outerHeight * r,
                outerWidth: l.outerWidth * r
            }
        }), s.effect(e)
    }, t.effects.effect.scale = function (e, i) {
        var s = t(this),
            n = t.extend(!0, {}, e),
            a = t.effects.setMode(s, e.mode || "effect"),
            o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === a ? 0 : 100),
            r = e.direction || "both",
            l = e.origin,
            h = {
                height: s.height(),
                width: s.width(),
                outerHeight: s.outerHeight(),
                outerWidth: s.outerWidth()
            },
            c = {
                y: "horizontal" !== r ? o / 100 : 1,
                x: "vertical" !== r ? o / 100 : 1
            };
        n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = l || ["middle", "center"], n.restore = !0), n.from = e.from || ("show" === a ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : h), n.to = {
            height: h.height * c.y,
            width: h.width * c.x,
            outerHeight: h.outerHeight * c.y,
            outerWidth: h.outerWidth * c.x
        }, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
    }, t.effects.effect.size = function (e, i) {
        var s, n, a, o = t(this),
            r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            h = ["width", "height", "overflow"],
            c = ["fontSize"],
            u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            p = t.effects.setMode(o, e.mode || "effect"),
            f = e.restore || "effect" !== p,
            g = e.scale || "both",
            m = e.origin || ["middle", "center"],
            v = o.css("position"),
            _ = f ? r : l,
            b = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };
        "show" === p && o.show(), s = {
            height: o.height(),
            width: o.width(),
            outerHeight: o.outerHeight(),
            outerWidth: o.outerWidth()
        }, "toggle" === e.mode && "show" === p ? (o.from = e.to || b, o.to = e.from || s) : (o.from = e.from || ("show" === p ? b : s), o.to = e.to || ("hide" === p ? b : s)), a = {
            from: {
                y: o.from.height / s.height,
                x: o.from.width / s.width
            },
            to: {
                y: o.to.height / s.height,
                x: o.to.width / s.width
            }
        }, ("box" === g || "both" === g) && (a.from.y !== a.to.y && (_ = _.concat(u), o.from = t.effects.setTransition(o, u, a.from.y, o.from), o.to = t.effects.setTransition(o, u, a.to.y, o.to)), a.from.x !== a.to.x && (_ = _.concat(d), o.from = t.effects.setTransition(o, d, a.from.x, o.from), o.to = t.effects.setTransition(o, d, a.to.x, o.to))), ("content" === g || "both" === g) && a.from.y !== a.to.y && (_ = _.concat(c).concat(h), o.from = t.effects.setTransition(o, c, a.from.y, o.from), o.to = t.effects.setTransition(o, c, a.to.y, o.to)), t.effects.save(o, _), o.show(), t.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), m && (n = t.effects.getBaseline(m, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === g || "both" === g) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), h = r.concat(u).concat(d), o.find("*[width]").each(function () {
            var i = t(this),
                s = {
                    height: i.height(),
                    width: i.width(),
                    outerHeight: i.outerHeight(),
                    outerWidth: i.outerWidth()
                };
            f && t.effects.save(i, h), i.from = {
                height: s.height * a.from.y,
                width: s.width * a.from.x,
                outerHeight: s.outerHeight * a.from.y,
                outerWidth: s.outerWidth * a.from.x
            }, i.to = {
                height: s.height * a.to.y,
                width: s.width * a.to.x,
                outerHeight: s.height * a.to.y,
                outerWidth: s.width * a.to.x
            }, a.from.y !== a.to.y && (i.from = t.effects.setTransition(i, u, a.from.y, i.from), i.to = t.effects.setTransition(i, u, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = t.effects.setTransition(i, d, a.from.x, i.from), i.to = t.effects.setTransition(i, d, a.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function () {
                f && t.effects.restore(i, h)
            })
        })), o.animate(o.to, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
                0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), t.effects.restore(o, _), f || ("static" === v ? o.css({
                    position: "relative",
                    top: o.to.top,
                    left: o.to.left
                }) : t.each(["top", "left"], function (t, e) {
                    o.css(e, function (e, i) {
                        var s = parseInt(i, 10),
                            n = t ? o.to.left : o.to.top;
                        return "auto" === i ? n + "px" : s + n + "px"
                    })
                })), t.effects.removeWrapper(o), i()
            }
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.shake = function (e, i) {
        var s, n = t(this),
            a = ["position", "top", "bottom", "left", "right", "height", "width"],
            o = t.effects.setMode(n, e.mode || "effect"),
            r = e.direction || "left",
            l = e.distance || 20,
            h = e.times || 3,
            c = 2 * h + 1,
            u = Math.round(e.duration / c),
            d = "up" === r || "down" === r ? "top" : "left",
            p = "up" === r || "left" === r,
            f = {},
            g = {},
            m = {},
            v = n.queue(),
            _ = v.length;
        for (t.effects.save(n, a), n.show(), t.effects.createWrapper(n), f[d] = (p ? "-=" : "+=") + l, g[d] = (p ? "+=" : "-=") + 2 * l, m[d] = (p ? "-=" : "+=") + 2 * l, n.animate(f, u, e.easing), s = 1; h > s; s++) n.animate(g, u, e.easing).animate(m, u, e.easing);
        n.animate(g, u, e.easing).animate(f, u / 2, e.easing).queue(function () {
            "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
        }), _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))), n.dequeue()
    }
})(jQuery);
(function (t) {
    t.effects.effect.slide = function (e, i) {
        var s, n = t(this),
            a = ["position", "top", "bottom", "left", "right", "width", "height"],
            o = t.effects.setMode(n, e.mode || "show"),
            r = "show" === o,
            l = e.direction || "left",
            h = "up" === l || "down" === l ? "top" : "left",
            c = "up" === l || "left" === l,
            u = {};
        t.effects.save(n, a), n.show(), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(n).css({
            overflow: "hidden"
        }), r && n.css(h, c ? isNaN(s) ? "-" + s : -s : s), u[h] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s, n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
                "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
            }
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.transfer = function (e, i) {
        var s = t(this),
            n = t(e.to),
            a = "fixed" === n.css("position"),
            o = t("body"),
            r = a ? o.scrollTop() : 0,
            l = a ? o.scrollLeft() : 0,
            h = n.offset(),
            c = {
                top: h.top - r,
                left: h.left - l,
                height: n.innerHeight(),
                width: n.innerWidth()
            },
            d = s.offset(),
            u = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
                top: d.top - r,
                left: d.left - l,
                height: s.innerHeight(),
                width: s.innerWidth(),
                position: a ? "fixed" : "absolute"
            }).animate(c, e.duration, e.easing, function () {
                u.remove(), i()
            })
    }
})(jQuery);
! function (t) {
    var e = {},
        s = {
            mode: "horizontal",
            slideSelector: "",
            infiniteLoop: !0,
            hideControlOnEnd: !1,
            speed: 500,
            easing: null,
            slideMargin: 0,
            startSlide: 0,
            randomStart: !1,
            captions: !1,
            ticker: !1,
            tickerHover: !1,
            adaptiveHeight: !1,
            adaptiveHeightSpeed: 500,
            video: !1,
            useCSS: !0,
            preloadImages: "visible",
            responsive: !0,
            slideZIndex: 50,
            touchEnabled: !0,
            swipeThreshold: 50,
            oneToOneTouch: !0,
            preventDefaultSwipeX: !0,
            preventDefaultSwipeY: !1,
            pager: !0,
            pagerType: "full",
            pagerShortSeparator: " / ",
            pagerSelector: null,
            buildPager: null,
            pagerCustom: null,
            controls: !0,
            nextText: "Next",
            prevText: "Prev",
            nextSelector: null,
            prevSelector: null,
            autoControls: !1,
            startText: "Start",
            stopText: "Stop",
            autoControlsCombine: !1,
            autoControlsSelector: null,
            auto: !1,
            pause: 4e3,
            autoStart: !0,
            autoDirection: "next",
            autoHover: !1,
            autoDelay: 0,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 0,
            slideWidth: 0,
            onSliderLoad: function () {},
            onSlideBefore: function () {},
            onSlideAfter: function () {},
            onSlideNext: function () {},
            onSlidePrev: function () {},
            onSliderResize: function () {}
        };
    t.fn.bxSlider = function (n) {
        if (0 == this.length) return this;
        if (this.length > 1) return this.each(function () {
            t(this).bxSlider(n)
        }), this;
        var o = {},
            r = this;
        e.el = this;
        var a = t(window).width(),
            l = t(window).height(),
            d = function () {
                o.settings = t.extend({}, s, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = r.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {
                    index: o.settings.startSlide
                }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function () {
                    var t = document.createElement("div"),
                        e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var i in e)
                        if (void 0 !== t.style[e[i]]) return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
                    return !1
                }(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), r.data("origStyle", r.attr("style")), r.children(o.settings.slideSelector).each(function () {
                    t(this).data("origStyle", t(this).attr("style"))
                }), c()
            },
            c = function () {
                r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), o.viewport = r.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), r.css({
                    width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto",
                    position: "relative"
                }), o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), f(), o.viewport.css({
                    width: "100%",
                    overflow: "hidden",
                    position: "relative"
                }), o.viewport.parent().css({
                    maxWidth: p()
                }), o.settings.pager || o.viewport.parent().css({
                    margin: "0 auto 0px"
                }), o.children.css({
                    "float": "horizontal" == o.settings.mode ? "left" : "none",
                    listStyle: "none",
                    position: "relative"
                }), o.children.css("width", u()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({
                    position: "absolute",
                    zIndex: 0,
                    display: "none"
                }), o.children.eq(o.settings.startSlide).css({
                    zIndex: o.settings.slideZIndex,
                    display: "block"
                })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && P(), o.active.last = o.settings.startSlide == x() - 1, o.settings.video && r.fitVids();
                var e = o.children.eq(o.settings.startSlide);
                "all" == o.settings.preloadImages && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && T(), o.settings.controls && C(), o.settings.auto && o.settings.autoControls && E(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), g(e, h)
            },
            g = function (e, i) {
                var s = e.find("img, iframe").length;
                if (0 == s) return i(), void 0;
                var n = 0;
                e.find("img, iframe").each(function () {
                    t(this).one("load", function () {
                        ++n == s && i()
                    }).each(function () {
                        this.complete && t(this).load()
                    })
                })
            },
            h = function () {
                if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
                    var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
                        i = o.children.slice(0, e).clone().addClass("bx-clone"),
                        s = o.children.slice(-e).clone().addClass("bx-clone");
                    r.append(i).prepend(s)
                }
                o.loader.remove(), S(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(v()), r.redrawSlider(), o.settings.onSliderLoad(o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", Z), o.settings.auto && o.settings.autoStart && H(), o.settings.ticker && L(), o.settings.pager && q(o.settings.startSlide), o.settings.controls && W(), o.settings.touchEnabled && !o.settings.ticker && O()
            },
            v = function () {
                var e = 0,
                    s = t();
                if ("vertical" == o.settings.mode || o.settings.adaptiveHeight)
                    if (o.carousel) {
                        var n = 1 == o.settings.moveSlides ? o.active.index : o.active.index * m();
                        for (s = o.children.eq(n), i = 1; i <= o.settings.maxSlides - 1; i++) s = n + i >= o.children.length ? s.add(o.children.eq(i - 1)) : s.add(o.children.eq(n + i))
                    } else s = o.children.eq(o.active.index);
                else s = o.children;
                return "vertical" == o.settings.mode ? (s.each(function () {
                    e += t(this).outerHeight()
                }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, s.map(function () {
                    return t(this).outerHeight(!1)
                }).get()), e
            },
            p = function () {
                var t = "100%";
                return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t
            },
            u = function () {
                var t = o.settings.slideWidth,
                    e = o.viewport.width();
                return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)), t
            },
            f = function () {
                var t = 1;
                if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0)
                    if (o.viewport.width() < o.minThreshold) t = o.settings.minSlides;
                    else if (o.viewport.width() > o.maxThreshold) t = o.settings.maxSlides;
                else {
                    var e = o.children.first().width();
                    t = Math.floor(o.viewport.width() / e)
                } else "vertical" == o.settings.mode && (t = o.settings.minSlides);
                return t
            },
            x = function () {
                var t = 0;
                if (o.settings.moveSlides > 0)
                    if (o.settings.infiniteLoop) t = o.children.length / m();
                    else
                        for (var e = 0, i = 0; e < o.children.length;) ++t, e = i + f(), i += o.settings.moveSlides <= f() ? o.settings.moveSlides : f();
                else t = Math.ceil(o.children.length / f());
                return t
            },
            m = function () {
                return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides : f()
            },
            S = function () {
                if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) {
                    if ("horizontal" == o.settings.mode) {
                        var t = o.children.last(),
                            e = t.position();
                        b(-(e.left - (o.viewport.width() - t.width())), "reset", 0)
                    } else if ("vertical" == o.settings.mode) {
                        var i = o.children.length - o.settings.minSlides,
                            e = o.children.eq(i).position();
                        b(-e.top, "reset", 0)
                    }
                } else {
                    var e = o.children.eq(o.active.index * m()).position();
                    o.active.index == x() - 1 && (o.active.last = !0), void 0 != e && ("horizontal" == o.settings.mode ? b(-e.left, "reset", 0) : "vertical" == o.settings.mode && b(-e.top, "reset", 0))
                }
            },
            b = function (t, e, i, s) {
                if (o.usingCSS) {
                    var n = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
                    r.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                        r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D()
                    })) : "reset" == e ? r.css(o.animProp, n) : "ticker" == e && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                        r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), N()
                    }))
                } else {
                    var a = {};
                    a[o.animProp] = t, "slide" == e ? r.animate(a, i, o.settings.easing, function () {
                        D()
                    }) : "reset" == e ? r.css(o.animProp, t) : "ticker" == e && r.animate(a, speed, "linear", function () {
                        b(s.resetValue, "reset", 0), N()
                    })
                }
            },
            w = function () {
                for (var e = "", i = x(), s = 0; i > s; s++) {
                    var n = "";
                    o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (n = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (n = s + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>"
                }
                o.pagerEl.html(e)
            },
            T = function () {
                o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), w()), o.pagerEl.on("click", "a", I)
            },
            C = function () {
                o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", y), o.controls.prev.bind("click", z), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
            },
            E = function () {
                o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.on("click", ".bx-start", k), o.controls.autoEl.on("click", ".bx-stop", M), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), A(o.settings.autoStart ? "stop" : "start")
            },
            P = function () {
                o.children.each(function () {
                    var e = t(this).find("img:first").attr("title");
                    void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
                })
            },
            y = function (t) {
                o.settings.auto && r.stopAuto(), r.goToNextSlide(), t.preventDefault()
            },
            z = function (t) {
                o.settings.auto && r.stopAuto(), r.goToPrevSlide(), t.preventDefault()
            },
            k = function (t) {
                r.startAuto(), t.preventDefault()
            },
            M = function (t) {
                r.stopAuto(), t.preventDefault()
            },
            I = function (e) {
                o.settings.auto && r.stopAuto();
                var i = t(e.currentTarget),
                    s = parseInt(i.attr("data-slide-index"));
                s != o.active.index && r.goToSlide(s), e.preventDefault()
            },
            q = function (e) {
                var i = o.children.length;
                return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i), void 0) : (o.pagerEl.find("a").removeClass("active"), o.pagerEl.each(function (i, s) {
                    t(s).find("a").eq(e).addClass("active")
                }), void 0)
            },
            D = function () {
                if (o.settings.infiniteLoop) {
                    var t = "";
                    0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == x() - 1 && o.carousel ? t = o.children.eq((x() - 1) * m()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), t && ("horizontal" == o.settings.mode ? b(-t.left, "reset", 0) : "vertical" == o.settings.mode && b(-t.top, "reset", 0))
                }
                o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
            },
            A = function (t) {
                o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
            },
            W = function () {
                1 == x() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == x() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
            },
            H = function () {
                o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : r.startAuto(), o.settings.autoHover && r.hover(function () {
                    o.interval && (r.stopAuto(!0), o.autoPaused = !0)
                }, function () {
                    o.autoPaused && (r.startAuto(!0), o.autoPaused = null)
                })
            },
            L = function () {
                var e = 0;
                if ("next" == o.settings.autoDirection) r.append(o.children.clone().addClass("bx-clone"));
                else {
                    r.prepend(o.children.clone().addClass("bx-clone"));
                    var i = o.children.first().position();
                    e = "horizontal" == o.settings.mode ? -i.left : -i.top
                }
                b(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function () {
                    r.stop()
                }, function () {
                    var e = 0;
                    o.children.each(function () {
                        e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                    });
                    var i = o.settings.speed / e,
                        s = "horizontal" == o.settings.mode ? "left" : "top",
                        n = i * (e - Math.abs(parseInt(r.css(s))));
                    N(n)
                }), N()
            },
            N = function (t) {
                speed = t ? t : o.settings.speed;
                var e = {
                        left: 0,
                        top: 0
                    },
                    i = {
                        left: 0,
                        top: 0
                    };
                "next" == o.settings.autoDirection ? e = r.find(".bx-clone").first().position() : i = o.children.first().position();
                var s = "horizontal" == o.settings.mode ? -e.left : -e.top,
                    n = "horizontal" == o.settings.mode ? -i.left : -i.top,
                    a = {
                        resetValue: n
                    };
                b(s, "ticker", speed, a)
            },
            O = function () {
                o.touch = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                }, o.viewport.bind("touchstart", X)
            },
            X = function (t) {
                if (o.working) t.preventDefault();
                else {
                    o.touch.originalPos = r.position();
                    var e = t.originalEvent;
                    o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", Y), o.viewport.bind("touchend", V)
                }
            },
            Y = function (t) {
                var e = t.originalEvent,
                    i = Math.abs(e.changedTouches[0].pageX - o.touch.start.x),
                    s = Math.abs(e.changedTouches[0].pageY - o.touch.start.y);
                if (3 * i > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > i && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) {
                    var n = 0;
                    if ("horizontal" == o.settings.mode) {
                        var r = e.changedTouches[0].pageX - o.touch.start.x;
                        n = o.touch.originalPos.left + r
                    } else {
                        var r = e.changedTouches[0].pageY - o.touch.start.y;
                        n = o.touch.originalPos.top + r
                    }
                    b(n, "reset", 0)
                }
            },
            V = function (t) {
                o.viewport.unbind("touchmove", Y);
                var e = t.originalEvent,
                    i = 0;
                if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, "fade" == o.settings.mode) {
                    var s = Math.abs(o.touch.start.x - o.touch.end.x);
                    s >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto())
                } else {
                    var s = 0;
                    "horizontal" == o.settings.mode ? (s = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && s > 0 || o.active.last && 0 > s) ? b(i, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (0 > s ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : b(i, "reset", 200)
                }
                o.viewport.unbind("touchend", V)
            },
            Z = function () {
                var e = t(window).width(),
                    i = t(window).height();
                (a != e || l != i) && (a = e, l = i, r.redrawSlider(), o.settings.onSliderResize.call(r, o.active.index))
            };
        return r.goToSlide = function (e, i) {
            if (!o.working && o.active.index != e)
                if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > e ? x() - 1 : e >= x() ? 0 : e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == i ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == i && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= x() - 1, o.settings.pager && q(o.active.index), o.settings.controls && W(), "fade" == o.settings.mode) o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
                    height: v()
                }, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({
                    zIndex: 0
                }), o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed, function () {
                    t(this).css("zIndex", o.settings.slideZIndex), D()
                });
                else {
                    o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
                        height: v()
                    }, o.settings.adaptiveHeightSpeed);
                    var s = 0,
                        n = {
                            left: 0,
                            top: 0
                        };
                    if (!o.settings.infiniteLoop && o.carousel && o.active.last)
                        if ("horizontal" == o.settings.mode) {
                            var a = o.children.eq(o.children.length - 1);
                            n = a.position(), s = o.viewport.width() - a.outerWidth()
                        } else {
                            var l = o.children.length - o.settings.minSlides;
                            n = o.children.eq(l).position()
                        }
                    else if (o.carousel && o.active.last && "prev" == i) {
                        var d = 1 == o.settings.moveSlides ? o.settings.maxSlides - m() : (x() - 1) * m() - (o.children.length - o.settings.maxSlides),
                            a = r.children(".bx-clone").eq(d);
                        n = a.position()
                    } else if ("next" == i && 0 == o.active.index) n = r.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1;
                    else if (e >= 0) {
                        var c = e * m();
                        n = o.children.eq(c).position()
                    }
                    if ("undefined" != typeof n) {
                        var g = "horizontal" == o.settings.mode ? -(n.left - s) : -n.top;
                        b(g, "slide", o.settings.speed)
                    }
                }
        }, r.goToNextSlide = function () {
            if (o.settings.infiniteLoop || !o.active.last) {
                var t = parseInt(o.active.index) + 1;
                r.goToSlide(t, "next")
            }
        }, r.goToPrevSlide = function () {
            if (o.settings.infiniteLoop || 0 != o.active.index) {
                var t = parseInt(o.active.index) - 1;
                r.goToSlide(t, "prev")
            }
        }, r.startAuto = function (t) {
            o.interval || (o.interval = setInterval(function () {
                "next" == o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()
            }, o.settings.pause), o.settings.autoControls && 1 != t && A("stop"))
        }, r.stopAuto = function (t) {
            o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != t && A("start"))
        }, r.getCurrentSlide = function () {
            return o.active.index
        }, r.getCurrentSlideElement = function () {
            return o.children.eq(o.active.index)
        }, r.getSlideCount = function () {
            return o.children.length
        }, r.redrawSlider = function () {
            o.children.add(r.find(".bx-clone")).outerWidth(u()), o.viewport.css("height", v()), o.settings.ticker || S(), o.active.last && (o.active.index = x() - 1), o.active.index >= x() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (w(), q(o.active.index))
        }, r.destroySlider = function () {
            o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function () {
                void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
            }), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", Z))
        }, r.reloadSlider = function (t) {
            void 0 != t && (n = t), r.destroySlider(), d()
        }, d(), this
    }
}(jQuery);
(function ($) {
    var h = $.scrollTo = function (a, b, c) {
        $(window).scrollTo(a, b, c)
    };
    h.defaults = {
        axis: 'xy',
        duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
        limit: !0
    };
    h.window = function (a) {
        return $(window)._scrollable()
    };
    $.fn._scrollable = function () {
        return this.map(function () {
            var a = this,
                isWin = !a.nodeName || $.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
            if (!isWin) return a;
            var b = (a.contentWindow || a).document || a.ownerDocument || a;
            return /webkit/i.test(navigator.userAgent) || b.compatMode == 'BackCompat' ? b.body : b.documentElement
        })
    };
    $.fn.scrollTo = function (e, f, g) {
        if (typeof f == 'object') {
            g = f;
            f = 0
        }
        if (typeof g == 'function') g = {
            onAfter: g
        };
        if (e == 'max') e = 9e9;
        g = $.extend({}, h.defaults, g);
        f = f || g.duration;
        g.queue = g.queue && g.axis.length > 1;
        if (g.queue) f /= 2;
        g.offset = both(g.offset);
        g.over = both(g.over);
        return this._scrollable().each(function () {
            if (e == null) return;
            var d = this,
                $elem = $(d),
                targ = e,
                toff, attr = {},
                win = $elem.is('html,body');
            switch (typeof targ) {
                case 'number':
                case 'string':
                    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
                        targ = both(targ);
                        break
                    }
                    targ = $(targ, this);
                    if (!targ.length) return;
                case 'object':
                    if (targ.is || targ.style) toff = (targ = $(targ)).offset()
            }
            $.each(g.axis.split(''), function (i, a) {
                var b = a == 'x' ? 'Left' : 'Top',
                    pos = b.toLowerCase(),
                    key = 'scroll' + b,
                    old = d[key],
                    max = h.max(d, a);
                if (toff) {
                    attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);
                    if (g.margin) {
                        attr[key] -= parseInt(targ.css('margin' + b)) || 0;
                        attr[key] -= parseInt(targ.css('border' + b + 'Width')) || 0
                    }
                    attr[key] += g.offset[pos] || 0;
                    if (g.over[pos]) attr[key] += targ[a == 'x' ? 'width' : 'height']() * g.over[pos]
                } else {
                    var c = targ[pos];
                    attr[key] = c.slice && c.slice(-1) == '%' ? parseFloat(c) / 100 * max : c
                }
                if (g.limit && /^\d+$/.test(attr[key])) attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
                if (!i && g.queue) {
                    if (old != attr[key]) animate(g.onAfterFirst);
                    delete attr[key]
                }
            });
            animate(g.onAfter);

            function animate(a) {
                $elem.animate(attr, f, g.easing, a && function () {
                    a.call(this, targ, g)
                })
            }
        }).end()
    };
    h.max = function (a, b) {
        var c = b == 'x' ? 'Width' : 'Height',
            scroll = 'scroll' + c;
        if (!$(a).is('html,body')) return a[scroll] - $(a)[c.toLowerCase()]();
        var d = 'client' + c,
            html = a.ownerDocument.documentElement,
            body = a.ownerDocument.body;
        return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d])
    };

    function both(a) {
        return typeof a == 'object' ? a : {
            top: a,
            left: a
        }
    }
})(jQuery);
(function ($) {
    var h = location.href.replace(/#.*/, '');
    var i = $.localScroll = function (a) {
        $('body').localScroll(a)
    };
    i.defaults = {
        duration: 1000,
        axis: 'y',
        event: 'click',
        stop: !0,
        target: window,
        reset: !0
    };
    i.hash = function (a) {
        if (location.hash) {
            a = $.extend({}, i.defaults, a);
            a.hash = !1;
            if (a.reset) {
                var d = a.duration;
                delete a.duration;
                $(a.target).scrollTo(0, a);
                a.duration = d
            }
            scroll(0, location, a)
        }
    };
    $.fn.localScroll = function (b) {
        b = $.extend({}, i.defaults, b);
        return b.lazy ? this.bind(b.event, function (e) {
            var a = $([e.target, e.target.parentNode]).filter(filter)[0];
            if (a) scroll(e, a, b)
        }) : this.find('a,area').filter(filter).bind(b.event, function (e) {
            scroll(e, this, b)
        }).end().end();

        function filter() {
            return !!this.href && !!this.hash && this.href.replace(this.hash, '') == h && (!b.filter || $(this).is(b.filter))
        }
    };

    function scroll(e, a, b) {
        var c = a.hash.slice(1),
            elem = document.getElementById(c) || document.getElementsByName(c)[0];
        if (!elem) return;
        if (e) e.preventDefault();
        var d = $(b.target);
        if (b.lock && d.is(':animated') || b.onBefore && b.onBefore(e, elem, d) === !1) return;
        if (b.stop) d._scrollable().stop(!0);
        if (b.hash) {
            var f = b.offset;
            f = f && f.top || f || 0;
            var g = elem.id == c ? 'id' : 'name',
                $a = $('<a> </a>').attr(g, c).css({
                    position: 'absolute',
                    top: $(window).scrollTop() + f,
                    left: $(window).scrollLeft()
                });
            elem[g] = '';
            $('body').prepend($a);
            location = a.hash;
            $a.remove();
            elem[g] = c
        }
        d.scrollTo(elem, b).trigger('notify.serialScroll', [elem])
    }
})(jQuery);
(function ($) {
    var h;

    function apply(a) {
        $('link[rel$=icon]').replaceWith('');
        $('<link rel="shortcut icon" type="image/x-icon"/>').appendTo('head').attr('href', a)
    }
    $.favicon = function (b, c, d) {
        if (arguments.length == 2) {
            d = c
        }
        if (d) {
            h = h || $('<canvas />')[0];
            if (h.getContext) {
                var e = $('<img />')[0];
                e.onload = function () {
                    $.favicon.unanimate();
                    h.height = h.width = this.width;
                    var a = h.getContext('2d');
                    a.drawImage(this, 0, 0);
                    d(a);
                    apply(h.toDataURL('image/png'))
                };
                e.src = b
            } else {
                apply(c || b)
            }
        } else {
            $.favicon.unanimate();
            apply(b)
        }
        return this
    };
    var j = {
        timer: null,
        frames: [],
        size: 16,
        count: 1
    };
    $.extend($.favicon, {
        animate: function (d, e, f) {
            f = f || {};
            h = h || $('<canvas />')[0];
            if (h.getContext) {
                var g = $('<img />')[0];
                g.onload = function () {
                    $.favicon.unanimate();
                    j.onStop = f.onStop;
                    j.image = this;
                    h.height = h.width = j.size = this.height;
                    j.count = this.width / this.height;
                    var b = [];
                    for (var i = 0; i < j.count; ++i) b.push(i);
                    j.frames = f.frames || b;
                    var c = h.getContext('2d');
                    f.onStart && f.onStart();
                    j.timer = setInterval(function () {
                        var a = j.frames.shift();
                        j.frames.push(a);
                        if (a >= j.count) {
                            clearInterval(j.timer);
                            j.timer = null;
                            throw new Error('jQuery.favicon.animate: frame #' + a + ' do not exists in "' + d + '"')
                        }
                        var s = j.size;
                        c.clearRect(0, 0, s, s);
                        c.drawImage(j.image, s * a, 0, s, s, 0, 0, s, s);
                        f.onDraw && f.onDraw(c, a);
                        apply(h.toDataURL('image/png'))
                    }, f.interval || 1000)
                };
                g.src = d
            } else {
                apply(e || d)
            }
        },
        unanimate: function () {
            if (j.timer) {
                clearInterval(j.timer);
                j.timer = null;
                j.onStop && j.onStop()
            }
        }
    })
})(jQuery);
(function (t) {
    t.extend(t.fn, {
        validate: function (e) {
            if (!this.length) return e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."), void 0;
            var i = t.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function (e) {
                i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0)
            }), this.submit(function (e) {
                function s() {
                    var s;
                    return i.settings.submitHandler ? (i.submitButton && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && s.remove(), !1) : !0
                }
                return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1)
            })), i)
        },
        valid: function () {
            if (t(this[0]).is("form")) return this.validate().form();
            var e = !0,
                i = t(this[0].form).validate();
            return this.each(function () {
                e = e && i.element(this)
            }), e
        },
        removeAttrs: function (e) {
            var i = {},
                s = this;
            return t.each(e.split(/\s/), function (t, e) {
                i[e] = s.attr(e), s.removeAttr(e)
            }), i
        },
        rules: function (e, i) {
            var s = this[0];
            if (e) {
                var r = t.data(s.form, "validator").settings,
                    n = r.rules,
                    a = t.validator.staticRules(s);
                switch (e) {
                    case "add":
                        t.extend(a, t.validator.normalizeRule(i)), delete a.messages, n[s.name] = a, i.messages && (r.messages[s.name] = t.extend(r.messages[s.name], i.messages));
                        break;
                    case "remove":
                        if (!i) return delete n[s.name], a;
                        var u = {};
                        return t.each(i.split(/\s/), function (t, e) {
                            u[e] = a[e], delete a[e]
                        }), u
                }
            }
            var o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(s), t.validator.attributeRules(s), t.validator.dataRules(s), t.validator.staticRules(s)), s);
            if (o.required) {
                var l = o.required;
                delete o.required, o = t.extend({
                    required: l
                }, o)
            }
            return o
        }
    }), t.extend(t.expr[":"], {
        blank: function (e) {
            return !t.trim("" + t(e).val())
        },
        filled: function (e) {
            return !!t.trim("" + t(e).val())
        },
        unchecked: function (e) {
            return !t(e).prop("checked")
        }
    }), t.validator = function (e, i) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
    }, t.validator.format = function (e, i) {
        return 1 === arguments.length ? function () {
            var i = t.makeArray(arguments);
            return i.unshift(e), t.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function (t, i) {
            e = e.replace(RegExp("\\{" + t + "\\}", "g"), function () {
                return i
            })
        }), e)
    }, t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (t) {
                this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
            },
            onfocusout: function (t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function (t, e) {
                (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
            },
            onclick: function (t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function (e, i, s) {
                "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s)
            },
            unhighlight: function (e, i, s) {
                "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s)
            }
        },
        setDefaults: function (e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function e(e) {
                    var i = t.data(this[0].form, "validator"),
                        s = "on" + e.type.replace(/^validate/, "");
                    i.settings[s] && i.settings[s].call(i, this[0], e)
                }
                this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i = this.groups = {};
                t.each(this.settings.groups, function (e, s) {
                    "string" == typeof s && (s = s.split(/\s/)), t.each(s, function (t, s) {
                        i[s] = e
                    })
                });
                var s = this.settings.rules;
                t.each(s, function (e, i) {
                    s[e] = t.validator.normalizeRule(i)
                }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function () {
                return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function () {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                return this.valid()
            },
            element: function (e) {
                e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
                var i = this.check(e) !== !1;
                return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
            },
            showErrors: function (e) {
                if (e) {
                    t.extend(this.errorMap, e), this.errorList = [];
                    for (var i in e) this.errorList.push({
                        message: e[i],
                        element: this.findByName(i)[0]
                    });
                    this.successList = t.grep(this.successList, function (t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function () {
                t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },
            numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            },
            objectLength: function (t) {
                var e = 0;
                for (var i in t) e++;
                return e
            },
            hideErrors: function () {
                this.addWrapper(this.toHide).hide()
            },
            valid: function () {
                return 0 === this.size()
            },
            size: function () {
                return this.errorList.length
            },
            focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (e) {}
            },
            findLastActive: function () {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function (t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function () {
                var e = this,
                    i = {};
                return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0)
                })
            },
            clean: function (e) {
                return t(e)[0]
            },
            errors: function () {
                var e = this.settings.errorClass.replace(" ", ".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            },
            reset: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
            },
            prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function (t) {
                this.reset(), this.toHide = this.errorsFor(t)
            },
            elementValue: function (e) {
                var i = t(e).attr("type"),
                    s = t(e).val();
                return "radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof s ? s.replace(/\r/g, "") : s
            },
            check: function (e) {
                e = this.validationTargetFor(this.clean(e));
                var i, s = t(e).rules(),
                    r = !1,
                    n = this.elementValue(e);
                for (var a in s) {
                    var u = {
                        method: a,
                        parameters: s[a]
                    };
                    try {
                        if (i = t.validator.methods[a].call(this, n, e, u.parameters), "dependency-mismatch" === i) {
                            r = !0;
                            continue
                        }
                        if (r = !1, "pending" === i) return this.toHide = this.toHide.not(this.errorsFor(e)), void 0;
                        if (!i) return this.formatAndAdd(e, u), !1
                    } catch (o) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + u.method + "' method.", o), o
                    }
                }
                return r ? void 0 : (this.objectLength(s) && this.successList.push(e), !0)
            },
            customDataMessage: function (e, i) {
                return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase())
            },
            customMessage: function (t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i : i[e])
            },
            findDefined: function () {
                for (var t = 0; arguments.length > t; t++)
                    if (void 0 !== arguments[t]) return arguments[t];
                return void 0
            },
            defaultMessage: function (e, i) {
                return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
            },
            formatAndAdd: function (e, i) {
                var s = this.defaultMessage(e, i.method),
                    r = /\$?\{(\d+)\}/g;
                "function" == typeof s ? s = s.call(this, i.parameters, e) : r.test(s) && (s = t.validator.format(s.replace(r, "{$1}"), i.parameters)), this.errorList.push({
                    message: s,
                    element: e
                }), this.errorMap[e.name] = s, this.submitted[e.name] = s
            },
            addWrapper: function (t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            },
            defaultShowErrors: function () {
                var t, e;
                for (t = 0; this.errorList[t]; t++) {
                    var i = this.errorList[t];
                    this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function () {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function () {
                return t(this.errorList).map(function () {
                    return this.element
                })
            },
            showLabel: function (e, i) {
                var s = this.errorsFor(e);
                s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(i)) : (s = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (s = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(s).length || (this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e))), !i && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s)
            },
            errorsFor: function (e) {
                var i = this.idOrName(e);
                return this.errors().filter(function () {
                    return t(this).attr("for") === i
                })
            },
            idOrName: function (t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            },
            validationTargetFor: function (t) {
                return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
            },
            checkable: function (t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function (e) {
                return t(this.currentForm).find("[name='" + e + "']")
            },
            getLength: function (e, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return t("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return e.length
            },
            depend: function (t, e) {
                return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
            },
            dependTypes: {
                "boolean": function (t) {
                    return t
                },
                string: function (e, i) {
                    return !!t(e, i.form).length
                },
                "function": function (t, e) {
                    return t(e)
                }
            },
            optional: function (e) {
                var i = this.elementValue(e);
                return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
            },
            startRequest: function (t) {
                this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
            },
            stopRequest: function (e, i) {
                this.pendingRequest--, 0 > this.pendingRequest && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function (e) {
                return t.data(e, "previousValue") || t.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function (e, i) {
            e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
        },
        classRules: function (e) {
            var i = {},
                s = t(e).attr("class");
            return s && t.each(s.split(" "), function () {
                this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
            }), i
        },
        attributeRules: function (e) {
            var i = {},
                s = t(e),
                r = s[0].getAttribute("type");
            for (var n in t.validator.methods) {
                var a;
                "required" === n ? (a = s.get(0).getAttribute(n), "" === a && (a = !0), a = !!a) : a = s.attr(n), /min|max/.test(n) && (null === r || /number|range|text/.test(r)) && (a = Number(a)), a ? i[n] = a : r === n && "range" !== r && (i[n] = !0)
            }
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
        },
        dataRules: function (e) {
            var i, s, r = {},
                n = t(e);
            for (i in t.validator.methods) s = n.data("rule-" + i.toLowerCase()), void 0 !== s && (r[i] = s);
            return r
        },
        staticRules: function (e) {
            var i = {},
                s = t.data(e.form, "validator");
            return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i
        },
        normalizeRules: function (e, i) {
            return t.each(e, function (s, r) {
                if (r === !1) return delete e[s], void 0;
                if (r.param || r.depends) {
                    var n = !0;
                    switch (typeof r.depends) {
                        case "string":
                            n = !!t(r.depends, i.form).length;
                            break;
                        case "function":
                            n = r.depends.call(i, i)
                    }
                    n ? e[s] = void 0 !== r.param ? r.param : !0 : delete e[s]
                }
            }), t.each(e, function (s, r) {
                e[s] = t.isFunction(r) ? r(i) : r
            }), t.each(["minlength", "maxlength"], function () {
                e[this] && (e[this] = Number(e[this]))
            }), t.each(["rangelength", "range"], function () {
                var i;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
            }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
        },
        normalizeRule: function (e) {
            if ("string" == typeof e) {
                var i = {};
                t.each(e.split(/\s/), function () {
                    i[this] = !0
                }), e = i
            }
            return e
        },
        addMethod: function (e, i, s) {
            t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], 3 > i.length && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function (e, i, s) {
                if (!this.depend(s, i)) return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var r = t(i).val();
                    return r && r.length > 0
                }
                return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
            },
            email: function (t, e) {
                return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
            },
            url: function (t, e) {
                return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
            },
            date: function (t, e) {
                return this.optional(e) || !/Invalid|NaN/.test("" + new Date(t))
            },
            dateISO: function (t, e) {
                return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
            },
            number: function (t, e) {
                return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function (t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            creditcard: function (t, e) {
                if (this.optional(e)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(t)) return !1;
                var i = 0,
                    s = 0,
                    r = !1;
                t = t.replace(/\D/g, "");
                for (var n = t.length - 1; n >= 0; n--) {
                    var a = t.charAt(n);
                    s = parseInt(a, 10), r && (s *= 2) > 9 && (s -= 9), i += s, r = !r
                }
                return 0 === i % 10
            },
            minlength: function (e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || r >= s
            },
            maxlength: function (e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || s >= r
            },
            rangelength: function (e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || r >= s[0] && s[1] >= r
            },
            min: function (t, e, i) {
                return this.optional(e) || t >= i
            },
            max: function (t, e, i) {
                return this.optional(e) || i >= t
            },
            range: function (t, e, i) {
                return this.optional(e) || t >= i[0] && i[1] >= t
            },
            equalTo: function (e, i, s) {
                var r = t(s);
                return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    t(i).valid()
                }), e === r.val()
            },
            remote: function (e, i, s) {
                if (this.optional(i)) return "dependency-mismatch";
                var r = this.previousValue(i);
                if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), r.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = r.message, s = "string" == typeof s && {
                        url: s
                    } || s, r.old === e) return r.valid;
                r.old = e;
                var n = this;
                this.startRequest(i);
                var a = {};
                return a[i.name] = e, t.ajax(t.extend(!0, {
                    url: s,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: a,
                    success: function (s) {
                        n.settings.messages[i.name].remote = r.originalMessage;
                        var a = s === !0 || "true" === s;
                        if (a) {
                            var u = n.formSubmitted;
                            n.prepareElement(i), n.formSubmitted = u, n.successList.push(i), delete n.invalid[i.name], n.showErrors()
                        } else {
                            var o = {},
                                l = s || n.defaultMessage(i, "remote");
                            o[i.name] = r.message = t.isFunction(l) ? l(e) : l, n.invalid[i.name] = !0, n.showErrors(o)
                        }
                        r.valid = a, n.stopRequest(i, a)
                    }
                }, s)), "pending"
            }
        }
    }), t.format = t.validator.format
})(jQuery),
function (t) {
    var e = {};
    if (t.ajaxPrefilter) t.ajaxPrefilter(function (t, i, s) {
        var r = t.port;
        "abort" === t.mode && (e[r] && e[r].abort(), e[r] = s)
    });
    else {
        var i = t.ajax;
        t.ajax = function (s) {
            var r = ("mode" in s ? s : t.ajaxSettings).mode,
                n = ("port" in s ? s : t.ajaxSettings).port;
            return "abort" === r ? (e[n] && e[n].abort(), e[n] = i.apply(this, arguments), e[n]) : i.apply(this, arguments)
        }
    }
}(jQuery),
function (t) {
    t.extend(t.fn, {
        validateDelegate: function (e, i, s) {
            return this.bind(i, function (i) {
                var r = t(i.target);
                return r.is(e) ? s.apply(r, arguments) : void 0
            })
        }
    })
}(jQuery);
(function () {
    function a(b) {
        return b.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/[0-9.(),;:!?%#$'"_+=\/-]*/g, "")
    }
    jQuery.validator.addMethod("maxWords", function (b, c, d) {
        return this.optional(c) || a(b).match(/\b\w+\b/g).length < d
    }, jQuery.validator.format("Please enter {0} words or less."));
    jQuery.validator.addMethod("minWords", function (b, c, d) {
        return this.optional(c) || a(b).match(/\b\w+\b/g).length >= d
    }, jQuery.validator.format("Please enter at least {0} words."));
    jQuery.validator.addMethod("rangeWords", function (b, c, d) {
        return this.optional(c) || a(b).match(/\b\w+\b/g).length >= d[0] && b.match(/bw+b/g).length < d[1]
    }, jQuery.validator.format("Please enter between {0} and {1} words."))
})();
jQuery.validator.addMethod("letterswithbasicpunc", function (a, b) {
    return this.optional(b) || /^[a-z-.,()'\"\s]+$/i.test(a)
}, "Letters or punctuation only please");
jQuery.validator.addMethod("alphanumeric", function (a, b) {
    return this.optional(b) || /^\w+$/i.test(a)
}, "Letters, numbers, spaces or underscores only please");
jQuery.validator.addMethod("lettersonly", function (a, b) {
    return this.optional(b) || /^[a-z]+$/i.test(a)
}, "Letters only please");
jQuery.validator.addMethod("nowhitespace", function (a, b) {
    return this.optional(b) || /^\S+$/i.test(a)
}, "No white space please");
jQuery.validator.addMethod("ziprange", function (a, b) {
    return this.optional(b) || /^90[2-5]\d\{2}-\d{4}$/.test(a)
}, "Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx");
jQuery.validator.addMethod("integer", function (a, b) {
    return this.optional(b) || /^-?\d+$/.test(a)
}, "A positive or negative non-decimal number please");
jQuery.validator.addMethod("vinUS", function (a) {
    if (a.length != 17) return !1;
    var b, c, d, f, e, g = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        i = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9],
        j = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
        h = 0;
    for (b = 0; b < 17; b++) {
        f = j[b];
        d = a.slice(b, b + 1);
        if (b == 8) e = d;
        if (isNaN(d))
            for (c = 0; c < g.length; c++) {
                if (d.toUpperCase() === g[c]) {
                    d = i[c];
                    d *= f;
                    if (isNaN(e) && c == 8) e = g[c];
                    break
                }
            } else d *= f;
        h += d
    }
    a = h % 11;
    if (a == 10) a = "X";
    if (a == e) return !0;
    return !1
}, "The specified vehicle identification number (VIN) is invalid.");
jQuery.validator.addMethod("dateITA", function (a, b) {
    var c = !1;
    if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(a)) {
        var d = a.split("/");
        c = parseInt(d[0], 10);
        var f = parseInt(d[1], 10);
        d = parseInt(d[2], 10);
        var e = new Date(d, f - 1, c);
        c = e.getFullYear() == d && e.getMonth() == f - 1 && e.getDate() == c ? true : !1
    } else c = !1;
    return this.optional(b) || c
}, "Please enter a correct date");
jQuery.validator.addMethod("dateNL", function (a, b) {
    return this.optional(b) || /^\d\d?[\.\/-]\d\d?[\.\/-]\d\d\d?\d?$/.test(a)
}, "Vul hier een geldige datum in.");
jQuery.validator.addMethod("time", function (a, b) {
    return this.optional(b) || /^([01]\d|2[0-3])(:[0-5]\d){0,2}$/.test(a)
}, "Please enter a valid time, between 00:00 and 23:59");
jQuery.validator.addMethod("time12h", function (a, b) {
    return this.optional(b) || /^((0?[1-9]|1[012])(:[0-5]\d){0,2}(\ [AP]M))$/i.test(a)
}, "Please enter a valid time, between 00:00 am and 12:00 pm");
jQuery.validator.addMethod("phoneUS", function (a, b) {
    a = a.replace(/\s+/g, "");
    return this.optional(b) || a.length > 9 && a.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)
}, "Please specify a valid phone number");
jQuery.validator.addMethod("phoneUK", function (a, b) {
    return this.optional(b) || a.length > 9 && a.match(/^(\(?(0|\+44)[1-9]{1}\d{1,4}?\)?\s?\d{3,4}\s?\d{3,4})$/)
}, "Please specify a valid phone number");
jQuery.validator.addMethod("mobileUK", function (a, b) {
    return this.optional(b) || a.length > 9 && a.match(/^((0|\+44)7(5|6|7|8|9){1}\d{2}\s?\d{6})$/)
}, "Please specify a valid mobile number");
jQuery.validator.addMethod("strippedminlength", function (a, b, c) {
    return jQuery(a).text().length >= c
}, jQuery.validator.format("Please enter at least {0} characters"));
jQuery.validator.addMethod("email2", function (a, b) {
    return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(a)
}, jQuery.validator.messages.email);
jQuery.validator.addMethod("url2", function (a, b) {
    return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
}, jQuery.validator.messages.url);
jQuery.validator.addMethod("creditcardtypes", function (a, b, c) {
    if (/[^0-9-]+/.test(a)) return !1;
    a = a.replace(/\D/g, "");
    b = 0;
    if (c.mastercard) b |= 1;
    if (c.visa) b |= 2;
    if (c.amex) b |= 4;
    if (c.dinersclub) b |= 8;
    if (c.enroute) b |= 16;
    if (c.discover) b |= 32;
    if (c.jcb) b |= 64;
    if (c.unknown) b |= 128;
    if (c.all) b = 255;
    if (b & 1 && /^(51|52|53|54|55)/.test(a)) return a.length == 16;
    if (b & 2 && /^(4)/.test(a)) return a.length == 16;
    if (b & 4 && /^(34|37)/.test(a)) return a.length == 15;
    if (b & 8 && /^(300|301|302|303|304|305|36|38)/.test(a)) return a.length == 14;
    if (b & 16 && /^(2014|2149)/.test(a)) return a.length == 15;
    if (b & 32 && /^(6011)/.test(a)) return a.length == 16;
    if (b & 64 && /^(3)/.test(a)) return a.length == 16;
    if (b & 64 && /^(2131|1800)/.test(a)) return a.length == 15;
    if (b & 128) return !0;
    return !1
}, "Please enter a valid credit card number.");
jQuery.validator.addMethod("ipv4", function (a, b) {
    return this.optional(b) || /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i.test(a)
}, "Please enter a valid IP v4 address.");
jQuery.validator.addMethod("ipv6", function (a, b) {
    return this.optional(b) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(a)
}, "Please enter a valid IP v6 address.");
jQuery.validator.addMethod("pattern", function (a, b, c) {
    return this.optional(b) || c.test(a)
}, "Invalid format.");
(function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
})(function (e) {
    "use strict";

    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
    }

    function r(t) {
        var r = t.target,
            a = e(r);
        if (!a.is("[type=submit],[type=image]")) {
            var n = a.closest("[type=submit]");
            if (0 === n.length) return;
            r = n[0]
        }
        var i = this;
        if (i.clk = r, "image" == r.type)
            if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) {
            var o = a.offset();
            i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
        } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
        setTimeout(function () {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    function a() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
    var i = !!e.fn.prop;
    e.fn.attr2 = function () {
        if (!i) return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function (t) {
        function r(r) {
            var a, n, i = e.param(r, t.traditional).split("&"),
                o = i.length,
                s = [];
            for (a = 0; o > a; a++) i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
            return s
        }

        function o(a) {
            for (var n = new FormData, i = 0; a.length > i; i++) n.append(a[i].name, a[i].value);
            if (t.extraData) {
                var o = r(t.extraData);
                for (i = 0; o.length > i; i++) o[i] && n.append(o[i][0], o[i][1])
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: u || "POST"
            });
            t.uploadProgress && (s.xhr = function () {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function (e) {
                    var r = 0,
                        a = e.loaded || e.position,
                        n = e.total;
                    e.lengthComputable && (r = Math.ceil(100 * (a / n))), t.uploadProgress(e, a, n, r)
                }, !1), r
            }), s.data = null;
            var c = s.beforeSend;
            return s.beforeSend = function (e, r) {
                r.data = t.formData ? t.formData : n, c && c.call(this, e, r)
            }, e.ajax(s)
        }

        function s(r) {
            function n(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (r) {
                    a("cannot get iframe.contentWindow document: " + r)
                }
                if (t) return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (r) {
                    a("cannot get iframe.contentDocument: " + r), t = e.document
                }
                return t
            }

            function o() {
                function t() {
                    try {
                        var e = n(g).readyState;
                        a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (r) {
                        a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0
                    }
                }
                var r = f.attr2("target"),
                    i = f.attr2("action");
                w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), m.timeout && (j = setTimeout(function () {
                    T = !0, s(D)
                }, m.timeout));
                var o = [];
                try {
                    if (m.extraData)
                        for (var c in m.extraData) m.extraData.hasOwnProperty(c) && (e.isPlainObject(m.extraData[c]) && m.extraData[c].hasOwnProperty("name") && m.extraData[c].hasOwnProperty("value") ? o.push(e('<input type="hidden" name="' + m.extraData[c].name + '">').val(m.extraData[c].value).appendTo(w)[0]) : o.push(e('<input type="hidden" name="' + c + '">').val(m.extraData[c]).appendTo(w)[0]));
                    m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
                    try {
                        w.submit()
                    } catch (l) {
                        var d = document.createElement("form").submit;
                        d.apply(w)
                    }
                } finally {
                    w.setAttribute("action", i), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(o).remove()
                }
            }

            function s(t) {
                if (!x.aborted && !F) {
                    if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x) return x.abort("timeout"), S.reject(x, "timeout"), void 0;
                    if (t == k && x) return x.abort("server abort"), S.reject(x, "error", "server abort"), void 0;
                    if (M && M.location.href != m.iframeSrc || T) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var r, i = "success";
                        try {
                            if (T) throw "timeout";
                            var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                            if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a("requeing onLoad callback, DOM not available"), setTimeout(s, 250), void 0;
                            var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function (e) {
                                var t = {
                                    "content-type": m.dataType
                                };
                                return t[e.toLowerCase()]
                            }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
                            var c = (m.dataType || "").toLowerCase(),
                                l = /(json|script|text)/.test(c);
                            if (l || m.textarea) {
                                var f = M.getElementsByTagName("textarea")[0];
                                if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText;
                                else if (l) {
                                    var p = M.getElementsByTagName("pre")[0],
                                        h = M.getElementsByTagName("body")[0];
                                    p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                                }
                            } else "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
                            try {
                                E = _(x, c, m)
                            } catch (b) {
                                i = "parsererror", x.error = r = b || i
                            }
                        } catch (b) {
                            a("error caught: ", b), i = "error", x.error = r = b || i
                        }
                        x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && 300 > x.status || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function () {
                            m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null
                        }, 100)
                    }
                }
            }
            var c, l, m, d, p, v, g, x, b, y, T, j, w = f[0],
                S = e.Deferred();
            if (S.abort = function (e) {
                    x.abort(e)
                }, r)
                for (l = 0; h.length > l; l++) c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
            if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), y = v.attr2("name"), y ? p = y : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), g = v[0], x = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function () {},
                    getResponseHeader: function () {},
                    setRequestHeader: function () {},
                    abort: function (t) {
                        var r = "timeout" === t ? "timeout" : "aborted";
                        a("aborting upload... " + r), this.aborted = 1;
                        try {
                            g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                        } catch (n) {}
                        v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
                    }
                }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--, S.reject(), S;
            if (x.aborted) return S.reject(), S;
            b = w.clk, b && (y = b.name, y && !b.disabled && (m.extraData = m.extraData || {}, m.extraData[y] = b.value, "image" == b.type && (m.extraData[y + ".x"] = w.clk_x, m.extraData[y + ".y"] = w.clk_y)));
            var D = 1,
                k = 2,
                A = e("meta[name=csrf-token]").attr("content"),
                L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
            var E, M, F, O = 50,
                X = e.parseXML || function (e, t) {
                    return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                },
                C = e.parseJSON || function (e) {
                    return window.eval("(" + e + ")")
                },
                _ = function (t, r, a) {
                    var n = t.getResponseHeader("content-type") || "",
                        i = "xml" === r || !r && n.indexOf("xml") >= 0,
                        o = i ? t.responseXML : t.responseText;
                    return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
                };
            return S
        }
        if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this;
        var u, c, l, f = this;
        "function" == typeof t ? t = {
            success: t
        } : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: l,
            success: e.ajaxSettings.success,
            type: u || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var p, h = [],
            v = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
        var x = [];
        if (t.resetForm && x.push(function () {
                f.resetForm()
            }), t.clearForm && x.push(function () {
                f.clearForm(t.includeHidden)
            }), !t.dataType && t.target) {
            var b = t.success || function () {};
            x.push(function (r) {
                var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(b, arguments)
            })
        } else t.success && x.push(t.success);
        if (t.success = function (e, r, a) {
                for (var n = t.context || this, i = 0, o = x.length; o > i; i++) x[i].apply(n, [e, r, a || f, f])
            }, t.error) {
            var y = t.error;
            t.error = function (e, r, a) {
                var n = t.context || this;
                y.apply(n, [e, r, a, f])
            }
        }
        if (t.complete) {
            var T = t.complete;
            t.complete = function (e, r) {
                var a = t.context || this;
                T.apply(a, [e, r, f])
            }
        }
        var j = e("input[type=file]:enabled", this).filter(function () {
                return "" !== e(this).val()
            }),
            w = j.length > 0,
            S = "multipart/form-data",
            D = f.attr("enctype") == S || f.attr("encoding") == S,
            k = n.fileapi && n.formdata;
        a("fileAPI :" + k);
        var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
            A = s(v)
        }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
        for (var E = 0; h.length > E; E++) h[E] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function (n) {
        if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
            var i = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function () {
                e(i.s, i.c).ajaxForm(n)
            }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
    }, e.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function (t, r) {
        var a = [];
        if (0 === this.length) return a;
        var i = this[0],
            o = t ? i.getElementsByTagName("*") : i.elements;
        if (!o) return a;
        var s, u, c, l, f, m, d;
        for (s = 0, m = o.length; m > s; s++)
            if (f = o[s], c = f.name, c && !f.disabled)
                if (t && i.clk && "image" == f.type) i.clk == f && (a.push({
                    name: c,
                    value: e(f).val(),
                    type: f.type
                }), a.push({
                    name: c + ".x",
                    value: i.clk_x
                }, {
                    name: c + ".y",
                    value: i.clk_y
                }));
                else if (l = e.fieldValue(f, !0), l && l.constructor == Array)
            for (r && r.push(f), u = 0, d = l.length; d > u; u++) a.push({
                name: c,
                value: l[u]
            });
        else if (n.fileapi && "file" == f.type) {
            r && r.push(f);
            var p = f.files;
            if (p.length)
                for (u = 0; p.length > u; u++) a.push({
                    name: c,
                    value: p[u],
                    type: f.type
                });
            else a.push({
                name: c,
                value: "",
                type: f.type
            })
        } else null !== l && l !== void 0 && (r && r.push(f), a.push({
            name: c,
            value: l,
            type: f.type,
            required: f.required
        }));
        if (!t && i.clk) {
            var h = e(i.clk),
                v = h[0];
            c = v.name, c && !v.disabled && "image" == v.type && (a.push({
                name: c,
                value: h.val()
            }), a.push({
                name: c + ".x",
                value: i.clk_x
            }, {
                name: c + ".y",
                value: i.clk_y
            }))
        }
        return a
    }, e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function (t) {
        var r = [];
        return this.each(function () {
            var a = this.name;
            if (a) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array)
                    for (var i = 0, o = n.length; o > i; i++) r.push({
                        name: a,
                        value: n[i]
                    });
                else null !== n && n !== void 0 && r.push({
                    name: this.name,
                    value: n
                })
            }
        }), e.param(r)
    }, e.fn.fieldValue = function (t) {
        for (var r = [], a = 0, n = this.length; n > a; a++) {
            var i = this[a],
                o = e.fieldValue(i, t);
            null === o || void 0 === o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
        }
        return r
    }, e.fieldValue = function (t, r) {
        var a = t.name,
            n = t.type,
            i = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null;
        if ("select" == i) {
            var o = t.selectedIndex;
            if (0 > o) return null;
            for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
                var m = u[f];
                if (m.selected) {
                    var d = m.value;
                    if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return d;
                    s.push(d)
                }
            }
            return s
        }
        return e(t).val()
    }, e.fn.clearForm = function (t) {
        return this.each(function () {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function (t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var a = this.type,
                n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function () {
        return this.each(function () {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function (e) {
        return void 0 === e && (e = !0), this.each(function () {
            this.disabled = !e
        })
    }, e.fn.selected = function (t) {
        return void 0 === t && (t = !0), this.each(function () {
            var r = this.type;
            if ("checkbox" == r || "radio" == r) this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
                var a = e(this).parent("select");
                t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
});
(function ($) {
    $.rating = function (e, o) {
        this.options = $.extend({
            canVoteAgain: !1,
            fx: 'float',
            image: '/images/stars.png',
            stars: 5,
            minimal: 0,
            titles: ['голос', 'голоса', 'голосов'],
            readOnly: !1,
            url: '',
            type: 'post',
            loader: '/images/ajax-loader.gif',
            click: function () {},
            callback: function () {}
        }, o || {});
        this.el = $(e);
        this.left = 0;
        this.width = 0;
        this.height = 0;
        this._data = {};
        var self = this;
        this.el.find(':hidden').each(function () {
            var $this = $(this);
            self._data[$this.attr('name')] = $this.val()
        });
        this._data.val = parseFloat(this._data.val) || 0;
        this._data.votes = parseFloat(this._data.votes) || '';
        if (this._data.val > this.options.stars) this._data.val = this.options.stars;
        if (this._data.val < 0) this._data.val = 0;
        this.old = this._data.val;
        this.vote_wrap = $('<div class="vote-wrap"></div>');
        this.vote_block = $('<div class="vote-block"></div>');
        this.vote_hover = $('<div class="vote-hover"></div>');
        this.vote_stars = $('<div class="vote-stars"></div>');
        this.vote_active = $('<div class="vote-active"></div>');
        this.vote_result = $('<div class="vote-result"></div>');
        this.vote_success = $('<div class="vote-success"></div>');
        this.loader = $('<img src="' + this.options.loader + '" alt="Загрузка...">');
        this.el.html(this.loader);
        var img = new Image();
        img.src = this.options.image;
        img.onload = function () {
            self.width = this.width;
            self.height = this.height / 3;
            self.init()
        }
    };
    var $r = $.rating;
    $r.fn = $r.prototype = {
        rating: '2.0'
    };
    $r.fn.extend = $r.extend = $.extend;
    $r.fn.extend({
        init: function () {
            this.render();
            if (this.options.readOnly) return;
            var self = this,
                left = 0,
                width = 0;
            this.vote_hover.bind('mousemove mouseover', function (e) {
                if (self.options.canVoteAgain != !0)
                    if (self.options.readOnly) return;
                var $this = $(this),
                    score = 0;
                left = e.clientX > 0 ? e.clientX : e.pageX;
                width = left - $this.offset().left - 2;
                var max = self.width * self.options.stars,
                    min = self.options.minimal * self.width;
                if (width > max) width = max;
                if (width < min) width = min;
                score = Math.round(width / self.width * 10) / 10;
                if (self.options.fx == 'half') {
                    width = Math.ceil(width / self.width * 2) * self.width / 2
                } else if (self.options.fx != 'float') {
                    width = Math.ceil(width / self.width) * self.width
                }
                score = Math.round(width / self.width * 10) / 10;
                self.vote_active.css({
                    'width': width,
                    'background-position': 'left center'
                });
                self.vote_success.html('Ваша оценка: ' + score)
            }).bind('mouseout', function () {
                if (self.options.readOnly) return;
                self.reset();
                self.vote_success.empty()
            }).bind('click.rating', function () {
                if (self.options.canVoteAgain != !0)
                    if (self.options.readOnly) return;
                var score = Math.round(width / self.width * 10) / 10;
                if (score > self.options.stars) score = self.options.stars;
                if (score < 0) score = 0;
                self.old = self._data.val;
                self._data.val = (self._data.val * self._data.votes + score) / (self._data.votes + 1);
                self._data.val = Math.round(self._data.val * 100) / 100;
                self._data.score = score;
                self.vote_success.html('Ваша оценка: ' + score);
                if (self.options.url != '') {
                    self.send()
                }
                self.options.readOnly = !0;
                self.options.click.apply(this, [score])
            })
        },
        set: function () {
            this.vote_active.css({
                'width': this._data.val * this.width,
                'background-position': 'left bottom'
            })
        },
        reset: function () {
            this.vote_active.css({
                'width': this.old * this.width,
                'background-position': 'left bottom'
            })
        },
        setvoters: function () {
            this.vote_result.html(this.declOfNum(this._data.votes))
        },
        render: function () {
            this.el.html(this.vote_wrap.append(this.vote_hover.css({
                padding: '0 4px',
                height: this.height,
                width: this.width * this.options.stars
            }), this.vote_result.text(this.declOfNum(this._data.votes)), this.vote_success));
            this.vote_block.append(this.vote_stars.css({
                height: this.height,
                width: this.width * this.options.stars,
                background: "url('" + this.options.image + "') left top"
            }), this.vote_active.css({
                height: this.height,
                width: this._data.val * this.width,
                background: "url('" + this.options.image + "') left bottom"
            })).appendTo(this.vote_hover)
        },
        send: function (score) {
            var self = this;
            this.vote_result.html(this.loader);
            this._data.votes++;
            $.ajax({
                url: self.options.url,
                type: self.options.type,
                data: this._data,
                dataType: 'json',
                success: function (data) {
                    if (data.status == 'OK') {
                        self.set()
                    } else {
                        self._data.votes--;
                        self.reset()
                    }
                    self.setvoters();
                    if (data.msg) self.vote_success.html(data.msg);
                    if (typeof self.options.callback == 'function') {
                        self.options.callback.apply(self, [data])
                    }
                }
            })
        },
        declOfNum: function (number) {
            if (number <= 0) return '';
            number = Math.abs(Math.floor(number));
            cases = [2, 0, 1, 1, 1, 2];
            return number + ' ' + this.options.titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
        }
    });
    $.fn.rating = function (o) {
        if (typeof o == 'string') {
            var instance = $(this).data('rating'),
                args = Array.prototype.slice.call(arguments, 1);
            return instance[o].apply(instance, args)
        } else {
            return this.each(function () {
                var instance = $(this).data('rating');
                if (instance) {
                    if (o) {
                        $.extend(instance.options, o)
                    }
                    instance.init()
                } else {
                    $(this).data('rating', new $r(this, o))
                }
            })
        }
    }
})(jQuery);
! function (e) {
    "function" == typeof define && define.amd ? define(["./dependencyLibs/inputmask.dependencyLib", "./global/window", "./global/document"], e) : "object" == typeof exports ? module.exports = e(require("./dependencyLibs/inputmask.dependencyLib"), require("./global/window"), require("./global/document")) : window.Inputmask = e(window.dependencyLib || jQuery, window, document)
}(function (e, t, n, i) {
    var a = navigator.userAgent,
        r = f("touchstart"),
        o = /iemobile/i.test(a),
        s = /iphone/i.test(a) && !o;

    function l(t, n, a) {
        if (!(this instanceof l)) return new l(t, n, a);
        this.el = i, this.events = {}, this.maskset = i, this.refreshValue = !1, !0 !== a && (e.isPlainObject(t) ? n = t : (n = n || {}, t && (n.alias = t)), this.opts = e.extend(!0, {}, this.defaults, n), this.noMasksCache = n && n.definitions !== i, this.userOptions = n || {}, this.isRTL = this.opts.numericInput, u(this.opts.alias, n, this.opts))
    }

    function u(t, n, a) {
        var r = l.prototype.aliases[t];
        return r ? (r.alias && u(r.alias, i, a), e.extend(!0, a, r), e.extend(!0, a, n), !0) : (null === a.mask && (a.mask = t), !1)
    }

    function c(t, n) {
        function a(t, a, r) {
            var o = !1;
            if (null !== t && "" !== t || ((o = null !== r.regex) ? t = (t = r.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (o = !0, t = ".*")), 1 === t.length && !1 === r.greedy && 0 !== r.repeat && (r.placeholder = ""), r.repeat > 0 || "*" === r.repeat || "+" === r.repeat) {
                var s = "*" === r.repeat ? 0 : "+" === r.repeat ? 1 : r.repeat;
                t = r.groupmarker[0] + t + r.groupmarker[1] + r.quantifiermarker[0] + s + "," + r.repeat + r.quantifiermarker[1]
            }
            var u, c = o ? "regex_" + r.regex : r.numericInput ? t.split("").reverse().join("") : t;
            return l.prototype.masksCache[c] === i || !0 === n ? (u = {
                mask: t,
                maskToken: l.prototype.analyseMask(t, o, r),
                validPositions: {},
                _buffer: i,
                buffer: i,
                tests: {},
                excludes: {},
                metadata: a,
                maskLength: i
            }, !0 !== n && (l.prototype.masksCache[c] = u, u = e.extend(!0, {}, l.prototype.masksCache[c]))) : u = e.extend(!0, {}, l.prototype.masksCache[c]), u
        }
        if (e.isFunction(t.mask) && (t.mask = t.mask(t)), e.isArray(t.mask)) {
            if (t.mask.length > 1) {
                if (null === t.keepStatic) {
                    t.keepStatic = "auto";
                    for (var r = 0; r < t.mask.length; r++)
                        if (t.mask[r].charAt(0) !== t.mask[0].charAt(0)) {
                            t.keepStatic = !0;
                            break
                        }
                }
                var o = t.groupmarker[0];
                return e.each(t.isRTL ? t.mask.reverse() : t.mask, function (n, a) {
                    o.length > 1 && (o += t.groupmarker[1] + t.alternatormarker + t.groupmarker[0]), a.mask === i || e.isFunction(a.mask) ? o += a : o += a.mask
                }), a(o += t.groupmarker[1], t.mask, t)
            }
            t.mask = t.mask.pop()
        }
        return t.mask && t.mask.mask !== i && !e.isFunction(t.mask.mask) ? a(t.mask.mask, t.mask, t) : a(t.mask, t.mask, t)
    }

    function f(e) {
        var t = n.createElement("input"),
            i = "on" + e,
            a = i in t;
        return a || (t.setAttribute(i, "return;"), a = "function" == typeof t[i]), t = null, a
    }

    function p(a, u, c) {
        u = u || this.maskset, c = c || this.opts;
        var h, m, d, v, k = this,
            g = this.el,
            b = this.isRTL,
            y = !1,
            E = !1,
            C = !1,
            P = !1;

        function x(e, t, n, a, r) {
            var o = c.greedy;
            r && (c.greedy = !1), t = t || 0;
            var s, l, u, f = [],
                p = 0,
                h = w();
            do {
                if (!0 === e && _().validPositions[p]) l = (u = r && !0 === _().validPositions[p].match.optionality && _().validPositions[p + 1] === i && (!0 === _().validPositions[p].generatedInput || _().validPositions[p].input == c.skipOptionalPartCharacter && p > 0) ? S(p, G(p, s, p - 1)) : _().validPositions[p]).match, s = u.locator.slice(), f.push(!0 === n ? u.input : !1 === n ? l.nativeDef : W(p, l));
                else {
                    l = (u = j(p, s, p - 1)).match, s = u.locator.slice();
                    var m = !0 !== a && (!1 !== c.jitMasking ? c.jitMasking : l.jit);
                    (!1 === m || m === i || p < h || "number" == typeof m && isFinite(m) && m > p) && f.push(!1 === n ? l.nativeDef : W(p, l))
                }
                "auto" === c.keepStatic && l.newBlockMarker && null !== l.fn && (c.keepStatic = p - 1), p++
            } while ((d === i || p < d) && (null !== l.fn || "" !== l.def) || t > p);
            return "" === f[f.length - 1] && f.pop(), !1 === n && _().maskLength !== i || (_().maskLength = p - 1), c.greedy = o, f
        }

        function _() {
            return u
        }

        function A(e) {
            var t = _();
            t.buffer = i, !0 !== e && (t.validPositions = {}, t.p = 0)
        }

        function w(e, t, n) {
            var a = -1,
                r = -1,
                o = n || _().validPositions;
            for (var s in e === i && (e = -1), o) {
                var l = parseInt(s);
                o[l] && (t || !0 !== o[l].generatedInput) && (l <= e && (a = l), l >= e && (r = l))
            }
            return -1 === a || a == e ? r : -1 == r ? a : e - a < r - e ? a : r
        }

        function O(e) {
            var t = e.locator[e.alternation];
            return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), t !== i ? t.toString() : ""
        }

        function M(e, t) {
            var n = (e.alternation != i ? e.mloc[O(e)] : e.locator).join("");
            if ("" !== n)
                for (; n.length < t;) n += "0";
            return n
        }

        function S(e, t) {
            for (var n, a, r, o = M(D(e = e > 0 ? e - 1 : 0)), s = 0; s < t.length; s++) {
                var l = t[s];
                n = M(l, o.length);
                var u = Math.abs(n - o);
                (a === i || "" !== n && u < a || r && r.match.optionality && "master" === r.match.newBlockMarker && (!l.match.optionality || !l.match.newBlockMarker) || r && r.match.optionalQuantifier && !l.match.optionalQuantifier) && (a = u, r = l)
            }
            return r
        }

        function j(e, t, n) {
            return _().validPositions[e] || S(e, G(e, t ? t.slice() : t, n))
        }

        function D(e, t) {
            return _().validPositions[e] ? _().validPositions[e] : (t || G(e))[0]
        }

        function T(e, t) {
            for (var n = !1, i = G(e), a = 0; a < i.length; a++)
                if (i[a].match && i[a].match.def === t) {
                    n = !0;
                    break
                } return n
        }

        function G(t, n, a) {
            var r, o, s, l, u = _().maskToken,
                f = n ? a : 0,
                p = n ? n.slice() : [0],
                h = [],
                m = !1,
                d = n ? n.join("") : "";

            function v(n, a, o, s) {
                function l(o, s, u) {
                    function p(t, n) {
                        var i = 0 === e.inArray(t, n.matches);
                        return i || e.each(n.matches, function (e, a) {
                            if (!0 === a.isQuantifier ? i = p(t, n.matches[e - 1]) : !0 === a.isOptional ? i = p(t, a) : !0 === a.isAlternate && (i = p(t, a)), i) return !1
                        }), i
                    }

                    function k(t, n, a) {
                        var r, o;
                        if ((_().tests[t] || _().validPositions[t]) && e.each(_().tests[t] || [_().validPositions[t]], function (e, t) {
                                if (t.mloc[n]) return r = t, !1;
                                var s = a !== i ? a : t.alternation,
                                    l = t.locator[s] !== i ? t.locator[s].toString().indexOf(n) : -1;
                                (o === i || l < o) && -1 !== l && (r = t, o = l)
                            }), r) {
                            var s = r.locator[r.alternation];
                            return (r.mloc[n] || r.mloc[s] || r.locator).slice((a !== i ? a : r.alternation) + 1)
                        }
                        return a !== i ? k(t, n) : i
                    }

                    function g(e, t) {
                        function n(e) {
                            for (var t, n, i = [], a = 0, r = e.length; a < r; a++)
                                if ("-" === e.charAt(a))
                                    for (n = e.charCodeAt(a + 1); ++t < n;) i.push(String.fromCharCode(t));
                                else t = e.charCodeAt(a), i.push(e.charAt(a));
                            return i.join("")
                        }
                        return c.regex && null !== e.match.fn && null !== t.match.fn ? -1 !== n(t.match.def.replace(/[\[\]]/g, "")).indexOf(n(e.match.def.replace(/[\[\]]/g, ""))) : e.match.def === t.match.nativeDef
                    }

                    function b(e, t) {
                        if (t === i || e.alternation === t.alternation && -1 === e.locator[e.alternation].toString().indexOf(t.locator[t.alternation])) {
                            e.mloc = e.mloc || {};
                            var n = e.locator[e.alternation];
                            if (n !== i) {
                                if ("string" == typeof n && (n = n.split(",")[0]), e.mloc[n] === i && (e.mloc[n] = e.locator.slice()), t !== i) {
                                    for (var a in t.mloc) "string" == typeof a && (a = a.split(",")[0]), e.mloc[a] === i && (e.mloc[a] = t.mloc[a]);
                                    e.locator[e.alternation] = Object.keys(e.mloc).join(",")
                                }
                                return !0
                            }
                            e.alternation = i
                        }
                        return !1
                    }
                    if (f > 5e3) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + _().mask;
                    if (f === t && o.matches === i) return h.push({
                        match: o,
                        locator: s.reverse(),
                        cd: d,
                        mloc: {}
                    }), !0;
                    if (o.matches !== i) {
                        if (o.isGroup && u !== o) {
                            if (o = l(n.matches[e.inArray(o, n.matches) + 1], s)) return !0
                        } else if (o.isOptional) {
                            var y = o;
                            if (o = v(o, a, s, u)) {
                                if (e.each(h, function (e, t) {
                                        t.match.optionality = !0
                                    }), r = h[h.length - 1].match, u !== i || !p(r, y)) return !0;
                                m = !0, f = t
                            }
                        } else if (o.isAlternator) {
                            var E, C = o,
                                P = [],
                                x = h.slice(),
                                A = s.length,
                                w = a.length > 0 ? a.shift() : -1;
                            if (-1 === w || "string" == typeof w) {
                                var O, M = f,
                                    S = a.slice(),
                                    j = [];
                                if ("string" == typeof w) j = w.split(",");
                                else
                                    for (O = 0; O < C.matches.length; O++) j.push(O.toString());
                                if (_().excludes[t]) {
                                    for (var D = j.slice(), T = 0, G = _().excludes[t].length; T < G; T++) j.splice(j.indexOf(_().excludes[t][T].toString()), 1);
                                    0 === j.length && (_().excludes[t] = i, j = D)
                                }(!0 === c.keepStatic || isFinite(parseInt(c.keepStatic)) && M >= c.keepStatic) && (j = j.slice(0, 1));
                                for (var B = !1, L = 0; L < j.length; L++) {
                                    O = parseInt(j[L]), h = [], a = "string" == typeof w && k(f, O, A) || S.slice(), C.matches[O] && l(C.matches[O], [O].concat(s), u) ? o = !0 : 0 === L && (B = !0), E = h.slice(), f = M, h = [];
                                    for (var I = 0; I < E.length; I++) {
                                        var F = E[I],
                                            N = !1;
                                        F.match.jit = F.match.jit || B, F.alternation = F.alternation || A, b(F);
                                        for (var R = 0; R < P.length; R++) {
                                            var K = P[R];
                                            if ("string" != typeof w || F.alternation !== i && -1 !== e.inArray(F.locator[F.alternation].toString(), j)) {
                                                if (F.match.nativeDef === K.match.nativeDef) {
                                                    N = !0, b(K, F);
                                                    break
                                                }
                                                if (g(F, K)) {
                                                    b(F, K) && (N = !0, P.splice(P.indexOf(K), 0, F));
                                                    break
                                                }
                                                if (g(K, F)) {
                                                    b(K, F);
                                                    break
                                                }
                                                if (Q = K, null === (U = F).match.fn && null !== Q.match.fn && Q.match.fn.test(U.match.def, _(), t, !1, c, !1)) {
                                                    b(F, K) && (N = !0, P.splice(P.indexOf(K), 0, F));
                                                    break
                                                }
                                            }
                                        }
                                        N || P.push(F)
                                    }
                                }
                                h = x.concat(P), f = t, m = h.length > 0, o = P.length > 0, a = S.slice()
                            } else o = l(C.matches[w] || n.matches[w], [w].concat(s), u);
                            if (o) return !0
                        } else if (o.isQuantifier && u !== n.matches[e.inArray(o, n.matches) - 1])
                            for (var V = o, H = a.length > 0 ? a.shift() : 0; H < (isNaN(V.quantifier.max) ? H + 1 : V.quantifier.max) && f <= t; H++) {
                                var q = n.matches[e.inArray(V, n.matches) - 1];
                                if (o = l(q, [H].concat(s), q)) {
                                    if ((r = h[h.length - 1].match).optionalQuantifier = H > V.quantifier.min - 1, r.jit = H + q.matches.indexOf(r) >= V.quantifier.jit, p(r, q) && H > V.quantifier.min - 1) {
                                        m = !0, f = t;
                                        break
                                    }
                                    if (V.quantifier.jit !== i && isNaN(V.quantifier.max) && r.optionalQuantifier && _().validPositions[t - 1] === i) {
                                        h.pop(), m = !0, f = t, d = i;
                                        break
                                    }
                                    return !0
                                }
                            } else if (o = v(o, a, s, u)) return !0
                    } else f++;
                    var U, Q
                }
                for (var u = a.length > 0 ? a.shift() : 0; u < n.matches.length; u++)
                    if (!0 !== n.matches[u].isQuantifier) {
                        var p = l(n.matches[u], [u].concat(o), s);
                        if (p && f === t) return p;
                        if (f > t) break
                    }
            }
            if (t > -1) {
                if (n === i) {
                    for (var k, g = t - 1;
                        (k = _().validPositions[g] || _().tests[g]) === i && g > -1;) g--;
                    k !== i && g > -1 && (o = g, s = k, l = [], e.isArray(s) || (s = [s]), s.length > 0 && (s[0].alternation === i ? 0 === (l = S(o, s.slice()).locator.slice()).length && (l = s[0].locator.slice()) : e.each(s, function (e, t) {
                        if ("" !== t.def)
                            if (0 === l.length) l = t.locator.slice();
                            else
                                for (var n = 0; n < l.length; n++) t.locator[n] && -1 === l[n].toString().indexOf(t.locator[n]) && (l[n] += "," + t.locator[n])
                    })), d = (p = l).join(""), f = g)
                }
                if (_().tests[t] && _().tests[t][0].cd === d) return _().tests[t];
                for (var b = p.shift(); b < u.length; b++) {
                    if (v(u[b], p, [b]) && f === t || f > t) break
                }
            }
            return (0 === h.length || m) && h.push({
                match: {
                    fn: null,
                    optionality: !1,
                    casing: null,
                    def: "",
                    placeholder: ""
                },
                locator: [],
                mloc: {},
                cd: d
            }), n !== i && _().tests[t] ? e.extend(!0, [], h) : (_().tests[t] = e.extend(!0, [], h), _().tests[t])
        }

        function B() {
            return _()._buffer === i && (_()._buffer = x(!1, 1), _().buffer === i && (_().buffer = _()._buffer.slice())), _()._buffer
        }

        function L(e) {
            return _().buffer !== i && !0 !== e || (_().buffer = x(!0, w(), !0)), _().buffer
        }

        function I(e, t, n) {
            var a, r;
            if (!0 === e) A(), e = 0, t = n.length;
            else
                for (a = e; a < t; a++) delete _().validPositions[a];
            for (r = e, a = e; a < t; a++)
                if (A(!0), n[a] !== c.skipOptionalPartCharacter) {
                    var o = R(r, n[a], !0, !0);
                    !1 !== o && (A(!0), r = o.caret !== i ? o.caret : o.pos + 1)
                }
        }

        function F(t, n, a) {
            for (var r, o = c.greedy ? n : n.slice(0, 1), s = !1, l = a !== i ? a.split(",") : [], u = 0; u < l.length; u++) - 1 !== (r = t.indexOf(l[u])) && t.splice(r, 1);
            for (var f = 0; f < t.length; f++)
                if (-1 !== e.inArray(t[f], o)) {
                    s = !0;
                    break
                } return s
        }

        function N(t, n, a, r, o) {
            var s, l, u, c, f, p, h, m = e.extend(!0, {}, _().validPositions),
                d = !1,
                v = o !== i ? o : w();
            if (-1 === v && o === i) l = (c = D(s = 0)).alternation;
            else
                for (; v >= 0; v--)
                    if ((u = _().validPositions[v]) && u.alternation !== i) {
                        if (c && c.locator[u.alternation] !== u.locator[u.alternation]) break;
                        s = v, l = _().validPositions[s].alternation, c = u
                    } if (l !== i) {
                h = parseInt(s), _().excludes[h] = _().excludes[h] || [], !0 !== t && _().excludes[h].push(O(c));
                var k = [],
                    g = 0;
                for (f = h; f < w(i, !0) + 1; f++)(p = _().validPositions[f]) && !0 !== p.generatedInput ? k.push(p.input) : f < t && g++, delete _().validPositions[f];
                for (; _().excludes[h] && _().excludes[h].length < 10;) {
                    var b = -1 * g,
                        y = k.slice();
                    for (_().tests[h] = i, A(!0), d = !0; y.length > 0;) {
                        var E = y.shift();
                        if (!(d = R(w(i, !0) + 1, E, !1, r, !0))) break
                    }
                    if (d && n !== i) {
                        var C = w(t) + 1;
                        for (f = h; f < w() + 1; f++)((p = _().validPositions[f]) === i || null == p.match.fn) && f < t + b && b++;
                        d = R((t += b) > C ? C : t, n, a, r, !0)
                    }
                    if (d) break;
                    if (A(), c = D(h), _().validPositions = e.extend(!0, {}, m), !_().excludes[h]) {
                        d = N(t, n, a, r, h - 1);
                        break
                    }
                    var P = O(c);
                    if (-1 !== _().excludes[h].indexOf(P)) {
                        d = N(t, n, a, r, h - 1);
                        break
                    }
                    for (_().excludes[h].push(P), f = h; f < w(i, !0) + 1; f++) delete _().validPositions[f]
                }
            }
            return _().excludes[h] = i, d
        }

        function R(t, n, a, r, o, s) {
            function u(e) {
                return b ? e.begin - e.end > 1 || e.begin - e.end == 1 : e.end - e.begin > 1 || e.end - e.begin == 1
            }
            a = !0 === a;
            var f = t;

            function p(n, a, o) {
                var s = !1;
                return e.each(G(n), function (f, p) {
                    var h = p.match;
                    if (L(!0), !1 !== (s = null != h.fn ? h.fn.test(a, _(), n, o, c, u(t)) : (a === h.def || a === c.skipOptionalPartCharacter) && "" !== h.def && {
                            c: W(n, h, !0) || h.def,
                            pos: n
                        })) {
                        var m = s.c !== i ? s.c : a,
                            d = n;
                        return m = m === c.skipOptionalPartCharacter && null === h.fn ? W(n, h, !0) || h.def : m, s.remove !== i && (e.isArray(s.remove) || (s.remove = [s.remove]), e.each(s.remove.sort(function (e, t) {
                            return t - e
                        }), function (e, t) {
                            V({
                                begin: t,
                                end: t + 1
                            })
                        })), s.insert !== i && (e.isArray(s.insert) || (s.insert = [s.insert]), e.each(s.insert.sort(function (e, t) {
                            return e - t
                        }), function (e, t) {
                            R(t.pos, t.c, !0, r)
                        })), !0 !== s && s.pos !== i && s.pos !== n && (d = s.pos), !0 !== s && s.pos === i && s.c === i ? !1 : (V(t, e.extend({}, p, {
                            input: function (t, n, i) {
                                switch (c.casing || n.casing) {
                                    case "upper":
                                        t = t.toUpperCase();
                                        break;
                                    case "lower":
                                        t = t.toLowerCase();
                                        break;
                                    case "title":
                                        var a = _().validPositions[i - 1];
                                        t = 0 === i || a && a.input === String.fromCharCode(l.keyCode.SPACE) ? t.toUpperCase() : t.toLowerCase();
                                        break;
                                    default:
                                        if (e.isFunction(c.casing)) {
                                            var r = Array.prototype.slice.call(arguments);
                                            r.push(_().validPositions), t = c.casing.apply(this, r)
                                        }
                                }
                                return t
                            }(m, h, d)
                        }), r, d) || (s = !1), !1)
                    }
                }), s
            }
            t.begin !== i && (f = b ? t.end : t.begin);
            var h = !0,
                m = e.extend(!0, {}, _().validPositions);
            if (e.isFunction(c.preValidation) && !a && !0 !== r && !0 !== s && (h = c.preValidation(L(), f, n, u(t), c, _())), !0 === h) {
                if (K(i, f, !0), (d === i || f < d) && (h = p(f, n, a), (!a || !0 === r) && !1 === h && !0 !== s)) {
                    var v = _().validPositions[f];
                    if (!v || null !== v.match.fn || v.match.def !== n && n !== c.skipOptionalPartCharacter) {
                        if ((c.insertMode || _().validPositions[q(f)] === i) && !H(f, !0))
                            for (var k = f + 1, g = q(f); k <= g; k++)
                                if (!1 !== (h = p(k, n, a))) {
                                    h = K(f, h.pos !== i ? h.pos : k) || h, f = k;
                                    break
                                }
                    } else h = {
                        caret: q(f)
                    }
                }!1 !== h || !1 === c.keepStatic || null != c.regex && !ie(L()) || a || !0 === o || (h = N(f, n, a, r)), !0 === h && (h = {
                    pos: f
                })
            }
            if (e.isFunction(c.postValidation) && !1 !== h && !a && !0 !== r && !0 !== s) {
                var y = c.postValidation(L(!0), h, c);
                if (y !== i) {
                    if (y.refreshFromBuffer && y.buffer) {
                        var E = y.refreshFromBuffer;
                        I(!0 === E ? E : E.start, E.end, y.buffer)
                    }
                    h = !0 === y ? h : y
                }
            }
            return h && h.pos === i && (h.pos = f), !1 !== h && !0 !== s || (A(!0), _().validPositions = e.extend(!0, {}, m)), h
        }

        function K(t, n, a) {
            var r;
            if (t === i)
                for (t = n - 1; t > 0 && !_().validPositions[t]; t--);
            for (var o = t; o < n; o++)
                if (_().validPositions[o] === i && !H(o, !0)) {
                    var s = 0 == o ? D(o) : _().validPositions[o - 1];
                    if (s) {
                        var l, u = M(s),
                            c = G(o).slice(),
                            f = i,
                            p = D(o);
                        if ("" === c[c.length - 1].match.def && c.pop(), e.each(c, function (e, t) {
                                l = M(t, u.length);
                                var n = Math.abs(l - u);
                                (f === i || n < f) && null === t.match.fn && !0 !== t.match.optionality && !0 !== t.match.optionalQuantifier && (f = n, p = t)
                            }), (p = e.extend({}, p, {
                                input: W(o, p.match, !0) || p.match.def
                            })).generatedInput = !0, V(o, p, !0), !0 !== a) {
                            var h = _().validPositions[n].input;
                            _().validPositions[n] = i, r = R(n, h, !0, !0)
                        }
                    }
                } return r
        }

        function V(t, n, a, r) {
            function o(e, t, n) {
                var a = t[e];
                if (a !== i && (null === a.match.fn && !0 !== a.match.optionality || a.input === c.radixPoint)) {
                    var r = n.begin <= e - 1 ? t[e - 1] && null === t[e - 1].match.fn && t[e - 1] : t[e - 1],
                        o = n.end > e + 1 ? t[e + 1] && null === t[e + 1].match.fn && t[e + 1] : t[e + 1];
                    return r && o
                }
                return !1
            }
            var s = t.begin !== i ? t.begin : t,
                l = t.end !== i ? t.end : t;
            if (t.begin > t.end && (s = t.end, l = t.begin), r = r !== i ? r : s, s !== l || c.insertMode && _().validPositions[r] !== i && a === i) {
                var u = e.extend(!0, {}, _().validPositions),
                    f = w(i, !0);
                for (_().p = s, v = f; v >= s; v--) _().validPositions[v] && "+" === _().validPositions[v].match.nativeDef && (c.isNegative = !1), delete _().validPositions[v];
                var p = !0,
                    h = r,
                    m = (_().validPositions, !1),
                    d = h,
                    v = h;
                for (n && (_().validPositions[r] = e.extend(!0, {}, n), d++, h++, s < l && v++); v <= f; v++) {
                    var k = u[v];
                    if (k !== i && (v >= l || v >= s && !0 !== k.generatedInput && o(v, u, {
                            begin: s,
                            end: l
                        }))) {
                        for (;
                            "" !== D(d).match.def;) {
                            if (!1 === m && u[d] && u[d].match.nativeDef === k.match.nativeDef) _().validPositions[d] = e.extend(!0, {}, u[d]), _().validPositions[d].input = k.input, K(i, d, !0), h = d + 1, p = !0;
                            else if (T(d, k.match.def)) {
                                var g = R(d, k.input, !0, !0);
                                p = !1 !== g, h = g.caret || g.insert ? w() : d + 1, m = !0
                            } else if (!(p = !0 === k.generatedInput || k.input === c.radixPoint && !0 === c.numericInput) && "" === D(d).match.def) break;
                            if (p) break;
                            d++
                        }
                        "" == D(d).match.def && (p = !1), d = h
                    }
                    if (!p) break
                }
                if (!p) return _().validPositions = e.extend(!0, {}, u), A(!0), !1
            } else n && (_().validPositions[r] = e.extend(!0, {}, n));
            return A(!0), !0
        }

        function H(e, t) {
            var n = j(e).match;
            if ("" === n.def && (n = D(e).match), null != n.fn) return n.fn;
            if (!0 !== t && e > -1) {
                var i = G(e);
                return i.length > 1 + ("" === i[i.length - 1].match.def ? 1 : 0)
            }
            return !1
        }

        function q(e, t) {
            for (var n = e + 1;
                "" !== D(n).match.def && (!0 === t && (!0 !== D(n).match.newBlockMarker || !H(n)) || !0 !== t && !H(n));) n++;
            return n
        }

        function U(e, t) {
            var n, i = e;
            if (i <= 0) return 0;
            for (; --i > 0 && (!0 === t && !0 !== D(i).match.newBlockMarker || !0 !== t && !H(i) && ((n = G(i)).length < 2 || 2 === n.length && "" === n[1].match.def)););
            return i
        }

        function Q(t, n, a, r, o) {
            if (r && e.isFunction(c.onBeforeWrite)) {
                var s = c.onBeforeWrite.call(k, r, n, a, c);
                if (s) {
                    if (s.refreshFromBuffer) {
                        var l = s.refreshFromBuffer;
                        I(!0 === l ? l : l.start, l.end, s.buffer || n), n = L(!0)
                    }
                    a !== i && (a = s.caret !== i ? s.caret : a)
                }
            }
            if (t !== i && (t.inputmask._valueSet(n.join("")), a === i || r !== i && "blur" === r.type ? oe(t, a, 0 === n.length) : ee(t, a), !0 === o)) {
                var u = e(t),
                    f = t.inputmask._valueGet();
                E = !0, u.trigger("input"), setTimeout(function () {
                    f === B().join("") ? u.trigger("cleared") : !0 === ie(n) && u.trigger("complete")
                }, 0)
            }
        }

        function W(t, n, a) {
            if ((n = n || D(t).match).placeholder !== i || !0 === a) return e.isFunction(n.placeholder) ? n.placeholder(c) : n.placeholder;
            if (null === n.fn) {
                if (t > -1 && _().validPositions[t] === i) {
                    var r, o = G(t),
                        s = [];
                    if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0))
                        for (var l = 0; l < o.length; l++)
                            if (!0 !== o[l].match.optionality && !0 !== o[l].match.optionalQuantifier && (null === o[l].match.fn || r === i || !1 !== o[l].match.fn.test(r.match.def, _(), t, !0, c)) && (s.push(o[l]), null === o[l].match.fn && (r = o[l]), s.length > 1 && /[0-9a-bA-Z]/.test(s[0].match.def))) return c.placeholder.charAt(t % c.placeholder.length)
                }
                return n.def
            }
            return c.placeholder.charAt(t % c.placeholder.length)
        }
        var $, z = {
                on: function (t, n, a) {
                    var u = function (t) {
                        var n = this;
                        if (n.inputmask === i && "FORM" !== this.nodeName) {
                            var u = e.data(n, "_inputmask_opts");
                            u ? new l(u).mask(n) : z.off(n)
                        } else {
                            if ("setvalue" === t.type || "FORM" === this.nodeName || !(n.disabled || n.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === c.tabThrough && t.keyCode === l.keyCode.TAB))) {
                                switch (t.type) {
                                    case "input":
                                        if (!0 === E) return E = !1, t.preventDefault();
                                        if (r) {
                                            var f = arguments;
                                            return setTimeout(function () {
                                                a.apply(n, f), ee(n, n.inputmask.caretPos, i, !0)
                                            }, 0), !1
                                        }
                                        break;
                                    case "keydown":
                                        y = !1, E = !1;
                                        break;
                                    case "keypress":
                                        if (!0 === y) return t.preventDefault();
                                        y = !0;
                                        break;
                                    case "click":
                                        if (o || s) {
                                            f = arguments;
                                            return setTimeout(function () {
                                                a.apply(n, f)
                                            }, 0), !1
                                        }
                                }
                                var p = a.apply(n, arguments);
                                return !1 === p && (t.preventDefault(), t.stopPropagation()), p
                            }
                            t.preventDefault()
                        }
                    };
                    t.inputmask.events[n] = t.inputmask.events[n] || [], t.inputmask.events[n].push(u), -1 !== e.inArray(n, ["submit", "reset"]) ? null !== t.form && e(t.form).on(n, u) : e(t).on(n, u)
                },
                off: function (t, n) {
                    var i;
                    t.inputmask && t.inputmask.events && (n ? (i = [])[n] = t.inputmask.events[n] : i = t.inputmask.events, e.each(i, function (n, i) {
                        for (; i.length > 0;) {
                            var a = i.pop(); - 1 !== e.inArray(n, ["submit", "reset"]) ? null !== t.form && e(t.form).off(n, a) : e(t).off(n, a)
                        }
                        delete t.inputmask.events[n]
                    }))
                }
            },
            X = {
                keydownEvent: function (t) {
                    var n = this,
                        i = e(n),
                        a = t.keyCode,
                        r = ee(n);
                    if (a === l.keyCode.BACKSPACE || a === l.keyCode.DELETE || s && a === l.keyCode.BACKSPACE_SAFARI || t.ctrlKey && a === l.keyCode.X && !f("cut")) t.preventDefault(), ae(n, a, r), Q(n, L(!0), _().p, t, n.inputmask._valueGet() !== L().join(""));
                    else if (a === l.keyCode.END || a === l.keyCode.PAGE_DOWN) {
                        t.preventDefault();
                        var o = q(w());
                        c.insertMode || o !== _().maskLength || t.shiftKey || o--, ee(n, t.shiftKey ? r.begin : o, o, !0)
                    } else a === l.keyCode.HOME && !t.shiftKey || a === l.keyCode.PAGE_UP ? (t.preventDefault(), ee(n, 0, t.shiftKey ? r.begin : 0, !0)) : (c.undoOnEscape && a === l.keyCode.ESCAPE || 90 === a && t.ctrlKey) && !0 !== t.altKey ? (Z(n, !0, !1, h.split("")), i.trigger("click")) : a !== l.keyCode.INSERT || t.shiftKey || t.ctrlKey ? !0 === c.tabThrough && a === l.keyCode.TAB ? (!0 === t.shiftKey ? (null === D(r.begin).match.fn && (r.begin = q(r.begin)), r.end = U(r.begin, !0), r.begin = U(r.end, !0)) : (r.begin = q(r.begin, !0), r.end = q(r.begin, !0), r.end < _().maskLength && r.end--), r.begin < _().maskLength && (t.preventDefault(), ee(n, r.begin, r.end))) : t.shiftKey || !1 === c.insertMode && (a === l.keyCode.RIGHT ? setTimeout(function () {
                        var e = ee(n);
                        ee(n, e.begin)
                    }, 0) : a === l.keyCode.LEFT && setTimeout(function () {
                        var e = ee(n);
                        ee(n, b ? e.begin + 1 : e.begin - 1)
                    }, 0)) : (c.insertMode = !c.insertMode, ee(n, c.insertMode || r.begin !== _().maskLength ? r.begin : r.begin - 1));
                    c.onKeyDown.call(this, t, L(), ee(n).begin, c), C = -1 !== e.inArray(a, c.ignorables)
                },
                keypressEvent: function (t, n, a, r, o) {
                    var s = this,
                        u = e(s),
                        f = t.which || t.charCode || t.keyCode;
                    if (!(!0 === n || t.ctrlKey && t.altKey) && (t.ctrlKey || t.metaKey || C)) return f === l.keyCode.ENTER && h !== L().join("") && (h = L().join(""), setTimeout(function () {
                        u.trigger("change")
                    }, 0)), !0;
                    if (f) {
                        46 === f && !1 === t.shiftKey && "" !== c.radixPoint && (f = c.radixPoint.charCodeAt(0));
                        var p, m = n ? {
                                begin: o,
                                end: o
                            } : ee(s),
                            d = String.fromCharCode(f),
                            v = 0;
                        if (c._radixDance && c.numericInput) {
                            var k = L().indexOf(c.radixPoint.charAt(0)) + 1;
                            m.begin <= k && (f === c.radixPoint.charCodeAt(0) && (v = 1), m.begin -= 1, m.end -= 1)
                        }
                        _().writeOutBuffer = !0;
                        var g = R(m, d, r);
                        if (!1 !== g && (A(!0), p = g.caret !== i ? g.caret : q(g.pos.begin ? g.pos.begin : g.pos), _().p = p), p = (c.numericInput && g.caret === i ? U(p) : p) + v, !1 !== a && (setTimeout(function () {
                                c.onKeyValidation.call(s, f, g, c)
                            }, 0), _().writeOutBuffer && !1 !== g)) {
                            var b = L();
                            Q(s, b, p, t, !0 !== n)
                        }
                        if (t.preventDefault(), n) return !1 !== g && (g.forwardPosition = p), g
                    }
                },
                pasteEvent: function (n) {
                    var i, a = this,
                        r = n.originalEvent || n,
                        o = (e(a), a.inputmask._valueGet(!0)),
                        s = ee(a);
                    b && (i = s.end, s.end = s.begin, s.begin = i);
                    var l = o.substr(0, s.begin),
                        u = o.substr(s.end, o.length);
                    if (l === (b ? B().reverse() : B()).slice(0, s.begin).join("") && (l = ""), u === (b ? B().reverse() : B()).slice(s.end).join("") && (u = ""), b && (i = l, l = u, u = i), t.clipboardData && t.clipboardData.getData) o = l + t.clipboardData.getData("Text") + u;
                    else {
                        if (!r.clipboardData || !r.clipboardData.getData) return !0;
                        o = l + r.clipboardData.getData("text/plain") + u
                    }
                    var f = o;
                    if (e.isFunction(c.onBeforePaste)) {
                        if (!1 === (f = c.onBeforePaste.call(k, o, c))) return n.preventDefault();
                        f || (f = o)
                    }
                    return Z(a, !1, !1, b ? f.split("").reverse() : f.toString().split("")), Q(a, L(), q(w()), n, h !== L().join("")), n.preventDefault()
                },
                inputFallBackEvent: function (t) {
                    var n, i, a = this,
                        r = a.inputmask._valueGet();
                    if (L().join("") !== r) {
                        var s = ee(a);
                        if (i = s, "." === (n = r).charAt(i.begin - 1) && "" !== c.radixPoint && ((n = n.split(""))[i.begin - 1] = c.radixPoint.charAt(0), n = n.join("")), r = function (e, t, n) {
                                if (o) {
                                    var i = t.replace(L().join(""), "");
                                    if (1 === i.length) {
                                        var a = t.split("");
                                        a.splice(n.begin, 0, i), t = a.join("")
                                    }
                                }
                                return t
                            }(0, r = n, s), L().join("") !== r) {
                            var u = L().join(""),
                                f = !c.numericInput && r.length > u.length ? -1 : 0,
                                p = r.substr(0, s.begin),
                                h = r.substr(s.begin),
                                m = u.substr(0, s.begin + f),
                                d = u.substr(s.begin + f),
                                v = s,
                                k = "",
                                g = !1;
                            if (p !== m) {
                                for (var b = (g = p.length >= m.length) ? p.length : m.length, y = 0; p.charAt(y) === m.charAt(y) && y < b; y++);
                                g && (0 === f && (v.begin = y), k += p.slice(y, v.end))
                            }
                            if (h !== d && (h.length > d.length ? k += h.slice(0, 1) : h.length < d.length && (v.end += d.length - h.length, g || "" === c.radixPoint || "" !== h || p.charAt(v.begin + f - 1) !== c.radixPoint || (v.begin--, k = c.radixPoint))), Q(a, L(), {
                                    begin: v.begin + f,
                                    end: v.end + f
                                }), k.length > 0) e.each(k.split(""), function (t, n) {
                                var i = new e.Event("keypress");
                                i.which = n.charCodeAt(0), C = !1, X.keypressEvent.call(a, i)
                            });
                            else {
                                v.begin === v.end - 1 && (v.begin = U(v.begin + 1), v.begin === v.end - 1 ? ee(a, v.begin) : ee(a, v.begin, v.end));
                                var E = new e.Event("keydown");
                                E.keyCode = c.numericInput ? l.keyCode.BACKSPACE : l.keyCode.DELETE, X.keydownEvent.call(a, E), !1 === c.insertMode && ee(a, ee(a).begin - 1)
                            }
                            t.preventDefault()
                        }
                    }
                },
                beforeInputEvent: function (t) {
                    if (t.cancelable) {
                        var n = this;
                        switch (t.inputType) {
                            case "insertText":
                                return e.each(t.data.split(""), function (t, i) {
                                    var a = new e.Event("keypress");
                                    a.which = i.charCodeAt(0), C = !1, X.keypressEvent.call(n, a)
                                }), t.preventDefault();
                            case "deleteContentBackward":
                                return (i = new e.Event("keydown")).keyCode = l.keyCode.BACKSPACE, X.keydownEvent.call(n, i), t.preventDefault();
                            case "deleteContentForward":
                                var i;
                                return (i = new e.Event("keydown")).keyCode = l.keyCode.DELETE, X.keydownEvent.call(n, i), t.preventDefault()
                        }
                    }
                },
                setValueEvent: function (t) {
                    this.inputmask.refreshValue = !1;
                    var n = (n = t && t.detail ? t.detail[0] : arguments[1]) || this.inputmask._valueGet(!0);
                    e.isFunction(c.onBeforeMask) && (n = c.onBeforeMask.call(k, n, c) || n), n = n.split(""), Z(this, !0, !1, b ? n.reverse() : n), h = L().join(""), (c.clearMaskOnLostFocus || c.clearIncomplete) && this.inputmask._valueGet() === B().join("") && this.inputmask._valueSet("")
                },
                focusEvent: function (e) {
                    var t = this,
                        n = t.inputmask._valueGet();
                    c.showMaskOnFocus && (!c.showMaskOnHover || c.showMaskOnHover && "" === n) && (t.inputmask._valueGet() !== L().join("") ? Q(t, L(), q(w())) : !1 === P && ee(t, q(w()))), !0 === c.positionCaretOnTab && !1 === P && X.clickEvent.apply(t, [e, !0]), h = L().join("")
                },
                mouseleaveEvent: function (e) {
                    if (P = !1, c.clearMaskOnLostFocus && n.activeElement !== this) {
                        var t = L().slice(),
                            i = this.inputmask._valueGet();
                        i !== this.getAttribute("placeholder") && "" !== i && (-1 === w() && i === B().join("") ? t = [] : ne(t), Q(this, t))
                    }
                },
                clickEvent: function (t, a) {
                    var r = this;
                    setTimeout(function () {
                        if (n.activeElement === r) {
                            var t = ee(r);
                            if (a && (b ? t.end = t.begin : t.begin = t.end), t.begin === t.end) switch (c.positionCaretOnClick) {
                                case "none":
                                    break;
                                case "select":
                                    ee(r, 0, L().length);
                                    break;
                                case "radixFocus":
                                    if (function (t) {
                                            if ("" !== c.radixPoint) {
                                                var n = _().validPositions;
                                                if (n[t] === i || n[t].input === W(t)) {
                                                    if (t < q(-1)) return !0;
                                                    var a = e.inArray(c.radixPoint, L());
                                                    if (-1 !== a) {
                                                        for (var r in n)
                                                            if (a < r && n[r].input !== W(r)) return !1;
                                                        return !0
                                                    }
                                                }
                                            }
                                            return !1
                                        }(t.begin)) {
                                        var o = L().join("").indexOf(c.radixPoint);
                                        ee(r, c.numericInput ? q(o) : o);
                                        break
                                    }
                                case "ignore":
                                    ee(r, q(w()));
                                    break;
                                default:
                                    var s = t.begin,
                                        l = w(s, !0),
                                        u = q(l);
                                    if (s < u) ee(r, H(s, !0) || H(s - 1, !0) ? s : q(s));
                                    else {
                                        var f = _().validPositions[l],
                                            p = j(u, f ? f.match.locator : i, f),
                                            h = W(u, p.match);
                                        if ("" !== h && L()[u] !== h && !0 !== p.match.optionalQuantifier && !0 !== p.match.newBlockMarker || !H(u, c.keepStatic) && p.match.def === h) {
                                            var m = q(u);
                                            (s >= m || s === u) && (u = m)
                                        }
                                        ee(r, u)
                                    }
                            }
                        }
                    }, 0)
                },
                dblclickEvent: function (e) {
                    var t = this;
                    setTimeout(function () {
                        ee(t, 0, q(w()))
                    }, 0)
                },
                cutEvent: function (i) {
                    e(this);
                    var a = ee(this),
                        r = i.originalEvent || i,
                        o = t.clipboardData || r.clipboardData,
                        s = b ? L().slice(a.end, a.begin) : L().slice(a.begin, a.end);
                    o.setData("text", b ? s.reverse().join("") : s.join("")), n.execCommand && n.execCommand("copy"), ae(this, l.keyCode.DELETE, a), Q(this, L(), _().p, i, h !== L().join(""))
                },
                blurEvent: function (t) {
                    var n = e(this);
                    if (this.inputmask) {
                        var a = this.inputmask._valueGet(),
                            r = L().slice();
                        "" === a && v === i || (c.clearMaskOnLostFocus && (-1 === w() && a === B().join("") ? r = [] : ne(r)), !1 === ie(r) && (setTimeout(function () {
                            n.trigger("incomplete")
                        }, 0), c.clearIncomplete && (A(), r = c.clearMaskOnLostFocus ? [] : B().slice())), Q(this, r, i, t)), h !== L().join("") && (h = r.join(""), n.trigger("change"))
                    }
                },
                mouseenterEvent: function (e) {
                    P = !0, n.activeElement !== this && c.showMaskOnHover && this.inputmask._valueGet() !== L().join("") && Q(this, L())
                },
                submitEvent: function (e) {
                    h !== L().join("") && m.trigger("change"), c.clearMaskOnLostFocus && -1 === w() && g.inputmask._valueGet && g.inputmask._valueGet() === B().join("") && g.inputmask._valueSet(""), c.clearIncomplete && !1 === ie(L()) && g.inputmask._valueSet(""), c.removeMaskOnSubmit && (g.inputmask._valueSet(g.inputmask.unmaskedvalue(), !0), setTimeout(function () {
                        Q(g, L())
                    }, 0))
                },
                resetEvent: function (e) {
                    g.inputmask.refreshValue = !0, setTimeout(function () {
                        m.trigger("setvalue")
                    }, 0)
                }
            };

        function Z(t, n, a, r, o) {
            var s = r.slice(),
                u = "",
                f = -1,
                p = i;
            if (A(), a || !0 === c.autoUnmask) f = q(f);
            else {
                var h = B().slice(0, q(-1)).join(""),
                    m = s.join("").match(new RegExp("^" + l.escapeRegex(h), "g"));
                m && m.length > 0 && (s.splice(0, m.length * h.length), f = q(f))
            } - 1 === f ? (_().p = q(f), f = 0) : _().p = f, e.each(s, function (n, r) {
                if (r !== i)
                    if (_().validPositions[n] === i && s[n] === W(n) && H(n, !0) && !1 === R(n, s[n], !0, i, i, !0)) _().p++;
                    else {
                        var o = new e.Event("_checkval");
                        o.which = r.charCodeAt(0), u += r;
                        var l = w(i, !0),
                            h = D(l),
                            m = j(l + 1, h ? h.locator.slice() : i, l);
                        if (v = f, k = u, -1 === x(!0, 0, !1).slice(v, q(v)).join("").indexOf(k) || H(v) || D(v).match.nativeDef !== k.charAt(0) && (" " !== D(v).match.nativeDef || D(v + 1).match.nativeDef !== k.charAt(0)) || a || c.autoUnmask) {
                            var d = a ? n : null == m.match.fn && m.match.optionality && l + 1 < _().p ? l + 1 : _().p;
                            (p = X.keypressEvent.call(t, o, !0, !1, a, d)) && (f = d + 1, u = "")
                        } else p = X.keypressEvent.call(t, o, !0, !1, !0, l + 1);
                        Q(i, L(), p.forwardPosition, o, !1)
                    } var v, k
            }), n && Q(t, L(), p ? p.forwardPosition : i, o || new e.Event("checkval"), o && "input" === o.type)
        }

        function J(t) {
            if (t) {
                if (t.inputmask === i) return t.value;
                t.inputmask && t.inputmask.refreshValue && X.setValueEvent.call(t)
            }
            var n = [],
                a = _().validPositions;
            for (var r in a) a[r].match && null != a[r].match.fn && n.push(a[r].input);
            var o = 0 === n.length ? "" : (b ? n.reverse() : n).join("");
            if (e.isFunction(c.onUnMask)) {
                var s = (b ? L().slice().reverse() : L()).join("");
                o = c.onUnMask.call(k, s, o, c)
            }
            return o
        }

        function Y(e) {
            return !b || "number" != typeof e || c.greedy && "" === c.placeholder || (e = g.inputmask._valueGet().length - e), e
        }

        function ee(a, r, o, l) {
            var u;
            if (r === i) return a.setSelectionRange ? (r = a.selectionStart, o = a.selectionEnd) : t.getSelection ? (u = t.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== a && u.commonAncestorContainer !== a || (r = u.startOffset, o = u.endOffset) : n.selection && n.selection.createRange && (o = (r = 0 - (u = n.selection.createRange()).duplicate().moveStart("character", -a.inputmask._valueGet().length)) + u.text.length), {
                begin: l ? r : Y(r),
                end: l ? o : Y(o)
            };
            if (e.isArray(r) && (o = b ? r[0] : r[1], r = b ? r[1] : r[0]), r.begin !== i && (o = b ? r.begin : r.end, r = b ? r.end : r.begin), "number" == typeof r) {
                r = l ? r : Y(r), o = "number" == typeof (o = l ? o : Y(o)) ? o : r;
                var f = parseInt(((a.ownerDocument.defaultView || t).getComputedStyle ? (a.ownerDocument.defaultView || t).getComputedStyle(a, null) : a.currentStyle).fontSize) * o;
                if (a.scrollLeft = f > a.scrollWidth ? f : 0, s || !1 !== c.insertMode || r !== o || o++, a.inputmask.caretPos = {
                        begin: r,
                        end: o
                    }, a.setSelectionRange) a.selectionStart = r, a.selectionEnd = o;
                else if (t.getSelection) {
                    if (u = n.createRange(), a.firstChild === i || null === a.firstChild) {
                        var p = n.createTextNode("");
                        a.appendChild(p)
                    }
                    u.setStart(a.firstChild, r < a.inputmask._valueGet().length ? r : a.inputmask._valueGet().length), u.setEnd(a.firstChild, o < a.inputmask._valueGet().length ? o : a.inputmask._valueGet().length), u.collapse(!0);
                    var h = t.getSelection();
                    h.removeAllRanges(), h.addRange(u)
                } else a.createTextRange && ((u = a.createTextRange()).collapse(!0), u.moveEnd("character", o), u.moveStart("character", r), u.select());
                oe(a, {
                    begin: r,
                    end: o
                })
            }
        }

        function te(t) {
            var n, a, r = x(!0, w(), !0, !0),
                o = r.length,
                s = w(),
                l = {},
                u = _().validPositions[s],
                c = u !== i ? u.locator.slice() : i;
            for (n = s + 1; n < r.length; n++) c = (a = j(n, c, n - 1)).locator.slice(), l[n] = e.extend(!0, {}, a);
            var f = u && u.alternation !== i ? u.locator[u.alternation] : i;
            for (n = o - 1; n > s && (((a = l[n]).match.optionality || a.match.optionalQuantifier && a.match.newBlockMarker || f && (f !== l[n].locator[u.alternation] && null != a.match.fn || null === a.match.fn && a.locator[u.alternation] && F(a.locator[u.alternation].toString().split(","), f.toString().split(",")) && "" !== G(n)[0].def)) && r[n] === W(n, a.match)); n--) o--;
            return t ? {
                l: o,
                def: l[o] ? l[o].match : i
            } : o
        }

        function ne(e) {
            e.length = 0;
            for (var t, n = x(!0, 0, !0, i, !0);
                (t = n.shift()) !== i;) e.push(t);
            return e
        }

        function ie(t) {
            if (e.isFunction(c.isComplete)) return c.isComplete(t, c);
            if ("*" === c.repeat) return i;
            var n = !1,
                a = te(!0),
                r = U(a.l);
            if (a.def === i || a.def.newBlockMarker || a.def.optionality || a.def.optionalQuantifier) {
                n = !0;
                for (var o = 0; o <= r; o++) {
                    var s = j(o).match;
                    if (null !== s.fn && _().validPositions[o] === i && !0 !== s.optionality && !0 !== s.optionalQuantifier || null === s.fn && t[o] !== W(o, s)) {
                        n = !1;
                        break
                    }
                }
            }
            return n
        }

        function ae(e, t, n, a, r) {
            if ((c.numericInput || b) && (t === l.keyCode.BACKSPACE ? t = l.keyCode.DELETE : t === l.keyCode.DELETE && (t = l.keyCode.BACKSPACE), b)) {
                var o = n.end;
                n.end = n.begin, n.begin = o
            }
            if (t === l.keyCode.BACKSPACE && (n.end - n.begin < 1 || !1 === c.insertMode) ? (n.begin = U(n.begin), _().validPositions[n.begin] !== i && _().validPositions[n.begin].input === c.groupSeparator && n.begin--, !1 === c.insertMode && n.end !== _().maskLength && n.end--) : t === l.keyCode.DELETE && n.begin === n.end && (n.end = H(n.end, !0) && _().validPositions[n.end] && _().validPositions[n.end].input !== c.radixPoint ? n.end + 1 : q(n.end) + 1, _().validPositions[n.begin] !== i && _().validPositions[n.begin].input === c.groupSeparator && n.end++), V(n), !0 !== a && !1 !== c.keepStatic || null !== c.regex) {
                var s = N(!0);
                if (s) {
                    var u = s.caret !== i ? s.caret : s.pos ? q(s.pos.begin ? s.pos.begin : s.pos) : w(-1, !0);
                    (t !== l.keyCode.DELETE || n.begin > u) && n.begin
                }
            }
            var f = w(n.begin, !0);
            if (f < n.begin || -1 === n.begin) _().p = q(f);
            else if (!0 !== a && (_().p = n.begin, !0 !== r))
                for (; _().p < f && _().validPositions[_().p] === i;) _().p++
        }

        function re(i) {
            var a = (i.ownerDocument.defaultView || t).getComputedStyle(i, null);
            var r = n.createElement("div");
            r.style.width = a.width, r.style.textAlign = a.textAlign, v = n.createElement("div"), i.inputmask.colorMask = v, v.className = "im-colormask", i.parentNode.insertBefore(v, i), i.parentNode.removeChild(i), v.appendChild(i), v.appendChild(r), i.style.left = r.offsetLeft + "px", e(v).on("mouseleave", function (e) {
                return X.mouseleaveEvent.call(i, [e])
            }), e(v).on("mouseenter", function (e) {
                return X.mouseenterEvent.call(i, [e])
            }), e(v).on("click", function (e) {
                return ee(i, function (e) {
                    var t, r = n.createElement("span");
                    for (var o in a) isNaN(o) && -1 !== o.indexOf("font") && (r.style[o] = a[o]);
                    r.style.textTransform = a.textTransform, r.style.letterSpacing = a.letterSpacing, r.style.position = "absolute", r.style.height = "auto", r.style.width = "auto", r.style.visibility = "hidden", r.style.whiteSpace = "nowrap", n.body.appendChild(r);
                    var s, l = i.inputmask._valueGet(),
                        u = 0;
                    for (t = 0, s = l.length; t <= s; t++) {
                        if (r.innerHTML += l.charAt(t) || "_", r.offsetWidth >= e) {
                            var c = e - u,
                                f = r.offsetWidth - e;
                            r.innerHTML = l.charAt(t), t = (c -= r.offsetWidth / 3) < f ? t - 1 : t;
                            break
                        }
                        u = r.offsetWidth
                    }
                    return n.body.removeChild(r), t
                }(e.clientX)), X.clickEvent.call(i, [e])
            }), e(i).on("keydown", function (e) {
                e.shiftKey || !1 === c.insertMode || setTimeout(function () {
                    oe(i)
                }, 0)
            })
        }

        function oe(e, t, a) {
            var r, o, s, l = [],
                u = !1,
                f = 0;

            function p(e) {
                if (e === i && (e = ""), u || null !== r.fn && o.input !== i)
                    if (u && (null !== r.fn && o.input !== i || "" === r.def)) {
                        u = !1;
                        var t = l.length;
                        l[t - 1] = l[t - 1] + "</span>", l.push(e)
                    } else l.push(e);
                else u = !0, l.push("<span class='im-static'>" + e)
            }
            if (v !== i) {
                var h = L();
                if (t === i ? t = ee(e) : t.begin === i && (t = {
                        begin: t,
                        end: t
                    }), !0 !== a) {
                    var m = w();
                    do {
                        _().validPositions[f] ? (o = _().validPositions[f], r = o.match, s = o.locator.slice(), p(h[f])) : (o = j(f, s, f - 1), r = o.match, s = o.locator.slice(), !1 === c.jitMasking || f < m || "number" == typeof c.jitMasking && isFinite(c.jitMasking) && c.jitMasking > f ? p(W(f, r)) : u = !1), f++
                    } while ((d === i || f < d) && (null !== r.fn || "" !== r.def) || m > f || u);
                    u && p(), n.activeElement === e && (l.splice(t.begin, 0, t.begin === t.end || t.end > _().maskLength ? '<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">' : '<mark class="im-caret-select">'), l.splice(t.end + 1, 0, "</mark>"))
                }
                var k = v.getElementsByTagName("div")[0];
                k.innerHTML = l.join(""), e.inputmask.positionColorMask(e, k)
            }
        }
        if (l.prototype.positionColorMask = function (e, t) {
                e.style.left = t.offsetLeft + "px"
            }, a !== i) switch (a.action) {
            case "isComplete":
                return g = a.el, ie(L());
            case "unmaskedvalue":
                return g !== i && a.value === i || ($ = a.value, $ = (e.isFunction(c.onBeforeMask) && c.onBeforeMask.call(k, $, c) || $).split(""), Z(i, !1, !1, b ? $.reverse() : $), e.isFunction(c.onBeforeWrite) && c.onBeforeWrite.call(k, i, L(), 0, c)), J(g);
            case "mask":
                ! function (t) {
                    z.off(t);
                    var a = function (t, a) {
                        var r = t.getAttribute("type"),
                            o = "INPUT" === t.tagName && -1 !== e.inArray(r, a.supportsInputType) || t.isContentEditable || "TEXTAREA" === t.tagName;
                        if (!o)
                            if ("INPUT" === t.tagName) {
                                var s = n.createElement("input");
                                s.setAttribute("type", r), o = "text" === s.type, s = null
                            } else o = "partial";
                        return !1 !== o ? function (t) {
                            var r, o, s;

                            function l() {
                                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== w() || !0 !== a.nullable ? n.activeElement === this && a.clearMaskOnLostFocus ? (b ? ne(L().slice()).reverse() : ne(L().slice())).join("") : r.call(this) : "" : r.call(this)
                            }

                            function u(t) {
                                o.call(this, t), this.inputmask && e(this).trigger("setvalue", [t])
                            }
                            if (!t.inputmask.__valueGet) {
                                if (!0 !== a.noValuePatching) {
                                    if (Object.getOwnPropertyDescriptor) {
                                        "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function (e) {
                                            return e.__proto__
                                        } : function (e) {
                                            return e.constructor.prototype
                                        });
                                        var c = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : i;
                                        c && c.get && c.set ? (r = c.get, o = c.set, Object.defineProperty(t, "value", {
                                            get: l,
                                            set: u,
                                            configurable: !0
                                        })) : "INPUT" !== t.tagName && (r = function () {
                                            return this.textContent
                                        }, o = function (e) {
                                            this.textContent = e
                                        }, Object.defineProperty(t, "value", {
                                            get: l,
                                            set: u,
                                            configurable: !0
                                        }))
                                    } else n.__lookupGetter__ && t.__lookupGetter__("value") && (r = t.__lookupGetter__("value"), o = t.__lookupSetter__("value"), t.__defineGetter__("value", l), t.__defineSetter__("value", u));
                                    t.inputmask.__valueGet = r, t.inputmask.__valueSet = o
                                }
                                t.inputmask._valueGet = function (e) {
                                    return b && !0 !== e ? r.call(this.el).split("").reverse().join("") : r.call(this.el)
                                }, t.inputmask._valueSet = function (e, t) {
                                    o.call(this.el, null === e || e === i ? "" : !0 !== t && b ? e.split("").reverse().join("") : e)
                                }, r === i && (r = function () {
                                    return this.value
                                }, o = function (e) {
                                    this.value = e
                                }, function (t) {
                                    if (e.valHooks && (e.valHooks[t] === i || !0 !== e.valHooks[t].inputmaskpatch)) {
                                        var n = e.valHooks[t] && e.valHooks[t].get ? e.valHooks[t].get : function (e) {
                                                return e.value
                                            },
                                            r = e.valHooks[t] && e.valHooks[t].set ? e.valHooks[t].set : function (e, t) {
                                                return e.value = t, e
                                            };
                                        e.valHooks[t] = {
                                            get: function (e) {
                                                if (e.inputmask) {
                                                    if (e.inputmask.opts.autoUnmask) return e.inputmask.unmaskedvalue();
                                                    var t = n(e);
                                                    return -1 !== w(i, i, e.inputmask.maskset.validPositions) || !0 !== a.nullable ? t : ""
                                                }
                                                return n(e)
                                            },
                                            set: function (t, n) {
                                                var i, a = e(t);
                                                return i = r(t, n), t.inputmask && a.trigger("setvalue", [n]), i
                                            },
                                            inputmaskpatch: !0
                                        }
                                    }
                                }(t.type), s = t, z.on(s, "mouseenter", function (t) {
                                    var n = e(this);
                                    this.inputmask._valueGet() !== L().join("") && n.trigger("setvalue")
                                }))
                            }
                        }(t) : t.inputmask = i, o
                    }(t, c);
                    if (!1 !== a && (m = e(g = t), -1 === (d = g !== i ? g.maxLength : i) && (d = i), !0 === c.colorMask && re(g), r && ("inputmode" in g && (g.inputmode = c.inputmode, g.setAttribute("inputmode", c.inputmode)), !0 === c.disablePredictiveText && ("autocorrect" in g ? g.autocorrect = !1 : (!0 !== c.colorMask && re(g), g.type = "password"))), !0 === a && (z.on(g, "submit", X.submitEvent), z.on(g, "reset", X.resetEvent), z.on(g, "blur", X.blurEvent), z.on(g, "focus", X.focusEvent), !0 !== c.colorMask && (z.on(g, "click", X.clickEvent), z.on(g, "mouseleave", X.mouseleaveEvent), z.on(g, "mouseenter", X.mouseenterEvent)), z.on(g, "dblclick", X.dblclickEvent), z.on(g, "paste", X.pasteEvent), z.on(g, "dragdrop", X.pasteEvent), z.on(g, "drop", X.pasteEvent), z.on(g, "cut", X.cutEvent), z.on(g, "complete", c.oncomplete), z.on(g, "incomplete", c.onincomplete), z.on(g, "cleared", c.oncleared), r || !0 === c.inputEventOnly ? g.removeAttribute("maxLength") : (z.on(g, "keydown", X.keydownEvent), z.on(g, "keypress", X.keypressEvent)), z.on(g, "compositionstart", e.noop), z.on(g, "compositionupdate", e.noop), z.on(g, "compositionend", e.noop), z.on(g, "keyup", e.noop), z.on(g, "input", X.inputFallBackEvent), z.on(g, "beforeinput", X.beforeInputEvent)), z.on(g, "setvalue", X.setValueEvent), h = B().join(""), "" !== g.inputmask._valueGet(!0) || !1 === c.clearMaskOnLostFocus || n.activeElement === g)) {
                        var o = e.isFunction(c.onBeforeMask) && c.onBeforeMask.call(k, g.inputmask._valueGet(!0), c) || g.inputmask._valueGet(!0);
                        "" !== o && Z(g, !0, !1, b ? o.split("").reverse() : o.split(""));
                        var s = L().slice();
                        h = s.join(""), !1 === ie(s) && c.clearIncomplete && A(), c.clearMaskOnLostFocus && n.activeElement !== g && (-1 === w() ? s = [] : ne(s)), (!1 === c.clearMaskOnLostFocus || c.showMaskOnFocus && n.activeElement === g || "" !== g.inputmask._valueGet(!0)) && Q(g, s), n.activeElement === g && ee(g, q(w()))
                    }
                }(g);
                break;
            case "format":
                return $ = (e.isFunction(c.onBeforeMask) && c.onBeforeMask.call(k, a.value, c) || a.value).split(""), Z(i, !0, !1, b ? $.reverse() : $), a.metadata ? {
                    value: b ? L().slice().reverse().join("") : L().join(""),
                    metadata: p.call(this, {
                        action: "getmetadata"
                    }, u, c)
                } : b ? L().slice().reverse().join("") : L().join("");
            case "isValid":
                a.value ? ($ = a.value.split(""), Z(i, !0, !0, b ? $.reverse() : $)) : a.value = L().join("");
                for (var se = L(), le = te(), ue = se.length - 1; ue > le && !H(ue); ue--);
                return se.splice(le, ue + 1 - le), ie(se) && a.value === L().join("");
            case "getemptymask":
                return B().join("");
            case "remove":
                if (g && g.inputmask) e.data(g, "_inputmask_opts", null), m = e(g), g.inputmask._valueSet(c.autoUnmask ? J(g) : g.inputmask._valueGet(!0)), z.off(g), g.inputmask.colorMask && ((v = g.inputmask.colorMask).removeChild(g), v.parentNode.insertBefore(g, v), v.parentNode.removeChild(v)), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(g), "value") && g.inputmask.__valueGet && Object.defineProperty(g, "value", {
                    get: g.inputmask.__valueGet,
                    set: g.inputmask.__valueSet,
                    configurable: !0
                }) : n.__lookupGetter__ && g.__lookupGetter__("value") && g.inputmask.__valueGet && (g.__defineGetter__("value", g.inputmask.__valueGet), g.__defineSetter__("value", g.inputmask.__valueSet)), g.inputmask = i;
                return g;
            case "getmetadata":
                if (e.isArray(u.metadata)) {
                    var ce = x(!0, 0, !1).join("");
                    return e.each(u.metadata, function (e, t) {
                        if (t.mask === ce) return ce = t, !1
                    }), ce
                }
                return u.metadata
        }
    }
    return l.prototype = {
        dataAttribute: "data-inputmask",
        defaults: {
            placeholder: "_",
            optionalmarker: ["[", "]"],
            quantifiermarker: ["{", "}"],
            groupmarker: ["(", ")"],
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null,
            regex: null,
            oncomplete: e.noop,
            onincomplete: e.noop,
            oncleared: e.noop,
            repeat: 0,
            greedy: !1,
            autoUnmask: !1,
            removeMaskOnSubmit: !1,
            clearMaskOnLostFocus: !0,
            insertMode: !0,
            clearIncomplete: !1,
            alias: null,
            onKeyDown: e.noop,
            onBeforeMask: null,
            onBeforePaste: function (t, n) {
                return e.isFunction(n.onBeforeMask) ? n.onBeforeMask.call(this, t, n) : t
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: !0,
            showMaskOnHover: !0,
            onKeyValidation: e.noop,
            skipOptionalPartCharacter: " ",
            numericInput: !1,
            rightAlign: !1,
            undoOnEscape: !0,
            radixPoint: "",
            _radixDance: !1,
            groupSeparator: "",
            keepStatic: null,
            positionCaretOnTab: !0,
            tabThrough: !1,
            supportsInputType: ["text", "tel", "password", "search"],
            ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
            isComplete: null,
            preValidation: null,
            postValidation: null,
            staticDefinitionSymbol: i,
            jitMasking: !1,
            nullable: !0,
            inputEventOnly: !1,
            noValuePatching: !1,
            positionCaretOnClick: "lvp",
            casing: null,
            inputmode: "verbatim",
            colorMask: !1,
            disablePredictiveText: !1,
            importDataAttributes: !0
        },
        definitions: {
            9: {
                validator: "[0-9１-９]",
                definitionSymbol: "*"
            },
            a: {
                validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                definitionSymbol: "*"
            },
            "*": {
                validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ]"
            }
        },
        aliases: {},
        masksCache: {},
        mask: function (a) {
            var r = this;
            return "string" == typeof a && (a = n.getElementById(a) || n.querySelectorAll(a)), a = a.nodeName ? [a] : a, e.each(a, function (n, a) {
                var o = e.extend(!0, {}, r.opts);
                if (function (n, a, r, o) {
                        if (!0 === a.importDataAttributes) {
                            var s, l, c, f, p = n.getAttribute(o);

                            function h(e, a) {
                                null !== (a = a !== i ? a : n.getAttribute(o + "-" + e)) && ("string" == typeof a && (0 === e.indexOf("on") ? a = t[a] : "false" === a ? a = !1 : "true" === a && (a = !0)), r[e] = a)
                            }
                            if (p && "" !== p && (p = p.replace(/'/g, '"'), l = JSON.parse("{" + p + "}")), l)
                                for (f in c = i, l)
                                    if ("alias" === f.toLowerCase()) {
                                        c = l[f];
                                        break
                                    } for (s in h("alias", c), r.alias && u(r.alias, r, a), a) {
                                if (l)
                                    for (f in c = i, l)
                                        if (f.toLowerCase() === s.toLowerCase()) {
                                            c = l[f];
                                            break
                                        } h(s, c)
                            }
                        }
                        return e.extend(!0, a, r), ("rtl" === n.dir || a.rightAlign) && (n.style.textAlign = "right"), ("rtl" === n.dir || a.numericInput) && (n.dir = "ltr", n.removeAttribute("dir"), a.isRTL = !0), Object.keys(r).length
                    }(a, o, e.extend(!0, {}, r.userOptions), r.dataAttribute)) {
                    var s = c(o, r.noMasksCache);
                    s !== i && (a.inputmask !== i && (a.inputmask.opts.autoUnmask = !0, a.inputmask.remove()), a.inputmask = new l(i, i, !0), a.inputmask.opts = o, a.inputmask.noMasksCache = r.noMasksCache, a.inputmask.userOptions = e.extend(!0, {}, r.userOptions), a.inputmask.isRTL = o.isRTL || o.numericInput, a.inputmask.el = a, a.inputmask.maskset = s, e.data(a, "_inputmask_opts", o), p.call(a.inputmask, {
                        action: "mask"
                    }))
                }
            }), a && a[0] && a[0].inputmask || this
        },
        option: function (t, n) {
            return "string" == typeof t ? this.opts[t] : "object" == typeof t ? (e.extend(this.userOptions, t), this.el && !0 !== n && this.mask(this.el), this) : void 0
        },
        unmaskedvalue: function (e) {
            return this.maskset = this.maskset || c(this.opts, this.noMasksCache), p.call(this, {
                action: "unmaskedvalue",
                value: e
            })
        },
        remove: function () {
            return p.call(this, {
                action: "remove"
            })
        },
        getemptymask: function () {
            return this.maskset = this.maskset || c(this.opts, this.noMasksCache), p.call(this, {
                action: "getemptymask"
            })
        },
        hasMaskedValue: function () {
            return !this.opts.autoUnmask
        },
        isComplete: function () {
            return this.maskset = this.maskset || c(this.opts, this.noMasksCache), p.call(this, {
                action: "isComplete"
            })
        },
        getmetadata: function () {
            return this.maskset = this.maskset || c(this.opts, this.noMasksCache), p.call(this, {
                action: "getmetadata"
            })
        },
        isValid: function (e) {
            return this.maskset = this.maskset || c(this.opts, this.noMasksCache), p.call(this, {
                action: "isValid",
                value: e
            })
        },
        format: function (e, t) {
            return this.maskset = this.maskset || c(this.opts, this.noMasksCache), p.call(this, {
                action: "format",
                value: e,
                metadata: t
            })
        },
        setValue: function (t) {
            this.el && e(this.el).trigger("setvalue", [t])
        },
        analyseMask: function (t, n, a) {
            var r, o, s, u, c, f, p = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
                h = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                m = !1,
                d = new g,
                v = [],
                k = [];

            function g(e, t, n, i) {
                this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, this.isOptional = t || !1, this.isQuantifier = n || !1, this.isAlternator = i || !1, this.quantifier = {
                    min: 1,
                    max: 1
                }
            }

            function b(t, r, o) {
                o = o !== i ? o : t.matches.length;
                var s = t.matches[o - 1];
                if (n) 0 === r.indexOf("[") || m && /\\d|\\s|\\w]/i.test(r) || "." === r ? t.matches.splice(o++, 0, {
                    fn: new RegExp(r, a.casing ? "i" : ""),
                    optionality: !1,
                    newBlockMarker: s === i ? "master" : s.def !== r,
                    casing: null,
                    def: r,
                    placeholder: i,
                    nativeDef: r
                }) : (m && (r = r[r.length - 1]), e.each(r.split(""), function (e, n) {
                    s = t.matches[o - 1], t.matches.splice(o++, 0, {
                        fn: null,
                        optionality: !1,
                        newBlockMarker: s === i ? "master" : s.def !== n && null !== s.fn,
                        casing: null,
                        def: a.staticDefinitionSymbol || n,
                        placeholder: a.staticDefinitionSymbol !== i ? n : i,
                        nativeDef: (m ? "'" : "") + n
                    })
                })), m = !1;
                else {
                    var u = (a.definitions ? a.definitions[r] : i) || l.prototype.definitions[r];
                    u && !m ? t.matches.splice(o++, 0, {
                        fn: u.validator ? "string" == typeof u.validator ? new RegExp(u.validator, a.casing ? "i" : "") : new function () {
                            this.test = u.validator
                        } : new RegExp("."),
                        optionality: !1,
                        newBlockMarker: s === i ? "master" : s.def !== (u.definitionSymbol || r),
                        casing: u.casing,
                        def: u.definitionSymbol || r,
                        placeholder: u.placeholder,
                        nativeDef: r
                    }) : (t.matches.splice(o++, 0, {
                        fn: null,
                        optionality: !1,
                        newBlockMarker: s === i ? "master" : s.def !== r && null !== s.fn,
                        casing: null,
                        def: a.staticDefinitionSymbol || r,
                        placeholder: a.staticDefinitionSymbol !== i ? r : i,
                        nativeDef: (m ? "'" : "") + r
                    }), m = !1)
                }
            }

            function y() {
                if (v.length > 0) {
                    if (b(u = v[v.length - 1], o), u.isAlternator) {
                        c = v.pop();
                        for (var e = 0; e < c.matches.length; e++) c.matches[e].isGroup && (c.matches[e].isGroup = !1);
                        v.length > 0 ? (u = v[v.length - 1]).matches.push(c) : d.matches.push(c)
                    }
                } else b(d, o)
            }

            function E(e) {
                var t = new g(!0);
                return t.openGroup = !1, t.matches = e, t
            }
            for (n && (a.optionalmarker[0] = i, a.optionalmarker[1] = i); r = n ? h.exec(t) : p.exec(t);) {
                if (o = r[0], n) switch (o.charAt(0)) {
                    case "?":
                        o = "{0,1}";
                        break;
                    case "+":
                    case "*":
                        o = "{" + o + "}"
                }
                if (m) y();
                else switch (o.charAt(0)) {
                    case a.escapeChar:
                        m = !0, n && y();
                        break;
                    case a.optionalmarker[1]:
                    case a.groupmarker[1]:
                        if ((s = v.pop()).openGroup = !1, s !== i)
                            if (v.length > 0) {
                                if ((u = v[v.length - 1]).matches.push(s), u.isAlternator) {
                                    c = v.pop();
                                    for (var C = 0; C < c.matches.length; C++) c.matches[C].isGroup = !1, c.matches[C].alternatorGroup = !1;
                                    v.length > 0 ? (u = v[v.length - 1]).matches.push(c) : d.matches.push(c)
                                }
                            } else d.matches.push(s);
                        else y();
                        break;
                    case a.optionalmarker[0]:
                        v.push(new g(!1, !0));
                        break;
                    case a.groupmarker[0]:
                        v.push(new g(!0));
                        break;
                    case a.quantifiermarker[0]:
                        var P = new g(!1, !1, !0),
                            x = (o = o.replace(/[{}]/g, "")).split("|"),
                            _ = x[0].split(","),
                            A = isNaN(_[0]) ? _[0] : parseInt(_[0]),
                            w = 1 === _.length ? A : isNaN(_[1]) ? _[1] : parseInt(_[1]);
                        "*" !== w && "+" !== w || (A = "*" === w ? 0 : 1), P.quantifier = {
                            min: A,
                            max: w,
                            jit: x[1]
                        };
                        var O = v.length > 0 ? v[v.length - 1].matches : d.matches;
                        if ((r = O.pop()).isAlternator) {
                            O.push(r), O = r.matches;
                            var M = new g(!0),
                                S = O.pop();
                            O.push(M), O = M.matches, r = S
                        }
                        r.isGroup || (r = E([r])), O.push(r), O.push(P);
                        break;
                    case a.alternatormarker:
                        function j(e) {
                            var t = e.pop();
                            return t.isQuantifier && (t = E([e.pop(), t])), t
                        }
                        if (v.length > 0) {
                            var D = (u = v[v.length - 1]).matches[u.matches.length - 1];
                            f = u.openGroup && (D.matches === i || !1 === D.isGroup && !1 === D.isAlternator) ? v.pop() : j(u.matches)
                        } else f = j(d.matches);
                        if (f.isAlternator) v.push(f);
                        else if (f.alternatorGroup ? (c = v.pop(), f.alternatorGroup = !1) : c = new g(!1, !1, !1, !0), c.matches.push(f), v.push(c), f.openGroup) {
                            f.openGroup = !1;
                            var T = new g(!0);
                            T.alternatorGroup = !0, v.push(T)
                        }
                        break;
                    default:
                        y()
                }
            }
            for (; v.length > 0;) s = v.pop(), d.matches.push(s);
            return d.matches.length > 0 && (! function t(r) {
                r && r.matches && e.each(r.matches, function (e, o) {
                    var s = r.matches[e + 1];
                    (s === i || s.matches === i || !1 === s.isQuantifier) && o && o.isGroup && (o.isGroup = !1, n || (b(o, a.groupmarker[0], 0), !0 !== o.openGroup && b(o, a.groupmarker[1]))), t(o)
                })
            }(d), k.push(d)), (a.numericInput || a.isRTL) && function e(t) {
                for (var n in t.matches = t.matches.reverse(), t.matches)
                    if (t.matches.hasOwnProperty(n)) {
                        var r = parseInt(n);
                        if (t.matches[n].isQuantifier && t.matches[r + 1] && t.matches[r + 1].isGroup) {
                            var o = t.matches[n];
                            t.matches.splice(n, 1), t.matches.splice(r + 1, 0, o)
                        }
                        t.matches[n].matches !== i ? t.matches[n] = e(t.matches[n]) : t.matches[n] = ((s = t.matches[n]) === a.optionalmarker[0] ? s = a.optionalmarker[1] : s === a.optionalmarker[1] ? s = a.optionalmarker[0] : s === a.groupmarker[0] ? s = a.groupmarker[1] : s === a.groupmarker[1] && (s = a.groupmarker[0]), s)
                    } var s;
                return t
            }(k[0]), k
        }
    }, l.extendDefaults = function (t) {
        e.extend(!0, l.prototype.defaults, t)
    }, l.extendDefinitions = function (t) {
        e.extend(!0, l.prototype.definitions, t)
    }, l.extendAliases = function (t) {
        e.extend(!0, l.prototype.aliases, t)
    }, l.format = function (e, t, n) {
        return l(t).format(e, n)
    }, l.unmask = function (e, t) {
        return l(t).unmaskedvalue(e)
    }, l.isValid = function (e, t) {
        return l(t).isValid(e)
    }, l.remove = function (t) {
        "string" == typeof t && (t = n.getElementById(t) || n.querySelectorAll(t)), t = t.nodeName ? [t] : t, e.each(t, function (e, t) {
            t.inputmask && t.inputmask.remove()
        })
    }, l.setValue = function (t, i) {
        "string" == typeof t && (t = n.getElementById(t) || n.querySelectorAll(t)), t = t.nodeName ? [t] : t, e.each(t, function (t, n) {
            n.inputmask ? n.inputmask.setValue(i) : e(n).trigger("setvalue", [i])
        })
    }, l.escapeRegex = function (e) {
        return e.replace(new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim"), "\\$1")
    }, l.keyCode = {
        BACKSPACE: 8,
        BACKSPACE_SAFARI: 127,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        X: 88,
        CONTROL: 17
    }, l
});
! function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "./inputmask"], t) : "object" == typeof exports ? module.exports = t(require("jquery"), require("./inputmask")) : t(jQuery, window.Inputmask)
}(function (t, e) {
    return void 0 === t.fn.inputmask && (t.fn.inputmask = function (i, n) {
        var s, a = this[0];
        if (void 0 === n && (n = {}), "string" == typeof i) switch (i) {
            case "unmaskedvalue":
                return a && a.inputmask ? a.inputmask.unmaskedvalue() : t(a).val();
            case "remove":
                return this.each(function () {
                    this.inputmask && this.inputmask.remove()
                });
            case "getemptymask":
                return a && a.inputmask ? a.inputmask.getemptymask() : "";
            case "hasMaskedValue":
                return !(!a || !a.inputmask) && a.inputmask.hasMaskedValue();
            case "isComplete":
                return !a || !a.inputmask || a.inputmask.isComplete();
            case "getmetadata":
                return a && a.inputmask ? a.inputmask.getmetadata() : void 0;
            case "setvalue":
                e.setValue(a, n);
                break;
            case "option":
                if ("string" != typeof n) return this.each(function () {
                    if (void 0 !== this.inputmask) return this.inputmask.option(n)
                });
                if (a && void 0 !== a.inputmask) return a.inputmask.option(n);
                break;
            default:
                return n.alias = i, s = new e(n), this.each(function () {
                    s.mask(this)
                })
        } else {
            if ("object" == typeof i) return s = new e(i), void 0 === i.mask && void 0 === i.alias ? this.each(function () {
                if (void 0 !== this.inputmask) return this.inputmask.option(i);
                s.mask(this)
            }) : this.each(function () {
                s.mask(this)
            });
            if (void 0 === i) return this.each(function () {
                (s = new e(n)).mask(this)
            })
        }
    }), t.fn.inputmask
});
(function ($) {
    'use strict';
    var methods = {
        init: function (options) {
            return this.each(function () {
                this.self = $(this);
                methods.destroy.call(this.self);
                this.opt = $.extend(!0, {}, $.fn.raty.defaults, options);
                methods._adjustCallback.call(this);
                methods._adjustNumber.call(this);
                methods._adjustHints.call(this);
                this.opt.score = methods._adjustedScore.call(this, this.opt.score);
                if (this.opt.starType !== 'img') {
                    methods._adjustStarType.call(this)
                }
                methods._adjustPath.call(this);
                methods._createStars.call(this);
                if (this.opt.cancel) {
                    methods._createCancel.call(this)
                }
                if (this.opt.precision) {
                    methods._adjustPrecision.call(this)
                }
                methods._createScore.call(this);
                methods._apply.call(this, this.opt.score);
                methods._setTitle.call(this, this.opt.score);
                methods._target.call(this, this.opt.score);
                if (this.opt.readOnly) {
                    methods._lock.call(this)
                } else {
                    this.style.cursor = 'pointer';
                    methods._binds.call(this)
                }
            })
        },
        _adjustCallback: function () {
            var options = ['number', 'readOnly', 'score', 'scoreName', 'target'];
            for (var i = 0; i < options.length; i++) {
                if (typeof this.opt[options[i]] === 'function') {
                    this.opt[options[i]] = this.opt[options[i]].call(this)
                }
            }
        },
        _adjustedScore: function (score) {
            if (!score) {
                return score
            }
            return methods._between(score, 0, this.opt.number)
        },
        _adjustHints: function () {
            if (!this.opt.hints) {
                this.opt.hints = []
            }
            if (!this.opt.halfShow && !this.opt.half) {
                return
            }
            var steps = this.opt.precision ? 10 : 2;
            for (var i = 0; i < this.opt.number; i++) {
                var group = this.opt.hints[i];
                if (Object.prototype.toString.call(group) !== '[object Array]') {
                    group = [group]
                }
                this.opt.hints[i] = [];
                for (var j = 0; j < steps; j++) {
                    var
                        hint = group[j],
                        last = group[group.length - 1];
                    if (last === undefined) {
                        last = null
                    }
                    this.opt.hints[i][j] = hint === undefined ? last : hint
                }
            }
        },
        _adjustNumber: function () {
            this.opt.number = methods._between(this.opt.number, 1, this.opt.numberMax)
        },
        _adjustPath: function () {
            this.opt.path = this.opt.path || '';
            if (this.opt.path && this.opt.path.charAt(this.opt.path.length - 1) !== '/') {
                this.opt.path += '/'
            }
        },
        _adjustPrecision: function () {
            this.opt.half = !0
        },
        _adjustStarType: function () {
            var replaces = ['cancelOff', 'cancelOn', 'starHalf', 'starOff', 'starOn'];
            this.opt.path = '';
            for (var i = 0; i < replaces.length; i++) {
                this.opt[replaces[i]] = this.opt[replaces[i]].replace('.', '-')
            }
        },
        _apply: function (score) {
            methods._fill.call(this, score);
            if (score) {
                if (score > 0) {
                    this.score.val(score)
                }
                methods._roundStars.call(this, score)
            }
        },
        _between: function (value, min, max) {
            return Math.min(Math.max(parseFloat(value), min), max)
        },
        _binds: function () {
            if (this.cancel) {
                methods._bindOverCancel.call(this);
                methods._bindClickCancel.call(this);
                methods._bindOutCancel.call(this)
            }
            methods._bindOver.call(this);
            methods._bindClick.call(this);
            methods._bindOut.call(this)
        },
        _bindClick: function () {
            var that = this;
            that.stars.on('click.raty', function (evt) {
                var
                    execute = !0,
                    score = (that.opt.half || that.opt.precision) ? that.self.data('score') : (this.alt || $(this).data('alt'));
                if (that.opt.click) {
                    execute = that.opt.click.call(that, +score, evt)
                }
                if (execute || execute === undefined) {
                    if (that.opt.half && !that.opt.precision) {
                        score = methods._roundHalfScore.call(that, score)
                    }
                    methods._apply.call(that, score)
                }
            })
        },
        _bindClickCancel: function () {
            var that = this;
            that.cancel.on('click.raty', function (evt) {
                that.score.removeAttr('value');
                if (that.opt.click) {
                    that.opt.click.call(that, null, evt)
                }
            })
        },
        _bindOut: function () {
            var that = this;
            that.self.on('mouseleave.raty', function (evt) {
                var score = +that.score.val() || undefined;
                methods._apply.call(that, score);
                methods._target.call(that, score, evt);
                methods._resetTitle.call(that);
                if (that.opt.mouseout) {
                    that.opt.mouseout.call(that, score, evt)
                }
            })
        },
        _bindOutCancel: function () {
            var that = this;
            that.cancel.on('mouseleave.raty', function (evt) {
                var icon = that.opt.cancelOff;
                if (that.opt.starType !== 'img') {
                    icon = that.opt.cancelClass + ' ' + icon
                }
                methods._setIcon.call(that, this, icon);
                if (that.opt.mouseout) {
                    var score = +that.score.val() || undefined;
                    that.opt.mouseout.call(that, score, evt)
                }
            })
        },
        _bindOver: function () {
            var that = this,
                action = that.opt.half ? 'mousemove.raty' : 'mouseover.raty';
            that.stars.on(action, function (evt) {
                var score = methods._getScoreByPosition.call(that, evt, this);
                methods._fill.call(that, score);
                if (that.opt.half) {
                    methods._roundStars.call(that, score, evt);
                    methods._setTitle.call(that, score, evt);
                    that.self.data('score', score)
                }
                methods._target.call(that, score, evt);
                if (that.opt.mouseover) {
                    that.opt.mouseover.call(that, score, evt)
                }
            })
        },
        _bindOverCancel: function () {
            var that = this;
            that.cancel.on('mouseover.raty', function (evt) {
                var
                    starOff = that.opt.path + that.opt.starOff,
                    icon = that.opt.cancelOn;
                if (that.opt.starType === 'img') {
                    that.stars.attr('src', starOff)
                } else {
                    icon = that.opt.cancelClass + ' ' + icon;
                    that.stars.attr('class', starOff)
                }
                methods._setIcon.call(that, this, icon);
                methods._target.call(that, null, evt);
                if (that.opt.mouseover) {
                    that.opt.mouseover.call(that, null)
                }
            })
        },
        _buildScoreField: function () {
            return $('<input />', {
                name: this.opt.scoreName,
                type: 'hidden'
            }).appendTo(this)
        },
        _createCancel: function () {
            var icon = this.opt.path + this.opt.cancelOff,
                cancel = $('<' + this.opt.starType + ' />', {
                    title: this.opt.cancelHint,
                    'class': this.opt.cancelClass
                });
            if (this.opt.starType === 'img') {
                cancel.attr({
                    src: icon,
                    alt: 'x'
                })
            } else {
                cancel.attr('data-alt', 'x').addClass(icon)
            }
            if (this.opt.cancelPlace === 'left') {
                this.self.prepend('&#160;').prepend(cancel)
            } else {
                this.self.append('&#160;').append(cancel)
            }
            this.cancel = cancel
        },
        _createScore: function () {
            var score = $(this.opt.targetScore);
            this.score = score.length ? score : methods._buildScoreField.call(this)
        },
        _createStars: function () {
            for (var i = 1; i <= this.opt.number; i++) {
                var
                    name = methods._nameForIndex.call(this, i),
                    attrs = {
                        alt: i,
                        src: this.opt.path + this.opt[name]
                    };
                if (this.opt.starType !== 'img') {
                    attrs = {
                        'data-alt': i,
                        'class': attrs.src
                    }
                }
                attrs.title = methods._getHint.call(this, i);
                $('<' + this.opt.starType + ' />', attrs).appendTo(this);
                if (this.opt.space) {
                    this.self.append(i < this.opt.number ? '&#160;' : '')
                }
            }
            this.stars = this.self.children(this.opt.starType)
        },
        _error: function (message) {
            $(this).text(message);
            $.error(message)
        },
        _fill: function (score) {
            var hash = 0;
            for (var i = 1; i <= this.stars.length; i++) {
                var
                    icon, star = this.stars[i - 1],
                    turnOn = methods._turnOn.call(this, i, score);
                if (this.opt.iconRange && this.opt.iconRange.length > hash) {
                    var irange = this.opt.iconRange[hash];
                    icon = methods._getRangeIcon.call(this, irange, turnOn);
                    if (i <= irange.range) {
                        methods._setIcon.call(this, star, icon)
                    }
                    if (i === irange.range) {
                        hash++
                    }
                } else {
                    icon = this.opt[turnOn ? 'starOn' : 'starOff'];
                    methods._setIcon.call(this, star, icon)
                }
            }
        },
        _getFirstDecimal: function (number) {
            var
                decimal = number.toString().split('.')[1],
                result = 0;
            if (decimal) {
                result = parseInt(decimal.charAt(0), 10);
                if (decimal.slice(1, 5) === '9999') {
                    result++
                }
            }
            return result
        },
        _getRangeIcon: function (irange, turnOn) {
            return turnOn ? irange.on || this.opt.starOn : irange.off || this.opt.starOff
        },
        _getScoreByPosition: function (evt, icon) {
            var score = parseInt(icon.alt || icon.getAttribute('data-alt'), 10);
            if (this.opt.half) {
                var
                    size = methods._getWidth.call(this),
                    percent = parseFloat((evt.pageX - $(icon).offset().left) / size);
                score = score - 1 + percent
            }
            return score
        },
        _getHint: function (score, evt) {
            if (score !== 0 && !score) {
                return this.opt.noRatedMsg
            }
            var decimal = methods._getFirstDecimal.call(this, score),
                integer = Math.ceil(score),
                group = this.opt.hints[(integer || 1) - 1],
                hint = group,
                set = !evt || this.move;
            if (this.opt.precision) {
                if (set) {
                    decimal = decimal === 0 ? 9 : decimal - 1
                }
                hint = group[decimal]
            } else if (this.opt.halfShow || this.opt.half) {
                decimal = set && decimal === 0 ? 1 : decimal > 5 ? 1 : 0;
                hint = group[decimal]
            }
            return hint === '' ? '' : hint || score
        },
        _getWidth: function () {
            var width = this.stars[0].width || parseFloat(this.stars.eq(0).css('font-size'));
            if (!width) {
                methods._error.call(this, 'Could not get the icon width!')
            }
            return width
        },
        _lock: function () {
            var hint = methods._getHint.call(this, this.score.val());
            this.style.cursor = '';
            this.title = hint;
            this.score.prop('readonly', !0);
            this.stars.prop('title', hint);
            if (this.cancel) {
                this.cancel.hide()
            }
            this.self.data('readonly', !0)
        },
        _nameForIndex: function (i) {
            return this.opt.score && this.opt.score >= i ? 'starOn' : 'starOff'
        },
        _resetTitle: function (star) {
            for (var i = 0; i < this.opt.number; i++) {
                this.stars[i].title = methods._getHint.call(this, i + 1)
            }
        },
        _roundHalfScore: function (score) {
            var integer = parseInt(score, 10),
                decimal = methods._getFirstDecimal.call(this, score);
            if (decimal !== 0) {
                decimal = decimal > 5 ? 1 : 0.5
            }
            return integer + decimal
        },
        _roundStars: function (score, evt) {
            var
                decimal = (score % 1).toFixed(2),
                name;
            if (evt || this.move) {
                name = decimal > 0.5 ? 'starOn' : 'starHalf'
            } else if (decimal > this.opt.round.down) {
                name = 'starOn';
                if (this.opt.halfShow && decimal < this.opt.round.up) {
                    name = 'starHalf'
                } else if (decimal < this.opt.round.full) {
                    name = 'starOff'
                }
            }
            if (name) {
                var
                    icon = this.opt[name],
                    star = this.stars[Math.ceil(score) - 1];
                methods._setIcon.call(this, star, icon)
            }
        },
        _setIcon: function (star, icon) {
            star[this.opt.starType === 'img' ? 'src' : 'className'] = this.opt.path + icon
        },
        _setTarget: function (target, score) {
            if (score) {
                score = this.opt.targetFormat.toString().replace('{score}', score)
            }
            if (target.is(':input')) {
                target.val(score)
            } else {
                target.html(score)
            }
        },
        _setTitle: function (score, evt) {
            if (score) {
                var
                    integer = parseInt(Math.ceil(score), 10),
                    star = this.stars[integer - 1];
                star.title = methods._getHint.call(this, score, evt)
            }
        },
        _target: function (score, evt) {
            if (this.opt.target) {
                var target = $(this.opt.target);
                if (!target.length) {
                    methods._error.call(this, 'Target selector invalid or missing!')
                }
                var mouseover = evt && evt.type === 'mouseover';
                if (score === undefined) {
                    score = this.opt.targetText
                } else if (score === null) {
                    score = mouseover ? this.opt.cancelHint : this.opt.targetText
                } else {
                    if (this.opt.targetType === 'hint') {
                        score = methods._getHint.call(this, score, evt)
                    } else if (this.opt.precision) {
                        score = parseFloat(score).toFixed(1)
                    }
                    var mousemove = evt && evt.type === 'mousemove';
                    if (!mouseover && !mousemove && !this.opt.targetKeep) {
                        score = this.opt.targetText
                    }
                }
                methods._setTarget.call(this, target, score)
            }
        },
        _turnOn: function (i, score) {
            return this.opt.single ? (i === score) : (i <= score)
        },
        _unlock: function () {
            this.style.cursor = 'pointer';
            this.removeAttribute('title');
            this.score.removeAttr('readonly');
            this.self.data('readonly', !1);
            for (var i = 0; i < this.opt.number; i++) {
                this.stars[i].title = methods._getHint.call(this, i + 1)
            }
            if (this.cancel) {
                this.cancel.css('display', '')
            }
        },
        cancel: function (click) {
            return this.each(function () {
                var self = $(this);
                if (self.data('readonly') !== !0) {
                    methods[click ? 'click' : 'score'].call(self, null);
                    this.score.removeAttr('value')
                }
            })
        },
        click: function (score) {
            return this.each(function () {
                if ($(this).data('readonly') !== !0) {
                    score = methods._adjustedScore.call(this, score);
                    methods._apply.call(this, score);
                    if (this.opt.click) {
                        this.opt.click.call(this, score, $.Event('click'))
                    }
                    methods._target.call(this, score)
                }
            })
        },
        destroy: function () {
            return this.each(function () {
                var self = $(this),
                    raw = self.data('raw');
                if (raw) {
                    self.off('.raty').empty().css({
                        cursor: raw.style.cursor
                    }).removeData('readonly')
                } else {
                    self.data('raw', self.clone()[0])
                }
            })
        },
        getScore: function () {
            var score = [],
                value;
            this.each(function () {
                value = this.score.val();
                score.push(value ? +value : undefined)
            });
            return (score.length > 1) ? score : score[0]
        },
        move: function (score) {
            return this.each(function () {
                var
                    integer = parseInt(score, 10),
                    decimal = methods._getFirstDecimal.call(this, score);
                if (integer >= this.opt.number) {
                    integer = this.opt.number - 1;
                    decimal = 10
                }
                var width = methods._getWidth.call(this),
                    steps = width / 10,
                    star = $(this.stars[integer]),
                    percent = star.offset().left + steps * decimal,
                    evt = $.Event('mousemove', {
                        pageX: percent
                    });
                this.move = !0;
                star.trigger(evt);
                this.move = !1
            })
        },
        readOnly: function (readonly) {
            return this.each(function () {
                var self = $(this);
                if (self.data('readonly') !== readonly) {
                    if (readonly) {
                        self.off('.raty').children('img').off('.raty');
                        methods._lock.call(this)
                    } else {
                        methods._binds.call(this);
                        methods._unlock.call(this)
                    }
                    self.data('readonly', readonly)
                }
            })
        },
        reload: function () {
            return methods.set.call(this, {})
        },
        score: function () {
            var self = $(this);
            return arguments.length ? methods.setScore.apply(self, arguments) : methods.getScore.call(self)
        },
        set: function (options) {
            return this.each(function () {
                $(this).raty($.extend({}, this.opt, options))
            })
        },
        setScore: function (score) {
            return this.each(function () {
                if ($(this).data('readonly') !== !0) {
                    score = methods._adjustedScore.call(this, score);
                    methods._apply.call(this, score);
                    methods._target.call(this, score)
                }
            })
        }
    };
    $.fn.raty = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1))
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments)
        } else {
            $.error('Method ' + method + ' does not exist!')
        }
    };
    $.fn.raty.defaults = {
        cancel: !1,
        cancelClass: 'raty-cancel',
        cancelHint: 'Cancel this rating!',
        cancelOff: 'cancel-off.png',
        cancelOn: 'cancel-on.png',
        cancelPlace: 'left',
        click: undefined,
        half: !1,
        halfShow: !0,
        hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
        iconRange: undefined,
        mouseout: undefined,
        mouseover: undefined,
        noRatedMsg: 'Not rated yet!',
        number: 5,
        numberMax: 20,
        path: undefined,
        precision: !1,
        readOnly: !1,
        round: {
            down: 0.25,
            full: 0.6,
            up: 0.76
        },
        score: undefined,
        scoreName: 'score',
        single: !1,
        space: !0,
        starHalf: 'star-half.png',
        starOff: 'star-off.png',
        starOn: 'star-on.png',
        starType: 'img',
        target: undefined,
        targetFormat: '{score}',
        targetKeep: !1,
        targetScore: undefined,
        targetText: '',
        targetType: 'hint'
    }
})(jQuery);
(function (p, z) {
    function q(a) {
        return !!("" === a || a && a.charCodeAt && a.substr)
    }

    function m(a) {
        return u ? u(a) : "[object Array]" === v.call(a)
    }

    function r(a) {
        return "[object Object]" === v.call(a)
    }

    function s(a, b) {
        var d, a = a || {},
            b = b || {};
        for (d in b) b.hasOwnProperty(d) && null == a[d] && (a[d] = b[d]);
        return a
    }

    function j(a, b, d) {
        var c = [],
            e, h;
        if (!a) return c;
        if (w && a.map === w) return a.map(b, d);
        for (e = 0, h = a.length; e < h; e++) c[e] = b.call(d, a[e], e, a);
        return c
    }

    function n(a, b) {
        a = Math.round(Math.abs(a));
        return isNaN(a) ? b : a
    }

    function x(a) {
        var b = c.settings.currency.format;
        "function" === typeof a && (a = a());
        return q(a) && a.match("%v") ? {
            pos: a,
            neg: a.replace("-", "").replace("%v", "-%v"),
            zero: a
        } : !a || !a.pos || !a.pos.match("%v") ? !q(b) ? b : c.settings.currency.format = {
            pos: b,
            neg: b.replace("%v", "-%v"),
            zero: b
        } : a
    }
    var c = {
            version: "0.4.1",
            settings: {
                currency: {
                    symbol: "$",
                    format: "%s%v",
                    decimal: ".",
                    thousand: ",",
                    precision: 2,
                    grouping: 3
                },
                number: {
                    precision: 0,
                    grouping: 3,
                    thousand: ",",
                    decimal: "."
                }
            }
        },
        w = Array.prototype.map,
        u = Array.isArray,
        v = Object.prototype.toString,
        o = c.unformat = c.parse = function (a, b) {
            if (m(a)) return j(a, function (a) {
                return o(a, b)
            });
            a = a || 0;
            if ("number" === typeof a) return a;
            var b = b || ".",
                c = RegExp("[^0-9-" + b + "]", ["g"]),
                c = parseFloat(("" + a).replace(/\((.*)\)/, "-$1").replace(c, "").replace(b, "."));
            return !isNaN(c) ? c : 0
        },
        y = c.toFixed = function (a, b) {
            var b = n(b, c.settings.number.precision),
                d = Math.pow(10, b);
            return (Math.round(c.unformat(a) * d) / d).toFixed(b)
        },
        t = c.formatNumber = c.format = function (a, b, d, i) {
            if (m(a)) return j(a, function (a) {
                return t(a, b, d, i)
            });
            var a = o(a),
                e = s(r(b) ? b : {
                    precision: b,
                    thousand: d,
                    decimal: i
                }, c.settings.number),
                h = n(e.precision),
                f = 0 > a ? "-" : "",
                g = parseInt(y(Math.abs(a || 0), h), 10) + "",
                l = 3 < g.length ? g.length % 3 : 0;
            return f + (l ? g.substr(0, l) + e.thousand : "") + g.substr(l).replace(/(\d{3})(?=\d)/g, "$1" + e.thousand) + (h ? e.decimal + y(Math.abs(a), h).split(".")[1] : "")
        },
        A = c.formatMoney = function (a, b, d, i, e, h) {
            if (m(a)) return j(a, function (a) {
                return A(a, b, d, i, e, h)
            });
            var a = o(a),
                f = s(r(b) ? b : {
                    symbol: b,
                    precision: d,
                    thousand: i,
                    decimal: e,
                    format: h
                }, c.settings.currency),
                g = x(f.format);
            return (0 < a ? g.pos : 0 > a ? g.neg : g.zero).replace("%s", f.symbol).replace("%v", t(Math.abs(a), n(f.precision), f.thousand, f.decimal))
        };
    c.formatColumn = function (a, b, d, i, e, h) {
        if (!a) return [];
        var f = s(r(b) ? b : {
                symbol: b,
                precision: d,
                thousand: i,
                decimal: e,
                format: h
            }, c.settings.currency),
            g = x(f.format),
            l = g.pos.indexOf("%s") < g.pos.indexOf("%v") ? !0 : !1,
            k = 0,
            a = j(a, function (a) {
                if (m(a)) return c.formatColumn(a, f);
                a = o(a);
                a = (0 < a ? g.pos : 0 > a ? g.neg : g.zero).replace("%s", f.symbol).replace("%v", t(Math.abs(a), n(f.precision), f.thousand, f.decimal));
                if (a.length > k) k = a.length;
                return a
            });
        return j(a, function (a) {
            return q(a) && a.length < k ? l ? a.replace(f.symbol, f.symbol + Array(k - a.length + 1).join(" ")) : Array(k - a.length + 1).join(" ") + a : a
        })
    };
    if ("undefined" !== typeof exports) {
        if ("undefined" !== typeof module && module.exports) exports = module.exports = c;
        exports.accounting = c
    } else "function" === typeof define && define.amd ? define([], function () {
        return c
    }) : (c.noConflict = function (a) {
        return function () {
            p.accounting = a;
            c.noConflict = z;
            return c
        }
    }(p.accounting), p.accounting = c)
})(this);
var FenixUI = {
    loading: function ($elem) {
        var height = $elem.height();
        $elem.html('');
        $elem.append('<div class="ui-loading"></div>');
        return $elem
    },
    loadingBlack: function ($elem) {
        var height = $elem.height();
        $elem.html('');
        $elem.append('<div class="ui-loading black"></div>');
        return $elem
    },
    loadingOverlay: function ($elem) {
        var height = $elem.height();
        $elem.append('<div class="ui-loading overlay"></div>');
        return $elem
    },
    closeDialog: function () {
        $('.ui-dialog-content').dialog('close')
    }
};
var FenixCustomer = {
    addFavorites: function (trigger, pid) {
        trigger = $(trigger);
        var count = parseInt($('#fav_count').html());
        if (trigger.find('img').attr('class') == 'add') {
            trigger.parent().attr('class', 'favorites done');
            trigger.find('img').attr('class', 'remove');
            trigger.find('img').attr('src', '/var/themes/default/skin/images/heart_on.png');
            trigger.find('div').html(FenixOptions.wishlistdone);
            count = count + 1;
            $('#fav_count').html(count)
        } else {
            document.location.href = FenixOptions.langCode + '/customer/favorites';
            return !1
        }
        $.post('/customer/favorites/process', {
            pid: pid
        }, function (data) {});
        return !1
    },
    deleteFavorites: function (trigger, pid) {
        console.log(FenixOptions);
        if (FenixOptions.auth == !1) {
            self.location = '/customer/session/login';
            return !1
        }
        var count = parseInt($('#fav_count').html());
        count = count - 1;
        $('#fav_count').html(count);
        $.post('/customer/favorites/process', {
            pid: pid
        }, function (data) {});
        return !1
    },
    addTracking: function (trigger, pid) {
        if (trigger.html() == 'Следить за ценой') {
            trigger.html('Не следить за ценой')
        } else {
            trigger.html('Следить за ценой')
        }
        $.post('/customer/tracking/process', {
            pid: pid
        }, function (data) {});
        return !1
    },
    addCompare: function (id, elem) {
        elem.blur();
        $.post('/catalog/compare/add', {
            'id': id
        }, function (result) {
            $(elem).addClass('active');
            $(elem).html('<span>Уже в сравнении</span><img width="20px" src="/var/themes/default/skin/images/libra_on.png" alt=""/>');
            $(elem).attr('onclick', 'FenixCustomer.deleteCompare(' + id + ',this)');
            console.log(result);
            FenixCompare.updateSidebar()
        });
        return !1
    },
    deleteCompare: function (id, elem) {
        elem.blur();
        $.post('/catalog/compare/delete', {
            'id': id
        }, function (result) {
            $(elem).removeClass('active');
            $(elem).html('<span>Добавить к сравнению</span><img width="20px" src="/var/themes/default/skin/images/libra_off.png" alt=""/>');
            $(elem).attr('onclick', 'FenixCustomer.addCompare(' + id + ',this)');
            FenixCompare.updateSidebar()
        });
        return !1
    },
    checkUser: function (email, password) {
        alert(email.val())
    }
};
var FenixCheckout = {
    buyOneClickDialog: function (pid) {
        $('#buyOneclickDialog').dialog({
            width: 420,
            modal: !0,
            dialogClass: 'oneClickFormContainer',
            open: function () {
                $('.ui-widget-overlay').click(function () {
                    FenixUI.closeDialog()
                });
                var $nameField = $('#buyOneclickDialog').find('input[name=name]');
                var $cellphoneField = $('#buyOneclickDialog').find('input[name=cellphone]');
                $cellphoneField.inputmask({
                    mask: "+38 (999) 999 99 99",
                    clearMaskOnLostFocus: !1
                });
                $('#buyOneclickDialog').find('.btn').click(function () {
                    var _phone = $cellphoneField.val();
                    var _name = $nameField.val();
                    if (_name == '') {
                        $nameField.addClass('error');
                        return !1
                    }
                    if (/\+38 \(\d\d\d\) \d\d\d \d\d \d\d/.test(_phone) == !1) {
                        $('#buyOneclickDialog').find('input[name=cellphone]').addClass('error')
                    } else {
                        $.post('/checkout/process/oneclick', {
                            pid: pid,
                            phone: _phone,
                            name: _name
                        }, function (data) {
                            $('#buyOneclickContainer').html(data)
                        })
                    }
                    return !1
                })
            }
        });
        return !1
    },
    addProduct: function (url, productId) {
        console.log('Тест: ' + url + ' ' + productId);
        if (FenixOptions.debugProductCard) console.log('*** addProduct ***');
        if (FenixOptions.debugProductCard) console.log('Добавляем товар productId:' + productId + ' в корзину');
        var _this = this;
        var data = FenixProduct.getSelectedProductAttributes(productId);
        if (FenixOptions.debugProductCard) console.log('Выбранные параметры товара:');
        if (FenixOptions.debugProductCard) console.log(data);
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function (data) {
                _this.openDialog()
            }
        });
        FenixCompare.updateSidebar();
        return !1
    },
    removeAllProducts: function (orderid) {
        var _this = this;
        $('.checkout-product').remove();
        $.post('/checkout/process/removeall', {
            orderid: orderid
        }, function () {
            $.post('/checkout/process/sidebar', {}, function (data) {
                $('#checkoutSidebar').html(data);
                FenixCheckout.loadCheckoutDialogContent()
            })
        });
        if ($('.cart-item').length == 0) {
            $('#checkoutTotalSum').html(0);
            $('#checkoutProductQty').html(0)
        }
        return !1
    },
    removeProduct: function (id) {
        var _this = this;
        $('#checkout-product-' + id).remove();
        $.post('/checkout/process/remove', {
            id: id
        }, function () {
            $.post('/checkout/process/sidebar', {}, function (data) {
                $('#checkoutSidebar').html(data);
                FenixCheckout.loadCheckoutDialogContent()
            })
        });
        if ($('.cart-item').length == 0) {
            $('#checkoutTotalSum').html(0);
            $('#checkoutProductQty').html(0)
        }
        return !1
    },
    plusQty: function (qtyBlock, itemTotalBlock) {
        var _value = parseInt(qtyBlock.val());
        var unitPrice = parseFloat(qtyBlock.data('price'));
        var productId = qtyBlock.data('product-id');
        _value++;
        qtyBlock.val(_value);
        itemTotalBlock.html((_value * unitPrice).toFixed(0));
        FenixCheckout.updateProductQty(productId, _value);
        return !1
    },
    minusQty: function (qtyBlock, itemTotalBlock) {
        var _value = parseInt(qtyBlock.val());
        var unitPrice = parseFloat(qtyBlock.data('price'));
        var productId = qtyBlock.data('product-id');
        if (_value <= 1) {
            qtyBlock.val(1);
            return !1
        }
        _value--;
        qtyBlock.val(_value);
        itemTotalBlock.html((_value * unitPrice).toFixed(0));
        FenixCheckout.updateProductQty(productId, _value);
        return !1
    },
    updateProductQty: function (productId, qty) {
        var url = '/checkout/process/qty'
        $.ajax({
            type: "POST",
            url: url,
            data: {
                product_id: productId,
                qty: qty
            },
            success: function (data) {
                FenixCheckout.loadCheckoutDialogContent()
            }
        })
    },
    updateCheckoutItemTotal: function (qtyBlock, itemTotalBlock) {
        var _value = parseInt(qtyBlock.val());
        var _id = parseFloat(qtyBlock.data('product-id'));
        this.updateProductQty(_id, _value)
    },
    updateCheckoutTotalBlock: function () {},
    openDialog: function () {
        console.log('openDialog');
        var _this = this;
        FenixUI.closeDialog();
        $('#checkoutDialog').dialog({
            width: 804,
            modal: !0,
            dialogClass: 'checkout-dialog',
            open: function () {
                _this.loadCheckoutDialogContent();
                $('.ui-widget-overlay').click(function () {
                    FenixUI.closeDialog()
                })
            }
        });
        return !1
    },
    loadCheckoutDialogContent: function () {
        var _this = this;
        $.ajax({
            url: '/checkout/process',
            type: "POST",
            data: {},
            beforeSend: function () {
                $("#checkoutDialogLoader").show()
            },
            success: function (data) {
                //$('#checkoutDialogContent').html(data);
                $("#checkoutDialog").dialog("option", "position", ["center", "center"]);
                $("#checkoutDialogLoader").hide();
                FenixCheckout.loadCheckoutSidebar()
            },
            error: function () {
                _this.error();
                $("#checkoutDialogLoader").hide();
                //$('#checkoutDialogContent').html('Сервис временно недоступен1')
            }
        });
        $.ajax({
            url: '/checkout/process/order',
            type: "POST",
            data: {},
            beforeSend: function () {
                $("#checkoutDialogLoader").show()
            },
            success: function (data) {
                $('#orderProductsTable').html(data);
                $("#checkoutDialogLoader").hide();
                FenixCheckout.loadCheckoutSidebar()
            },
            error: function () {
                _this.error();
                $("#checkoutDialogLoader").hide();
                $('#orderProductsTable').html('Сервис временно недоступен2')
            }
        });
        return !1
    },
    loadCheckoutSidebar: function () {
        $.post('/checkout/process/sidebar', {}, function (data) {
            $('#checkoutSidebar').html(data)
        })
    },
    error: function () {
        return !1
    }
};
var FenixCompare = {
    holder: null,
    init: function () {
        this.holder = $('#compareHolder');
        this.holder.find('.image, .head').click(function () {
            console.log('open');
            FenixCompare.toogle()
        });
        $('body').click(function () {
            FenixCompare.close()
        });
        $('#compareHolder').click(function (e) {
            e.stopPropagation()
        })
    },
    toogle: function () {
        if (this.holder.find('.categories').hasClass('active')) {
            this.close()
        } else {
            this.open()
        }
    },
    close: function () {
        this.holder.find('.categories').fadeOut('fast');
        this.holder.find('.categories').removeClass('active')
    },
    open: function () {
        this.holder.find('.categories').fadeIn('fast');
        this.holder.find('.categories').addClass('active')
    },
    remove: function (elem, category) {
        var id = $(elem).closest('.product-block').data("product");
        var index = $(elem).closest('td').index();
        $.post('/catalog/compare/remove/id/' + id + '/category/' + category, {}, function () {
            $('.features-table tr').each(function () {
                $(this).find('td').eq(index).remove()
            });
            $('.features-table').css('width', $('#product-wrapper td').length * 230);
            FenixCompare.updateSidebar();
            if ($('#product-wrapper td').length == 1) {
                self.location = '/'
            }
        })
    },
    removeCategory: function (elem, id) {
        $(elem).parent().remove();
        $.post('/catalog/compare/delete', {
            category: id
        }, function () {
            $('.product-block').each(function () {
                if (Fenix.strpos($(this).data('category'), "'" + id + "'")) {
                    $(this).find('.compare-button').removeClass('active');
                    $(this).find('.compare-button').html('<span>Добавить к сравнению</span>');
                    $(this).find('.compare-button').attr('onclick', 'FenixCustomer.addCompare(' + $(this).data('product') + ',this)')
                }
            });
            if ($('.product-card').length > 0) {
                if (Fenix.strpos($('.product-card').data('category'), "'" + id + "'")) {
                    $('.product-card').find('.compare-button').removeClass('active');
                    $('.product-card').find('.compare-button').html('<span>Добавить к сравнению</span>');
                    $('.product-card').find('.compare-button').attr('onclick', 'FenixCustomer.addCompare(' + $('.product-card').data('product') + ',this)')
                }
            }
            FenixCompare.updateSidebar()
        })
    },
    removeCategoryAll: function (elem, id) {
        $.post('/catalog/compare/delete', {
            category: id
        }, function () {
            self.location = '/'
        })
    },
    updateSidebar: function () {
        $('#compareHolder').load('/catalog/compare/sidebar');
        console.log('updateSidebar')
    },
    showWarning: function () {
        $('#compareHolder .warning').show();
        return !1
    },
    addCompare: function (id, elem) {
        elem.blur();
        $.post('/catalog/compare/add', {
            'id': id
        }, function (result) {
            $(elem).addClass('active');
            $(elem).html('<span>Уже в сравнении</span>');
            $(elem).attr('onclick', 'FenixCompare.deleteCompare(' + id + ',this)');
            console.log(result);
            FenixCompare.updateSidebar()
        });
        return !1
    },
    deleteCompare: function (id, elem) {
        elem.blur();
        $.post('/catalog/compare/delete', {
            'id': id
        }, function (result) {
            $(elem).removeClass('active');
            $(elem).html('<span>Добавить к сравнению</span>');
            $(elem).attr('onclick', 'FenixCompare.addCompare(' + id + ',this)');
            FenixCompare.updateSidebar()
        });
        return !1
    }
};
var FenixUI = {
    loading: function ($elem) {
        var height = $elem.height();
        $elem.append('<div class="ui-loading"></div>');
        return $elem
    },
    loadingStop: function ($elem) {
        $elem.find('.ui-loading').remove();
        return $elem
    },
    closeDialog: function () {
        $('.ui-dialog-content').dialog('close')
    },
    callbackDialog: function () {
        console.log('callback dialog');
        var _this = this;
        $('#callbackFormContainer').dialog({
            width: 460,
            modal: !0,
            dialogClass: 'callbackFormContainer',
            open: function () {
                $('.ui-widget-overlay').click(function () {
                    $('.ui-dialog-content').dialog('close')
                })
            }
        });
        return !1
    },
    taxiDialog: function () {
        console.log('taxi dialog');
        var _this = this;
        $('#taxiFormContainer').dialog({
            width: 460,
            modal: !0,
            dialogClass: 'taxiFormContainer',
            open: function () {
                $('.ui-widget-overlay').click(function () {
                    $('.ui-dialog-content').dialog('close')
                })
            }
        });
        return !1
    },
    entryDialog: function () {
        var _this = this;
        $('#entryDialog').dialog({
            width: 500,
            modal: !0,
            open: function () {
                $('.ui-widget-overlay').click(function () {
                    $('.ui-dialog-content').dialog('close')
                })
            }
        });
        return !1
    },
    loginDialog: function () {
        $('.ui-dialog-content').dialog('close');
        console.log('Login dialog');
        var _this = this;
        $('#loginDialog').dialog({
            width: 420,
            modal: !0,
            dialogClass: 'loginFormContainer',
            open: function () {
                $('.ui-widget-overlay').click(function () {
                    $('.ui-dialog-content').dialog('close')
                })
            }
        });
        return !1
    },
    registrationDialog: function () {
        $('.ui-dialog-content').dialog('close');
        console.log('Registration dialog');
        var _this = this;
        $('#registrationDialog').dialog({
            width: 420,
            modal: !0,
            dialogClass: 'registrationFormContainer',
            open: function () {
                $('.ui-widget-overlay').click(function () {
                    $('.ui-dialog-content').dialog('close')
                })
            }
        });
        return !1
    }
};
var FenixProduct = {
    setRating: function (productId, blockStarsSelector, blockAverageSelector, blockCountSelector) {
        var url = '/api/ajax/product/rating';
        $.ajax({
            type: "POST",
            url: url,
            data: {
                product_id: productId
            },
            success: function (rating) {
                if (FenixOptions.debugProductCard) console.log('Загружаем рейтинг товара productId:' + productId);
                if (FenixOptions.debugProductCard) console.log(rating);
                if ($(blockAverageSelector).length > 0) {
                    $(blockAverageSelector).html(rating.average)
                }
                if ($(blockCountSelector).length > 0) {
                    $(blockCountSelector).html(rating.count)
                }
                if ($(blockStarsSelector).length > 0) {
                    $(blockStarsSelector).raty({
                        score: rating.average,
                        starOff: FenixOptions.skinUrl + 'images/star-off.png',
                        starOn: FenixOptions.skinUrl + 'images/star-on.png',
                        starHalf: FenixOptions.skinUrl + 'images/star-half.png',
                        readOnly: !0,
                        click: function (score, evt) {
                            val = score
                        }
                    })
                }
            }
        })
    },
    getSelectedProductAttributes: function (productId) {
        if (FenixOptions.debugProductCard) console.log('*** getSelectedProductAttributes ***');
        if (FenixOptions.debugProductCard) console.log('Собираем выбранные атрибуты товара');
        var data = {};
        if ($('#product-card-' + productId).length > 0) {
            var attributes = {};
            var count = $('.material-list .material-item.active, .material-select .option.active').length;
            if (FenixOptions.debugProductCard) console.log('Найдено выбранных материалов:' + count);
            $('.product-card .material-list .material-item.active, .material-select .option.active').each(function () {
                var attributeId = $(this).data('attribute');
                var valueId = $(this).data('value');
                attributes[attributeId] = valueId
            });
            if (FenixOptions.debugProductCard) console.log('Найдено выбранных атрибутов:' + $('.configurable-block .option.selected').length);
            $('.product-card .configurable-block .option.selected').each(function () {
                var attributeId = $(this).data('attribute');
                var valueId = $(this).data('value');
                if (attributeId != 298)
                    attributes[attributeId] = valueId
            });
            var options = {};
            if (FenixOptions.debugProductCard) console.log('Найдено выбранных опций:' + $('.extra-options .option a.active').length);
            $('.product-card .extra-options .option a.active').each(function (index) {
                var optionId = $(this).data('id');
                options[index] = optionId
            });
            data.product_id = productId;
            data.attributes = attributes;
            data.options = options
        }
        return data
    },
    getConfigurablePrice: function (productId, values) {
        var url = FenixOptions.langUrl + '/api/ajax/product/configurable/price';
        $.ajax({
            type: "POST",
            dataType: "json",
            url: url,
            data: {
                product_id: productId,
                values: values
            },
            success: function (data) {
                console.log(data);
                return data
            }
        })
    },
    qtyPlus: function (id) {
        var _this = this;
        var qtyBlock = $('#' + id);
        var _value = parseInt(qtyBlock.val());
        if (isNaN(_value)) _value = 0;
        _value++;
        qtyBlock.val(_value);
        return !1
    },
    qtyMinus: function (id) {
        var _this = this;
        var qtyBlock = $('#' + id);
        var _value = parseInt(qtyBlock.val());
        if (isNaN(_value)) _value = 1;
        if (_value > 1)
            _value--;
        qtyBlock.val(_value);
        return !1
    },
    changeQty: function (_this) {
        if (isNaN(_this.value)) _this.value = 1;
        if (_this.value > 10000) _this.value = 10000;
        if (_this.value < 0 || _this.value == '') _this.value = 1
    },
    updateProductCardPrice: function () {
        var id = $('#size').find(':selected').val();
        $('.price-variant').hide();
        $('.price-variant').removeClass('active');
        $('#' + id).show();
        $('#' + id).addClass('active')
    }
};
var FenixCatalog = {
    loadMore: function (trigger) {
        var page = parseInt($(trigger).data('page'));
        var perpage = parseInt($(trigger).data('perpage'));
        console.log($(trigger));
        var url = $(trigger).data('url') + '?page=' + (page + 1) + '&perPage=' + (perpage);
        console.log(url);
        $(trigger).addClass('loading');
        $.ajax({
            type: "POST",
            url: url,
            dataType: 'json',
            data: {
                'action': 'load-more'
            },
            success: function (data) {
                $(trigger).removeClass('loading');
                $(trigger).data('page', page + 1);
                if ((page + 1) == data.pagesCount) {
                    $(trigger).hide()
                }
                $('.products-list.load-more-target').append(data.products);
                $('.paginationControl .item').each(function () {
                    if (parseInt($(this).html()) == page + 1) {
                        $(this).addClass('current')
                    }
                });
                setTimeout(function () {
                    if ($(window).width() > 639) {
                        smartColumnsTest($('.products-list'), $('.product-block'), 304)
                    } else {
                        smartColumnsTest($('.products-list'), $('.product-block'), 150)
                    }
                }, 300)
            }
        })
    }
};
var Fenix = {
    strpos: function (haystack, needle, offset) {
        var i = haystack.indexOf(needle, offset);
        return i >= 0 ? i : !1
    }
};
var FenixRender = {
    productHover: function ($block, productId) {
        var url = '/catalog/ajax/blocks/hover/product_id/' + productId;
        $.ajax({
            type: "GET",
            url: url,
            data: {},
            success: function (data) {
                $block.html(data)
            }
        })
    },
    productGroups: function ($block, productId, attrSysTitle) {
        var url = '/catalog/ajax/blocks/groups/product_id/' + productId + '/attr_sys_title/' + attrSysTitle;
        $.ajax({
            type: "GET",
            url: url,
            data: {},
            success: function (data) {
                $block.html(data)
            }
        })
    }
};
! function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function () {},
        u = !!window.jQuery,
        v = a(window),
        w = function (a, c) {
            b.ev.on(o + a + p, c)
        },
        x = function (b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        y = function (c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        z = function (c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        },
        A = function () {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        },
        B = function () {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t,
        init: function () {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function (c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function () {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        },
        close: function () {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function () {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        },
        updateSize: function (a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        },
        updateItemHTML: function () {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function (a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        },
        parseEl: function (c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                    el: a(e)
                } : (d = e.type, e = {
                    data: e,
                    src: e.src
                }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        },
        addGroup: function (a, c) {
            var d = function (d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function (c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function (a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        },
        _checkIfClose: function (c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToMFP: function (a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        },
        _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        },
        _hasScrollBar: function (a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function () {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function (c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        },
        _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
                if (void 0 === d || d === !1) return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else b.find(p + "-" + c).html(d)
            })
        },
        _getScrollbarSize: function () {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function (b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function () {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function (b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, a.fn.magnificPopup = function (c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                    mfpEl: e
                }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline",
        G = function () {
            E && (D.after(E.addClass(C)).detach(), E = null)
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function () {
                b.types.push(F), w(h + "." + F, function () {
                    G()
                })
            },
            getInline: function (c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax",
        J = function () {
            H && a(document.body).removeClass(H)
        },
        K = function () {
            J(), b.req && b.req.abort()
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function () {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            },
            getAjax: function (c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function (d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    },
                    error: function () {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function (c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function () {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function () {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function () {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function () {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function (a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            },
            findImageSize: function (a) {
                var c = 0,
                    d = a.img[0],
                    e = function (f) {
                        L && clearInterval(L), L = setInterval(function () {
                            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                        }, f)
                    };
                e(1)
            },
            getImage: function (c, d) {
                var e = 0,
                    f = function () {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function () {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function () {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function () {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        j = function (a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function () {
                            b.content.css("visibility", "visible")
                        };
                    w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                                f.css(b._getOffset(!0)), e = setTimeout(function () {
                                    k(), setTimeout(function () {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function () {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            },
            _allowZoom: function () {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function () {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function (c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function (a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function () {
                b.types.push(P), w("BeforeChange", function (a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function () {
                    R()
                })
            },
            getIframe: function (c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function (a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        T = function (a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function () {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function (a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function (a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function (a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function () {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function () {
                            b.prev()
                        }), f.click(function () {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function () {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function () {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function () {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            },
            prev: function () {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            },
            goTo: function (a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            },
            preloadNearbyImages: function () {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function (c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
                        d.hasSize = !0
                    }).on("error.mfploader", function () {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }), w("ElementParse." + U, function (b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), A()
});
(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory)
    } else if (typeof module !== "undefined" && module.exports) {
        module.exports = factory
    } else {
        factory(jQuery, window, document)
    }
}(function ($) {
    (function (init) {
        var _rjs = typeof define === "function" && define.amd,
            _njs = typeof module !== "undefined" && module.exports,
            _dlp = ("https:" == document.location.protocol) ? "https:" : "http:",
            _url = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
        if (!_rjs) {
            if (_njs) {
                require("jquery-mousewheel")($)
            } else {
                $.event.special.mousewheel || $("head").append(decodeURI("%3Cscript src=" + _dlp + "//" + _url + "%3E%3C/script%3E"))
            }
        }
        init()
    }(function () {
        var pluginNS = "mCustomScrollbar",
            pluginPfx = "mCS",
            defaultSelector = ".mCustomScrollbar",
            defaults = {
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: !0,
                alwaysShowScrollbar: 0,
                snapOffset: 0,
                mouseWheel: {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    deltaFactor: "auto",
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                scrollButtons: {
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                keyboard: {
                    enable: !0,
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                contentTouchScroll: 25,
                documentTouchScroll: !0,
                advanced: {
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    updateOnContentResize: !0,
                    updateOnImageLoad: "auto",
                    autoUpdateTimeout: 60
                },
                theme: "light",
                callbacks: {
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    alwaysTriggerOffsets: !0
                }
            },
            totalInstances = 0,
            liveTimers = {},
            oldIE = (window.attachEvent && !window.addEventListener) ? 1 : 0,
            touchActive = !1,
            touchable, classes = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
            methods = {
                init: function (options) {
                    var options = $.extend(!0, {}, defaults, options),
                        selector = _selector.call(this);
                    if (options.live) {
                        var liveSelector = options.liveSelector || this.selector || defaultSelector,
                            $liveSelector = $(liveSelector);
                        if (options.live === "off") {
                            removeLiveTimers(liveSelector);
                            return
                        }
                        liveTimers[liveSelector] = setTimeout(function () {
                            $liveSelector.mCustomScrollbar(options);
                            if (options.live === "once" && $liveSelector.length) {
                                removeLiveTimers(liveSelector)
                            }
                        }, 500)
                    } else {
                        removeLiveTimers(liveSelector)
                    }
                    options.setWidth = (options.set_width) ? options.set_width : options.setWidth;
                    options.setHeight = (options.set_height) ? options.set_height : options.setHeight;
                    options.axis = (options.horizontalScroll) ? "x" : _findAxis(options.axis);
                    options.scrollInertia = options.scrollInertia > 0 && options.scrollInertia < 17 ? 17 : options.scrollInertia;
                    if (typeof options.mouseWheel !== "object" && options.mouseWheel == !0) {
                        options.mouseWheel = {
                            enable: !0,
                            scrollAmount: "auto",
                            axis: "y",
                            preventDefault: !1,
                            deltaFactor: "auto",
                            normalizeDelta: !1,
                            invert: !1
                        }
                    }
                    options.mouseWheel.scrollAmount = !options.mouseWheelPixels ? options.mouseWheel.scrollAmount : options.mouseWheelPixels;
                    options.mouseWheel.normalizeDelta = !options.advanced.normalizeMouseWheelDelta ? options.mouseWheel.normalizeDelta : options.advanced.normalizeMouseWheelDelta;
                    options.scrollButtons.scrollType = _findScrollButtonsType(options.scrollButtons.scrollType);
                    _theme(options);
                    return $(selector).each(function () {
                        var $this = $(this);
                        if (!$this.data(pluginPfx)) {
                            $this.data(pluginPfx, {
                                idx: ++totalInstances,
                                opt: options,
                                scrollRatio: {
                                    y: null,
                                    x: null
                                },
                                overflowed: null,
                                contentReset: {
                                    y: null,
                                    x: null
                                },
                                bindEvents: !1,
                                tweenRunning: !1,
                                sequential: {},
                                langDir: $this.css("direction"),
                                cbOffsets: null,
                                trigger: null,
                                poll: {
                                    size: {
                                        o: 0,
                                        n: 0
                                    },
                                    img: {
                                        o: 0,
                                        n: 0
                                    },
                                    change: {
                                        o: 0,
                                        n: 0
                                    }
                                }
                            });
                            var d = $this.data(pluginPfx),
                                o = d.opt,
                                htmlDataAxis = $this.data("mcs-axis"),
                                htmlDataSbPos = $this.data("mcs-scrollbar-position"),
                                htmlDataTheme = $this.data("mcs-theme");
                            if (htmlDataAxis) {
                                o.axis = htmlDataAxis
                            }
                            if (htmlDataSbPos) {
                                o.scrollbarPosition = htmlDataSbPos
                            }
                            if (htmlDataTheme) {
                                o.theme = htmlDataTheme;
                                _theme(o)
                            }
                            _pluginMarkup.call(this);
                            if (d && o.callbacks.onCreate && typeof o.callbacks.onCreate === "function") {
                                o.callbacks.onCreate.call(this)
                            }
                            $("#mCSB_" + d.idx + "_container img:not(." + classes[2] + ")").addClass(classes[2]);
                            methods.update.call(null, $this)
                        }
                    })
                },
                update: function (el, cb) {
                    var selector = el || _selector.call(this);
                    return $(selector).each(function () {
                        var $this = $(this);
                        if ($this.data(pluginPfx)) {
                            var d = $this.data(pluginPfx),
                                o = d.opt,
                                mCSB_container = $("#mCSB_" + d.idx + "_container"),
                                mCustomScrollBox = $("#mCSB_" + d.idx),
                                mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")];
                            if (!mCSB_container.length) {
                                return
                            }
                            if (d.tweenRunning) {
                                _stop($this)
                            }
                            if (cb && d && o.callbacks.onBeforeUpdate && typeof o.callbacks.onBeforeUpdate === "function") {
                                o.callbacks.onBeforeUpdate.call(this)
                            }
                            if ($this.hasClass(classes[3])) {
                                $this.removeClass(classes[3])
                            }
                            if ($this.hasClass(classes[4])) {
                                $this.removeClass(classes[4])
                            }
                            mCustomScrollBox.css("max-height", "none");
                            if (mCustomScrollBox.height() !== $this.height()) {
                                mCustomScrollBox.css("max-height", $this.height())
                            }
                            _expandContentHorizontally.call(this);
                            if (o.axis !== "y" && !o.advanced.autoExpandHorizontalScroll) {
                                mCSB_container.css("width", _contentWidth(mCSB_container))
                            }
                            d.overflowed = _overflowed.call(this);
                            _scrollbarVisibility.call(this);
                            if (o.autoDraggerLength) {
                                _setDraggerLength.call(this)
                            }
                            _scrollRatio.call(this);
                            _bindEvents.call(this);
                            var to = [Math.abs(mCSB_container[0].offsetTop), Math.abs(mCSB_container[0].offsetLeft)];
                            if (o.axis !== "x") {
                                if (!d.overflowed[0]) {
                                    _resetContentPosition.call(this);
                                    if (o.axis === "y") {
                                        _unbindEvents.call(this)
                                    } else if (o.axis === "yx" && d.overflowed[1]) {
                                        _scrollTo($this, to[1].toString(), {
                                            dir: "x",
                                            dur: 0,
                                            overwrite: "none"
                                        })
                                    }
                                } else if (mCSB_dragger[0].height() > mCSB_dragger[0].parent().height()) {
                                    _resetContentPosition.call(this)
                                } else {
                                    _scrollTo($this, to[0].toString(), {
                                        dir: "y",
                                        dur: 0,
                                        overwrite: "none"
                                    });
                                    d.contentReset.y = null
                                }
                            }
                            if (o.axis !== "y") {
                                if (!d.overflowed[1]) {
                                    _resetContentPosition.call(this);
                                    if (o.axis === "x") {
                                        _unbindEvents.call(this)
                                    } else if (o.axis === "yx" && d.overflowed[0]) {
                                        _scrollTo($this, to[0].toString(), {
                                            dir: "y",
                                            dur: 0,
                                            overwrite: "none"
                                        })
                                    }
                                } else if (mCSB_dragger[1].width() > mCSB_dragger[1].parent().width()) {
                                    _resetContentPosition.call(this)
                                } else {
                                    _scrollTo($this, to[1].toString(), {
                                        dir: "x",
                                        dur: 0,
                                        overwrite: "none"
                                    });
                                    d.contentReset.x = null
                                }
                            }
                            if (cb && d) {
                                if (cb === 2 && o.callbacks.onImageLoad && typeof o.callbacks.onImageLoad === "function") {
                                    o.callbacks.onImageLoad.call(this)
                                } else if (cb === 3 && o.callbacks.onSelectorChange && typeof o.callbacks.onSelectorChange === "function") {
                                    o.callbacks.onSelectorChange.call(this)
                                } else if (o.callbacks.onUpdate && typeof o.callbacks.onUpdate === "function") {
                                    o.callbacks.onUpdate.call(this)
                                }
                            }
                            _autoUpdate.call(this)
                        }
                    })
                },
                scrollTo: function (val, options) {
                    if (typeof val == "undefined" || val == null) {
                        return
                    }
                    var selector = _selector.call(this);
                    return $(selector).each(function () {
                        var $this = $(this);
                        if ($this.data(pluginPfx)) {
                            var d = $this.data(pluginPfx),
                                o = d.opt,
                                methodDefaults = {
                                    trigger: "external",
                                    scrollInertia: o.scrollInertia,
                                    scrollEasing: "mcsEaseInOut",
                                    moveDragger: !1,
                                    timeout: 60,
                                    callbacks: !0,
                                    onStart: !0,
                                    onUpdate: !0,
                                    onComplete: !0
                                },
                                methodOptions = $.extend(!0, {}, methodDefaults, options),
                                to = _arr.call(this, val),
                                dur = methodOptions.scrollInertia > 0 && methodOptions.scrollInertia < 17 ? 17 : methodOptions.scrollInertia;
                            to[0] = _to.call(this, to[0], "y");
                            to[1] = _to.call(this, to[1], "x");
                            if (methodOptions.moveDragger) {
                                to[0] *= d.scrollRatio.y;
                                to[1] *= d.scrollRatio.x
                            }
                            methodOptions.dur = _isTabHidden() ? 0 : dur;
                            setTimeout(function () {
                                if (to[0] !== null && typeof to[0] !== "undefined" && o.axis !== "x" && d.overflowed[0]) {
                                    methodOptions.dir = "y";
                                    methodOptions.overwrite = "all";
                                    _scrollTo($this, to[0].toString(), methodOptions)
                                }
                                if (to[1] !== null && typeof to[1] !== "undefined" && o.axis !== "y" && d.overflowed[1]) {
                                    methodOptions.dir = "x";
                                    methodOptions.overwrite = "none";
                                    _scrollTo($this, to[1].toString(), methodOptions)
                                }
                            }, methodOptions.timeout)
                        }
                    })
                },
                stop: function () {
                    var selector = _selector.call(this);
                    return $(selector).each(function () {
                        var $this = $(this);
                        if ($this.data(pluginPfx)) {
                            _stop($this)
                        }
                    })
                },
                disable: function (r) {
                    var selector = _selector.call(this);
                    return $(selector).each(function () {
                        var $this = $(this);
                        if ($this.data(pluginPfx)) {
                            var d = $this.data(pluginPfx);
                            _autoUpdate.call(this, "remove");
                            _unbindEvents.call(this);
                            if (r) {
                                _resetContentPosition.call(this)
                            }
                            _scrollbarVisibility.call(this, !0);
                            $this.addClass(classes[3])
                        }
                    })
                },
                destroy: function () {
                    var selector = _selector.call(this);
                    return $(selector).each(function () {
                        var $this = $(this);
                        if ($this.data(pluginPfx)) {
                            var d = $this.data(pluginPfx),
                                o = d.opt,
                                mCustomScrollBox = $("#mCSB_" + d.idx),
                                mCSB_container = $("#mCSB_" + d.idx + "_container"),
                                scrollbar = $(".mCSB_" + d.idx + "_scrollbar");
                            if (o.live) {
                                removeLiveTimers(o.liveSelector || $(selector).selector)
                            }
                            _autoUpdate.call(this, "remove");
                            _unbindEvents.call(this);
                            _resetContentPosition.call(this);
                            $this.removeData(pluginPfx);
                            _delete(this, "mcs");
                            scrollbar.remove();
                            mCSB_container.find("img." + classes[2]).removeClass(classes[2]);
                            mCustomScrollBox.replaceWith(mCSB_container.contents());
                            $this.removeClass(pluginNS + " _" + pluginPfx + "_" + d.idx + " " + classes[6] + " " + classes[7] + " " + classes[5] + " " + classes[3]).addClass(classes[4])
                        }
                    })
                }
            },
            _selector = function () {
                return (typeof $(this) !== "object" || $(this).length < 1) ? defaultSelector : this
            },
            _theme = function (obj) {
                var fixedSizeScrollbarThemes = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                    nonExpandedScrollbarThemes = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                    disabledScrollButtonsThemes = ["minimal", "minimal-dark"],
                    enabledAutoHideScrollbarThemes = ["minimal", "minimal-dark"],
                    scrollbarPositionOutsideThemes = ["minimal", "minimal-dark"];
                obj.autoDraggerLength = $.inArray(obj.theme, fixedSizeScrollbarThemes) > -1 ? !1 : obj.autoDraggerLength;
                obj.autoExpandScrollbar = $.inArray(obj.theme, nonExpandedScrollbarThemes) > -1 ? !1 : obj.autoExpandScrollbar;
                obj.scrollButtons.enable = $.inArray(obj.theme, disabledScrollButtonsThemes) > -1 ? !1 : obj.scrollButtons.enable;
                obj.autoHideScrollbar = $.inArray(obj.theme, enabledAutoHideScrollbarThemes) > -1 ? !0 : obj.autoHideScrollbar;
                obj.scrollbarPosition = $.inArray(obj.theme, scrollbarPositionOutsideThemes) > -1 ? "outside" : obj.scrollbarPosition
            },
            removeLiveTimers = function (selector) {
                if (liveTimers[selector]) {
                    clearTimeout(liveTimers[selector]);
                    _delete(liveTimers, selector)
                }
            },
            _findAxis = function (val) {
                return (val === "yx" || val === "xy" || val === "auto") ? "yx" : (val === "x" || val === "horizontal") ? "x" : "y"
            },
            _findScrollButtonsType = function (val) {
                return (val === "stepped" || val === "pixels" || val === "step" || val === "click") ? "stepped" : "stepless"
            },
            _pluginMarkup = function () {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    expandClass = o.autoExpandScrollbar ? " " + classes[1] + "_expand" : "",
                    scrollbar = ["<div id='mCSB_" + d.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + d.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_vertical" + expandClass + "'><div class='" + classes[12] + "'><div id='mCSB_" + d.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + d.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + d.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_horizontal" + expandClass + "'><div class='" + classes[12] + "'><div id='mCSB_" + d.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                    wrapperClass = o.axis === "yx" ? "mCSB_vertical_horizontal" : o.axis === "x" ? "mCSB_horizontal" : "mCSB_vertical",
                    scrollbars = o.axis === "yx" ? scrollbar[0] + scrollbar[1] : o.axis === "x" ? scrollbar[1] : scrollbar[0],
                    contentWrapper = o.axis === "yx" ? "<div id='mCSB_" + d.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                    autoHideClass = o.autoHideScrollbar ? " " + classes[6] : "",
                    scrollbarDirClass = (o.axis !== "x" && d.langDir === "rtl") ? " " + classes[7] : "";
                if (o.setWidth) {
                    $this.css("width", o.setWidth)
                }
                if (o.setHeight) {
                    $this.css("height", o.setHeight)
                }
                o.setLeft = (o.axis !== "y" && d.langDir === "rtl") ? "989999px" : o.setLeft;
                $this.addClass(pluginNS + " _" + pluginPfx + "_" + d.idx + autoHideClass + scrollbarDirClass).wrapInner("<div id='mCSB_" + d.idx + "' class='mCustomScrollBox mCS-" + o.theme + " " + wrapperClass + "'><div id='mCSB_" + d.idx + "_container' class='mCSB_container' style='position:relative; top:" + o.setTop + "; left:" + o.setLeft + ";' dir='" + d.langDir + "' /></div>");
                var mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container");
                if (o.axis !== "y" && !o.advanced.autoExpandHorizontalScroll) {
                    mCSB_container.css("width", _contentWidth(mCSB_container))
                }
                if (o.scrollbarPosition === "outside") {
                    if ($this.css("position") === "static") {
                        $this.css("position", "relative")
                    }
                    $this.css("overflow", "visible");
                    mCustomScrollBox.addClass("mCSB_outside").after(scrollbars)
                } else {
                    mCustomScrollBox.addClass("mCSB_inside").append(scrollbars);
                    mCSB_container.wrap(contentWrapper)
                }
                _scrollButtons.call(this);
                var mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")];
                mCSB_dragger[0].css("min-height", mCSB_dragger[0].height());
                mCSB_dragger[1].css("min-width", mCSB_dragger[1].width())
            },
            _contentWidth = function (el) {
                var val = [el[0].scrollWidth, Math.max.apply(Math, el.children().map(function () {
                        return $(this).outerWidth(!0)
                    }).get())],
                    w = el.parent().width();
                return val[0] > w ? val[0] : val[1] > w ? val[1] : "100%"
            },
            _expandContentHorizontally = function () {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    mCSB_container = $("#mCSB_" + d.idx + "_container");
                if (o.advanced.autoExpandHorizontalScroll && o.axis !== "y") {
                    mCSB_container.css({
                        "width": "auto",
                        "min-width": 0,
                        "overflow-x": "scroll"
                    });
                    var w = Math.ceil(mCSB_container[0].scrollWidth);
                    if (o.advanced.autoExpandHorizontalScroll === 3 || (o.advanced.autoExpandHorizontalScroll !== 2 && w > mCSB_container.parent().width())) {
                        mCSB_container.css({
                            "width": w,
                            "min-width": "100%",
                            "overflow-x": "inherit"
                        })
                    } else {
                        mCSB_container.css({
                            "overflow-x": "inherit",
                            "position": "absolute"
                        }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                            "width": (Math.ceil(mCSB_container[0].getBoundingClientRect().right + 0.4) - Math.floor(mCSB_container[0].getBoundingClientRect().left)),
                            "min-width": "100%",
                            "position": "relative"
                        }).unwrap()
                    }
                }
            },
            _scrollButtons = function () {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    mCSB_scrollTools = $(".mCSB_" + d.idx + "_scrollbar:first"),
                    tabindex = !_isNumeric(o.scrollButtons.tabindex) ? "" : "tabindex='" + o.scrollButtons.tabindex + "'",
                    btnHTML = ["<a href='#' class='" + classes[13] + "' " + tabindex + " />", "<a href='#' class='" + classes[14] + "' " + tabindex + " />", "<a href='#' class='" + classes[15] + "' " + tabindex + " />", "<a href='#' class='" + classes[16] + "' " + tabindex + " />"],
                    btn = [(o.axis === "x" ? btnHTML[2] : btnHTML[0]), (o.axis === "x" ? btnHTML[3] : btnHTML[1]), btnHTML[2], btnHTML[3]];
                if (o.scrollButtons.enable) {
                    mCSB_scrollTools.prepend(btn[0]).append(btn[1]).next(".mCSB_scrollTools").prepend(btn[2]).append(btn[3])
                }
            },
            _setDraggerLength = function () {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")],
                    ratio = [mCustomScrollBox.height() / mCSB_container.outerHeight(!1), mCustomScrollBox.width() / mCSB_container.outerWidth(!1)],
                    l = [parseInt(mCSB_dragger[0].css("min-height")), Math.round(ratio[0] * mCSB_dragger[0].parent().height()), parseInt(mCSB_dragger[1].css("min-width")), Math.round(ratio[1] * mCSB_dragger[1].parent().width())],
                    h = oldIE && (l[1] < l[0]) ? l[0] : l[1],
                    w = oldIE && (l[3] < l[2]) ? l[2] : l[3];
                mCSB_dragger[0].css({
                    "height": h,
                    "max-height": (mCSB_dragger[0].parent().height() - 10)
                }).find(".mCSB_dragger_bar").css({
                    "line-height": l[0] + "px"
                });
                mCSB_dragger[1].css({
                    "width": w,
                    "max-width": (mCSB_dragger[1].parent().width() - 10)
                })
            },
            _scrollRatio = function () {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")],
                    scrollAmount = [mCSB_container.outerHeight(!1) - mCustomScrollBox.height(), mCSB_container.outerWidth(!1) - mCustomScrollBox.width()],
                    ratio = [scrollAmount[0] / (mCSB_dragger[0].parent().height() - mCSB_dragger[0].height()), scrollAmount[1] / (mCSB_dragger[1].parent().width() - mCSB_dragger[1].width())];
                d.scrollRatio = {
                    y: ratio[0],
                    x: ratio[1]
                }
            },
            _onDragClasses = function (el, action, xpnd) {
                var expandClass = xpnd ? classes[0] + "_expanded" : "",
                    scrollbar = el.closest(".mCSB_scrollTools");
                if (action === "active") {
                    el.toggleClass(classes[0] + " " + expandClass);
                    scrollbar.toggleClass(classes[1]);
                    el[0]._draggable = el[0]._draggable ? 0 : 1
                } else {
                    if (!el[0]._draggable) {
                        if (action === "hide") {
                            el.removeClass(classes[0]);
                            scrollbar.removeClass(classes[1])
                        } else {
                            el.addClass(classes[0]);
                            scrollbar.addClass(classes[1])
                        }
                    }
                }
            },
            _overflowed = function () {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    contentHeight = d.overflowed == null ? mCSB_container.height() : mCSB_container.outerHeight(!1),
                    contentWidth = d.overflowed == null ? mCSB_container.width() : mCSB_container.outerWidth(!1),
                    h = mCSB_container[0].scrollHeight,
                    w = mCSB_container[0].scrollWidth;
                if (h > contentHeight) {
                    contentHeight = h
                }
                if (w > contentWidth) {
                    contentWidth = w
                }
                return [contentHeight > mCustomScrollBox.height(), contentWidth > mCustomScrollBox.width()]
            },
            _resetContentPosition = function () {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")];
                _stop($this);
                if ((o.axis !== "x" && !d.overflowed[0]) || (o.axis === "y" && d.overflowed[0])) {
                    mCSB_dragger[0].add(mCSB_container).css("top", 0);
                    _scrollTo($this, "_resetY")
                }
                if ((o.axis !== "y" && !d.overflowed[1]) || (o.axis === "x" && d.overflowed[1])) {
                    var cx = dx = 0;
                    if (d.langDir === "rtl") {
                        cx = mCustomScrollBox.width() - mCSB_container.outerWidth(!1);
                        dx = Math.abs(cx / d.scrollRatio.x)
                    }
                    mCSB_container.css("left", cx);
                    mCSB_dragger[1].css("left", dx);
                    _scrollTo($this, "_resetX")
                }
            },
            _bindEvents = function () {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt;
                if (!d.bindEvents) {
                    _draggable.call(this);
                    if (o.contentTouchScroll) {
                        _contentDraggable.call(this)
                    }
                    _selectable.call(this);
                    if (o.mouseWheel.enable) {
                        function _mwt() {
                            mousewheelTimeout = setTimeout(function () {
                                if (!$.event.special.mousewheel) {
                                    _mwt()
                                } else {
                                    clearTimeout(mousewheelTimeout);
                                    _mousewheel.call($this[0])
                                }
                            }, 100)
                        }
                        var mousewheelTimeout;
                        _mwt()
                    }
                    _draggerRail.call(this);
                    _wrapperScroll.call(this);
                    if (o.advanced.autoScrollOnFocus) {
                        _focus.call(this)
                    }
                    if (o.scrollButtons.enable) {
                        _buttons.call(this)
                    }
                    if (o.keyboard.enable) {
                        _keyboard.call(this)
                    }
                    d.bindEvents = !0
                }
            },
            _unbindEvents = function () {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    namespace = pluginPfx + "_" + d.idx,
                    sb = ".mCSB_" + d.idx + "_scrollbar",
                    sel = $("#mCSB_" + d.idx + ",#mCSB_" + d.idx + "_container,#mCSB_" + d.idx + "_container_wrapper," + sb + " ." + classes[12] + ",#mCSB_" + d.idx + "_dragger_vertical,#mCSB_" + d.idx + "_dragger_horizontal," + sb + ">a"),
                    mCSB_container = $("#mCSB_" + d.idx + "_container");
                if (o.advanced.releaseDraggableSelectors) {
                    sel.add($(o.advanced.releaseDraggableSelectors))
                }
                if (o.advanced.extraDraggableSelectors) {
                    sel.add($(o.advanced.extraDraggableSelectors))
                }
                if (d.bindEvents) {
                    $(document).add($(!_canAccessIFrame() || top.document)).unbind("." + namespace);
                    sel.each(function () {
                        $(this).unbind("." + namespace)
                    });
                    clearTimeout($this[0]._focusTimeout);
                    _delete($this[0], "_focusTimeout");
                    clearTimeout(d.sequential.step);
                    _delete(d.sequential, "step");
                    clearTimeout(mCSB_container[0].onCompleteTimeout);
                    _delete(mCSB_container[0], "onCompleteTimeout");
                    d.bindEvents = !1
                }
            },
            _scrollbarVisibility = function (disabled) {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    contentWrapper = $("#mCSB_" + d.idx + "_container_wrapper"),
                    content = contentWrapper.length ? contentWrapper : $("#mCSB_" + d.idx + "_container"),
                    scrollbar = [$("#mCSB_" + d.idx + "_scrollbar_vertical"), $("#mCSB_" + d.idx + "_scrollbar_horizontal")],
                    mCSB_dragger = [scrollbar[0].find(".mCSB_dragger"), scrollbar[1].find(".mCSB_dragger")];
                if (o.axis !== "x") {
                    if (d.overflowed[0] && !disabled) {
                        scrollbar[0].add(mCSB_dragger[0]).add(scrollbar[0].children("a")).css("display", "block");
                        content.removeClass(classes[8] + " " + classes[10])
                    } else {
                        if (o.alwaysShowScrollbar) {
                            if (o.alwaysShowScrollbar !== 2) {
                                mCSB_dragger[0].css("display", "none")
                            }
                            content.removeClass(classes[10])
                        } else {
                            scrollbar[0].css("display", "none");
                            content.addClass(classes[10])
                        }
                        content.addClass(classes[8])
                    }
                }
                if (o.axis !== "y") {
                    if (d.overflowed[1] && !disabled) {
                        scrollbar[1].add(mCSB_dragger[1]).add(scrollbar[1].children("a")).css("display", "block");
                        content.removeClass(classes[9] + " " + classes[11])
                    } else {
                        if (o.alwaysShowScrollbar) {
                            if (o.alwaysShowScrollbar !== 2) {
                                mCSB_dragger[1].css("display", "none")
                            }
                            content.removeClass(classes[11])
                        } else {
                            scrollbar[1].css("display", "none");
                            content.addClass(classes[11])
                        }
                        content.addClass(classes[9])
                    }
                }
                if (!d.overflowed[0] && !d.overflowed[1]) {
                    $this.addClass(classes[5])
                } else {
                    $this.removeClass(classes[5])
                }
            },
            _coordinates = function (e) {
                var t = e.type,
                    o = e.target.ownerDocument !== document && frameElement !== null ? [$(frameElement).offset().top, $(frameElement).offset().left] : null,
                    io = _canAccessIFrame() && e.target.ownerDocument !== top.document && frameElement !== null ? [$(e.view.frameElement).offset().top, $(e.view.frameElement).offset().left] : [0, 0];
                switch (t) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return o ? [e.originalEvent.pageY - o[0] + io[0], e.originalEvent.pageX - o[1] + io[1], !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
                        break;
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                            touches = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
                        return e.target.ownerDocument !== document ? [touch.screenY, touch.screenX, touches > 1] : [touch.pageY, touch.pageX, touches > 1];
                        break;
                    default:
                        return o ? [e.pageY - o[0] + io[0], e.pageX - o[1] + io[1], !1] : [e.pageY, e.pageX, !1]
                }
            },
            _draggable = function () {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    namespace = pluginPfx + "_" + d.idx,
                    draggerId = ["mCSB_" + d.idx + "_dragger_vertical", "mCSB_" + d.idx + "_dragger_horizontal"],
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    mCSB_dragger = $("#" + draggerId[0] + ",#" + draggerId[1]),
                    draggable, dragY, dragX, rds = o.advanced.releaseDraggableSelectors ? mCSB_dragger.add($(o.advanced.releaseDraggableSelectors)) : mCSB_dragger,
                    eds = o.advanced.extraDraggableSelectors ? $(!_canAccessIFrame() || top.document).add($(o.advanced.extraDraggableSelectors)) : $(!_canAccessIFrame() || top.document);
                mCSB_dragger.bind("contextmenu." + namespace, function (e) {
                    e.preventDefault()
                }).bind("mousedown." + namespace + " touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace, function (e) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    if (!_mouseBtnLeft(e)) {
                        return
                    }
                    touchActive = !0;
                    if (oldIE) {
                        document.onselectstart = function () {
                            return !1
                        }
                    }
                    _iframe.call(mCSB_container, !1);
                    _stop($this);
                    draggable = $(this);
                    var offset = draggable.offset(),
                        y = _coordinates(e)[0] - offset.top,
                        x = _coordinates(e)[1] - offset.left,
                        h = draggable.height() + offset.top,
                        w = draggable.width() + offset.left;
                    if (y < h && y > 0 && x < w && x > 0) {
                        dragY = y;
                        dragX = x
                    }
                    _onDragClasses(draggable, "active", o.autoExpandScrollbar)
                }).bind("touchmove." + namespace, function (e) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    var offset = draggable.offset(),
                        y = _coordinates(e)[0] - offset.top,
                        x = _coordinates(e)[1] - offset.left;
                    _drag(dragY, dragX, y, x)
                });
                $(document).add(eds).bind("mousemove." + namespace + " pointermove." + namespace + " MSPointerMove." + namespace, function (e) {
                    if (draggable) {
                        var offset = draggable.offset(),
                            y = _coordinates(e)[0] - offset.top,
                            x = _coordinates(e)[1] - offset.left;
                        if (dragY === y && dragX === x) {
                            return
                        }
                        _drag(dragY, dragX, y, x)
                    }
                }).add(rds).bind("mouseup." + namespace + " touchend." + namespace + " pointerup." + namespace + " MSPointerUp." + namespace, function (e) {
                    if (draggable) {
                        _onDragClasses(draggable, "active", o.autoExpandScrollbar);
                        draggable = null
                    }
                    touchActive = !1;
                    if (oldIE) {
                        document.onselectstart = null
                    }
                    _iframe.call(mCSB_container, !0)
                });

                function _drag(dragY, dragX, y, x) {
                    mCSB_container[0].idleTimer = o.scrollInertia < 233 ? 250 : 0;
                    if (draggable.attr("id") === draggerId[1]) {
                        var dir = "x",
                            to = ((draggable[0].offsetLeft - dragX) + x) * d.scrollRatio.x
                    } else {
                        var dir = "y",
                            to = ((draggable[0].offsetTop - dragY) + y) * d.scrollRatio.y
                    }
                    _scrollTo($this, to.toString(), {
                        dir: dir,
                        drag: !0
                    })
                }
            },
            _contentDraggable = function () {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    namespace = pluginPfx + "_" + d.idx,
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")],
                    draggable, dragY, dragX, touchStartY, touchStartX, touchMoveY = [],
                    touchMoveX = [],
                    startTime, runningTime, endTime, distance, speed, amount, durA = 0,
                    durB, overwrite = o.axis === "yx" ? "none" : "all",
                    touchIntent = [],
                    touchDrag, docDrag, iframe = mCSB_container.find("iframe"),
                    events = ["touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace, "touchmove." + namespace + " pointermove." + namespace + " MSPointerMove." + namespace, "touchend." + namespace + " pointerup." + namespace + " MSPointerUp." + namespace],
                    touchAction = document.body.style.touchAction !== undefined && document.body.style.touchAction !== "";
                mCSB_container.bind(events[0], function (e) {
                    _onTouchstart(e)
                }).bind(events[1], function (e) {
                    _onTouchmove(e)
                });
                mCustomScrollBox.bind(events[0], function (e) {
                    _onTouchstart2(e)
                }).bind(events[2], function (e) {
                    _onTouchend(e)
                });
                if (iframe.length) {
                    iframe.each(function () {
                        $(this).bind("load", function () {
                            if (_canAccessIFrame(this)) {
                                $(this.contentDocument || this.contentWindow.document).bind(events[0], function (e) {
                                    _onTouchstart(e);
                                    _onTouchstart2(e)
                                }).bind(events[1], function (e) {
                                    _onTouchmove(e)
                                }).bind(events[2], function (e) {
                                    _onTouchend(e)
                                })
                            }
                        })
                    })
                }

                function _onTouchstart(e) {
                    if (!_pointerTouch(e) || touchActive || _coordinates(e)[2]) {
                        touchable = 0;
                        return
                    }
                    touchable = 1;
                    touchDrag = 0;
                    docDrag = 0;
                    draggable = 1;
                    $this.removeClass("mCS_touch_action");
                    var offset = mCSB_container.offset();
                    dragY = _coordinates(e)[0] - offset.top;
                    dragX = _coordinates(e)[1] - offset.left;
                    touchIntent = [_coordinates(e)[0], _coordinates(e)[1]]
                }

                function _onTouchmove(e) {
                    if (!_pointerTouch(e) || touchActive || _coordinates(e)[2]) {
                        return
                    }
                    if (!o.documentTouchScroll) {
                        e.preventDefault()
                    }
                    e.stopImmediatePropagation();
                    if (docDrag && !touchDrag) {
                        return
                    }
                    if (draggable) {
                        runningTime = _getTime();
                        var offset = mCustomScrollBox.offset(),
                            y = _coordinates(e)[0] - offset.top,
                            x = _coordinates(e)[1] - offset.left,
                            easing = "mcsLinearOut";
                        touchMoveY.push(y);
                        touchMoveX.push(x);
                        touchIntent[2] = Math.abs(_coordinates(e)[0] - touchIntent[0]);
                        touchIntent[3] = Math.abs(_coordinates(e)[1] - touchIntent[1]);
                        if (d.overflowed[0]) {
                            var limit = mCSB_dragger[0].parent().height() - mCSB_dragger[0].height(),
                                prevent = ((dragY - y) > 0 && (y - dragY) > -(limit * d.scrollRatio.y) && (touchIntent[3] * 2 < touchIntent[2] || o.axis === "yx"))
                        }
                        if (d.overflowed[1]) {
                            var limitX = mCSB_dragger[1].parent().width() - mCSB_dragger[1].width(),
                                preventX = ((dragX - x) > 0 && (x - dragX) > -(limitX * d.scrollRatio.x) && (touchIntent[2] * 2 < touchIntent[3] || o.axis === "yx"))
                        }
                        if (prevent || preventX) {
                            if (!touchAction) {
                                e.preventDefault()
                            }
                            touchDrag = 1
                        } else {
                            docDrag = 1;
                            $this.addClass("mCS_touch_action")
                        }
                        if (touchAction) {
                            e.preventDefault()
                        }
                        amount = o.axis === "yx" ? [(dragY - y), (dragX - x)] : o.axis === "x" ? [null, (dragX - x)] : [(dragY - y), null];
                        mCSB_container[0].idleTimer = 250;
                        if (d.overflowed[0]) {
                            _drag(amount[0], durA, easing, "y", "all", !0)
                        }
                        if (d.overflowed[1]) {
                            _drag(amount[1], durA, easing, "x", overwrite, !0)
                        }
                    }
                }

                function _onTouchstart2(e) {
                    if (!_pointerTouch(e) || touchActive || _coordinates(e)[2]) {
                        touchable = 0;
                        return
                    }
                    touchable = 1;
                    e.stopImmediatePropagation();
                    _stop($this);
                    startTime = _getTime();
                    var offset = mCustomScrollBox.offset();
                    touchStartY = _coordinates(e)[0] - offset.top;
                    touchStartX = _coordinates(e)[1] - offset.left;
                    touchMoveY = [];
                    touchMoveX = []
                }

                function _onTouchend(e) {
                    if (!_pointerTouch(e) || touchActive || _coordinates(e)[2]) {
                        return
                    }
                    draggable = 0;
                    e.stopImmediatePropagation();
                    touchDrag = 0;
                    docDrag = 0;
                    endTime = _getTime();
                    var offset = mCustomScrollBox.offset(),
                        y = _coordinates(e)[0] - offset.top,
                        x = _coordinates(e)[1] - offset.left;
                    if ((endTime - runningTime) > 30) {
                        return
                    }
                    speed = 1000 / (endTime - startTime);
                    var easing = "mcsEaseOut",
                        slow = speed < 2.5,
                        diff = slow ? [touchMoveY[touchMoveY.length - 2], touchMoveX[touchMoveX.length - 2]] : [0, 0];
                    distance = slow ? [(y - diff[0]), (x - diff[1])] : [y - touchStartY, x - touchStartX];
                    var absDistance = [Math.abs(distance[0]), Math.abs(distance[1])];
                    speed = slow ? [Math.abs(distance[0] / 4), Math.abs(distance[1] / 4)] : [speed, speed];
                    var a = [Math.abs(mCSB_container[0].offsetTop) - (distance[0] * _m((absDistance[0] / speed[0]), speed[0])), Math.abs(mCSB_container[0].offsetLeft) - (distance[1] * _m((absDistance[1] / speed[1]), speed[1]))];
                    amount = o.axis === "yx" ? [a[0], a[1]] : o.axis === "x" ? [null, a[1]] : [a[0], null];
                    durB = [(absDistance[0] * 4) + o.scrollInertia, (absDistance[1] * 4) + o.scrollInertia];
                    var md = parseInt(o.contentTouchScroll) || 0;
                    amount[0] = absDistance[0] > md ? amount[0] : 0;
                    amount[1] = absDistance[1] > md ? amount[1] : 0;
                    if (d.overflowed[0]) {
                        _drag(amount[0], durB[0], easing, "y", overwrite, !1)
                    }
                    if (d.overflowed[1]) {
                        _drag(amount[1], durB[1], easing, "x", overwrite, !1)
                    }
                }

                function _m(ds, s) {
                    var r = [s * 1.5, s * 2, s / 1.5, s / 2];
                    if (ds > 90) {
                        return s > 4 ? r[0] : r[3]
                    } else if (ds > 60) {
                        return s > 3 ? r[3] : r[2]
                    } else if (ds > 30) {
                        return s > 8 ? r[1] : s > 6 ? r[0] : s > 4 ? s : r[2]
                    } else {
                        return s > 8 ? s : r[3]
                    }
                }

                function _drag(amount, dur, easing, dir, overwrite, drag) {
                    if (!amount) {
                        return
                    }
                    _scrollTo($this, amount.toString(), {
                        dur: dur,
                        scrollEasing: easing,
                        dir: dir,
                        overwrite: overwrite,
                        drag: drag
                    })
                }
            },
            _selectable = function () {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    seq = d.sequential,
                    namespace = pluginPfx + "_" + d.idx,
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    wrapper = mCSB_container.parent(),
                    action;
                mCSB_container.bind("mousedown." + namespace, function (e) {
                    if (touchable) {
                        return
                    }
                    if (!action) {
                        action = 1;
                        touchActive = !0
                    }
                }).add(document).bind("mousemove." + namespace, function (e) {
                    if (!touchable && action && _sel()) {
                        var offset = mCSB_container.offset(),
                            y = _coordinates(e)[0] - offset.top + mCSB_container[0].offsetTop,
                            x = _coordinates(e)[1] - offset.left + mCSB_container[0].offsetLeft;
                        if (y > 0 && y < wrapper.height() && x > 0 && x < wrapper.width()) {
                            if (seq.step) {
                                _seq("off", null, "stepped")
                            }
                        } else {
                            if (o.axis !== "x" && d.overflowed[0]) {
                                if (y < 0) {
                                    _seq("on", 38)
                                } else if (y > wrapper.height()) {
                                    _seq("on", 40)
                                }
                            }
                            if (o.axis !== "y" && d.overflowed[1]) {
                                if (x < 0) {
                                    _seq("on", 37)
                                } else if (x > wrapper.width()) {
                                    _seq("on", 39)
                                }
                            }
                        }
                    }
                }).bind("mouseup." + namespace + " dragend." + namespace, function (e) {
                    if (touchable) {
                        return
                    }
                    if (action) {
                        action = 0;
                        _seq("off", null)
                    }
                    touchActive = !1
                });

                function _sel() {
                    return window.getSelection ? window.getSelection().toString() : document.selection && document.selection.type != "Control" ? document.selection.createRange().text : 0
                }

                function _seq(a, c, s) {
                    seq.type = s && action ? "stepped" : "stepless";
                    seq.scrollAmount = 10;
                    _sequentialScroll($this, a, c, "mcsLinearOut", s ? 60 : null)
                }
            },
            _mousewheel = function () {
                if (!$(this).data(pluginPfx)) {
                    return
                }
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    namespace = pluginPfx + "_" + d.idx,
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")],
                    iframe = $("#mCSB_" + d.idx + "_container").find("iframe");
                if (iframe.length) {
                    iframe.each(function () {
                        $(this).bind("load", function () {
                            if (_canAccessIFrame(this)) {
                                $(this.contentDocument || this.contentWindow.document).bind("mousewheel." + namespace, function (e, delta) {
                                    _onMousewheel(e, delta)
                                })
                            }
                        })
                    })
                }
                mCustomScrollBox.bind("mousewheel." + namespace, function (e, delta) {
                    _onMousewheel(e, delta)
                });

                function _onMousewheel(e, delta) {
                    _stop($this);
                    if (_disableMousewheel($this, e.target)) {
                        return
                    }
                    var deltaFactor = o.mouseWheel.deltaFactor !== "auto" ? parseInt(o.mouseWheel.deltaFactor) : (oldIE && e.deltaFactor < 100) ? 100 : e.deltaFactor || 100,
                        dur = o.scrollInertia;
                    if (o.axis === "x" || o.mouseWheel.axis === "x") {
                        var dir = "x",
                            px = [Math.round(deltaFactor * d.scrollRatio.x), parseInt(o.mouseWheel.scrollAmount)],
                            amount = o.mouseWheel.scrollAmount !== "auto" ? px[1] : px[0] >= mCustomScrollBox.width() ? mCustomScrollBox.width() * 0.9 : px[0],
                            contentPos = Math.abs($("#mCSB_" + d.idx + "_container")[0].offsetLeft),
                            draggerPos = mCSB_dragger[1][0].offsetLeft,
                            limit = mCSB_dragger[1].parent().width() - mCSB_dragger[1].width(),
                            dlt = o.mouseWheel.axis === "y" ? (e.deltaY || delta) : e.deltaX
                    } else {
                        var dir = "y",
                            px = [Math.round(deltaFactor * d.scrollRatio.y), parseInt(o.mouseWheel.scrollAmount)],
                            amount = o.mouseWheel.scrollAmount !== "auto" ? px[1] : px[0] >= mCustomScrollBox.height() ? mCustomScrollBox.height() * 0.9 : px[0],
                            contentPos = Math.abs($("#mCSB_" + d.idx + "_container")[0].offsetTop),
                            draggerPos = mCSB_dragger[0][0].offsetTop,
                            limit = mCSB_dragger[0].parent().height() - mCSB_dragger[0].height(),
                            dlt = e.deltaY || delta
                    }
                    if ((dir === "y" && !d.overflowed[0]) || (dir === "x" && !d.overflowed[1])) {
                        return
                    }
                    if (o.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) {
                        dlt = -dlt
                    }
                    if (o.mouseWheel.normalizeDelta) {
                        dlt = dlt < 0 ? -1 : 1
                    }
                    if ((dlt > 0 && draggerPos !== 0) || (dlt < 0 && draggerPos !== limit) || o.mouseWheel.preventDefault) {
                        e.stopImmediatePropagation();
                        e.preventDefault()
                    }
                    if (e.deltaFactor < 5 && !o.mouseWheel.normalizeDelta) {
                        amount = e.deltaFactor;
                        dur = 17
                    }
                    _scrollTo($this, (contentPos - (dlt * amount)).toString(), {
                        dir: dir,
                        dur: dur
                    })
                }
            },
            _canAccessIFrameCache = new Object(),
            _canAccessIFrame = function (iframe) {
                var result = !1,
                    cacheKey = !1,
                    html = null;
                if (iframe === undefined) {
                    cacheKey = "#empty"
                } else if ($(iframe).attr("id") !== undefined) {
                    cacheKey = $(iframe).attr("id")
                }
                if (cacheKey !== !1 && _canAccessIFrameCache[cacheKey] !== undefined) {
                    return _canAccessIFrameCache[cacheKey]
                }
                if (!iframe) {
                    try {
                        var doc = top.document;
                        html = doc.body.innerHTML
                    } catch (err) {}
                    result = (html !== null)
                } else {
                    try {
                        var doc = iframe.contentDocument || iframe.contentWindow.document;
                        html = doc.body.innerHTML
                    } catch (err) {}
                    result = (html !== null)
                }
                if (cacheKey !== !1) {
                    _canAccessIFrameCache[cacheKey] = result
                }
                return result
            },
            _iframe = function (evt) {
                var el = this.find("iframe");
                if (!el.length) {
                    return
                }
                var val = !evt ? "none" : "auto";
                el.css("pointer-events", val)
            },
            _disableMousewheel = function (el, target) {
                var tag = target.nodeName.toLowerCase(),
                    tags = el.data(pluginPfx).opt.mouseWheel.disableOver,
                    focusTags = ["select", "textarea"];
                return $.inArray(tag, tags) > -1 && !($.inArray(tag, focusTags) > -1 && !$(target).is(":focus"))
            },
            _draggerRail = function () {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    namespace = pluginPfx + "_" + d.idx,
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    wrapper = mCSB_container.parent(),
                    mCSB_draggerContainer = $(".mCSB_" + d.idx + "_scrollbar ." + classes[12]),
                    clickable;
                mCSB_draggerContainer.bind("mousedown." + namespace + " touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace, function (e) {
                    touchActive = !0;
                    if (!$(e.target).hasClass("mCSB_dragger")) {
                        clickable = 1
                    }
                }).bind("touchend." + namespace + " pointerup." + namespace + " MSPointerUp." + namespace, function (e) {
                    touchActive = !1
                }).bind("click." + namespace, function (e) {
                    if (!clickable) {
                        return
                    }
                    clickable = 0;
                    if ($(e.target).hasClass(classes[12]) || $(e.target).hasClass("mCSB_draggerRail")) {
                        _stop($this);
                        var el = $(this),
                            mCSB_dragger = el.find(".mCSB_dragger");
                        if (el.parent(".mCSB_scrollTools_horizontal").length > 0) {
                            if (!d.overflowed[1]) {
                                return
                            }
                            var dir = "x",
                                clickDir = e.pageX > mCSB_dragger.offset().left ? -1 : 1,
                                to = Math.abs(mCSB_container[0].offsetLeft) - (clickDir * (wrapper.width() * 0.9))
                        } else {
                            if (!d.overflowed[0]) {
                                return
                            }
                            var dir = "y",
                                clickDir = e.pageY > mCSB_dragger.offset().top ? -1 : 1,
                                to = Math.abs(mCSB_container[0].offsetTop) - (clickDir * (wrapper.height() * 0.9))
                        }
                        _scrollTo($this, to.toString(), {
                            dir: dir,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                })
            },
            _focus = function () {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    namespace = pluginPfx + "_" + d.idx,
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    wrapper = mCSB_container.parent();
                mCSB_container.bind("focusin." + namespace, function (e) {
                    var el = $(document.activeElement),
                        nested = mCSB_container.find(".mCustomScrollBox").length,
                        dur = 0;
                    if (!el.is(o.advanced.autoScrollOnFocus)) {
                        return
                    }
                    _stop($this);
                    clearTimeout($this[0]._focusTimeout);
                    $this[0]._focusTimer = nested ? (dur + 17) * nested : 0;
                    $this[0]._focusTimeout = setTimeout(function () {
                        var to = [_childPos(el)[0], _childPos(el)[1]],
                            contentPos = [mCSB_container[0].offsetTop, mCSB_container[0].offsetLeft],
                            isVisible = [(contentPos[0] + to[0] >= 0 && contentPos[0] + to[0] < wrapper.height() - el.outerHeight(!1)), (contentPos[1] + to[1] >= 0 && contentPos[0] + to[1] < wrapper.width() - el.outerWidth(!1))],
                            overwrite = (o.axis === "yx" && !isVisible[0] && !isVisible[1]) ? "none" : "all";
                        if (o.axis !== "x" && !isVisible[0]) {
                            _scrollTo($this, to[0].toString(), {
                                dir: "y",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: overwrite,
                                dur: dur
                            })
                        }
                        if (o.axis !== "y" && !isVisible[1]) {
                            _scrollTo($this, to[1].toString(), {
                                dir: "x",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: overwrite,
                                dur: dur
                            })
                        }
                    }, $this[0]._focusTimer)
                })
            },
            _wrapperScroll = function () {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    namespace = pluginPfx + "_" + d.idx,
                    wrapper = $("#mCSB_" + d.idx + "_container").parent();
                wrapper.bind("scroll." + namespace, function (e) {
                    if (wrapper.scrollTop() !== 0 || wrapper.scrollLeft() !== 0) {
                        $(".mCSB_" + d.idx + "_scrollbar").css("visibility", "hidden")
                    }
                })
            },
            _buttons = function () {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    seq = d.sequential,
                    namespace = pluginPfx + "_" + d.idx,
                    sel = ".mCSB_" + d.idx + "_scrollbar",
                    btn = $(sel + ">a");
                btn.bind("contextmenu." + namespace, function (e) {
                    e.preventDefault()
                }).bind("mousedown." + namespace + " touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace + " mouseup." + namespace + " touchend." + namespace + " pointerup." + namespace + " MSPointerUp." + namespace + " mouseout." + namespace + " pointerout." + namespace + " MSPointerOut." + namespace + " click." + namespace, function (e) {
                    e.preventDefault();
                    if (!_mouseBtnLeft(e)) {
                        return
                    }
                    var btnClass = $(this).attr("class");
                    seq.type = o.scrollButtons.scrollType;
                    switch (e.type) {
                        case "mousedown":
                        case "touchstart":
                        case "pointerdown":
                        case "MSPointerDown":
                            if (seq.type === "stepped") {
                                return
                            }
                            touchActive = !0;
                            d.tweenRunning = !1;
                            _seq("on", btnClass);
                            break;
                        case "mouseup":
                        case "touchend":
                        case "pointerup":
                        case "MSPointerUp":
                        case "mouseout":
                        case "pointerout":
                        case "MSPointerOut":
                            if (seq.type === "stepped") {
                                return
                            }
                            touchActive = !1;
                            if (seq.dir) {
                                _seq("off", btnClass)
                            }
                            break;
                        case "click":
                            if (seq.type !== "stepped" || d.tweenRunning) {
                                return
                            }
                            _seq("on", btnClass);
                            break
                    }

                    function _seq(a, c) {
                        seq.scrollAmount = o.scrollButtons.scrollAmount;
                        _sequentialScroll($this, a, c)
                    }
                })
            },
            _keyboard = function () {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    seq = d.sequential,
                    namespace = pluginPfx + "_" + d.idx,
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    wrapper = mCSB_container.parent(),
                    editables = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                    iframe = mCSB_container.find("iframe"),
                    events = ["blur." + namespace + " keydown." + namespace + " keyup." + namespace];
                if (iframe.length) {
                    iframe.each(function () {
                        $(this).bind("load", function () {
                            if (_canAccessIFrame(this)) {
                                $(this.contentDocument || this.contentWindow.document).bind(events[0], function (e) {
                                    _onKeyboard(e)
                                })
                            }
                        })
                    })
                }
                mCustomScrollBox.attr("tabindex", "0").bind(events[0], function (e) {
                    _onKeyboard(e)
                });

                function _onKeyboard(e) {
                    switch (e.type) {
                        case "blur":
                            if (d.tweenRunning && seq.dir) {
                                _seq("off", null)
                            }
                            break;
                        case "keydown":
                        case "keyup":
                            var code = e.keyCode ? e.keyCode : e.which,
                                action = "on";
                            if ((o.axis !== "x" && (code === 38 || code === 40)) || (o.axis !== "y" && (code === 37 || code === 39))) {
                                if (((code === 38 || code === 40) && !d.overflowed[0]) || ((code === 37 || code === 39) && !d.overflowed[1])) {
                                    return
                                }
                                if (e.type === "keyup") {
                                    action = "off"
                                }
                                if (!$(document.activeElement).is(editables)) {
                                    e.preventDefault();
                                    e.stopImmediatePropagation();
                                    _seq(action, code)
                                }
                            } else if (code === 33 || code === 34) {
                                if (d.overflowed[0] || d.overflowed[1]) {
                                    e.preventDefault();
                                    e.stopImmediatePropagation()
                                }
                                if (e.type === "keyup") {
                                    _stop($this);
                                    var keyboardDir = code === 34 ? -1 : 1;
                                    if (o.axis === "x" || (o.axis === "yx" && d.overflowed[1] && !d.overflowed[0])) {
                                        var dir = "x",
                                            to = Math.abs(mCSB_container[0].offsetLeft) - (keyboardDir * (wrapper.width() * 0.9))
                                    } else {
                                        var dir = "y",
                                            to = Math.abs(mCSB_container[0].offsetTop) - (keyboardDir * (wrapper.height() * 0.9))
                                    }
                                    _scrollTo($this, to.toString(), {
                                        dir: dir,
                                        scrollEasing: "mcsEaseInOut"
                                    })
                                }
                            } else if (code === 35 || code === 36) {
                                if (!$(document.activeElement).is(editables)) {
                                    if (d.overflowed[0] || d.overflowed[1]) {
                                        e.preventDefault();
                                        e.stopImmediatePropagation()
                                    }
                                    if (e.type === "keyup") {
                                        if (o.axis === "x" || (o.axis === "yx" && d.overflowed[1] && !d.overflowed[0])) {
                                            var dir = "x",
                                                to = code === 35 ? Math.abs(wrapper.width() - mCSB_container.outerWidth(!1)) : 0
                                        } else {
                                            var dir = "y",
                                                to = code === 35 ? Math.abs(wrapper.height() - mCSB_container.outerHeight(!1)) : 0
                                        }
                                        _scrollTo($this, to.toString(), {
                                            dir: dir,
                                            scrollEasing: "mcsEaseInOut"
                                        })
                                    }
                                }
                            }
                            break
                    }

                    function _seq(a, c) {
                        seq.type = o.keyboard.scrollType;
                        seq.scrollAmount = o.keyboard.scrollAmount;
                        if (seq.type === "stepped" && d.tweenRunning) {
                            return
                        }
                        _sequentialScroll($this, a, c)
                    }
                }
            },
            _sequentialScroll = function (el, action, trigger, e, s) {
                var d = el.data(pluginPfx),
                    o = d.opt,
                    seq = d.sequential,
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    once = seq.type === "stepped" ? !0 : !1,
                    steplessSpeed = o.scrollInertia < 26 ? 26 : o.scrollInertia,
                    steppedSpeed = o.scrollInertia < 1 ? 17 : o.scrollInertia;
                switch (action) {
                    case "on":
                        seq.dir = [(trigger === classes[16] || trigger === classes[15] || trigger === 39 || trigger === 37 ? "x" : "y"), (trigger === classes[13] || trigger === classes[15] || trigger === 38 || trigger === 37 ? -1 : 1)];
                        _stop(el);
                        if (_isNumeric(trigger) && seq.type === "stepped") {
                            return
                        }
                        _on(once);
                        break;
                    case "off":
                        _off();
                        if (once || (d.tweenRunning && seq.dir)) {
                            _on(!0)
                        }
                        break
                }

                function _on(once) {
                    if (o.snapAmount) {
                        seq.scrollAmount = !(o.snapAmount instanceof Array) ? o.snapAmount : seq.dir[0] === "x" ? o.snapAmount[1] : o.snapAmount[0]
                    }
                    var c = seq.type !== "stepped",
                        t = s ? s : !once ? 1000 / 60 : c ? steplessSpeed / 1.5 : steppedSpeed,
                        m = !once ? 2.5 : c ? 7.5 : 40,
                        contentPos = [Math.abs(mCSB_container[0].offsetTop), Math.abs(mCSB_container[0].offsetLeft)],
                        ratio = [d.scrollRatio.y > 10 ? 10 : d.scrollRatio.y, d.scrollRatio.x > 10 ? 10 : d.scrollRatio.x],
                        amount = seq.dir[0] === "x" ? contentPos[1] + (seq.dir[1] * (ratio[1] * m)) : contentPos[0] + (seq.dir[1] * (ratio[0] * m)),
                        px = seq.dir[0] === "x" ? contentPos[1] + (seq.dir[1] * parseInt(seq.scrollAmount)) : contentPos[0] + (seq.dir[1] * parseInt(seq.scrollAmount)),
                        to = seq.scrollAmount !== "auto" ? px : amount,
                        easing = e ? e : !once ? "mcsLinear" : c ? "mcsLinearOut" : "mcsEaseInOut",
                        onComplete = !once ? !1 : !0;
                    if (once && t < 17) {
                        to = seq.dir[0] === "x" ? contentPos[1] : contentPos[0]
                    }
                    _scrollTo(el, to.toString(), {
                        dir: seq.dir[0],
                        scrollEasing: easing,
                        dur: t,
                        onComplete: onComplete
                    });
                    if (once) {
                        seq.dir = !1;
                        return
                    }
                    clearTimeout(seq.step);
                    seq.step = setTimeout(function () {
                        _on()
                    }, t)
                }

                function _off() {
                    clearTimeout(seq.step);
                    _delete(seq, "step");
                    _stop(el)
                }
            },
            _arr = function (val) {
                var o = $(this).data(pluginPfx).opt,
                    vals = [];
                if (typeof val === "function") {
                    val = val()
                }
                if (!(val instanceof Array)) {
                    vals[0] = val.y ? val.y : val.x || o.axis === "x" ? null : val;
                    vals[1] = val.x ? val.x : val.y || o.axis === "y" ? null : val
                } else {
                    vals = val.length > 1 ? [val[0], val[1]] : o.axis === "x" ? [null, val[0]] : [val[0], null]
                }
                if (typeof vals[0] === "function") {
                    vals[0] = vals[0]()
                }
                if (typeof vals[1] === "function") {
                    vals[1] = vals[1]()
                }
                return vals
            },
            _to = function (val, dir) {
                if (val == null || typeof val == "undefined") {
                    return
                }
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    wrapper = mCSB_container.parent(),
                    t = typeof val;
                if (!dir) {
                    dir = o.axis === "x" ? "x" : "y"
                }
                var contentLength = dir === "x" ? mCSB_container.outerWidth(!1) - wrapper.width() : mCSB_container.outerHeight(!1) - wrapper.height(),
                    contentPos = dir === "x" ? mCSB_container[0].offsetLeft : mCSB_container[0].offsetTop,
                    cssProp = dir === "x" ? "left" : "top";
                switch (t) {
                    case "function":
                        return val();
                        break;
                    case "object":
                        var obj = val.jquery ? val : $(val);
                        if (!obj.length) {
                            return
                        }
                        return dir === "x" ? _childPos(obj)[1] : _childPos(obj)[0];
                        break;
                    case "string":
                    case "number":
                        if (_isNumeric(val)) {
                            return Math.abs(val)
                        } else if (val.indexOf("%") !== -1) {
                            return Math.abs(contentLength * parseInt(val) / 100)
                        } else if (val.indexOf("-=") !== -1) {
                            return Math.abs(contentPos - parseInt(val.split("-=")[1]))
                        } else if (val.indexOf("+=") !== -1) {
                            var p = (contentPos + parseInt(val.split("+=")[1]));
                            return p >= 0 ? 0 : Math.abs(p)
                        } else if (val.indexOf("px") !== -1 && _isNumeric(val.split("px")[0])) {
                            return Math.abs(val.split("px")[0])
                        } else {
                            if (val === "top" || val === "left") {
                                return 0
                            } else if (val === "bottom") {
                                return Math.abs(wrapper.height() - mCSB_container.outerHeight(!1))
                            } else if (val === "right") {
                                return Math.abs(wrapper.width() - mCSB_container.outerWidth(!1))
                            } else if (val === "first" || val === "last") {
                                var obj = mCSB_container.find(":" + val);
                                return dir === "x" ? _childPos(obj)[1] : _childPos(obj)[0]
                            } else {
                                if ($(val).length) {
                                    return dir === "x" ? _childPos($(val))[1] : _childPos($(val))[0]
                                } else {
                                    mCSB_container.css(cssProp, val);
                                    methods.update.call(null, $this[0]);
                                    return
                                }
                            }
                        }
                        break
                }
            },
            _autoUpdate = function (rem) {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    mCSB_container = $("#mCSB_" + d.idx + "_container");
                if (rem) {
                    clearTimeout(mCSB_container[0].autoUpdate);
                    _delete(mCSB_container[0], "autoUpdate");
                    return
                }
                upd();

                function upd() {
                    clearTimeout(mCSB_container[0].autoUpdate);
                    if ($this.parents("html").length === 0) {
                        $this = null;
                        return
                    }
                    mCSB_container[0].autoUpdate = setTimeout(function () {
                        if (o.advanced.updateOnSelectorChange) {
                            d.poll.change.n = sizesSum();
                            if (d.poll.change.n !== d.poll.change.o) {
                                d.poll.change.o = d.poll.change.n;
                                doUpd(3);
                                return
                            }
                        }
                        if (o.advanced.updateOnContentResize) {
                            d.poll.size.n = $this[0].scrollHeight + $this[0].scrollWidth + mCSB_container[0].offsetHeight + $this[0].offsetHeight + $this[0].offsetWidth;
                            if (d.poll.size.n !== d.poll.size.o) {
                                d.poll.size.o = d.poll.size.n;
                                doUpd(1);
                                return
                            }
                        }
                        if (o.advanced.updateOnImageLoad) {
                            if (!(o.advanced.updateOnImageLoad === "auto" && o.axis === "y")) {
                                d.poll.img.n = mCSB_container.find("img").length;
                                if (d.poll.img.n !== d.poll.img.o) {
                                    d.poll.img.o = d.poll.img.n;
                                    mCSB_container.find("img").each(function () {
                                        imgLoader(this)
                                    });
                                    return
                                }
                            }
                        }
                        if (o.advanced.updateOnSelectorChange || o.advanced.updateOnContentResize || o.advanced.updateOnImageLoad) {
                            upd()
                        }
                    }, o.advanced.autoUpdateTimeout)
                }

                function imgLoader(el) {
                    if ($(el).hasClass(classes[2])) {
                        doUpd();
                        return
                    }
                    var img = new Image();

                    function createDelegate(contextObject, delegateMethod) {
                        return function () {
                            return delegateMethod.apply(contextObject, arguments)
                        }
                    }

                    function imgOnLoad() {
                        this.onload = null;
                        $(el).addClass(classes[2]);
                        doUpd(2)
                    }
                    img.onload = createDelegate(img, imgOnLoad);
                    img.src = el.src
                }

                function sizesSum() {
                    if (o.advanced.updateOnSelectorChange === !0) {
                        o.advanced.updateOnSelectorChange = "*"
                    }
                    var total = 0,
                        sel = mCSB_container.find(o.advanced.updateOnSelectorChange);
                    if (o.advanced.updateOnSelectorChange && sel.length > 0) {
                        sel.each(function () {
                            total += this.offsetHeight + this.offsetWidth
                        })
                    }
                    return total
                }

                function doUpd(cb) {
                    clearTimeout(mCSB_container[0].autoUpdate);
                    methods.update.call(null, $this[0], cb)
                }
            },
            _snapAmount = function (to, amount, offset) {
                return (Math.round(to / amount) * amount - offset)
            },
            _stop = function (el) {
                var d = el.data(pluginPfx),
                    sel = $("#mCSB_" + d.idx + "_container,#mCSB_" + d.idx + "_container_wrapper,#mCSB_" + d.idx + "_dragger_vertical,#mCSB_" + d.idx + "_dragger_horizontal");
                sel.each(function () {
                    _stopTween.call(this)
                })
            },
            _scrollTo = function (el, to, options) {
                var d = el.data(pluginPfx),
                    o = d.opt,
                    defaults = {
                        trigger: "internal",
                        dir: "y",
                        scrollEasing: "mcsEaseOut",
                        drag: !1,
                        dur: o.scrollInertia,
                        overwrite: "all",
                        callbacks: !0,
                        onStart: !0,
                        onUpdate: !0,
                        onComplete: !0
                    },
                    options = $.extend(defaults, options),
                    dur = [options.dur, (options.drag ? 0 : options.dur)],
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    wrapper = mCSB_container.parent(),
                    totalScrollOffsets = o.callbacks.onTotalScrollOffset ? _arr.call(el, o.callbacks.onTotalScrollOffset) : [0, 0],
                    totalScrollBackOffsets = o.callbacks.onTotalScrollBackOffset ? _arr.call(el, o.callbacks.onTotalScrollBackOffset) : [0, 0];
                d.trigger = options.trigger;
                if (wrapper.scrollTop() !== 0 || wrapper.scrollLeft() !== 0) {
                    $(".mCSB_" + d.idx + "_scrollbar").css("visibility", "visible");
                    wrapper.scrollTop(0).scrollLeft(0)
                }
                if (to === "_resetY" && !d.contentReset.y) {
                    if (_cb("onOverflowYNone")) {
                        o.callbacks.onOverflowYNone.call(el[0])
                    }
                    d.contentReset.y = 1
                }
                if (to === "_resetX" && !d.contentReset.x) {
                    if (_cb("onOverflowXNone")) {
                        o.callbacks.onOverflowXNone.call(el[0])
                    }
                    d.contentReset.x = 1
                }
                if (to === "_resetY" || to === "_resetX") {
                    return
                }
                if ((d.contentReset.y || !el[0].mcs) && d.overflowed[0]) {
                    if (_cb("onOverflowY")) {
                        o.callbacks.onOverflowY.call(el[0])
                    }
                    d.contentReset.x = null
                }
                if ((d.contentReset.x || !el[0].mcs) && d.overflowed[1]) {
                    if (_cb("onOverflowX")) {
                        o.callbacks.onOverflowX.call(el[0])
                    }
                    d.contentReset.x = null
                }
                if (o.snapAmount) {
                    var snapAmount = !(o.snapAmount instanceof Array) ? o.snapAmount : options.dir === "x" ? o.snapAmount[1] : o.snapAmount[0];
                    to = _snapAmount(to, snapAmount, o.snapOffset)
                }
                switch (options.dir) {
                    case "x":
                        var mCSB_dragger = $("#mCSB_" + d.idx + "_dragger_horizontal"),
                            property = "left",
                            contentPos = mCSB_container[0].offsetLeft,
                            limit = [mCustomScrollBox.width() - mCSB_container.outerWidth(!1), mCSB_dragger.parent().width() - mCSB_dragger.width()],
                            scrollTo = [to, to === 0 ? 0 : (to / d.scrollRatio.x)],
                            tso = totalScrollOffsets[1],
                            tsbo = totalScrollBackOffsets[1],
                            totalScrollOffset = tso > 0 ? tso / d.scrollRatio.x : 0,
                            totalScrollBackOffset = tsbo > 0 ? tsbo / d.scrollRatio.x : 0;
                        break;
                    case "y":
                        var mCSB_dragger = $("#mCSB_" + d.idx + "_dragger_vertical"),
                            property = "top",
                            contentPos = mCSB_container[0].offsetTop,
                            limit = [mCustomScrollBox.height() - mCSB_container.outerHeight(!1), mCSB_dragger.parent().height() - mCSB_dragger.height()],
                            scrollTo = [to, to === 0 ? 0 : (to / d.scrollRatio.y)],
                            tso = totalScrollOffsets[0],
                            tsbo = totalScrollBackOffsets[0],
                            totalScrollOffset = tso > 0 ? tso / d.scrollRatio.y : 0,
                            totalScrollBackOffset = tsbo > 0 ? tsbo / d.scrollRatio.y : 0;
                        break
                }
                if (scrollTo[1] < 0 || (scrollTo[0] === 0 && scrollTo[1] === 0)) {
                    scrollTo = [0, 0]
                } else if (scrollTo[1] >= limit[1]) {
                    scrollTo = [limit[0], limit[1]]
                } else {
                    scrollTo[0] = -scrollTo[0]
                }
                if (!el[0].mcs) {
                    _mcs();
                    if (_cb("onInit")) {
                        o.callbacks.onInit.call(el[0])
                    }
                }
                clearTimeout(mCSB_container[0].onCompleteTimeout);
                _tweenTo(mCSB_dragger[0], property, Math.round(scrollTo[1]), dur[1], options.scrollEasing);
                if (!d.tweenRunning && ((contentPos === 0 && scrollTo[0] >= 0) || (contentPos === limit[0] && scrollTo[0] <= limit[0]))) {
                    return
                }
                _tweenTo(mCSB_container[0], property, Math.round(scrollTo[0]), dur[0], options.scrollEasing, options.overwrite, {
                    onStart: function () {
                        if (options.callbacks && options.onStart && !d.tweenRunning) {
                            if (_cb("onScrollStart")) {
                                _mcs();
                                o.callbacks.onScrollStart.call(el[0])
                            }
                            d.tweenRunning = !0;
                            _onDragClasses(mCSB_dragger);
                            d.cbOffsets = _cbOffsets()
                        }
                    },
                    onUpdate: function () {
                        if (options.callbacks && options.onUpdate) {
                            if (_cb("whileScrolling")) {
                                _mcs();
                                o.callbacks.whileScrolling.call(el[0])
                            }
                        }
                    },
                    onComplete: function () {
                        if (options.callbacks && options.onComplete) {
                            if (o.axis === "yx") {
                                clearTimeout(mCSB_container[0].onCompleteTimeout)
                            }
                            var t = mCSB_container[0].idleTimer || 0;
                            mCSB_container[0].onCompleteTimeout = setTimeout(function () {
                                if (_cb("onScroll")) {
                                    _mcs();
                                    o.callbacks.onScroll.call(el[0])
                                }
                                if (_cb("onTotalScroll") && scrollTo[1] >= limit[1] - totalScrollOffset && d.cbOffsets[0]) {
                                    _mcs();
                                    o.callbacks.onTotalScroll.call(el[0])
                                }
                                if (_cb("onTotalScrollBack") && scrollTo[1] <= totalScrollBackOffset && d.cbOffsets[1]) {
                                    _mcs();
                                    o.callbacks.onTotalScrollBack.call(el[0])
                                }
                                d.tweenRunning = !1;
                                mCSB_container[0].idleTimer = 0;
                                _onDragClasses(mCSB_dragger, "hide")
                            }, t)
                        }
                    }
                });

                function _cb(cb) {
                    return d && o.callbacks[cb] && typeof o.callbacks[cb] === "function"
                }

                function _cbOffsets() {
                    return [o.callbacks.alwaysTriggerOffsets || contentPos >= limit[0] + tso, o.callbacks.alwaysTriggerOffsets || contentPos <= -tsbo]
                }

                function _mcs() {
                    var cp = [mCSB_container[0].offsetTop, mCSB_container[0].offsetLeft],
                        dp = [mCSB_dragger[0].offsetTop, mCSB_dragger[0].offsetLeft],
                        cl = [mCSB_container.outerHeight(!1), mCSB_container.outerWidth(!1)],
                        pl = [mCustomScrollBox.height(), mCustomScrollBox.width()];
                    el[0].mcs = {
                        content: mCSB_container,
                        top: cp[0],
                        left: cp[1],
                        draggerTop: dp[0],
                        draggerLeft: dp[1],
                        topPct: Math.round((100 * Math.abs(cp[0])) / (Math.abs(cl[0]) - pl[0])),
                        leftPct: Math.round((100 * Math.abs(cp[1])) / (Math.abs(cl[1]) - pl[1])),
                        direction: options.dir
                    }
                }
            },
            _tweenTo = function (el, prop, to, duration, easing, overwrite, callbacks) {
                if (!el._mTween) {
                    el._mTween = {
                        top: {},
                        left: {}
                    }
                }
                var callbacks = callbacks || {},
                    onStart = callbacks.onStart || function () {},
                    onUpdate = callbacks.onUpdate || function () {},
                    onComplete = callbacks.onComplete || function () {},
                    startTime = _getTime(),
                    _delay, progress = 0,
                    from = el.offsetTop,
                    elStyle = el.style,
                    _request, tobj = el._mTween[prop];
                if (prop === "left") {
                    from = el.offsetLeft
                }
                var diff = to - from;
                tobj.stop = 0;
                if (overwrite !== "none") {
                    _cancelTween()
                }
                _startTween();

                function _step() {
                    if (tobj.stop) {
                        return
                    }
                    if (!progress) {
                        onStart.call()
                    }
                    progress = _getTime() - startTime;
                    _tween();
                    if (progress >= tobj.time) {
                        tobj.time = (progress > tobj.time) ? progress + _delay - (progress - tobj.time) : progress + _delay - 1;
                        if (tobj.time < progress + 1) {
                            tobj.time = progress + 1
                        }
                    }
                    if (tobj.time < duration) {
                        tobj.id = _request(_step)
                    } else {
                        onComplete.call()
                    }
                }

                function _tween() {
                    if (duration > 0) {
                        tobj.currVal = _ease(tobj.time, from, diff, duration, easing);
                        elStyle[prop] = Math.round(tobj.currVal) + "px"
                    } else {
                        elStyle[prop] = to + "px"
                    }
                    onUpdate.call()
                }

                function _startTween() {
                    _delay = 1000 / 60;
                    tobj.time = progress + _delay;
                    _request = (!window.requestAnimationFrame) ? function (f) {
                        _tween();
                        return setTimeout(f, 0.01)
                    } : window.requestAnimationFrame;
                    tobj.id = _request(_step)
                }

                function _cancelTween() {
                    if (tobj.id == null) {
                        return
                    }
                    if (!window.requestAnimationFrame) {
                        clearTimeout(tobj.id)
                    } else {
                        window.cancelAnimationFrame(tobj.id)
                    }
                    tobj.id = null
                }

                function _ease(t, b, c, d, type) {
                    switch (type) {
                        case "linear":
                        case "mcsLinear":
                            return c * t / d + b;
                            break;
                        case "mcsLinearOut":
                            t /= d;
                            t--;
                            return c * Math.sqrt(1 - t * t) + b;
                            break;
                        case "easeInOutSmooth":
                            t /= d / 2;
                            if (t < 1) return c / 2 * t * t + b;
                            t--;
                            return -c / 2 * (t * (t - 2) - 1) + b;
                            break;
                        case "easeInOutStrong":
                            t /= d / 2;
                            if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                            t--;
                            return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
                            break;
                        case "easeInOut":
                        case "mcsEaseInOut":
                            t /= d / 2;
                            if (t < 1) return c / 2 * t * t * t + b;
                            t -= 2;
                            return c / 2 * (t * t * t + 2) + b;
                            break;
                        case "easeOutSmooth":
                            t /= d;
                            t--;
                            return -c * (t * t * t * t - 1) + b;
                            break;
                        case "easeOutStrong":
                            return c * (-Math.pow(2, -10 * t / d) + 1) + b;
                            break;
                        case "easeOut":
                        case "mcsEaseOut":
                        default:
                            var ts = (t /= d) * t,
                                tc = ts * t;
                            return b + c * (0.499999999999997 * tc * ts + -2.5 * ts * ts + 5.5 * tc + -6.5 * ts + 4 * t)
                    }
                }
            },
            _getTime = function () {
                if (window.performance && window.performance.now) {
                    return window.performance.now()
                } else {
                    if (window.performance && window.performance.webkitNow) {
                        return window.performance.webkitNow()
                    } else {
                        if (Date.now) {
                            return Date.now()
                        } else {
                            return new Date().getTime()
                        }
                    }
                }
            },
            _stopTween = function () {
                var el = this;
                if (!el._mTween) {
                    el._mTween = {
                        top: {},
                        left: {}
                    }
                }
                var props = ["top", "left"];
                for (var i = 0; i < props.length; i++) {
                    var prop = props[i];
                    if (el._mTween[prop].id) {
                        if (!window.requestAnimationFrame) {
                            clearTimeout(el._mTween[prop].id)
                        } else {
                            window.cancelAnimationFrame(el._mTween[prop].id)
                        }
                        el._mTween[prop].id = null;
                        el._mTween[prop].stop = 1
                    }
                }
            },
            _delete = function (c, m) {
                try {
                    delete c[m]
                } catch (e) {
                    c[m] = null
                }
            },
            _mouseBtnLeft = function (e) {
                return !(e.which && e.which !== 1)
            },
            _pointerTouch = function (e) {
                var t = e.originalEvent.pointerType;
                return !(t && t !== "touch" && t !== 2)
            },
            _isNumeric = function (val) {
                return !isNaN(parseFloat(val)) && isFinite(val)
            },
            _childPos = function (el) {
                var p = el.parents(".mCSB_container");
                return [el.offset().top - p.offset().top, el.offset().left - p.offset().left]
            },
            _isTabHidden = function () {
                var prop = _getHiddenProp();
                if (!prop) return !1;
                return document[prop];

                function _getHiddenProp() {
                    var pfx = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var i = 0; i < pfx.length; i++) {
                        if ((pfx[i] + "Hidden") in document)
                            return pfx[i] + "Hidden"
                    }
                    return null
                }
            };
        $.fn[pluginNS] = function (method) {
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1))
            } else if (typeof method === "object" || !method) {
                return methods.init.apply(this, arguments)
            } else {
                $.error("Method " + method + " does not exist")
            }
        };
        $[pluginNS] = function (method) {
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1))
            } else if (typeof method === "object" || !method) {
                return methods.init.apply(this, arguments)
            } else {
                $.error("Method " + method + " does not exist")
            }
        };
        $[pluginNS].defaults = defaults;
        window[pluginNS] = !0;
        $(window).bind("load", function () {
            $(defaultSelector)[pluginNS]();
            $.extend($.expr[":"], {
                mcsInView: $.expr[":"].mcsInView || function (el) {
                    var $el = $(el),
                        content = $el.parents(".mCSB_container"),
                        wrapper, cPos;
                    if (!content.length) {
                        return
                    }
                    wrapper = content.parent();
                    cPos = [content[0].offsetTop, content[0].offsetLeft];
                    return cPos[0] + _childPos($el)[0] >= 0 && cPos[0] + _childPos($el)[0] < wrapper.height() - $el.outerHeight(!1) && cPos[1] + _childPos($el)[1] >= 0 && cPos[1] + _childPos($el)[1] < wrapper.width() - $el.outerWidth(!1)
                },
                mcsInSight: $.expr[":"].mcsInSight || function (el, i, m) {
                    var $el = $(el),
                        elD, content = $el.parents(".mCSB_container"),
                        wrapperView, pos, wrapperViewPct, pctVals = m[3] === "exact" ? [[1, 0], [1, 0]] : [[0.9, 0.1], [0.6, 0.4]];
                    if (!content.length) {
                        return
                    }
                    elD = [$el.outerHeight(!1), $el.outerWidth(!1)];
                    pos = [content[0].offsetTop + _childPos($el)[0], content[0].offsetLeft + _childPos($el)[1]];
                    wrapperView = [content.parent()[0].offsetHeight, content.parent()[0].offsetWidth];
                    wrapperViewPct = [elD[0] < wrapperView[0] ? pctVals[0] : pctVals[1], elD[1] < wrapperView[1] ? pctVals[0] : pctVals[1]];
                    return pos[0] - (wrapperView[0] * wrapperViewPct[0][0]) < 0 && pos[0] + elD[0] - (wrapperView[0] * wrapperViewPct[0][1]) >= 0 && pos[1] - (wrapperView[1] * wrapperViewPct[1][0]) < 0 && pos[1] + elD[1] - (wrapperView[1] * wrapperViewPct[1][1]) >= 0
                },
                mcsOverflow: $.expr[":"].mcsOverflow || function (el) {
                    var d = $(el).data(pluginPfx);
                    if (!d) {
                        return
                    }
                    return d.overflowed[0] || d.overflowed[1]
                }
            })
        })
    }))
}))
