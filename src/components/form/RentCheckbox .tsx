import { Controller, useFormContext } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

type TCheckbox = {
  name: string;
  label: string;
};

const RentCheckbox = ({ label, name }: TCheckbox) => {
  const { control } = useFormContext();

  return (
    <div className="RentCheckboxContainer mb-5 flex items-center gap-x-2">
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Checkbox
              id={name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            {label ? (
              <label htmlFor={name} className="flex gap-x-1 ">
                {" "}
                I agree to the
                <span className="font-bold text-blue-700 cursor-pointer ">
                  <Dialog>
                    <DialogTrigger asChild>
                      <p> terms and conditions </p>
                    </DialogTrigger>
                    <DialogContent className=" ">
                      <DialogHeader>
                        <DialogTitle className="mb-4">
                          Terms and conditions
                        </DialogTitle>
                        <DialogDescription>
                          <p className="mb-4">
                            All bookings must be made through the system. Verbal
                            or offline bookings will not be recognized. Bookings
                            are not guaranteed until approved by an admin. The
                            user must complete payment for the rental before the
                            car can be picked up or delivered.
                          </p>
                          <p className="mb-4">
                            Payment must be completed via the payment method
                            provided on the platform. Users will be charged
                            based on the car's price per hour and the total
                            rental duration. All payments are non-refundable
                            once the rental period has started unless otherwise
                            specified by the admin.
                          </p>
                          <p className="mb-4">
                            {" "}
                            Users can cancel their booking request before admin
                            approval without any penalty. Once a booking is
                            approved, users must contact the admin to cancel,
                            and cancellation fees may apply. Admins reserve the
                            right to cancel a booking due to unavailability,
                            user misconduct, or other reasonable circumstances.
                          </p>
                          <p className="mb-4">
                            The platform is not responsible for any accidents,
                            damages, or injuries that occur during the rental
                            period. Users and admins must resolve these issues
                            independently. The platform provides a booking
                            service but does not own the cars or manage user
                            interactions beyond facilitating bookings and
                            payments.
                          </p>
                          <p className="mb-4">
                            Any personal information provided by users or admins
                            will be used solely for the purposes of managing
                            bookings and rentals. The platform will not sell or
                            distribute personal information to third parties
                            without consent.
                          </p>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </span>
              </label>
            ) : null}
            {error && (
              <p className="text-xs font-medium text-red-600">
                {error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default RentCheckbox;
