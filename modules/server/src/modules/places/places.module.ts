import {Module} from "@nestjs/common";
import {PlacesController} from "./places.controller";
import {PlacesService} from "./places.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {Place} from "./models/places.model";
import {Image} from "./models/image.model";
import {UserPlaces} from "./models/user-places.model";

@Module({
    controllers: [PlacesController],
    providers: [PlacesService],
    imports: [
        SequelizeModule.forFeature([
            User,
            Place,
            UserPlaces,
            Image
        ]),
        /*RolesModule,
        forwardRef(() => AuthModule),*/
    ],
    exports: [PlacesService],
})
export class PlacesModule {}