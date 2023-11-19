import {Body, Controller, ExecutionContext, Get, Post, Req, UseGuards} from "@nestjs/common";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {UserService} from "./users.service";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/CreateUserDto";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";

@ApiTags('Работа с пользователями')
@Controller('users')
export class UsersController {
    constructor(private userService: UserService) {}

    @ApiOperation({ summary: 'Создание пользователя' })
    @ApiResponse({ status: 200, type: User })
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }
    @ApiOperation({ summary: 'Получение списка пользователей' })
    @ApiResponse({ status: 200, type: [User] })
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.userService.getAllUsers();
    }

    @Roles('USER')
    @UseGuards(RolesGuard)
    @Get('places')
    getUserPlaces(@Req() req:any) {
        return this.userService.getUserPlaces(req.user.id);
    }
}