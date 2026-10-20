import{IsEmail, IsNotEmpty, IsString, MaxLength, MinLength} from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}