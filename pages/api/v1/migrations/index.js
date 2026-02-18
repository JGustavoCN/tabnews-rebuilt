import migrationRunner from "node-pg-migrate";
import { join } from "node:path";
import database from "infra/database.js";


export default async function migrations(request, response) {

  const alowMethods = ["GET", "POST"];
  if (!alowMethods.includes(request.method)) {
    return response.status(405).json({
      error: `Method "${request.method}" Not Allowed`
    });
  }
  let dbClient
  try {
    dbClient = await database.getNewClient();

    const defaultMigrationOptions = {
      dbClient: dbClient,
      dir: join("infra", "migrations"),
      dryRun: true,
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
    };

    if (request.method === "GET") {
      const pendingMigrations = await migrationRunner(defaultMigrationOptions);
      return response.status(200).json(pendingMigrations);
    }

    if (request.method === "POST") {
      const migratedMigrations = await migrationRunner({
        ...defaultMigrationOptions,
        dryRun: false,
      });
      if (migratedMigrations.length === 0) {
        return response.status(201).json(migratedMigrations);
      }
      return response.status(200).json(migratedMigrations);
    }

  } catch (error) {
    console.error("Error running migrations:", error);
    throw error;
  } finally {
    await dbClient.end();
  }
}
