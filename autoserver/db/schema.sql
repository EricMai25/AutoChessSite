DROP TABLE pieces;
DROP TABLE species;
DROP TABLE class;


CREATE TABLE species(
  id SERIAL NOT NULL PRIMARY KEY,
  name TEXT,
  des TEXT,
  ename TEXT,
  com1 INT,
  eff1 TEXT,
  com2 INT,
  eff2 TEXT,
  com3 INT,
  eff3 TEXT
);

CREATE TABLE class(
  id INT NOT NULL PRIMARY KEY,
  name TEXT,
  des TEXT,
  ename TEXT,
  com1 INT,
  eff1 TEXT,
  com2 INT,
  eff2 TEXT,
  com3 INT,
  eff3 TEXT 
);

CREATE TABLE pieces(
  id SERIAL NOT NULL PRIMARY KEY,
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
  atk1 TEXT,
  atk2 TEXT,
  atk3 TEXT,
  atkRate INT,
  atkRange INT
);

CREATE INDEX pieces_name ON pieces(name);
CREATE INDEX species_id ON species(id);
CREATE INDEX class_id ON class(id);