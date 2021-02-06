$(document).ready(()=>{
  const sliderContentEls = $('.slider__content');
  $('.slider__tab-wrap').on('click', '.slider__tab-item--link:not(.slider__tab-item--link-active)', function(event) {
    event.preventDefault();
    const selectedId = $(this).data('tab-id');
    $('.slider__tab-item--link-active').removeClass('slider__tab-item--link-active')
    $(this).addClass('slider__tab-item--link-active');
    sliderContentEls.each(function(index){
      $(this).removeClass('slider__content-active')
      if ($(this).data('content-id') == selectedId) {
        $(this).addClass('slider__content-active')
      }
    })
  });

  // accordion mobile
  $('.tab-mobile__item--link').on('click', function(event){
    event.preventDefault();
    const next = $(this).next();
    const icon = $(this).children('.icon');

    if (next.hasClass('tab-mobile__item-content--active')) {
      next.removeClass('tab-mobile__item-content--active')
      icon.removeClass('icon__up').addClass('icon__down')
    } else{
      $('.tab-mobile__item-content').removeClass('tab-mobile__item-content--active')
      next.addClass('tab-mobile__item-content--active')
      icon.addClass('icon__up').removeClass('icon__down')
    }
   
  })
})
