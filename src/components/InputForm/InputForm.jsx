import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormContainer, Lable, Input, Button } from './InputForm.styled';

export const InputForm = ({ onSubmit }) =>{
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const data = { name, phone };

  const onInputName = event => {
    setName(event.target.value);
  };

  const onInputPhone = event => {
    setPhone(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(data);
    formReset();
  };

  const formReset = () => {
    setName('');
    setPhone('');
  };


   
    return (
      <FormContainer onSubmit={handleSubmit}>
        <Lable>
          Name:
          <Input
            type="text"
            name="name"
            value={name}
            onChange={onInputName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Lable>

        <Lable>
          Phone:
          <Input
            type="tel"
            name="number"
            value={phone}
            onChange={onInputPhone}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Lable>

        <Button type="submit">Add contact</Button>
      </FormContainer>
    );
  }


InputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};