import {Table, Model, Column, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {User} from "../../users/users.model";
import {Place} from "./places.model";

@Table({ tableName: 'user_places', createdAt: false, updatedAt: false })
export class UserPlaces extends Model<UserPlaces> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;


    @ForeignKey(() => Place)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    placeId: number;

    @BelongsTo(() => Place)
    place: Place;


    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @Column({type: DataType.BOOLEAN})
    visited: boolean;

    @Column({type: DataType.DATE,
        allowNull: true,
    })
    seenTime: Date;
}
