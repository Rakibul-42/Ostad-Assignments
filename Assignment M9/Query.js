db.createCollection("users");

db.users.drop()

db.users.insertOne({"name":

"Rakibul Ansary", "position":

"Student"});

db.users.deleteOne({"name":

"Rakibul Ansary"})