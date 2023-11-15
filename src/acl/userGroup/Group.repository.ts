import { Group } from './Group.model';
import { BaseRepository } from '../../BaseRepository';

export class GroupRepository extends BaseRepository<Group> {
    constructor() {
        super(Group);
    }

}

export default GroupRepository;