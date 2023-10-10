import { Model } from 'sequelize';
import User, { UserAttributes } from './UserModel';
import { BaseRepository } from '../BaseRepository';

export class UserRepository extends BaseRepository<User> {
    constructor() {
        super(User);
    }

    // additional methods specific to User model can be implemented here
}

export default UserRepository;