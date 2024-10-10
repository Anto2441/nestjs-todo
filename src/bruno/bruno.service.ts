import { Injectable } from '@nestjs/common';
import { CreateBrunoDto } from './dto/create-bruno.dto';
import { UpdateBrunoDto } from './dto/update-bruno.dto';

@Injectable()
export class BrunoService {
  example() {
    return 'This action returns example';
  }
  create(createBrunoDto: CreateBrunoDto) {
    return 'This action adds a new bruno';
  }

  findAll() {
    return `This action returns all bruno`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bruno`;
  }

  update(id: number, updateBrunoDto: UpdateBrunoDto) {
    return `This action updates a #${id} bruno`;
  }

  remove(id: number) {
    return `This action removes a #${id} bruno`;
  }
}
