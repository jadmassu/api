import { Group } from './Group.model';
import { BaseRepository } from '../../BaseRepository';

export class UserRepository extends BaseRepository<Group> {
    constructor() {
        super(Group);
    }

}

export default UserRepository;