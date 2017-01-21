-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2016-10-02 16:42:06.443

-- tables
-- Table: Employee
CREATE TABLE Employee (
    employee_id integer  NOT NULL,
    name varchar2(255)  NULL,
    department_id integer  NULL,
    CONSTRAINT Employee_pk PRIMARY KEY (employee_id)
) ;

-- Table: Images
CREATE TABLE Images (
    images_id integer  NOT NULL,
    image_1 blob  NULL,
    image_2 blob  NOT NULL,
    image_3 blob  NOT NULL,
    CONSTRAINT Images_pk PRIMARY KEY (images_id)
) ;

-- Table: Item
CREATE TABLE Item (
    item_id integer  NOT NULL,
    location varchar2(255)  NULL,
    category varchar2(255)  NOT NULL,
    location_id integer  NULL,
    amazon_id integer  NOT NULL,
    extra varchar2(1000)  NOT NULL,
    images_id integer  NOT NULL,
    employee_id integer  NOT NULL,
    timetable_id integer  NOT NULL,
    CONSTRAINT Item_pk PRIMARY KEY (item_id)
) ;

-- Table: Location
CREATE TABLE Location (
    location_id integer  NOT NULL,
    name varchar2(255)  NULL,
    GPS varchar2(255)  NULL,
    address varchar2(255)  NULL,
    CONSTRAINT location_id PRIMARY KEY (location_id)
) ;

-- Table: Person
CREATE TABLE Person (
    amazon_id integer  NOT NULL,
    name varchar2(255)  NULL,
    address varchar2(255)  NOT NULL,
    payment varchar2(255)  NOT NULL,
    email varchar2(255)  NULL,
    CONSTRAINT Person_pk PRIMARY KEY (amazon_id)
) ;

-- Table: Timetable
CREATE TABLE Timetable (
    timetable_id integer  NOT NULL,
    found timestamp  NULL,
    claimed timestamp  NOT NULL,
    shipped timestamp  NOT NULL,
    archived timestamp  NOT NULL,
    donated timestamp  NOT NULL,
    discarded timestamp  NOT NULL,
    CONSTRAINT Timetable_pk PRIMARY KEY (timetable_id)
) ;

-- foreign keys
-- Reference: Item_Employee (table: Item)
ALTER TABLE Item ADD CONSTRAINT Item_Employee
    FOREIGN KEY (employee_id)
    REFERENCES Employee (employee_id);

-- Reference: Item_Images (table: Item)
ALTER TABLE Item ADD CONSTRAINT Item_Images
    FOREIGN KEY (images_id)
    REFERENCES Images (images_id);

-- Reference: Item_Location (table: Item)
ALTER TABLE Item ADD CONSTRAINT Item_Location
    FOREIGN KEY (location_id)
    REFERENCES Location (location_id);

-- Reference: Item_Person (table: Item)
ALTER TABLE Item ADD CONSTRAINT Item_Person
    FOREIGN KEY (amazon_id)
    REFERENCES Person (amazon_id);

-- Reference: Item_Timetable (table: Item)
ALTER TABLE Item ADD CONSTRAINT Item_Timetable
    FOREIGN KEY (timetable_id)
    REFERENCES Timetable (timetable_id);

-- End of file.

