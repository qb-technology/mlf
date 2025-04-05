import type { ButtonProps } from "@nuxt/ui";

export function qbGetColor(txt: ButtonProps['color']) {
    const cols = {
        primary: "var(--ui-primary)",
        secondary: "var(--ui-secondary)",
        success: "var(--ui-success)",
        info: "var(--ui-info)",
        warning: "var(--ui-warning)",
        error: "var(--ui-error)",
        neutral: "var(--ui-neutral)"
    }
    return txt ? cols[txt] : ''
}