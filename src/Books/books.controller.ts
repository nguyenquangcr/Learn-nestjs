import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrderDro } from './books.dto';
import { OrderService } from './books.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  createOrder(@Body() order): Promise<OrderDro> {
    return this.orderService.save(order);
  }

  @Put(':id')
  updateUserById(
    @Param('id') id: string,
    @Body() order,
  ): Promise<{ result: string }> {
    return this.orderService.update(id, order);
  }

  @Get()
  getAllMedicine() {
    return this.orderService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Delete(':id')
  deleteUserById(@Param('id') id: string) {
    return this.orderService.deleteById(id);
  }
}
