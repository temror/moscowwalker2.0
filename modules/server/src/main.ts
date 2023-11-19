import * as process from "process";
import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function start(){
    const PORT = process.env.PORT || 5000;

    const app = await NestFactory.create(AppModule)

    app.setGlobalPrefix('api')
    app.enableCors();

    const config = new DocumentBuilder()
        .setTitle('Moscow Walker')
        .setDescription('Серверное приложение для сайта moscowwalker.ru')
        .setVersion('1.0.0')
        .build();

    const documentation = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, documentation);

    await app.listen(PORT, ()=>{
        console.log(`Server starts on port = ${PORT}`)
    })
}
start()