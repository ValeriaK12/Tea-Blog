const { Country, TeaCountry, Tea } = require('./db/models');

const country = [
  { name: 'Индия' },
  { name: 'Китай' },
  { name: 'Россия' },
  { name: 'Япония' },
  { name: 'Вьетнам' },

];
async function addCountry(obj) {
  try {
    await Country.create({
      name: obj.name,
    });
  } catch (err) {
    console.log(err);
  }
}
// country.map((el) => addCountry(el));

const teaCountry = [
  {
    tea_id: 14,
    country_id: 5,
  },
  {
    tea_id: 15,
    country_id: 1,
  },
  {
    tea_id: 16,
    country_id: 2,
  },
  {
    tea_id: 17,
    country_id: 1,
  },
  {
    tea_id: 19,
    country_id: 4,
  },
  {
    tea_id: 18,
    country_id: 5,
  },
  {
    tea_id: 21,
    country_id: 2,
  },
  {
    tea_id: 22,
    country_id: 1,
  },
  {
    tea_id: 23,
    country_id: 3,
  },
  {
    tea_id: 20,
    country_id: 2,
  },
  {
    tea_id: 24,
    country_id: 3,
  },

];
async function addTeaCountry(obj) {
  try {
    await TeaCountry.create({
      tea_id: obj.tea_id,
      country_id: obj.country_id,
    });
  } catch (err) {
    console.log(err);
  }
}
// teaCountry.map((el) => addTeaCountry(el));

const tea = [
  {
    name: 'Улун',
    type: 'Зеленый чай',
    description: 'По классификации по степени ферментации ферментируется на 50 % (в идеале). При его обработке ферментацию не доводят до конца: ей подвергается не весь лист, а лишь его края и часть поверхности. В то же время внутренние слои чайного листа сохраняют присущую им структуру и не ферментируются. Поэтому считается, что «улун» сочетает в себе свойства как зелёного — яркий аромат, так и красного — насыщенный вкус. Различают два подвида — ближе к зелёным (степень ферментации меньше) и ближе к красным чаям (степень ферментации больше).',
    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Tieguanyin2.jpg/1920px-Tieguanyin2.jpg',
  },
  {
    name: 'Эхинацея',
    type: 'Травяной чай',
    description: 'Эхинацея сама по себе является травой, которая используется для изготовления некоторых видов лекарств. Чай из нее не только обладает своеобразным приятным вкусом, но и имеет ряд уникальных целебных свойств. О них знали еще коренные жители Северной Америки, у которых этот напиток был в ходу. Они лечили им змеиные укусы, простудные заболевания, мигрени и проблемы с кожей.',
    link: ' https://www.steaklovers.menu/food/~m/ckeditor/view/articles/59819e23772b2',
  },
  {
    name: 'Ромашковый чай',
    type: 'Травяной чай',
    description: 'Лучший напиток на замену седативным средствам – это ромашковый чай. Он стал буквально мемом в тех ситуациях, когда нужно успокоиться и прийти в себя после потрясения. Такая слава этого приятного напитка отнюдь не случайна. Ромашка содержит большое количество антиоксидантов и помогает не только стабилизировать нервную систему, но и справиться с осложнениями после диабета и проблемами с почками.',
    link: 'https://www.steaklovers.menu/food/~m/ckeditor/view/articles/59819e52d7995',
  },
  {
    name: 'Пуэр',
    type: 'Зеленый чай',
    description: 'Пуэр является одним из самых дорогих чаев в мире и относится к ферментированным сортам. Листья чайного дерева обрабатываются особым образом, этот процесс называется «старением». Чем дольше пуэр таким образом стареет, тем лучше он на вкус. Его производят в Китае и Тайване, и он пользуется там огромной популярностью за счет того, что не содержит большого количества кофеина и ловастатина.',
    link: 'https://ethnomir.ru/upload/medialibrary/17d/puer.jpg',
  },
  {
    name: 'Белый чай',
    type: 'Белый чай',
    description: 'Белый чай получил свое название не из-за цвета собственно напитка, а от вида почки чайного дерева. В определенный период она покрыта белыми ворсинками, которые делают ее похожей на подернутую плесенью шишку. Этот вид чая по степени ферментации уступает зеленому чаю на 7% и поэтому содержит наибольший объем антиоксидантов. Белый чай тоже отлично укрепляет иммунитет и улучшает состояние костей и зубов.',
    link: 'https://www.steaklovers.menu/food/~m/ckeditor/view/articles/59819ed531596',
  },
  {
    name: 'Черный чай',
    type: 'Черный чай',
    description: 'Вопреки всем заблуждениям, черный чай содержит наибольший процент кофеина из всех напитков, созданных из листьев чайного дерева. Некоторые исследования показали, что черный чай может защитить легкие от повреждений, вызванных сигаретным дымом, а также снизить риск развития инсульта..',
    link: 'https://www.steaklovers.menu/food/~m/ckeditor/view/articles/59819f01b18bf',
  },
  {
    name: 'Дарджилинг',
    type: 'Черный чай',
    description: 'Чай Дарджилинг (англ. Darjeeling tea) – элитный индийский чай, с уникальными вкусо-ароматическими свойствами, что ценятся по всему миру. Он удивительным образом сочетает в себе терпкость и мягкость, фруктовые нотки с травяными, пикантную кислинку с приятным послевкусием. А легкий и свежий аромат одновременно полный и насыщенный.',
    link: 'http://bestofindia.ru/image/data/i/blog/person1.jpg',
  },
  {
    name: 'Кимун',
    type: 'Красный чай',
    description: 'Красный чай Qi Men Hong Cha, который в Европе считается черным, имеет целый ряд названий-разночтений с китайского языка: Цимень Хунча, Ци Мэнь Хун Ча, Цимень Гунфухун, Цихун, Кимун. Весь этот «аристократический именослов» обозначает один и тот же чай высочайшего качества, который заслужил немало титулов и регалий.',
    link: 'https://cupstea.ru/wp-content/uploads/2017/12/chaj_krasnyj.jpg',
  },
  {
    name: 'Иван чай',
    type: 'Травяной чай',
    description: 'На Руси уже несколько столетий активно употребляют отвар из травы кипрея. Сегодня она более известна, как Иван-чай. Всеобщую любовь напиток заслужил не только благодаря очень приятному мягкому вкусу, но и своим целебным свойствам. В статье мы расскажем про Иван-чай, свойства и противопоказания этого старинного напитка. Он отлично утоляет жажду в жаркое время года, наполняет энергией и тонизирует, не содержит кофеина, как зеленый или черный чай.',
    link: 'https://shop.evalar.ru/upload/iblock/fbd/fbd96013d3c9450aaf9bffa872a53eb6.jpg',
  },
  {
    name: 'Матча',
    type: 'Зеленый чай',
    description: 'Этот чай имеет форму порошка, до которого измельчается лист Gyokuro (хотя существуют и менее изысканные Matcha чаи, приготовленные из других листьев). Напиток, получае­мый из Matcha, имеет цвет зеленого жадеита, он концентрированный и питательный.',
    link: 'https://e0.edimdoma.ru/data/posts/0002/3372/23372-ed4_wide.jpg?1631186954',
  },
  {
    name: 'Sencha Honyama',
    type: 'Зеленый чай',
    description: 'Как и Gyokuro, этот чай является одним из лучших чаев Японии. Однако, следует отме­тить, что существует много типов чая Sencha, и только несколько из них отнесены к лучшим сортам. Бледно-зеленого цвета напиток обладает свежим цветочным вкусом.',
    link: 'https://p1-e6eeae93.imageflux.jp/c!/f=webp:auto,a=2,w=920,h=920,b=ffffff00/cool-leaf-5592/bcfb3a48a4c621c6a0c6.jpeg',
  },
];
async function addTea(obj) {
  try {
    await Tea.create({
      name: obj.name,
      type: obj.type,
      description: obj.description,
      link: obj.link,
    });
  } catch (err) {
    console.log(err);
  }
}
// tea.map((el) => addTea(el));
