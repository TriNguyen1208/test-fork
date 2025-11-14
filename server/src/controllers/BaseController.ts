import { Response } from "express";

export class BaseController {
  protected service: any;

  constructor(service: any) {
    this.service = service; // Dependency Injection
  }

  sendSuccess(res: Response, success: any, status = 200) {
    res.status(status).json({ success: true, message: success.message || "Success" });
  }

  sendError(res: Response, error: any, status = 500) {
    res.status(status).json({ success: false, message: error.message || "Internal Server Error" });
  }

  

  // Template Method: controller con override
  handleRequest(...args: any[]) {

    /*
    -- COPY 
    */
    throw new Error("handleRequest must be implemented");
  }
}
