
import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { User } from '../users/users.schema.js';
import { JwtPayload } from './jwt.strategy.js';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    async register(dto: RegisterDto) {
        if (await this.userService.existsByEmail(dto.email)) {
            throw new ConflictException('Email already registered');
        }

const user = await this.userService.create({
    name: dto.name,
    email: dto.email,
    password: await bcrypt.hash(dto.password, 10),
});

return {
    access_token: await this.signToken(user),
};
    }

async login(dto: LoginDto) {
    const user = await this.userService.findByEmailWithPassword(dto.email);

    if (!user) {
        throw new UnauthorizedException('Invalid email or password');
    }

    const passwordMatch = await bcrypt.compare(
        dto.password,
        user.password,
    );

    if (!passwordMatch) {
        throw new UnauthorizedException('Invalid email or password');
    }

    return {
        access_token: await this.signToken(user),
    };
}

async profile(id: number) {
    const user = await this.userService.findById(id);

    if (!user) {
        throw new UnauthorizedException('User not found');
    }

    return {
        id: user.id,
        name: user.name,
        email: user.email,
    };
}
private signToken(user: User): Promise<string> {
    const payload: JwtPayload = {
        sub: user.id,
        name: user.name,
        email: user.email,
    };

    return this.jwtService.signAsync(payload);
}

    }

