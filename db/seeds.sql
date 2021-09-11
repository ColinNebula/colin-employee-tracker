INSERT INTO departments (name, description)
VALUES
  ('finance'),
  ('Lawyer'),
  ('IT'),
  ('Security'),
  ('Engineering'),
  ('Sales');

INSERT INTO employees (first_name, last_name, department, industry_connected)
VALUES
  ('Ronaldo', 'Firebank', 'Finance', 1),
  ('Virgin', 'Wulf', 'Sales', 1),
  ('Pire', 'Gavin', 'IT', 0),
  ('Charles', 'Rilley', 'IT', 1),
  ('Katherine', 'Mansfield', 'security', 2),
  ('Doho', 'Carrin', 'Lawyer', 3),
  ('Edwardo', 'Bella', 'Engineering', 0),
  ('Monte', 'Summerstone', 'Sales', 3),
  ('Octava', 'Butta', 'Engineering', 1),
  ('Unum', 'Zurin', 'Sales', 1),
  ('Samuel', 'Delany', 'Engineering', 3),
  ('Tony', 'Duvert', 'Lawyer', 2),
  ('Dennis', 'Cooper', 'IT', 1),
  ('Monica', 'Bellucci', 'IT', 3),
  ('Samuel', 'Johnson', 'Security', 1),
  ('John', 'Dryden', 'IT', 2),
  ('Alexander', 'Pope', 'Security',  1),
  ('Lionel', 'Johnson', 'Sales', 3),
  ('Aubrey', 'Beardsley', 'Sales', 0),
  ('Tulsa', 'Luper', 'Finance', 1),
  ('William', 'Morris', 'Finance', 0),
  ('George', 'Shaw', 'Sales', 1),
  ('Arnold', 'Bennett', 'Lawyer', 1),
  ('Algernon', 'Blackwood', 'IT', 3),
  ('Rhoda', 'Broughton', 'IT', 1),
  ('Hart', 'Crane', 'Sales', 3),
  ('Vitorio', 'DeSica', 'Security', 0),
  ('waller', 'Hector', 'Engineering', 3),
  ('Elizabeth', 'Gaskell', 'Sales', 1),
  ('George', 'Sand', 'Engineering', 3),
  ('Vernon', 'Lee', 'Lawyer', 1),
  ('Arthur', 'Machen', 'Security', 2);



INSERT INTO managers (first_name, last_name, title, department, salary)
VALUES
  ('Ben', 'Robby', 'manager', 'finance', '125.000'),
  ('Jackson', 'Lambert', 'manager', 'it', '87.000'),
  ('Rob', 'Bogata', 'manager', 'engineering', '90.000'),
  ('Pablo', 'Talbert', 'manager', 'lawyer', '80.000'),
  ('Dan', 'Anton', 'manager', 'sales', '50.000'),
  ('Author', 'Morgan', 'manager', 'security', '60.000');