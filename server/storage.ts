import { users, contactForms, type User, type InsertUser, type ContactForm, type InsertContactForm } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactForm(contactForm: InsertContactForm): Promise<ContactForm>;
  getAllContactForms(): Promise<ContactForm[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContactForm(insertContactForm: InsertContactForm): Promise<ContactForm> {
    const [contactForm] = await db
      .insert(contactForms)
      .values(insertContactForm)
      .returning();
    return contactForm;
  }

  async getAllContactForms(): Promise<ContactForm[]> {
    return await db.select().from(contactForms);
  }
}

export const storage = new DatabaseStorage();
