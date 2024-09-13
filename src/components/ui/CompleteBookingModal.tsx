//

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

type TCompleteUserBookingModal = {
  handleCompleteBooking: (id: string) => void;
  id: string;
};

const CompleteBookingModal = ({
  handleCompleteBooking,
  id,
}: TCompleteUserBookingModal) => {
  return (
    <div className={`  `}>
      {/* approve btn  */}
      <AlertDialog>
        {/* alert trigger  */}
        <AlertDialogTrigger asChild>
          <Button className="  bg-green-600 hover:bg-green-700 ">
            Complete Booking
          </Button>
        </AlertDialogTrigger>

        {/* alert content  */}
        <AlertDialogContent>
          {/* header and content type  */}
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely sure to Complete booking ?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will redirect to Complete
              booking page.
            </AlertDialogDescription>
          </AlertDialogHeader>

          {/* bottom button type  */}
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleCompleteBooking(id)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/* approve btn  */}

      {/*  cancel btn  */}

      {/*  */}
    </div>
  );
};

export default CompleteBookingModal;
