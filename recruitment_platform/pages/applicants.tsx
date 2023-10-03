import { promises as fs } from 'fs';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import path from 'path';
import { z } from 'zod';

import { columns } from '@/components/columns';
import { DataTable } from '@/components/data-table';
import { UserNav } from '@/components/user-nav';
import { taskSchema } from '@/data/schema';

// export const metadata: Metadata = {
//   title: 'Tasks',
//   description: 'A task and issue tracker build using Tanstack Table.',
// };

// Simulate a database read for tasks.
async function getTasks() {
  console.log(process.cwd());
  const data = await fs.readFile(path.join(process.cwd(), '/data/tasks.json'));

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export const getServerSideProps = (async (context) => {
  const tasks = await getTasks();
  return { props: { tasks } };
}) satisfies GetServerSideProps;

export default function TaskPage({
  tasks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}