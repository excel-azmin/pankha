"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _express = require("@clerk/express");
const _core = require("@nestjs/core");
const _swagger = require("@nestjs/swagger");
const _appmodule = require("./app.module");
const _responseinterceptors = require("./common/shared/interceptors/response.interceptors");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    app.use((0, _express.clerkMiddleware)());
    app.setGlobalPrefix('api');
    const config = new _swagger.DocumentBuilder().setTitle('Backbone API Gateway').setDescription('A comprehensive API Gateway for the Nestjs backend with microservices architecture').setVersion('1.0').addTag('API Gateway').addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Enter JWT token in this format - Bearer YOUR_TOKEN to access protected routes only.'
    }).build();
    const document = _swagger.SwaggerModule.createDocument(app, config, {
        ignoreGlobalPrefix: false
    });
    _swagger.SwaggerModule.setup('api-docs', app, document);
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Accept'
    });
    // global interceptors
    app.useGlobalInterceptors(new _responseinterceptors.ResponseInterceptor());
    await app.startAllMicroservices();
    await app.listen(3001);
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(()=>app.close());
    }
}
bootstrap();

//# sourceMappingURL=main.js.map