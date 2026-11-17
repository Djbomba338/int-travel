import { describe, beforeEach, test, expect } from "vitest";
import Accommodation from "../accommodation.ts";

describe("Accommodation", () => {
  let accommodation: Accommodation;
  let name = "gero";
  let cost = "70"
  beforeEach(() => {
    accommodation = new Accommodation(name, cost);
    void accommodation;
  });



  describe("Accommodation name", () => {
   
    
    test("should set name correctly", () => {});
    // TODO: agregar más tests para el nombre
    test("get name", () => {
    expect(accommodation.getName()).toBe("gero");
    });

    test("get name can not be empty", () => {
    
      
    expect(()=> accommodation.setName("")).toThrow();
    });


  });
  
  


  describe("Accommodation cost", () => {
    test.todo("agregar tests para el costo");
     test("get cost", () => {
    expect(accommodation.getCost()).toBe("70");
    });

    test("set cost can not be empty", () => {
    
      
    expect(()=> accommodation.setCost("")).toThrow();
    });


  });
});
