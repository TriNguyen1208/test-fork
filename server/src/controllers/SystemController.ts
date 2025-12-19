import { SystemService } from "../services/SystemService";
import { BaseController } from "./BaseController";
import { Request, Response } from "express";
export class SystemController extends BaseController {
  constructor(service: SystemService) {
    super(service);
  }

  async updateProductRenewTime(req: Request, res: Response) {
    const result = await this.service.updateProductRenewTime(
      req.body.time
    );
    return { result };
  }
}
