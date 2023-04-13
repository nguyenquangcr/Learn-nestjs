import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrderDto } from './books.dto';
import { OrderService } from './books.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  createOrder(@Body() order): Promise<OrderDto> {
    return this.orderService.save(order);
  }

  @Put(':id/updateStatus')
  updateStatus(
    @Param('id') id: number,
    @Body() body: { status: boolean },
  ): Promise<{ result: string }> {
    return this.orderService.updateStatus(id, body);
  }

  @Put(':id')
  updateUserById(
    @Param('id') id: number,
    @Body() order: any,
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
