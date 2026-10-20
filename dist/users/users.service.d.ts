import { Repository } from 'typeorm';
import { User } from './users.schema.js';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(data: Pick<User, 'name' | 'email' | 'password'>): Promise<User>;
    existsByEmail(email: string): Promise<boolean>;
    findById(id: number): Promise<User | null>;
    profile(id: number): Promise<{
        id: number;
        name: string;
        email: string;
    }>;
    findByEmailWithPassword(email: string): Promise<User | null>;
}
