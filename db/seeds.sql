INSERT INTO departments (name, description)
VALUES
  ('JS Juggernauts', 'The JS Juggernauts eat, breathe, and sleep JavaScript. They can build everything you could ever want in JS, including a new kitchen sink.'),
  ('Heroes of HTML', 'Want to see a mock-up turn into an actual webpage in a matter of minutes? Well, the Heroes of HTML can get it done in a matter of seconds.'),
  ('Git Gurus', 'Need to resolve a merge conflict? The Git Gurus have your back. Nobody knows Git like these folks do.');

INSERT INTO employees (first_name, last_name, department_id, industry_connected)
VALUES
  ('Ronaldo', 'Firebank', 1, 1),
  ('Virgin', 'Wulf', 1, 1),
  ('Pire', 'Gavin', 1, 0),
  ('Charles', 'Rilley', 2, 1),
  ('Katherine', 'Mansfield', 2, 1),
  ('Doho', 'Carrin', 3, 0),
  ('Edwardo', 'Bella', 3, 0),
  ('Monte', 'Summerstone', 3, 1),
  ('Octava', 'Butta', 3, 1),
  ('Unum', 'Zurin', NULL, 1);