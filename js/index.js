$(document).scroll(function(){
  if($(this).scrollTop()>3){
    $('nav').addClass('inverse')
  }else{
    $('nav').removeClass('inverse')
  }
})