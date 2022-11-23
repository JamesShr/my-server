import { Controller, Get, Post, Patch, Delete, Put } from '@nestjs/common';
import { INFO_VERSION } from '@/config';

@Controller()
export class AppController {
  constructor() { }

  @Get('*')
  getAll(): string {
    return `version : ${INFO_VERSION}`;
  }

  @Post('*')
  postAll(): string {
    return `post ok`;
  }

  @Patch('*')
  patchAll(): string {
    return `patch ok`;
  }


  @Put('*')
  putAll(): string {
    return `put ok`;
  }

  @Delete('*')
  deleteAll(): string {
    return `delete ok`;
  }
}
