import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Alert,
  StyledButton,
  StyledErrorMessage,
  StyledField,
  StyledForm,
} from './PhonebookForm.styled';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Required')
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇґҐ]+([' -]?[a-zA-Zа-яА-ЯіІїЇґҐ ])*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: Yup.string()
    .required('Required')
    .matches(
      /\+?\d{1,4}[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const PhonebookForm = ({ onAdd }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          onAdd({ ...values });
          actions.resetForm();
        }}
      >
        <StyledForm>
          <label>
            Name
            <StyledField type="text" name="name" />
            <StyledErrorMessage name="name" component={Alert} />
          </label>

          <label>
            Number
            <StyledField type="tel" name="number" />
            <StyledErrorMessage name="number" component={Alert} />
          </label>

          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      </Formik>
    </div>
  );
};
