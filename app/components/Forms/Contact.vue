<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
  import type { FormError, FormSubmitEvent } from '@nuxt/ui';

  const state = reactive({
    email: undefined,
    message: undefined,
    name: undefined,
  });

  const validate = (state: any): FormError[] => {
    const errors = [];
    if (!state.email) errors.push({ name: 'email', message: 'Required' });
    if (!state.message) errors.push({ name: 'message', message: 'Required' });
    if (!state.name) errors.push({ name: 'name', message: 'Required' });
    return errors;
  };

  const toast = useToast();
  async function onSubmit(event: FormSubmitEvent<any>) {
    toast.add({
      title: 'Success',
      description: 'The form has been submitted.',
      color: 'success',
    });
    console.log(event.data);
  }
</script>

<template>
  <UForm
    :validate="validate"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormField label="Name" name="name">
      <UInput v-model="state.name" />
    </UFormField>
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Message" name="message">
      <UTextarea
        v-model="state.message"
        color="neutral"
        :maxrows="8"
        :autoresize="true"
        :rows="4"
        placeholder="Your message here..."
      />
    </UFormField>

    <UButton type="submit" icon="i-lucide:send" block>Send</UButton>
  </UForm>
</template>
