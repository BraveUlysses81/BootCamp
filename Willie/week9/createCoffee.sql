use mydatabase;

db.createCollection("coffee");

show databases;

show collections;

db.coffee.insert([
{
name: "frappuccino",
size: "grande"
},
{
name: "espresso",
size: "tall"
},
{
name: "earl grey",
size: "grande"
}
]);

db.coffee.find();