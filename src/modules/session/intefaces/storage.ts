import { Session } from "./session";

export interface StorageInterface {
    usersSession: {
        [key: string] : Session;
    };
}
