export class Element {
    visibility: boolean;
    required: boolean;
    uniqueId: string;
    order: number;
    fieldName: string;
    fieldType: string;

    constructor({visibility = false, required = false, uniqueId = '', order = null, fieldName = '', fieldType = 'text'}) {
        this.visibility = visibility;
        this.required = required;
        this.uniqueId = uniqueId;
        this.order = order;
        this.fieldName = fieldName;
        this.fieldType = fieldType;
    }
}