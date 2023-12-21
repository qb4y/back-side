import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class UserDTO {

	@IsNotEmpty()
	@IsString()
	name: string

	@IsNotEmpty()
	@IsString()
	fLastName: string

	@IsNotEmpty()
	@IsString()
	sLastName: string

	@IsNotEmpty()
	@IsString()
	typeDocument: string

	@IsNotEmpty()
	@IsString()
	numberDocument: string

	@IsNotEmpty()
	@IsString()
	avatar: string

	@IsNotEmpty()
	@IsString()
	direction: string

	@IsNotEmpty()
	@IsString()
	district: string

	@IsNotEmpty()
	@IsString()
	province: string

	@IsNotEmpty()
	@IsString()
	department: string

	@IsNotEmpty()
	@IsString()
	birthDate: Date

	@IsNotEmpty()
	@IsString()
	phone: string
}