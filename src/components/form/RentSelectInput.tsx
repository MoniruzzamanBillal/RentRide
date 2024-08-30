import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type TSelect = {
  name: string;
  label: string;
  options: { name: string; value: string }[];
};

const RentSelectInput = ({ name, label, options }: TSelect) => {
  return (
    <div className="CamperSelectContainer mb-5 flex flex-col gap-y-1 ">
      {label ? label : null}

      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <>
            <Select
              {...field}
              onValueChange={field.onChange}
              value={field.value || ""}
            >
              <SelectTrigger className=" border border-gray-400 outline-none ring-none focus:ring-none ">
                <SelectValue placeholder={label} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {options &&
                    options?.map((item, ind) => (
                      <SelectItem key={ind} value={item?.name}>
                        {item?.value}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
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

export default RentSelectInput;
