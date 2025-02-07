import { Access, FieldAccess } from 'payload/types';
import { User } from '../types/payload';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isAdminOrEditor: Access<any, User> = ({ req: { user } }) =>
  // Return true or false based on if the user has an admin role
  Boolean(user?.roles?.includes('admin') || user?.roles?.includes('editor'));

export const isAdminOrEditorFieldLevel: FieldAccess<
  { id: string },
  unknown,
  User
> = ({ req: { user } }) =>
  // Return true or false based on if the user has an admin role
  Boolean(user?.roles?.includes('admin') || user?.roles?.includes('editor'));
