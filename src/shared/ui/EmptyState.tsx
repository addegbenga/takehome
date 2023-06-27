import Button from "./Button";

interface IEmptyProps {
  header?: string;
  text?: string;
  handleAction?: () => void;
}

export default function EmptyState({
  handleAction,
  header = "What are you looking for?",
  text = "Get started by searching & filtering a few",
}: IEmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center">
      <h1 className="text-2xl font-medium">{header}</h1>
      <p className="text-sm text-accent-200">{text}</p>
      <Button
        variant="secondary"
        className="px-6 mt-3 w-fit"
        onClick={handleAction}
      >
        Fetch Data
      </Button>
    </div>
  );
}
