import React from "react";
import { Content, FormBlock } from "./AddArticlePanel.styled";
import { useAddArticleFormData } from "./useAddArticleFormData";

export const AddArticlePanel: React.FC = () => {
  const [formState, setFormState] = useAddArticleFormData();

  const submitClicked = () => {
    console.log("  +++ submitClicked: ", formState);
  };

  return (
    <Content>
      <p>Add Article Panel</p>
      <FormBlock>Title:</FormBlock>
      <FormBlock>
        <input
          type="text"
          value={formState.title}
          onChange={(e) => setFormState({ title: e.target.value })}
        />
      </FormBlock>
      <div>
        Url:{" "}
        <input
          type="text"
          value={formState.url}
          onChange={(e) => setFormState({ url: e.target.value })}
        />
      </div>
      <div>
        Description:{" "}
        <input
          type="text"
          value={formState.description}
          onChange={(e) => setFormState({ description: e.target.value })}
        />
      </div>
      <div>
        <input
          type="button"
          value="Add"
          disabled={!formState.isReady}
          onClick={(e) => submitClicked()}
        />
      </div>
    </Content>
  );
};
