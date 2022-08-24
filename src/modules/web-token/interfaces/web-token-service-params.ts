export interface GenerateWebTokenPropsInterface {
    name: string;
    userUUID: string;
}

export interface GetUserInfoFromTokenPropsInterface {
    accessToken: string;
}

export interface GetUserInfoFromTokenResultInterface {
    name: string;
    userUUID: string;
}