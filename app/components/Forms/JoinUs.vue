<script setup lang="ts">
  import * as z from 'zod';
  import type { FormSubmitEvent } from '@nuxt/ui';

  const schema = z.object({
    email: z.string().email('Invalid email'),
    first_name: z.string(),
    last_name: z.string(),
    password: z.string().optional(),
  });

  type Schema = z.output<typeof schema>;

  const state = reactive<Partial<Schema>>({
    email: undefined,
    first_name: undefined,
    last_name: undefined,
    password: undefined,
  });

  const toast = useToast();
  async function onSubmit(event: FormSubmitEvent<Schema>) {
    toast.add({
      title: 'Success',
      description: 'The form has been submitted.',
      color: 'success',
    });
    console.log(event.data);
  }
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-5" @submit="onSubmit">
    <div class="grid md:grid-cols-2 gap-5">
      <UFormField label="First Name" name="first_name">
        <UInput v-model="state.first_name" />
      </UFormField>
      <UFormField label="Last Name" name="last_name">
        <UInput v-model="state.last_name" />
      </UFormField>
    </div>
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <FormsInputPassword v-model="state.password" />

    <UButton type="submit" block>Submit</UButton>
  </UForm>
</template>
