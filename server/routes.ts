import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // We don't need any API routes for this application
  // as it's purely a frontend celebration page
  
  // Add a simple status endpoint
  app.get('/api/status', (req, res) => {
    res.json({ status: 'ok', message: 'Birthday celebration server is running!' });
  });

  const httpServer = createServer(app);

  return httpServer;
}
