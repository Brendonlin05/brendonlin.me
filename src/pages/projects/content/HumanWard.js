const humanWard = {
  slug: 'human-ward',
  category: '3D ANIMATION',
  title: 'Humanward',
  url: '',
  heroImage: '/humanward/header crop.webp',
  heroNatural: true,
  intro: [
    'During the summer of 2023, as a conclusion to my AP Art Portfolio, I created an animation that extracted the animal forms from my portfolio, which each represented one of my fourteen elements to the human soul.',
    'I arranged them in a scroll-like composition and simulated continuous water flowing across the scene, connecting and uniting each element of the human soul.',
  ],
  meta: {
    role: '3D Animation',
    timeline: 'Summer 2023',
    team: 'Solo',
    tools: 'Cinema 4D\nHoudini\nRedshift Render',
  },
  body: [
    { type: 'row', items: [{ src: '/humanward/1 1.webp' }, { src: '/humanward/1 2.webp' }] },
    { type: 'row', items: [{ src: '/humanward/2 1.webp' }, { src: '/humanward/2 2.webp' }] },
    { type: 'row', items: [{ src: '/humanward/3 1.webp' }, { src: '/humanward/3 2.webp' }] },
    { type: 'row', items: [{ src: '/humanward/4 1.webp' }, { src: '/humanward/4 2.webp' }] },
    { type: 'row', items: [{ src: '/humanward/5 1.webp' }, { src: '/humanward/5 2.webp' }] },
    { type: 'label', text: 'SELECTED SCENES' },
    {
      type: 'text',
      columns: [
        'The animation began with storyboarding. Each asset was modeled in Cinema 4D, then exported to Houdini where they were resized, normalized, and re-meshed.',
        'Then, through Houdini, particles were simulated from an emitter following a drawn curve with popnet DOP Network, then meshed together to form water droplets. After UV wrapping, animation was rendered as a final image sequence.',
      ],
    },
    { type: 'image', src: '/humanward/6.webp' },
  ],
};

export default humanWard;
