import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {Place} from "../places/models/places.model";
import {UserPlaces} from "../places/models/user-places.model";

interface UserCreationAttribute{
    username: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttribute> {
    @ApiProperty({
        example: '135324632',
        description: 'Уникальный идентификатор',
    })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ApiProperty({ example: 'artem', description: 'Имя пользователя' })
    @Column({ type: DataType.STRING, allowNull: false })
    username: string;

    @ApiProperty({ example: '123456Fg', description: 'Пароль' })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @HasMany(() => UserPlaces)
    places: UserPlaces[];
}