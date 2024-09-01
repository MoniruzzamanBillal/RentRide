import { Controller } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";

type TMultiSelect = {
  name: string;
  label: string;
  options: { name: string; value: string }[];
};

const animatedComponents = makeAnimated();

const RentMultiSelectInput = ({ name, label, options }: TMultiSelect) => {
  const selectOptions = options?.map((item) => ({
    label: item?.name,
    value: item?.value,
  }));

  return (
    <div className="CamperSelectContainer mb-5 flex flex-col gap-y-1 ">
      {label ? label : null}

      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <>
            <Select
              {...field}
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={selectOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(selectedOptions) => {
                field.onChange(
                  selectedOptions
                    ? selectedOptions?.map((option) => option?.value)
                    : []
                );
              }}
              value={selectOptions?.filter((option) =>
                field?.value?.includes(option?.value)
              )}
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

export default RentMultiSelectInput;
