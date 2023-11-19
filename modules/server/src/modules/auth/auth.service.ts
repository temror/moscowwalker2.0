import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from '../users/dto/CreateUserDto';
import {UserService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import {User} from '../users/users.model';
import {PlacesService} from "../places/places.service";
import {Place} from "../places/models/places.model";

interface ResPlace {
    visited: boolean,
    placeId: number,
    place?: Place
}

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private placesService: PlacesService
    ) {
    }

    async login(dto: CreateUserDto) {
        const user = await this.validateUser(dto);
        return this.generateToken(user)
    }

    async validate(auth: string) {
        const token = auth.split(' ')[1];
        return this.jwtService.verify(token)
    }

    async getUserInfo(auth) {
        const username = await this.validate(auth)
        const user: User = await this.userService.getUserByUsername(username.username)
        return {
            username: user.username,
            roles: user.roles
        }
    }

    async getUserPlaces(auth: any) {
        const username = await this.validate(auth)

        const user: User = await this.userService.getUserByUsername(username.username)

        const places = await this.placesService.getAllFreePlaces(user.id)

        return places.map(item =>{return{
            place: item.place,
            visited: item.visited,
            seenTime: item.seenTime
        }})
    }

    /*async getRandomPlace*/

    async registration(dto: CreateUserDto) {
        const candidate = await this.userService.getUserByUsername(dto.username);
        if (candidate) {
            throw new HttpException('Пользователь с таки именем уже существует!', HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(dto.password, 12);
        const user = await this.userService.createUser({
            ...dto,
            password: hashPassword
        });
        return this.generateToken(user);
    }

    private async generateToken(user: User) {

        const payload = {username: user.username, id: user.id, roles: user.roles};

        return this.jwtService.sign(payload)
    }

    private async validateUser(dto: CreateUserDto) {

        if (!dto.username || !dto.password) {
            throw new UnauthorizedException({message: 'Неверный логин или пароль!'});
        }

        const user = await this.userService.getUserByUsername(dto.username);

        const passwordEquals = await bcrypt.compare(dto.password, user?.password || '');

        if (user && passwordEquals) {
            return user;
        }

        throw new UnauthorizedException({message: 'Неверный логин или пароль!'});
    }
}
