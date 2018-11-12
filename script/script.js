    $(function(){
    popupDisplay();
    diplay_hide();
    linkScroll();
    menuShow();
    timeMask();
    phoneMask();
    footerAnimate($(window).height());
    $(window).scroll(function () {
        footerAnimate($(window).height());
    });
});
function timeMask() {
    $(".input-time").mask("99:99");
}
function phoneMask(){
    $(".input-phone").mask("+7(999)-999-99-99");
}
function popupDisplay() {
    $('[data-popup]').each(function() {
        $(this).click(function(e) {
            e.preventDefault();
            var id = $(this).attr('data-popup');
            $('.popup').hide();
            $('#' + id).show();
            $('.popup__container').fadeIn(300);
        })
    });
    $('.popup__close').click(function() {
        $('.popup__container').fadeOut(300);
    });
    $('.popup__container').click(function(e) {
        if (!$(e.target).closest('.popup').length) {
            $('.popup__container').fadeOut();
        }
    });
}

function diplay_hide(){
    $(".faq__question").click(function () {
        if ($(this).parent().find(".faq__answer").css('display') == 'none'){
            $(this).parent().find(".faq__answer").animate({height: 'show'}, 500);
            $(this).find(".faq__btn").addClass("faq__btn_active");
            $(this).addClass("faq__question_active");
        }else{
            $(this).parent().find(".faq__answer").animate({height: 'hide'}, 500);
            $(this).find(".faq__btn").removeClass("faq__btn_active");
            $(this).removeClass("faq__question_active");
        }
    })
}
function linkScroll() {
    $('.link_scroll').click(function (e) {

        e.preventDefault();

        var id = $(this).attr('href'),
            top = $(id).offset().top - 66;

        $('body,html').animate({
            scrollTop: top
        }, 700);
    })
}
function menuShow() {
    $('.menu__btn').click(function () {
        if($('.menu').hasClass('menu_active'))
        {
            $('.menu').removeClass('menu_active');
            $('.menu__btn').removeClass('menu__btn_active');
        }else{
            $('.menu').addClass('menu_active');
            $('.menu__btn').addClass('menu__btn_active');
        }

    })
}

function footerAnimate(height) {
    var currentPosition = $(window).scrollTop(),
        position = $('.footer').offset().top + 200,
    pos1 = position - currentPosition;

    if (pos1 < height) {
        $('.footer').addClass('footer_active');
    }
}

$('.command .slider__content').slick({
    arrows: true,
    prevArrow: $('.command .slider__arrow_prev'),
    nextArrow: $('.command .slider__arrow_next'),
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipe: false,
    appendDots: $('.command .slider__pagination'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 641,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                swipe: true
            }
        }
    ]
});
$('.steps_slider').slick({
    arrows: false,
    prevArrow: $('.command .slider__arrow_prev'),
    nextArrow: $('.command .slider__arrow_next'),
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 2000,
    swipe: true,
    appendDots: $('.steps_slider'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 641,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                swipe: true
            }
        }
    ]
});

function Length() {
    // var path0 = document.querySelector('#q');
    // var path1 = document.querySelector('#w');
    // var path2 = document.querySelector('#e');
    // var path3 = document.querySelector('#r');
    var path4 = document.querySelector('#q');
    var path5 = document.querySelector('#w');
    var path6 = document.querySelector('#e');
    var path7 = document.querySelector('#r');
    var path8 = document.querySelector('#t');
    var path9 = document.querySelector('#y');
    var path10 = document.querySelector('#u');
    var path11 = document.querySelector('#i');
    var path12 = document.querySelector('#o');
    var path13 = document.querySelector('#p');
    var path14 = document.querySelector('#a');
    var path15 = document.querySelector('#s');
    var path16= document.querySelector('#d');
    var path17 = document.querySelector('#d');
    var path18 = document.querySelector('#f');
    var path19 = document.querySelector('#g');
    var path20 = document.querySelector('#h');
    var path21 = document.querySelector('#j');
    var path22 = document.querySelector('#k');
    var path23 = document.querySelector('#l');
    var path24 = document.querySelector('#z');
    var path25 = document.querySelector('#x');
    var path26 = document.querySelector('#c');
    var len4 = Math.round(path4.getTotalLength());
    var len5 = Math.round(path5.getTotalLength());
    var len6 = Math.round(path6.getTotalLength());
    var len7 = Math.round(path7.getTotalLength());
    var len8 = Math.round(path8.getTotalLength());
    var len9 = Math.round(path9.getTotalLength());
    var len10 = Math.round(path10.getTotalLength());
    var len11 = Math.round(path11.getTotalLength());
    var len12 = Math.round(path12.getTotalLength());
    var len13 = Math.round(path13.getTotalLength());
    var len14 = Math.round(path14.getTotalLength());
    var len15 = Math.round(path15.getTotalLength());
    var len16 = Math.round(path16.getTotalLength());
    var len17 = Math.round(path17.getTotalLength());
    var len18 = Math.round(path18.getTotalLength());
    var len19 = Math.round(path19.getTotalLength());
    var len20 = Math.round(path20.getTotalLength());
    var len21 = Math.round(path21.getTotalLength());
    var len22 = Math.round(path22.getTotalLength());
    var len23 = Math.round(path23.getTotalLength());
    var len24 = Math.round(path24.getTotalLength());
    var len25 = Math.round(path25.getTotalLength());
    var len26 = Math.round(path26.getTotalLength());

    alert(+ len4 + "\n" 
    + len5 + "\n"
    + len6 + "\n"
    + len7 + "\n"
    + len8 + "\n"
    + len9 + "\n"
    + len10 + "\n"
    + len11 + "\n"
    + len12 + "\n"
    + len13 + "\n"
    + len14 + "\n"  
    + len15 + "\n"
    + len16 + "\n"
    + len17 + "\n"
    + len18 + "\n"
    + len19 + "\n"
    + len20 + "\n"
    + len21 + "\n"
    + len22 + "\n"
    + len23 + "\n"
    + len24 + "\n"
    + len25 + "\n"
    + len26 + "\n"
    )
};



paper.install(window);
var SQRT_3 = Math.pow(3, 0.5);
var D, mousePos, position;
var count = 150;

window.onload = function() {
  paper.setup('space');

  D = Math.max(paper.view.getSize().width, paper.view.getSize().height);

  mousePos = paper.view.center.add([view.bounds.width / 3, 100]);
  position = paper.view.center;

  // Draw the BG
  var background = new Path.Rectangle(view.bounds);
      background.fillColor = 'rgba(255,255,255,0)';
  buildStars();

  paper.view.draw();

  paper.view.onFrame = function(event) {
    position = position.add( (mousePos.subtract(position).divide(10) ) );
    var vector = (view.center.subtract(position)).divide(10);
    moveStars(vector.multiply(1));
  };
};



// ---------------------------------------------------
//  Helpers
// ---------------------------------------------------
window.onresize = function() {
  project.clear();
  D = Math.max(paper.view.getSize().width, paper.view.getSize().height);
  // Draw the BG
  var background = new Path.Rectangle(view.bounds);
      background.fillColor = 'rgba(255,255,255,0)';
  buildStars();
};

var random = function(minimum, maximum) {
  return Math.round(Math.random() * (maximum - minimum) + minimum);
};

var map = function (n, start1, stop1, start2, stop2) {
  return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
};

// ---------------------------------------------------
//  Stars (from paperjs.org examples section)
// ---------------------------------------------------
// window.onmousemove = function(event) {
//   mousePos.x = event.x;
//   mousePos.y = event.y;
// };

var buildStars = function() {
  // Create a symbol, which we will use to place instances of later:
  var path = new Path.Circle({
    center: [0, 0],
    radius: 3,
    fillColor: 'purple',
    strokeColor: 'black',
    strokeWidth: .3
  });

  var symbol = new Symbol(path);

  // Place the instances of the symbol:
  for (var i = 0; i < count; i++) {
    // The center position is a random point in the view:
    var center = Point.random().multiply(paper.view.size);
    var placed = symbol.place(center);
    placed.scale(i / count + .1);
    placed.data = {
      vector: new Point({
        angle:30,
        length : (i / count) *  8
      })
    };
  }

  var vector = new Point({
    angle: 0,
    length: 0
  });
};

var keepInView = function(item) {
  var position = item.position;
  var viewBounds = paper.view.bounds;
  if (position.isInside(viewBounds))
    return;
  var itemBounds = item.bounds;
  if (position.x > viewBounds.width + 5) {
    position.x = -item.bounds.width;
  }

  if (position.x < -itemBounds.width - 5) {
    position.x = viewBounds.width;
  }

  if (position.y > viewBounds.height + 5) {
    position.y = -itemBounds.height;
  }

  if (position.y < -itemBounds.height - 5) {
    position.y = viewBounds.height
  }
};

var moveStars = function(vector) {
  // Run through the active layer's children list and change
  // the position of the placed symbols:
  var layer = project.activeLayer;
  for (var i = 1; i < count + 1; i++) {
    var item = layer.children[i];
    var size = item.bounds.size;
    var length = vector.length / 10 * size.width / 10;
    item.position = item.position.add( vector.normalize(length).add(item.data.vector));
    keepInView(item);
  }
};

