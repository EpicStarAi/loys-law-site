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
  // Inquiries
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;

  // Services
  getServices(): Promise<Service[]>;
  seedServices(): Promise<void>;

  // Team
  getTeam(): Promise<TeamMember[]>;
  seedTeam(): Promise<void>;

  // Posts
  getPosts(): Promise<Post[]>;
  getPostBySlug(slug: string): Promise<Post | undefined>;
  seedPosts(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  // Inquiries
  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const [newInquiry] = await db.insert(inquiries).values(inquiry).returning();
    return newInquiry;
  }

  // Services
  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async seedServices(): Promise<void> {
    const existing = await this.getServices();
    if (existing.length > 0) return;

    await db.insert(services).values([
      {
        title: "Criminal Defense",
        description: "Protection of rights at all stages of criminal proceedings. Representation in court and law enforcement agencies.",
        icon: "ShieldAlert",
        category: "criminal",
      },
      {
        title: "Military Law",
        description: "Legal assistance for military personnel and their families. Appeals against VLC decisions, payments, demobilization.",
        icon: "Medal",
        category: "military",
      },
      {
        title: "Corporate Law",
        description: "Comprehensive legal support for business. Contract drafting, dispute resolution, compliance.",
        icon: "Briefcase",
        category: "corporate",
      },
      {
        title: "Family Law",
        description: "Divorce proceedings, division of property, child custody, alimony disputes.",
        icon: "Users",
        category: "civil",
      },
      {
        title: "Tax Litigation",
        description: "Representation in disputes with tax authorities. Appeal of tax notifications-decisions.",
        icon: "FileText",
        category: "administrative",
      },
      {
        title: "Real Estate",
        description: "Legal support of real estate transactions. Verification of developers, support of construction.",
        icon: "Building",
        category: "civil",
      },
    ]);
  }

  // Team
  async getTeam(): Promise<TeamMember[]> {
    return await db.select().from(team);
  }

  async seedTeam(): Promise<void> {
    const existing = await this.getTeam();
    if (existing.length > 0) return;

    await db.insert(team).values([
      {
        name: "Oleksandr Yaremchuk",
        role: "Senior Partner",
        specialization: "Criminal Defense, White Collar Crime",
        bio: "Over 15 years of experience in high-profile criminal cases. Former prosecutor.",
        photoUrl: "", // Frontend will handle placeholder
      },
      {
        name: "Dmytro Sedun",
        role: "Senior Partner",
        specialization: "Corporate Law, Military Law",
        bio: "Expert in business protection and military legislation. Strategic legal advisor.",
        photoUrl: "",
      },
      {
        name: "Olena Kovalenko",
        role: "Associate",
        specialization: "Family Law, Civil Litigation",
        bio: "Specializes in complex family disputes and civil litigation.",
        photoUrl: "",
      },
    ]);
  }

  // Posts
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
        title: "Changes in Military Legislation 2026: What You Need to Know",
        slug: "military-legislation-changes-2026",
        summary: "An overview of the latest amendments to the laws regarding mobilization and social protection of military personnel.",
        content: `
          <h2>New Mobilization Rules</h2>
          <p>In 2026, significant changes were introduced to the mobilization procedures. The key focus is on digitalization and transparency of the process. Electronic summonses have now been fully integrated into the legal framework, ensuring faster notification.</p>
          
          <h2>Social Guarantees</h2>
          <p>The new law expands social guarantees for veterans and their families. This includes increased financial assistance for rehabilitation and simplified procedures for obtaining combatant status.</p>
          
          <h2>Legal Assistance</h2>
          <p>It is crucial to understand your rights under the new legislation. Our firm provides comprehensive support in appealing unlawful decisions and ensuring you receive all benefits you are entitled to.</p>
        `,
        isAiGenerated: true,
      },
      {
        title: "Appealing VLC Decisions: A Step-by-Step Guide",
        slug: "appealing-vlc-decisions",
        summary: "How to challenge the conclusion of the Military Medical Commission if you disagree with the results.",
        content: `
          <h2>Grounds for Appeal</h2>
          <p>If you believe that the Military Medical Commission (VLC) did not properly assess your health condition, you have the right to appeal. Common grounds include procedural violations or failure to consider medical documents.</p>
          
          <h2>The Procedure</h2>
          <ol>
            <li><strong>Administrative Appeal:</strong> Submit a complaint to the Central VLC or the Regional VLC.</li>
            <li><strong>Judicial Appeal:</strong> File a lawsuit in the administrative court.</li>
          </ol>
          
          <h2>Required Documents</h2>
          <p>You will need to provide all relevant medical records, the VLC decision, and a statement detailing why you believe the decision is incorrect. Our attorneys can help you gather the necessary evidence and prepare a strong case.</p>
        `,
        isAiGenerated: true,
      },
      {
        title: "Business Protection During Tax Audits",
        slug: "business-protection-tax-audits",
        summary: "Essential strategies for minimizing risks during inspections by tax authorities.",
        content: `
          <h2>Preparation is Key</h2>
          <p>The best way to protect your business is to be prepared before the audit begins. Ensure all your documentation is in order and your employees know how to interact with inspectors.</p>
          
          <h2>During the Audit</h2>
          <p>Always verify the authority of the inspectors. Do not provide more information than legally required. It is highly recommended to have a lawyer present during the inspection.</p>
          
          <h2>Challenging Results</h2>
          <p>If the audit results in penalties, you can appeal the tax notification-decision. This can be done through an administrative procedure or in court. Timely legal intervention can save your business significant resources.</p>
        `,
        isAiGenerated: true,
      },
    ]);
  }
}

export const storage = new DatabaseStorage();
