import { Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth/auth.service";
import { LocalStrategy } from "./auth/local.strategy";

@Controller()
export class AppController {
  constructor(private authService: AuthService){}  
}