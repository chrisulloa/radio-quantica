import { Access, FieldAccess } from 'payload';
import { User } from '../types/payload';

export const isAdminOrEditor: Access<User> = ({ req: { user } }) =>
  // Return true or false based on if the user has an admin role
  Boolean(user?.roles?.includes('admin') || user?.roles?.includes('editor'));

export const isAdminOrEditorFieldLevel: FieldAccess<{ id: string }, User> = ({
  req: { user },
}) =>
  // Return true or false based on if the user has an admin role
  Boolean(user?.roles?.includes('admin') || user?.roles?.includes('editor'));
