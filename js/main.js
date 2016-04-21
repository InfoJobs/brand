(function (d,w) {


	//--------------------------------------------------------------------------

	// Columnas ajustadas verticalmente

	function setGridHeight(){
		$('.grid').each(function(){
			var height = 0;
			$(this).find(".box-row").height('');
			$(this).find(".box-row").each(function(){
				if(height < $(this).innerHeight())
					height = $(this).innerHeight();
			});
			$(this).find(".box-row").height(height);
			$(this).find(".card-overflow").height(height);
		});
	}
	$(w).resize(setGridHeight);


	$(d).ready(function() {

		$('.js-download').on('click', function(event) {
			event.preventDefault();
			$(this).parent().parent().find('.download-links')
				.removeClass('fade-down')
				.addClass('fade-up');
		});

		$('.js-download-close').on('click', function(event) {
			event.preventDefault();
			$(this).parent().parent().parent()
				.removeClass('fade-up')
				.addClass('fade-down');
		});
		// open-hover-card

		$('.open-hover-card').on('click', function(event) {
			event.preventDefault();
			$(this).parent().parent().parent()
				.addClass('open-hover');
		});
		$('.close_card_hover').on('click', function(event) {
			event.preventDefault();
			$(this).parent().parent().parent()
				.removeClass('open-hover');
		});
		$('.voiceandtone_nav a').on('click', function(event) {
			var self = this;

			event.preventDefault();
			$('.voiceandtone_nav a.active').removeClass("active");
			$(this).addClass("active");

			scrollToElement(_("_voicetone"));

			$('.voice' + this.dataset.voice).prependTo($('.voice' + this.dataset.voice).parent());
			setTimeout(function(){
				$('.voice').removeClass("open-voice");
				$('.voice' + self.dataset.voice).addClass("open-voice");
				setGridHeight();
			},10);
		});

		setGridHeight();
	});


	//--------------------------------------------------------------------------
	function _(id) {
	    return (d.getElementById(id));
	}

	function _name(name) {
	    return (d.getElementsByName(name)[0]);
	}

	function _query(query) {
	    return (d.querySelectorAll(query));
	}

	function _class(className) {
	    return (_query('.' + className)[0]);
	}

	function _addEvent(o, event, func) {
	    return (!Boolean(w.addEventListener) ? o.attachEvent('on' + event, func) : o.addEventListener(event, func, false));
	}

	var _get = {
	    Scroll: function() {
	        return d.documentElement.scrollTop || d.body.scrollTop;
	    },
	    WindowHeight: function() {
	        return w.innerHeight || d.documentElement.clientHeight || d.body.clientHeight;
	    },
	    WindowWidth: function() {
	        return w.innerWidth || d.documentElement.clientWidth || d.body.clientWidth;
	    }
	}

	var SCROLL_TIME = 500,
		SCROLL_STEPS = 40,
		SCROLL_OSCILATION = 0.1;

	function scrollHref(elem) {
	    while (elem.tagName != 'BODY' && elem.className.indexOf('scroll') == -1)
	    elem = elem.parentNode;

	    var id = elem.href.split('#')[1];
	    scrollToElement(id != '' ? _('_' + id) : d.body);
	}

	var STE_step,
		STE_steps,
		STE_scroll,
		STE_initial_scroll,
		STE_times = [],
		STE_margin_top = 90; // Height of header

	function scrollToElement(toElement) {
	    var toPosition = toElement.offsetTop - STE_margin_top,
	    	time;

	    STE_scroll = _get.Scroll();
	    STE_initial_scroll = _get.Scroll();
	    STE_steps = (toPosition - STE_scroll) / SCROLL_STEPS;
	    STE_step = 0;

	    while (time = STE_times.pop())
	    clearTimeout(time);

	    for (var i = 1; i < (SCROLL_STEPS + 1); i++)
	    STE_times.push(setTimeout(function() {
	        scrollNextStep()
	    }, i * SCROLL_TIME / SCROLL_STEPS));

	    w.scrollTo(0, STE_scroll);
	}




	function scrollNextStep() {
	    var temporalStep = (STE_step % Math.floor(SCROLL_STEPS / 2)) - Math.floor(SCROLL_STEPS / 4),
	    	oscilation = (Math.floor(SCROLL_STEPS / 2) > STE_step ? temporalStep : -temporalStep) * SCROLL_OSCILATION;

	    STE_scroll += STE_steps + (STE_steps * (oscilation));

	    w.scrollTo(0, STE_scroll);

	    STE_step++;

	    if (SCROLL_STEPS <= STE_step) w.scrollTo(0, STE_initial_scroll + (STE_steps * SCROLL_STEPS));
	}

	function setHeaderFixed() {
	    var height = _get.WindowHeight(),
	    	scroll = _get.Scroll(),
	    	fix = (height - 40) > scroll,
	    	SE = ['_manual', '_logos', '_icons', '_templates', '_imagenes', '_voicetone'],
	    	position = 0;

	    for (var k in SE) {
	        if (scroll >= _(SE[k]).offsetTop - STE_margin_top) position++;
	    };

	    for (var i = 1; i <= SE.length; i++) { // menu elements
	        changeClassName(_class('item' + i), 'current', i != position);
	    };
	}

	function setVoiceToneFixed() {
	    var height = _get.WindowHeight(),
	    	scroll = _get.Scroll(),
	    	limit  = _("_voicetone");

	    var isFixed = scroll >= (limit.offsetTop + 10 - STE_margin_top);

	    changeClassName(_query('.voiceandtone_nav')[0], 'fixed', !isFixed);
	}

	function changeClassName(o, className, remove) {
	    o.className = o.className.split(' ' + className).join('');
	    if (!remove) o.className += ' ' + className;
	}

	// Listeners ---------------------------------------------------------------

	_addEvent(w, 'scroll', function(e) { // On Scroll
	    setHeaderFixed();
	    setVoiceToneFixed();
	});
	_addEvent(w, 'load', function(e) { // On Scroll
	    setGridHeight();
	    setTimeout(setGridHeight, 600);
	});

	var aLinks = ['top','manual','logos','icons','templates','imagenes','voicetone'];
	for( var i in aLinks ) {
		_(aLinks[i]).addEventListener('click', function(e){
			e.preventDefault();
			scrollHref(this);
		});

	}

})(document, window);

$(".gallery").fancybox({
    loop : true,
    arrows : true,
    autoSize : true,
    nextEffect  : 'elastic',
    prevEffect  : 'elastic',
    padding     : 10,
    margin      : [15, 15, 60, 15],
    afterLoad   : addLinks,
    beforeClose : removeLinks,

    helpers : {
        overlay : {
            css : {
                'background' : 'rgba(0, 0, 0, 0.8)'
            }
        },
        title   : null,

    }

});

function addLinks() {
    var list = $(".bullets");

    if (!list.length) {
        list = $('<ul class="bullets">');

        for (var i = 0; i < this.group.length; i++) {
            $('<li data-index="' + i + '"><label></label></li>').click(function() { $.fancybox.jumpto( $(this).data('index'));}).appendTo( list );
        }

        list.appendTo( 'body' );
    }

    list.find('li').removeClass('active').eq( this.index ).addClass('active');
}

function removeLinks() {
    $(".bullets").remove();
}



$('.test').slick({
    centerMode      : true,
    centerPadding   : '201px',
    slidesToShow    : 3,
    infinite        : true,
    autoplay        : true,
    arrows          : false,
    accessibility   : false,
    draggable       : false,
    pauseOnHover    : false,
});