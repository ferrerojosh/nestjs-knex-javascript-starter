import { Controller, Dependencies, Get } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
@Dependencies(ContactService)
export class ContactController {
  constructor(service) {
    this.service = service;
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
