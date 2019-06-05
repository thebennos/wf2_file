jQuery( document ).ready(function($) {
    //Check if not collapsed    
    //Check if not collapsed
    var CheckHover = function(e) {
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        return (e.is('.navbar-expand')) ||
            (e.is('.navbar-expand-xl') && w >= 1200) || (e.is('.navbar-expand-lg') && w >= 992) ||
            (e.is('.navbar-expand-md') && w >= 768) ||  (e.is('.navbar-expand-sm') && w >= 576);
    }

    //Prevent click if hover
    jQuery('.navbar [data-toggle="collapse"]').on("click",
        function(e) {
            if (CheckHover
            ($(this.closest('.navbar')))) {e.preventDefault(); e.stopPropagation();}})


    jQuery('.navbar [class*="drop"]').hover(
        function() {
            if (!CheckHover(jQuery(this.closest('.navbar')))) return;
            $(this).children('.dropdown-menu').collapse('show').on('shown.bs.collapse.hover', function (e) {
                if (!jQuery(this).parent(':hover').length) {jQuery(this).collapse('hide').parent().removeClass('show');}
                jQuery(this).off('shown.bs.collapse.hover');
            }).parent().addClass('show');
        },
        function() {
            if (!CheckHover(jQuery(this.closest('.navbar')))) return;
            jQuery(this).children('.dropdown-menu').collapse('hide').on('hidden.bs.collapse.hover', function (e) {
                if ($(this).parent(':hover').length) {$(this).collapse('show').parent().addClass('show');}
                jQuery(this).off('hidden.bs.collapse.hover');
            }).parent().removeClass('show');
        }
    );
});