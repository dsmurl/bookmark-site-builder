import React from "react";
import {
  Content,
  FormRow,
  FormBlock,
  Title,
  ActionArea,
} from "./AddArticlePanel.styled";
import { Input, Textarea, Button } from "@nextui-org/react";

import { useAddArticleFormData } from "./useAddArticleFormData";

export const AddArticlePanel: React.FC = () => {
  const [formState, setFormState] = useAddArticleFormData();

  const submitClicked = () => {
    console.log("  +++ submitClicked: ", formState);
  };

  return (
    <Content>
      <h2>Add Article</h2>
      <FormRow>
        <Input
          labelPlaceholder="Title"
          type="text"
          width="100%"
          value={formState.title}
          onChange={(e) => setFormState({ title: e.target.value })}
        />
      </FormRow>
      <FormRow>
        <Input
          labelPlaceholder="Url"
          width="100%"
          value={formState.url}
          onChange={(e) => setFormState({ url: e.target.value })}
        />
      </FormRow>
      <FormRow>
        <FormBlock>
          <Textarea
            labelPlaceholder="Description"
            name="description"
            rows={5}
            fullWidth
            value={formState.description}
            onChange={(e) => setFormState({ description: e.target.value })}
          />
        </FormBlock>
      </FormRow>
      <ActionArea>
        <Button
          size="sm"
          rounded={false}
          disabled={!formState.isReady}
          onClick={(e) => submitClicked()}
        >
          Add
        </Button>
      </ActionArea>
    </Content>
  );
};
