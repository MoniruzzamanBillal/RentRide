import { Controller, useFormContext } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
type TInput = {
  name: string;
  label: string;
};

const RentDatePicker = ({ label, name }: TInput) => {
  const { control } = useFormContext();
  return (
    <div className="RentInputContainer mb-5 flex flex-col gap-y-1">
      {label ? <label htmlFor={name}>{label}</label> : null}

      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <DatePicker
              selected={field.value}
              onChange={field.onChange}
              showTimeSelect
              dateFormat="d-MMM-yyyy ,h:mm aa"
              className="border border-gray-400 py-2 px-3 rounded-md "
            />
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

export default RentDatePicker;
