// cpu,ram,gpu,fan,mainboard,power,ssd,hdd,case
// var cpu[] = {''}
var item = {
  price:330,
  name :"name",
  Detail:"Detail"
}
var game = {
  price: ['$330', '$440', '$550'],
  cpu: ['cpu1', 'cpu2', 'cp3'],
  gpu: ['gpu1', 'gpu2', 'gpu3'],
  ram: ['ram1', 'ram2', 'ram3'],
  case: ['case1', 'case2', 'case3'],
  ssd: ['ssd1', 'ssd2', 'ssd3'],
  hdd: ['hdd1', 'hdd2', 'hdd3'],
  power: ['power1', 'power2', 'power3'],
  mainboard: ['mainboard1', 'mainboard2', 'mainboard3']
}
console.log(game[0]);

var office = {
  price: ['$330', '$440', '$550'],
  cpu: ['cpu1', 'cpu2', 'cp3'],
  gpu: ['gpu1', 'gpu2', 'gpu3'],
  ram: ['ram1', 'ram2', 'ram3'],
  case: ['case1', 'case2', 'case3'],
  ssd: ['ssd1', 'ssd2', 'ssd3'],
  hdd: ['hdd1', 'hdd2', 'hdd3'],
  power: ['power1', 'power2', 'power3'],
  mainboard: ['mainboard1', 'mainboard2', 'mainboard3']
}
var dev = {
  price: ['$330', '$440', '$550'],
  cpu: ['cpu1', 'cpu2', 'cp3'],
  gpu: ['gpu1', 'gpu2', 'gpu3'],
  ram: ['ram1', 'ram2', 'ram3'],
  case: ['case1', 'case2', 'case3'],
  ssd: ['ssd1', 'ssd2', 'ssd3'],
  hdd: ['hdd1', 'hdd2', 'hdd3'],
  power: ['power1', 'power2', 'power3'],
  mainboard: ['mainboard1', 'mainboard2', 'mainboard3']
}
var design = {
  price: ['$330', '$440', '$550'],
  cpu: ['cpu1', 'cpu2', 'cp3'],
  gpu: ['gpu1', 'gpu2', 'gpu3'],
  ram: ['ram1', 'ram2', 'ram3'],
  case: ['case1', 'case2', 'case3'],
  ssd: ['ssd1', 'ssd2', 'ssd3'],
  hdd: ['hdd1', 'hdd2', 'hdd3'],
  power: ['power1', 'power2', 'power3'],
  mainboard: ['mainboard1', 'mainboard2', 'mainboard3']
}

// var gameprice = ['$330', '$440', '$550'];
//
// console.log(game.mainboard[0]);
// var officeprice = ['$330', '$440', '$550'];
// var devprice = ['$330', '$440', '$550'];
// var designprice = ['$330', '$440', '$550'];
// var cpu = ['cpu1', 'cpu2', 'cpu3'];
// var gpu = ['gpu1', 'gpu2', 'gpu3'];
// var ram = ['ram1', 'ram2', 'ram3'];
// var mainboard = ['main1', 'main2', 'main3'];
// var power = ['power1', 'power2', 'power3'];
// var ssd = ['ssd1', 'ssd2', 'ssd3'];
// var hdd = ['hdd1', 'hhd2', 'hhd3'];
// var casecase = ['case1', 'case2', 'case3'];

$('button').on('click', function() {
  if ($('.Purpose_content option:selected').val() == 'Game') {
    makeItem(game);
  } else if ($('.Purpose_content option:selected').val() == 'Dev') {
    makeItem(dev);
  } else if ($('.Purpose_content option:selected').val() == 'Designer') {
    makeItem(design);
  } else if ($('.Purpose_content option:selected').val() == 'Office') {
    makeItem(office);
  } else {
    alert("Unknown Error!");
    location.reload();
  }

})
