import { UserInterface } from "./user"

export interface StorageInterface {
    users: {
        [key:string]: UserInterface;
    }
}