// import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
// import { STATUS_CODES } from "http";

// @Injectable()
// export class BaseService {

// protected handleError(error: any) {
//     if (error.name === 'ValidationError') {
//       throw new HttpException('BAD REQUEST', HttpStatus.BAD_REQUEST);
//     } else{
//         throw new HttpException(`=> ${error}`, HttpStatus.INTERNAL_SERVER_ERROR, error)
//     }
//   }
// }