import { Injectable , UnauthorizedException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.schema.js';

@Injectable()
export class UsersService {
constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
) {}

create(data: Pick<User, 'name' | 'email' | 'password'>): Promise<User> {
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
}

existsByEmail(email: string): Promise<boolean> {
    return this.userRepository.existsBy({ email });
}

findById(id: number): Promise<User | null> {
    return this.userRepository.findOne({
        where: { id },
    });
}

async profile(id: number) {
    const user = await this.userRepository.findOne({
        where: { id },
    });

    if (!user) {
        throw new UnauthorizedException('User not found');
    }

    return {
        id: user.id,
        name: user.name,
        email: user.email,
    };
}

findByEmailWithPassword(email: string): Promise<User | null> {
    return this.userRepository.findOne({
        where: { email },
        select: {
            id: true,
            email: true,
            password: true,
        },
    });
}
}