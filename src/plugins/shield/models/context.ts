import { Tokens } from "@/plugins/shield/models/token";
import { User } from "@/plugins/shield/models/user";
import utils from "@/plugins/shield/utils/utils";

export class Context {
  private contextTokens: Tokens

  constructor(tokens: any) {
    this.contextTokens = tokens
  }

  getExpiresIn() {
    return this.contextTokens.expires_in
  }

  getContext() {
    return this.contextTokens
  }

  getUser() {
    const id = utils.parseJWT(this.contextTokens.id_token).claims
    const user: User = {
      name: id.name,
      email: id.email,
      address: id.address,
      resource_access: id.resource_access
    }
    return user
  }

}
