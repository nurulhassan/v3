var myLazyLoad=new LazyLoad
$(document).ready(function(){$(".loaders").fadeOut(200)})
var mywindow=$(window),mypos=mywindow.scrollTop()
mywindow.scroll(function(){mywindow.scrollTop()>mypos?$(".scroll-to-top").css("display","none"):$(".scroll-to-top").css("display","block"),mypos=mywindow.scrollTop()}),$(".scroll-to-top").on("click",function(o){o.preventDefault(),$("html, body").animate({scrollTop:0},1e3)})
var mywindow=$(window),mypos=mywindow.scrollTop()
mywindow.scroll(function(){mywindow.scrollTop()>mypos?$(".scroll-to-top").fadeOut():$(".scroll-to-top").fadeIn(),mypos=mywindow.scrollTop()})
