import { Product } from "../../entities/product";
import { ICreateProductDTO } from "./createProductDTO";

export class CreateProductUseCase {
  constructor(private product: Product) {}
  public async execute(data: ICreateProductDTO) {}
}
