export function generateTestChats(length: number) {
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
    'Ich Traf dich',
    'Das war ein persönliches gespräch',
    'Top!',
    'Wir Gendern ja alle bald',
    'Willst du ficken?',
  ]

  for (let i = 0; i < length; i++) {
    out.push({
      user: `${random(forNames)} ${random(lastNames)}`,
      lastMSG: random(lastMSG),
    });
  }
  return out;
}


function random(arr: any[]): any {
  return arr[Math.floor(Math.random() * arr.length)];
}