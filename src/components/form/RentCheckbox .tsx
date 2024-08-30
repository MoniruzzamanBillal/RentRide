import { Controller, useFormContext } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";

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
            {label ? <label htmlFor={name}>{label}</label> : null}
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
