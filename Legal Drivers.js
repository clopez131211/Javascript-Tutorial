function getNamesOfLegalDrivers(people)
{
  return people
    .filter(function(person) { return person.age >= 16; })
    .map(function(person) { return person.name; });
}