import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { registerChatRoutes } from "./replit_integrations/chat";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Register Chat Integration Routes
  registerChatRoutes(app);

  // Inquiries
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Services
  app.get(api.services.list.path, async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  // Team
  app.get(api.team.list.path, async (req, res) => {
    const team = await storage.getTeam();
    res.json(team);
  });

  // Posts
  app.get(api.posts.list.path, async (req, res) => {
    const posts = await storage.getPosts();
    res.json(posts);
  });

  app.get(api.posts.get.path, async (req, res) => {
    const post = await storage.getPostBySlug(req.params.slug);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  });

  // Seed Data
  await storage.seedServices();
  await storage.seedTeam();
  await storage.seedPosts();

  return httpServer;
}
