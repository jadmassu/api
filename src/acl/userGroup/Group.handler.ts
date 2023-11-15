import { BaseHandler } from "../../BaseHandler";
import { Group } from "./Group.model";
import GroupRepository from "./Group.repository";

export class GroupHandler extends BaseHandler<Group> {
    constructor() {
        super(new GroupRepository());

    }
}