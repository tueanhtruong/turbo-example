import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Dto for the response
 */
export class ApiResponseDto<T = void> {
  @ApiProperty()
  success: boolean;

  @ApiProperty({ example: 200 })
  code: number;

  @ApiPropertyOptional()
  data?: T;

  @ApiProperty({ example: 1617826799860 })
  timestamp: number;
}

export class ApiListResponseDto<T> {
  @ApiProperty()
  success: boolean;

  @ApiProperty({ example: 200 })
  code: number;

  @ApiProperty({ isArray: true })
  data: T[];

  @ApiProperty({ example: 1617826799860 })
  timestamp: number;
}
