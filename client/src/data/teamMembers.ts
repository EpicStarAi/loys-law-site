import ruslanPhoto from "@assets/IMG_20260109_184044_863_1767977414366.jpg";
import lyudmylaPhoto from "@assets/IMG_20260109_190624_677_1767978448763.jpg";
import darynaPhoto from "@assets/7068_1767980214455.jpg";

export interface TeamMemberData {
  id: string;
  slug: string;
  name: { uk: string; en: string };
  role: { uk: string; en: string };
  quote: { uk: string; en: string };
  bio: { uk: string; en: string };
  photo: string;
  education: { uk: string[]; en: string[] };
  experience: { uk: string[]; en: string[] };
  specialization: { uk: string[]; en: string[] };
  achievements: { uk: string[]; en: string[] };
  values: { uk: string; en: string };
}

export const teamMembers: TeamMemberData[] = [
  {
    id: "1",
    slug: "ruslan-yaremchuk",
    name: { uk: "Руслан Яремчук", en: "Ruslan Yaremchuk" },
    role: { 
      uk: "Партнер АО «Яремчук і Седун», адвокат, доктор філософії у галузі права (PhD)", 
      en: "Partner at Law Firm 'Yaremchuk & Sedun', Attorney, Doctor of Philosophy in Law (PhD)" 
    },
    quote: { 
      uk: "Ефективний захист — це мистецтво, де глибока наукова теорія зустрічається із залізною практичною логікою.", 
      en: "Effective defense is an art where deep scientific theory meets ironclad practical logic." 
    },
    bio: { 
      uk: "Руслан Яремчук — адвокат, який знає систему правосуддя з обох боків. Розпочавши кар'єру в правоохоронних органах, він пройшов шлях до визнаного експерта в галузі кримінального права та процесу. Його підхід базується на принципі: у справі не буває дрібниць, а перемога часто прихована в деталях, які інші залишають поза увагою.",
      en: "Ruslan Yaremchuk is a lawyer who knows the justice system from both sides. Starting his career in law enforcement, he has become a recognized expert in criminal law and procedure. His approach is based on the principle: there are no small details in a case, and victory is often hidden in the details that others overlook."
    },
    photo: ruslanPhoto,
    education: {
      uk: [
        "Київський національний університет внутрішніх справ (2006–2010): Факультет підготовки слідчих. Диплом із відзнакою.",
        "Харківський національний університет внутрішніх справ (2021–2025): Доктор філософії (PhD) за спеціальністю 081 «Право».",
        "Дисертація: «Криміналістична характеристика та особливості розслідування умисних вбивств, вчинених з використанням вогнепальної зброї в умовах воєнного стану»."
      ],
      en: [
        "Kyiv National University of Internal Affairs (2006–2010): Faculty of Investigator Training. Diploma with honors.",
        "Kharkiv National University of Internal Affairs (2021–2025): Doctor of Philosophy (PhD) in specialty 081 'Law'.",
        "Dissertation: 'Forensic characteristics and specifics of investigating intentional murders committed with firearms under martial law conditions'."
      ]
    },
    experience: {
      uk: [
        "Слідча практика (2010–2013): Робота в слідчому відділі Броварського МВ ГУ МВС України.",
        "Адвокатська діяльність (з 2014 року): Понад 11 років досвіду в наданні правничої допомоги.",
        "В активі — виправдувальні вироки у справах про особливо тяжкі злочини."
      ],
      en: [
        "Investigative practice (2010–2013): Work in the investigative department of Brovary Police Department.",
        "Legal practice (since 2014): Over 11 years of experience in providing legal assistance.",
        "Has achieved acquittals in cases involving particularly serious crimes."
      ]
    },
    specialization: {
      uk: ["Кримінальне право", "Справи про ДТП", "Адміністративні справи", "Цивільні справи", "Військове право"],
      en: ["Criminal Law", "Traffic Accident Cases", "Administrative Cases", "Civil Cases", "Military Law"]
    },
    achievements: {
      uk: [
        "Член Комітету захисту гарантій адвокатської діяльності Ради адвокатів Київської області.",
        "Заступник голови ГО «ІНСТИТУТ ПРАВОВОЇ СВІДОМОСТІ».",
        "Керівник стажування: офіційно готує нове покоління адвокатів.",
        "Волонтерська діяльність: Співпраця з БФ «КРАПЛЯ ДО КРАПЛІ».",
        "Активний донор крові та її компонентів."
      ],
      en: [
        "Member of the Committee for Protection of Guarantees of Advocacy Activities of the Kyiv Region Bar Council.",
        "Deputy Chairman of NGO 'INSTITUTE OF LEGAL CONSCIOUSNESS'.",
        "Internship supervisor: officially trains the new generation of lawyers.",
        "Volunteer activities: Cooperation with CF 'DROP BY DROP'.",
        "Active blood and blood components donor."
      ]
    },
    values: {
      uk: "Руслан — прихильник системного підходу до всього. Його захоплення історією, філософією та психологією допомагають будувати глибокі стратегії захисту, враховуючи людський фактор у судовому процесі. Спортивна дисципліна (бокс, футбол, волейбол) гартує волю до перемоги та стресостійкість. Особиста місія: Відновлення справедливості та захист прав людини через підвищення стандартів адвокатської допомоги.",
      en: "Ruslan is a proponent of a systematic approach to everything. His passion for history, philosophy, and psychology helps build deep defense strategies, taking into account the human factor in court proceedings. Sports discipline (boxing, football, volleyball) strengthens his will to win and stress resistance. Personal mission: Restoring justice and protecting human rights by raising the standards of legal aid."
    }
  },
  {
    id: "2",
    slug: "lyudmyla-bytsiura",
    name: { uk: "Бицюра Людмила Володимирівна", en: "Lyudmyla Bytsiura" },
    role: { uk: "Старший юрист", en: "Senior Lawyer" },
    quote: { 
      uk: "Аналітичне мислення та висока відповідальність — ключ до успіху у складних правових проектах.", 
      en: "Analytical thinking and high responsibility are the keys to success in complex legal projects." 
    },
    bio: { 
      uk: "Людмила Бицюра — досвідчений юрист з багаторічним стажем роботи в органах суддівського врядування. Глибоке розуміння судової системи та практики ЄСПЛ робить її незамінним фахівцем у складних справах.",
      en: "Lyudmyla Bytsiura is an experienced lawyer with many years of experience in judicial governance bodies. Deep understanding of the judicial system and ECHR practice makes her an indispensable specialist in complex cases."
    },
    photo: lyudmylaPhoto,
    education: {
      uk: [
        "Диплом магістра з відзнакою, юридичний факультет Національного університету біоресурсів і природокористування України.",
        "Аспірантура з поглибленим дослідженням правозастосовної практики."
      ],
      en: [
        "Master's degree with honors, Faculty of Law, National University of Life and Environmental Sciences of Ukraine.",
        "Postgraduate studies with in-depth research on law enforcement practice."
      ]
    },
    experience: {
      uk: [
        "З 2011 року — правове забезпечення діяльності органів суддівського врядування та супровід судових справ.",
        "Верховний Суд: робота на посаді помічника судді Касаційного кримінального суду, всебічний юридичний супровід розгляду кримінальних справ.",
        "Вища кваліфікаційна комісія суддів України: правове забезпечення діяльності Комісії."
      ],
      en: [
        "Since 2011 — legal support for judicial governance bodies and court case management.",
        "Supreme Court: worked as an assistant judge at the Criminal Court of Cassation, comprehensive legal support for criminal case review.",
        "High Qualification Commission of Judges of Ukraine: legal support for the Commission's activities."
      ]
    },
    specialization: {
      uk: ["Сімейні спори", "Кримінальне право", "Практика ЄСПЛ"],
      en: ["Family Disputes", "Criminal Law", "ECHR Practice"]
    },
    achievements: {
      uk: [
        "Багаторічний стаж дослідження актуальних питань правозастосовної практики.",
        "Глибоке опанування методології аналізу судових рішень.",
        "Досвід роботи у Верховному Суді України."
      ],
      en: [
        "Many years of research experience on current issues of law enforcement practice.",
        "Deep mastery of the methodology for analyzing court decisions.",
        "Experience working at the Supreme Court of Ukraine."
      ]
    },
    values: {
      uk: "Аналітичне мислення та висока відповідальність у реалізації складних правових проектів — ключові риси Людмили як професіонала.",
      en: "Analytical thinking and high responsibility in implementing complex legal projects are Lyudmyla's key professional traits."
    }
  },
  {
    id: "3",
    slug: "daryna-sedun",
    name: { uk: "Седун Дарина Володимирівна", en: "Daryna Sedun" },
    role: { uk: "Адвокат", en: "Attorney" },
    quote: { 
      uk: "Знайти спільну мову з будь-ким — це суперсила.", 
      en: "Finding common ground with anyone is a superpower." 
    },
    bio: { 
      uk: "Дарина Седун — адвокат з досвідом роботи у сфері банківського та земельного права. З 2019 року здійснює адвокатську діяльність, спеціалізуючись на спорах з банками, МФО та державними органами. Активно займається менторством молодших колег та волонтерською діяльністю.",
      en: "Daryna Sedun is an attorney with experience in banking and land law. Since 2019, she has been practicing law, specializing in disputes with banks, microfinance organizations, and state authorities. She actively mentors junior colleagues and engages in volunteer activities."
    },
    photo: darynaPhoto,
    education: {
      uk: [
        "Диплом спеціаліста з відзнакою, юридичний факультет КНУ імені Тараса Шевченка."
      ],
      en: [
        "Specialist degree with honors, Faculty of Law, Taras Shevchenko National University of Kyiv."
      ]
    },
    experience: {
      uk: [
        "2013–2019: старший юрист, помічник адвоката.",
        "З 2019 року: адвокатська діяльність."
      ],
      en: [
        "2013–2019: Senior lawyer, attorney's assistant.",
        "Since 2019: Legal practice as an attorney."
      ]
    },
    specialization: {
      uk: ["Спори з банками та МФО", "Земельне право", "Спори з держорганами", "Захист за ст. 130 КУпАП"],
      en: ["Bank & MFO Disputes", "Land Law", "State Authority Disputes", "Defense under Art. 130 CAO"]
    },
    achievements: {
      uk: [
        "Учасниця навчального візиту до Міжнародного кримінального суду в Гаазі (2024).",
        "Учасниця навчання адвокатів у практиці воєнних злочинів у Варшаві (2025).",
        "Менторка молодших колег у ГО «Юрфем».",
        "Експертка клубу «Pravokator».",
        "Волонтерка «Юрштаб»."
      ],
      en: [
        "Participant of the study visit to the International Criminal Court in The Hague (2024).",
        "Participant in training for lawyers on war crimes practice in Warsaw (2025).",
        "Mentor for junior colleagues at NGO 'Yurfem'.",
        "Expert at 'Pravokator' club.",
        "Volunteer at 'Yurshtab'."
      ]
    },
    values: {
      uk: "Суперсила Дарини — знайти спільну мову з будь-ким. Її комунікативні здібності та емпатія допомагають будувати довірчі відносини з клієнтами та ефективно вирішувати найскладніші правові питання.",
      en: "Daryna's superpower is finding common ground with anyone. Her communication skills and empathy help build trusting relationships with clients and effectively resolve the most complex legal issues."
    }
  }
];
