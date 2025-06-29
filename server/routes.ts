import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      const contactForm = await storage.createContactForm(validatedData);
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: contactForm.id 
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ 
          success: false, 
          message: error.message 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all contact form submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const contactForms = await storage.getAllContactForms();
      res.json(contactForms);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve contact forms" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
