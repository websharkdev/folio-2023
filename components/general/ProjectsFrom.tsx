import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createProject } from "@/server/action";
import { ProjectsSchema } from "@/types/projects";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { format } from "date-fns";

type Props = {};
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const PorjectsForm = (props: Props) => {
  const defaultValues = {
    name: "",
    link: "",
    type: "company",
    tooltip_title: "",
    tooltip_text: "",
    duration: "",
  };
  const form = useForm<z.infer<typeof ProjectsSchema>>({
    resolver: zodResolver(ProjectsSchema),
    defaultValues,
  });

  const { execute, status } = useAction(createProject, {
    onSuccess(data) {
      if (data.error) console.log(data.error);
      form.reset(defaultValues);
    },
  });

  const onSubmit = (values: z.infer<typeof ProjectsSchema>) => {
    execute(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Create new project</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Link" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder="Type"
                      className="text-left justify-start"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="company">company</SelectItem>
                  <SelectItem value="pet-projects">pet-projects</SelectItem>
                  <SelectItem value="open-source">open-source</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Duration" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tooltip_title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Tooltip Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tooltip_text"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Tooltip Text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          disabled={status === "executing"}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default PorjectsForm;
