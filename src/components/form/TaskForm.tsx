"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Device, Status } from "@/types/task";
import { Task } from "@/types/task";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { formSchema, taskFormSchema } from "@/schemas/taskFormSchema";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { fetchAddTask } from "@/lib/actions";

interface Props {
  setShowSheet: React.Dispatch<boolean>;
  boardStatus: Status
}

export default function TaskForm({ setShowSheet, boardStatus }: Props) {
  const form = useForm<taskFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
      devices: [],
    },
  });

  const devices: Array<{ id: Device, label: string }> = [
    {
      id: "web",
      label: "Web",
    },
    {
      id: "mobile",
      label: "Mobile",
    },
  ]

  async function onSubmit(values: taskFormSchema) {
    const { ...data } = values

    const time = new Date() 

    const task: Omit<Task, "id"> = { ...data, status: boardStatus, time }

    await fetchAddTask(task)

    setShowSheet(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tarefa</FormLabel>
              <FormControl>
                <Textarea placeholder="tarefa..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prioridade</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a prioridade da tarefa." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="low">Baixa</SelectItem>
                  <SelectItem value="medium">Média</SelectItem>
                  <SelectItem value="high">Alta</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="devices"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Dispositivos</FormLabel>
              </div>
              {devices.map((device) => (
                <FormField
                  key={device.id}
                  control={form.control}
                  name="devices"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={device.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(device.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, device.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== device.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {device.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Adicionar</Button>
      </form>
    </Form>
  );
}
