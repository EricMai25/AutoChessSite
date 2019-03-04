DROP TABLE pieces;
DROP TABLE species;
DROP TABLE class;

CREATE TABLE  pieces(
  id INT NOT NULL PRIMARY KEY,
  name TEXT,
  avatar TEXT,
  species1 INT Not Null references species(id), 
  species2 INT,
  class INT NOT NULL references class(id),
  cost  INT,
  health1 INT,
  health2 INT,
  health3 INT,
  ar INT,
  mr INT,
  atk1 INT,
  atk2 INT,
  atk3 INT,
  atkRate INT,
  atkRange INT,
)

CREATE TABLE species(
  id INT NOT NULL PRIMARY KEY,
  name TEXT,
  des TEXT,
  combo1 INT,
  eff1 TEXT,
  combo2 INT,
  eff2 TEXT,
  comb3 INT,
  eff3 TEXT
)

CREATE TABLE class(
  id INT NOT NULL PRIMARY KEY,
  name TEXT,
  des TEXT,
  combo1 INT,
  eff1 TEXT,
  combo2 INT,
  eff2 TEXT,
  comb3 INT,
  eff3 TEXT 
)