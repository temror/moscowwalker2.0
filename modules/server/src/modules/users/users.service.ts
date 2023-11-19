import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/CreateUserDto";
import {RolesService} from "../roles/roles.service";
import {Roles} from "../../types/Roles";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class UserService{
    constructor(
        @InjectModel(User)
        private userRepository: typeof User,
        private roleService: RolesService
    ) {}

    async createUser(dto: CreateUserDto){
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue(Roles.USER);
        await user.$set('roles', [role.id]);
        user.roles = [role];
        return user;
    }

    async getAllUsers() {
        return this.userRepository.findAll({ include: { all: true } });
    }

    async getUserByUsername(username: string){
        const user  =await this.userRepository.findOne({
            where: { username },
            include: { all: true }
        })
        return user
    }

    getUserPlaces(id: string) {
        console.log(id)
    }
}