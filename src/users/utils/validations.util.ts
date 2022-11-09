import { BadRequestException } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

class ValidationUtilCls {
  validId(_id: string): void {
    if (!isValidObjectId(_id))
      throw new BadRequestException('Invalid Format of ID');
  }
}

export const ValidationUtil = new ValidationUtilCls();
