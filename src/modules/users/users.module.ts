import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entities/users.entity';
import { AuthEntity } from '../auth/entities/auth.entity'

@Module({
	imports: [
		TypeOrmModule.forFeature([UsersEntity, AuthEntity])
	],
	providers: [UsersService],
	controllers: [UsersController],
	exports: [UsersService, TypeOrmModule]
})
export class UsersModule { }
