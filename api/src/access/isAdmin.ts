import { Access, FieldAccess } from 'payload';
import { User } from '../types/payload';

export const isAdmin: Access<User> = ({ req: { user } }) =>
  // Return true or false based on if the user has an admin role
  Boolean(user?.roles?.includes('admin'));

export const isAdminFieldLevel: FieldAccess<{ id: string }, User> = ({
  req: { user },
}) =>
  // Return true or false based on if the user has an admin role
  Boolean(user?.roles?.includes('admin'));
