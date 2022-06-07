import { useState } from "react";

const useFormValidation = initialValidation => {
  const [formValidation, setFormValidation] = useState(initialValidation);

  const validateForm = (key, isValid) => {
    setFormValidation(prev => {
      const newFormValidation = { ...prev };

      newFormValidation[key] = isValid;

      return newFormValidation;
    });
  };

  return { formValidation, validateForm };
};

export default useFormValidation;
