import {
  inquiries,
  services,
  team,
  posts,
  type InsertInquiry,
  type Inquiry,
  type Service,
  type TeamMember,
  type Post,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getServices(): Promise<Service[]>;
  seedServices(): Promise<void>;
  getTeam(): Promise<TeamMember[]>;
  seedTeam(): Promise<void>;
  getPosts(): Promise<Post[]>;
  getPostBySlug(slug: string): Promise<Post | undefined>;
  seedPosts(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const [newInquiry] = await db.insert(inquiries).values(inquiry).returning();
    return newInquiry;
  }

  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async seedServices(): Promise<void> {
    const existing = await this.getServices();
    if (existing.length > 0) return;

    await db.insert(services).values([
      {
        title: "Кримінальний захист",
        description: "Захист прав на всіх стадіях кримінального провадження. Представництво в суді та правоохоронних органах.",
        icon: "ShieldAlert",
        category: "criminal",
      },
      {
        title: "Військове право",
        description: "Правова допомога військовослужбовцям та їх сім'ям. Оскарження рішень ВЛК, виплати, демобілізація.",
        icon: "Medal",
        category: "military",
      },
      {
        title: "Корпоративне право",
        description: "Комплексний юридичний супровід бізнесу. Підготовка договорів, вирішення спорів, комплаєнс.",
        icon: "Briefcase",
        category: "corporate",
      },
      {
        title: "Сімейне право",
        description: "Бракорозлучні процеси, поділ майна, встановлення опіки над дітьми, аліментні спори.",
        icon: "Users",
        category: "civil",
      },
      {
        title: "Податкові спори",
        description: "Представництво у спорах з податковими органами. Оскарження податкових повідомлень-рішень.",
        icon: "FileText",
        category: "administrative",
      },
      {
        title: "Нерухомість",
        description: "Юридичний супровід угод з нерухомістю. Перевірка забудовників, супровід будівництва.",
        icon: "Building",
        category: "civil",
      },
    ]);
  }

  async getTeam(): Promise<TeamMember[]> {
    return await db.select().from(team);
  }

  async seedTeam(): Promise<void> {
    const existing = await this.getTeam();
    if (existing.length > 0) return;

    await db.insert(team).values([
      {
        name: "Олександр Яремчук",
        role: "Старший партнер",
        specialization: "Кримінальний захист, економічні злочини",
        bio: "Понад 15 років досвіду у резонансних кримінальних справах. Колишній прокурор.",
        photoUrl: "",
      },
      {
        name: "Дмитро Седун",
        role: "Старший партнер",
        specialization: "Корпоративне право, військове право",
        bio: "Експерт із захисту бізнесу та військового законодавства. Стратегічний правовий радник.",
        photoUrl: "",
      },
      {
        name: "Олена Коваленко",
        role: "Асоційований партнер",
        specialization: "Сімейне право, цивільні спори",
        bio: "Спеціалізується на складних сімейних спорах та цивільних справах.",
        photoUrl: "",
      },
    ]);
  }

  async getPosts(): Promise<Post[]> {
    return await db.select().from(posts).orderBy(desc(posts.publishedAt));
  }

  async getPostBySlug(slug: string): Promise<Post | undefined> {
    const [post] = await db.select().from(posts).where(eq(posts.slug, slug));
    return post;
  }

  async seedPosts(): Promise<void> {
    const existing = await this.getPosts();
    if (existing.length > 0) return;

    await db.insert(posts).values([
      {
        title: "Зміни у військовому законодавстві 2026: що потрібно знати",
        slug: "military-legislation-changes-2026",
        summary: "Огляд останніх змін у законах щодо мобілізації та соціального захисту військовослужбовців.",
        content: `
          <h2>Нові правила мобілізації</h2>
          <p>У 2026 році були внесені суттєві зміни до процедур мобілізації. Основний акцент — на діджиталізації та прозорості процесу. Електронні повістки тепер повністю інтегровані в правову базу, що забезпечує швидше оповіщення.</p>
          
          <h2>Соціальні гарантії</h2>
          <p>Новий закон розширює соціальні гарантії для ветеранів та їхніх сімей. Це включає збільшену фінансову допомогу на реабілітацію та спрощені процедури отримання статусу учасника бойових дій.</p>
          
          <h2>Правова допомога</h2>
          <p>Важливо розуміти свої права за новим законодавством. Наша фірма надає комплексну підтримку в оскарженні неправомірних рішень та забезпеченні отримання всіх належних виплат.</p>
        `,
        isAiGenerated: true,
      },
      {
        title: "Оскарження рішень ВЛК: покрокова інструкція",
        slug: "appealing-vlc-decisions",
        summary: "Як оскаржити висновок військово-лікарської комісії, якщо ви не згодні з результатами.",
        content: `
          <h2>Підстави для оскарження</h2>
          <p>Якщо ви вважаєте, що військово-лікарська комісія (ВЛК) неправильно оцінила ваш стан здоров'я, ви маєте право на оскарження. Поширені підстави включають процедурні порушення або неврахування медичних документів.</p>
          
          <h2>Процедура</h2>
          <ol>
            <li><strong>Адміністративне оскарження:</strong> Подайте скаргу до Центральної ВЛК або обласної ВЛК.</li>
            <li><strong>Судове оскарження:</strong> Подайте позов до адміністративного суду.</li>
          </ol>
          
          <h2>Необхідні документи</h2>
          <p>Вам потрібно надати всі відповідні медичні записи, рішення ВЛК та заяву з поясненням, чому ви вважаєте рішення неправильним. Наші адвокати допоможуть зібрати необхідні докази та підготувати сильну справу.</p>
        `,
        isAiGenerated: true,
      },
      {
        title: "Захист бізнесу під час податкових перевірок",
        slug: "business-protection-tax-audits",
        summary: "Основні стратегії мінімізації ризиків під час перевірок податковими органами.",
        content: `
          <h2>Підготовка — запорука успіху</h2>
          <p>Найкращий спосіб захистити свій бізнес — бути готовим ще до початку перевірки. Переконайтеся, що вся документація в порядку, а працівники знають, як взаємодіяти з перевіряючими.</p>
          
          <h2>Під час перевірки</h2>
          <p>Завжди перевіряйте повноваження перевіряючих. Не надавайте більше інформації, ніж вимагає закон. Наполегливо рекомендуємо мати адвоката під час перевірки.</p>
          
          <h2>Оскарження результатів</h2>
          <p>Якщо за результатами перевірки накладено штрафи, ви можете оскаржити податкове повідомлення-рішення. Це можна зробити в адміністративному порядку або в суді. Своєчасне юридичне втручання може зекономити значні ресурси вашого бізнесу.</p>
        `,
        isAiGenerated: true,
      },
    ]);
  }
}

export const storage = new DatabaseStorage();
