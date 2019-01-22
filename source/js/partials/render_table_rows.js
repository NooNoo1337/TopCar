(function () {
  var cleaning_table = $('#cleaning_table tbody');
  var polishing_table = $('#polishing_table tbody');
  var dry_cleaning_table = $('#dry_cleaning_table tbody');
  var chrome_parts_table = $('#chrome_parts__table tbody');
  var first_tire_table = $('#first_tire_fitting_table tbody');
  var second_tire_table = $('#second_tire_fitting_table tbody');
  var third_tire_table = $('#third_tire_fitting_table tbody');
  var fourth_tire_table = $('#fourth_tire_fitting_table tbody');

  // Прочие услуги
  const cleaning_collection = [
    {
      title: 'Мойка',
      add_info: '(кузов, коврики и пороги)',
      description: 'Мы позаботимся о чистоте кузова, ковриков и порогов вашей машины',
      first_price: 400,
      second_price: 500,
      third_price: 600,
      fourth_price: 700,
    },

    {
      title: 'Евромойка',
      add_info: '(кузов, коврики и пороги)',
      description: '',
      first_price: 600,
      second_price: 700,
      third_price: 800,
      fourth_price: 900,
    },

    {
      title: 'Уборка салона пылесосом',
      description: '',
      first_price: 200,
      second_price: 200,
      third_price: 200,
      fourth_price: 200,
    },

    {
      title: 'Протирка приборной панели и пластика',
      description: '',
      first_price: 100,
      second_price: 150,
      third_price: 150,
      fourth_price: 200,
    },

    {
      title: 'Чистка всех стёкол изнутри',
      description: '',
      first_price: 200,
      second_price: 200,
      third_price: 250,
      fourth_price: 250,
    },

    {
      title: 'Чернение резины',
      description: '',
      first_price: 100,
      second_price: 100,
      third_price: 100,
      fourth_price: 100,
    },

    {
      title: 'Комлекс "Стандарт", включены услуги: 1, 2, 3, 4, 5, 6',
      // add_info: 'мойка "кузов, коврики и пороги, евромойка "кузов, коврики и пороги", уборка салона пылесосом, протирка приборной панели и пластика, чистка всех стёкол изнутри, чернение резины',
      description: 'Комлекс включает в себя: мойку кузова, ковриков и порогов, евромойку кузова, ковриков и порогов", уборку салона пылесосом, протирку приборной панели и пластика, чистку всех стёкол изнутри и чернение резины',
      first_price: 800,
      second_price: 1000,
      third_price: 1100,
      fourth_price: 1300,
    },

    {
      title: 'Кондиционер кожи',
      description: '',
      first_price: 200,
      second_price: 200,
      third_price: 300,
      fourth_price: 300,
    },

    {
      title: 'Комлекс "TopCar", включены услуги: 6, 7, 8, 11',
      // add_info: 'чернение резины, комлекс "Стандарт", кондиционер кожи, обработка автомобиля НАНО-шампунем',
      description: '',
      first_price: 1100,
      second_price: 1300,
      third_price: 1500,
      fourth_price: 1700,
    },

    {
      title: 'Ополаскивание кузова',
      description: '',
      first_price: 200,
      second_price: 250,
      third_price: 300,
      fourth_price: 350,
    },

    {
      title: 'Обработка автомобиля НАНО-шампунем',
      description: '',
      first_price: 200,
      second_price: 200,
      third_price: 200,
      fourth_price: 200,
    },

    {
      title: 'Мойка ковриков',
      description: '',
      first_price: 100,
      second_price: 100,
      third_price: 100,
      fourth_price: 100,
    },

    {
      title: 'Чистка багажника пылесосом',
      description: '',
      first_price: 150,
      second_price: 150,
      third_price: 200,
      fourth_price: 250,
    },

    {
      title: 'Протирка приборной панели',
      description: '',
      first_price: 100,
      second_price: 100,
      third_price: 150,
      fourth_price: 150,
    },

    {
      title: 'Протирка лобового стекла изнутри',
      description: '',
      first_price: 100,
      second_price: 100,
      third_price: 100,
      fourth_price: 100,
    },

    {
      title: 'Мойка порогов',
      description: '',
      first_price: 100,
      second_price: 150,
      third_price: 200,
      fourth_price: 200,
    },

    {
      title: 'Химчистка диска',
      description: '',
      first_price: 150,
      second_price: 150,
      third_price: 150,
      fourth_price: 150,
    },

    {
      title: 'Cнятие следов насекомых',
      description: '',
      first_price: 400,
      second_price: 500,
      third_price: 600,
      fourth_price: 700,
    },

    {
      title: 'Мойка двигателя',
      description: '',
      first_price: 600,
      second_price: 600,
      third_price: 800,
      fourth_price: 800,
    },
  ];

  const dry_cleaning_collection = [
    {
      id: 0,
      title: 'Химчистка потолка',
      first_price: 1000,
      second_price: 1500,
      third_price: 2000,
      fourth_price: 2500,
    },

    {
      id: 1,
      title: 'Химчистка пола',
      first_price: 1500,
      second_price: 2000,
      third_price: 2500,
      fourth_price: 3000,
    },

    {
      id: 2,
      title: 'Химчистка сидений',
      first_price: 2000,
      second_price: 2000,
      third_price: 2000,
      fourth_price: 2000,
    },

    {
      id: 3,
      title: 'Химчистка обшивки дверей',
      first_price: 1000,
      second_price: 1000,
      third_price: 1500,
      fourth_price: 1500,
    },

    {
      id: 4,
      title: 'Химчистка приборной панели',
      first_price: 1000,
      second_price: 1000,
      third_price: 1500,
      fourth_price: 1500,
    },

    {
      id: 5,
      title: 'Химчистка напольного коврика',
      first_price: 200,
      second_price: 200,
      third_price: 200,
      fourth_price: 200,
    },

    {
      id: 6,
      title: 'Химчистка багажника',
      first_price: 1000,
      second_price: 1000,
      third_price: 1500,
      fourth_price: 1500,
    },

    {
      id: 7,
      title: 'Полная химчистка, включает услуги: 1, 2, 3, 4, 5, 6',
      add_info: '(включает в себя все виды услуг по химчистке)',
      first_price: 5000,
      second_price: 7000,
      third_price: 8000,
      fourth_price: 9000,
    },

  ];

  const polishing_cleaning_collection = [
    {
      id: 0,
      title: 'Глубокая очистка ЛКП',
      first_price: 1500,
      second_price: 2000,
      third_price: 2500,
      fourth_price: 3000,
    },

    {
      id: 1,
      title: 'Полировка 1ой вертикальной детали',
      first_price: 600,
      second_price: 700,
      third_price: 800,
      fourth_price: 1000,
    },

    {
      id: 2,
      title: 'Полировка 1ой горизонтальной детали',
      first_price: 1200,
      second_price: 1400,
      third_price: 1500,
      fourth_price: 2000,
    },

    {
      id: 3,
      title: 'Полировка 1ой фары',
      first_price: 500,
      second_price: 500,
      third_price: 500,
      fourth_price: 500,
    },

    {
      id: 4,
      title: 'Полная полировка автомобиля',
      add_info: '(все полировочные услуги)',
      first_price: 8000,
      second_price: 9000,
      third_price: 10000,
      fourth_price: 12000,
    },

    {
      id: 5,
      title: 'Дополнительная обработка 1ой детали',
      first_price: 600,
      second_price: 700,
      third_price: 800,
      fourth_price: 1000,
    },

    {
      id: 6,
      title: 'Дополнительная обработка крыши или капота',
      first_price: 1200,
      second_price: 1400,
      third_price: 1500,
      fourth_price: 2000,
    },

    {
      id: 7,
      title: 'Дополнительная обработка всего кузова',
      first_price: 5000,
      second_price: 9000,
      third_price: 10000,
      fourth_price: 12000,
    },

    {
      id: 8,
      title: 'Восстановление глянца',
      first_price: 4000,
      second_price: 4500,
      third_price: 5000,
      fourth_price: 6000,
    },

    {
      id: 9,
      title: 'Нано-обработка лобового стекла',
      first_price: 1000,
      second_price: 1200,
      third_price: 1400,
      fourth_price: 1600,
    },

    {
      id: 10,
      title: 'Нано-обработка всх стекл, зеркал и фар',
      first_price: 2500,
      second_price: 3000,
      third_price: 3500,
      fourth_price: 4000,
    },

    {
      id: 11,
      title: 'Обработка Лкл "НАНО_ЛАК"',
      first_price: 5000,
      second_price: 5500,
      third_price: 6000,
      fourth_price: 7000,
    },

    {
      id: 12,
      title: 'Защитная полировка "MEGUIAR\'S"',
      first_price: 2500,
      second_price: 3000,
      third_price: 3500,
      fourth_price: 4000,
    },

    {
      id: 13,
      title: 'Защитная полировка жидким стеклом',
      first_price: 10000,
      second_price: 12000,
      third_price: 15000,
      fourth_price: 18000,
    },

    {
      id: 14,
      title: 'Защитная кермамическая обработка кузова',
      first_price: 15000,
      second_price: 17000,
      third_price: 20000,
      fourth_price: 25000,
    },
  ];

  const chome_parts_collection = [
    {
      id: 0,
      title: 'Решетка радиатора, накладки дв., багажника, бампера, насадки труб',
      first_price: 700,
      second_price: 700,
      third_price: 700,
      fourth_price: 700,
    },

    {
      id: 1,
      title: 'Передняя защитная решетка',
      first_price: 300,
      second_price: 300,
      third_price: 300,
      fourth_price: 300,
    },
  ];

  // шиномонтаж
  // легковые авто
  const first_tire_collection = [
    {
      id: 0,
      offer_type: 'tire_fix',
      title: 'Cнятие и установка колеса',
      first_price: 70,
      second_price: 80,
      third_price: 100,
      fourth_price: 110,
      fifth_price: 150,
      sixth_price: 180,
      seventh_price: 220,
      eighth_price: 220,
    },

    {
      id: 1,
      offer_type: 'tire_fix',
      title: 'Демонтаж шины',
      first_price: 80,
      second_price: 90,
      third_price: 100,
      fourth_price: 120,
      fifth_price: 150,
      sixth_price: 180,
      seventh_price: 200,
      eighth_price: 250,
    },

    {
      id: 2,
      offer_type: 'tire_fix',
      title: 'Монтаж шины',
      first_price: 80,
      second_price: 90,
      third_price: 120,
      fourth_price: 130,
      fifth_price: 170,
      sixth_price: 190,
      seventh_price: 220,
      eighth_price: 250,
    },

    {
      id: 3,
      offer_type: 'tire_fix',
      title: 'Балансировка колеса',
      first_price: 170,
      second_price: 180,
      third_price: 190,
      fourth_price: 240,
      fifth_price: 250,
      sixth_price: 300,
      seventh_price: 350,
      eighth_price: 400,
    },

    {
      id: 4,
      offer_type: 'tire_fix',
      title: 'Полный комплекс за 1 колесо',
      first_price: 400,
      second_price: 440,
      third_price: 510,
      fourth_price: 600,
      fifth_price: 720,
      sixth_price: 850,
      seventh_price: 980,
      eighth_price: 1120,
    },

    {
      id: 5,
      offer_type: 'tire_fix',
      title: 'Полный комплекс за 1 комплект',
      first_price: 1600,
      second_price: 1760,
      third_price: 2040,
      fourth_price: 2400,
      fifth_price: 2880,
      sixth_price: 3400,
      seventh_price: 3920,
      eighth_price: 4480,
    },

    {
      id: 6,
      offer_type: 'tire_fix',
      title: 'Рапфлет  комплект',
      first_price: '+1000',
      second_price: '+1000',
      third_price: '+1000',
      fourth_price: '+1000',
      fifth_price: '+1000',
      sixth_price: '+1000',
      seventh_price: '+1000',
      eighth_price: '+1000',
    },
  ];

  // внедорожники
  const second_tire_collection = [
    {
      id: 0,
      offer_type: 'tire_fix',
      title: 'Cнятие и установка колеса',
      first_price: 110,
      second_price: 120,
      third_price: 120,
      fourth_price: 150,
      fifth_price: 180,
      sixth_price: 190,
      seventh_price: 250,
      eighth_price: 250,
    },

    {
      id: 1,
      offer_type: 'tire_fix',
      title: 'Демонтаж шины',
      first_price: 140,
      second_price: 150,
      third_price: 170,
      fourth_price: 210,
      fifth_price: 240,
      sixth_price: 280,
      seventh_price: 350,
      eighth_price: 400,
    },

    {
      id: 2,
      offer_type: 'tire_fix',
      title: 'Монтаж шины',
      first_price: 140,
      second_price: 160,
      third_price: 170,
      fourth_price: 210,
      fifth_price: 240,
      sixth_price: 280,
      seventh_price: 350,
      eighth_price: 400,
    },

    {
      id: 3,
      offer_type: 'tire_fix',
      title: 'Балансировка колеса',
      first_price: 240,
      second_price: 280,
      third_price: 330,
      fourth_price: 390,
      fifth_price: 450,
      sixth_price: 530,
      seventh_price: 650,
      eighth_price: 700,
    },

    {
      id: 4,
      offer_type: 'tire_fix',
      title: 'Полный комплекс за 1 колесо',
      first_price: 630,
      second_price: 710,
      third_price: 790,
      fourth_price: 960,
      fifth_price: 1100,
      sixth_price: 1330,
      seventh_price: 1600,
      eighth_price: 1750,
    },

    {
      id: 5,
      offer_type: 'tire_fix',
      title: 'Полный комплекс за 1 комплект',
      first_price: 2520,
      second_price: 2840,
      third_price: 3200,
      fourth_price: 3840,
      fifth_price: 4440,
      sixth_price: 5320,
      seventh_price: 6400,
      eighth_price: 7000,
    },

    {
      id: 6,
      offer_type: 'tire_fix',
      title: 'Рапфлет  комплект',
      first_price: '+1000',
      second_price: '+1000',
      third_price: '+1000',
      fourth_price: '+1000',
      fifth_price: '+1000',
      sixth_price: '+1000',
      seventh_price: '+1000',
      eighth_price: '+1000',
    },
  ];

  // легковые авто c низким профилем
  const third_tire_collection = [
    {
      id: 0,
      offer_type: 'tire_fix',
      title: 'Cнятие и установка колеса',
      first_price: 120,
      second_price: 130,
      third_price: 150,
      fourth_price: 180,
      fifth_price: 200,
      sixth_price: 220,
      seventh_price: 250,
      eighth_price: 250,
    },

    {
      id: 1,
      offer_type: 'tire_fix',
      title: 'Демонтаж шины',
      first_price: 120,
      second_price: 160,
      third_price: 170,
      fourth_price: 200,
      fifth_price: 240,
      sixth_price: 270,
      seventh_price: 350,
      eighth_price: 380,
    },

    {
      id: 2,
      offer_type: 'tire_fix',
      title: 'Монтаж шины',
      first_price: 120,
      second_price: 170,
      third_price: 200,
      fourth_price: 220,
      fifth_price: 240,
      sixth_price: 270,
      seventh_price: 350,
      eighth_price: 380,
    },

    {
      id: 3,
      offer_type: 'tire_fix',
      title: 'Балансировка колеса',
      first_price: 230,
      second_price: 240,
      third_price: 280,
      fourth_price: 330,
      fifth_price: 460,
      sixth_price: 500,
      seventh_price: 600,
      eighth_price: 650,
    },

    {
      id: 4,
      offer_type: 'tire_fix',
      title: 'Полный комплекс за 1 колесо',
      first_price: 590,
      second_price: 700,
      third_price: 800,
      fourth_price: 930,
      fifth_price: 1140,
      sixth_price: 1260,
      seventh_price: 1550,
      eighth_price: 1660,
    },

    {
      id: 5,
      offer_type: 'tire_fix',
      title: 'Полный комплекс за 1 комплект',
      first_price: 2360,
      second_price: 2800,
      third_price: 3200,
      fourth_price: 3720,
      fifth_price: 4560,
      sixth_price: 5040,
      seventh_price: 6200,
      eighth_price: 6640,
    },

    {
      id: 6,
      offer_type: 'tire_fix',
      title: 'Рапфлет  комплект',
      first_price: '+1000',
      second_price: '+1000',
      third_price: '+1000',
      fourth_price: '+1000',
      fifth_price: '+1000',
      sixth_price: '+1000',
      seventh_price: '+1000',
      eighth_price: '+1000',
    },
  ];

  // внедорожники c низким профилем
  const fourth_tire_collection = [
    {
      id: 0,
      offer_type: 'tire_fix',
      title: 'Cнятие и установка колеса',
      first_price: 140,
      second_price: 160,
      third_price: 180,
      fourth_price: 210,
      fifth_price: 230,
      sixth_price: 250,
      seventh_price: 270,
      eighth_price: 300,
    },

    {
      id: 1,
      offer_type: 'tire_fix',
      title: 'Демонтаж шины',
      first_price: 140,
      second_price: 160,
      third_price: 180,
      fourth_price: 220,
      fifth_price: 250,
      sixth_price: 270,
      seventh_price: 310,
      eighth_price: 320,
    },

    {
      id: 2,
      offer_type: 'tire_fix',
      title: 'Монтаж шины',
      first_price: 160,
      second_price: 180,
      third_price: 210,
      fourth_price: 250,
      fifth_price: 300,
      sixth_price: 330,
      seventh_price: 420,
      eighth_price: 450,
    },

    {
      id: 3,
      offer_type: 'tire_fix',
      title: 'Балансировка колеса',
      first_price: 275,
      second_price: 325,
      third_price: 355,
      fourth_price: 375,
      fifth_price: 485,
      sixth_price: 535,
      seventh_price: 675,
      eighth_price: 700,
    },

    {
      id: 4,
      offer_type: 'tire_fix',
      title: 'Полный комплекс за 1 колесо',
      first_price: 715,
      second_price: 825,
      third_price: 925,
      fourth_price: 1055,
      fifth_price: 1265,
      sixth_price: 1385,
      seventh_price: 1675,
      eighth_price: 1770,
    },

    {
      id: 5,
      offer_type: 'tire_fix',
      title: 'Полный комплекс за 1 комплект',
      first_price: 2860,
      second_price: 3300,
      third_price: 3700,
      fourth_price: 4220,
      fifth_price: 5060,
      sixth_price: 5540,
      seventh_price: 6700,
      eighth_price: 7080,
    },

    {
      id: 6,
      offer_type: 'tire_fix',
      title: 'Рапфлет  комплект',
      first_price: '+1000',
      second_price: '+1000',
      third_price: '+1000',
      fourth_price: '+1000',
      fifth_price: '+1000',
      sixth_price: '+1000',
      seventh_price: '+1000',
      eighth_price: '+1000',
    },
  ];

  function renderOfferTable(render_table, collection) {
    var count = 1;

    collection.forEach(function (collection_item) {

      if ( collection_item.offer_type === 'tire_fix' ) {
        render_table.append(`<tr> <td> ${count}. ${collection_item.title} </td> <td> ${collection_item.first_price} ₽</td> <td> ${collection_item.second_price} ₽</td> <td> ${collection_item.third_price} ₽ </td> <td> ${collection_item.fourth_price} ₽ </td> <td> ${collection_item.fifth_price} ₽ </td> <td> ${collection_item.sixth_price} ₽ </td> <td> ${collection_item.seventh_price} ₽ </td> <td> ${collection_item.eighth_price} ₽ </td> </tr>`);
      } else {
        render_table.append(`<tr> <td> ${count}. ${collection_item.title} </td> <td> ${collection_item.first_price} ₽</td> <td> ${collection_item.second_price} ₽</td> <td> ${collection_item.third_price} ₽ </td> <td> ${collection_item.fourth_price} ₽ </td> </tr>`);
      }

      count++
    });

  }

  // renderOfferTable(cleaning_table, cleaning_collection);
  // renderOfferTable(polishing_table, polishing_cleaning_collection);
  // renderOfferTable(dry_cleaning_table, dry_cleaning_collection);
  // renderOfferTable(chrome_parts_table, chome_parts_collection);

  // Шиномонтаж

  // Легковые автомобили
  // renderOfferTable(first_tire_table, first_tire_collection);
  //
  // // Внедорожники
  // renderOfferTable(second_tire_table, second_tire_collection);
  //
  // // Легковые с низким профилем
  // renderOfferTable(third_tire_table, third_tire_collection);
  //
  // // Внедорожники с низким профилем
  // renderOfferTable(fourth_tire_table, fourth_tire_collection);

}());