import { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-mongodb';
import { migrateSlateToLexical } from '@payloadcms/richtext-lexical/migrate';

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  // Converts every richText field configured with a lexicalEditor() that has
  // SlateToLexicalFeature added (aboutPage.content, donatePage.content,
  // shows.description, newsPosts.content) from its existing Slate JSON to
  // Lexical's format, in place.
  await migrateSlateToLexical({ payload });
}

// eslint-disable-next-line no-empty-pattern
export async function down({}: MigrateDownArgs): Promise<void> {
  // No official reverse converter ships for this — restoring Slate data
  // requires a pre-migration database snapshot, not a live conversion.
  throw new Error(
    'This migration is not reversible; restore from a pre-migration backup instead.'
  );
}
