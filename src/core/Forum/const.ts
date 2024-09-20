
/** 
 * @NOTE /forum currently works on static information to then grab the database
 * @TODO figure a way to make dynamic categorys a thing
 */
export const forum_sections = [
  "General",
];

export interface forum_sections_details {
  slug: string;
  title: string;
  description: string;
};

export const forum_sections_details: forum_sections_details[] = [
  {
    slug: forum_sections[0].toLocaleLowerCase(),
    title: forum_sections[0],
    description: "General Forum Posts",
  },
];
