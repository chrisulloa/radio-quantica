import * as migration_20250513_055721_migration from './20250513_055721_migration';

export const migrations = [
  {
    up: migration_20250513_055721_migration.up,
    down: migration_20250513_055721_migration.down,
    name: '20250513_055721_migration',
  },
];
