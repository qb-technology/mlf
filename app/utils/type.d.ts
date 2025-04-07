import type {
    RouteLocationAsRelativeGeneric,
    RouteLocationAsPathGeneric,
} from '#vue-router';

export interface SocialLinks { facebook: string; x: string; linkedin: string }

interface ContactLink {
    label: string,
    url?: string | RouteLocationAsPathGeneric | RouteLocationAsRelativeGeneric | undefined
}

interface Address {
    head_office?: string | string[],
    branch_office?: string | string[]
}

interface ContactI {
    links: Array<ContactLink>,
    address: Address,
    social: SocialLinks

}