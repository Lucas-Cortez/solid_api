import { CreateProductUseCase } from "./createProductUseCase";
import type { Request, Response } from "express";

export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  public async handle(req: Request, res: Response): Promise<void> {
    const { name, type } = req.body;
    this.createProductUseCase.execute({ name, type });
  }
}
