export interface GetSessionPropsInterface {
    userUUID: string;
}

export interface CheckIsExpiredPropsInterface {
    userUUID: string;
}

export interface AddSessionPropsInterface {
    accessToken: string;
    userUUID: string;
}
