import { CollapsibleItem } from '@/components/collapsable/Collapsable';
import { BulletList } from '@/components/list/List';
import { TitleH1, TitleH2, TitleH3 } from '@/components/title/Title';
import { Color } from '@/utils/Color';
import g from '@/utils/Glossary';

export default function Home() {
  return (
    <main>
      <div className="h-64" />

      <TitleH1>James Carter</TitleH1>

      <div className="h-8" />

      <BulletList>
        <CollapsibleItem title="Contact">
          <div className="p-4">
            <div>
              <strong>Email:</strong>
              <span>3tK8R@example.com</span>
            </div>
            <div>
              <strong>Phone:</strong>
              <span>123-456-7890</span>
            </div>
            <div>
              <strong>Location:</strong>
              <span>San Francisco, CA</span>
            </div>
          </div>
        </CollapsibleItem>
        <CollapsibleItem title="Skills">
          <div className="p-4">
            <div>
              <strong>Languages:</strong>
              <span>{g('TypeScript, JavaScript, Python, SQL')}</span>
            </div>
            <div>
              <strong>Frameworks:</strong>
              <span>{g('React, Next.js, Node.js, NestJS, Express')}</span>
            </div>
            <div>
              <strong>Databases:</strong>
              <span>{g('PostgreSQL, MongoDB, Redis')}</span>
            </div>
            <div>
              <strong>DevOps:</strong>
              <span>
                {g('Docker, GitHub Actions, AWS (EC2, S3, RDS), Vercel')}
              </span>
            </div>
            <div>
              <strong>Tools:</strong>
              <span>{g('Git, Jira, Figma, Postman')}</span>
            </div>
            <div>
              <strong>Soft Skills:</strong>
              <span>
                {g(
                  'Team leadership, code reviews, mentorship, agile workflows',
                )}
              </span>
            </div>
          </div>
        </CollapsibleItem>
        <CollapsibleItem title="Summary">
          <div className="p-4">
            {g(`
              Software engineer with 5+ years of experience specializing in web
              development and scalable backend systems. Passionate about clean
              code, TypeScript, and building efficient solutions. Experienced in
              both startups and enterprise environments.
            `)}
          </div>
        </CollapsibleItem>
        <CollapsibleItem title="Experience">
          <BulletList color={Color.GRAY} className="p-4">
            {[
              {
                dates: 'Aug 2021 – Present',
                company: 'NovaTech-Solutions',
                location: 'Madrid',
                role: 'Software Engineer',
                summary: `
                  Led migration from AngularJS to React + TypeScript for internal dashboards.
                  Designed and deployed microservices in Node.js (NestJS) and PostgreSQL on AWS.
                  Reduced CI/CD deployment time by 40% using GitHub Actions and Docker.
                  Mentored 3 junior developers.
                `,
              },
              {
                dates: 'Jul 2019 – Jul 2021',
                company: 'ByteForge Inc.',
                location: 'Remote',
                role: 'Software Engineer',
                summary: `
                  Developed internal tools and APIs using Express, MongoDB, and TypeScript.
                  Created real-time collaboration features using WebSockets and Redis.
                  Integrated Stripe and Auth0 into client projects.
                  Participated in Agile/Scrum ceremonies and sprint planning.
                `,
              },
            ].map(({ dates, company, location, role, summary }, index) => (
              <div key={index}>
                <div className="font-bold">
                  {g([dates, company].filter(Boolean).join(' | '))}
                </div>
                <div className="font-normal">
                  {g([location, role].filter(Boolean).join(' | '))}
                </div>
                <div className="p-2">{g(summary)}</div>
              </div>
            ))}
          </BulletList>
        </CollapsibleItem>
        <CollapsibleItem title="Personal Projects">
          <BulletList color={Color.GRAY} className="p-4">
            {[
              {
                dates: '',
                proyect: 'DevBoard',
                area: 'FullStack',
                summary: `
                  Task board app built with React, Zustand, and Firebase.
                `,
              },
              {
                dates: '',
                proyect: 'CodeShare',
                area: 'Frontend',
                summary: `
                  Real-time code editor with WebRTC and Monaco Editor.
                `,
              },
              {
                dates: '',
                proyect: 'Daily.Dev Clone',
                area: 'Frontend',
                summary: `
                  News aggregator using Next.js and RSS parsing.
                `,
              },
            ].map(({ dates, proyect, area, summary }, index) => (
              <div key={index}>
                <div className="font-bold">
                  {g([dates, proyect, area].filter(Boolean).join(' | '))}
                </div>
                <div className="font-normal">
                  {g([summary].filter(Boolean).join(' | '))}
                </div>
              </div>
            ))}
          </BulletList>
        </CollapsibleItem>
        <CollapsibleItem title="Education">
          <BulletList color={Color.GRAY} className="p-4">
            {[
              {
                dates: 'Sep 2018 – May 2022',
                center: 'UAM',
                location: 'Madrid',
                degree: 'Computer Science Engineer',
              },
            ].map(({ dates, center, location, degree }, index) => (
              <div key={index}>
                <div className="font-bold">
                  {g([dates, center].filter(Boolean).join(' | '))}
                </div>
                <div className="font-normal">
                  {g([location, degree].filter(Boolean).join(' | '))}
                </div>
              </div>
            ))}
          </BulletList>
        </CollapsibleItem>
      </BulletList>
      <div className="h-64" />
    </main>
  );
}
