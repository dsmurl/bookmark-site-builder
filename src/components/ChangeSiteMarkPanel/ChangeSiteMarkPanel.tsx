import React from "react";
import {
  Content,
  FormRow,
  FormBlock,
  ActionArea,
} from "./ChangeSiteMarkPanel.styled";
import { TextField, Button } from "../ui-kit";
import { useSiteMark } from "../../hooks/useSiteMark";
import { useChangeSiteMarkFormData } from "./useChangeSiteMarkFormData";

type ChangeSiteMarkPanelType = {
  closeModal?: () => void;
};

export const ChangeSiteMarkPanel: React.FC<ChangeSiteMarkPanelType> = ({
  closeModal,
}) => {
  const { targetSiteMark, setTargetSiteMark, isLoading } = useSiteMark();
  const [formState, setFormState] = useChangeSiteMarkFormData({
    siteMark: targetSiteMark,
  });

  const submitClicked = async () => {
    await setTargetSiteMark(formState.siteMark);

    closeModal && closeModal();
  };

  return (
    <Content>
      <h2>Target Site Mark</h2>
      <FormRow>
        <TextField
          label="Mark"
          type="text"
          fullWidth
          value={formState.siteMark}
          onChange={(e) => setFormState({ siteMark: e.target.value })}
        />
      </FormRow>
      <ActionArea>
        <Button
          variant="contained"
          disabled={!formState.isReady || isLoading}
          onClick={(e) => submitClicked()}
        >
          {isLoading ? "Building" : "Build Site"}
        </Button>
      </ActionArea>
    </Content>
  );
};
