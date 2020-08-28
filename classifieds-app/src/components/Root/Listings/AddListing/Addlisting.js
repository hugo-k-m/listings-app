import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import Textarea from "#root/components/shared/Textarea";
import TextInput from "#root/components/shared/TextInput";

const Button = styled.button`
  display: inline-block;
  margin-top: 0.5rem;
`;

const Form = styled.form`
  background-color: ${(props) => props.theme.whiteSmoke};
  margin-top: 1rem;
  padding: 1rem;
`;

const Label = styled.label`
  display: block;

  :not(:first-child) {
    margin-top: 0.5rem;
  }
`;

const LabelText = styled.strong`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const AddListing = () => {
  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async ({ description, title }) => {
    console.log(description, title);
  });

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        <LabelText>Tittle</LabelText>
        <TextInput
          disabled={isSubmitting}
          name="title"
          ref={register}
          type="text"
        />
      </Label>
      <Label>
        <LabelText>Description</LabelText>
        <Textarea disabled={isSubmitting} name="description" ref={register} />
      </Label>
      <Button disabled={isSubmitting} type="submit">
        Add Listing
      </Button>
    </Form>
  );
};

export default AddListing;
