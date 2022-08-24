import { Session } from "inspector";
import { GenerateWebTokenPropsInterface, GetUserInfoFromTokenPropsInterface, GetUserInfoFromTokenResultInterface } from "./web-token-service-params"

export interface WebTokenServiceInterface {
    generateWebToken: (props: GenerateWebTokenPropsInterface) => string;
    getUserInfoFromToken: (props: GetUserInfoFromTokenPropsInterface) => GetUserInfoFromTokenResultInterface;
}