import { ConfigModule, ConfigService } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

ConfigModule.forRoot({
	envFilePath: `.${process.env.NODE_ENV}.env`
})

const configService = new ConfigService()

export const DataSourceConfig: DataSourceOptions = {
	type: 'postgres', // mysql => postgresql
	host: configService.get('DB_HOST'),
	port: Number(configService.get('DB_PORT')),
	username: configService.get('DB_USERNAME'),
	password: configService.get('DB_PASSWORD'),
	database: configService.get('DB_DATABASE'),
	// -----------------------------
	entities: [__dirname + "/../**/*.entity{.ts,.js}"],
	migrations: [__dirname + "/../migrations/*{.ts,.js}"],
	synchronize: false,
	migrationsRun: false,
	logging: false,
	namingStrategy: new SnakeNamingStrategy()
}

export const AppDS = new DataSource(DataSourceConfig)