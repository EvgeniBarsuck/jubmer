import { UserInterface } from "./user";
import { AddSocketIdPropsInterface, AddUserPropsInterface, VerifyUserPropsInterface } from "./user-service-params";

export interface UserServiceInterface {
    verifyUser: (props: VerifyUserPropsInterface) => UserInterface;
    addUser: (props: AddUserPropsInterface) => void;
    addSocketId: (props: AddSocketIdPropsInterface) => void;
}