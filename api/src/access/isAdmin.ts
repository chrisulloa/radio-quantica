import { Access, FieldAccess } from 'payload/types';
import { User } from '../types/payload';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isAdmin: Access<any, User> = ({ req: { user } }) =>
  // Return true or false based on if the user has an admin role
  Boolean(user?.roles?.includes('admin'));

export const isAdminFieldLevel: FieldAccess<{ id: string }, unknown, User> = ({
  req: { user },
}) =>
  // Return true or false based on if the user has an admin role
  Boolean(user?.roles?.includes('admin'));
