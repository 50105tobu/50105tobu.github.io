$(function() {
    let pageHash = window.location.hash;
    if (pageHash) {
        let scrollToElement = $('[id="' + pageHash + '"]');
        if (!scrollToElement.length) return;
        $(window).on('load', function() {
            history.replaceState('', '', './');
            let locationOffset = scrollToElement.offset().top;
            let navigationBarHeight = $('.header').innerHeight();
            locationOffset = locationOffset - navigationBarHeight - 65;
            $('html, body').animate({
                scrollTop: locationOffset
            }, 300, 'swing');
        });
    }
});

$(function() {
    $('a[href*="#"]').on('click', function() {
        const scrollSpeed = 400;
        const navigationHeight = $(".header").innerHeight();
        const scrollToTarget = $(this.hash === '#' || '' ? 'html' : this.hash)
        if (!scrollToTarget.length) return;
        const scrollPosition = scrollToTarget.offset().top - navigationHeight - 105;
        $('html, body').animate({
            scrollTop: scrollPosition
        }, scrollSpeed, 'swing');
        return false;
    });
});