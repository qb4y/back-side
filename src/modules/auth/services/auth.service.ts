import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { AuthEntity } from '../entities/auth.entity';
import { Repository } from 'typeorm';

// import { UsersEntity } from 'src/modules/users/entities/users.entity';
import { UsersService } from 'src/modules/users/services/users.service';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(AuthEntity)
		private readonly authRepository: Repository<AuthEntity>,
		private readonly usersService: UsersService
	) { }


	public async signJWT({ payload, secret, expires }: { payload: jwt.JwtPayload; secret: string; expires: number | string; }) {
		return jwt.sign(payload, secret, { expiresIn: expires })
	}

	// public async generateJWT(email: string, numberDocument: string): Promise<string> {
	// 	try {
	// 		// Valida si el usuario existe
	// 		await this.usersService.validateUser({ email, numberDocument })

	// 		// Si el usuario existe, obtén la información del usuario validado
	// 		const user = await this.authRepository.findOne({ where: [{ email }] })

	// 		// Crea el payload para el token JWT
	// 		const payload: jwt.JwtPayload = {
	// 			userId: user.id, // Supongamos que 'user' contiene la información del usuario
	// 			email,
	// 		};

	// 		// Obtener el secreto y tiempo de expiración del entorno
	// 		const secret = process.env.JWT_SECRET;
	// 		const expires = process.env.JWT_EXPIRES || '1h'; // Puedes ajustar el tiempo según tus necesidades

	// 		// Firmar el token JWT
	// 		return this.signJWT({ payload, secret, expires })

	// 	} catch (error) {
	// 		// Manejar el error si el usuario no existe
	// 		throw new UnauthorizedException('Invalid credentials')
	// 	}
	// }

}
