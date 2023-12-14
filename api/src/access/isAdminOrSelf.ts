import { Access } from 'payload/config';
import { User } from '../types/payload';

const isAdminOrSelf: Access = ({ req: { user } }: { req: { user: User } }) => {
  // Need to be logged in
  if (user) {
    // If user has role of 'admin'
    if (user.roles?.includes('admin')) {
      return true;
    }

    // If any other type of user, only provide access to themselves
    return {
      id: {
        equals: user.id,
      },
    };
  }

  // Reject everyone else
  return false;
};

export default isAdminOrSelf;
