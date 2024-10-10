import { PartialType } from '@nestjs/mapped-types';
import { CreateBrunoDto } from './create-bruno.dto';

export class UpdateBrunoDto extends PartialType(CreateBrunoDto) {}
