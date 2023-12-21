import { IsNotEmpty, IsEnum } from "class-validator";
import { ROLES } from "../../../constants/roles";
import { STATES } from "../../../constants/states";

export class RolDTO {
	@IsNotEmpty()
	@IsEnum(ROLES)
	rol: ROLES

	@IsNotEmpty()
	@IsEnum(STATES)
	state: STATES
}