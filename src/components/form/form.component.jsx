import { useState } from "react";
import "./form.styles.scss";

export function Form(props) {
  const {
    fields,
    headerText,
    submitButtonText = "Submit",
    onSubmit,
    onChange,
  } = props;

  const [formFields, setFormFields] = useState(fields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newFormFields = { ...formFields };

    newFormFields[name] = {
      ...formFields[name],
      value,
    };

    setFormFields(newFormFields);

    if (onChange) {
      onChange(newFormFields);
    }
  };

  const onSubmitForm = (event) => {
    onSubmit(event);
    setFormFields({ ...fields });
  };

  return (
    <div className="Form">
      <div className="Form-Header">
        <h1 className="Form-Header-Title">{headerText}</h1>
      </div>

      <form className="Form-Body" onSubmit={onSubmitForm}>
        {Object.keys(formFields).map((fieldKey) => {
          const field = formFields[fieldKey];
          return (
            <div className="Form-Field-Wrapper" key={fieldKey}>
              <input
                className={`Form-Field-Input-${field.type}${
                  field.value !== "" ? "_isFilled" : ""
                }`}
                type={field.type}
                required={field.required}
                defaultValue={field.defaultValue}
                value={field.value}
                placeholder={fields.placeholder}
                name={fieldKey}
                onChange={handleChange}
                />
                {field.label && (
                  <label
                    className={`Form-Field-Label${
                      field.value !== "" ? "_isFilled" : ""
                    }`}
                  >
                    {field.label}
                  </label>
                )}
            </div>
          );
        })}

        <button type="submit">{submitButtonText}</button>
      </form>
    </div>
  );
}

export default Form;
