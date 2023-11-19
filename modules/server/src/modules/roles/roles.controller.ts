import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/CreateRoleDto';

@ApiTags('Работа с ролями')
@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) {}

    @Post()
    create(@Body() dto: CreateRoleDto) {
        return this.rolesService.createRole(dto);
    }

    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.rolesService.getRoleByValue(value);
    }
}
