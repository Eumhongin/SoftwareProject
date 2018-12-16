// cpu,ram,gpu,fan,mainboard,power,ssd,hdd,case
// var cpu[] = {''}
// var item = {
//   price: 330,
//   name: "name",
//   Detail: "Detail"
// }
// defalt form
// var item = {
//   price:330,
//   name :"name",
//   Detail:"Detail"
// }

var intelCeleron = {
  price: 53790,
  name: "인텔 셀러론 G4900 (커피레이크)",
  Detail: "인텔(소켓1151v2)|14nm|듀얼(2)코어|쓰레드 2개|3.1GHz|2MB|64비트|54W|인텔 UHD 610|350MHz",
  realname: intelCeleron

}

var intel_i3 = {
  price: 152520,
  name: "인텔 코어i3-8세대 8100 (커피레이크)",
  Detail: "인텔(소켓1151v2)|14nm|쿼드(4)코어|쓰레드 4개|3.60GHz|6MB|64비트|65W|인텔 UHD 630|350MHz|옵테인"
}

var intel_i5 = {
  price: 329010,
  name: "인텔 코어 i5-9세대 9600K (커피레이크-R)",
  Detail: "인텔(소켓1151v2)|14nm|헥사(6)코어|쓰레드 6개|3.70GHz|9MB|64비트|95W|인텔 UHD 630|350MHz|옵테인"
}

var intel_i7 = {
  price: 491590,
  name: "인텔 코어 i7-9세대 9700K (커피레이크-R)",
  Detail: "인텔(소켓1151v2)|14nm|옥타(8)코어|쓰레드 8개|3.60GHz|12MB|64비트|95W|인텔 UHD 630|350MHz|옵테인"
}

var intel_i9 = {
  price: 642730,
  name: "인텔 코어 i9-9세대 9900K (커피레이크-R)",
  Detail: "인텔(소켓1151v2)|14nm|옥타(8)코어|쓰레드 16개|3.60GHz|16MB|64비트|95W|인텔 UHD 630|350MHz|하이퍼스레딩|옵테인"
}

var main_H310M = {
  price: 69550,
  name: "GIGABYTE H310M H 듀러블에디션",
  Detail: "인텔(소켓1151v2)/(인텔) H310/M-ATX (24.4x24.4cm)/전원부:4페이즈/DDR4/메모리 용량:최대 32GB/XMP/PCIe 슬롯:3개/SATA3:4개/7.1ch/그래픽 출력:D-SUB,HDMI/PS/2:콤보 1개/USB 2.0:후면 4개/USB 3.1 Gen 1:후면 2개/기가비트 LAN/UEFI/VR Ready"
}

var main_B360M = {
  price: 97980,
  name: "ASRock B360M PRO4",
  Detail: "인텔(소켓1151v2)/(인텔) B360/M-ATX (24.4x24.4cm)/전원부:10페이즈/DDR4/메모리 용량:최대 64GB/XMP/옵테인/VGA 연결:PCIe3.0 x16/멀티 GPU:CrossFire X/PCIe 슬롯:4개/SATA3:6개/M.2 슬롯:3개/7.1ch/그래픽 출력:D-SUB,DVI,HDMI/PS/2:2개/USB 2.0:후면 2개/USB 3.1 Gen 1:후면 2개/USB 3.1 Gen 2:후면 2개/기가비트 LAN/UEFI"
}

var main_Z390 = {
  price: 613440,
  name: "ASUS ROG MAXIMUS XI FORMULA",
  Detail: "인텔(소켓1151v2)/(인텔) Z390/ATX (30.5x24.4cm)/DDR4/메모리 용량:최대 64GB/XMP/옵테인/VGA 연결:PCIe3.0 x16/멀티 GPU:CrossFire X,SLI/PCIe 슬롯:4개/SATA3:6개/M.2 슬롯:2개/8ch/그래픽 출력:HDMI/USB 3.1 Gen 1:후면 8개/USB 3.1 Gen 2:후면 4개/기가비트 LAN/무선 LAN/LED 라이트/AURA SYNC"
}

var ram_4 = {
  price: 45690,
  name: "삼성전자 DDR4 4G PC4-21300",
  Detail: "DDR4/PC용/1ea/미포함/Dimm/4GB/2,666MHz"
}

var ram_8 = {
  price: 93000,
  name: "삼성전자 DDR4 8G PC4-21300",
  Detail: "DDR4/PC용/1ea/미포함/Dimm/8GB/2,666MHz"
}

var ram_16 = {
  price: 158000,
  name: "삼성전자 DDR4 16G PC4-21300",
  Detail: "DDR4/PC용/1ea/미포함/Dimm/16GB/2,666MHz"
}

var ram_32 = {
  price: 316000,
  name: "삼성전자 DDR4 16G PC4-21300 (16Gx2)",
  Detail: "DDR4/PC용/2ea/미포함/Dimm/32GB/2,666MHz"
}
var gpu_inner = {
    price:0,
    name :"내장그래픽 사용",
    Detail:"CPU설명 참조"
}
var gpu_2080ti = {
  price: 1946820,
  name: "갤럭시 GALAX 지포스 RTX 2080 Ti Hall Of Fame D6 11GB",
  Detail: "지포스 RTX 2080 Ti/12nm/4352개/PCIe3.0x16/GDDR6(DDR6)/11GB/352-bit/3개 팬"
}

var gpu_2070 = {
  price: 720000,
  name: "갤럭시 GALAX 지포스 RTX 2070 BLACK LABEL EXOC D6 8GB",
  Detail: "지포스 RTX 2070/12nm/1410 MHz , 부스트 1815MHz/2304개/PCIe3.0x16/GDDR6(DDR6)/14000MHz/8GB/256-bit/HDMI/DP/USB Type-C/최대 모니터 4개/최대 215W/정격파워 550W 이상/전원부:8페이즈/2개 팬/285mm/백플레이트/LED 라이트"
}

var gpu_1060 = {
  price: 325420,
  name: "갤럭시 GALAX 지포스 GTX1060 OC D5 6GB",
  Detail: "지포스 GTX1060/16nm/1518 MHz , 부스트 1733MHz/1280개/PCIe3.0x16/GDDR5(DDR5)/8008MHz/6GB/192-bit/DVI/HDMI/DP/최대 모니터 3개/최대 120W/정격파워 400W 이상/전원부:4페이즈/2개 팬/214mm"
}


var ssd_120 = {
  price: 28360,
  name: "Western Digital WD Green SSD (120GB)",
  Detail: "내장형SSD/2.5형(6.4cm)/SATA3 (6Gb/s)/최대 545MB/s/1,000,000시간/TRIM 지원/S.M.A.R.T 지원/DEVSLP 지원/7mm/최대 32.5g/3년/전용 소프트웨어"
}

var ssd_250 = {
  price: 54850,
  name: "마이크론 Crucial MX500 (250GB)",
  Detail: "내장형SSD/2.5형(6.4cm)/SATA3 (6Gb/s)/TLC(기타)/3D낸드/실리콘모션 SM2258/최대 560MB/s/최대 510MB/s/1,800,000시간/TRIM 지원/GC 기능/S.M.A.R.T 지원/ECC 지원/DEVSLP 지원/7mm/5년/전용 소프트웨어"
}

var ssd_500 = {
  price: 93190,
  name: "마이크론 Crucial MX500 (500GB)",
  Detail: "내장형SSD/2.5형(6.4cm)/SATA3 (6Gb/s)/TLC(기타)/3D낸드/실리콘모션 SM2258/최대 560MB/s/최대 510MB/s/1,800,000시간/TRIM 지원/GC 기능/S.M.A.R.T 지원/ECC 지원/DEVSLP 지원/7mm/5년/전용 소프트웨어"
}

var ssd_512 = {
  price: 264960,
  name: "삼성전자 970 PRO M.2 2280 (512GB)",
  Detail: "내장형SSD/M.2 (2280)/PCIe3.0x4 (32GT/s)/NVMe 1.3/MLC(기타)/3D낸드/삼성 Phoenix/LPDDR4/512MB/최대 3,500MB/s/최대 2,300MB/s/1,500,000시간/TRIM 지원/GC 기능/S.M.A.R.T 지원/DEVSLP 지원/2.38mm/최대 8g/5년/전용 소프트웨어"
}

var ssd_1024 = {
  price: 540000,
  name: "삼성전자 970 PRO M.2 2280 (1TB)",
  Detail: "내장형SSD/M.2 (2280)/PCIe3.0x4 (32GT/s)/NVMe 1.3/MLC(기타)/3D낸드/삼성 Phoenix/LPDDR4/1GB/최대 3,500MB/s/최대 2,700MB/s/1,500,000시간/TRIM 지원/GC 기능/S.M.A.R.T 지원/DEVSLP 지원/2.38mm/최대 8g/5년/전용 소프트웨어"
}
var hdd_no = {
    price:0,
    name :"HDD없음",
    Detail:"HDD없음"
}
var hdd_1T = {
  price: 50350,
  name: "Western Digital WD 1TB BLUE WD10EZEX (SATA3/7200/64M)",
  Detail: "HDD (PC용)/8.9cm (3.5형)/1TB/SATA3(6Gb/s)/7,200RPM/메모리 64MB/두께:25.4mm/소음(유휴/탐색):29/30dB/2년"
}

var hdd_3T = {
  price: 96690,
  name: "Toshiba 3TB P300 HDWD130 (SATA3/7200/64M)",
  Detail: "HDD (PC용)/8.9cm (3.5형)/3TB/SATA3 (6Gb/s)/7,200RPM/메모리 64MB/두께:26.1mm/DSA/소음(유휴/탐색):27/28dB/2년"
}

var hdd_10T = {
  price: 530250,
  name: "Seagate 10TB BarraCuda Pro ST10000DM0004 (SATA3/7200/256M)",
  Detail: "인텔(소켓1151v2)|14nm|옥타(8)코어|쓰레드 16개|3.60GHz|16MB|64비트|95W|인텔 UHD 630|350MHz|하이퍼스레딩|옵테인"
}

var case_basic = {
  price: 16500,
  name: "ABKO NCORE 티키",
  Detail: "PC케이스(ATX)/미들타워/파워미포함/표준-ATX/Micro-ATX/Mini-ITX/측면 통풍구/80mm/HD AUDIO/194mm/408mm/397mm/최대 340mm/CPU쿨러:최대 150mm"
}

var case_custom = {
  price: 92000,
  name: "3RSYS L1000 강화유리",
  Detail: "PC케이스(ATX)|미들타워|강화유리 케이스|파워미포함|표준-ATX|Micro-ATX|Mini-ITX|쿨링팬 3개|측면 강화유리|120mm 화이트 LED|140mm 화이트 LED x2|HD AUDIO|240mm|455mm|475mm|최대 380mm|CPU쿨러:최대 172mm"
}

var case_highend = {
  price: 663410,
  name: "리안리 PC-O8 화이트 Mirror Painting Ver.",
  Detail: "PC케이스(ATX)/미들타워/알루미늄 케이스/강화유리 케이스/파워미포함/표준-ATX/Micro-ATX/쿨링팬 6개/측면 강화유리/120mm 이상/120mm x 3/HD AUDIO/341mm/428mm/404mm/최대 370mm/CPU쿨러:최대 170mm/내부 LED 바"
}

var power_bronze = {
  price: 44000,
  name: "마이크로닉스 Classic II 500W +12V Single Rail 85+",
  Detail: "ATX 파워/정격 500W/20핀+4핀/120mm 팬/1개(팬)/액티브PFC/깊이:140mm/+12V 싱글레일/37.5A/4핀 IDE x3/SATA x6/6+2핀 PCI-E x2/보조8핀 커넥터/보조4핀 커넥터/FDD 커넥터/대기전력 1W/플랫케이블/80 PLUS/스탠다드/무상 6년"
}

var power_gold = {
  price: 143000,
  name: "SuperFlower SF-650F14MG II LEADEX GOLD",
  Detail: "ATX 파워/정격 650W/20핀+4핀/135mm 팬/1개(팬)/액티브PFC/깊이:165mm/+12V 싱글레일/54.1A/4핀 IDE x4/SATA x6/6+2핀 PCI-E x4/보조8핀(4+4) 커넥터/케이블 연결식/대기전력 1W/프리볼트/80 PLUS/골드/무상 7년"
}

var power_titanium = {
  price: 546000,
  name: "SuperFlower SF-1600F14HT LEADEX TITANIUM",
  Detail: "ATX 파워/정격 1600W/20핀+4핀/140mm 팬/1개(팬)/액티브PFC/깊이:225mm/+12V 싱글레일/133.3A/4핀 IDE x5/SATA x14/6핀 PCI-E x5/6+2핀 PCI-E x9/보조8핀(4+4) 커넥터/FDD 커넥터/케이블 연결식/대기전력 1W/플랫케이블/프리볼트/80 PLUS/티타늄/무상 7년"
}
// var list_cpu = [intelCeleron, intel_i3, intel_i5, intel_i7, intel_i9];
// var list_main = [main_H310M, main_B360M, main_Z390];
// var list_ram = [ram_4, ram_8, ram_16, ram_32];
// var list_gpu = [gpu_inner, gpu_1060, gpu_2070, gpu_2080ti];
// var list_ssd = [ssd_120, ssd_250, ssd_500, ssd_512, ssd_1024];
// var list_hdd = [hdd_no,hdd_1T, hdd_3T, hdd_10T];
// var list_case = [case_basic, case_custom, case_highend];
// var list_power = [power_bronze, power_gold, power_titanium];


var game = {
    set1: {
      cpu: intel_i5,
      gpu: gpu_1060,
      ram: ram_8,
      ssd: ssd_250,
      hdd: hdd_no,
      mainboard: main_H310M,
      case: case_basic,
      power: power_bronze,
      view: {
        price: intel_i5.price + gpu_1060.price + ram_8.price + ssd_250.price + hdd_no.price + main_H310M.price + case_basic.price + power_bronze.price,
        cpu: intel_i5.name,
        gpu: gpu_1060.name,
        ram: ram_8.name,
        ssd: ssd_250.name,
        hdd: hdd_no.name,
        mainboard: main_H310M.name,
        case: case_basic.name,
        power: power_bronze.name
      }

    },
    set2: {
        cpu: intel_i7,
        gpu: gpu_2070,
        ram: ram_16,
        ssd: ssd_500,
        hdd: hdd_1T,
        mainboard: main_B360M,
        case: case_custom,
        power: power_gold,
        view: {
          price: intel_i7.price + gpu_2070.price + ram_16.price + ssd_500.price + hdd_1T.price + main_B360M.price + case_custom.price + power_gold.price,
          cpu: intel_i7.name,
          gpu: gpu_2070.name,
          ram: ram_16.name,
          ssd: ssd_500.name,
          hdd: hdd_1T.name,
          mainboard: main_B360M.name,
          case: case_custom.name,
          power: power_gold.name
        }

    },
    set3: {
      cpu: intel_i9,
      gpu: gpu_2080ti,
      ram: ram_32,
      ssd: ssd_1024,
      hdd: hdd_10T,
      mainboard: main_Z390,
      case: case_highend,
      power: power_titanium,
      view: {
        price: intel_i9.price + gpu_2080ti.price + ram_32.price + ssd_1024.price + hdd_10T.price + main_Z390.price + case_highend.price + power_titanium.price,
        cpu: intel_i9.name,
        gpu: gpu_2080ti.name,
        ram: ram_32.name,
        ssd: ssd_1024.name,
        hdd: hdd_10T.name,
        mainboard: main_Z390.name,
        case: case_highend.name,
        power: power_titanium.name
      }

    },
    StructureName: function() {
      return 'game'
    }
  }


var design = {
  set1: {
    price: '$330',
    cpu: intelCeleron,
    gpu: 'gpu1',
    ram: 'ram1',
    ssd: 'ssd1',
    hdd: 'hdd1',
    mainboard: 'mainboard1',
    case: 'case1',
    power: 'power1',
    view: {
      price: '$330',
      cpu: "intelCeleron",
      gpu: 'gpu1',
      ram: 'ram1',
      ssd: 'ssd1',
      hdd: 'hdd1',
      mainboard: 'mainboard1',
      case: 'case1',
      power: 'power1'
    }

  },
  set2: {
    price: '$440',
    cpu: 'cpu2',
    gpu: 'gpu2',
    ram: 'ram2',
    ssd: 'ssd2',
    hdd: 'hdd2',
    mainboard: 'mainboard2',
    case: 'case2',
    power: 'power2',
    view: {
      price: '$440',
      cpu: 'cpu2',
      gpu: 'gpu2',
      ram: 'ram2',
      ssd: 'ssd2',
      hdd: 'hdd2',
      mainboard: 'mainboard2',
      case: 'case2',
      power: 'power2'
    }

  },
  set3: {
    price: '$550',
    cpu: 'cpu3',
    gpu: 'gpu3',
    ram: 'ram3',
    ssd: 'ssd3',
    hdd: 'hdd3',
    mainboard: 'mainboard3',
    case: 'case3',
    power: 'power3',
    view: {
      price: '$550',
      cpu: 'cpu3',
      gpu: 'gpu3',
      ram: 'ram3',
      ssd: 'ssd3',
      hdd: 'hdd3',
      mainboard: 'mainboard3',
      case: 'case3',
      power: 'power3'
    }

  },
  StructureName: function() {
    return 'design'
  }

}
var dev = {
  set1: {
    price: '$330',
    cpu: intelCeleron,
    gpu: 'gpu1',
    ram: 'ram1',
    ssd: 'ssd1',
    hdd: 'hdd1',
    mainboard: 'mainboard1',
    case: 'case1',
    power: 'power1',
    view: {
      price: '$330',
      cpu: "intelCeleron",
      gpu: 'gpu1',
      ram: 'ram1',
      ssd: 'ssd1',
      hdd: 'hdd1',
      mainboard: 'mainboard1',
      case: 'case1',
      power: 'power1'
    }

  },
  set2: {
    price: '$440',
    cpu: 'cpu2',
    gpu: 'gpu2',
    ram: 'ram2',
    ssd: 'ssd2',
    hdd: 'hdd2',
    mainboard: 'mainboard2',
    case: 'case2',
    power: 'power2',
    view: {
      price: '$440',
      cpu: 'cpu2',
      gpu: 'gpu2',
      ram: 'ram2',
      ssd: 'ssd2',
      hdd: 'hdd2',
      mainboard: 'mainboard2',
      case: 'case2',
      power: 'power2'
    }

  },
  set3: {
    price: '$550',
    cpu: 'cpu3',
    gpu: 'gpu3',
    ram: 'ram3',
    ssd: 'ssd3',
    hdd: 'hdd3',
    mainboard: 'mainboard3',
    case: 'case3',
    power: 'power3',
    view: {
      price: '$550',
      cpu: 'cpu3',
      gpu: 'gpu3',
      ram: 'ram3',
      ssd: 'ssd3',
      hdd: 'hdd3',
      mainboard: 'mainboard3',
      case: 'case3',
      power: 'power3'
    }

  },
  StructureName: function() {
    return 'dev'
  }

}
var office = {
  set1: {
    price: '$330',
    cpu: intelCeleron,
    gpu: 'gpu1',
    ram: 'ram1',
    ssd: 'ssd1',
    hdd: 'hdd1',
    mainboard: 'mainboard1',
    case: 'case1',
    power: 'power1',
    view: {
      price: '$330',
      cpu: "intelCeleron",
      gpu: 'gpu1',
      ram: 'ram1',
      ssd: 'ssd1',
      hdd: 'hdd1',
      mainboard: 'mainboard1',
      case: 'case1',
      power: 'power1'
    }

  },
  set2: {
    price: '$440',
    cpu: 'cpu2',
    gpu: 'gpu2',
    ram: 'ram2',
    ssd: 'ssd2',
    hdd: 'hdd2',
    mainboard: 'mainboard2',
    case: 'case2',
    power: 'power2',
    view: {
      price: '$440',
      cpu: 'cpu2',
      gpu: 'gpu2',
      ram: 'ram2',
      ssd: 'ssd2',
      hdd: 'hdd2',
      mainboard: 'mainboard2',
      case: 'case2',
      power: 'power2'
    }

  },
  set3: {
    price: '$550',
    cpu: 'cpu3',
    gpu: 'gpu3',
    ram: 'ram3',
    ssd: 'ssd3',
    hdd: 'hdd3',
    mainboard: 'mainboard3',
    case: 'case3',
    power: 'power3',
    view: {
      price: '$550',
      cpu: 'cpu3',
      gpu: 'gpu3',
      ram: 'ram3',
      ssd: 'ssd3',
      hdd: 'hdd3',
      mainboard: 'mainboard3',
      case: 'case3',
      power: 'power3'
    }

  },
  StructureName: function() {
    return 'office'
  }

}
// console.log(game['set1'].cpu);
// console.log(list_cpu.indexOf(game['set1'].cpu));



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
    alert("종류를 선택해 주세요");
  }

})
