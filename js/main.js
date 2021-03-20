$(function() {
    $('a[href^="#"]').click(function() {
        let speed = 700,
        href = $(this).attr("href"),
        target = $(href === "#" || href === "" ? 'html' : href),
        position = target.offset().top;
        $("html, body").animate({scrollTop: position}, speed, "swing");
        return false;
    });

    $('.top-header-deco').css('transform', 'rotate(-24deg)');
    $('.top-header-deco').css('transition', 'all 1s ease-out');

    $('.work-item-1').hover(function() {
        $('.work-img-1').css('opacity', '0.3'),
        $('.work-img-1').css('transition', 'all 0.7s ease-out'),
        $('.caption-1').css('opacity', '1'),
        $('.caption-1').css('transition', 'all 0.7s ease-out')
    }, function() {
        $('.work-img-1').css('opacity', '1'),
        $('.caption-1').css('opacity', '0')
    });

    $('.work-item-2').hover(function() {
        $('.work-img-2').css('opacity', '0.3'),
        $('.work-img-2').css('transition', 'all 0.7s ease-out'),
        $('.caption-2').css('opacity', '1'),
        $('.caption-2').css('transition', 'all 0.7s ease-out')
    }, function() {
        $('.work-img-2').css('opacity', '1'),
        $('.caption-2').css('opacity', '0')
    });

    $('.work-item-3').hover(function() {
        $('.work-img-3').css('opacity', '0.3'),
        $('.work-img-3').css('transition', 'all 0.7s ease-out'),
        $('.caption-3').css('opacity', '1'),
        $('.caption-3').css('transition', 'all 0.7s ease-out')
    }, function() {
        $('.work-img-3').css('opacity', '1'),
        $('.caption-3').css('opacity', '0')
    });

    $('.service-details').click(function() {
        alert("未実装です");
    });
});