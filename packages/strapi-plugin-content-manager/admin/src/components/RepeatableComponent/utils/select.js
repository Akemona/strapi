import { useContentManagerEditViewDataManager } from '@akemona-org/strapi-helper-plugin';

function useSelect() {
  const { addRepeatableComponentToField, formErrors } = useContentManagerEditViewDataManager();

  return {
    addRepeatableComponentToField,
    formErrors,
  };
}

export default useSelect;
