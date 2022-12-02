import React from "react";
import {
  Content,
  FormRow,
  FormBlock,
  ActionArea,
} from "./AddArticlePanel.styled";
import { TextField, Button } from "../ui-kit";
import { useArticles } from "../../hooks/useArticles";
import { useAddArticleFormData } from "./useAddArticleFormData";

type AddArticlePanel = {
  closeModal?: () => void;
};

export const AddArticlePanel: React.FC<AddArticlePanel> = ({ closeModal }) => {
  const [formState, setFormState] = useAddArticleFormData();
  const { createArticle, isLoading } = useArticles();

  const submitClicked = async () => {
    await createArticle({
      title: formState.title,
      url: formState.url,
    });

    closeModal && closeModal();
  };

  return (
    <Content>
      <h2>Add Article</h2>
      <FormRow>
        <TextField
          label="Title"
          type="text"
          fullWidth
          value={formState.title}
          onChange={(e) => setFormState({ title: e.target.value })}
        />
      </FormRow>
      <FormRow>
        <TextField
          label="Url"
          fullWidth
          value={formState.url}
          onChange={(e) => setFormState({ url: e.target.value })}
        />
      </FormRow>
      <FormRow>
        <FormBlock>
          <TextField
            name="description"
            label="Description"
            multiline
            rows={5}
            fullWidth
            value={formState.description}
            onChange={(e) => setFormState({ description: e.target.value })}
          />
        </FormBlock>
      </FormRow>
      <ActionArea>
        <Button
          variant="contained"
          disabled={!formState.isReady || isLoading}
          onClick={(e) => submitClicked()}
        >
          {isLoading ? "Saving" : "Add Article"}
        </Button>
      </ActionArea>
    </Content>
  );
};
