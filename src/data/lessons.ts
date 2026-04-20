export interface Lesson {
  num: number;
  slug: string;
  title: string;
}

export const lessons: Lesson[] = [
  { num: 1, slug: '01-the-chaos-tax',            title: 'The Chaos Tax' },
  { num: 2, slug: '02-install-and-init',          title: 'Install & Init' },
  { num: 3, slug: '03-the-exploration',           title: 'The Exploration' },
  { num: 4, slug: '04-the-proposal',              title: 'The Proposal' },
  { num: 5, slug: '05-the-spec',                  title: 'The Spec' },
  { num: 6, slug: '06-the-design-doc',            title: 'The Design Doc' },
  { num: 7, slug: '07-tasks',                     title: 'Tasks' },
  { num: 8, slug: '08-ship-it',                   title: 'Ship It' },
];
