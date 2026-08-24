import * as migration_20250513_055721_migration from './20250513_055721_migration';
import * as migration_20260824_034133_migrate_slate_to_lexical from './20260824_034133_migrate_slate_to_lexical';

export const migrations = [
  {
    up: migration_20250513_055721_migration.up,
    down: migration_20250513_055721_migration.down,
    name: '20250513_055721_migration',
  },
  {
    up: migration_20260824_034133_migrate_slate_to_lexical.up,
    down: migration_20260824_034133_migrate_slate_to_lexical.down,
    name: '20260824_034133_migrate_slate_to_lexical',
  },
];
