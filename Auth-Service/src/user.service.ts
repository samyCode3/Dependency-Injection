import { injectable } from "inversify";
import { UserRepository } from "./user.repository";

@injectable()
export class UserService {
      
    constructor(private readonly repo : UserRepository) {}

    public async getUser() {
          return this.repo.getUsers()
    }
}