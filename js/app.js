function openNav() {
    document.getElementById("mySidenav").style.width = "260px";
    document.getElementById("header").style.marginLeft = "-260px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("header").style.marginLeft= "0";
}



// Animacion menu de hamburgesa
function myFunction(x) {
    x.classList.toggle("change");
}

// Transiciones de scroll para botones del body
$('#read-more-btn').click(function (event) {
  event.stopPropagation();
  var Position = jQuery('[id="about"]').offset().top;
  jQuery('html, body').animate({ scrollTop: Position }, 1100);
  return false;
});

$('#hireme-btn').click(function (event) {
  event.stopPropagation();
  var Position = jQuery('[id="contact"]').offset().top;
  jQuery('html, body').animate({ scrollTop: Position }, 1100);
  return false;
});

$('#totop-btn').click(function (event) {
  event.stopPropagation();
  var Position = jQuery('[id="cover"]').offset().top;
  jQuery('html, body').animate({ scrollTop: Position }, 1100);
  return false;
});
// smoothscroll para sidebar
$('#about-btn2').click(function (event) {
  event.stopPropagation();
  var Position = jQuery('[id="about"]').offset().top;
  jQuery('html, body').animate({ scrollTop: Position }, 1100);
  return false;
});
$('#services-btn2').click(function (event) {
  event.stopPropagation();
  var Position = jQuery('[id="services"]').offset().top;
  jQuery('html, body').animate({ scrollTop: Position }, 1100);
  return false;
});
$('#skills-btn2').click(function (event) {
  event.stopPropagation();
  var Position = jQuery('[id="skills"]').offset().top;
  jQuery('html, body').animate({ scrollTop: Position }, 1100);
  return false;
});
$('#portfolio-btn2').click(function (event) {
  event.stopPropagation();
  var Position = jQuery('[id="portfolio"]').offset().top;
  jQuery('html, body').animate({ scrollTop: Position }, 1100);
  return false;
});
$('#contact-btn2').click(function (event) {
  event.stopPropagation();
  var Position = jQuery('[id="contact"]').offset().top;
  jQuery('html, body').animate({ scrollTop: Position }, 1100);
  return false;
});





$('nav li a').on('click', function(){
    $('li a.activo').removeClass('activo');
    $(this).addClass('activo');
});


$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('nav li a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.navList li a').each(function () {
            $(this).removeClass('activo');
        })
        $(this).addClass('activo');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navList li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#container nav ul li a').removeClass("activo");
            currLink.addClass("activo");
        }
        else{
            currLink.removeClass("activo");
        }
    });
}
