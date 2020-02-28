import Entity from "entities/Entity";

interface Service<T extends Entity> {
  fetchAll(): Promise<T[]>;
  fetch(id: number): Promise<T>;
  update(id: number, content: any): Promise<T>;
  delete(id: number): Promise<any>;
  store(content: any): Promise<T>;
}

export default Service;
