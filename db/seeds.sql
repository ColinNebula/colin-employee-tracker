INSERT INTO departments (name, description)
VALUES
  ('finance'),
  ('Lawyer'),
  ('IT'),
  ('Security'),
  ('Engineering'),
  ('Sales');

INSERT INTO employees (first_name, last_name, department, department_id)
VALUES
  ('Ronaldo', 'Firebank', 'Finance', 1, 1),
  ('Virgin', 'Wulf', 'Sales', 1, 1),
  ('Pire', 'Gavin', 'IT', 1, 0),
  ('Charles', 'Rilley', 'IT', 2, 1),
  ('Katherine', 'Mansfield', 'security', 2, 1),
  ('Doho', 'Carrin', 'Lawyer', 3, 0),
  ('Edwardo', 'Bella', 'Engineering', 3, 0),
  ('Monte', 'Summerstone', 'Sales', 3, 1),
  ('Octava', 'Butta', 'Engineering', 3, 1),
  ('Unum', 'Zurin', 'Sales', NULL, 1),
  ('Samuel', 'Delany', 'Engineering', 1, 3),
  ('Tony', 'Duvert', 'Lawyer', 2, 1),
  ('Dennis', 'Cooper', 'IT', 1, 1),
  ('Monica', 'Bellucci', 'IT', 3, 1),
  ('Samuel', 'Johnson', 'Security', 1, 1),
  ('John', 'Dryden', 'IT', 2, 1),
  ('Alexander', 'Pope', 'Security', 1, 1),
  ('Lionel', 'Johnson', 'Sales', 3, 1),
  ('Aubrey', 'Beardsley', 'Sales', 1, 0),
  ('Tulsa', 'Luper', 'Finance',1, 1),
  ('William', 'Morris', 'Finance', 1, 0),
  ('George', 'Shaw', 'Sales', 2, 1),
  ('Arnold', 'Bennett', 'Lawyer', 1, 1),
  ('Algernon', 'Blackwood', 'IT', 3, 1),
  ('Rhoda', 'Broughton', 'IT', 1, 1),
  ('Hart', 'Crane', 'Sales', 3, 1),
  ('Vitorio', 'DeSica', 'Security', 1, 0),
  ('waller', 'Hector', 'Engineering', 3, 1),
  ('Elizabeth', 'Gaskell', 'Sales', 1, 0),
  ('George', 'Sand', 'Engineering', 3, 1),
  ('Vernon', 'Lee', 'Lawyer', 1, 1),
  ('Arthur', 'Machen', 'Security', NULL, 1);

INSERT INTO associates (first_name, last_name, email)
VALUES
  ('Samuel', 'Delany', 'sdelany@dhalgren.com'),
  ('Tony', 'Duvert', 'tduvert@frenchletters.edu'),
  ('Dennis', 'Cooper', 'dcooper@georgemiles.com'),
  ('Monica', 'Bellucci', 'mbell@irreverisble.net'),
  ('Samuel', 'Johnson', 'sjohnson@boswell.com'),
  ('John', 'Dryden', 'jdryden@restoration.net'),
  ('Alexander', 'Pope', 'apope@cambridge.uk.edu'),
  ('Lionel', 'Johnson', 'ljohnson@darkangel.com'),
  ('Aubrey', 'Beardsley', 'abeardsely@wilde.net'),
  ('Tulse', 'Luper', 'tluper@films.net'),
  ('William', 'Morris', 'wmorris@victoriana.com'),
  ('George', 'Shaw', 'gshaw@labor.uk'),
  ('Arnold', 'Bennett', 'abennett@poemsgalore.com'),
  ('Algernon', 'Blackwood', 'ablack@creepy.net'),
  ('Rhoda', 'Broughton', 'rb@feminist.com'),
  ('Hart', 'Crane', 'hcrane@schwesters.de'),
  ('Vitorio', 'DeSica', 'vdesica@italiano.net'),
  ('Wilkie', 'Collins', 'wcollins@madmonkton.com'),
  ('Elizabeth', 'Gaskell', 'egaskell@pages.net'),
  ('George', 'Sand', 'gsand@pride.com'),
  ('Vernon', 'Lee', 'vlee@spooks.net'),
  ('Arthur', 'Machen', 'amach@spirits.com');


INSERT INTO managers (first_name, last_name, title, department, salary)
VALUES
  ('Ben', 'Robby', 'manager', 'finance', '125.000'),
  ('Jackson', 'Lambert', 'manager', 'it', '87.000'),
  ('Rob', 'Bogata', 'manager', 'engineering', '90.000'),
  ('Pablo', 'Talbert', 'manager', 'lawyer', '80.000'),
  ('Dan', 'Anton', 'manager', 'sales', '50.000'),
  ('Author', 'Morgan', 'manager', 'security', '60.000');