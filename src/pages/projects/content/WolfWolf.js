const wolfWolf = {
  slug: 'wolf-wolf',
  category: '3D ANIMATION, INTERACTIVE INSTALLATION',
  title: 'Wolf Wolf',
  url: '',
  heroImage: '/Wolf/wolf header.webp',
  heroNatural: true,
  lockMuted: true,
  intro: [
    'During the summer of 2025, I created an animation displaying a main scene of wolves and rabbits, and additional scenes of bark, grass, and fur.',
    'Through connecting the projected animation to pressure sensors, users are able to command which scene is displayed.',
  ],
  meta: {
    role: '3D Animation',
    timeline: 'Summer 2025',
    team: 'Solo',
    tools: 'Cinema 4D\nHoudini\nArduino',
  },
  body: [
    { type: 'image', src: '/Wolf/1.webp' },
    { type: 'row', items: [{ src: '/Wolf/2 1.webp' }, { src: '/Wolf/2 2.webp' }] },
    { type: 'image', src: '/Wolf/3.webp' },
    { type: 'label', text: 'SELECTED SCENES' },
    { type: 'video', src: '/Wolf/4.mp4' },
    { type: 'video', src: '/Wolf/projection.mp4' },
    { type: 'label', text: 'FINAL COMPOSITE' },
    {
      type: 'text',
      columns: [
        'Pressing on a soft, furry plate switches the scene to wolf fur. Pressing on a plate with shorter, coarse fur switches the scene to grass and pressing on a rough plate switches the scene to tree bark.',
        'The main scene of wolves and rabbits was created through modeling and rendering in Cinema 4D.\n\nThe scenes for grass, fur, and bark were created in Houdini through vellumhair solvers, clumping, and wind forces. Each scene was rendered as a final image sequence.',
      ],
    },
    { type: 'row', items: [{ src: '/Wolf/5 1.webp' }, { src: '/Wolf/5 2.webp' }] },
        { type: 'row', items: [{ src: '/Wolf/6 1.webp' }, { src: '/Wolf/6 2.webp' }] },
    { type: 'image', src: '/Wolf/7.webp' },
    { type: 'row', items: [{ src: '/Wolf/7 1.mp4' }, { src: '/Wolf/7 2.mp4' }] },
    { type: 'video', src: '/Wolf/8.mp4' },
    { type: 'video', src: '/Wolf/9.mp4' },
  ],
};

export default wolfWolf;
