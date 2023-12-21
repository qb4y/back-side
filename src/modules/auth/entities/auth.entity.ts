import { BaseEntity } from "../../../config/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { IAuth } from "../interfaces/auth.interface";
import { UsersEntity } from "../../users/entities/users.entity";
import { STATES } from "../../../constants/states";

@Entity({ name: 'authentications' })
export class AuthEntity extends BaseEntity implements IAuth {
	@Column({ unique: true })
	email!: string;

	@Column()
	password!: string;

	@Column({ type: 'enum', enum: STATES })
	state!: STATES

	@ManyToOne(() => UsersEntity, (user) => user.authentication)
	user: UsersEntity
}