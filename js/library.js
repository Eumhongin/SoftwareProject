function makeItem(e) {
  $('.ItemWrapper > *').remove();
  var wrapper = $('.ItemWrapper');
  console.log(e);
  var title = $('<p>').text('PurPose').appendTo(wrapper);
  var itemSet = $('<div class="itemSet">').appendTo(wrapper);
  for (var i = 0; i < 3; i++) {
    var item = $('<div class="item" onclick="url(this,'+e+')">').appendTo(itemSet);
    $('<p class="price">').text(e.price[i]).appendTo(item);
    $('<hr>').appendTo(item);
    $('<p class="cpu">').text(e.cpu[i]).appendTo(item);
    $('<p class="mainboard">').text(e.mainboard[i]).appendTo(item);
    $('<p class="gpu">').text(e.gpu[i]).appendTo(item);
    $('<p class="ram">').text(e.ram[i]).appendTo(item);
    $('<p class="casecase">').text(e.case[i]).appendTo(item);
    $('<p class="power">').text(e.power[i]).appendTo(item);
    $('<p class="ssd">').text(e.ssd[i]).appendTo(item);
    $('<p class="hdd">').text(e.hdd[i]).appendTo(item);
  }
  //
  // var item = $('<div class="item">').appendTo(itemSet);
  // var item = $('<div class="item">').appendTo(itemSet);
  itemSet.css({
    'display': 'grid',
    'grid': 'auto / 33% 33% 33%',
    'z-index': '-1'
  })
  $('.item').css({
    'display': 'block',
    'height': $('.item').outerHeight(true) + 'px',
    'box-sizing': 'border-box',
    'padding': '5px',
    'margin': '5px',
    'border': 'solid 1px black',
    'cursor': 'pointer'
  })
}

function url(e,r) {
  $('.cover').css({
    'position': 'absolute',
    'height': $(window).outerHeight() + 'px',
    'width': $(window).outerWidth(true) + 'px',
    'background-color': 'rgba(0,0,0,0.7)',
    'top': '0'
  })
  console.log(game.price[0]);
  makeItemDetail(r);
}

function makeItemDetail(r) {
  $('<div class="covercontent">').appendTo('body');
  $('.covercontent').css({
    'position': 'absolute',
    'display': 'block',
    'width': $(window).outerWidth() * 0.8 + 'px',
    'height': $(window).outerHeight() * 0.8 + 'px',
    'background-color': 'white',
    'left': $(window).outerWidth() * 0.1 + 'px',
    'top': $(window).outerHeight() * 0.1 + 'px',
    'z-index': '9999'
  })
  let covercontent = $('.covercontent');
  let wrapper = $('<div class="coverwrapper">').appendTo(covercontent);
  wrapper.css({
    'width': '90%',
    'height': $('.covercontent').outerHeight() * 0.8 + 'px',
    'background-color': 'blue',
    'margin': '0 auto',
    'margin-top': $('.covercontent').outerHeight() * 0.1 + 'px'
  })
  $('<p>').text('Detail Spec').appendTo(wrapper);
  $('<hr>').appendTo(wrapper);
  let iframe = $('<div class="contentDetail">').appendTo(wrapper);
  iframe.css({
    'padding':'5px',
    'box-sizing':'border-box'
  })
  iframeContent(r);
}

function iframeContent(){

}
$('.cover').on('click', function() {
  $(this).css({
    'width': 0,
    'height': 0
  })
  $('.covercontent').remove();
})
