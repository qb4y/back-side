import { BaseEntity } from "../../../config/base.entity";
import { IUser } from "../interfaces/user.interface";
import { Column, Entity, OneToMany } from "typeorm";
import { AuthEntity } from "../../auth/entities/auth.entity";
import { STATES } from "../../../constants/states";
import { RolesEntity } from "../../roles/entities/roles.entity";

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity implements IUser {
	@Column()
	name!: string

	@Column()
	fLastName!: string

	@Column()
	sLastName!: string

	@Column()
	typeDocument!: string

	@Column({ unique: true })
	numberDocument!: string

	@Column()
	avatar!: string

	@Column()
	direction!: string

	@Column()
	district!: string

	@Column()
	province!: string

	@Column()
	department!: string

	@Column()
	birthDate!: Date

	@Column({ unique: true })
	phone!: string

	@Column({ type: 'enum', enum: STATES })
	state!: STATES

	@OneToMany(() => AuthEntity, (authentication) => authentication.user)
	authentication: AuthEntity

	@OneToMany(() => RolesEntity, (roles) => roles.user)
	roles: RolesEntity
}