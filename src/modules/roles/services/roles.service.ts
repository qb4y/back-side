import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RolesEntity } from "../entities/roles.entity";
import { Repository } from "typeorm";
import { RolDTO } from "../dto/rol.dto";
import { STATES } from "src/constants/states";
import { ErrorManager } from "src/utils/error.manager";

@Injectable()
export class RolesService {
	constructor(
		@InjectRepository(RolesEntity) private readonly roleRepository: Repository<RolesEntity>) { }

	public async createRol(body: RolDTO): Promise<void> {
		try {
			const newRol = this.roleRepository.create({
				...body,
				state: STATES.Active
			})
			await this.roleRepository.save(newRol)
		} catch (error) {
			throw ErrorManager.createSignatureError(error.message)
		}
	}
}