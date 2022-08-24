import 'dotenv/config';

export const envConfig = {
    expiredTime: process.env.EXPIRED_TIME,
    secretKey: process.env.SERCRET_KEY,
    PORT: Number(process.env.PORT),
    SOCKET_PORT: Number(process.env.SOCKET_PORT),
}