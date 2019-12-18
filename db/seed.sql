-- seed is used to prepopulate the table

--add department
INSERT INTO department (name)
VALUES ("Human Resources"), ("R&D"), ("Engineering"), ("Accounting"), ("Sales");

-- add role
INSERT INTO role (title, salary, department_id)
VALUE ("manager", 75000.00, 2), ("engineer", 52000, 3), ("accountant", 62500, 4), ("recruiter", 57500, 1), ("sales person", 85650, 5);

--add employee
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("John", "Smith", )