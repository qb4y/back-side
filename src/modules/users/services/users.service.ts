import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersEntity } from "../entities/users.entity";
import { Repository } from "typeorm";
import { UserDTO } from "../dto/user.dto";
import { AuthDTO } from "../../auth/dto/auth.dto";
import { ErrorManager } from "../../../utils/error.manager";
import { AuthEntity } from "../../auth/entities/auth.entity";
import { STATES } from "../../../constants/states";

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(UsersEntity) private readonly userRespository: Repository<UsersEntity>,
		@InjectRepository(AuthEntity) private readonly authRepository: Repository<AuthEntity>
	) { }

	public async validateUser(body: UserDTO & AuthDTO): Promise<void> {
		try {
			const { email, numberDocument } = body;

			const [registeredDocument, registeredEmail] = await Promise.all([
				this.userRespository.findOne({ where: [{ numberDocument }] }),
				this.authRepository.findOne({ where: [{ email }] })
			]);

			if (registeredDocument) {
				throw new ErrorManager({
					type: 'CONFLICT',
					message: 'DNI ya registrado'
				});
			}

			if (registeredEmail) {
				throw new ErrorManager({
					type: 'CONFLICT',
					message: 'Email ya registrado'
				});
			}

		} catch (error) {
			throw ErrorManager.createSignatureError(error.message)
		}
	}

	public async createUser(body: UserDTO & AuthDTO): Promise<UsersEntity> {
		try {
			const newUser = this.userRespository.create({
				...body,
				state: STATES.Active
			});

			const savedUser = await this.userRespository.save(newUser)

			return savedUser

		} catch (error) {
			throw ErrorManager.createSignatureError(error.message)
		}
	}
}