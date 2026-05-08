const airportCheckin = {
  slug: 'airport-checkin',
  category: 'USER EXPERIENCE',
  title: 'Airport Check-In Redesign',
  url: '',
  heroImage: '/Airport/Header.webp',
  intro: [
    'This project was inspired by my own experience using airport self check-in kiosks. Inherently, these self check-in kiosks promote speed but embedded upselling opportunities that are intentionally ambiguous and cluttered interfaces interrupt the effort to check in and get going.\n\nThis combination of urgency in the airport environment, messy interface, and intentional ambiguity turns the process into a stressful experience.',
    'This redesign responds by stripping the user flow back to the necessary steps, guiding the process through clear, simple yes/no decisions, and streamlining the experience through improved flow to skip steps whenever possible.\n\nThrough components and type system, the interface reduces noise. It also introduces structured spaces for embedded branding, allowing airlines to apply logos, travel campaign backgrounds, and custom icons.',
  ],
  meta: {
    role: 'Interaction Design\nUser Interface',
    timeline: 'April 2025',
    team: 'Solo',
    tools: 'Figma',
  },
  body: [
    { type: 'image', src: '/Airport/1.webp' },
    { type: 'image', src: '/Airport/2.webp' },
    { type: 'image', src: '/Airport/3.webp' },
    { type: 'label', text: 'LANDING' },
    {
      type: 'text',
      columns: [
        'The experience begins with a friendly, welcoming landing prompt and clearly defined spaces in the nav and the background for airline branding. This mockup features Starlux, a Taiwanese airline, paired with imagery from Taiwan\'s Alishan, supporting location-specific kiosk experiences.',
        'The system supports multiple languages, ensuring accessibility and ease of use for a diverse range of travelers.',
      ],
    },
    { type: 'image', src: '/Airport/4.webp' },
    { type: 'label', text: 'CHECK IN PROMPT' },
    {
      type: 'text',
      columns: [
        'The check-in prompt marks first fork in user experience, allowing a more streamlined flow by skipping unnecessary steps if the user is already checked-in.',
        'Through filtering out unnecessary steps, the improved design avoids overwhelming users with information for a faster, more efficient check-in.',
      ],
    },
    { type: 'image', src: '/Airport/5.webp' },
    { type: 'image', src: '/Airport/6.webp' },
    {
      type: 'text',
      columns: [
        'The help button is sticky and remains throughout the experience, allowing users to quickly receive help with technical issues, confusion, or to restart at any point without leaving the kiosk.',
      ],
    },
    { type: 'image', src: '/Airport/7.webp' },
    { type: 'label', text: 'BOOKING CONFIRMATION' },
    { type: 'image', src: '/Airport/8.webp' },
    { type: 'label', text: 'SEATING CONFIRMATION' },
    {
      type: 'text',
      columns: [
        'The seating confirmation step uses a simplified seat map with clear color-coded keys to communicate options at a glance.',
        'It still represents opportunities for airline upselling, but presents additional costs transparently, avoiding ambiguity or pressure.',
      ],
    },
    { type: 'image', src: '/Airport/9.webp' },
    { type: 'image', src: '/Airport/10.webp' },
  ],
};

export default airportCheckin;
