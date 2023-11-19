import {Module} from "@nestjs/common";
import * as path from "path";
import {ServeStaticModule} from "@nestjs/serve-static";
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./modules/users/users.model";
import {UsersModule} from "./modules/users/users.module";
import {RolesModule} from "./modules/roles/roles.module";
import {Role} from "./modules/roles/roles.model";
import {UserRoles} from "./modules/roles/user-roles.model";
import {AuthModule} from "./modules/auth/auth.module";
import {Place} from "./modules/places/models/places.model";
import {Image} from "./modules/places/models/image.model";
import {UserPlaces} from "./modules/places/models/user-places.model";
import {PlacesModule} from "./modules/places/places.module";

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGERS_HOST,
            port: Number(process.env.POSTGERS_PORT),
            username: 'mw',
            password: '5727',
            database: 'moscowwalk',
            models: [User, Role, UserRoles, Place, UserPlaces, Image],
            autoLoadModels: true,
        }),
        ServeStaticModule.forRoot({
            rootPath: path.join(__dirname, '..', 'static'),
            serveRoot: '/',
            exclude: ['/api*'],
        }),
        ConfigModule.forRoot({
            envFilePath: `.env.${process.env.NODE_ENV}`,
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PlacesModule
    ]
})
export class AppModule{}