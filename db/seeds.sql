INSERT INTO department ( name)
VALUES
  ('finance'),
  ('Lawyer'),
  ('IT'),
  ('Security'),
  ('Software Engineering'),
  ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES 
('IT', 70000, 3), 
('Lawyer', 60000, 2), 
('Sales Associate', 10000, 6), 
('Finance', 120000, 1), 
('Security', 120000, 4),
('Software Engineering', 80000, 5),
('Intern', 20000, 6);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronaldo', 'Firebank', 4, NULL),
  ('Virginia', 'Woolf', 1, 2),
  ('Piers', 'Gaveston', 2, 1),
  ('Charles', 'LeRoi', 1, 3),
  ('Katherine', 'Mansfield', 1, 1),
  ('Dora', 'Carrington', 2, 4),
  ('Edward', 'Bellamy', 2, 2);
  

