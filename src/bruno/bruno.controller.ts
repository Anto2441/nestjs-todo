import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BrunoService } from './bruno.service';
import { CreateBrunoDto } from './dto/create-bruno.dto';
import { UpdateBrunoDto } from './dto/update-bruno.dto';

@Controller('bruno')
export class BrunoController {
  constructor(private readonly brunoService: BrunoService) {}

  @Post()
  create(@Body() createBrunoDto: CreateBrunoDto) {
    return this.brunoService.create(createBrunoDto);
  }

  @Get()
  findAll() {
    return this.brunoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brunoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrunoDto: UpdateBrunoDto) {
    return this.brunoService.update(+id, updateBrunoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brunoService.remove(+id);
  }
}
