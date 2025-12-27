import { Injectable, RequestTimeoutException } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { UsersService } from "src/infra/prisma/user.service";
import bcrypt from 'bcrypt';

@Injectable()
export class UserService{
    constructor(private readonly prismaService: UsersService){}
    async getUsers() {
        return (this.prismaService.users())
    }
    async createUser(data: Prisma.UserCreateInput){
        data.password = await bcrypt.hash(data.password, 10)
        return (this.prismaService.createUser(data))
    }
}