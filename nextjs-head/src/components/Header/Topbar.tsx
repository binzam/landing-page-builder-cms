export function Topbar({ text }: { text: string }) {
  return (
    <div className="w-full bg-accent py-0.5 h-[30px] flex items-center justify-center bg-accent-1 text-neutral-light text-center px-2 text-sm font-bold">
      <p>{text}</p>
    </div>
  );
}
