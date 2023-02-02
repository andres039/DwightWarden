import { mutation } from "./_generated/server";

export default mutation(({ db }, account) => {
  db.insert("accounts", account);
});
