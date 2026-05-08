const fishFish = {
  slug: 'fish-fish',
  category: '3D ANIMATION, INTERACTIVE WEARABLE',
  title: 'Fish Fish',
  url: 'https://drive.google.com/file/d/1ySE7Y8FOeQ1_UyidUt-TWRlNJYZ9erqF/view',
  heroImage: '/Fish/Fish Scene rendered vid0000.webp',
  heroNatural: true,
  lockMuted: true,
  intro: [
    'During the summer of 2025, I created an animation displaying a main scene of wolves and rabbits, and additional scenes of bark, grass, and fur.',
    'Through connecting the projected animation to pressure sensors, users are able to command which scene is displayed.',
  ],
  meta: {
    role: 'Interaction Design\n3D Animation',
    timeline: 'Summer 2025',
    team: 'Solo',
    tools: 'Cinema 4D\nHoudini\nRedshift Render\nArduino, 3D Fabrication',
  },
  body: [
    { type: 'row', items: [{ src: '/Fish/1 1.webp' }, { src: '/Fish/1 2.webp' }] },
    { type: 'row', items: [{ src: '/Fish/2 1.webp' }, { src: '/Fish/2 2.webp' }] },
    { type: 'row', items: [{ src: '/Fish/3 1.webp' }, { src: '/Fish/3 2.webp' }] },
    { type: 'label', text: 'BUILDING THE SCENE' },
    { type: 'image', src: '/Fish/4.webp' },
    { type: 'image', src: '/Fish/5.webp' },
    { type: 'image', src: '/Fish/6.webp' },
    { type: 'label', text: 'LIQUID SIMULATION' },
    {
      type: 'text',
      columns: [
        'Audiences travel through the scene through camera movement, including: forward, backwards, left, and right through the arrow keys, up through keyboard "R", down through keyboard "T", rotate on axis— left through keyboard "K" and right through keyboard "L".',
        'As audience moves, through serial communication between Unity and Arduino, movement triggers airbag behavior.',
      ],
    },
    { type: 'image', src: '/Fish/7.webp' },
    { type: 'image', src: '/Fish/8.webp' },
    { type: 'label', text: 'INFLATABLE STRUCTURE AND SYSTEM' },
    {
      type: 'richtext',
      columns: [
        'Final model makes use of TPU, an alternative soft material for creating sealed airbags connected through pc4-M3 pneumatic connectors.',
        [
          { text: 'Acrylic sheets were further attached to these soft-material airbags for visual purposes, displaying the vibratory movement.\n\nDetailed project experiments can be viewed ' },
          { text: 'here', href: 'https://drive.google.com/file/d/1ySE7Y8FOeQ1_UyidUt-TWRlNJYZ9erqF/view', underline: true },
          { text: '↗', href: 'https://drive.google.com/file/d/1ySE7Y8FOeQ1_UyidUt-TWRlNJYZ9erqF/view', green: true },
          { text: ', including: the interaction flow, the construction of the digital scene, silicone experiments, TPU pneumatic airbags, neck device securing system, pneumatic system, and the communication protocol between Unity and Arduino.' },
        ],
      ],
    },
    { type: 'video', src: '/Fish/9.mp4' },
  ],
};

export default fishFish;
