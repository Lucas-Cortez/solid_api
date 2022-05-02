import { Product } from "../../entities/product";
import fs from "fs";

export class UserRepositories {
  constructor(private products: Product[] = []) {}

  public add(product: Product): void {
    this.products.push(product);
    const teste = JSON.stringify(product);

    // fs.writeFile("arquivo.txt", teste, (err) => {
    //   if (err) throw err;
    // });
  }
}
