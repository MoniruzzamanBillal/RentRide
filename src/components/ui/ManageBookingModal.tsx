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

type TManageBookingModal = {
  handleApproveBooking: (id: string) => void;
  handleCancelBooking: (id: string) => void;
  id: string;
};

const ManageBookingModal = ({
  handleApproveBooking,
  handleCancelBooking,
  id,
}: TManageBookingModal) => {
  return (
    <div className={`flex gap-x-2  `}>
      {/* approve btn  */}
      <AlertDialog>
        {/* alert trigger  */}
        <AlertDialogTrigger asChild>
          <Button className="  bg-prime50 hover:bg-prime100 ">Approve</Button>
        </AlertDialogTrigger>

        {/* alert content  */}
        <AlertDialogContent>
          {/* header and content type  */}
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely sure to approve booking ?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will approve booking .
            </AlertDialogDescription>
          </AlertDialogHeader>

          {/* bottom button type  */}
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleApproveBooking(id)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/* approve btn  */}

      {/*  cancel btn  */}

      <AlertDialog>
        {/* alert trigger  */}
        <AlertDialogTrigger asChild>
          <Button className="  bg-red-500 hover:bg-red-600 ">Cancel</Button>
        </AlertDialogTrigger>

        {/* alert content  */}
        <AlertDialogContent>
          {/* header and content type  */}
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely sure to cancel booking ?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will cancel booking .
            </AlertDialogDescription>
          </AlertDialogHeader>

          {/* bottom button type  */}
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleCancelBooking(id)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* cancel btn  */}

      {/*  */}
    </div>
  );
};

export default ManageBookingModal;
