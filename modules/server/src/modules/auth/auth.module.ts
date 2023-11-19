import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import {PlacesModule} from "../places/places.module";

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        forwardRef(() => UsersModule),
        JwtModule.register({
            secret: process.env.PRIMARY_KEY || 'SECRET',
            signOptions: {
                expiresIn: '24h',
            },
        }),
        PlacesModule
    ],
    exports: [AuthService, JwtModule],
})
export class AuthModule {}
