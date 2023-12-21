import { MigrationInterface, QueryRunner } from "typeorm";

export class Core1703131540079 implements MigrationInterface {
    name = 'Core1703131540079'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "authentications" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying NOT NULL, "password" character varying NOT NULL, "state" "public"."authentications_state_enum" NOT NULL, "user_id" uuid, CONSTRAINT "UQ_e326319d7d4e8cdc3b382288533" UNIQUE ("email"), CONSTRAINT "PK_2505c0cb39a2248520f306c1447" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "f_last_name" character varying NOT NULL, "s_last_name" character varying NOT NULL, "type_document" character varying NOT NULL, "number_document" character varying NOT NULL, "avatar" character varying NOT NULL, "direction" character varying NOT NULL, "district" character varying NOT NULL, "province" character varying NOT NULL, "department" character varying NOT NULL, "birth_date" TIMESTAMP NOT NULL, "phone" character varying NOT NULL, "state" "public"."users_state_enum" NOT NULL, CONSTRAINT "UQ_cfdaae89dc26c0337c8536be529" UNIQUE ("number_document"), CONSTRAINT "UQ_a000cca60bcf04454e727699490" UNIQUE ("phone"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."roles_rol_enum" AS ENUM('Student', 'Admin', 'DeliveryMan', 'Partner', 'Support')`);
        await queryRunner.query(`CREATE TYPE "public"."roles_state_enum" AS ENUM('active', 'inactive', 'suspended')`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "rol" "public"."roles_rol_enum" NOT NULL, "state" "public"."roles_state_enum" NOT NULL, "user_id" uuid, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "authentications" ADD CONSTRAINT "FK_e9a778e982665303f152c01573d" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "roles" ADD CONSTRAINT "FK_a969861629af37cd1c7f4ff3e6b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" DROP CONSTRAINT "FK_a969861629af37cd1c7f4ff3e6b"`);
        await queryRunner.query(`ALTER TABLE "authentications" DROP CONSTRAINT "FK_e9a778e982665303f152c01573d"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TYPE "public"."roles_state_enum"`);
        await queryRunner.query(`DROP TYPE "public"."roles_rol_enum"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "authentications"`);
    }

}
