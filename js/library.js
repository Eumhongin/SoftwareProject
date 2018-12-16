var object = new Object();
var setposition;

function makeItem(e) {
  object = e;
  $('.ItemWrapper > *').remove();
  var wrapper = $('.ItemWrapper');
  var title = $('<p>').text('PurPose').appendTo(wrapper);
  var itemSet = $('<div class="itemSet">').appendTo(wrapper);
  for (var i = 1; i < 4; i++) {
    let k = 'set' + i;
    let transformk = "'" + k + "'";
    console.log(transformk);
    var item = $('<div class="item" onclick="url(' + transformk + ')">').appendTo(itemSet);
    $('<p class="price">').text(e[k].view.price + "원").appendTo(item);
    $('<hr>').appendTo(item);
    $('<p class="cpu">').text(e[k].view.cpu).appendTo(item);
    $('<p class="mainboard">').text(e.mainboard).appendTo(item);
    $('<p class="gpu">').text(e[k].view.gpu).appendTo(item);
    $('<p class="ram">').text(e[k].view.ram).appendTo(item);
    $('<p class="casecase">').text(e[k].view.case).appendTo(item);
    $('<p class="power">').text(e[k].view.power).appendTo(item);
    $('<p class="ssd">').text(e[k].view.ssd).appendTo(item);
    $('<p class="hdd">').text(e[k].view.hdd).appendTo(item);
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

function url(setname) { //블럭 누를때
  setposition = setname;
  $('.cover').css({
    'position': 'absolute',
    'height': $(window).outerHeight() + 'px',
    'width': $(window).outerWidth(true) + 'px',
    'background-color': 'rgba(0,0,0,0.7)',
    'top': '0'
  })
  makeItemDetail();
}

function makeItemDetail() {
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
    'margin': '0 auto',
    'margin-top': $('.covercontent').outerHeight() * 0.1 + 'px'
  })
  $('<p>').text('Detail Spec').appendTo(wrapper);
  $('<hr>').appendTo(wrapper);
  let iframe = $('<div class="contentDetail">').appendTo(wrapper);
  iframe.css({
    'padding': '5px',
    'box-sizing': 'border-box',
    'overflow-y': 'scroll',
    'max-height':$('.coverwrapper').outerHeight()*0.9+'px'
  })
  iframeContent(iframe);
}

function iframeContent(parent) {
  // console.log(object[setposition].cpu.name);
  for (let i = 0; i < 9; i++) {
    let shield = $('<div>').appendTo(parent);
    $('<p class="contentimg">').text(object[setposition].cpu.name).appendTo(shield);
    $('<p class="contentSpec" style="text-align:center">').text(object[setposition].cpu.Detail).appendTo(shield);
    $('<p class="contentPrice" style="text-align:center">').text(object[setposition].cpu.price + "원").appendTo(shield);
    shield.css({
      'border-bottom': '1px solid black',
      'padding': '4px',
      'box-sizing': 'border-box',
      'display': 'grid',
      'grid': '100px / 20% 60% 20%'
    })
  }

}
$('.cover').on('click', function() {
  $(this).css({
    'width': 0,
    'height': 0
  })
  $('.covercontent').remove();
})
