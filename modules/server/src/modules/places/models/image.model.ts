import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Place} from "./places.model";

interface ImageCreationAttribute{
    image: string;
}

@Table({tableName: 'images'})
export class Image extends Model<Image, ImageCreationAttribute> {
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

    @ApiProperty({ example: 'UHOUhKUhhiUhkuhbkUhU', description: 'Изображение в формате base64' })
    @Column({ type: DataType.STRING, allowNull: false })
    image: string;

    @ForeignKey(() => Place)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    placeId: number;

    @BelongsTo(() => Place)
    place: Place;
}