import { Injectable } from "@nestjs/common";

@Injectable()
export class HealthService{
    getWorking() {
        return {
            "message": "ok",
            "uptime": process.uptime()
        };
    }
}