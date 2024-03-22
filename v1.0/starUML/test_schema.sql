SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS natDex;
DROP TABLE IF EXISTS vitals;
DROP TABLE IF EXISTS baseStats;
DROP TABLE IF EXISTS breedingData;
-- DROP TABLE IF EXISTS megaForms;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE natDex (
    natDex INTEGER(4) NOT NULL,
    name VARCHAR(12) NOT NULL,
    PRIMARY KEY (natDex)
);

CREATE TABLE vitals (
    natDex INTEGER(4) NOT NULL,
    type1 VARCHAR(8) NOT NULL,
    type2 VARCHAR(8),
    species VARCHAR(30) NOT NULL,
    height DECIMAL(5, 2) NOT NULL,
    weight DECIMAL(5, 2) NOT NULL,
    ability1 VARCHAR(30) NOT NULL,
    ability2 VARCHAR(30),
    abilityHidden VARCHAR(30)
);

CREATE TABLE baseStats (
    natDex INTEGER(4) NOT NULL,
    HP INTEGER(3) NOT NULL,
    Attack INTEGER(3) NOT NULL,
    Defense INTEGER(3) NOT NULL,
    SpAtk INTEGER(3) NOT NULL,
    SpDef INTEGER(3) NOT NULL,
    Speed INTEGER(3) NOT NULL,
    Total INTEGER(4) NOT NULL
);

CREATE TABLE breedingData (
    natDex INTEGER(4) NOT NULL,
    eggGroup1 VARCHAR(12) NOT NULL,
    eggGroup2 VARCHAR(12) NOT NULL,
    percentMale DECIMAL(3, 1) NOT NULL,
    percentFemale DECIMAL(3, 1) NOT NULL,
    eggCycles INTEGER(3) NOT NULL
);

--CREATE TABLE megaForms (
--    natDex INTEGER(4) NOT NULL,
--    verName1 VARCHAR(30) NOT NULL,
--    verName2 VARCHAR(30) NOT NULL,
--    PRIMARY KEY (natDex, verName1, verName2)
--);