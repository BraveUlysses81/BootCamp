db.coffee.updateOne(
{
name: "earl grey"
},
{
$set: {temp : "hot"}
}
);

db.coffee.updateOne(
{
name: "espresso"
},
{
$set: {name: "white chocolate mocha"}
}
);

db.coffee.find();

db.coffee.find(
{
size: "grande"
}
);

