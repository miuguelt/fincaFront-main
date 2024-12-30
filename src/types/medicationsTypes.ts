import { Treatments } from "./treatmentsTypes";

export type  route_administration = "Oral" | "Inyección" | "Intranasal" | "Tópica";

export interface Medications{
    id?: number;
    name: string;
    description: string;
    indications: string;
    contraindications: string;
    route_administration: route_administration;
    availability: boolean | string;

    treatments?: Treatments[];
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
  }