import { z } from "zod"

export const formSchema = z.object({
  content: z.string({ required_error: "Descreva o conteúdo da tarefa." }),
  priority: z.enum(["low", "medium", "high"], { required_error: "Selecione uma prioridade." }),
  devices: z.array(z.enum(["web", "mobile"])).refine((value) => value.some((device) => device), {
    message: "Selecione pelo menos um dispositivo.",
  }),
})

export type taskFormSchema = z.infer<typeof formSchema>