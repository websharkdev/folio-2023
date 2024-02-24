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
type Props = {};
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PorjectsForm = (props: Props) => {
  const defaultValues = {
    name: "",
    link: "",
    type: "company",
    tooltip_title: "",
    tooltip_text: "",
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
              <FormControl>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem {...field}>company</SelectItem>
                    <SelectItem {...field}>pet-projects</SelectItem>
                    <SelectItem {...field}>open-source</SelectItem>
                  </SelectContent>
                </Select>
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
