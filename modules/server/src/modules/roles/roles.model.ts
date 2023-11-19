import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/users.model';
import { UserRoles } from './user-roles.model';

interface RoleCreationAttribute {
    value: string;
    description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttribute> {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: 'ADMIN', description: 'Название роли' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    role: string;

    @ApiProperty({ example: 'Роль администратора', description: 'Описание роли' })
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}
