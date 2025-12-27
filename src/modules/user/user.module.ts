import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UsersService } from "src/infra/prisma/user.service";
import { PrismaService } from "src/infra/prisma/prisma.service";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService, UsersService, PrismaService]
})
export class UserModule {}