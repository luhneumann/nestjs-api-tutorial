import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserModule } from "src/user/user.module";
import { JwtModule } from "@nestjs/jwt/dist";
import { jwtConstants} from "./jwt-constants";
import { PassportModule } from "@nestjs/passport";

@Module({
    imports: [
        UserModule,
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '24h'}
        }),
        PassportModule,
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService, AuthModule, JwtModule]
})
export class AuthModule {}