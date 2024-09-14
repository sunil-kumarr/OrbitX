import { Button } from '@orbitx/shared';

export default async function Index() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-slate-600">
      <h1 className="text-6xl text-white">Hello World 2</h1>
      <Button variant={'default'}> Shared button</Button>
    </div>
  );
}