import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class UserService {
constructor(
   @InjectRepository(User)
       private readonly userRepository: Repository<User>,
     ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
     return await this.userRepository.save(createUserDto);
   }
 
   async findAll(): Promise<User[]> {
     return await this.userRepository.find();
   }
 
   async findOne(id: number): Promise<User> {
     return await this.userRepository.findOneBy({ id });
   }
 
   async update(id: number, updateMaquinaDto: UpdateUserDto): Promise<void> {
     await this.userRepository.update(id, UpdateUserDto);
   }
 
   async remove(id: number): Promise<void> {
     await this.userRepository.delete(id);
   }
 }