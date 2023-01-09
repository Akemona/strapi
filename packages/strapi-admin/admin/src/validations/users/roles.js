import * as yup from 'yup';
import { translatedErrors } from '@akemona-org/strapi-helper-plugin';

const schema = {
  roles: yup.array().min(1).required(translatedErrors.required),
};

export default schema;
