import { AuthModule } from "src/auth/auth.module";
import { UserModule } from "src/user/user.module";
import { AccountService } from "./account.service";
import { AccountController } from "./account.controller";
import { Module } from "@nestjs/common";

@Module({
    imports: [AuthModule, UserModule],
    providers: [AccountService],
    controllers: [AccountController],
    exports: [AccountModule]
})
export class AccountModule {}