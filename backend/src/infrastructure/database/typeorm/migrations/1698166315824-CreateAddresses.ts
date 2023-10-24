import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAddresses1698166315824 implements MigrationInterface {

  public async up(queryRunner : QueryRunner) : Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "addresses",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "cep",
            type: "varchar",
          },
          {
            name: "number",
            type: "varchar",
          },
          {
            name: "street",
            type: "varchar",
          },
          {
            name: "neighborhood",
            type: "varchar",
          },
          {
            name: "city",
            type: "varchar",
          },
          {
            name: "state",
            type: "varchar",
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKUserId",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner : QueryRunner) : Promise<void> {
    await queryRunner.dropTable("addresses");
  }

}
