import { createTV } from "tailwind-variants";

export const tv_base_ui = /* @__PURE__ */ createTV({ twMerge: true })

/**
 * Don't add / at the end or before filename
 * @param filename 
 * @returns url
 */
export function getStorageUrl(filename: string) {
    return useRuntimeConfig().public.storage + '/' + filename.trim()
}