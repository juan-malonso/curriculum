import { CollapsableList, DataType } from '@/components';

import { Link, Title, TitleType } from '@/elements';
import { Color, Element, getColor } from '@/utils';

export default function Home() {
  const bgDark = getColor(Color.LIGHT, Element.BACKGROUND);
  2;
  return (
    <main>
      <Title>Juan Martinez Alonso</Title>
      <Title type={TitleType.H3}>BACKEND & CLOUD ENGINEER</Title>

      <div className="h-20" />

      <CollapsableList
        color={Color.BLUE}
        items={[
          {
            title: 'Summary',
            content: [
              {
                type: DataType.TEXT,
                text: `
                  Backend & Cloud Engineer with 5 years of experience designing,
                  developing, and maintaining solutions on AWS, combining backend
                  development in Go and Node.js with strong expertise in cloud
                  architecture.
                `,
              },
              {
                type: DataType.TEXT,
                text: `
                  Comfortable designing and implementing APIs, improving CI/CD
                  pipelines, and collaborating on multi-region deployments. Also
                  contribute to projects aimed at standardizing IaC
                  infrastructures, optimizing resources, and enhancing
                  observability using tools such as Prometheus and CloudWatch.
                  Passionate about learning new technologies and working in teams
                  to deliver reliable, secure, and maintainable solutions.
                `,
              },
            ],
          },
          {
            title: 'Contact',
            content: [
              {
                type: DataType.OBJECT,
                object: {
                  Email: 'juan.martinez.alons@gmail.com',
                  LinkedId: (
                    <Link
                      label={'Juan Martinez'}
                      link={
                        'https://www.linkedin.com/in/juan-martinez-41a4261a9'
                      }
                    ></Link>
                  ),
                  Github: (
                    <Link
                      label={'Juan Malonso'}
                      link={'https://github.com/juan-malonso'}
                    ></Link>
                  ),
                },
              },
            ],
          },
          {
            title: 'Tech Stack',
            content: [
              {
                type: DataType.OBJECT,
                object: {
                  'Languages & Frameworks': `
                    Go,
                    TypeScript (NextJS, NestJS),
                    JavaScript,
                    Java (Spring Boot),
                    Python,
                    C.
                  `,
                  Cloud: `
                    AWS (Lambda, ECS, EKS, ECR, DynamoDB, RDS, S3, SQS, Api
                    Gateway, EventBridge, Step Functions, IAM, VPC, Route53,
                    Secret Manager),
                    Cloudflare (Workers, Durable Objects, KV, D1, R2).
                  `,
                  Containers: `
                    Docker,
                    Kubernetes,
                    Helm,
                    ArgoCD,
                    Karpenter.
                  `,
                  'CI/CD': `
                    Terraform / Terraform Cloud,
                    GitHub Actions.
                  `,
                  Observability: `
                    OTEL + Prometheus,
                    CloudWatch (AWS).
                  `,
                  Databases: `
                    SQL (PostgreSQL, MySQL),
                    NoSQL (DynamoDB (AWS), KV (CloudFlare), Redis).
                  `,
                },
              },
            ],
          },
          {
            title: 'Personal Projects',
            content: [
              {
                type: DataType.BULLET_LIST,
                color: Color.TEAL,
                items: [
                  {
                    date: '2025',
                    title: 'Cloudflare My Site Web',
                    subtitle: 'https://github.com/juan-malonso/curriculum',
                    body: [
                      {
                        type: DataType.TEXT,
                        text: `
                          Cloudflare-first Next.js portfolio: edge-cached for
                          global speed, simple, and low-maintenance.
                        `,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ]}
      />

      <div className="h-64" />
    </main>
  );
}
