import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistrationsService } from './registrations.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';

@Controller('registrations')
export class RegistrationsController {
  constructor(private readonly registrationsService: RegistrationsService) { }

  @Post()
  create(@Body() createRegistrationDto: CreateRegistrationDto) {
    return this.registrationsService.create(createRegistrationDto);
  }

  @Get()
  findAll() {
    return this.registrationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registrationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistrationDto: UpdateRegistrationDto) {
    return this.registrationsService.update(+id, updateRegistrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registrationsService.remove(+id);
  }

  @Get('verify/:id')
  verfiy(@Param('id') id: string) {

    const fname = ["Anh", "Phuong", "Trang", "Thao", "Ha", "Hien"]
    const lname = ["Nguyen", "Tran", "Le", "Phan", "Trinh", "Dinh"]

    let fullname = fname[Math.floor(Math.random() * 5)] + " " + lname[Math.floor(Math.random() * 5)]

    let sid = Math.floor(Math.random() * 1000000)

    let idn = parseInt(id)


    if (idn % 2 === 0) {
      const obj = { valid: "Yes", name: fullname, type: "Staff", id: "v" + sid }
      return obj
    }

    else {
      const obj = { valid: "No", name: fullname, type: "Student", id: "s" + sid }
      return obj
    }


  }
}
