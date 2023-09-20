import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import RJSF from '@rjsf/core';

const schema = {
  title: 'Todo',
  type: 'object',
  required: ['title'],
  properties: {
    title: { type: 'string', title: 'Title', default: 'A new task' },
    done: { type: 'boolean', title: 'Done?', default: false },
  },
};

const log = (type) => console.log.bind(console, type);

export const Form = () => (
  <RJSF
    schema={schema}
    validator={validator}
    onChange={log('changed')}
    onSubmit={log('submitted')}
    onError={log('errors')}
  />
);
