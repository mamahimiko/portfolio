"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { useForm as useReactHookForm } from "react-hook-form";
import { useForm as useFormspreeForm, ValidationError } from "@formspree/react";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  mail: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message should be longer"),
});




export default function ContactForm() {
  const [state, handleSubmit] = useFormspreeForm(process.env.NEXT_PUBLIC_FORM);


  const form = useReactHookForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mail:"",
      message:"",
    },
  });

  const onSubmit = async (values) => {
    await handleSubmit({
    target: {
      elements: {
        name: {value: values.name},
        email: {value: values.mail},
        message: {value: values.message},
      },
    },
    });
  };

  if (state.succeeded) {
    return <p>Thanks for your message!</p>
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="py-5 md:py-8  w-sm md:w-lg bg-yellow-50"
                  placeholder="Your name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mail"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="py-5 md:py-8 w-sm md:w-lg bg-yellow-50"
                  placeholder="Your Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Message"
                  className="py-5  md:py-8 h-36 w-sm md:w-lg bg-yellow-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={state.submitting}>Send Message</Button>
      </form>
    </Form>
  );
}
