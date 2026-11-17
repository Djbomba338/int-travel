class Accommodation {
  // TODO: implementar clase Accommodation con los campos name y cost
  #name!: string
  #cost!: string 

  constructor(
    name:unknown = "",
    cost:unknown,
  ) {
    this.setName(name);
    this.setCost(cost);
  }
  
   getName(): string {
    return this.#name;
  }
  setName(name: unknown):void{
    if (typeof name !== "string" || name.trim() === "") {
      throw new Error("El nombre de la ciudad debe ser una cadena no vacía");
    }
    this.#name = name.trim();
  }
  
  getCost(): string {
    return this.#cost;
  }
  setCost(cost: unknown):void{
    if (typeof cost !== "string" || cost.trim() === "") {
      throw new Error("El costo debe ser una cadena no vacía");
    }
    this.#cost = cost.trim();
  }






}
export default Accommodation;
