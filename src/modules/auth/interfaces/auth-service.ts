import { SignInServiceInputInterface, SignUpServiceInputInterface } from "./auth-service-params.inteface";

export interface AuthServiceInterface {
    signIn: (props: SignInServiceInputInterface) => string;
    signUp: (props: SignUpServiceInputInterface) => void;
}