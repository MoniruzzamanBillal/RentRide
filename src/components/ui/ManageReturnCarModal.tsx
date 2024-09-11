import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";
import { Button } from "./button";

type TReturnCarProps = {
  handleReturnCar: (id: string) => void;
  id: string;
};

const ManageReturnCarModal = ({ handleReturnCar, id }: TReturnCarProps) => {
  return (
    <div className="ManageReturnCarModalContainer">
      <AlertDialog>
        {/* alert trigger  */}
        <AlertDialogTrigger asChild>
          <Button className=" px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-red-500 hover:bg-red-600 active:scale-95 duration-500 ">
            Return car
          </Button>
        </AlertDialogTrigger>

        {/* alert content  */}
        <AlertDialogContent>
          {/* header and content type  */}
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely sure to return the car ?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will return the car.
            </AlertDialogDescription>
          </AlertDialogHeader>

          {/* bottom button type  */}
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleReturnCar(id)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ManageReturnCarModal;
