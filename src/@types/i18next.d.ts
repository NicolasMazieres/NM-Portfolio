import { resources } from '../i18n/config';

declare module 'i18n' {
  interface CustomTypeOptions {
    resources: typeof resources.fr;
  }
}