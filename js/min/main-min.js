function addLinks(){var e=$(".bullets");if(!e.length){e=$('<ul class="bullets">');for(var n=0;n<this.group.length;n++)$('<li data-index="'+n+'"><label></label></li>').click(function(){$.fancybox.jumpto($(this).data("index"))}).appendTo(e);e.appendTo("body")}e.find("li").removeClass("active").eq(this.index).addClass("active")}function removeLinks(){$(".bullets").remove()}!function(e,n){function t(){$(".grid").each(function(){var e=0;$(this).find(".box-row").height(""),$(this).find(".box-row").each(function(){e<$(this).innerHeight()&&(e=$(this).innerHeight())}),$(this).find(".box-row").height(e),$(this).find(".card-overflow").height(e)})}function o(n){return e.getElementById(n)}function i(n){return e.getElementsByName(n)[0]}function a(n){return e.querySelectorAll(n)}function r(e){return a("."+e)[0]}function l(e,t,o){return Boolean(n.addEventListener)?e.addEventListener(t,o,!1):e.attachEvent("on"+t,o)}function c(n){for(;"BODY"!=n.tagName&&-1==n.className.indexOf("scroll");)n=n.parentNode;var t=n.href.split("#")[1];s(""!=t?o("_"+t):e.body)}function s(e){var t=e.offsetTop-_,o;for(T=p.Scroll(),y=p.Scroll(),w=(t-T)/m,b=0;o=k.pop();)clearTimeout(o);for(var i=1;m+1>i;i++)k.push(setTimeout(function(){d()},i*h/m));n.scrollTo(0,T)}function d(){var e=b%Math.floor(m/2)-Math.floor(m/4),t=(Math.floor(m/2)>b?e:-e)*g;T+=w+w*t,n.scrollTo(0,T),b++,b>=m&&n.scrollTo(0,y+w*m)}function f(){var e=p.WindowHeight(),n=p.Scroll(),t=e-40>n,i=["_manual","_logos","_icons","_templates","_imagenes","_voicetone"],a=0;for(var l in i)n>=o(i[l]).offsetTop-_&&a++;for(var c=1;c<=i.length;c++)v(r("item"+c),"current",c!=a)}function u(){var e=p.WindowHeight(),n=p.Scroll(),t=o("_voicetone"),i=n>=t.offsetTop+10-_;v(a(".voiceandtone_nav")[0],"fixed",!i)}function v(e,n,t){e.className=e.className.split(" "+n).join(""),t||(e.className+=" "+n)}$(n).resize(t),$(e).ready(function(){$(".js-download").on("click",function(e){e.preventDefault(),$(this).parent().parent().find(".download-links").removeClass("fade-down").addClass("fade-up")}),$(".js-download-close").on("click",function(e){e.preventDefault(),$(this).parent().parent().parent().removeClass("fade-up").addClass("fade-down")}),$(".open-hover-card").on("click",function(e){e.preventDefault(),$(this).parent().parent().parent().addClass("open-hover")}),$(".close_card_hover").on("click",function(e){e.preventDefault(),$(this).parent().parent().parent().removeClass("open-hover")}),$(".voiceandtone_nav a").on("click",function(e){var n=this;e.preventDefault(),$(".voiceandtone_nav a.active").removeClass("active"),$(this).addClass("active"),s(o("_voicetone")),$(".voice"+this.dataset.voice).prependTo($(".voice"+this.dataset.voice).parent()),setTimeout(function(){$(".voice").removeClass("open-voice"),$(".voice"+n.dataset.voice).addClass("open-voice"),t()},10)}),t()});var p={Scroll:function(){return e.documentElement.scrollTop||e.body.scrollTop},WindowHeight:function(){return n.innerHeight||e.documentElement.clientHeight||e.body.clientHeight},WindowWidth:function(){return n.innerWidth||e.documentElement.clientWidth||e.body.clientWidth}},h=500,m=40,g=.1,b,w,T,y,k=[],_=90;l(n,"scroll",function(e){f(),u()}),l(n,"load",function(e){t(),setTimeout(t,600)});var C=["top","manual","logos","icons","templates","imagenes","voicetone"];for(var x in C)o(C[x]).addEventListener("click",function(e){e.preventDefault(),c(this)})}(document,window),$(".gallery").fancybox({loop:!0,arrows:!0,autoSize:!0,nextEffect:"elastic",prevEffect:"elastic",padding:10,margin:[15,15,60,15],afterLoad:addLinks,beforeClose:removeLinks,helpers:{overlay:{css:{background:"rgba(0, 0, 0, 0.8)"}},title:null}}),$(".test").slick({centerMode:!0,centerPadding:"201px",slidesToShow:3,infinite:!0,autoplay:!0,arrows:!1,accessibility:!1,draggable:!1,pauseOnHover:!1});