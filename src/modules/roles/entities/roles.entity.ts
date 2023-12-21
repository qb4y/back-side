import { Column, Entity, ManyToOne } from "typeorm";
import { IRoles } from "../interfaces/roles.interface";
import { ROLES } from "../../../constants/roles";
import { STATES } from "../../../constants/states";
import { UsersEntity } from "../../users/entities/users.entity";
import { BaseEntity } from "../../../config/base.entity";

@Entity({ name: 'roles' })
export class RolesEntity extends BaseEntity implements IRoles {
	@Column({ type: 'enum', enum: ROLES })
	rol!: ROLES

	@Column({ type: 'enum', enum: STATES })
	state!: STATES

	@ManyToOne(() => UsersEntity, (user) => user.roles)
	user: UsersEntity
}