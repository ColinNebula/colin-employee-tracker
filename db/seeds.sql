INSERT INTO departments (name, description)
VALUES
  ('JS Juggernauts', 'The JS Juggernauts eat, breathe, and sleep JavaScript. They can build everything you could ever want in JS, including a new kitchen sink.'),
  ('Heroes of HTML', 'Want to see a mock-up turn into an actual webpage in a matter of minutes? Well, the Heroes of HTML can get it done in a matter of seconds.'),
  ('Git Gurus', 'Need to resolve a merge conflict? The Git Gurus have your back. Nobody knows Git like these folks do.');

INSERT INTO Managers (first_name, last_name, department_id)
VALUES
  ('Ronaldo', 'Firebank', 1, 1, Manager),
  ('Virgin', 'Wulf', 1, 1, Manager),
  ('Pire', 'Gavin', 1, 0, Manager),
  ('Charles', 'Rilley', 2, 1, Manager),
  ('Katherine', 'Mansfield', 2, 1, Manager),
  ('Doho', 'Carrin', 3, 0, Manager),
  ('Edwardo', 'Bella', 3, 0, Manager),
  ('Monte', 'Summerstone', 3, 1, Manager),
  ('Octava', 'Butta', 3, 1, Manager),
  ('Unum', 'Zurin', NULL, 1, Manager);

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
  ('Arthur', 'Machen', 'amach@spirits.com')