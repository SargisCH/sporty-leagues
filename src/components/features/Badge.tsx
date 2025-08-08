import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Spinner } from "../ui/spinner";

type Props = {
  strLeague: string;
  strBadge: string;
  isOpen: boolean;
  isLoading: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function Badge({
  strLeague,
  strBadge,
  isLoading,
  isOpen,
  setIsOpen,
}: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="min-h-[300px]" showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>{strLeague}</DialogTitle>
          <DialogDescription>
            {isLoading ? (
              <Spinner size="large" className="mt-4" />
            ) : strBadge === null ? (
              "No badge provided for this leage"
            ) : (
              <img src={strBadge} alt={`${strLeague} badge`} />
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
