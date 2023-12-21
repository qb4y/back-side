declare namespace NodeJS {
	interface ProcessEnv {
		PORT: number
		DB_HOST: string
		DB_PORT: number
		DB_USERNAME: string
		DB_PASSWORD: string
		DB_DATABASE: string
		HASH_SALT: number
		JWT_SECRET: string
	}
}