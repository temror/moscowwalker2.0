import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../../users/users.model";
import {UserPlaces} from "./user-places.model";
import {Image} from "./image.model";

interface PlaceCreationAttribute{
    title: string;
    description: string;
}

@Table({tableName: 'places'})
export class Place extends Model<Place, PlaceCreationAttribute> {
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

    @ApiProperty({ example: 'Кремль', description: 'Наименование достопримечательности' })
    @Column({ type: DataType.STRING, allowNull: false })
    title: string;

    @ApiProperty({ example: 'Главная достопримечательность Москвы. Он был построен...', description: 'Описание достопримечательности' })
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @HasMany(() => UserPlaces)
    users: UserPlaces[];

    @HasMany(() => Image)
    images: Image[];
}