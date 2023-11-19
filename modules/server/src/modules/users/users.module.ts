import {forwardRef, Module} from "@nestjs/common";
import {UsersController} from "./users.controller";
import {UserService} from "./users.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";
import {UserPlaces} from "../places/models/user-places.model";
import {PlacesModule} from "../places/places.module";

@Module({
    controllers: [UsersController],
    providers: [UserService],
    imports: [
        SequelizeModule.forFeature([User, Role, UserRoles, UserPlaces]),
        RolesModule,
        PlacesModule,
        forwardRef(() => AuthModule),
    ],
    exports: [UserService],
})
export class UsersModule {}