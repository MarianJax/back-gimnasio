import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FacultadService } from './facultad.service';
import { CreateFacultadDto } from './dto/create-facultad.dto';
import { UpdateFacultadDto } from './dto/update-facultad.dto';

@Controller('facultad')
export class FacultadController {
  constructor(private readonly facultadService: FacultadService) {}

  @Post()
  create(@Body() createFacultadDto: CreateFacultadDto) {
    return this.facultadService.create(createFacultadDto);
  }

  @Get()
  findAll() {
    return this.facultadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facultadService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFacultadDto: UpdateFacultadDto) {
    return this.facultadService.update(id, updateFacultadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facultadService.remove(id);
  }
}
