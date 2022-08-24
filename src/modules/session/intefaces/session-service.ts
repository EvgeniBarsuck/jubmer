import { AddSessionPropsInterface, CheckIsExpiredPropsInterface, GetSessionPropsInterface } from "./session-service-params";
import { Session } from "./session";

export interface SessionServiceInterface {
    getSession: (props: GetSessionPropsInterface) => Session;
    checkIsExpired: (props: CheckIsExpiredPropsInterface) => boolean;
    addSession: (props: AddSessionPropsInterface) => void;
}