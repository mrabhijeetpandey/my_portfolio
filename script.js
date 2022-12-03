$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('scroll load',function(){
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
    });
  
    $('.portfolio .button-container .btn').click(function(){
  
      let filter = $(this).attr('data-filter');
  
      if(filter == 'all'){
        $('.portfolio .image-container .box').show('400')
      }else{
        $('.portfolio .image-container .box').not('.'+filter).hide('200');
        $('.portfolio .image-container .box').filter('.'+filter).show('400');
      }
  
    });
    $(function(){
      var overlay = $('<div id="overlay"></div>');
      overlay.show();
      overlay.appendTo(document.body);
      $('.popup').show();
      $('.close').click(function(){
      $('.popup').hide();
      overlay.appendTo(document.body).remove();
      return false;
      });
      
      
       
      
      $('.x').click(function(){
      $('.popup').hide();
      overlay.appendTo(document.body).remove();
      return false;
      });
      });
    $('#theme-toggler').click(function(){
      $(this).toggleClass('fa-sun');
      $('body').toggleClass('dark-theme');
    });

    $('#theme-toggler-2').click(function(){
      $(this).toggleClass('fa-sun');
      $('body').toggleClass('dark-theme');
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500,
        'linear'
      );
  
    });
  
  });