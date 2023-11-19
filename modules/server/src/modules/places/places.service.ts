import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Place} from "./models/places.model";
import {UserPlaces} from "./models/user-places.model";
import {Not} from "sequelize-typescript";

@Injectable()
export class PlacesService{

    constructor(
        @InjectModel(Place)
        private placeRepository: typeof Place,
        @InjectModel(UserPlaces)
        private userPlacesRepository: typeof UserPlaces
    ) {}
    async getPlaceById(id: number){
        return await this.placeRepository.findOne({
            rejectOnEmpty: undefined,
            where: {id},
            include: {all: true}
        })
    }

    async getAllPlaces(userId){
        return await this.userPlacesRepository.findAll({
            where: {userId},
            include: {all: true}
        })
    }

    async getAllFreePlaces(userId){
        return await this.userPlacesRepository.findAll({
            where: {userId},
            include: {all: true}
        })
    }
}