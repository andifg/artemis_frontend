import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

import { useClient } from "@/hooks/useClient";
import { MeatPortionService } from "@/client/meatPortionService";
import { BodyCreateMeatPortion } from "@/client/types";
import { useAuthentication } from "@/hooks/useAuthentication";

const formSchema = z.object({
  date: z.date(),
  portionSize: z.enum(["small", "medium", "large"]),
  notes: z.string().max(20).optional(),
});

type useAddMealFormReturn = {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
};

type useAddMealFormProps = {
  onClose: () => void;
};

function useAddMealForm({
  onClose,
}: useAddMealFormProps): useAddMealFormReturn {
  const { getUser } = useAuthentication();

  const user = getUser();

  const currentUUID = uuidv4();

  const [callClientServiceMethod] = useClient();

  const sendData = (body: BodyCreateMeatPortion) => {
    callClientServiceMethod({
      function: MeatPortionService.CreateMeatPortion,
      args: [body, user.id],
    }).then((response) => {
      console.log(response);
    });
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("submit");
    console.log(values);

    sendData({
      size: values.portionSize,
      ID: currentUUID,
      date: values.date,
    });

    onClose();
  }

  return { onSubmit };
}

export { useAddMealForm, formSchema };
