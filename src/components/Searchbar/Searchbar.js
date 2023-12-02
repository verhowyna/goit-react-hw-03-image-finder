import { GrSearch } from 'react-icons/gr';
import { Formik, Form, Field } from 'formik';

import css from './Searchbar.module.css';

export const Searchbar = ({ addQuery }) => {
  return (
    <Formik
      initialValues={{
        query: '',
      }}
      onSubmit={(values, actions) => {
        addQuery(values);
        actions.resetForm();
      }}
    >
      <div className={css.wraper}>
        <Form className={css.searchWrap}>
          <button className={css.searchBtn} type="submit">
            <GrSearch size="20" />
          </button>

          <Field
            className={css.search}
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
            name="query"
          />
        </Form>
      </div>
    </Formik>
  );
};
