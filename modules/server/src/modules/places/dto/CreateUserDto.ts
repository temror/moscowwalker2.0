import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'Катя Баннова', description: 'Имя пользователя' })
    readonly username?: string;
    @ApiProperty({ example: '123456Fg', description: 'Пароль' })
    readonly password: string;
}
