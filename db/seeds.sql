INSERT INTO department ( name, description)
VALUES
  ('finance', 'Handles the finacial part of the company'),
  ('Lawyer', 'The companys leagal team'),
  ('IT', 'The companys IT pros'),
  ('Security', 'Team always ready'),
  ('Software Engineering', 'Software Engineering team'),
  ('Sales', 'The companys sales team');

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
  ('Ronaldo', 'Firebank', 4, NULL);
  

