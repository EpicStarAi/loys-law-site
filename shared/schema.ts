import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Export chat models from the integration
export * from "./models/chat";

// === Inquiries (Contact Form) ===
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  type: text("type").notNull().default("individual"), // 'individual' or 'corporate'
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({
  id: true,
  createdAt: true,
});

export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;

// === Services ===
export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(), // Lucide icon name
  category: text("category").notNull(), // 'criminal', 'civil', 'corporate', etc.
});

export const insertServiceSchema = createInsertSchema(services).omit({ id: true });
export type Service = typeof services.$inferSelect;
export type InsertService = z.infer<typeof insertServiceSchema>;

// === Team ===
export const team = pgTable("team", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  specialization: text("specialization").notNull(),
  bio: text("bio").notNull(),
  photoUrl: text("photo_url").notNull(),
});

export const insertTeamSchema = createInsertSchema(team).omit({ id: true });
export type TeamMember = typeof team.$inferSelect;
export type InsertTeamMember = z.infer<typeof insertTeamSchema>;

// === Blog Posts ===
export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  summary: text("summary").notNull(),
  imageUrl: text("image_url"),
  publishedAt: timestamp("published_at").defaultNow(),
  isAiGenerated: boolean("is_ai_generated").default(false),
});

export const insertPostSchema = createInsertSchema(posts).omit({
  id: true,
  publishedAt: true,
});

export type Post = typeof posts.$inferSelect;
export type InsertPost = z.infer<typeof insertPostSchema>;
