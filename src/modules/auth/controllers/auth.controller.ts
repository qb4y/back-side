import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) { }

	// @Post('login')
	// async login(
	// 	@Body() { usernameOrEmail, password }: { usernameOrEmail: string; password: string },
	// ) {
	// 	try {
	// 		const token = await this.authService.generateJWT(usernameOrEmail, password);

	// 		return { message: 'Autenticación exitosa', token };
	// 	} catch (error) {
	// 		if (error instanceof UnauthorizedException) {
	// 			return { message: 'Credenciales inválidas' };
	// 		}
	// 		throw new UnauthorizedException('Data no válida');
	// 	}
	// }
}
