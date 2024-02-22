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
import { createProduct } from "@/server/action";
import { ProductSchema } from "@/types/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
type Props = {};

const ContactsForm = (props: Props) => {
  const defaultValues = {
    post: "",
    link: "",
  };
  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues,
  });

  const { execute, status } = useAction(createProduct, {
    onSuccess(data) {
      console.log(data.error);
      form.reset(defaultValues);
    },
  });

  const onSubmit = (values: z.infer<typeof ProductSchema>) => {
    execute(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="post"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Leave your review</FormLabel>
              <FormControl>
                <Input placeholder="Post" {...field} />
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

export default ContactsForm;
