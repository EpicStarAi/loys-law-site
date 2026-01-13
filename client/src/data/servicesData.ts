export interface ServiceItem {
  name: string;
  nameEn: string;
  priceFrom: number;
  priceTo?: number;
  note?: string;
  noteEn?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  services: ServiceItem[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: "consultation",
    name: "Консультаційні послуги",
    nameEn: "Consultation Services",
    icon: "MessageSquare",
    services: [
      {
        name: "Усна юридична консультація (до 30 хв)",
        nameEn: "Oral legal consultation (up to 30 min)",
        priceFrom: 1000,
        priceTo: 1500,
      },
      {
        name: "Усна юридична консультація (понад 30 хв)",
        nameEn: "Oral legal consultation (over 30 min)",
        priceFrom: 1500,
        priceTo: 2500,
      },
      {
        name: "Письмова юридична консультація",
        nameEn: "Written legal consultation",
        priceFrom: 2500,
        note: "Залежить від обсягу та складності",
        noteEn: "Depends on volume and complexity",
      },
      {
        name: "Правовий аналіз документів (без письмового висновку)",
        nameEn: "Legal document analysis (without written opinion)",
        priceFrom: 2000,
      },
    ],
  },
  {
    id: "criminal",
    name: "Кримінальне право",
    nameEn: "Criminal Law",
    icon: "ShieldAlert",
    services: [
      {
        name: "Захист підозрюваного/обвинуваченого на стадії досудового розслідування",
        nameEn: "Defense of suspect/accused during pre-trial investigation",
        priceFrom: 25000,
        note: "Щомісячна або погодинна оплата",
        noteEn: "Monthly or hourly payment",
      },
      {
        name: "Захист підозрюваного/обвинуваченого на стадії судового розгляду",
        nameEn: "Defense of suspect/accused during trial",
        priceFrom: 30000,
        note: "Щомісячна або погодинна оплата",
        noteEn: "Monthly or hourly payment",
      },
      {
        name: "Представництво інтересів потерпілого у кримінальному провадженні",
        nameEn: "Representation of victim in criminal proceedings",
        priceFrom: 20000,
      },
      {
        name: "Підготовка апеляційної/касаційної скарги",
        nameEn: "Preparation of appeal/cassation complaint",
        priceFrom: 10000,
      },
    ],
  },
  {
    id: "civil",
    name: "Цивільне право (Загальні справи)",
    nameEn: "Civil Law (General Cases)",
    icon: "Scale",
    services: [
      {
        name: "Представництво інтересів в суді I інстанції (повний супровід \"під ключ\")",
        nameEn: "Representation in court of first instance (full turnkey support)",
        priceFrom: 20000,
        note: "Без врахування судового збору та інших витрат",
        noteEn: "Excluding court fees and other expenses",
      },
      {
        name: "Представництво інтересів в суді I інстанції (окремі судові засідання)",
        nameEn: "Representation in court of first instance (individual hearings)",
        priceFrom: 4000,
        note: "За одне засідання",
        noteEn: "Per hearing",
      },
      {
        name: "Складання позовної заяви, відзиву, заперечень",
        nameEn: "Drafting of claim, response, objections",
        priceFrom: 3000,
      },
      {
        name: "Підготовка апеляційної/касаційної скарги",
        nameEn: "Preparation of appeal/cassation complaint",
        priceFrom: 8000,
      },
      {
        name: "Представництво інтересів в апеляційній/касаційній інстанції (повний супровід)",
        nameEn: "Representation in appellate/cassation court (full support)",
        priceFrom: 15000,
      },
    ],
  },
  {
    id: "family",
    name: "Цивільне право (Сімейні спори)",
    nameEn: "Civil Law (Family Disputes)",
    icon: "Users",
    services: [
      {
        name: "Розлучення (без спірних питань)",
        nameEn: "Divorce (uncontested)",
        priceFrom: 8000,
      },
      {
        name: "Розлучення (зі спірними питаннями: поділ майна, діти)",
        nameEn: "Divorce (contested: property division, children)",
        priceFrom: 25000,
      },
      {
        name: "Стягнення аліментів",
        nameEn: "Child support recovery",
        priceFrom: 8000,
      },
      {
        name: "Визначення місця проживання дитини, графіку побачень",
        nameEn: "Determining child residence, visitation schedule",
        priceFrom: 15000,
      },
      {
        name: "Підготовка та укладення шлюбного договору",
        nameEn: "Preparation and conclusion of prenuptial agreement",
        priceFrom: 5000,
      },
    ],
  },
  {
    id: "housing",
    name: "Цивільне право (Житлові спори)",
    nameEn: "Civil Law (Housing Disputes)",
    icon: "Home",
    services: [
      {
        name: "Визнання права власності, виселення, вселення",
        nameEn: "Recognition of ownership, eviction, occupation",
        priceFrom: 20000,
      },
    ],
  },
  {
    id: "labor",
    name: "Трудове право",
    nameEn: "Labor Law",
    icon: "Briefcase",
    services: [
      {
        name: "Відновлення на роботі, стягнення заробітної плати",
        nameEn: "Reinstatement, wage recovery",
        priceFrom: 15000,
      },
      {
        name: "Представництво інтересів роботодавця/працівника (трудові спори)",
        nameEn: "Representation of employer/employee (labor disputes)",
        priceFrom: 20000,
      },
    ],
  },
  {
    id: "business",
    name: "Господарське право / Бізнес",
    nameEn: "Business Law",
    icon: "Building",
    services: [
      {
        name: "Реєстрація/перереєстрація юридичної особи/ФОП",
        nameEn: "Registration/re-registration of legal entity/sole proprietor",
        priceFrom: 4000,
        note: "Без врахування офіційних платежів",
        noteEn: "Excluding official fees",
      },
      {
        name: "Ліквідація юридичної особи/ФОП",
        nameEn: "Liquidation of legal entity/sole proprietor",
        priceFrom: 6000,
      },
      {
        name: "Підготовка договорів, угод, протоколів",
        nameEn: "Preparation of contracts, agreements, protocols",
        priceFrom: 3000,
      },
      {
        name: "Абонентське юридичне обслуговування бізнесу",
        nameEn: "Subscription legal business services",
        priceFrom: 10000,
        note: "На місяць",
        noteEn: "Per month",
      },
      {
        name: "Представництво інтересів в господарських судах",
        nameEn: "Representation in commercial courts",
        priceFrom: 25000,
      },
      {
        name: "Стягнення дебіторської заборгованості (досудове врегулювання)",
        nameEn: "Debt collection (pre-trial settlement)",
        priceFrom: 5000,
        note: "Може бути % від стягнутої суми",
        noteEn: "May be % of collected amount",
      },
    ],
  },
  {
    id: "inheritance",
    name: "Спадкове право",
    nameEn: "Inheritance Law",
    icon: "FileText",
    services: [
      {
        name: "Консультації та ведення спадкових справ",
        nameEn: "Consultation and management of inheritance cases",
        priceFrom: 10000,
      },
      {
        name: "Оскарження заповіту, визнання недійсним",
        nameEn: "Contesting a will, invalidation",
        priceFrom: 20000,
      },
      {
        name: "Встановлення факту прийняття спадщини",
        nameEn: "Establishing acceptance of inheritance",
        priceFrom: 15000,
      },
    ],
  },
  {
    id: "land",
    name: "Земельне право",
    nameEn: "Land Law",
    icon: "MapPin",
    services: [
      {
        name: "Оформлення права власності на земельну ділянку",
        nameEn: "Registration of land ownership",
        priceFrom: 10000,
      },
      {
        name: "Вирішення земельних спорів",
        nameEn: "Resolution of land disputes",
        priceFrom: 20000,
      },
      {
        name: "Зміна цільового призначення земельної ділянки",
        nameEn: "Change of land purpose designation",
        priceFrom: 15000,
      },
    ],
  },
  {
    id: "administrative",
    name: "Адміністративне право",
    nameEn: "Administrative Law",
    icon: "Landmark",
    services: [
      {
        name: "Оскарження постанов про притягнення до адміністративної відповідальності",
        nameEn: "Appeal of administrative liability decisions",
        priceFrom: 5000,
      },
      {
        name: "Представництво інтересів в адміністративних судах",
        nameEn: "Representation in administrative courts",
        priceFrom: 15000,
      },
    ],
  },
  {
    id: "enforcement",
    name: "Виконавче провадження",
    nameEn: "Enforcement Proceedings",
    icon: "Gavel",
    services: [
      {
        name: "Супровід виконавчого провадження",
        nameEn: "Enforcement proceedings support",
        priceFrom: 10000,
        note: "Додатково може бути % від стягнутої суми",
        noteEn: "Additionally may be % of collected amount",
      },
      {
        name: "Оскарження дій/бездіяльності державного виконавця",
        nameEn: "Appeal of actions/inaction of state executor",
        priceFrom: 5000,
      },
    ],
  },
  {
    id: "investment-corporate",
    name: "Захист інвестицій, корпоративне право",
    nameEn: "Investment Protection, Corporate Law",
    icon: "TrendingUp",
    services: [
      {
        name: "Юридичний супровід інвестиційних проєктів",
        nameEn: "Legal support for investment projects",
        priceFrom: 30000,
        note: "Залежить від обсягу та складності",
        noteEn: "Depends on volume and complexity",
      },
      {
        name: "Захист прав інвесторів",
        nameEn: "Protection of investor rights",
        priceFrom: 25000,
      },
      {
        name: "Корпоративне структурування",
        nameEn: "Corporate structuring",
        priceFrom: 20000,
      },
      {
        name: "Супровід корпоративних спорів",
        nameEn: "Corporate dispute support",
        priceFrom: 30000,
      },
      {
        name: "Due diligence компаній",
        nameEn: "Company due diligence",
        priceFrom: 25000,
      },
    ],
  },
  {
    id: "registration-copyright",
    name: "Реєстраційні послуги та авторське право",
    nameEn: "Registration Services and Copyright",
    icon: "FileCheck",
    services: [
      {
        name: "Реєстрація підприємств (ТОВ, ФОП)",
        nameEn: "Business registration (LLC, Sole Proprietorship)",
        priceFrom: 5000,
      },
      {
        name: "Внесення змін до статутних документів",
        nameEn: "Amendments to statutory documents",
        priceFrom: 3000,
      },
      {
        name: "Реєстрація авторського права",
        nameEn: "Copyright registration",
        priceFrom: 5000,
      },
      {
        name: "Реєстрація торговельної марки",
        nameEn: "Trademark registration",
        priceFrom: 8000,
        note: "Без врахування офіційних зборів",
        noteEn: "Excluding official fees",
      },
      {
        name: "Захист прав інтелектуальної власності",
        nameEn: "Intellectual property protection",
        priceFrom: 15000,
      },
    ],
  },
  {
    id: "foreign-extradition",
    name: "Правова допомога іноземцям та захист при екстрадиції",
    nameEn: "Foreign Legal Aid and Extradition Defense",
    icon: "Globe",
    services: [
      {
        name: "Консультації для іноземців з правових питань",
        nameEn: "Legal consultations for foreigners",
        priceFrom: 2000,
      },
      {
        name: "Оформлення документів для іноземців",
        nameEn: "Document processing for foreigners",
        priceFrom: 5000,
      },
      {
        name: "Захист у справах про екстрадицію",
        nameEn: "Defense in extradition cases",
        priceFrom: 50000,
        note: "Залежить від складності справи",
        noteEn: "Depends on case complexity",
      },
      {
        name: "Представництво інтересів іноземців у державних органах",
        nameEn: "Representation of foreigners in government agencies",
        priceFrom: 3000,
        note: "За візит/процедуру",
        noteEn: "Per visit/procedure",
      },
    ],
  },
  {
    id: "traffic-accident",
    name: "Захист при ДТП",
    nameEn: "Traffic Accident Defense",
    icon: "Car",
    services: [
      {
        name: "Захист інтересів при ДТП (адміністративне провадження)",
        nameEn: "Defense in traffic accidents (administrative proceedings)",
        priceFrom: 10000,
      },
      {
        name: "Захист у кримінальних справах, пов'язаних з ДТП",
        nameEn: "Defense in criminal cases related to traffic accidents",
        priceFrom: 30000,
      },
      {
        name: "Відшкодування шкоди, завданої ДТП",
        nameEn: "Compensation for damages caused by traffic accidents",
        priceFrom: 15000,
      },
      {
        name: "Оскарження постанов про порушення ПДР",
        nameEn: "Appeal of traffic violation decisions",
        priceFrom: 5000,
      },
    ],
  },
  {
    id: "other",
    name: "Інші послуги",
    nameEn: "Other Services",
    icon: "MoreHorizontal",
    services: [
      {
        name: "Адвокатський запит",
        nameEn: "Attorney inquiry",
        priceFrom: 1500,
        priceTo: 2500,
      },
      {
        name: "Виїзд адвоката до клієнта/державних органів",
        nameEn: "Attorney visit to client/government agencies",
        priceFrom: 2000,
        note: "/година + транспортні витрати",
        noteEn: "/hour + transportation costs",
      },
      {
        name: "Представництво інтересів в державних органах, установах та організаціях",
        nameEn: "Representation in government agencies and organizations",
        priceFrom: 3000,
        note: "За візит/процедуру",
        noteEn: "Per visit/procedure",
      },
    ],
  },
];
