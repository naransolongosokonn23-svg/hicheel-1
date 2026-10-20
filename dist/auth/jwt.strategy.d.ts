import { Strategy } from 'passport-jwt';
import { Request } from 'express';
export interface JwtPayload {
    sub: number;
    email: string;
    name: string;
}
export interface JwtRequest extends Request {
    user: JwtPayload;
}
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: JwtPayload): JwtPayload;
}
export {};
