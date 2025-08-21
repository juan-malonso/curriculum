export type Section = {
  id: string;
  type: string;
  title: string;
  content: any[];
};

class ContentProvider {
  constructor() {}

  async getSections(db: D1Database) {
    const { results } = await db
      .prepare('SELECT * FROM profile_sections')
      .all();

    return results.map((row: any) => ({}));
  }
}

export const contentProvider = new ContentProvider();
