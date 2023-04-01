export function generateTestUsers(length: number) {
  const out = [];
  const forNames = [
    'Bjarne',
    'Dave',
    'Jan',
    'Max',
    'John',
    'Sebastian',
    'Naddi',
    'Kurt',
    'Harry',
    'Philipp',
    'Steffan',
    'Arndt',
    'Jessy',
    'Ash',
    'Xi',
    'Franz Josef',
    'Franz',
    'Eric',
    'Jeff',
    'Klaus',
    'Jay',
    'Johann'
  ];
  const lastNames = [
    'Hetz',
    'der Vierte',
    'Voigtländer',
    'Weinardy',
    'Walenda',
    'Deter',
    'Doe',
    'Löhr',
    'Teufel',
    'Cobain',
    'Styles',
    'Scheffler',
    'Weitenauer',
    'Bögeholz',
    'Cock',
    'Horst',
    'Yeou',
    'Xing',
    'Arbeitsloser',
    'Kling',
    'Müller',
    'Dragqueen',
    'Clapton',
    'Van Helsing',
    'Koro',
    'Cartman',
    'Kalifornien',
    'Murdock'
  ];

  const lastMSG: string[] = [
    'Ich Traf dich'
  ]

  for (let i = 0; i < length; i++) {
    const randomForName = forNames[Math.floor(Math.random() * forNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    out.push({
      user: `${randomForName} ${randomLastName}`,
    });
  }
  return out;
}
